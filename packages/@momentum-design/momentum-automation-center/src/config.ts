import { IProject, TokenType, ColorTokenType, FontTokenType , IconTokenType, ProjectType } from './lib/types';
const path = require('path');

const version = '2022';
const path_root = path.resolve(__dirname,'../');
const path_raw = path.resolve(__dirname,'../raw', version);
const path_output = path.resolve(__dirname,'../output');
const path_packages = path.resolve(__dirname,'../release');
const path_release = path.resolve(__dirname,'../release/momentum-abstract');

export const TOKEN_PATHS = {
    VERSION: version,
    RAW: path_raw,
    OUTPUT: path_output,
    RELEASE: path_release,
    getShortPath(filePath) {
        return filePath.replace(path_root,'').replace(/^[\/\\]*/g,'');
    },
    getPackagePath(filePath) {
        return path.join(path_packages, filePath);
    },
    getRawPath(filePath) {
        return path.join(path_raw, filePath);
    },
    getOutputPath(filePath) {
        return path.join(path_output, filePath);
    },
    getReleasePath(filePath) {
        return path.join(path_release, filePath);
    },
    getFilePath(rawPath, root = path_raw) {
        return path.join(rawPath.replace(root, ''));
    },
    isFile(_path:string) {
        const arr = _path.split('/');
        return arr[arr.length-1].indexOf('.')!==-1;
    },
    stand(_path:string) {
        return _path.replace(/$(\/|)/,'')
    }
};

export const MyPackagesJson =  {
    'momentum-abstract': TOKEN_PATHS.getPackagePath('momentum-abstract/package.json')
};

export const TOKEN_FILES = {
    [TokenType.COLOR]: {
        [ColorTokenType.CORE]: path.join(`/`,`${TokenType.COLOR.toLowerCase()}/core.json`),
        [ColorTokenType.THEME]: path.join(`/`,`${TokenType.COLOR.toLowerCase()}/theme.json`),
        [ColorTokenType.ADDITONAL]: path.join(`/`,`${TokenType.COLOR.toLowerCase()}/additional.json`)
    },
    [TokenType.ICON]: {
        [IconTokenType.DEFAULT]: path.join(`/`,`${TokenType.ICON.toLowerCase()}`),
        [IconTokenType.COLORED]: path.join(`/`,`${TokenType.ICON.toLowerCase()}-${IconTokenType.COLORED.toLowerCase()}`),
        [IconTokenType.BRAND]: path.join(`/`,`${TokenType.ICON.toLowerCase()}-${IconTokenType.BRAND.toLowerCase()}`)
    },
    [TokenType.FONT]: {
        [FontTokenType.DEFAULT]: path.join(`/`,`${TokenType.FONT.toLowerCase()}`)
    },
    [TokenType.ILLUSTRATION]: {
        [IconTokenType.DEFAULT]: path.join(`/`,`${TokenType.ILLUSTRATION.toLowerCase()}`)
    }
}

export const TOKEN_PROJECTS:Record<string,IProject> = {
    [ProjectType.momentum_ui]: {
        git: {
            owner: 'momentum-design',
            repo: 'momentum-ui'
        },
        files: {
            [TokenType.COLOR]: {
                [TOKEN_FILES[TokenType.COLOR][ColorTokenType.CORE]]: 'tokens/src/core/colors.js'
            },
            [TokenType.ICON]: {
                [TOKEN_FILES[TokenType.ICON][IconTokenType.DEFAULT]]: 'icons-rebrand/svg'
            },
            [TokenType.ILLUSTRATION]: {
                [TOKEN_FILES[TokenType.ILLUSTRATION][IconTokenType.DEFAULT]]: 'illustrations/svg'
            }
        }
    },
    [ProjectType.momentum_token]: {
        git: {
            owner: 'momentum-design',
            repo: 'tokens'
        },
        files: {
            [TokenType.COLOR]: {
                [TOKEN_FILES[TokenType.COLOR][ColorTokenType.CORE]]: 'core/color/',
                [TOKEN_FILES[TokenType.COLOR][ColorTokenType.THEME]]: 'theme-data/',
                [TOKEN_FILES[TokenType.COLOR][ColorTokenType.ADDITONAL]]: 'theme-data/',
            }
        }
    }
};

export const WEBEX_SPACES = {
    'webex api text': '38a7a410-d4c1-11ec-8ada-b1058fbde9fb',
    'INNER pioneers': '3817ad60-d764-11ec-b810-b30990163f39'
};

export const SVGO_CONFIG = {
    mergePaths: true,
    //  multipass: true, // boolean. false by default
    // datauri: 'enc', // 'base64' (default), 'enc' or 'unenc'.
    plugins: [
        // set of built-in plugins enabled by default
        {
            name: 'preset-default',
            params: {
                overrides: {
                    removeViewBox: false,
                },
            },
        },
        // or by expanded notation which allows to configure plugin
        {
            name: "removeAttrs",
            params: {
              attrs: "(fill|stroke)"
            }
        }
    ]
}

export const SVGO_CONFIG_ILLUSTATION = {
    mergePaths: true,
    //  multipass: true, // boolean. false by default
    // datauri: 'enc', // 'base64' (default), 'enc' or 'unenc'.
    plugins: [
        // set of built-in plugins enabled by default
        {
            name: 'preset-default',
            params: {
                overrides: {
                    removeViewBox: false,
                },
            },
        }
    ]
}