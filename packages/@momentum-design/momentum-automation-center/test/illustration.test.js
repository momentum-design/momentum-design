const {common, info} = require('./common');
const path = require('path');
const root = path.resolve(__dirname,'../release/momentum-abstract/illustration');

describe("Test illustration",()=>{

    test('Illustration: Test file name', () => {
        let errors=[];
        common.getFileList(root, /.svg$/i).forEach((fileName)=>{
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
});

