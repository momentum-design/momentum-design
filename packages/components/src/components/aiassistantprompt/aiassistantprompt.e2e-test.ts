import { expect } from '@playwright/test';

import { ComponentsPage, test } from '../../../config/playwright/setup';

const HOST_SELECTOR = 'mdc-aiassistantprompt';

type SetupOptions = {
  componentsPage: ComponentsPage;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  dataAriaLabel?: string;
  header?: string;
  footerLeft?: string;
  footerRight?: string;
  extraHtml?: string;
};

const setup = async ({
  componentsPage,
  value,
  placeholder,
  disabled,
  readonly,
  dataAriaLabel = 'AI assistant prompt',
  header,
  footerLeft,
  footerRight,
  extraHtml,
}: SetupOptions) => {
  await componentsPage.mount({
    html: `
      <div>
        <${HOST_SELECTOR}
          ${value ? `value="${value}"` : ''}
          ${placeholder ? `placeholder="${placeholder}"` : ''}
          ${disabled ? 'disabled' : ''}
          ${readonly ? 'readonly' : ''}
          data-aria-label="${dataAriaLabel}"
        >
          ${header ?? ''}
          ${footerLeft ?? ''}
          ${footerRight ?? ''}
        </${HOST_SELECTOR}>
        ${extraHtml ?? ''}
      </div>
    `,
    clearDocument: true,
  });

  const aiAssistantPrompt = componentsPage.page.locator(HOST_SELECTOR);
  await aiAssistantPrompt.waitFor({ state: 'attached' });
  const textarea = aiAssistantPrompt.locator('textarea');
  return { aiAssistantPrompt, textarea };
};

test('mdc-aiassistantprompt', async ({ componentsPage }) => {
  const { aiAssistantPrompt, textarea } = await setup({
    componentsPage,
    placeholder: 'Ask about the Example project',
  });

  await test.step('should render a native textarea inside the prompt chrome', async () => {
    await expect(textarea).toBeVisible();
    await expect(aiAssistantPrompt).not.toHaveAttribute('data-has-header');
    await expect(aiAssistantPrompt).not.toHaveAttribute('data-has-footer-left');
    await expect(aiAssistantPrompt).not.toHaveAttribute('data-has-footer-right');
  });

  await test.step('should update value when typing', async () => {
    await textarea.fill('Summarize the Example project');
    await expect(textarea).toHaveValue('Summarize the Example project');
    await expect(aiAssistantPrompt).toHaveAttribute('value', 'Summarize the Example project');
  });

  await test.step('should show header and footer content when slotted', async () => {
    const withRegions = await setup({
      componentsPage,
      header: `
        <mdc-inputchip slot="header" label="Alex Example" clear-aria-label="Remove Alex Example"></mdc-inputchip>
        <mdc-inputchip slot="header" label="Example project" clear-aria-label="Remove Example project"></mdc-inputchip>
      `,
      footerLeft: `
        <mdc-button slot="footer-left" variant="tertiary" size="32" prefix-icon="attachment-bold" aria-label="Attach a file"></mdc-button>
        <mdc-button slot="footer-left" variant="tertiary" size="32" prefix-icon="plus-bold" aria-label="Add context"></mdc-button>
      `,
      footerRight: `
        <mdc-button slot="footer-right" variant="tertiary" size="32">Ask</mdc-button>
        <mdc-button slot="footer-right" variant="tertiary" size="32" prefix-icon="microphone-bold" aria-label="Start voice input"></mdc-button>
        <mdc-button slot="footer-right" variant="primary" size="32" prefix-icon="send-bold" aria-label="Send prompt"></mdc-button>
      `,
    });
    await expect(withRegions.aiAssistantPrompt).toHaveAttribute('data-has-header');
    await expect(withRegions.aiAssistantPrompt).toHaveAttribute('data-has-footer-left');
    await expect(withRegions.aiAssistantPrompt).toHaveAttribute('data-has-footer-right');
    await expect(withRegions.aiAssistantPrompt.locator('mdc-inputchip')).toHaveCount(2);
    await expect(withRegions.aiAssistantPrompt.locator('[slot="footer-left"]')).toHaveCount(2);
    await expect(withRegions.aiAssistantPrompt.locator('[slot="footer-right"]')).toHaveCount(3);
  });

  await test.step('should open a menu popover below the add button', async () => {
    const withAddMenu = await setup({
      componentsPage,
      footerLeft: `
        <mdc-button
          id="aiassistantprompt-add-trigger"
          slot="footer-left"
          variant="tertiary"
          size="24"
          prefix-icon="plus-bold"
          aria-label="Add to prompt"
        ></mdc-button>
      `,
      extraHtml: `
        <mdc-menupopover triggerid="aiassistantprompt-add-trigger" placement="bottom-start" aria-label="Add to prompt">
          <mdc-menuitem label="Upload a file"></mdc-menuitem>
          <mdc-menuitem label="Add from Example project"></mdc-menuitem>
          <mdc-menuitem label="Add people"></mdc-menuitem>
        </mdc-menupopover>
      `,
    });
    const addButton = withAddMenu.aiAssistantPrompt.locator('#aiassistantprompt-add-trigger');
    const menu = componentsPage.page.locator('mdc-menupopover[triggerid="aiassistantprompt-add-trigger"]');
    await addButton.click();
    await expect(menu).toBeVisible();
    await expect(menu.locator('mdc-menuitem')).toHaveCount(3);
  });

  await test.step('accessibility', async () => {
    await setup({ componentsPage, placeholder: 'Ask about the Example project' });
    await componentsPage.accessibility.checkForA11yViolations('aiassistantprompt-default');
  });
});
