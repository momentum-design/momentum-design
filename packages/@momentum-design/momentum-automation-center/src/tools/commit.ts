import { getProcessArgs } from '../lib';

const processArgs = getProcessArgs();
const { exec } = require('child_process');

class Commit {

    gitAddAll(): Promise<boolean> {
        return new Promise((resolve, reject)=>{
            exec('git add -A && git diff --name-only --cached', (err, stdout, stderr) => {
                let files = stdout ? stdout.split('\n'): null;
                if(files && files.length>0) {
                    resolve(true)
                } else {
                    resolve(false);
                }
            });
        });
    }

    commit(actor:string, token:string, repository:string ): Promise<any> {
        return new Promise((resolve, reject)=>{
            if(actor!==undefined && token!==undefined && repository!==undefined) {
                exec(`git commit -m "[skip ci]Automation(release):From ${actor}" && git push https://${ token }@github.com/${ repository }.git -f`, (err, stdout, stderr) => {});
            }
            resolve(1);
        });
    }
}

const _commit = new Commit();

async function run() {
    const needCommit = await _commit.gitAddAll();
    if(needCommit) {
        await _commit.commit(processArgs.actor, processArgs.token, processArgs.repository);
    }
}
run();