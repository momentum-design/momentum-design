import { TOKEN_FILES, SVGO_CONFIG_ILLUSTATION } from '../config';
import { getProcessArgs, TokenType } from '../lib';
import { MomentumUIIllustrationDistributor } from '../distributors';
import { Generator } from './generator';

const { optimize } = require('svgo');
const processArgs = getProcessArgs();
class GeneratorIllustration extends Generator {

    constructor() {
        super(processArgs);
        this.tokenType = TokenType.ILLUSTRATION;
        this.tokenFiles = TOKEN_FILES[this.tokenType];
        this.regFileFilter = new RegExp(".svg$","i");
        this.distributors = [
            new MomentumUIIllustrationDistributor(processArgs)
        ];
    }

    optimize(file, filePath:string) {
        return optimize(file, SVGO_CONFIG_ILLUSTATION).data;
    }

    format_to_save(data) {
        return data;
    }

}

const generatorIllustration = new GeneratorIllustration();
async function run() {
    await generatorIllustration.run();
}
run();
