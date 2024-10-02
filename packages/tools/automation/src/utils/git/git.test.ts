import Execute from '../execute';

import Git from './git';

describe('@momentum-design/automation - utils.Git', () => {
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
      const format = JSON.stringify(Git.CONSTANTS.FORMAT).replace(/"/g, '\'');
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

        expect(runSpy).toHaveBeenCalledWith(`git --no-pager log -n ${offset} --pretty=format:"${format}"`);
        expect(runSpy).toHaveBeenCalledTimes(1);
      });

      it('should attempt to convert the run results to an array', async () => {
        const results = await Execute.run(`git log -${offset} --pretty=format:"${format}"`);

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

    describe('changes()', () => {
      const offset = Git.CONSTANTS.COMMIT_INDEX_OFFSET;
      const head = 'head';
      const previous = 'previous';
      const runResults = '1\t1\tpackages/tools/tokens/test.file';
      const results = [
        {
          added: 1,
          removed: 1,
          file: 'packages/tools/tokens/test.file',
        },
      ];
      let listSpy: jest.SpyInstance;
      let runSpy: jest.SpyInstance;

      beforeEach(() => {
        listSpy = jest.spyOn(Git, 'list').mockImplementation(() => Promise.resolve(
          [{ commit: 'head', subject: 'subject-a' }, { commit: 'previous', subject: 'subject-a' }],
        ));
        runSpy = jest.spyOn(Execute, 'run').mockImplementation(() => Promise.resolve(runResults));
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      it('should attempt to run a command with the provided filter (none) and count', async () => {
        const changes = await Git.changes('', offset);

        expect(runSpy).toHaveBeenCalledTimes(1);
        expect(runSpy).toHaveBeenLastCalledWith(`git diff --numstat ${previous} ${head}`);
        expect(listSpy).toHaveBeenCalledTimes(1);
        expect(changes).toEqual(results);
      });

      it('should attempt to run a command with the provided filter (tokens) and count', async () => {
        const changes = await Git.changes('tokens', offset);

        expect(runSpy).toHaveBeenCalledTimes(1);
        expect(runSpy).toHaveBeenLastCalledWith(`git diff --numstat ${previous} ${head}`);
        expect(listSpy).toHaveBeenCalledTimes(1);
        expect(changes).toEqual(results);
      });

      it('should attempt to run a command with the provided filter (not valid) and count', async () => {
        const changes = await Git.changes('invalid', offset);

        expect(runSpy).toHaveBeenCalledTimes(1);
        expect(runSpy).toHaveBeenLastCalledWith(`git diff --numstat ${previous} ${head}`);
        expect(listSpy).toHaveBeenCalledTimes(1);
        expect(changes).toEqual([]);
      });
    });

    describe('release()', () => {
      const tag = 'v1.0.0';
      const title = 'Release Title';
      const notes = 'Release Notes';
      const dist = 'dist';
      let runSpy: jest.SpyInstance;

      beforeEach(() => {
        runSpy = jest.spyOn(Execute, 'run').mockImplementation(() => Promise.resolve('Release created'));
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      it('should create a release with the provided tag, title, notes, and dist', async () => {
        const result = await Git.release(tag, title, notes, dist);

        expect(runSpy).toHaveBeenCalledWith(
          `gh release create ${tag} ${dist} --title "${tag} - ${title}" --notes "${notes}"`,
        );
        expect(runSpy).toHaveBeenCalledTimes(1);
        expect(result).toBe('Release created');
      });

      it('should create a release with the provided tag, title, and notes without dist', async () => {
        const result = await Git.release(tag, title, notes);

        expect(runSpy).toHaveBeenCalledWith(`gh release create ${tag}  --title "${tag} - ${title}" --notes "${notes}"`);
        expect(runSpy).toHaveBeenCalledTimes(1);
        expect(result).toBe('Release created');
      });
    });

    describe('getPullRequestDetails()', () => {
      const commitSHA = 'abc123';
      const token = 'fake-token';
      const pullRequestDetails = [{ title: 'PR Title' }];
      let runSpy: jest.SpyInstance;
      let fetchSpy: jest.SpyInstance;

      beforeEach(() => {
        runSpy = jest.spyOn(Execute, 'run').mockImplementation(() => Promise.resolve(token));
        fetchSpy = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
          json: () => Promise.resolve(pullRequestDetails),
        } as Response));
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      it('should fetch pull request details for the given commit SHA', async () => {
        const result = await Git.getPullRequestDetails(commitSHA);

        expect(runSpy).toHaveBeenCalledWith('gh auth token');
        expect(runSpy).toHaveBeenCalledTimes(1);
        expect(fetchSpy).toHaveBeenCalledWith(`${Git.CONSTANTS.COMMITS_API_URL}/${commitSHA}/pulls`, {
          headers: {
            Authorization: `Bearer ${token.trim()}`,
          },
        });
        expect(fetchSpy).toHaveBeenCalledTimes(1);
        expect(result).toEqual(pullRequestDetails);
      });

      it('should return null if an error occurs while fetching pull request details', async () => {
        fetchSpy.mockImplementationOnce(() => Promise.reject(new Error('Fetch error')));

        const result = await Git.getPullRequestDetails(commitSHA);

        expect(runSpy).toHaveBeenCalledWith('gh auth token');
        expect(runSpy).toHaveBeenCalledTimes(1);
        expect(fetchSpy).toHaveBeenCalledTimes(1);
        expect(result).toBeNull();
      });
    });

    describe('getPullRequestTitlePrefix()', () => {
      const commitSHA = 'abc123';
      const pullRequestDetails = [{ title: 'feat(scope): PR Title' }];
      let getPullRequestDetailsSpy: jest.SpyInstance;

      beforeEach(() => {
        getPullRequestDetailsSpy = jest
          .spyOn(Git, 'getPullRequestDetails')
          .mockImplementation(() => Promise.resolve(pullRequestDetails));
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      it('should return the prefix from the pull request title', async () => {
        const result = await Git.getPullRequestTitlePrefix(commitSHA);

        expect(getPullRequestDetailsSpy).toHaveBeenCalledWith(commitSHA);
        expect(getPullRequestDetailsSpy).toHaveBeenCalledTimes(1);
        expect(result).toBe('feat');
      });

      it('should return the prefix only the pull request title', async () => {
        getPullRequestDetailsSpy.mockImplementationOnce(() => Promise.resolve([{ title: 'fix: PR Title fixes' }]));

        const result = await Git.getPullRequestTitlePrefix(commitSHA);

        expect(getPullRequestDetailsSpy).toHaveBeenCalledWith(commitSHA);
        expect(getPullRequestDetailsSpy).toHaveBeenCalledTimes(1);
        expect(result).toBe('fix');
      });

      it('should return null if no prefix is found in the pull request title', async () => {
        getPullRequestDetailsSpy.mockImplementationOnce(() => Promise.resolve([{ title: 'PR Title' }]));

        const result = await Git.getPullRequestTitlePrefix(commitSHA);

        expect(getPullRequestDetailsSpy).toHaveBeenCalledWith(commitSHA);
        expect(getPullRequestDetailsSpy).toHaveBeenCalledTimes(1);
        expect(result).toBeNull();
      });

      it('should return null if no pull request details are found', async () => {
        getPullRequestDetailsSpy.mockImplementationOnce(() => Promise.resolve([]));

        const result = await Git.getPullRequestTitlePrefix(commitSHA);

        expect(getPullRequestDetailsSpy).toHaveBeenCalledWith(commitSHA);
        expect(getPullRequestDetailsSpy).toHaveBeenCalledTimes(1);
        expect(result).toBeNull();
      });
    });
  });
});
