// AI-Assisted
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

import { ComponentsPage, expect, test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';

import { STATUSMESSAGE_SEVERITY } from './statusmessage.constants';
import type { StatusMessageSeverity } from './statusmessage.types';
import { getStatusMessageIcon } from './statusmessage.utils';

type SetupOptions = {
  componentsPage: ComponentsPage;
  severity?: StatusMessageSeverity;
  message?: string;
  children?: string;
};

const setup = async ({ componentsPage, severity, message, children = '' }: SetupOptions) => {
  await componentsPage.mount({
    html: `
      <mdc-statusmessage
        ${severity ? `severity="${severity}"` : ''}
        ${message ? `message="${message}"` : ''}
      >${children}</mdc-statusmessage>
    `,
    clearDocument: true,
  });

  const statusMessage = componentsPage.page.locator('mdc-statusmessage');
  await statusMessage.waitFor();
  return statusMessage;
};

test('mdc-statusmessage', async ({ componentsPage }) => {
  const statusMessage = await setup({
    componentsPage,
    message: 'Status message',
  });

  await test.step('attributes', async () => {
    await test.step('should render message attribute when no default slot content is provided', async () => {
      await expect(statusMessage).toContainText('Status message');
      await expect(statusMessage.locator('mdc-text[part="text"]')).toHaveText('Status message');
    });

    await test.step('should not render an icon for default severity', async () => {
      await componentsPage.setAttributes(statusMessage, { severity: STATUSMESSAGE_SEVERITY.DEFAULT });
      await expect(statusMessage.locator('mdc-icon[part="icon"]')).toHaveCount(0);
    });

    await test.step('should render the correct icon for each non-default severity', async () => {
      for (const severity of Object.values(STATUSMESSAGE_SEVERITY) as StatusMessageSeverity[]) {
        await componentsPage.setAttributes(statusMessage, { severity });
        await expect(statusMessage).toHaveAttribute('severity', severity);

        const icon = getStatusMessageIcon(severity);
        if (icon) {
          await expect(statusMessage.locator(`mdc-icon[name="${icon}"]`)).toBeVisible();
        }
      }
    });
  });

  await test.step('slots', async () => {
    await test.step('should prefer default slot content over message attribute', async () => {
      const slottedStatusMessage = await setup({
        componentsPage,
        severity: STATUSMESSAGE_SEVERITY.WARNING,
        message: 'Attribute message',
        children: 'Slotted message',
      });

      await expect(slottedStatusMessage).toContainText('Slotted message');
      await expect(slottedStatusMessage).not.toContainText('Attribute message');
    });

    await test.step('should render a custom icon when the icon slot is provided', async () => {
      const customIconStatusMessage = await setup({
        componentsPage,
        severity: STATUSMESSAGE_SEVERITY.ERROR,
        message: 'Custom icon message',
        children: `
          <mdc-icon slot="icon" name="info-badge-filled" data-testid="custom-icon"></mdc-icon>
        `,
      });

      await expect(customIconStatusMessage.locator('[data-testid="custom-icon"]')).toBeVisible();
      await expect(customIconStatusMessage).toContainText('Custom icon message');
      await expect(customIconStatusMessage.locator('mdc-text[part="text"]')).toBeVisible();
      await expect(customIconStatusMessage.locator('mdc-icon[name="error-legacy-badge-filled"]')).not.toBeVisible();
    });
  });

  await test.step('visual regression', async () => {
    const stickerSheet = new StickerSheet(componentsPage, 'mdc-statusmessage');
    stickerSheet.setAttributes({ message: 'Status message' });
    await stickerSheet.createMarkupWithCombination({ severity: STATUSMESSAGE_SEVERITY });

    stickerSheet.setAttributes({
      severity: STATUSMESSAGE_SEVERITY.ERROR,
      message:
        'This is a very long status message that should wrap to multiple lines while the icon remains aligned to the first line.',
      style: 'width: 18rem;',
    });
    await stickerSheet.createMarkupWithCombination({});

    await stickerSheet.mountStickerSheet();
    stickerSheet.getWrapperContainer();

    await componentsPage.visualRegression.takeScreenshot('mdc-statusmessage', {
      element: stickerSheet.getWrapperContainer(),
    });
  });

  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('statusmessage-default');
  });
});
// End AI-Assisted
