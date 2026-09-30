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
  id?: string;
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
  id,
  header,
  footerLeft,
  footerRight,
  extraHtml,
}: SetupOptions) => {
  await componentsPage.mount({
    html: `
      <div>
        <${HOST_SELECTOR}
          ${id ? `id="${id}"` : ''}
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

  await test.step('should remove a header chip when its close button is activated', async () => {
    const withChips = await setup({
      componentsPage,
      header: `
        <mdc-inputchip slot="header" label="Alex Example" clear-aria-label="Remove Alex Example"></mdc-inputchip>
        <mdc-inputchip slot="header" label="Example project" clear-aria-label="Remove Example project"></mdc-inputchip>
      `,
    });
    await withChips.aiAssistantPrompt.evaluate(host => {
      host.querySelectorAll('mdc-inputchip').forEach(chip => {
        chip.addEventListener('remove', event => {
          (event.target as HTMLElement)?.remove();
        });
      });
    });
    await withChips.aiAssistantPrompt.getByRole('button', { name: 'Remove Alex Example' }).click();
    await expect(withChips.aiAssistantPrompt.locator('mdc-inputchip')).toHaveCount(1);
    await expect(withChips.aiAssistantPrompt.locator('mdc-inputchip')).toHaveAttribute('label', 'Example project');
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

  await test.step('should open a menu popover below the adjust button', async () => {
    const withAdjustMenu = await setup({
      componentsPage,
      footerLeft: `
        <mdc-button
          id="aiassistantprompt-adjust-trigger"
          slot="footer-left"
          variant="tertiary"
          size="24"
          prefix-icon="adjust-horizontal-bold"
          aria-label="Add context"
        ></mdc-button>
      `,
      extraHtml: `
        <mdc-menupopover triggerid="aiassistantprompt-adjust-trigger" placement="bottom-start" aria-label="Add context">
          <mdc-menuitem label="Concise"></mdc-menuitem>
          <mdc-menuitem label="Balanced"></mdc-menuitem>
          <mdc-menuitem label="Detailed"></mdc-menuitem>
        </mdc-menupopover>
      `,
    });
    const adjustButton = withAdjustMenu.aiAssistantPrompt.locator('#aiassistantprompt-adjust-trigger');
    const menu = componentsPage.page.locator('mdc-menupopover[triggerid="aiassistantprompt-adjust-trigger"]');
    await adjustButton.click();
    await expect(menu).toBeVisible();
    await expect(menu.locator('mdc-menuitem')).toHaveCount(3);
  });

  await test.step('should open a menu popover below the sources button', async () => {
    const withSourcesMenu = await setup({
      componentsPage,
      footerRight: `
        <mdc-button
          id="aiassistantprompt-sources-trigger"
          slot="footer-right"
          variant="tertiary"
          size="24"
          postfix-icon="arrow-down-bold"
        >
          All sources
        </mdc-button>
      `,
      extraHtml: `
        <mdc-menupopover triggerid="aiassistantprompt-sources-trigger" placement="bottom-end" aria-label="Select sources">
          <mdc-menuitem label="All sources"></mdc-menuitem>
          <mdc-menuitem label="Example project files"></mdc-menuitem>
          <mdc-menuitem label="Example web"></mdc-menuitem>
          <mdc-menuitem label="People"></mdc-menuitem>
        </mdc-menupopover>
      `,
    });
    const sourcesButton = withSourcesMenu.aiAssistantPrompt.locator('#aiassistantprompt-sources-trigger');
    const menu = componentsPage.page.locator('mdc-menupopover[triggerid="aiassistantprompt-sources-trigger"]');
    await sourcesButton.click();
    await expect(menu).toBeVisible();
    await expect(menu.locator('mdc-menuitem')).toHaveCount(4);
  });

  await test.step('should toggle the microphone icon when the mic button is clicked', async () => {
    const withMic = await setup({
      componentsPage,
      footerRight: `
        <mdc-button
          slot="footer-right"
          variant="tertiary"
          size="32"
          prefix-icon="microphone-on-bold"
          aria-label="Stop voice input"
        ></mdc-button>
      `,
    });
    await withMic.aiAssistantPrompt.evaluate(host => {
      const mic = host.querySelector('mdc-button[slot="footer-right"]');
      mic?.addEventListener('click', () => {
        const isOn = mic.getAttribute('prefix-icon') === 'microphone-on-bold';
        mic.setAttribute('prefix-icon', isOn ? 'microphone-muted-bold' : 'microphone-on-bold');
        mic.setAttribute('aria-label', isOn ? 'Start voice input' : 'Stop voice input');
      });
    });
    const mic = withMic.aiAssistantPrompt.locator('[slot="footer-right"]');
    await expect(mic).toHaveAttribute('prefix-icon', 'microphone-on-bold');
    await mic.click();
    await expect(mic).toHaveAttribute('prefix-icon', 'microphone-muted-bold');
    await mic.click();
    await expect(mic).toHaveAttribute('prefix-icon', 'microphone-on-bold');
  });

  await test.step('should open a same-width flyout above the prompt when the textarea is focused', async () => {
    const promptId = 'aiassistantprompt-example';
    const suggestionsId = 'aiassistantprompt-suggestions';
    const withSuggestions = await setup({
      componentsPage,
      id: promptId,
      extraHtml: `
        <mdc-popover
          id="${suggestionsId}"
          triggerid="${promptId}"
          trigger="manual"
          placement="top"
          disable-flip
          aria-label="Prompt suggestions"
        >
          <mdc-list>
            <mdc-listitem label="Summarize Today's Tasks"></mdc-listitem>
            <mdc-listitem label="Draft an Example project update"></mdc-listitem>
            <mdc-listitem label="Generate Report recap"></mdc-listitem>
          </mdc-list>
        </mdc-popover>
      `,
    });
    await withSuggestions.aiAssistantPrompt.evaluate((host, id) => {
      const popover = document.getElementById(id);
      if (!popover) {
        return;
      }
      host.addEventListener('focus', () => {
        const borderX =
          parseFloat(getComputedStyle(popover).borderLeftWidth) +
          parseFloat(getComputedStyle(popover).borderRightWidth);
        const width = `${host.getBoundingClientRect().width - borderX}px`;
        popover.style.setProperty('--mdc-popover-width', width);
        popover.style.setProperty('--mdc-popover-max-width', width);
        popover.setAttribute('visible', '');
      });
    }, suggestionsId);
    const menu = componentsPage.page.locator(`#${suggestionsId}`);
    await withSuggestions.textarea.focus();
    await expect(menu).toBeVisible();
    await expect(menu.locator('mdc-listitem')).toHaveCount(3);
    const promptBox = await withSuggestions.aiAssistantPrompt.boundingBox();
    const menuBox = await menu.boundingBox();
    expect(promptBox).toBeTruthy();
    expect(menuBox).toBeTruthy();
    expect(Math.abs((menuBox?.width ?? 0) - (promptBox?.width ?? 0))).toBeLessThan(8);
    expect((menuBox?.y ?? 0) + (menuBox?.height ?? 0)).toBeLessThanOrEqual((promptBox?.y ?? 0) + 8);
  });

  await test.step('accessibility', async () => {
    await setup({ componentsPage, placeholder: 'Ask about the Example project' });
    await componentsPage.accessibility.checkForA11yViolations('aiassistantprompt-default');
  });
});
