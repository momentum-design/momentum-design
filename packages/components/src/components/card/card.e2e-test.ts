import { ComponentsPage, test } from '../../../config/playwright/setup';

type SetupOptions = {
  componentsPage: ComponentsPage;
  cardTitle?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  variant?: string;
  orientation?: string;
  titleTagName?: string;
  subtitleTagName?: string;
  iconName?: string;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
    <mdc-card
    ${restArgs.cardTitle ? `card-title="${restArgs.cardTitle}"` : ''}
    ${restArgs.subtitle ? `subtitle="${restArgs.subtitle}"` : ''}
    ${restArgs.imageSrc ? `image-src="${restArgs.imageSrc}"` : ''}
    ${restArgs.imageAlt ? `image-alt="${restArgs.imageAlt}"` : ''}
    ${restArgs.variant ? `variant="${restArgs.variant}"` : ''}
    ${restArgs.orientation ? `orientation="${restArgs.orientation}"` : ''}
    ${restArgs.titleTagName ? `title-tag-name="${restArgs.titleTagName}"` : ''}
    ${restArgs.subtitleTagName ? `subtitle-tag-name="${restArgs.subtitleTagName}"` : ''}
    ${restArgs.iconName ? `icon-name="${restArgs.iconName}"` : ''}
    >
    </mdc-card>
    `,
    clearDocument: true,
  });

  const card = componentsPage.page.locator('mdc-card');
  await card.waitFor();

  return card;
};

test.skip('mdc-card', async ({ componentsPage }) => {
  const card = await setup({ componentsPage });

  /**
   * ACCESSIBILITY
   */
  await test.step('accessibility', async () => {
    await componentsPage.accessibility.checkForA11yViolations('card-default');
  });

  /**
   * VISUAL REGRESSION
   */
  await test.step('visual-regression', async () => {
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-card', { element: card });
    });
  });

  /**
   * ATTRIBUTES
   */
  await test.step('attributes', async () => {
    await test.step('attribute X should be present on component by default', async () => {
      // TODO: add test here
    });
  });

  /**
   * INTERACTIONS
   */
  await test.step('interactions', async () => {
    await test.step('mouse/pointer', async () => {
      await test.step('component should fire callback x when clicking on it', async () => {
        // TODO: add test here
      });
    });

    await test.step('focus', async () => {
      await test.step('component should be focusable with tab', async () => {
        // TODO: add test here
      });

      // add additional tests here, like tabbing through several parts of the component
    });

    await test.step('keyboard', async () => {
      await test.step('component should fire callback x when pressing y', async () => {
        // TODO: add test here
      });
    });
  });
});
