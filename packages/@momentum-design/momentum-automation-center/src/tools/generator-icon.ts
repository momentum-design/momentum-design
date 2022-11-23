import { TOKEN_FILES, SVGO_CONFIG, SVGO_CONFIG_ILLUSTATION } from '../config';
import { getProcessArgs, TokenType } from '../lib';
import { MomentumUIIconDistributor } from '../distributors';
import { Generator } from './generator';

const path = require('path');
const { optimize } = require('svgo');
const processArgs = getProcessArgs();
class GeneratorColor extends Generator {

    constructor() {
        super(processArgs);
        this.tokenType = TokenType.ICON;
        this.tokenFiles = TOKEN_FILES[this.tokenType];
        this.regFileFilter = new RegExp(".svg$","i");
        this.distributors = [
            new MomentumUIIconDistributor(processArgs)
        ];
    }

    optimize(file, filePath:string) {
        const iconFolder = path.join(`/`,`${TokenType.ICON.toLowerCase()}`,'/');
        if(filePath.indexOf(iconFolder)===0) {
            return optimize(file, SVGO_CONFIG).data;
        } else {
            return optimize(file, SVGO_CONFIG_ILLUSTATION).data;
        }
    }

    format_to_save(data) {
        return data;
    }

}

const generatorIcon = new GeneratorColor();
async function run() {
    await generatorIcon.run();
}
run();
