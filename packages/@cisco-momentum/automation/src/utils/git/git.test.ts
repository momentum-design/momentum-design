import Execute from '../execute';

import Git from './git';

describe('@cisco-momentum/automation - utils.Git', () => {
  describe('static', () => {
    describe('commitsToJson()', () => {
      const commit = { value: 1, name: 'name-example', valid: true };
      const commitString = ` ${JSON.stringify(commit)} `;
      const commitsString = [commitString, commitString, commitString];
      const commits = commitsString.map((c: string) => JSON.parse(c.trim()));

      it('should convert the provided commits to a JSON object', () => {
        expect(Git.commitsToJson(commitsString)).toMatchObject(commits);
      });
    });

    describe('list()', () => {
      const count = 5;
      const format = JSON.stringify(Git.CONSTANTS.FORMAT);
      const offset = count + Git.CONSTANTS.COMMIT_INDEX_OFFSET;
      const runResults = '{ "a": "a", "b": "b" }\n{ "a": "a", "b": "b" }\n{ "a": "a", "b": "b" }';
      const rto = runResults.split('\n').map((line) => JSON.parse(line.trim()));
      let commitsToJsonSpy: jest.SpyInstance;
      let resultsToArraySpy: jest.SpyInstance;
      let runSpy: jest.SpyInstance;

      beforeEach(() => {
        commitsToJsonSpy = jest.spyOn(Git, 'commitsToJson');
        resultsToArraySpy = jest.spyOn(Execute, 'resultsToArray');
        runSpy = jest.spyOn(Execute, 'run').mockImplementation(() => Promise.resolve(runResults));
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      it('should attempt to run a command with the provided count', async () => {
        await Git.list(count);

        expect(runSpy).toHaveBeenCalledWith(`git log -${offset} --pretty=format:'${format}'`);
        expect(runSpy).toHaveBeenCalledTimes(1);
      });

      it('should attempt to convert the run results to an array', async () => {
        const results = await Execute.run(`git log -${offset} --pretty=format:'${format}'`);

        await Git.list(count);

        expect(resultsToArraySpy).toHaveBeenCalledWith(results);
        expect(resultsToArraySpy).toHaveBeenCalledTimes(1);
      });

      it('should attempt to convert the run results as an array to json', async () => {
        const results = await Execute.run(`git log -${offset} --pretty=format:'${format}'`);
        const resultsArray = Execute.resultsToArray(results);

        await Git.list(count);

        expect(commitsToJsonSpy).toHaveBeenCalledWith(expect.objectContaining(resultsArray));
        expect(commitsToJsonSpy).toHaveBeenCalledTimes(1);
      });

      it('should return a list of JSON objects', async () => {
        const received = await Git.list(count);

        expect(received).toMatchObject(rto);
      });
    });
  });
});
