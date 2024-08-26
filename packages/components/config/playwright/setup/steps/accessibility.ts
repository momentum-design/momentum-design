import { ComponentsPage, test } from '..';

const automaticA11yCheckStep = (componentsPage: ComponentsPage) => test.step('check for A11y violations', async () => {
  await componentsPage.accessibility.checkForA11yViolations();
});

export default {
  automaticA11yCheckStep,
};
