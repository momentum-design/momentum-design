/* eslint-disable no-undef */
import { AssetSetting } from '../../shared/types';
import Component from './component';
import {
  assetSettingMock,
  componentNodeMock,
  replacementMapMock,
  componentNodePathsCases,
  assetNamePathsCases,
  componentNodeColorCheckMock,
} from './fixtures/component.fixture';
import { updateObjectByPaths } from './fixtures/utils/updateObjectByPaths';

const DESTINATION = 'dist';

describe('@momentum-design/figma-plugin-assets-export - models.Component', () => {
  let component: Component;
  beforeEach(() => {
    component = new Component(
        componentNodeMock as unknown as ComponentNode,
        DESTINATION,
        assetSettingMock as AssetSetting,
    );
  });

  describe('constructor', () => {
    it('returns instance of Component', () => {
      expect(component instanceof Component).toBe(true);
    });
    it('should mount the appropriate destination', () => {
      expect(component.destination).toBe(DESTINATION);
    });
  });

  describe('replacementMap', () => {
    it('return approriate replacementMap', () => {
      component = new Component(
        componentNodeMock as unknown as ComponentNode,
        'dist',
        assetSettingMock as AssetSetting,
      );
      expect(component.replacementMap).toEqual(replacementMapMock);
    });
  });

  describe('assetName', () => {
    it('return assetName without color black, color black will be replaced with blank', () => {
      component = new Component(
        componentNodeColorCheckMock as unknown as ComponentNode,
        'dist',
        assetSettingMock as AssetSetting,
      );
      expect(component.assetName).toEqual('display-sf-rtl-bold-state-twofour.svg');
    });
  });
  describe('asset', () => {
    it('check the appropriate result', async () => {
      componentNodeMock.exportAsync.mockImplementation(() => Promise.resolve({
        path: `${DESTINATION}/display-sf-rtl-bold-state-twofour.svg`,
        data: String.fromCharCode.apply(null, new Uint8Array(8) as any),
      }));
      component = new Component(
        componentNodeMock as unknown as ComponentNode,
        DESTINATION,
        assetSettingMock as AssetSetting,
      );
      const assetData = await component.asset;
      expect(assetData).toEqual({ path: `${DESTINATION}/display-sf-rtl-bold-state-twofour-blue.svg`, data: '' });
    });
    it('check the failure', async () => {
      const figmaNotifySpy = jest.spyOn(figma, 'notify');
      componentNodeMock.exportAsync.mockRejectedValue('exportAsync failure');
      component = new Component(
        componentNodeMock as unknown as ComponentNode,
        DESTINATION,
        assetSettingMock as AssetSetting,
      );
      try {
        await component.asset;
      } catch (err) {
        expect(figmaNotifySpy).toHaveBeenCalled();
        expect(err).toEqual('exportAsync failure');
      }
    });
  });
});
test.each(componentNodePathsCases.map(({ path, value, expected }) => {
  const componentNodeMockCopy = JSON.parse(JSON.stringify(componentNodeMock));
  const updatedComponentNodeMock = updateObjectByPaths(componentNodeMockCopy, path, value);
  const component = new Component(
    updatedComponentNodeMock as unknown as ComponentNode,
    DESTINATION,
    assetSettingMock as AssetSetting,
  );
  return { component, expected };
}))('@momentum-design/figma-plugin-assets-export - replacementMap conditions checks', ({ expected, component }) => {
  expect(component.replacementMap[expected.key]).toEqual(expected.value);
});

test.each(assetNamePathsCases.map(({ path, value, expected }) => {
  const assetSettingMockCopy = JSON.parse(JSON.stringify(assetSettingMock));
  const updatedAssetSettingMock = updateObjectByPaths(assetSettingMockCopy, path, value);
  const component = new Component(
    componentNodeMock as unknown as ComponentNode,
    DESTINATION,
    updatedAssetSettingMock as AssetSetting,
  );
  return { component, expected };
}))('@momentum-design/figma-plugin-assets-export - asset condition checks', ({ expected, component }) => {
  expect(component.assetName).toEqual(expected);
});
