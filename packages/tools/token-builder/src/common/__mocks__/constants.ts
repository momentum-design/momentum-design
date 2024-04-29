const FILE_ENCODING: BufferEncoding = 'utf-8';

const SD_TRANSFORMS = {
  ATTRIBUTE_CTI: 'attribute/cti',
  NAME_CTI_KABAB: 'name/cti/kebab',
  NAME_CTI_CAMEL: 'name/cti/camel',
};

const LOCAL_TRANSFORMS = {
  MD_ELEVATION: 'md/elevation',
};

const TRANSFORMS = {
  ...SD_TRANSFORMS,
  ...LOCAL_TRANSFORMS,
};

export type Transform = keyof typeof TRANSFORMS;

// https://github.com/amzn/style-dictionary/blob/main/lib/common/formats.js
const SD_FORMATS = {
  CSS_VARIABLES: {
    EXTENSION: 'css',
    FORMAT: 'css/variables',
    GROUP: 'css',
    NAME: 'css/variables',
    PATH: './css/',
  },
  WEB_JSON: {
    EXTENSION: 'json',
    FORMAT: 'json',
    GROUP: 'web',
    NAME: 'web/json',
    PATH: './json/',
  },
};

const LOCAL_FORMATS = {
  MD_JSON_MINIMAL: {
    EXTENSION: 'json',
    FORMAT: 'md-json-minimal',
    GROUP: 'md',
    NAME: 'md/json-minimal',
    PATH: './json-minimal/',
  },
};

const FORMATS = {
  ...SD_FORMATS,
  ...LOCAL_FORMATS,
};

const CONSTANTS = {
  FILE_ENCODING,
  FORMATS,
  LOCAL_FORMATS,
  LOCAL_TRANSFORMS,
  SD_FORMATS,
  SD_TRANSFORMS,
  TRANSFORMS,
};

export default CONSTANTS;
