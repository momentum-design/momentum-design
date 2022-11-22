"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.common = void 0;
exports.info = void 0;
const fs = require('fs');

const regName = /^[A-Za-z0-9_\-\.]+$/;
const regToken = /^[A-Za-z0-9_\-]+$/;

const info = {
    error: {
        fileName: 'doet not match our naming rule for file.',
        tokenName: 'does not match our naming rule for token.'
    },
    log: {
        count: 'file(s) is being tested.'
    }
}

class Common {

    testName(name) {
        return regName.test(name);
    }

    testToken(name) {
        return regToken.test(name);
    }


    getFileList(folderPath, regFilter) {
        let fileNameList = [];
        if(fs.existsSync(folderPath)) {
            fileNameList = fs.readdirSync(folderPath);
        }
        let result = fileNameList.filter((fileName)=>{
            return regFilter.test(fileName);
        });
        console.log(`${result.length} ${info.log.count}`);
        return result;
    }

    readJson(path) {
        return JSON.parse(fs.readFileSync(path));
    }

}

exports.common = new Common();
exports.info = info;
