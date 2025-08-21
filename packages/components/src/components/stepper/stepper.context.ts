import { createContext } from '@lit/context';

import type { OrientationType } from '../stepperconnector/stepperconnector.types';
import type { VariantType } from '../stepperitem/stepperitem.types';

import { TAG_NAME } from './stepper.constants';

class StepperContext {
  public orientation?: OrientationType;

  public variant?: VariantType;

  public static context = createContext<StepperContext>(TAG_NAME);

  constructor(defaultOrientation?: OrientationType, defaultVariant?: VariantType) {
    this.orientation = defaultOrientation;
    this.variant = defaultVariant;
  }
}

export default StepperContext;
