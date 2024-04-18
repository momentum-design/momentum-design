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
    expected: 'display-sf-rtl-bold-state-twofour-blue.svg',
  },
  {
    path: 'input.asset.fileName.parts',
    value: [
      'Mis-spelled',
      'SF_ALTERNATIVE',
      'RTL',
    ],
    expected: 'sf-rtl-bold-state-twofour-blue.svg',
  },
  {
    path: 'input.asset.fileName.parts',
    value: ['SF_ALTERNATIVE'],
    expected: 'sf-bold-state-twofour-blue.svg',
  },
  {
    path: 'input.asset.fileName.parts',
    value: [],
    expected: '-bold-state-twofour-blue.svg',
  },
  {
    path: 'input.asset.fileName.separator',
    value: '_',
    expected: 'display_sf_rtl-bold-state-twofour-blue.svg',
  },
  {
    path: 'input.asset.fileName.separator',
    value: '_',
    expected: 'display_sf_rtl-bold-state-twofour-blue.svg',
  },
  {
    path: ['input.asset.fileName.separator', 'input.asset.fileName.suffix.separator'],
    value: ['_', '_'],
    expected: 'display_sf_rtl_bold_state_twofour_blue.svg',
  },
  {
    path: 'input.asset.fileName.suffix.parts',
    value: ['STATE', 'SIZE'],
    expected: 'display-sf-rtl-state-twofour.svg',
  },
  {
    path: 'input.asset.fileName.suffix.parts',
    value: [],
    expected: 'display-sf-rtl.svg',
  },
  {
    path: 'input.asset.fileName.suffix.parts',
    value: ['COLOR'],
    expected: 'display-sf-rtl-blue.svg',
  },
  {
    path: 'input.asset.fileName.suffix.parts',
    value: ['COLOR', 'SIZE'],
    expected: 'display-sf-rtl-blue-twofour.svg',
  },
  {
    path: 'input.asset.fileName.replaceNumbers',
    value: false,
    expected: 'display-sf-rtl-bold-state-24-blue.svg',
  },
  {
    path: 'input.asset.fileName.replaceNumbers',
    value: true,
    expected: 'display-sf-rtl-bold-state-twofour-blue.svg',
  },
  {
    path: 'input.asset.fileName.replaceDots',
    value: false,
    expected: 'display-sf-rtl-bold-state-twofour-bl.ue.svg',
  },
  {
    path: 'input.asset.fileName.replaceDots',
    value: true,
    expected: 'display-sf-rtl-bold-state-twofour-blue.svg',
  },
  {
    path: 'input.asset.exportSettings.format',
    value: 'JPG',
    expected: 'display-sf-rtl-bold-state-twofour-blue.jpg',
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
};

export const componentNodeColorCheckMock = {
  ...componentNodeMock,
  variantProperties: {
    ...componentNodeMock.variantProperties,
    color: 'black',
  },
};
