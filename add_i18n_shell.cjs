const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

const filesToWrap = [
  'DestinationPage.tsx',
  'ExpeditionPage.tsx',
  'TripItineraryPage.tsx',
  'BlogList.tsx',
  'HomeContent.tsx',
  'NepalPage.tsx',
  'ExpeditionSpecialLayout.tsx'
];

for (const file of filesToWrap) {
  const filePath = path.join(componentsDir, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if it already imports I18nShell
  if (content.includes('I18nShell')) continue;

  // Add imports
  content = content.replace(/(import React[^;]*;)/, "$1\nimport I18nShell from '../i18n/I18nShell';\nimport type { Locale } from '../i18n/i18n';");

  // Find interface Props and add initialLocale?: Locale;
  // This is tricky because the interface name varies.
  // Let's just find `export default ComponentName;` and replace the default export.
  const exportMatch = content.match(/export default ([A-Za-z0-9_]+);/);
  if (exportMatch) {
    const compName = exportMatch[1];

    // Rename the original component to ComponentNameContent
    // Wait, it might be const CompName = ... or function CompName
    content = content.replace(new RegExp(`const ${compName}: React.FC<([^>]+)> =`), `const ${compName}Content: React.FC<$1> =`);
    content = content.replace(new RegExp(`const ${compName} =`), `const ${compName}Content =`);
    content = content.replace(new RegExp(`function ${compName}\\(`), `function ${compName}Content(`);

    // Add wrapper at the end
    const wrapper = `
const ${compName} = (props: any) => (
  <I18nShell initialLocale={props.initialLocale}>
    <${compName}Content {...props} />
  </I18nShell>
);
export default ${compName};
`;
    content = content.replace(`export default ${compName};`, wrapper);
    
    fs.writeFileSync(filePath, content);
    console.log(`Wrapped ${compName} in ${file}`);
  }
}
