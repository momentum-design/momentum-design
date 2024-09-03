export type ColorTokenValue = {
  value?: string;
  type?: string;
  description?: string
};

export enum TokenType {
  Color = 'color',
  Elevation = 'elevation',
  BorderWidth = 'border-width',
  BorderRadius = 'border-radius',
  Spacing = 'spacing'
}
