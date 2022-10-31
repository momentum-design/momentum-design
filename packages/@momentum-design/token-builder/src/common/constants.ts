const FILE_ENCODING: BufferEncoding = 'utf-8';

const FORMATS = {
  CSS_VARIABLES: {
    EXTENSION: 'css',
    FORMAT: 'css/variables',
    GROUP: 'css',
    NAME: 'css/variables',
    PATH: './css/',
  },
  SCSS_VARIABLES: {
    EXTENSION: 'scss',
    FORMAT: 'scss/variables',
    GROUP: 'scss',
    NAME: 'scss/variables',
    PATH: './scss/',
  },
  WEB_JSON: {
    EXTENSION: 'json',
    FORMAT: 'json',
    GROUP: 'web',
    NAME: 'web/json',
    PATH: './json/',
  },
};

const CONSTANTS = {
  FILE_ENCODING,
  FORMATS,
};

export default CONSTANTS;
