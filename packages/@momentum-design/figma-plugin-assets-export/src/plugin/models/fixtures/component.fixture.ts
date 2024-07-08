import { CONSTANTS } from '../../constants';

export const assetSettingMock = {
  name: 'Icons',
  input: {
    asset: {
      fileName: {
        parts: [
          'SET_OR_COMPONENT_NAME',
          'SF_ALTERNATIVE',
          'RTL',
        ],
        separator: '-',
        suffix: {
          parts: [
            'WEIGHT',
            'STATE',
            'SIZE',
            'COLOR',
          ],
          separator: '-',
        },
        replaceNumbers: true,
        replaceDots: true,
      },
      exportSettings: {
        format: 'SVG',
        contentsOnly: true,
        useAbsoluteBounds: false,
      },
      exportSettingsImage: {
        format: 'PNG',
        contentsOnly: true,
        useAbsoluteBounds: false,
      },
    },
  },
};

export const componentNodePathsCases = [
  {
    path: 'parent.type',
    value: 'COMPONENT_SET',
    expected: {
      key: CONSTANTS.REPLACE_TERMS.SET_OR_COMPONENT_NAME, value: 'display',
    },
  },
  {
    path: 'parent.type',
    value: 'NOT_COMPONENT_SET',
    expected: {
      key: CONSTANTS.REPLACE_TERMS.SET_OR_COMPONENT_NAME, value: 'component node name',
    },
  },
  {
    path: 'variantProperties.right to left',
    value: 'true',
    expected: {
      key: CONSTANTS.REPLACE_TERMS.RTL, value: 'rtl',
    },
  },
  {
    path: 'variantProperties.right to left',
    value: 'false',
    expected: {
      key: CONSTANTS.REPLACE_TERMS.RTL, value: undefined,
    },
  },
  {
    path: 'variantProperties.sf alternative',
    value: 'true',
    expected: {
      key: CONSTANTS.REPLACE_TERMS.SF_ALTERNATIVE, value: 'sf',
    },
  },
  {
    path: 'variantProperties.sf alternative',
    value: '',
    expected: {
      key: CONSTANTS.REPLACE_TERMS.SF_ALTERNATIVE, value: undefined,
    },
  },
  {
    path: 'variantProperties.size',
    value: 'default',
    expected: {
      key: CONSTANTS.REPLACE_TERMS.SIZE, value: undefined,
    },
  },
  {
    path: 'variantProperties.size',
    value: '48px',
    expected: {
      key: CONSTANTS.REPLACE_TERMS.SIZE, value: '48px',
    },
  },
  {
    path: 'name',
    value: 'test',
    expected: {
      key: CONSTANTS.REPLACE_TERMS.COMPONENT_NAME, value: 'test',
    },
  },
  {
    path: 'parent.name',
    value: 'card',
    expected: {
      key: CONSTANTS.REPLACE_TERMS.PARENT_NAME, value: 'card',
    },
  },
];

export const assetNamePathsCases = [
  {
    path: '',
    value: '',
    expected: 'display-sf-rtl-bold-state-twofour-blue',
  },
  {
    path: 'input.asset.fileName.parts',
    value: [
      'Mis-spelled',
      'SF_ALTERNATIVE',
      'RTL',
    ],
    expected: 'sf-rtl-bold-state-twofour-blue',
  },
  {
    path: 'input.asset.fileName.parts',
    value: ['SF_ALTERNATIVE'],
    expected: 'sf-bold-state-twofour-blue',
  },
  {
    path: 'input.asset.fileName.parts',
    value: [],
    expected: '-bold-state-twofour-blue',
  },
  {
    path: 'input.asset.fileName.separator',
    value: '_',
    expected: 'display_sf_rtl-bold-state-twofour-blue',
  },
  {
    path: 'input.asset.fileName.separator',
    value: '_',
    expected: 'display_sf_rtl-bold-state-twofour-blue',
  },
  {
    path: ['input.asset.fileName.separator', 'input.asset.fileName.suffix.separator'],
    value: ['_', '_'],
    expected: 'display_sf_rtl_bold_state_twofour_blue',
  },
  {
    path: 'input.asset.fileName.suffix.parts',
    value: ['STATE', 'SIZE'],
    expected: 'display-sf-rtl-state-twofour',
  },
  {
    path: 'input.asset.fileName.suffix.parts',
    value: [],
    expected: 'display-sf-rtl',
  },
  {
    path: 'input.asset.fileName.suffix.parts',
    value: ['COLOR'],
    expected: 'display-sf-rtl-blue',
  },
  {
    path: 'input.asset.fileName.suffix.parts',
    value: ['COLOR', 'SIZE'],
    expected: 'display-sf-rtl-blue-twofour',
  },
  {
    path: 'input.asset.fileName.replaceNumbers',
    value: false,
    expected: 'display-sf-rtl-bold-state-24-blue',
  },
  {
    path: 'input.asset.fileName.replaceNumbers',
    value: true,
    expected: 'display-sf-rtl-bold-state-twofour-blue',
  },
  {
    path: 'input.asset.fileName.replaceDots',
    value: false,
    expected: 'display-sf-rtl-bold-state-twofour-bl.ue',
  },
  {
    path: 'input.asset.fileName.replaceDots',
    value: true,
    expected: 'display-sf-rtl-bold-state-twofour-blue',
  },
  {
    path: 'input.asset.exportSettings.format',
    value: 'JPG',
    expected: 'display-sf-rtl-bold-state-twofour-blue',
  },
];

export const replacementMapMock = {
  [CONSTANTS.REPLACE_TERMS.COMPONENT_NAME]: 'component node name',
  [CONSTANTS.REPLACE_TERMS.PARENT_NAME]: 'display',
  [CONSTANTS.REPLACE_TERMS.SET_OR_COMPONENT_NAME]: 'display',
  [CONSTANTS.REPLACE_TERMS.WEIGHT]: 'bold',
  [CONSTANTS.REPLACE_TERMS.STATE]: 'state',
  [CONSTANTS.REPLACE_TERMS.COLOR]: 'bl.ue',
  [CONSTANTS.REPLACE_TERMS.THEME]: 'theme',
  [CONSTANTS.REPLACE_TERMS.TYPE]: 'type',
  [CONSTANTS.REPLACE_TERMS.ORIENTATION]: 'orientation',
  [CONSTANTS.REPLACE_TERMS.PRODUCT]: 'product',
  [CONSTANTS.REPLACE_TERMS.SIZE]: '24',
  [CONSTANTS.REPLACE_TERMS.RTL]: 'rtl',
  [CONSTANTS.REPLACE_TERMS.SF_ALTERNATIVE]: 'sf',
};

export const componentNodeMock = {
  variantProperties: {
    weight: 'bold',
    color: 'bl.ue',
    'right to left': 'true',
    'sf alternative': 'true',
    state: 'state',
    size: '24',
    theme: 'theme',
    type: 'type',
    orientation: 'orientation',
    product: 'Product',
  },
  name: 'component node name',
  children: [],
  parent: {
    type: 'COMPONENT_SET',
    name: 'display',
  },
  exportAsync: jest.fn(),
  findAllWithCriteria: jest.fn(),
};

export const componentNodeColorCheckMock = {
  ...componentNodeMock,
  variantProperties: {
    ...componentNodeMock.variantProperties,
    color: 'black',
  },
};

export const uint8ArrayPngMock = [103, 32, 119, 105, 100, 116];

// eslint-disable-next-line max-len
export const uint8ArraySvgMock = [60, 115, 118, 103, 32, 119, 105, 100, 116, 104, 61, 34, 49, 56, 48, 34, 32, 104, 101, 105, 103, 104, 116, 61, 34, 57, 54, 34, 32, 118, 105, 101, 119, 66, 111, 120, 61, 34, 48, 32, 48, 32, 49, 56, 48, 32, 57, 54, 34, 32, 102, 105, 108, 108, 61, 34, 110, 111, 110, 101, 34, 32, 120, 109, 108, 110, 115, 61, 34, 104, 116, 116, 112, 58, 47, 47, 119, 119, 119, 46, 119, 51, 46, 111, 114, 103, 47, 50, 48, 48, 48, 47, 115, 118, 103, 34, 62, 10, 60, 101, 108, 108, 105, 112, 115, 101, 32, 99, 120, 61, 34, 56, 56, 34, 32, 99, 121, 61, 34, 51, 57, 46, 53, 34, 32, 114, 120, 61, 34, 50, 54, 34, 32, 114, 121, 61, 34, 50, 54, 46, 53, 34, 32, 102, 105, 108, 108, 61, 34, 35, 70, 70, 48, 48, 48, 48, 34, 47, 62, 10, 60, 47, 115, 118, 103, 62, 10];

// eslint-disable-next-line max-len
export const svgMock = `<svg width="180" height="96" viewBox="0 0 180 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="88" cy="39.5" rx="26" ry="26.5" fill="#FF0000"/>
</svg>
`;

export const pngMock = 'ZyB3aWR0';
