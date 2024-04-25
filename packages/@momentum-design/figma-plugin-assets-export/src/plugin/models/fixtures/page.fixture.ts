export const PageNodeMock = {
  findAllWithCriteria: jest.fn(),
};

export const componentNodeMocks = [
  {
    variantProperties: {
      weight: 'bold',
      color: 'bl.ue',
      'right to left': 'false',
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
  },
  {
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
    exportAsync: jest.fn().mockResolvedValue({
      path: 'dist/display-sf-rtl-bold-state-twofour.svg',
      data: String.fromCharCode.apply(null, new Uint8Array(8) as any),
    }),
    findAllWithCriteria: jest.fn(),
  },
];

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
    exclude: {
      byVariant: 'right to left',
    },
  },
};
