import { TOKEN_FILES } from '../config';
import { getProcessArgs, TokenType } from '../lib';
import { Generator } from './generator';

const processArgs = getProcessArgs();
class GeneratorColor extends Generator {

    constructor() {
        super(processArgs);
        this.tokenType = TokenType.COLOR;
        this.tokenFiles = TOKEN_FILES[this.tokenType];
        this.distributors = [
            // new MomentumUIColorDistributor(processArgs), // open this when ready to update Momentum UI
        ];
    }

}

const generatorColor = new GeneratorColor();
async function run() {
    await generatorColor.run();
}
run();
