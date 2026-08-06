const fs = require('fs');
const path = require('path');

const PACKAGE_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(PACKAGE_DIR, 'dist');
const PACKAGE_JSON_PATH = path.join(PACKAGE_DIR, 'package.json');
const CUSTOM_ELEMENTS_MANIFEST_PATH = path.join(DIST_DIR, 'custom-elements.json');
const REGISTRY_PATH = path.join(DIST_DIR, 'registry.json');

const COMPONENT_TAG_PREFIX = 'mdc-';
const CUSTOM_ELEMENTS_MANIFEST_REFERENCE = 'dist/custom-elements.json';

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function parseFrontmatter(content) {
  if (!content.startsWith('---')) {
    return {};
  }

  const endIndex = content.indexOf('\n---', 3);
  if (endIndex === -1) {
    return {};
  }

  return content
    .slice(3, endIndex)
    .split('\n')
    .reduce((metadata, line) => {
      const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
      if (!match) {
        return metadata;
      }

      const [, key, rawValue] = match;
      const value = rawValue.trim().replace(/^['"]|['"]$/g, '');
      metadata[key] = value;

      return metadata;
    }, {});
}

function getKnowledgeBasePaths(componentName) {
  const registryPath = path.posix.join(
    'src',
    'components',
    componentName,
    'knowledge-base',
    `${componentName}.component.md`,
  );

  return {
    filePath: path.join(PACKAGE_DIR, ...registryPath.split('/')),
    registryPath,
  };
}

function readKnowledgeBaseMetadata(componentName) {
  const { filePath, registryPath } = getKnowledgeBasePaths(componentName);

  if (!fs.existsSync(filePath)) {
    return { metadata: {} };
  }

  return {
    metadata: parseFrontmatter(fs.readFileSync(filePath, 'utf8')),
    registryPath,
  };
}

function toComponentName(tagName) {
  return tagName.replace(new RegExp(`^${COMPONENT_TAG_PREFIX}`), '');
}

function removeUndefinedProperties(value) {
  return Object.fromEntries(Object.entries(value).filter(([, entryValue]) => entryValue !== undefined));
}

function getComponentDirectory(modulePath) {
  return path.posix.dirname(modulePath);
}

function createComponentEntry(moduleDoc, declaration) {
  const componentName = toComponentName(declaration.tagName);
  const { metadata: knowledgeBaseMetadata, registryPath: knowledgeBasePath } = readKnowledgeBaseMetadata(componentName);
  const componentDirectory = getComponentDirectory(moduleDoc.path);

  return removeUndefinedProperties({
    name: knowledgeBaseMetadata.component || componentName,
    title: knowledgeBaseMetadata.title || declaration.name,
    tagName: declaration.tagName,
    summary: knowledgeBaseMetadata.summary || declaration.description || '',
    imports: {
      webComponent: `@momentum-design/components/${componentDirectory}`,
      react: `@momentum-design/components/react/${componentName}`,
    },
    source: removeUndefinedProperties({
      customElementsManifest: CUSTOM_ELEMENTS_MANIFEST_REFERENCE,
      modulePath: moduleDoc.path,
      declarationName: declaration.name,
      knowledgeBasePath,
    }),
  });
}

function createRegistry(packageJson, manifest) {
  const components = [];

  for (const moduleDoc of manifest.modules ?? []) {
    for (const declaration of moduleDoc.declarations ?? []) {
      if (declaration.tagName) {
        components.push(createComponentEntry(moduleDoc, declaration));
      }
    }
  }

  components.sort((a, b) => a.name.localeCompare(b.name));

  return {
    schemaVersion: 1,
    package: {
      name: packageJson.name,
      version: packageJson.version,
    },
    generatedFrom: {
      customElementsManifest: CUSTOM_ELEMENTS_MANIFEST_REFERENCE,
    },
    components,
  };
}

function main() {
  if (!fs.existsSync(CUSTOM_ELEMENTS_MANIFEST_PATH)) {
    throw new Error('Missing dist/custom-elements.json. Run yarn build:manifest before generating registry.json.');
  }

  const packageJson = readJson(PACKAGE_JSON_PATH);
  const manifest = readJson(CUSTOM_ELEMENTS_MANIFEST_PATH);
  const registry = createRegistry(packageJson, manifest);

  fs.writeFileSync(REGISTRY_PATH, `${JSON.stringify(registry, null, 2)}\n`);
  console.log(`Components registry generated at ${path.relative(PACKAGE_DIR, REGISTRY_PATH)}`);
}

main();
