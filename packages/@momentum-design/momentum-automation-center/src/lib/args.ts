import { IProcessArgs } from './types';

const regArgs = /^([^\=]+)\=([^\=]+)$/;

export const getProcessArgs = (): IProcessArgs=> {
    const args = process.argv.slice(2);
    const ret = {};
    args.forEach((str)=>{
        const result = str.match(regArgs);
        if(result && typeof result.length === 'number' && result.length===3) {
            ret[result[1]] = result[2];
        }
    });
    return ret;
}