const path = require('path');
const { countLines } = require('./utils.js');

const darkPath = path.posix.join(__dirname, '../../dist/css/theme/webex/dark-stable.css');
const lightPath = path.posix.join(__dirname, '../../dist/css/theme/webex/light-stable.css');

describe('Theme tokens', () => {
  it('Theme token files should have same line count', async () => {
    const darkLinesCount = await countLines(darkPath);
    const lightLinesCount = await countLines(lightPath);

    expect(darkLinesCount).toBe(lightLinesCount);
  });
});
