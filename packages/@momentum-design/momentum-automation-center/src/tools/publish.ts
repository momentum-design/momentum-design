import { getProcessArgs, Webex } from '../lib';
import { MyPackagesJson } from '../config';
const npmPublish = require("@jsdevtools/npm-publish");
const processArgs = getProcessArgs();

async function publish(package_path) {
    if(processArgs['tokenNpm']) {
        const myPackage = require(package_path);
        if(myPackage) {
            console.log(`Trying to publish ${myPackage.name}`);
            const result = await npmPublish({
                token: processArgs['tokenNpm'],
                package: package_path,
                checkVersion: true
            });
            if(result.type !=='none' && result.type !=='lower') {
                const webex = new Webex(processArgs);
                webex.message(`${ myPackage.name } published a new version ${ myPackage.version }.\nhttps://www.npmjs.com/package/${ myPackage.name }`);
            } else {
                console.log(`${ myPackage.name } has no new version!`);
            }

        }
    }
};

Object.values(MyPackagesJson).forEach((_path)=>{
    publish(_path);
});
