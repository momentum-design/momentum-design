const path = require('path');

/* eslint-disable max-len */
const rewriteDynamicImportsRollup = ({ packageName }) => {
  let data;

  switch (packageName) {
    case 'animations':
      data = {
        componentFile: /node_modules\/@momentum-design\/components\/dist\/components\/animation\/animation\.component\.js$/,
        dynamicImport: /import\(\s*`@momentum-design\/animations\/([^`]+)`\s*\)/g,
        packageQualifier: '@momentum-design/animations',
      };
      break;
    case 'brand-visuals':
      data = {
        componentFile: /packages\/components\/dist\/components\/brandvisual\/brandvisual\.component\.js$/,
        dynamicImport: /import\(\s*`@momentum-design\/brand-visuals\/([^`]+)`\s*\)/g,
        packageQualifier: 'assets/brand-visuals',
      };
      break;
    case 'icons':
      data = {
        componentFile: /node_modules\/@momentum-design\/components\/dist\/components\/icon\/icon\.component\.js$/,
        dynamicImport: /import\(\s*`@momentum-design\/icons\/([^`]+)`\s*\)/g,
        packageQualifier: '@momentum-design/icons',
      };
      break;
    default:
      throw new Error('Invalid packageName for rewriteDynamicImportsRollup');
  }

  return {
    name: 'rewrite-dynamic-imports-rollup',
    enforce: 'pre',
    async transform(code, id) {
      if (!data.componentFile.test(id)) return null;
      const replaced = code.replace(
        data.dynamicImport,
        (_match, importSubPath) => {
          const packagesPath = path.posix.join(process.cwd(), '../');
          const fullImportPath = path.posix.join(packagesPath, data.packageQualifier, importSubPath);
          const rel = path.relative(path.dirname(id), fullImportPath).replaceAll('\\', '/');
          return `import(\`${rel.startsWith('.') ? rel : `./${rel}`}\`)`;
        },
      );
      return {
        code: replaced,
        map: null,
      };
    },
  };
};

module.exports = { rewriteDynamicImportsRollup };
