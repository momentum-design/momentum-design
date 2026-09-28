import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';

const HOST_SELECTOR = 'mdc-aiassistantprompt';

const setup = async (componentsPage: ComponentsPage) => {
  await componentsPage.mount({
    html: `<${HOST_SELECTOR}></${HOST_SELECTOR}>`,
    clearDocument: true,
  });

  const aiAssistantPrompt = componentsPage.page.locator(HOST_SELECTOR);
  await aiAssistantPrompt.waitFor({ state: 'attached' });
  return aiAssistantPrompt;
};

test('mdc-aiassistantprompt', async ({ componentsPage }) => {
  const aiAssistantPrompt = await setup(componentsPage);

  await test.step('should register the host', async () => {
    await expect(aiAssistantPrompt).toHaveCount(1);
  });

  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('aiassistantprompt-default');
  });
});
