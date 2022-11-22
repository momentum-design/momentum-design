import { IProcessArgs,
    rgb, rgba, cmyk, ICoreColor, TokenType, 
    IPullRequestFile, ColorTokenType, ProjectType} from '../../lib';
import { TOKEN_FILES } from '../../config';
import { Distributor } from '../distributor';

type MomentumUICoreColor = {
    name: string;
    hex: string;
    rgb: rgb;
    rgba: rgba;
    cmyk?: cmyk;
}
export class MomentumUIColorDistributor extends Distributor {

    constructor(processArgs:IProcessArgs) {
        super();
        this.project_name = ProjectType.momentum_ui;
        this.tokenType = TokenType.COLOR;
        super.init(processArgs);
        this.prConfig.head = 'color-token';
    }

    router(path: string, data: any): Promise<Record<string,IPullRequestFile>> {
        switch(path) {
            case TOKEN_FILES[TokenType.COLOR][ColorTokenType.CORE]:
                return this.generateCoreColor(path, data);
            default:
                return super.router(path, data);
        }
    }

    getMomentumUICore(name: string, core: Record<string, ICoreColor>): Record<string, MomentumUICoreColor> {
        let ret = {};
        Object.keys(core).forEach((key)=>{
            const _name = `$md-${key}`.replace('-alpha', '');
            const _key = key.replace(`${name}-`,'');
            const _value = {
                name: _name,
                hex: core[key].hex,
                rgb: core[key].rgb,
                rgba: core[key].rgba,
                cmyk: core[key].cmyk
            };
            ret[_key] = _value;
        });
        return ret;
    }

    generateCoreColor(path:string ,data: any ):Promise<Record<string,IPullRequestFile>> {
        return new Promise((resolve, reject)=>{
            const ret = {};
            const repoPath = this.getRepoPath(path);
            if(repoPath) {
                let contentData={};
                let source = Object.assign({}, data['core color'], data['decorative color']);
                Object.keys(source).forEach((key)=>{
                    let _obj = this.getMomentumUICore(key, source[key]);
                    if(key === 'white-alpha' || key === 'black-alpha') {
                        _obj['default'] = Object.assign({}, _obj['100']);
                        _obj['default'].name = _obj['default'].name.replace('-100','');
                        contentData[key.replace('-alpha','')] = _obj;
                    } else {
                        contentData[key] = _obj;
                    }
                });
                contentData['theme'] = Object.assign({},contentData['blue']);
                Object.keys(contentData['theme']).forEach((key)=>{
                    contentData['theme'][key].name = contentData['theme'][key].name.replace('blue', 'theme');
                });
                ret[repoPath] = {
                    content: `const colors = ${ JSON.stringify(contentData,null,'\t')};\nmodule.exports = colors;`
                };
            }
            resolve(ret);
        });
    }
}