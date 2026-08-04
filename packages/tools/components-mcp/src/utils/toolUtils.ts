import {
  CONSTANTS,
  type AssetKind,
  type ColorTokenCategory,
  type ComponentProps,
  type Framework,
  type RegistryValue,
} from '../common';

function getStringArg(args: Record<string, unknown>, key: string): string | undefined {
  const value = args[key];

  return typeof value === 'string' ? value : undefined;
}

function getNumberArg(args: Record<string, unknown>, key: string): number | undefined {
  const value = args[key];

  return typeof value === 'number' ? value : undefined;
}

function getBooleanArg(args: Record<string, unknown>, key: string): boolean | undefined {
  const value = args[key];

  return typeof value === 'boolean' ? value : undefined;
}

function getComponentNameArg(args: Record<string, unknown>): string {
  const componentName = getStringArg(args, 'componentName') ?? getStringArg(args, 'component');

  if (!componentName) {
    throw new Error('A componentName value is required.');
  }

  return componentName;
}

function getAssetNameArg(args: Record<string, unknown>): string {
  const assetName = getStringArg(args, 'assetName') ?? getStringArg(args, 'asset');

  if (!assetName) {
    throw new Error('An assetName value is required.');
  }

  return assetName;
}

function getAssetKindArg(args: Record<string, unknown>, key = 'kind'): AssetKind | undefined {
  const value = getStringArg(args, key);

  if (value === undefined) {
    return undefined;
  }

  if (value === 'icon' || value === 'illustration' || value === 'brand-visual' || value === 'animation') {
    return value;
  }

  throw new Error(`Unsupported asset kind "${value}". Use "icon", "illustration", "brand-visual", or "animation".`);
}

function getColorTokenCategoryArg(args: Record<string, unknown>, key = 'category'): ColorTokenCategory | undefined {
  const value = getStringArg(args, key);

  if (value === undefined) {
    return undefined;
  }

  if (value === 'aaos' || value === 'additional-theme' || value === 'core' || value === 'theme') {
    return value;
  }

  throw new Error(`Unsupported color token category "${value}". Use "core", "theme", "aaos", or "additional-theme".`);
}

function getPropsArg(args: Record<string, unknown>): ComponentProps {
  const value = args.props;

  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return {};
  }

  return Object.entries(value as Record<string, unknown>).reduce<ComponentProps>((props, [key, propValue]) => {
    if (typeof propValue === 'string' || typeof propValue === 'number' || typeof propValue === 'boolean') {
      return {
        ...props,
        [key]: propValue,
      };
    }

    return props;
  }, {});
}

function getFrameworkArg(args: Record<string, unknown>): Framework {
  const value = getStringArg(args, 'framework') ?? CONSTANTS.DEFAULT_FRAMEWORK;

  if (value === 'web-component' || value === 'angular' || value === 'react') {
    return value;
  }

  throw new Error(`Unsupported framework "${value}". Use "web-component", "angular", or "react".`);
}

function parseAttributeValue(value: string | undefined): RegistryValue {
  if (value === undefined) {
    return true;
  }
  if (value === 'true') {
    return true;
  }
  if (value === 'false') {
    return false;
  }
  if (/^-?\d+(?:\.\d+)?$/.test(value)) {
    return Number(value);
  }

  return value;
}

function parsePropsFromSnippet(code: string): { componentName?: string; props: ComponentProps; children?: string } {
  const tagMatch = code.match(/<([a-z0-9-]+)([^>]*)>([\s\S]*?)<\/\1>/i)
    ?? code.match(/<([a-z0-9-]+)([^>]*)\/?>/i);
  if (!tagMatch) {
    return { props: {} };
  }

  const [, tagName, rawAttributes, rawChildren] = tagMatch;
  const attributePattern = /\s([a-zA-Z][\w-]*)(?:=(?:"([^"]*)"|'([^']*)'|\{([^}]+)\}))?/g;
  const props = [...rawAttributes.matchAll(attributePattern)].reduce<ComponentProps>(
    (currentProps, [, name, doubleQuoted, singleQuoted, expression]) => {
      if (name.startsWith('on')) {
        return currentProps;
      }

      return {
        ...currentProps,
        [name]: parseAttributeValue(doubleQuoted ?? singleQuoted ?? expression),
      };
    },
    {},
  );

  return {
    componentName: tagName,
    props,
    children: rawChildren?.trim(),
  };
}

export {
  getAssetKindArg,
  getAssetNameArg,
  getBooleanArg,
  getColorTokenCategoryArg,
  getComponentNameArg,
  getFrameworkArg,
  getNumberArg,
  getPropsArg,
  getStringArg,
  parsePropsFromSnippet,
};
