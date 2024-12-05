import Execute from '../execute';

import type { ListItem, WhyItem } from './types';

class Yarn {
  protected static listToJson(list: Array<string>): Array<ListItem> | Array<WhyItem> {
    return list.filter((line) => !!line)
      .map((line) => JSON.parse(line));
  }

  public static why(packageName: string): Promise<Array<WhyItem>> {
    return Execute.run(`yarn why ${packageName} --peers --json`)
      .then((results) => Execute.resultsToArray(results))
      .then((list) => Yarn.listToJson(list) as Array<WhyItem>);
  }

  public static list(since?: string): Promise<Array<ListItem>> {
    return Execute.run(`yarn workspaces list${since ? ` --since="${since}" ` : ' '}--json`)
      .then((results) => Execute.resultsToArray(results))
      .then((list) => Yarn.listToJson(list) as Array<ListItem>);
  }

  // Promise<{ major: number, minor: number, patch: number }>
  public static show(packageName: string): Promise<{ major: number, minor: number, patch: number}> {
    return Execute.run(`npm show ${packageName} version`)
      .then((version) => {
        const [major, minor, patch] = version.split('.').map((value) => parseInt(value, 10));

        return { major, minor, patch };
      })
      .catch(() => ({ major: 0, minor: 0, patch: 0 }));
  }
}

export default Yarn;
