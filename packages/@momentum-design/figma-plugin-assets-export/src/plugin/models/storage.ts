/* eslint-disable no-undef */
import { CONSTANTS as SETTINGS_CONSTANTS } from '../../shared/settings-constants';

const settingsKey = 'settings';

class Storage {
  api: ClientStorageAPI;

  initialSettings: any = SETTINGS_CONSTANTS.INITIAL_SETTINGS;

  constructor() {
    this.api = figma.clientStorage;
  }

  async setSettings(data: any): Promise<void> {
    return this.api.setAsync(settingsKey, data);
  }

  async getSettings(): Promise<any> {
    return this.api.getAsync(settingsKey);
  }
}

export default Storage;
