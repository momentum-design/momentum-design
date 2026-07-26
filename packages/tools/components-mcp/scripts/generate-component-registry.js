// AI-Assisted
const fs = require('node:fs');
const path = require('node:path');

const COMPONENTS_ROOT = path.resolve(__dirname, '../../../components/src/components');
const OUTPUT_PATH = path.resolve(__dirname, '../src/data/components.registry.ts');

const SOURCE_EXTENSION_PATTERN = /\.(component|constants|types|stories)\.ts$/;

function toKebabCase(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

function toCamelCase(value) {
  return value.replace(/-([a-z0-9])/g, (_, character) => character.toUpperCase());
}

function toPascalCase(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .split(/[\s-_]+/)
    .filter(Boolean)
    .map(part => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join('');
}

function readFileIfExists(filePath) {
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
}

function parseFrontmatter(markdown) {
  if (!markdown.startsWith('---')) {
    return { data: {}, content: markdown };
  }

  const endIndex = markdown.indexOf('\n---', 3);
  if (endIndex === -1) {
    return { data: {}, content: markdown };
  }

  const frontmatter = markdown.slice(3, endIndex).trim();
  const content = markdown.slice(endIndex + 4).trim();
  const data = {};

  frontmatter.split('\n').forEach(line => {
    const match = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (!match) {
      return;
    }

    const [, key, rawValue] = match;
    const value = rawValue.trim().replace(/^['"]|['"]$/g, '');
    data[key] = Number.isNaN(Number(value)) ? value : Number(value);
  });

  return { data, content };
}

function parseSections(markdown) {
  const sections = {};
  const matches = [...markdown.matchAll(/^##\s+(.+)$/gm)];

  matches.forEach((match, index) => {
    const title = match[1].trim();
    const start = match.index + match[0].length;
    const end = matches[index + 1]?.index ?? markdown.length;
    sections[title] = markdown.slice(start, end).trim();
  });

  return sections;
}

function parseCodeBlocks(markdown) {
  return [...markdown.matchAll(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g)].map(match => ({
    language: match[1] || 'text',
    code: match[2].trim(),
  }));
}

function parseObjectConstants(source) {
  const constants = {};
  const objectPattern = /const\s+([A-Z0-9_]+)\s*=\s*{([\s\S]*?)^\}\s*as const;/gm;
  const rawObjects = {};
  let match;

  while ((match = objectPattern.exec(source)) !== null) {
    rawObjects[match[1]] = match[2];
  }

  const resolveValue = value => {
    const trimmed = value.trim().replace(/,$/, '');
    const stringMatch = trimmed.match(/^['"](.+)['"]$/);
    const numberMatch = trimmed.match(/^(-?\d+(?:\.\d+)?)$/);
    const booleanMatch = trimmed.match(/^(true|false)$/);
    const memberMatch = trimmed.match(/^([A-Z0-9_]+)\.([A-Z0-9_]+)$/);
    const indexMatch = trimmed.match(/^([A-Z0-9_]+)\[([^\]]+)\]$/);

    if (stringMatch) {
      return stringMatch[1];
    }
    if (numberMatch) {
      return Number(numberMatch[1]);
    }
    if (booleanMatch) {
      return trimmed === 'true';
    }
    if (memberMatch) {
      const [, objectName, key] = memberMatch;
      return constants[objectName]?.[key];
    }
    if (indexMatch) {
      const [, objectName, rawKey] = indexMatch;
      const key = rawKey.replace(/^['"]|['"]$/g, '');
      return constants[objectName]?.[key];
    }

    return trimmed;
  };

  Object.entries(rawObjects).forEach(([objectName, body]) => {
    constants[objectName] = constants[objectName] ?? {};

    body.split('\n').forEach(line => {
      const spreadMatch = line.match(/^\s*\.\.\.([A-Z0-9_]+)/);
      if (spreadMatch) {
        Object.assign(constants[objectName], constants[spreadMatch[1]] ?? {});
        return;
      }

      const entryMatch = line.match(/^\s*(['"]?[\w-]+['"]?)\s*:\s*(.+?),?\s*$/);
      if (!entryMatch) {
        return;
      }

      const key = entryMatch[1].replace(/^['"]|['"]$/g, '');
      constants[objectName][key] = resolveValue(entryMatch[2]);
    });
  });

  return constants;
}

function parseTypeAliases(source, constants) {
  const aliases = {};
  const valueOfPattern = /type\s+(\w+)\s*=\s*ValueOf<typeof\s+([A-Z0-9_]+)>/g;
  const literalUnionPattern = /type\s+(\w+)\s*=\s*([^;]+);/g;
  let match;

  while ((match = valueOfPattern.exec(source)) !== null) {
    aliases[match[1]] = Object.values(constants[match[2]] ?? {});
  }

  while ((match = literalUnionPattern.exec(source)) !== null) {
    if (aliases[match[1]]) {
      continue;
    }

    const values = [...match[2].matchAll(/['"]([^'"]+)['"]/g)].map(valueMatch => valueMatch[1]);
    if (values.length > 0) {
      aliases[match[1]] = values;
    }
  }

  return aliases;
}

function cleanJsDocBlock(block) {
  return block
    .split('\n')
    .map(line => line.replace(/^\s*\*\s?/, '').trim())
    .filter(line => line && !line.startsWith('@'))
    .join('\n')
    .trim();
}

function parseDefaultFromJsDoc(block) {
  return block.match(/@default\s+([^\n]+)/)?.[1]?.trim();
}

function parseJsDocTags(source, tagName) {
  return [...source.matchAll(new RegExp(`@${tagName}\\s+([^\\n]+)`, 'g'))].map(match => {
    const raw = match[1].trim();
    if (tagName === 'slot' && raw.startsWith('-')) {
      return {
        name: 'default',
        description: raw.replace(/^-\s*/, '').trim(),
      };
    }

    const [namePart, ...descriptionParts] = raw.split(/\s+-\s+/);
    return {
      name: namePart.trim() || 'default',
      description: descriptionParts.join(' - ').trim(),
    };
  });
}

function parseDependencies(source) {
  return [...source.matchAll(/@dependency\s+([^\n]+)/g)].map(match => match[1].trim());
}

function parseProperties(componentSource, constants, typeAliases) {
  const properties = [];
  const pattern = /\/\*\*([\s\S]*?)\*\/\s*@property\(([\s\S]*?)\)\s*(?:(?:public|protected|private|override)\s+)*(?:accessor\s+)?(\w+)!?\s*:\s*([^=;]+)(?:=\s*([^;]+))?/g;
  let match;

  while ((match = pattern.exec(componentSource)) !== null) {
    const [, jsDoc, decorator, propertyName, rawType, rawDefault] = match;
    const attributeMatch = decorator.match(/attribute:\s*['"]([^'"]+)['"]/);
    const attributeDisabled = /attribute:\s*false/.test(decorator);
    const values = rawType
      .split('|')
      .flatMap(typePart => typeAliases[typePart.trim()] ?? [...typePart.matchAll(/['"]([^'"]+)['"]/g)].map(valueMatch => valueMatch[1]))
      .filter((value, index, all) => all.indexOf(value) === index);

    properties.push({
      name: propertyName,
      attribute: attributeDisabled ? undefined : attributeMatch?.[1] ?? toKebabCase(propertyName),
      type: rawType.trim(),
      default: parseDefaultFromJsDoc(jsDoc) ?? rawDefault?.trim(),
      values,
      description: cleanJsDocBlock(jsDoc),
      reflected: /reflect:\s*true/.test(decorator),
      source: 'component',
    });
  }

  const defaults = constants.DEFAULTS ?? {};
  Object.entries(defaults).forEach(([key, value]) => {
    const propertyName = toCamelCase(key.toLowerCase().replace(/_/g, '-'));
    const property = properties.find(item => item.name === propertyName);
    if (property && property.default === undefined) {
      property.default = value;
    }
  });

  return properties;
}

function getBalancedObject(source, startIndex) {
  const openIndex = source.indexOf('{', startIndex);
  if (openIndex === -1) {
    return '';
  }

  let depth = 0;
  for (let index = openIndex; index < source.length; index += 1) {
    const character = source[index];
    if (character === '{') {
      depth += 1;
    }
    if (character === '}') {
      depth -= 1;
      if (depth === 0) {
        return source.slice(openIndex + 1, index);
      }
    }
  }

  return '';
}

function parseStoryArgTypes(storySource, constants) {
  const argTypesIndex = storySource.indexOf('argTypes:');
  if (argTypesIndex === -1) {
    return [];
  }

  const argTypesBody = getBalancedObject(storySource, argTypesIndex);
  const properties = [];
  const entryPattern = /(?:^|\n)\s{4}(['"]?[\w-]+['"]?)\s*:\s*{/g;
  let match;

  while ((match = entryPattern.exec(argTypesBody)) !== null) {
    const propertyName = match[1].replace(/^['"]|['"]$/g, '');
    const bodyStart = argTypesBody.indexOf('{', match.index);
    const body = getBalancedObject(argTypesBody, bodyStart);
    const controlMatch = body.match(/control:\s*['"]([^'"]+)['"]/);
    const descriptionMatch = body.match(/description:\s*['"]([^'"]+)['"]/);
    const optionsConstantMatch = body.match(/options:\s*Object\.values\(([A-Z0-9_]+)\)/);
    const optionsLiteralMatch = body.match(/options:\s*\[([\s\S]*?)\]/);
    let values = [];

    if (optionsConstantMatch) {
      values = Object.values(constants[optionsConstantMatch[1]] ?? {});
    } else if (optionsLiteralMatch) {
      values = [...optionsLiteralMatch[1].matchAll(/['"]([^'"]+)['"]/g)].map(valueMatch => valueMatch[1]);
    }

    properties.push({
      name: toCamelCase(propertyName),
      attribute: propertyName.includes('-') ? propertyName : toKebabCase(propertyName),
      type: controlMatch?.[1] ?? 'unknown',
      values,
      description: descriptionMatch?.[1],
      source: 'storybook',
    });
  }

  return properties;
}

function parsePropertyDetails(markdown) {
  const details = {};
  const sectionMatch = markdown.match(/### Property\/Attribute details\s*\n([\s\S]*?)(?=\n### |\n## |$)/);
  if (!sectionMatch) {
    return details;
  }

  const bulletPattern = /^- `([^`]+)`(?:\s*\/\s*`([^`]+)`)?\s+[—-]\s+([\s\S]*?)(?=\n- `|\n### |\n## |$)/gm;
  let match;

  while ((match = bulletPattern.exec(sectionMatch[1])) !== null) {
    const names = [match[1], match[2]].filter(Boolean);
    names.forEach(name => {
      details[toCamelCase(name)] = match[3].trim();
    });
  }

  return details;
}

function mergeProperties(properties, storyProperties, markdownDetails) {
  const merged = new Map();

  [...properties, ...storyProperties].forEach(property => {
    const key = property.name;
    const existing = merged.get(key) ?? {};
    const detail = markdownDetails[key] ?? markdownDetails[toCamelCase(property.attribute ?? '')];

    merged.set(key, {
      ...existing,
      ...property,
      values: [...new Set([...(existing.values ?? []), ...(property.values ?? [])])],
      description: detail ?? property.description ?? existing.description,
    });
  });

  return [...merged.values()].sort((a, b) => a.name.localeCompare(b.name));
}

function parseReactImports(markdown, componentName, title) {
  const imports = [...markdown.matchAll(/import\s+{([^}]+)}\s+from\s+['"]@momentum-design\/components(?:\/dist)?\/react['"]/g)];
  if (imports.length > 0) {
    return imports[0][1].split(',').map(item => item.trim()).filter(Boolean);
  }

  return [toPascalCase(title || componentName)];
}

function buildKeywords(entry) {
  return [
    entry.name,
    entry.title,
    entry.tagName,
    entry.summary,
    ...entry.dependencies,
    ...Object.keys(entry.sections),
  ]
    .join(' ')
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean)
    .filter((keyword, index, all) => all.indexOf(keyword) === index)
    .sort();
}

function buildEntry(componentName) {
  const componentDirectory = path.join(COMPONENTS_ROOT, componentName);
  const knowledgeBasePath = path.join(componentDirectory, 'knowledge-base', `${componentName}.component.md`);
  const componentSourcePath = path.join(componentDirectory, `${componentName}.component.ts`);
  const constantsPath = path.join(componentDirectory, `${componentName}.constants.ts`);
  const typesPath = path.join(componentDirectory, `${componentName}.types.ts`);
  const storiesPath = path.join(componentDirectory, `${componentName}.stories.ts`);
  const markdown = readFileIfExists(knowledgeBasePath);
  const componentSource = readFileIfExists(componentSourcePath);
  const constantsSource = readFileIfExists(constantsPath);
  const typesSource = readFileIfExists(typesPath);
  const storySource = readFileIfExists(storiesPath);
  const { data, content } = parseFrontmatter(markdown);
  const constants = parseObjectConstants(constantsSource);
  const typeAliases = parseTypeAliases(typesSource, constants);
  const tagName = componentSource.match(/@tagname\s+([^\n]+)/)?.[1]?.trim() ?? `mdc-${componentName}`;

  const entry = {
    name: String(data.component ?? componentName),
    title: String(data.title ?? toPascalCase(componentName)),
    tagName,
    summary: String(data.summary ?? ''),
    tier: typeof data.tier === 'number' ? data.tier : undefined,
    source: {
      componentPath: path.relative(path.resolve(__dirname, '../../..'), componentDirectory),
      knowledgeBasePath: path.relative(path.resolve(__dirname, '../../..'), knowledgeBasePath),
    },
    docs: content,
    sections: parseSections(content),
    dependencies: parseDependencies(componentSource),
    api: {
      properties: mergeProperties(
        parseProperties(componentSource, constants, typeAliases),
        parseStoryArgTypes(storySource, constants),
        parsePropertyDetails(content),
      ),
      slots: parseJsDocTags(componentSource, 'slot'),
      events: parseJsDocTags(componentSource, 'event'),
      cssParts: parseJsDocTags(componentSource, 'csspart'),
      cssProperties: parseJsDocTags(componentSource, 'cssproperty'),
      rules: Object.values(parsePropertyDetails(content)),
    },
    examples: parseCodeBlocks(content),
    reactImports: parseReactImports(content, componentName, data.title),
    constants,
  };

  entry.keywords = buildKeywords(entry);

  return entry;
}

function main() {
  const entries = fs
    .readdirSync(COMPONENTS_ROOT, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(componentName => fs.existsSync(path.join(COMPONENTS_ROOT, componentName, 'knowledge-base', `${componentName}.component.md`)))
    .filter(componentName => fs.readdirSync(path.join(COMPONENTS_ROOT, componentName)).some(fileName => SOURCE_EXTENSION_PATTERN.test(fileName)))
    .map(buildEntry)
    .sort((a, b) => a.name.localeCompare(b.name));

  const output = `// AI-Assisted generated by scripts/generate-component-registry.js. Do not edit manually.
import type { ComponentRegistryEntry } from './registry.types';

const componentsRegistry: ComponentRegistryEntry[] = ${JSON.stringify(entries, null, 2)};

export default componentsRegistry;
// End AI-Assisted
`;

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, output);
  console.log(`Generated ${entries.length} component registry entries.`);
}

main();
// End AI-Assisted
