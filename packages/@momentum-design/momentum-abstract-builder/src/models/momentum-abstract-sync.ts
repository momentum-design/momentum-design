import { momentumAbtractBuilder } from './momentum-abstract-builder';
import { CONSTANTS } from '../common/index';
const { execSync } = require('child_process');

const https = require('https');
const regVersion = /^[\~|\^]/;

class MomentumAbstractSync {

    async getOnlineVersion(package_name:string):Promise<any> {
        return new Promise((resolve, reject)=>{
            https.get(`https://registry.npmjs.org/-/package/${ package_name }/dist-tags`, (res:any) => {
                console.log('statusCode:', res.statusCode);
                res.on('data', (d:any) => {
                    resolve(d);
                });
            }).on('error', (e:any) => {
                reject(e);
            });
        });
    }

    async sync() {
        const myPackage = require(CONSTANTS.packageJsonPath);
        const online = JSON.parse(await this.getOnlineVersion('momentum-abstract'));
        if(online && online.latest && myPackage.dependencies && myPackage.dependencies['momentum-abstract']) {
            if(this.ifNeedUpdate(myPackage.dependencies['momentum-abstract'].replace(regVersion,''), online.latest.replace(regVersion,''))) { // >=
                execSync('yarn workspace @momentum-design/momentum-abstract-builder up momentum-abstract');
                momentumAbtractBuilder.buildMomentumDesign();
            }
        } else {
            //console.log(`${ packageJson.name }'s laster verison is not found.`);
        }
    }

    ifNeedUpdate(packageVerison:string, onlineNewVersion:string):boolean {
        const packageVerisonArr = packageVerison.split('.');
        const onlineNewVersionArr = onlineNewVersion.split('.');
        if(packageVerisonArr.length!==onlineNewVersionArr.length) {
            return true
        } else {
            for(let i=0;i<packageVerisonArr.length;i++) {
                // do not update
                if(+packageVerisonArr[i] > +onlineNewVersionArr[i]) {
                    return false;
                }
            }
            return packageVerison!==onlineNewVersion;
        }
    }

}

export const momentumAbstractSync = new MomentumAbstractSync();