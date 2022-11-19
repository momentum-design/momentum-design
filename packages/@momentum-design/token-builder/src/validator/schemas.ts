import Ajv, { JSONSchemaType, ValidateFunction } from 'ajv';

const ajv = new Ajv();

interface IColorSchema {
  color: {
    core: {
      // TODO: we should validate the deeper levels of the schema, but not required as of now
      // [key: string]: {
      //   [key: string]: {
      //     value: string,
      //     type: string,
      //     description: string;
      //   }
      // }
    }
  }
}

//
const ColorSchemaImpl: JSONSchemaType<IColorSchema> = {
  type: 'object',
  properties: {
    color: {
      type: 'object',
      properties: {
        core: {
          type: 'object',
        },
      },
      required: ['core'],
    },
  },
  required: ['color'],
  additionalProperties: false,
};

interface IBorderRadiusSchema {
  'border-radius': {}
}

// TODO:
const BorderRadiusSchemaImpl: JSONSchemaType<IBorderRadiusSchema> = {
  type: 'object',
  properties: {
    'border-radius': {
      type: 'object',
    },
  },
  required: ['border-radius'],
  additionalProperties: false,
};

interface IBorderWidthSchema {
  'border-width': {}
}

// TODO:
const BorderWidthSchemaImpl: JSONSchemaType<IBorderWidthSchema> = {
  type: 'object',
  properties: {
    'border-width': {
      type: 'object',
    },
  },
  required: ['border-width'],
  additionalProperties: false,
};

interface IElevationSchema {
  'elevation': {}
}

// TODO:
const ElevationSchemaImpl: JSONSchemaType<IElevationSchema> = {
  type: 'object',
  properties: {
    elevation: {
      type: 'object',
    },
  },
  required: ['elevation'],
  additionalProperties: false,
};

interface ISpacingSchema {
  spacing: {}
}

// TODO:
const SpacingSchemaImpl: JSONSchemaType<ISpacingSchema> = {
  type: 'object',
  properties: {
    spacing: {
      type: 'object',
    },
  },
  required: ['spacing'],
  additionalProperties: false,
};

// TODO: allow user defined schema_map
const SCHEMA_MAP: {
    [key: string]: {
    schema: JSONSchemaType<IColorSchema | IBorderRadiusSchema | IBorderWidthSchema | IElevationSchema | ISpacingSchema>,
    validator: ValidateFunction
  },
} = {
  'color.json': {
    schema: ColorSchemaImpl,
    validator: ajv.compile(ColorSchemaImpl),
  },
  'border-radius.json': {
    schema: BorderRadiusSchemaImpl,
    validator: ajv.compile(BorderRadiusSchemaImpl),
  },
  'border-width.json': {
    schema: BorderWidthSchemaImpl,
    validator: ajv.compile(BorderWidthSchemaImpl),
  },
  'elevation.json': {
    schema: ElevationSchemaImpl,
    validator: ajv.compile(ElevationSchemaImpl),
  },
  'spacing.json': {
    schema: SpacingSchemaImpl,
    validator: ajv.compile(SpacingSchemaImpl),
  },
};

export { SCHEMA_MAP };
