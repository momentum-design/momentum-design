import { IFileFilter, IReplacementItem, MomentumAbstractType } from 'momentum-constructor-common';

export interface BuilderConfig {
    output: string;
    type: MomentumAbstractType;
    filter?: IFileFilter;
    replacement?: IReplacementItem;
}
