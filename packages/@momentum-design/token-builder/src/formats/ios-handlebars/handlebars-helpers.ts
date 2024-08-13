import Handlebars from 'handlebars';

type Token = {
    name: string;
    value: string;
  };

type GroupedToken = {
    category: string;
    items: { name: string; value: string }[];
};

class HandlebarsHelpers {
  static register(): void {
    Handlebars.registerHelper('isBaseTheme', HandlebarsHelpers.isBaseTheme);
    Handlebars.registerHelper('isCoreTokens', HandlebarsHelpers.isCoreTokens);
    Handlebars.registerHelper('valueIsHex', HandlebarsHelpers.valueIsHex);
    Handlebars.registerHelper('lowercaseFirst', HandlebarsHelpers.lowercaseFirst);
    Handlebars.registerHelper('hexToUIColor', HandlebarsHelpers.hexToUIColor);
    Handlebars.registerHelper('transformCoreColorName', HandlebarsHelpers.transformCoreColorName);
    Handlebars.registerHelper('sanitizedName', HandlebarsHelpers.sanitizedName);
    Handlebars.registerHelper('groupTokens', HandlebarsHelpers.groupTokens);
    Handlebars.registerHelper('classNameFromPath', HandlebarsHelpers.classNameFromPath);
  }

  static isBaseTheme(themeName: string): boolean {
    return themeName === 'Light';
  }

  static isCoreTokens(destination: string): boolean {
    return destination.startsWith('core');
  }

  static valueIsHex(value: string): boolean {
    return value.startsWith('#');
  }

  static lowercaseFirst(value: string): string {
    return value.charAt(0).toLowerCase() + value.slice(1);
  }

  static hexToUIColor(hex: string): string {
    const sanitizedHex = hex.replace(/^#/, '');

    if (sanitizedHex.length === 8) {
      const alpha = (parseInt(sanitizedHex.substring(6, 8), 16) / 255).toFixed(2);
      return `UIColor(hex: 0x${sanitizedHex.substring(0, 6).toUpperCase()}, withAlpha: ${alpha})`;
    }
    if (sanitizedHex.length === 6) {
      return `UIColor(hex: 0x${sanitizedHex.toUpperCase()})`;
    }

    return '';
  }

  static transformCoreColorName(name: string): string {
    const prefixReplacements: { [key: string]: string } = {
      mdsColorCore: 'momentum',
      mdsColorDecorative: 'momentum',
    };

    const prefix = Object.keys(prefixReplacements).find((prefix) => name.startsWith(prefix));
    if (prefix) {
      return name.replace(prefix, prefixReplacements[prefix]);
    }

    return name.replace(/^mdsColor/, 'momentum');
  }

  static sanitizedName(name: string): string {
    const invalidNames: { [key: string]: string } = {
      default: 'defaultColor',
      Globaltint: 'GlobalTint',
      Groupedbackground: 'GroupedBackground',
      Gradientdivider: 'GradientDivider',
    };

    return invalidNames[name] || name;
  }

  static groupTokens(tokens: Token[]): GroupedToken[] {
    const groups: { [key: string]: { name: string, value: string }[] } = {};

    tokens.forEach((token) => {
      const match = token.name.match(/^mdsColorTheme(.*?)([A-Z][a-z]+)(.*)$/);
      if (match) {
        const category = match[2];
        const name = match[3].charAt(0).toLowerCase() + match[3].slice(1);
        if (!groups[category]) {
          groups[category] = [];
        }
        groups[category].push({ name, value: token.value });
      }
    });

    return Object.entries(groups).map(([category, items]) => ({ category, items }));
  }

  static classNameFromPath(path: string): string {
    const fileName = path.split('/').pop() || '';
    const baseName = fileName.replace(/\.[^/.]+$/, '');
    const cleanedName = baseName.replace(/-stable/i, '');
    const className = cleanedName.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');

    return className;
  }
}

export default HandlebarsHelpers;
