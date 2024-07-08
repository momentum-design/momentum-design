/* eslint-disable no-undef */
import Document from './document';
import { AssetSetting } from '../../shared/types';
import { assetSettingMock, documentNodeMock } from './fixtures/document.fixture';

jest.mock('./Page', () => jest.fn().mockImplementation(() => ({
  node: {
    name: 'Page 1',
    type: 'PAGE',
    loadAsync: jest.fn(),
    findAllWithCriteria: jest.fn(),
  },
  assets: { then: jest.fn().mockReturnValue({ path: 'fake-path', data: 'fake-data' }) },
  destination: 'Folder 1',
  assetSetting: { name: 'Icons', input: [{}] },
})));

describe('@momentum-design/figma-plugin-assets-export - models.Document', () => {
  let document: Document;
  beforeEach(() => {
    document = new Document(
      documentNodeMock as unknown as DocumentNode,
      assetSettingMock as AssetSetting,
    );
  });

  describe('get pages', () => {
    it('returns an array of Page instances for each page in the document', () => {
      const { pages } = document;
      expect(pages).toHaveLength(2);
    });
  });

  describe('getAssetChunksFromPages', () => {
    it('asset chunks should be defined', async () => {
      const assetChunks = await document.getAssetChunksFromPages();
      expect(assetChunks).toBeDefined();
    });
  });
});
