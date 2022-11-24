export type ColorTokenValue = {
  value?: string;
  type?: string;
  description?: string
};

export type UnThemedColorToken = {
  [key: string]: {
    [key: string]: ColorTokenValue
  }
};

export type ThemedColorToken = {
  [key: string]: {
    light?: {
      [key: string]: ColorTokenValue
    },
    dark?: {
      [key: string]: ColorTokenValue
    }
  };
};

export enum TokenType {
  Color = 'color',
  Elevation = 'elevation',
  BorderWidth = 'border-width',
  BorderRadius = 'border-radius',
  Spacing = 'spacing'
}
