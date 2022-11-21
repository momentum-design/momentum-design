import { SomeJSONSchema } from 'ajv/dist/types/json-schema';
import * as ColorSchema from './json/color.json';
import * as BorderRadiusSchema from './json/border-radius.json';
import * as BorderWidthSchema from './json/border-width.json';
import * as ThemeCommonSchema from './json/common.json';
import * as ThemeDarkSchema from './json/dark.json';
import * as ThemeLightSchema from './json/light.json';
import * as SpacingSchema from './json/spacing.json';
import * as ElevationSchema from './json/elevation.json';
import * as TypeAppsSchema from './json/apps.json';
import * as TypeDisplaySchema from './json/display.json';

// typescript and AJV do not play super well together
// https://github.com/ajv-validator/ajv/issues/1988
type TypeConversionWorkaround = SomeJSONSchema & {$ref: string};

const SCHEMA_MAP = [
  {
    fileName: 'border-radius.json',
    jsonSchema: BorderRadiusSchema as unknown as TypeConversionWorkaround,
  },
  {
    fileName: 'color.json',
    jsonSchema: ColorSchema as unknown as TypeConversionWorkaround,
  },
  {
    fileName: 'apps.json',
    jsonSchema: TypeAppsSchema as unknown as TypeConversionWorkaround,
  },
  {
    fileName: 'display.json',
    jsonSchema: TypeDisplaySchema as unknown as TypeConversionWorkaround,
  },
  {
    fileName: 'light.json',
    jsonSchema: ThemeLightSchema as unknown as TypeConversionWorkaround,
  },
  {
    fileName: 'common.json',
    jsonSchema: ThemeCommonSchema as unknown as TypeConversionWorkaround,
  },
  {
    fileName: 'dark.json',
    jsonSchema: ThemeDarkSchema as unknown as TypeConversionWorkaround,
  },
  {
    fileName: 'spacing.json',
    jsonSchema: SpacingSchema as unknown as TypeConversionWorkaround,
  },
  {
    fileName: 'border-width.json',
    jsonSchema: BorderWidthSchema as unknown as TypeConversionWorkaround,
  },
  {
    fileName: 'elevation.json',
    jsonSchema: ElevationSchema as unknown as TypeConversionWorkaround,
  },
];

export { SCHEMA_MAP };
