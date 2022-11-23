import { sendPullRequest, IPRConfig, IPullRequestFile,
    IGit, IProcessArgs, IDistributor, ProjectType, TokenType} from '../lib';
import { TOKEN_PROJECTS, TOKEN_PATHS } from '../config';
const write = require('write');
const path = require('path');

export class Distributor implements IDistributor{
    project_name:ProjectType = ProjectType.momentum_ui;
    tokenType:TokenType = TokenType.COLOR;
    gitPath: Record<string, string>;
    gitPathFolder: string[];
    git:IGit;
    prConfig:IPRConfig;

    init(processArgs: IProcessArgs) {
        this.gitPath = Object.assign({}, TOKEN_PROJECTS[this.project_name].files[this.tokenType]);
        this.gitPathFolder = Object.keys(this.gitPath).filter((_path)=>{
            return !TOKEN_PATHS.isFile(_path);
        }).sort((a,b)=>{
            return a.split('/').length - b.split('/').length;
        });
        this.git = Object.assign({
            token: processArgs.token
        }, TOKEN_PROJECTS[this.project_name].git);
        this.prConfig = {
            head: 'tokens',
            actor: processArgs.actor
        };
    }

    router(filePath:string, data: any):Promise<Record<string,IPullRequestFile>> {
        return new Promise ((resolve, reject)=>{
            const ret = {};
            const repoPath = this.getRepoPath(filePath);
            if(repoPath) {
                ret[repoPath] = {
                    content: JSON.stringify(data,null,'\t')
                };
            }
            resolve(ret);
        });
    }

    getRepoPath(filePath:string):string|null {
        if(this.gitPath[filePath]) {
            return this.gitPath[filePath];
        } else {
            const folder = this.gitPathFolder.find((folfer)=>{
                return filePath.indexOf(folfer) === 0;
            });
            return folder ? filePath.replace(folder, this.gitPath[folder]) :null;
        }
    }

    generate(datas: Record<string ,any>):Promise<any> {
        return new Promise((resolve, reject)=>{
            let datasKeys = Object.keys(datas);
            //------
            let todo = datasKeys.length;
            let files = {};
            let callback = (this.git.token && this.git.token!=='')? (_files:Record<string, IPullRequestFile>)=>{
                todo--;
                Object.assign(files, _files);
                if(todo<=0) {
                    this.send(files).then((pr)=>{
                        if(pr && pr.data && pr.data.changed_files && pr.data.html_url) {
                            resolve(`${pr.data.html_url}\nPull request was created to @${this.git.owner}/${this.git.repo}.\n${pr.data.changed_files} file(s) changed!`);
                        } else {
                            resolve(`$pr @${this.git.owner}/${this.git.repo}.`);
                        }
                    })
                    .catch((err)=>{
                        reject(err);
                    });
                }
            } : (_files:Record<string,IPullRequestFile>)=>{
                todo--;
                Object.keys(_files).forEach((key)=>{
                    files[TOKEN_PATHS.getOutputPath(path.join(this.git.owner, this.git.repo, key))] = _files[key];
                });
                if(todo<=0) {
                    this.save(files).then(()=>{
                        resolve(`$saved @${this.git.owner}/${this.git.repo}.`);
                    })
                    .catch((err)=>{
                        reject(err);
                    });;
                }
            };
            datasKeys.forEach((filePath)=>{
                const dataContent = datas[filePath];
                this.router(filePath, dataContent)
                .then((files)=>{
                    callback(files);
                })
                .catch((e)=>{
                    reject(e)
                });
            });
        });
    }

    save(files: Record<string, IPullRequestFile>):Promise<any> {
        return new Promise((resolve, reject)=>{
            let filekeys = Object.keys(files);
            let todo = filekeys.length;
            let callback = ()=>{
                todo--;
                if(todo<=0) {
                    resolve(1);
                }
            };
            filekeys.forEach((key)=>{
                write(key, files[key].content)
                .then(() => {
                    callback();
                })
                .catch((err)=>{
                    reject(err);
                });
            });
        });
    }

    send(files: Record<string, IPullRequestFile>):Promise<any> {
        return sendPullRequest(this.git, files, this.prConfig);
    }
}