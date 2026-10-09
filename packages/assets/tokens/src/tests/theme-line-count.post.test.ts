const path = require('path');
const { countLines } = require('./utils.js');

const THEMES = ['dark-stable', 'light-stable', 'dark-fluid', 'light-fluid'];

const themeDir = path.posix.join(__dirname, '../../dist/css/theme/webex');

describe('Theme tokens', () => {
  it('Theme token files should have same line count', async () => {
    const lineCounts = await Promise.all(
      THEMES.map(async (theme) => [theme, await countLines(path.posix.join(themeDir, `${theme}.css`))]),
    );

    const [, expectedLineCount] = lineCounts[0];

    expect(Object.fromEntries(lineCounts)).toStrictEqual(
      Object.fromEntries(THEMES.map((theme) => [theme, expectedLineCount])),
    );
  });
});
