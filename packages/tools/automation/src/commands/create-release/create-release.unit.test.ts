import { Command } from '../../models';
import { Git, Yarn } from '../../utils';
import * as Util from '../../utils';
import GetPackages from '../get-packages';
import CreateRelease from './create-release';

const mockConfig = {
  'commit-index': 1,
  packages: ['package-name'],
  targets: [
    'package-name',
  ],
};

describe('Create Release', () => {
  let parseSpy: jest.SpyInstance;
  let gitListSpy: jest.SpyInstance;
  let getPackageSpy: jest.SpyInstance;
  let yarnListSpy: jest.SpyInstance;
  let gitPRDescriptionSpy: jest.SpyInstance;
  let compressSpy: jest.SpyInstance;
  let gitReleaseSpy: jest.SpyInstance;

  beforeEach(() => {
    parseSpy = jest.spyOn(Command, 'parse').mockImplementation(() => mockConfig);
    gitListSpy = jest.spyOn(Git, 'list').mockImplementation(() => Promise.resolve(
      [
        { commit: 'fake-commit-1' },
        { commit: 'fake-commit-2' },
      ],
    ));
    yarnListSpy = jest.spyOn(Yarn, 'list')
      .mockImplementation(() => Promise.resolve([{
        name: 'package-name',
        version: '0.0.1',
      } as any]));
    gitPRDescriptionSpy = jest.spyOn(Git, 'getPullRequestDetails').mockImplementation(() => Promise.resolve([
      {
        title: 'fake-pr-title',
        body: 'fake-pr-body',
      },
    ]));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should not release package when there are no changes', async () => {
    getPackageSpy = jest.spyOn(GetPackages, 'process')
      .mockImplementation(
        () => Promise.resolve({ collection: [
          { package: 'fake-package' },
        ] } as any),
      );
    const results = await CreateRelease.execute();
    expect(parseSpy).toHaveBeenCalled();
    expect(gitListSpy).toHaveBeenCalledWith(1);
    expect(getPackageSpy).toHaveBeenCalledWith(mockConfig);
    expect(yarnListSpy).toHaveBeenCalledWith('fake-commit-2');
    expect(results).toEqual('No packages matched, skipping release\n');
  });

  it('should release the valid package', async () => {
    compressSpy = jest.spyOn(Util, 'compress').mockImplementation(() => Promise.resolve('compress complete'));
    gitReleaseSpy = jest.spyOn(Git, 'release').mockImplementation(() => Promise.resolve('release complete'));
    getPackageSpy = jest.spyOn(GetPackages, 'process')
      .mockImplementation(
        () => Promise.resolve({ collection: [
          {
            package: 'package-name',
            readDefinition: () => Promise.resolve({
              package: 'package-name',
              path: 'package-path',
              name: 'package',
              definition: {
                version: '0.0.2',
              },
            }),
          },
        ] } as any),
      );
    const mockNotes = [
      '## fake-pr-title\r\n',
      'fake-pr-body\r\n',
      ' ### Package:\n',
      'https://www.npmjs.com/package/package-name/v/0.0.2',
    ].join('');
    const results = await CreateRelease.execute();
    expect(compressSpy).toHaveBeenCalled();
    expect(gitPRDescriptionSpy).toHaveBeenCalled();
    expect(gitReleaseSpy).toHaveBeenCalledWith('package-name@0.0.2', 'package', mockNotes, 'compress complete');
    expect(results).toEqual('Released: release complete');
  });
});
