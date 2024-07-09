/* eslint-disable no-undef */
import { AssetSetting } from '../../shared/types';
import Component from './component';
import { assetSettingMock, DESTINATION, PageNodeMock, componentNodeMocks } from './fixtures/page.fixture';
import Page from './page';

describe('@momentum-design/figma-plugin-assets-export - models.Page', () => {
  let page: Page;
  beforeEach(() => {
    page = new Page(
        PageNodeMock as unknown as PageNode,
        DESTINATION,
        assetSettingMock as AssetSetting,
    );
  });

  describe('constructor', () => {
    it('returns instance of Component', () => {
      expect(page instanceof Page).toBe(true);
    });
    it('should mount the appropriate destination', () => {
      expect(page.destination).toBe(DESTINATION);
    });
  });

  describe('components', () => {
    it('returns component nodes in current page', () => {
      const figmaLoadAllPageAsyncSpy = jest.spyOn(figma, 'loadAllPagesAsync');
      PageNodeMock.findAllWithCriteria.mockReturnValue(componentNodeMocks);
      page = new Page(
        PageNodeMock as unknown as PageNode,
        DESTINATION,
        assetSettingMock as AssetSetting,
      );
      const excludeComponentsSpy = jest.spyOn(page, 'excludeComponents');
      excludeComponentsSpy.mockReturnValue(componentNodeMocks as unknown as Array<ComponentNode>);
      expect(page.components).toHaveLength(2);
      expect(page.components[0] instanceof Component).toBe(true);
      expect(figmaLoadAllPageAsyncSpy).toHaveBeenCalled();
    });

    it('should mount the appropriate destination', () => {
      expect(page.destination).toBe(DESTINATION);
    });
  });
  describe('excludeComponents', () => {
    it('returns component nodes in current page by excluding any variant', () => {
      const figmaLoadAllPageAsyncSpy = jest.spyOn(figma, 'loadAllPagesAsync');
      PageNodeMock.findAllWithCriteria.mockReturnValue(componentNodeMocks);
      page = new Page(
        PageNodeMock as unknown as PageNode,
        DESTINATION,
        assetSettingMock as AssetSetting,
      );

      expect(page.components).toHaveLength(1);
      expect(figmaLoadAllPageAsyncSpy).toHaveBeenCalled();
    });

    it('throw error', () => {
      const figmaLoadAllPageAsyncSpy = jest.spyOn(figma, 'loadAllPagesAsync');
      PageNodeMock.findAllWithCriteria.mockReturnValue(componentNodeMocks);
      page = new Page(
        PageNodeMock as unknown as PageNode,
        DESTINATION,
        assetSettingMock as AssetSetting,
      );
      try {
        // eslint-disable-next-line no-unused-expressions
        page.components;
      } catch (err) {
        expect(err).not.toBeNull();
      }
      expect(figmaLoadAllPageAsyncSpy).toHaveBeenCalled();
    });
  });
});
