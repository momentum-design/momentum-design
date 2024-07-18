import Storage from './storage';
import { mockFigma } from './fixtures/utils/figma';

const settings = { key: 'value' };
describe('Storage', () => {
  let storage: Storage;
  // eslint-disable-next-line no-undef
  (global as any).figma = mockFigma;

  beforeEach(() => {
    jest.clearAllMocks();
    storage = new Storage();
  });

  it('should set the settings', async () => {
    const setAsyncSpy = jest.spyOn(mockFigma.clientStorage, 'setAsync');
    await storage.setSettings(settings);

    expect(setAsyncSpy).toHaveBeenCalledWith('settings', settings);
  });

  it('should get the settings', async () => {
    mockFigma.clientStorage.getAsync.mockResolvedValue(settings);
    const result = await storage.getSettings();

    expect(mockFigma.clientStorage.getAsync).toHaveBeenCalledWith('settings');
    expect(result).toEqual(settings);
  });
});
