import type {
  AssetRegistryEntry,
  ColorTokenRegistryEntry,
  ComponentProperty,
  ComponentReference,
  ComponentRegistryEntry,
  RegistryValue,
  ValidationIssue,
} from '../common';

function formatValue(value: RegistryValue | string | undefined): string {
  if (value === undefined || value === '') {
    return 'not specified';
  }

  return `\`${String(value)}\``;
}

function formatValues(values?: RegistryValue[]): string {
  if (!values || values.length === 0) {
    return 'not specified';
  }

  return values.map(value => `\`${String(value)}\``).join(' | ');
}

function formatReferenceList(title: string, references: ComponentReference[]): string {
  if (references.length === 0) {
    return `### ${title}\n\nNone documented.`;
  }

  return [
    `### ${title}`,
    '',
    ...references.map(reference => (
      `- \`${reference.name}\`${reference.description ? ` - ${reference.description}` : ''}`
    )),
  ].join('\n');
}

function formatProperty(property: ComponentProperty): string {
  const lines = [
    `- \`${property.name}\`${property.attribute ? ` / \`${property.attribute}\`` : ''}`,
    `  Type: ${property.type ? `\`${property.type}\`` : 'not specified'}`,
    `  Default: ${formatValue(property.default)}`,
    `  Values: ${formatValues(property.values)}`,
  ];

  if (property.description) {
    lines.push(`  Details: ${property.description.replace(/\n+/g, ' ')}`);
  }

  return lines.join('\n');
}

function formatComponentSummary(component: ComponentRegistryEntry): string {
  return `- ${component.title} (\`${component.tagName}\`) - ${component.summary || 'No summary available.'}`;
}

function formatAssetSummary(asset: AssetRegistryEntry): string {
  return [
    `- ${asset.name}`,
    `(\`${asset.kind}\`, \`${asset.category}\`, \`${asset.format}\`)`,
    `- ${asset.packageName}`,
  ].join(' ');
}

function formatColorTokenSummary(colorToken: ColorTokenRegistryEntry): string {
  const theme = colorToken.theme ? `, \`${colorToken.theme}\`` : '';

  return [
    `- ${colorToken.name}`,
    `(\`${colorToken.category}\`${theme})`,
    `- \`${colorToken.cssVariable}\` = \`${colorToken.resolvedValue}\``,
  ].join(' ');
}

function formatColorTokenDetails(colorToken: ColorTokenRegistryEntry): string {
  const references = colorToken.references.length > 0
    ? colorToken.references.map(reference => `\`${reference}\``).join(', ')
    : 'none';

  return [
    `# ${colorToken.name}`,
    '',
    `CSS variable: \`${colorToken.cssVariable}\``,
    `Category: \`${colorToken.category}\``,
    `Theme: ${colorToken.theme ? `\`${colorToken.theme}\`` : 'not theme-specific'}`,
    `Raw value: \`${colorToken.value}\``,
    `Resolved value: \`${colorToken.resolvedValue}\``,
    `References: ${references}`,
    `Source: \`${colorToken.sourcePath}\``,
    '',
    '## CSS Usage',
    '',
    '```css',
    `color: var(${colorToken.cssVariable});`,
    '```',
    colorToken.description ? ['', '## Description', '', colorToken.description.replace(/\n+/g, ' ')].join('\n') : '',
  ].filter(Boolean).join('\n');
}

function getAssetComponentName(asset: AssetRegistryEntry): string {
  switch (asset.kind) {
    case 'icon':
      return 'mdc-icon';
    case 'illustration':
      return 'mdc-illustration';
    case 'brand-visual':
      return 'mdc-brandvisual';
    case 'animation':
      return 'mdc-animation';
    default:
      return 'Momentum asset component';
  }
}

function formatAssetUsage(asset: AssetRegistryEntry): string {
  switch (asset.kind) {
    case 'icon':
      return [
        '### Web Component',
        '',
        '```html',
        '<mdc-iconprovider icon-set="momentum-icons">',
        `  <mdc-icon name="${asset.name}" size="1.5" length-unit="rem"></mdc-icon>`,
        '</mdc-iconprovider>',
        '```',
        '',
        '### Angular',
        '',
        '```html',
        '<mdc-iconprovider icon-set="momentum-icons">',
        `  <mdc-icon name="${asset.name}" size="1.5" length-unit="rem"></mdc-icon>`,
        '</mdc-iconprovider>',
        '```',
        '',
        'Add `CUSTOM_ELEMENTS_SCHEMA` to the Angular module or standalone component schema.',
      ].join('\n');
    case 'illustration':
      return [
        '### Web Component',
        '',
        '```html',
        '<mdc-illustrationprovider illustration-set="momentum-illustrations">',
        `  <mdc-illustration name="${asset.name}" aria-label="Describe the illustration"></mdc-illustration>`,
        '</mdc-illustrationprovider>',
        '```',
        '',
        '### Angular',
        '',
        '```html',
        '<mdc-illustrationprovider illustration-set="momentum-illustrations">',
        `  <mdc-illustration name="${asset.name}" aria-label="Describe the illustration"></mdc-illustration>`,
        '</mdc-illustrationprovider>',
        '```',
        '',
        'Add `CUSTOM_ELEMENTS_SCHEMA` to the Angular module or standalone component schema.',
      ].join('\n');
    case 'brand-visual':
      return [
        '### Web Component',
        '',
        '```html',
        `<mdc-brandvisual name="${asset.name}" alt-text="Brand name"></mdc-brandvisual>`,
        '```',
        '',
        '### Angular',
        '',
        '```html',
        `<mdc-brandvisual name="${asset.name}" alt-text="Brand name"></mdc-brandvisual>`,
        '```',
        '',
        'Add `CUSTOM_ELEMENTS_SCHEMA` to the Angular module or standalone component schema.',
      ].join('\n');
    case 'animation':
      return [
        '### Web Component',
        '',
        '```html',
        `<mdc-animation name="${asset.name}" loop="false" aria-label="Describe the animation"></mdc-animation>`,
        '```',
        '',
        '### Angular',
        '',
        '```html',
        `<mdc-animation name="${asset.name}" loop="false" aria-label="Describe the animation"></mdc-animation>`,
        '```',
        '',
        'Add `CUSTOM_ELEMENTS_SCHEMA` to the Angular module or standalone component schema.',
      ].join('\n');
    default:
      return 'No usage snippet available.';
  }
}

function formatIssues(issues: ValidationIssue[]): string {
  if (issues.length === 0) {
    return 'No validation issues found.';
  }

  return issues.map(issue => `- ${issue.level.toUpperCase()}: ${issue.message}`).join('\n');
}

export {
  formatAssetSummary,
  formatAssetUsage,
  formatColorTokenDetails,
  formatColorTokenSummary,
  formatComponentSummary,
  formatIssues,
  formatProperty,
  formatReferenceList,
  formatValue,
  formatValues,
  getAssetComponentName,
};
