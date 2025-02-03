export type ColorTokenValue = {
  value?: string;
  type?: string;
  description?: string
};

export enum TokenType {
  Color = 'color',
  Elevation = 'elevation',
  Typography = 'typography',
  Effect = 'effect',
  BorderWidth = 'border-width',
  BorderRadius = 'border-radius',
  Spacing = 'spacing'
}
