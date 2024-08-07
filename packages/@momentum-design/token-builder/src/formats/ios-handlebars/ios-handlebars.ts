import { Format as SDFormat, Formatter as SDFormatter } from 'style-dictionary';
import Handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
import CONSTANTS from './constants';

const template = (filePath: string) => Handlebars.compile(
  fs.readFileSync(path.resolve(__dirname, '../../../../', filePath), { encoding: 'utf8' }),
);

Handlebars.registerHelper('isBaseTheme', (themeName) => themeName === 'Light');
Handlebars.registerHelper('isCoreTokens', (destination) => destination.startsWith('core'));
Handlebars.registerHelper('valueIsHex', (value) => value.startsWith('#'));
Handlebars.registerHelper('lowercaseFirst', (value) => value.charAt(0).toLowerCase() + value.slice(1));
Handlebars.registerHelper('hexToUIColor', (hex) => {
  const sanitizedHex = hex.replace(/^#/, '');

  if (sanitizedHex.length === 8) {
    const alpha = (parseInt(sanitizedHex.substring(6, 8), 16) / 255).toFixed(2);
    return `UIColor(hex: 0x${sanitizedHex.substring(0, 6).toUpperCase()}, withAlpha: ${alpha})`;
  } if (sanitizedHex.length === 6) {
    return `UIColor(hex: 0x${sanitizedHex.toUpperCase()})`;
  }

  return '';
});

Handlebars.registerHelper('transformCoreColorName', (name) => {
  // Define the prefix replacements
  const prefixReplacements = {
    mdsColorCore: 'momentum',
    mdsColorDecorative: 'momentum',
  };

  // Check for each prefix and replace it
  for (const [prefix, replacement] of Object.entries(prefixReplacements)) {
    if (name.startsWith(prefix)) {
      return name.replace(prefix, replacement);
    }
  }

  // If no specific prefix is matched, default to replacing 'mdsColor' with 'momentum'
  return name.replace(/^mdsColor/, 'momentum');
});

Handlebars.registerHelper('groupTokens', (tokens) => {
  const groups = {};

  // Define a mapping of invalid names to their alternate values
  const invalidNames = {
    default: 'defaultColor',
  };

  tokens.forEach((token) => {
    const match = token.name.match(/^mdsColorTheme(.*?)([A-Z][a-z]+)(.*)$/);
    if (match) {
      const category = match[2];
      let name = match[3].charAt(0).toLowerCase() + match[3].slice(1);

      // Check if the name is in the invalidNames mapping and replace it if necessary
      if (invalidNames[name]) {
        name = invalidNames[name];
      }

      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push({ name, value: token.value });
    }
  });

  return Object.entries(groups).map(([category, items]) => ({ category, items }));
});

Handlebars.registerHelper('classNameFromPath', (path) => {
  // Extract the file name from the path
  const fileName = path.split('/').pop();

  // Remove the file extension
  const baseName = fileName.replace(/\.[^/.]+$/, '');

  // Remove the word "Stable"
  const cleanedName = baseName.replace(/-stable/i, '');

  // Convert to PascalCase (e.g., "light" -> "Light")
  const className = cleanedName.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');

  return className;
});

class IosHandlebars {
  iosHandlebarsPath: string;

  constructor(iosHandlebarsPath?: string) {
    if (!iosHandlebarsPath) {
      throw new Error('ios handlebars path not found!');
    }
    this.iosHandlebarsPath = iosHandlebarsPath;
  }

  public get formatter(): SDFormatter {
    return ({ dictionary, file }): string => template(this.iosHandlebarsPath!)({
      tokens: dictionary.allTokens,
      destination: file.destination,
      theme: file.destination,
    });
  }

  public get name(): string {
    return IosHandlebars.CONSTANTS.NAME;
  }

  public get sdConfig(): SDFormat {
    return {
      name: this.name,
      formatter: this.formatter,
    };
  }

  public static get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default IosHandlebars;
