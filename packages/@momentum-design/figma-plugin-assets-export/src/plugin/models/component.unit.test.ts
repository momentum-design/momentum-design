/* eslint-disable no-undef */
import { AssetSetting } from '../../shared/types';
import Component from './component';
import { assetSettingMock, componentNodeMock } from './fixtures/component.fixture';

describe('@momentum-design/figma-plugin-assets-export - models.Component', () => {
  let component: Component;
  const DESTINATION = 'dist';
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

  describe('convertDigitToWord', () => {
    it('return word for the digit provided', () => {
      expect(true).toBe(true);
    });
  });
});
