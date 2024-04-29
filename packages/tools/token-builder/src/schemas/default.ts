import { SomeJSONSchema } from 'ajv/dist/types/json-schema';
import * as CoreColorSchema from './json/core/color.json';
import * as CoreBorderRadiusSchema from './json/core/border-radius.json';
import * as CoreBorderWidthSchema from './json/core/border-width.json';
import * as ThemeWebexCommonSchema from './json/theme/webex/common.json';
import * as ThemeWebexDarkSchema from './json/theme/webex/dark.json';
import * as ThemeWebexLightSchema from './json/theme/webex/light.json';
import * as CoreSpacingSchema from './json/core/spacing.json';
import * as CoreElevationSchema from './json/core/elevation.json';
import * as CoreTypeAppsSchema from './json/core/type/apps.json';
import * as CoreTypeDisplaySchema from './json/core/type/display.json';

// typescript and AJV do not play super well together
// https://github.com/ajv-validator/ajv/issues/1988
type TypeConversionWorkaround = SomeJSONSchema & {$ref: string};

const SCHEMA_MAP = [
  {
    fileName: 'core/border-radius.json',
    jsonSchema: CoreBorderRadiusSchema as unknown as TypeConversionWorkaround,
  },
  {
    fileName: 'core/spacing.json',
    jsonSchema: CoreSpacingSchema as unknown as TypeConversionWorkaround,
  },
  {
    fileName: 'core/border-width.json',
    jsonSchema: CoreBorderWidthSchema as unknown as TypeConversionWorkaround,
  },
  {
    fileName: 'core/elevation.json',
    jsonSchema: CoreElevationSchema as unknown as TypeConversionWorkaround,
  },
  {
    fileName: 'core/type/apps.json',
    jsonSchema: CoreTypeAppsSchema as unknown as TypeConversionWorkaround,
  },
  {
    fileName: 'core/type/display.json',
    jsonSchema: CoreTypeDisplaySchema as unknown as TypeConversionWorkaround,
  },
  {
    fileName: 'core/color.json',
    jsonSchema: CoreColorSchema as unknown as TypeConversionWorkaround,
  },
  {
    fileName: 'theme/webex/light.json',
    jsonSchema: ThemeWebexLightSchema as unknown as TypeConversionWorkaround,
  },
  {
    fileName: 'theme/webex/common.json',
    jsonSchema: ThemeWebexCommonSchema as unknown as TypeConversionWorkaround,
  },
  {
    fileName: 'theme/webex/dark.json',
    jsonSchema: ThemeWebexDarkSchema as unknown as TypeConversionWorkaround,
  },
];

export { SCHEMA_MAP };
