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
    mapPagesToFolder: [
      { page: 'Page 1', folder: 'Folder 1' },
      { page: 'Page 2', folder: 'Folder 2' },
    ],
  },
};

export const documentNodeMock = {
  children: [
    {
      name: 'Page 1',
      type: 'PAGE',
      loadAsync: jest.fn(),
      findAllWithCriteria: jest.fn(),
    },
    {
      name: 'Page 2',
      type: 'PAGE',
      loadAsync: jest.fn(),
      findAllWithCriteria: jest.fn(),
    },
    {
      name: 'Page 3',
      type: 'DOCUMENT',
      loadAsync: jest.fn(),
      findAllWithCriteria: jest.fn(),
    },
  ],
  findAllWithCriteria: jest.fn(),
};
