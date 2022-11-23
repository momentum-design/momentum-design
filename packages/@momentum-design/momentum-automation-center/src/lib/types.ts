export type rgb = {
    r: number;
    g: number;
    b: number;
}

export type lch = {
    l: number;
    c: number;
    h: number;
}

export type rgba = {
    r: number;
    g: number;
    b: number;
    a: number;
}

export type cmyk = {
    c: number;
    m: number;
    y: number;
    k: number;
}

export enum ProjectType {
    momentum_ui = 'momentum_ui',
    momentum_token = 'momentum_token'
}

export enum TokenType {
    FONT = 'FONT',
    COLOR = 'COLOR',
    ICON = 'ICON',
    EFFECT ='EFFECT',
    COMPONENT = 'COMPONENT',
    ILLUSTRATION = 'ILLUSTRATION'
};

export enum ColorTokenType {
    CORE = 'CORE',
    THEME = 'THEME',
    ADDITONAL = 'ADDITONAL'
};

export enum FontTokenType {
    DEFAULT = 'DEFAULT'
};

export enum IconTokenType {
    DEFAULT = 'DEFAULT',
    COLORED = 'COLORED',
    BRAND = 'BRAND'
};

export enum IllustrationTokenType {
    DEFAULT = 'DEFAULT'
};

export type ICoreColor = {
    hex: string;
    rgb: rgb;
    rgba: rgba;
    lch: lch;
    cmyk: cmyk;
    id?: string;
}

export type IGrandientColor = {
    type: 'GRADIENT_LINEAR' | 'GRADIENT_RADIAL' | 'GRADIENT_ANGULAR' | 'GRADIENT_DIAMOND' | string;
    colors: Record<string, ICoreColor>
    id?: string;
}

export type IActionProcessArgs = {
    token?: string;
    tokenWebex?:string;
    actor?: string;
    diffOnly?:boolean;
    repository?:string;
}

export type IProcessArgs = IActionProcessArgs | Record<string, string>;

export type PullRequestDelegate = ()=> string;
export type PullRequestFile = IPullRequestFile | PullRequestDelegate;
export interface IPullRequestFile {
    content: any;
    encoding?: string;
    mode?: string;
}
export interface IPRConfig {
    title?:string;
    body?:string;
    commit?:string;
    actor?:string;
    head:string;
}

export interface IGit {
    owner: string;
    repo: string;
    baseUrl?: string;
    token?: string;
}

export interface IProject {
    git: IGit;
    files: Record<string, Record<string, string>>;
}

export interface ITokenConfig {
    path_repo?: string;
    path_output: string;
}
export interface IDistributor  {
    git:IGit;
    prConfig:IPRConfig;
    init:(processArgs: IProcessArgs)=>void;
    router: (filePath: string, data:any)=>Promise<Record<string, PullRequestFile>>;
    generate: (raw: Record<string ,any>)=>Promise<any>;
    save: (files: Record<string, PullRequestFile>)=>Promise<any>;
    send: (files: Record<string, PullRequestFile>)=>Promise<any>;
}


