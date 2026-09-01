import { test } from '../../../config/playwright/setup';
import StickerSheet from '../../../config/playwright/setup/utils/Stickersheet';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';

// `trace` can only be overridden at the top level of a test file (or in the config), not inside
// a describe block. It's disabled here because this test alone captures many screenshots
// (high-contrast/ltr/rtl across several stacked variants), and the resulting trace is large
// enough to make context teardown hang - kept file-scoped so the rest of the number suite
// (attributes/interactions/accessibility) keeps full tracing for debugging.
test.use({ trace: 'off', viewport: { width: 800, height: 1500 } });

test.describe('mdc-number', () => {
  test('visual-regression', async ({ componentsPage }) => {
    // First-run baseline writes plus high-contrast/ltr/rtl capture across several stacked
    // variants legitimately exceed the default 30s test timeout, matching the pattern used
    // by other combinatorial visual-regression tests (e.g. sidenavigation.e2e-test.ts).
    test.setTimeout(60_000);

    const attributes = {
      id: 'test-mdc-number',
      placeholder: 'Placeholder',
      label: 'Label',
      'help-text': 'Help Text',
      'increment-aria-label': 'Increment',
      'decrement-aria-label': 'Decrement',
    };
    const numberStickerSheet = new StickerSheet(componentsPage, 'mdc-number');

    numberStickerSheet.setAttributes(attributes);
    await numberStickerSheet.createMarkupWithCombination({
      'help-text-type': VALIDATION,
    });

    numberStickerSheet.setAttributes({
      ...attributes,
      value: '5',
      min: '0',
      max: '10',
    });
    await numberStickerSheet.createMarkupWithCombination({});

    numberStickerSheet.setAttributes({
      ...attributes,
      value: '5',
      'hide-steppers': true,
    });
    await numberStickerSheet.createMarkupWithCombination({});

    numberStickerSheet.setAttributes({
      ...attributes,
      value: '42',
      disabled: true,
    });
    await numberStickerSheet.createMarkupWithCombination({});

    numberStickerSheet.setAttributes({
      ...attributes,
      value: '7',
      readonly: true,
    });
    await numberStickerSheet.createMarkupWithCombination({});

    numberStickerSheet.setAttributes({
      ...attributes,
      required: '',
      placeholder: 'Number is required',
    });
    await numberStickerSheet.createMarkupWithCombination({});

    await numberStickerSheet.mountStickerSheet();
    const container = numberStickerSheet.getWrapperContainer();
    await componentsPage.page.mouse.move(0, 0);
    await test.step('matches screenshot of element', async () => {
      await componentsPage.visualRegression.takeScreenshot('mdc-number', { element: container });
    });
  });
});
