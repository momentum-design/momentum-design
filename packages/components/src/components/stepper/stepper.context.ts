import { createContext } from '@lit/context';

import { TAG_NAME } from './stepper.constants';

class StepperContext {
  public orientation?: string;

  public activeStep?: HTMLElement;

  public static context = createContext<StepperContext>(TAG_NAME);

  constructor(defaultOrientation?: string, defaultActiveStep?: HTMLElement) {
    this.orientation = defaultOrientation;
    this.activeStep = defaultActiveStep;
  }
}

export default StepperContext;
