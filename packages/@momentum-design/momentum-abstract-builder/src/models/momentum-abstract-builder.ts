import { mfs, MomentumAbstractType } from 'momentum-constructor-common';
import { BuilderConfig, CONSTANTS } from '../common/index';

class MomentumAbtractBuilder {
  build(config: BuilderConfig) { // eslint-disable-line
    mfs.clean(config.output);
    mfs.save(config.output, config.type, config.filter);
  }

  buildMomentumDesign() {
    this.build({ output: CONSTANTS.source.icon, type: MomentumAbstractType.icon });
    this.build({ output: CONSTANTS.source.iconColored, type: MomentumAbstractType['icon-colored'] });
    this.build({ output: CONSTANTS.source.iconBrand, type: MomentumAbstractType['icon-brand'] });
    this.build({ output: CONSTANTS.source.illustration, type: MomentumAbstractType.illustration });
  }
}

export const momentumAbtractBuilder = new MomentumAbtractBuilder();
