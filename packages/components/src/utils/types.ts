export type ValueOf<T> = T[keyof T];
export type Constructor<T = {}> = new (...args: any[]) => T;