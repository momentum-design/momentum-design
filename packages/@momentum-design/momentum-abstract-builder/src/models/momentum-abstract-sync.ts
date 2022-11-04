/* eslint-disable no-plusplus */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-useless-escape */
/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
import { momentumAbtractBuilder } from './momentum-abstract-builder';
import { CONSTANTS } from '../common/index';

const { execSync } = require('child_process');

const https = require('https');

const regVersion = /^[\~|\^]/;
const myPackage = require(CONSTANTS.packageJsonPath);

class MomentumAbstractSync {
  async getOnlineVersion(packageName:string):Promise<any> {
    return new Promise((resolve, reject) => {
      https.get(`https://registry.npmjs.org/-/package/${packageName}/dist-tags`, (res:any) => {
        res.on('data', (d:any) => {
          resolve(d);
        });
      }).on('error', (e:any) => {
        reject(e);
      });
    });
  }

  async sync() {
    const online = JSON.parse(await this.getOnlineVersion('momentum-abstract'));
    if (online && online.latest && myPackage.dependencies && myPackage.dependencies['momentum-abstract']) {
      const pVersion = myPackage.dependencies['momentum-abstract'].replace(regVersion, '');
      const oVersion = online.latest.replace(regVersion, '');
      if (this.ifNeedUpdate(pVersion, oVersion)) { // >=
        execSync('yarn workspace @momentum-design/momentum-abstract-builder up momentum-abstract');
        momentumAbtractBuilder.buildMomentumDesign();
      }
    }
  }

  ifNeedUpdate(packageVerison:string, onlineNewVersion:string):boolean {
    const packageVersionArr = packageVerison.split('.');
    const onlineNewVersionArr = onlineNewVersion.split('.');
    if (packageVersionArr.length !== onlineNewVersionArr.length) {
      return true;
    }

    for (let i = 0; i < packageVersionArr.length; i++) {
      // do not update
      if (+packageVersionArr[i] > +onlineNewVersionArr[i]) {
        return false;
      }
    }
    return packageVerison !== onlineNewVersion;
  }
}

export const momentumAbstractSync = new MomentumAbstractSync();
