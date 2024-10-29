const FILE_ENCODING: BufferEncoding = 'utf-8';

const SD_TRANSFORMS = {
  ATTRIBUTE_CTI: 'attribute/cti',
  NAME_CTI_KABAB: 'name/cti/kebab',
  NAME_CTI_CAMEL: 'name/cti/camel',
  RESOLVE_MATH: 'ts/resolveMath',
  COLOR_MODIFIER: 'ts/color/modifiers',
};

const LOCAL_TRANSFORMS = {
  MD_ELEVATION: 'md/elevation',
  PX_TO_REM: 'size/pxToRem',
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
    TRANSFORMS: [
      'ATTRIBUTE_CTI',
      'NAME_CTI_KABAB',
      'MD_ELEVATION',
      'PX_TO_REM',
      'RESOLVE_MATH',
      'COLOR_MODIFIER',
    ] as Array<Transform>,
  },
  SCSS_VARIABLES: {
    EXTENSION: 'scss',
    FORMAT: 'scss/variables',
    GROUP: 'scss',
    NAME: 'scss/variables',
    PATH: './scss/',
    TRANSFORMS: [
      'ATTRIBUTE_CTI',
      'NAME_CTI_KABAB',
      'MD_ELEVATION',
      'RESOLVE_MATH',
      'COLOR_MODIFIER',
    ] as Array<Transform>,
  },
  WEB_JSON: {
    EXTENSION: 'json',
    FORMAT: 'json',
    GROUP: 'web',
    NAME: 'web/json',
    PATH: './json/',
    TRANSFORMS: [
      'ATTRIBUTE_CTI',
      'NAME_CTI_KABAB',
      'MD_ELEVATION',
      'RESOLVE_MATH',
      'COLOR_MODIFIER',
    ]as Array<Transform>,
  },
  ANDROID_RESOURCES: {
    EXTENSION: 'xml',
    FORMAT: 'android/resources',
    GROUP: 'android',
    NAME: 'android/resources',
    PATH: './resources/',
    TRANSFORMS: [
      'ATTRIBUTE_CTI',
      'NAME_CTI_KABAB',
      'MD_ELEVATION',
      'RESOLVE_MATH',
      'COLOR_MODIFIER',
    ] as Array<Transform>,
  },
  SWIFT_CLASS: {
    EXTENSION: 'swift',
    FORMAT: 'ios-swift/class.swift',
    GROUP: 'ios',
    NAME: 'ios/swift',
    PATH: './ios/',
    TRANSFORMS: [
      'ATTRIBUTE_CTI',
      'NAME_CTI_CAMEL',
      'MD_ELEVATION',
      'RESOLVE_MATH',
      'COLOR_MODIFIER',
    ] as Array<Transform>,
  },
};

const LOCAL_FORMATS = {
  MD_JSON_MINIMAL: {
    EXTENSION: 'json',
    FORMAT: 'md-json-minimal',
    GROUP: 'md',
    NAME: 'md/json-minimal',
    PATH: './json-minimal/',
    TRANSFORMS: [
      'ATTRIBUTE_CTI',
      'NAME_CTI_KABAB',
      'MD_ELEVATION',
      'RESOLVE_MATH',
      'COLOR_MODIFIER',
    ] as Array<Transform>,
  },
  IOS_WEBEX: {
    EXTENSION: 'swift',
    FORMAT: 'md-ios-webex',
    GROUP: 'md',
    NAME: 'md/ios-webex',
    PATH: './ios-webex/',
    TRANSFORMS: [
      'ATTRIBUTE_CTI',
      'NAME_CTI_CAMEL',
      'MD_ELEVATION',
      'COLOR_MODIFIER',
    ] as Array<Transform>,
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
