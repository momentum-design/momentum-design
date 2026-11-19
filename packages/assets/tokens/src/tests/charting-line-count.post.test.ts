const path = require('path');
const { countLines } = require('./utils.js');

const MODES = ['dark', 'light'];

const chartingDir = path.posix.join(__dirname, '../../dist/css/charting');

describe('Charting tokens', () => {
  it('Charting token files should have the same line count', async () => {
    const lineCounts = await Promise.all(
      MODES.map(async (mode) => [mode, await countLines(path.posix.join(chartingDir, `${mode}.css`))]),
    );

    const [, expectedLineCount] = lineCounts[0];

    expect(Object.fromEntries(lineCounts)).toStrictEqual(
      Object.fromEntries(MODES.map((mode) => [mode, expectedLineCount])),
    );
  });
});
