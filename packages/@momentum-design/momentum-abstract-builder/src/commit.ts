/* eslint-disable no-useless-escape */
/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
const regArgs = /^([^\=]+)\=([^\=]+)$/;

const { exec, execSync } = require('child_process');

class Commit {
  getArgs():Record<string, string> {
    const args = process.argv.slice(2);
    const ret:Record<string, string> = {};
    args.forEach((str) => {
      const result = str.match(regArgs);
      if (result && typeof result.length === 'number' && result.length === 3) {
        ret[result[1]] = result[2];
      }
    });
    return ret;
  }

  gitAddAll(): Promise<boolean> {
    return new Promise((resolve) => {
      exec('git add -A && git diff --name-only --cached', (_err:any, stdout:any) => {
        const files = stdout ? stdout.split('\n') : null;
        if (files && files.length > 0) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  commit(token:string, repository:string) {
    if (token !== undefined && repository !== undefined) {
      execSync(`git commit -m "[skip ci]Automation(release):Update Momentum Abstract Data" && git push https://${token}@github.com/${repository}.git -f`); // eslint-disable-line
    }
  }
}

const commit = new Commit();

async function run() {
  const processArgs = commit.getArgs();
  const needCommit = await commit.gitAddAll();
  if (needCommit) {
    await commit.commit(processArgs.token, processArgs.repository);
  }
}
run();
