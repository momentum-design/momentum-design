import { TokenBuilder, Config } from '@momentum-design/token-builder';

import configCoreColor from '../fixtures/config/config-core-color.json';
import configThemeColor from '../fixtures/config/config-theme-color.json';
import { fileToJson, cssToString } from '../../utils/test/utils';

import coreExpectedOutput from '../fixtures/outputs/web/color-core.json';

describe('Token Builder module', () => {
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

    // How do I compare a css file content with another css file content?
    
    // const relativePath = `./test/dist/css/${configThemeColor.files[0].destination}.css`;
    // const output = await cssToString(relativePath);

    // const pathExpectedOutput = './test/fixtures/outputs/web/color-theme.css';
    // const expectedOutput = await cssToString(pathExpectedOutput);
    // expect(output).toMatchObject(expectedOutput);
  });
});
