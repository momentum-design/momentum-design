const DOCUMENT = {
  VALID_CHILD_TYPES: ['PAGE'],
};

const SEARCH_CRITERIA = ['COMPONENT' as const];

const REPLACE_TERMS = {
  COMPONENT_NAME: 'COMPONENT_NAME' as const,
  PARENT_NAME: 'PARENT_NAME' as const,
  SET_OR_COMPONENT_NAME: 'SET_OR_COMPONENT_NAME' as const,
  SF_ALTERNATIVE: 'SF_ALTERNATIVE' as const,
  RTL: 'RTL' as const,
  WEIGHT: 'WEIGHT' as const,
};

// note: variants have to be provided lowercase here:
const FIGMA_VARIANTS = {
  WEIGHT: 'weight',
  RTL: 'right to left',
  SF_ALTERNATIVE: 'sf alternative',
};

const INITIAL_SETTINGS = {
  mapPagesToFolder: [
    { page: '✅', folder: 'core' },
    { page: 'Colored Icons', folder: 'colored' },
    { page: 'Brand Icons', folder: 'brand' },
  ],
  fileName: {
    parts: ['SET_OR_COMPONENT_NAME', 'SF_ALTERNATIVE', 'RTL', 'WEIGHT'],
    separator: '-',
  },
  exportSettings: {
    format: 'SVG',
    contentsOnly: true,
    useAbsoluteBounds: false,
  },
};

const CONSTANTS = {
  DOCUMENT,
  SEARCH_CRITERIA,
  REPLACE_TERMS,
  FIGMA_VARIANTS,
  INITIAL_SETTINGS,
};

export {
  CONSTANTS,
};
