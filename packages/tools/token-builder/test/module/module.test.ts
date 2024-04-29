import fs from 'fs';
import { TokenBuilder, Config } from '../../src';

import configCoreColor from '../fixtures/config/config-core-color.json';
import configThemeColor from '../fixtures/config/config-theme-color.json';
import { fileToJson } from '../../utils/test/utils';

import coreExpectedOutput from '../fixtures/outputs/web/color-core.json';

jest.mock('../../src/common/constants');
describe('Token Builder module', () => {
  afterEach(() => {
    fs.rmSync('./test/dist', { recursive: true, force: true });
  });

  it('returns the correct output for a core colors config', async () => {
    await TokenBuilder.build({
      config: configCoreColor as Config,
      input: './test/fixtures/inputs',
      output: './test/dist',
    });

    const relativePath = `./test/dist/json/${configCoreColor.files[0].destination}.json`;
    const output = await fileToJson(relativePath);
    expect(output).toMatchObject(coreExpectedOutput);
  });

  it('returns the correct output for a theme colors config', async () => {
    await TokenBuilder.build({
      config: configThemeColor as Config,
      input: './test/fixtures/inputs',
      output: './test/dist',
    });

    const pathRealOutput = `./test/dist/css/${configThemeColor.files[0].destination}.css`;
    const pathExpectedOutput = './test/fixtures/outputs/web/color-theme.css';
    expect(fs.readFileSync(pathRealOutput, 'utf-8')).toEqual(fs.readFileSync(pathExpectedOutput, 'utf-8'));
  });
});
