import { TOKEN_FILES } from '../config';
import { getProcessArgs, TokenType } from '../lib';
import { Generator } from './generator';

const processArgs = getProcessArgs();
class GeneratorFont extends Generator {

    constructor() {
        super(processArgs);
        this.tokenType = TokenType.FONT;
        this.tokenFiles = TOKEN_FILES[this.tokenType];
        this.distributors = [];
    }

}

const generatorFont = new GeneratorFont();
async function run() {
    await generatorFont.run();
}
run();
