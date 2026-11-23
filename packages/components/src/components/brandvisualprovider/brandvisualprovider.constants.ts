import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('brandvisualprovider');

// brand visuals ship as vectors (`dist/svg`) and, for the device photography,
// as raster images (`dist/png`) — so both are valid custom set extensions.
const ALLOWED_FILE_EXTENSIONS = ['svg', 'png'];

const DEFAULTS = {
  FILE_EXTENSION: 'svg',
  BRAND_VISUAL_SET: 'momentum-brand-visuals',
} as const;

export { TAG_NAME, DEFAULTS, ALLOWED_FILE_EXTENSIONS };
