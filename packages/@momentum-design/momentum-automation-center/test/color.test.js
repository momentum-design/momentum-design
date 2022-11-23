const {common, info} = require('./common');
const path = require('path');
const root = path.resolve(__dirname,'../release/momentum-abstract/color');

let files=[];

let testNode = (json, errors)=> {
    Object.keys(json).forEach((key)=>{
        const item = json[key];
        if((typeof item.hex === 'string' && item.rgba!==undefined)
        || (item.colors !==undefined && item.type!==undefined)) {
            if(!common.testToken(key)) {
                errors.push(key);
            }
        } else {
            testNode(item, errors);
        }
    });
};

let findErrorToken = (filePath)=>{
    let errors = [];
    testNode(common.readJson(filePath), errors);
    return errors;
};

describe("Test Color",()=>{

    beforeAll(() => {
        files = common.getFileList(root, /.json$/i);
    });

    test('Color: Test file name', () => {
        let errors=[];
        files.forEach((fileName)=>{
            if(!common.testName(fileName)) {
                errors.push(fileName);
            }
        });
        if(errors.length>0) {
            errors.forEach((fileName)=>{
                console.log(`${fileName} ${info.error.fileName}`);
            });
        }
        expect(errors.length).toBe(0);
    });


    test('Color: Test token name', () => {
        let errors=[];
        files.forEach((fileName)=>{
            let _errors = findErrorToken(path.join(root, fileName));
            if(_errors.length>0) {
                errors.push({
                    fileName: fileName,
                    errorTokens: _errors
                });
            }
        });
        if(errors.length>0) {
            errors.forEach((item)=>{
                console.log(`In ${item.fileName}`);
                item.errorTokens.forEach((token)=>{
                    console.log(`${token} ${info.error.tokenName}`);
                });
            });
        }
        expect(errors.length).toBe(0);
    });

});

