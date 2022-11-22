import { IProcessArgs, TokenType, 
    IPullRequestFile, ProjectType} from '../../lib';
import { Distributor } from '../distributor';

export class MomentumUIIllustrationDistributor extends Distributor {

    constructor(processArgs:IProcessArgs) {
        super();
        this.project_name = ProjectType.momentum_ui;
        this.tokenType = TokenType.ILLUSTRATION;
        super.init(processArgs);
        this.prConfig.head = 'illustration';
    }

    router(filePath:string, data: any):Promise<Record<string,IPullRequestFile>> {
        return new Promise ((resolve, reject)=>{
            const ret = {};
            const repoPath = this.getRepoPath(filePath).replace(/\_/g,'-'); // replace(/_/g,'-')  back to bad names
            if(repoPath) {
                ret[repoPath] = {
                    content: data
                };
            }
            resolve(ret);
        });
    }

}