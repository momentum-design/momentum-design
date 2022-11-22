import { IProcessArgs, TokenType, 
    IPullRequestFile, ProjectType, IconTokenType} from '../../lib';
import { Distributor } from '../distributor';

export class MomentumUIIconDistributor extends Distributor {

    brandPath = `/${TokenType.ICON}-${IconTokenType.BRAND}/`.toLowerCase();
    iconColoredPath = `/${TokenType.ICON}-${IconTokenType.COLORED}/`.toLowerCase();

    constructor(processArgs:IProcessArgs) {
        super();
        this.project_name = ProjectType.momentum_ui;
        this.tokenType = TokenType.ICON;
        super.init(processArgs);
        this.prConfig.head = 'icon';
    }

    router(filePath:string, data: any):Promise<Record<string,IPullRequestFile>> {
        return new Promise ((resolve, reject)=>{
            const ret = {};
            if(filePath.indexOf(this.brandPath)===-1 && filePath.indexOf(this.iconColoredPath)===-1) {
                const repoPath = this.getRepoPath(filePath).replace(/\_/g,'-'); // replace(/_/g,'-') back to bad names for web app team
                if(repoPath) {
                    ret[repoPath] = {
                        content: data
                    };
                }
            }
            resolve(ret);
        });
    }

}