import { IDistributor, Webex, TokenType, IProcessArgs } from '../lib';
import { TOKEN_PATHS, TOKEN_FILES } from '../config';
const cliProgress = require('cli-progress');
const path = require('path');
const write = require('write');
const fs = require('fs');
const { exec } = require('child_process');

export class Generator {

    tokenType: TokenType = TokenType.COLOR;
    tokenFiles = TOKEN_FILES[this.tokenType];
    webex: Webex;
    fileList:string[] = [];
    fileListDiff:string[] = [];
    datas:Record<string,any>;
    regFileFilter = new RegExp(".json$","i");
    distributors: IDistributor[];
    processArgs: IProcessArgs;
    path_raw:string;

    constructor(processArgs: IProcessArgs) {
        this.processArgs = processArgs;
        this.webex = new Webex(processArgs);
    }

    optimize(file, filePath:string) {
        return JSON.parse(file);
    }

    format_to_save(data) {
        return JSON.stringify(data,null,'\t');
    }

    async run() {
        this.path_raw = TOKEN_PATHS.getRawPath(this.tokenType.toLowerCase());
        await this.read();
        await this.release();
        await this.distribute();
        console.log(`Generator ${this.tokenType} Finished!`);
    }

    async read() {
        this.datas = {};
        await this.getDiffList();
        this.fileList = [];
        this.scanRawFiles(Object.values(this.tokenFiles), TOKEN_PATHS.RAW);
        this.fileList.forEach((_path)=>{
            const _rawPath = TOKEN_PATHS.getRawPath(_path);
            this.datas[_path] = this.optimize(fs.readFileSync(_rawPath, 'utf8'), _path);
        });
        console.log(`${this.fileList.length} files for ${this.tokenType}.`);
    }

    private getDiffList(): Promise<any> {
        const rawFilePrefix = TOKEN_PATHS.getShortPath(this.path_raw);
        const rawPathFolder = TOKEN_PATHS.getShortPath(TOKEN_PATHS.RAW);

        return new Promise((resolve, reject)=>{
            exec('git diff --name-only HEAD~ HEAD', (err, stdout, stderr) => {
                let files = stdout ? stdout.split('\n'): null;
                console.log('@PATH: -----------------');
                console.log(rawFilePrefix);
                console.log(rawPathFolder);
                console.log('@Diff: -----------------');
                console.log(files);
                if(files && files.length>0) {
                    this.fileListDiff = files.filter((_path)=>{
                        return _path.indexOf(rawFilePrefix) === 0;
                    }).map((_path)=>{
                        return _path.replace(rawPathFolder,'');
                    });
                }
                resolve(1);
            });
        });
    }

    private getDiffDatas():Record<string,any> {
        const ret = {};
        this.fileListDiff.forEach((path)=>{
            if(this.datas[path]!==undefined) {
                ret[path] = this.datas[path];
            }
        });
        console.log('log differ');
        console.log(Object.keys(ret));
        return ret;
    }

    private scanRawFiles(list: string[], root='') {
        list.forEach((p)=>{
            const _path = path.join(root, p);
            if(fs.existsSync(_path)) {
                const stat = fs.lstatSync(_path);
                if(stat.isDirectory()) {
                    this.scanRawFiles(fs.readdirSync(_path), _path);
                } else if(stat.isFile() && this.regFileFilter.test(_path)) {
                    this.fileList.push(TOKEN_PATHS.getFilePath(_path));
                }
            }
        });
    }

    release(): Promise<any> {
        return new Promise((resolve, reject)=>{
            let filekeys = Object.keys(this.datas);
            let todo = filekeys.length;
            console.log(`Releasing ${this.tokenType}. Total: ${filekeys.length}`);
            const releaseProgroessBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
            releaseProgroessBar.start(filekeys.length, 0);
            let callback = ()=>{
                todo--;
                releaseProgroessBar.update(filekeys.length-todo);
                if(todo<=0) {
                    resolve(1);
                    releaseProgroessBar.stop();
                }
            };
            filekeys.forEach((key)=>{
                write(TOKEN_PATHS.getReleasePath(key), this.format_to_save(this.datas[key]))
                .then(() => {
                    callback();
                })
                .catch((err)=>{
                    reject(err);
                });
            });
        });
    }

    distribute():Promise<any> {
        return new Promise((resolve, reject)=>{
            let total = this.distributors.length;
            const prs = [];
            const callback = (msg)=>{
                total--;
                if(msg) {
                    console.log(msg);
                    if(msg.indexOf('http')===0) {
                        prs.push(msg);
                    }
                }
                if(total<=0) {
                    if(prs.length>0) {
                        this.webex.message(prs.join('\n'));
                    }
                    resolve(`${this.tokenType } excuted!`);
                }
            };
            const _data = this.processArgs.diffOnly? this.getDiffDatas() : this.datas;
            this.distributors.forEach((gen:IDistributor)=>{
                gen.generate(_data)
                .then((msg)=>{
                    callback(msg);
                })
                .catch((e)=>{
                    reject(e);
                });
            });
        });
    }
        
}
