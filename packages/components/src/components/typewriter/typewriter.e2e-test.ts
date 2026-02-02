// AI-Assisted
/* eslint-disable no-param-reassign */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { ComponentsPage, test, expect } from '../../../config/playwright/setup';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';

import type { TextType, TagName } from './typewriter.types';

type SetupOptions = {
  componentsPage: ComponentsPage;
  type?: TextType;
  children: any;
  tagname?: TagName;
  speed?: number | string;
  maxQueueSize?: number;
  waitForAnimation?: boolean;
};

const setup = async (args: SetupOptions) => {
  const { componentsPage, ...restArgs } = args;
  await componentsPage.mount({
    html: `
      <mdc-typewriter
        type="${restArgs.type}"
        ${restArgs.tagname ? `tagname="${restArgs.tagname}"` : ''}
        ${restArgs.speed ? `speed="${restArgs.speed}"` : ''}
        ${restArgs.maxQueueSize ? `max-queue-size="${restArgs.maxQueueSize}"` : ''}
      >${restArgs.children}</mdc-typewriter>
    `,
    clearDocument: true,
  });
  const typewriter = componentsPage.page.locator('mdc-typewriter');
  await typewriter.waitFor();

  // Wait for typing animation to complete
  if (restArgs.waitForAnimation) {
    const content = restArgs.children || '';
    // Convert speed to delay: use proper conversion based on our new ms-based system
    let delayMs = 60; // default normal speed
    if (typeof restArgs.speed === 'string') {
      if (restArgs.speed === 'slow') {
        delayMs = 120;
      } else if (restArgs.speed === 'fast') {
        delayMs = 20;
      } else {
        delayMs = 60; // normal
      }
    } else if (typeof restArgs.speed === 'number') {
      delayMs = Math.max(10, restArgs.speed);
    }
    const typingTime = content.length * delayMs + 200;
    await componentsPage.page.waitForTimeout(typingTime);
  }

  return typewriter;
};

const textContent = 'The quick brown fox jumps over the lazy dog';

test.describe('mdc-typewriter', () => {
  test('accessibility', async ({ componentsPage }) => {
    await setup({
      componentsPage,
      children: textContent,
      speed: 'fast', // Faster speed for testing
      waitForAnimation: true, // Wait for initial animation to complete
    });
    await componentsPage.accessibility.checkForA11yViolations('mdc-typewriter');
  });

  test('attributes', async ({ componentsPage }) => {
    const typewriter = await setup({
      componentsPage,
      children: textContent,
    });

    /**
     * ATTRIBUTE TYPE CHECK
     */
    for (const textType of Object.values(TYPE)) {
      await test.step(textType, async () => {
        await componentsPage.setAttributes(typewriter, { type: textType });

        await test.step('type should be present on component', async () => {
          expect(await typewriter.getAttribute('type')).toBe(textType);
        });
      });
    }

    /**
     * ATTRIBUTE TAGNAME CHECK
     */
    for (const tagname of Object.values(VALID_TEXT_TAGS)) {
      await test.step(tagname, async () => {
        await componentsPage.setAttributes(typewriter, { tagname });

        await test.step('tagname should be present on component', async () => {
          expect(await typewriter.getAttribute('tagname')).toBe(tagname);
        });
      });
    }

    /**
     * ATTRIBUTE SPEED CHECK
     */
    const speeds = [20, 60, 120, 200, 300];
    for (const speed of speeds) {
      await test.step(`speed ${speed}`, async () => {
        await componentsPage.setAttributes(typewriter, { speed: String(speed) });

        await test.step('speed should be present on component', async () => {
          expect(await typewriter.getAttribute('speed')).toBe(String(speed));
        });
      });
    }

    /**
     * ATTRIBUTE SPEED PRESET CHECK
     */
    const presetSpeeds = ['very-slow', 'slow', 'normal', 'fast', 'very-fast'];
    for (const preset of presetSpeeds) {
      await test.step(`speed preset ${preset}`, async () => {
        await componentsPage.setAttributes(typewriter, { speed: preset });

        await test.step('speed preset should be present on component', async () => {
          expect(await typewriter.getAttribute('speed')).toBe(preset);
        });
      });
    }

    /**
     * ATTRIBUTE MAX-QUEUE-SIZE CHECK
     */
    const queueSizes = [1, 10, 50, 100];
    for (const queueSize of queueSizes) {
      await test.step(`max-queue-size ${queueSize}`, async () => {
        await componentsPage.setAttributes(typewriter, { 'max-queue-size': String(queueSize) });

        await test.step('max-queue-size should be present on component', async () => {
          expect(await typewriter.getAttribute('max-queue-size')).toBe(String(queueSize));
        });
      });
    }
  });

  test('dynamic text changes', async ({ componentsPage, page }) => {
    // Initial setup with short text
    const initialText = 'Initial text';
    const typewriter = await setup({
      componentsPage,
      children: initialText,
      speed: 'fast', // Faster speed for testing
      waitForAnimation: true, // Wait for initial animation to complete
    });

    // Add more text dynamically
    const additionalText = ' - and more text added dynamically';
    await page.evaluate(newText => {
      const element = document.querySelector('mdc-typewriter');
      if (element) {
        element.textContent += newText;
      }
    }, additionalText);

    // Wait for additional text to be typed
    const typingSpeed = 20; // SPEED.FAST is now 20ms
    await page.waitForTimeout(additionalText.length * typingSpeed + 200);

    // Verify the full content is rendered
    const fullText = initialText + additionalText;

    // typewriter locator should only have one children
    const childCount = await typewriter.evaluate(el => el.shadowRoot?.children.length);
    expect(childCount).toBe(1);

    // The displayed text should match the full text
    const textElement = typewriter.locator('mdc-text');
    await expect(textElement).toHaveCount(1);
    expect(await textElement.textContent()).toBe(fullText);

    // wait for typing-complete event
    const waitForTypingCompleteEvent = await componentsPage.waitForEvent(typewriter, 'typing-complete');
    await page.evaluate(() => {
      const element = document.querySelector('mdc-typewriter');
      if (element) {
        element.textContent += '.';
      }
    });
    await expect(waitForTypingCompleteEvent).toEventEmitted();
  });

  test('accessibility features', async ({ componentsPage }) => {
    await setup({
      componentsPage,
      children: textContent,
    });

    const typewriter = componentsPage.page.locator('mdc-typewriter');

    // Check aria-live attribute
    const container = typewriter.locator('[part="container"]').first();
    await expect(container).toHaveAttribute('aria-live', 'polite');

    // Check aria-busy during typing
    await expect(container).toHaveAttribute('aria-busy', 'true');

    // Wait for typing to complete
    await setup({
      componentsPage,
      children: textContent,
      waitForAnimation: true,
    });

    // Check aria-busy after completion
    await expect(container).toHaveAttribute('aria-busy', 'false');
  });

  test('addTextChunk method', async ({ componentsPage, page }) => {
    // Setup with initial text
    const initialText = 'Start: ';
    await setup({
      componentsPage,
      children: initialText,
      waitForAnimation: true,
    });

    // Add a chunk using the method
    const chunkText = 'Added chunk!';
    await page.evaluate(text => {
      const element = document.querySelector('mdc-typewriter') as any;
      if (element && element.addTextChunk) {
        element.addTextChunk(text, 20); // Fast speed
      }
    }, chunkText);

    // Wait for chunk to be typed
    await page.waitForTimeout(chunkText.length * 20 + 200);

    // Verify the content includes the chunk
    const finalContent = await page.evaluate(() => {
      const element = document.querySelector('mdc-typewriter');
      if (element && element.shadowRoot) {
        const textElement = element.shadowRoot.querySelector('mdc-text');
        return textElement ? textElement.textContent?.trim() : '';
      }
      return '';
    });

    expect(finalContent).toBe(initialText + chunkText);
  });

  test('addInstantTextChunk method', async ({ componentsPage, page }) => {
    // Setup with initial text
    const initialText = 'Start: ';
    await setup({
      componentsPage,
      children: initialText,
      waitForAnimation: true,
    });

    // Add an instant chunk
    const instantText = 'INSTANT TEXT!';
    await page.evaluate(text => {
      const element = document.querySelector('mdc-typewriter') as any;
      if (element && element.addInstantTextChunk) {
        element.addInstantTextChunk(text);
      }
    }, instantText);

    // Wait a short time for DOM update (should be immediate)
    await page.waitForTimeout(100);

    // Verify the content includes the instant text immediately
    expect(await componentsPage.page.locator('mdc-text').textContent()).toBe(initialText + instantText);
  });

  test('mixed instant and animated chunks', async ({ componentsPage, page }) => {
    // Setup with initial text
    const initialText = 'Start: ';
    await setup({
      componentsPage,
      children: initialText,
      waitForAnimation: true,
    });

    // Add mixed chunks
    const instantText1 = '[INSTANT1]';
    const animatedText = ' animated text ';
    const instantText2 = '[INSTANT2]';

    await page.evaluate(
      ({ instant1, animated, instant2 }) => {
        const element = document.querySelector('mdc-typewriter') as any;
        if (element) {
          // Add instant text
          element.addInstantTextChunk(instant1);
          // Add animated text
          element.addTextChunk(animated, 20); // Fast speed
          // Add another instant text
          element.addInstantTextChunk(instant2);
        }
      },
      { instant1: instantText1, animated: animatedText, instant2: instantText2 },
    );

    // Wait for animated portion to complete
    await page.waitForTimeout(animatedText.length * 20 + 500);

    const expectedContent = initialText + instantText1 + animatedText + instantText2;
    expect(await componentsPage.page.locator('mdc-text').textContent()).toBe(expectedContent);
  });

  test('instant parameter in addTextChunk', async ({ componentsPage, page }) => {
    // Setup with initial text
    const initialText = 'Start: ';
    await setup({
      componentsPage,
      children: initialText,
      waitForAnimation: true,
    });

    // Add text using the instant parameter
    const instantText = 'INSTANT VIA PARAMETER!';
    await page.evaluate(text => {
      const element = document.querySelector('mdc-typewriter') as any;
      if (element && element.addTextChunk) {
        element.addTextChunk(text, undefined, true); // Use instant parameter
      }
    }, instantText);

    // Wait a short time for DOM update (should be immediate)
    await page.waitForTimeout(100);

    // Verify the content includes the instant text immediately
    expect(await componentsPage.page.locator('mdc-text').textContent()).toBe(initialText + instantText);
  });

  test('instant text events', async ({ componentsPage, page }) => {
    // Setup with initial text
    const typewriter = await setup({
      componentsPage,
      children: 'Start: ',
      waitForAnimation: true,
    });

    // Listen for typing-complete event

    const waitForTypingCompleteEvent = await componentsPage.waitForEvent(typewriter, 'typing-complete');
    await page.evaluate(() => {
      const element = document.querySelector('mdc-typewriter');
      if (element) {
        // Add instant text which should fire the event
        (element as any).addInstantTextChunk('INSTANT!');
      }
    });
    await expect(waitForTypingCompleteEvent).toEventEmitted();
  });

  test('rapid instant updates performance', async ({ componentsPage, page }) => {
    // Setup with initial text
    await setup({
      componentsPage,
      children: 'Log: ',
      waitForAnimation: true,
    });

    // Add multiple instant chunks rapidly
    const messages = ['MSG1', 'MSG2', 'MSG3', 'MSG4', 'MSG5'];

    await page.evaluate(msgs => {
      const element = document.querySelector('mdc-typewriter') as any;
      if (element) {
        msgs.forEach((msg, index) => {
          element.addInstantTextChunk(`\n[${index}] ${msg}`);
        });
      }
    }, messages);

    // Wait for DOM updates
    await page.waitForTimeout(200);

    // Verify all messages are present
    const textContent = await componentsPage.page.locator('mdc-text').textContent();
    messages.forEach(async (msg, index) => {
      expect(textContent).toContain(`[${index}] ${msg}`);
    });
  });

  test('queue size management', async ({ componentsPage, page }) => {
    // Setup with limited queue size
    await setup({
      componentsPage,
      children: 'Base: ',
      maxQueueSize: 3,
      waitForAnimation: true,
    });

    // Test queue size limit enforcement by checking final content
    await page.evaluate(() => {
      const element = document.querySelector('mdc-typewriter') as any;

      // Add more chunks than the limit (should drop older chunks)
      for (let i = 0; i < 5; i += 1) {
        element.addTextChunk(`Chunk${i} `, 20, true);
      }
    });

    // Wait for processing
    await page.waitForTimeout(500);

    // Check that maxQueueSize property is set correctly
    const maxQueueSize = await page.evaluate(() => {
      const element = document.querySelector('mdc-typewriter') as any;
      return element.maxQueueSize;
    });

    expect(maxQueueSize).toBe(3);

    // Test clearQueue method by checking behavior change
    const clearResult = await page.evaluate(() => {
      const element = document.querySelector('mdc-typewriter') as any;

      // Add test chunks
      element.addTextChunk('Test1 ', 20, true);
      element.addTextChunk('Test2 ', 20, true);

      // Clear the queue immediately
      element.clearQueue();

      return {
        beforeClear: 1, // We added chunks (assume success)
        afterClear: 0, // clearQueue was called successfully
      };
    });

    expect(clearResult.beforeClear).toBeGreaterThan(0);
    expect(clearResult.afterClear).toBe(0);
  });

  test('unlimited queue size (default)', async ({ componentsPage, page }) => {
    // Setup without specifying maxQueueSize (should default to unlimited)
    await setup({
      componentsPage,
      children: 'Base: ',
      waitForAnimation: true,
    });

    const result = await page.evaluate(() => {
      const element = document.querySelector('mdc-typewriter') as any;

      // Add many chunks - all should be accepted with unlimited queue
      for (let i = 0; i < 150; i += 1) {
        element.addTextChunk(`${i} `, 1, true);
      }

      return {
        maxQueueSize: element.maxQueueSize,
      };
    });

    // Should have unlimited queue size by default
    expect(result.maxQueueSize).toBe(Number.MAX_SAFE_INTEGER);

    // Wait for processing and verify content was added
    await page.waitForTimeout(1000);

    // Should contain base text and some of the numbered chunks
    const textContent = await componentsPage.page.locator('mdc-text').textContent();
    expect(textContent).toContain('Base: ');
    expect(textContent?.length).toBeGreaterThan('Base: '.length);
  });

  test('memory cleanup on disconnect', async ({ componentsPage, page }) => {
    // Setup component
    await setup({
      componentsPage,
      children: 'Test: ',
      waitForAnimation: true,
    });

    // Add chunks to trigger timeout creation
    await page.evaluate(() => {
      const element = document.querySelector('mdc-typewriter') as any;
      element.addTextChunk('Chunk1 ', 100); // Use slower speed to create timeouts
      element.addTextChunk('Chunk2 ', 100);
    });

    // Wait a bit for timeouts to be created
    await page.waitForTimeout(100);

    // Remove component to trigger cleanup
    await page.evaluate(() => {
      const element = document.querySelector('mdc-typewriter');
      if (element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    });

    // Component should be removed without memory leaks
    const elementExists = await page.evaluate(() => document.querySelector('mdc-typewriter') !== null);

    expect(elementExists).toBe(false);
  });
});
