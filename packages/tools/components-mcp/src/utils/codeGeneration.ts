// AI-Assisted
import {
  CONSTANTS,
  type ComponentProps,
  type ComponentRegistryEntry,
  type Framework,
  type GeneratedCodeResult,
  type RegistryValue,
} from '../common';

import { toCamelCase } from './naming';
import { validateComponentUsage } from './validation';

function stringifyAttributeValue(value: RegistryValue): string {
  return String(value).replace(/"/g, '&quot;');
}

function formatHtmlAttributes(props: ComponentProps): string {
  return Object.entries(props)
    .filter(([, value]) => value !== undefined && value !== false)
    .map(([name, value]) => (
      value === true ? name : `${name}="${stringifyAttributeValue(value as RegistryValue)}"`
    ))
    .join(' ');
}

function indent(value: string, spaces = 2): string {
  const padding = ' '.repeat(spaces);
  return value.split('\n').map(line => `${padding}${line}`).join('\n');
}

function renderWebComponent(component: ComponentRegistryEntry, props: ComponentProps, children?: string): string {
  const attributes = formatHtmlAttributes(props);
  const openTag = attributes ? `<${component.tagName} ${attributes}>` : `<${component.tagName}>`;
  const importLine = `import "${CONSTANTS.COMPONENT_PACKAGE_NAME}/components/${component.name}";`;

  if (!children?.trim()) {
    return `${importLine}\n\n${openTag}</${component.tagName}>`;
  }

  return `${importLine}\n\n${openTag}\n${indent(children.trim())}\n</${component.tagName}>`;
}

function renderAngular(component: ComponentRegistryEntry, props: ComponentProps, children?: string): string {
  const attributes = formatHtmlAttributes(props);
  const openTag = attributes ? `<${component.tagName} ${attributes}>` : `<${component.tagName}>`;

  if (!children?.trim()) {
    return `${openTag}</${component.tagName}>`;
  }

  return `${openTag}\n${indent(children.trim())}\n</${component.tagName}>`;
}

function formatReactPropValue(value: RegistryValue): string {
  if (typeof value === 'boolean') {
    return value ? '' : '={false}';
  }

  if (typeof value === 'number') {
    return `={${value}}`;
  }

  return `="${String(value).replace(/"/g, '&quot;')}"`;
}

function renderReact(component: ComponentRegistryEntry, props: ComponentProps, children?: string): string {
  const componentName = component.reactImports[0];
  const importLine = [
    `import { ${component.reactImports.join(', ')} }`,
    `from "${CONSTANTS.COMPONENT_PACKAGE_NAME}/react";`,
  ].join(' ');
  const attributes = Object.entries(props)
    .filter(([, value]) => value !== undefined && value !== false)
    .map(([name, value]) => `${toCamelCase(name)}${formatReactPropValue(value as RegistryValue)}`)
    .join(' ');
  const openTag = attributes ? `<${componentName} ${attributes}>` : `<${componentName}>`;

  if (!children?.trim()) {
    return `${importLine}\n\n${openTag}</${componentName}>`;
  }

  return `${importLine}\n\n${openTag}\n${indent(children.trim())}\n</${componentName}>`;
}

function setupNotesForFramework(component: ComponentRegistryEntry, framework: Framework): string[] {
  if (framework === 'angular') {
    return [
      'Register the custom element by importing the component module once in the application bundle.',
      [
        'Angular applications using custom elements should include CUSTOM_ELEMENTS_SCHEMA',
        'in the module or component schema configuration.',
      ].join(' '),
      `Component registration import: import "${CONSTANTS.COMPONENT_PACKAGE_NAME}/components/${component.name}";`,
    ];
  }

  if (framework === 'web-component') {
    return [
      [
        'Register the custom element before use:',
        `import "${CONSTANTS.COMPONENT_PACKAGE_NAME}/components/${component.name}";`,
      ].join(' '),
    ];
  }

  return [`Use the React wrapper from "${CONSTANTS.COMPONENT_PACKAGE_NAME}/react".`];
}

function generateComponentCode(
  component: ComponentRegistryEntry,
  framework: Framework,
  props: ComponentProps,
  children?: string,
): GeneratedCodeResult {
  const validation = validateComponentUsage(component, props, children);
  let code = renderWebComponent(component, props, children);

  if (framework === 'react') {
    code = renderReact(component, props, children);
  } else if (framework === 'angular') {
    code = renderAngular(component, props, children);
  }

  return {
    component,
    framework,
    code,
    setupNotes: setupNotesForFramework(component, framework),
    validation,
  };
}

function defaultPropsForComponent(component: ComponentRegistryEntry): ComponentProps {
  return component.api.properties.reduce<ComponentProps>((props, property) => {
    if (property.default !== undefined && ['variant', 'color', 'size', 'type'].includes(property.name)) {
      return {
        ...props,
        [property.attribute ?? property.name]: property.default as RegistryValue,
      };
    }

    return props;
  }, {});
}

export { defaultPropsForComponent, generateComponentCode };
// End AI-Assisted
