import { getProcessArgs } from '../lib';
import { MyPackagesJson } from '../config';

const https = require('https');
const write = require('write');

const processArgs = getProcessArgs();

class Version {

    async getOnlineVersion(package_name):Promise<any> {
        return new Promise((resolve, reject)=>{
            https.get(`https://registry.npmjs.org/-/package/${ package_name }/dist-tags`, (res) => {
                console.log('statusCode:', res.statusCode);
                res.on('data', (d) => {
                    resolve(d);
                });
            }).on('error', (e) => {
                reject(e);
            });
        });
    }

    next(version: string, addIndex:number=2):string {
        const arr:any[] = version.split('.');
        if(arr.length>2) {
            arr[addIndex] = parseInt(arr[addIndex])+1;
            for(let i=+addIndex+1;i<arr.length;i++) {
                arr[i] = 0;
            }
        }
        return arr.join('.');
    }

    ifNeedUpdate(version:string, onlineNewVersion:string):boolean {
        const v1 = version.split('.');
        const v2 = onlineNewVersion.split('.');
        if(v1.length!==v2.length) {
            return true
        } else {
            for(let i=0;i<v1.length;i++) {
                // do not update
                if(+v1[i] > +v2[i]) {
                    return false;
                }
            }
            return version!==onlineNewVersion;
        }
    }

    async update(package_path, addIndex:number=2) {
        const packageJson = require(package_path);
        const online = JSON.parse(await this.getOnlineVersion(packageJson.name));
        console.log(online);
        if(online && online.latest) {
            const nextVersion = this.next(online.latest, addIndex);
            if(this.ifNeedUpdate(packageJson.version, nextVersion)) { // >=
                packageJson.version = nextVersion;
                await write(package_path, JSON.stringify(packageJson, null, '\t'));
            }
        } else {
            console.log(`${ packageJson.name }'s laster verison is not found.`);
        }
    }
}

const _version = new Version();
if(processArgs['package'] && MyPackagesJson[processArgs['package']]) {
    _version.update(MyPackagesJson[processArgs['package']], processArgs['addIndex']);
}