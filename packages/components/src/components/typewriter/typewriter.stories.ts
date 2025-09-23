// AI-Assisted
import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from 'storybook/actions';

import '.';
import '../text';
import '../button';
import '../input';
import '../select';
import '../list';
import '../listitem';
import '../selectlistbox';
import '../option';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { disableCSSParts } from '../../../config/storybook/utils';

import { DEFAULTS } from './typewriter.constants';

const render = (args: Args) => html`
  <mdc-typewriter
    @change="${action('change')}"
    @typing-complete="${action('typing-complete')}"
    type="${args.type}"
    tagname="${ifDefined(args.tagname)}"
    speed="${args.speed}"
    max-queue-size="${ifDefined(args['max-queue-size'])}"
    >${args.children}</mdc-typewriter
  >
`;

const meta: Meta = {
  title: 'Widgets/typewriter',
  tags: ['autodocs'],
  component: 'mdc-typewriter',
  render,

  argTypes: {
    children: {
      control: 'text',
      description: 'Children (passed into "default" slot)',
    },
    type: {
      control: 'select',
      options: Object.values(TYPE),
    },
    tagname: {
      control: 'select',
      options: Object.values(VALID_TEXT_TAGS),
    },
    speed: {
      control: 'text',
      description:
        'Speed of typewriter effect. Use preset values ("slow", "normal", "fast", "very-slow", "very-fast") or numeric strings ("100", "50", etc.) in milliseconds per character.',
    },
    'max-queue-size': {
      control: { type: 'number', min: 1, max: 1000, step: 1 },
      description:
        'Maximum number of text chunks in queue before dropping oldest chunks. Set to high value for unlimited.',
    },
    ...disableCSSParts([DEFAULTS.CSS_PART_CONTAINER, DEFAULTS.CSS_PART_TEXT, DEFAULTS.CSS_PART_HIDDEN]),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    type: DEFAULTS.TYPE,
    tagname: null,
    speed: DEFAULTS.SPEED,
    children: 'The quick brown fox jumps over the lazy dog',
  },
};

export const SlowTyping: StoryObj = {
  args: {
    type: TYPE.HEADING_LARGE_BOLD,
    tagname: VALID_TEXT_TAGS.H2,
    speed: 'slow',
    children: 'This types more slowly for emphasis',
  },
};

export const FastTyping: StoryObj = {
  args: {
    type: TYPE.BODY_MIDSIZE_MEDIUM,
    tagname: VALID_TEXT_TAGS.P,
    speed: 'fast',
    children: 'This types very quickly! Almost like someone who is excited about something!',
  },
};

export const CustomSpeed: StoryObj = {
  render: () => html`
    <div>
      <mdc-typewriter
        id="custom-speed-typewriter"
        type="${TYPE.BODY_LARGE_REGULAR}"
        tagname="${VALID_TEXT_TAGS.P}"
        speed="100"
      >
        This uses a custom speed value of 100ms per character.
      </mdc-typewriter>
      <div style="margin-top: 20px;">
        <mdc-button
          variant="primary"
          @click=${() => {
            const typewriter = document.getElementById('custom-speed-typewriter') as any;
            if (typewriter) {
              typewriter.textContent = 'This uses a custom speed value of 100ms per character.';
              typewriter.speed = '100';
            }
          }}
        >
          Reset
        </mdc-button>
      </div>
    </div>
  `,
};

export const DynamicSpeedDemo: StoryObj = {
  render: () => html`
    <div>
      <mdc-text type="heading-large-bold" tagname="h3">Dynamic Speed Adjustment</mdc-text>
      <mdc-text type="body-large-regular" tagname="p">
        Changing the speed property affects the remaining characters of the current animation. This demonstration shows
        how speed changes apply immediately to ongoing typing.
      </mdc-text>
      <mdc-typewriter id="dynamic-speed-typewriter" type="${TYPE.BODY_LARGE_REGULAR}" speed="120">
        This text starts typing slowly (120ms per character)... but you can change the speed while it's typing!
      </mdc-typewriter>
      <div style="margin-top: 20px; display: flex; gap: 12px;">
        <mdc-button
          variant="primary"
          @click=${() => {
            const typewriter = document.getElementById('dynamic-speed-typewriter') as any;
            if (typewriter) {
              typewriter.speed = '20'; // Much faster - affects remaining characters immediately
            }
          }}
        >
          Speed Up Current Text
        </mdc-button>
        <mdc-button
          variant="secondary"
          @click=${() => {
            const typewriter = document.getElementById('dynamic-speed-typewriter') as any;
            if (typewriter) {
              typewriter.speed = '200'; // Much slower - affects remaining characters immediately
            }
          }}
        >
          Slow Down Current Text
        </mdc-button>
        <mdc-button
          variant="tertiary"
          @click=${() => {
            const typewriter = document.getElementById('dynamic-speed-typewriter') as any;
            if (typewriter) {
              typewriter.speed = '60'; // Reset to normal
            }
          }}
        >
          Reset Speed
        </mdc-button>
      </div>
    </div>
  `,
};

export const ChunkedTextDemo: StoryObj = {
  render: () => html`
    <div>
      <mdc-text type="heading-large-bold" tagname="h3">Chunked Text Addition</mdc-text>
      <mdc-text type="body-large-regular" tagname="p">
        Text chunks are processed sequentially. Each chunk can have its own speed setting that temporarily overrides the
        component's speed property, then restores the original speed defined in the base component when the chunk
        completes. Chunks don't queue - they start processing immediately when added which also dumps all elements in
        the queue behind it, then completes with animation.
      </mdc-text>
      <mdc-typewriter id="chunked-typewriter" type="${TYPE.BODY_LARGE_REGULAR}" speed="60">
        Initial text.
      </mdc-typewriter>
      <div style="margin-top: 20px; display: flex; gap: 12px; flex-wrap: wrap;">
        <mdc-button
          variant="primary"
          @click=${() => {
            const typewriter = document.getElementById('chunked-typewriter') as any;
            if (typewriter) {
              typewriter.addTextChunk(' [Fast chunk at 20ms]', '20');
            }
          }}
        >
          Add Fast Chunk
        </mdc-button>
        <mdc-button
          variant="secondary"
          @click=${() => {
            const typewriter = document.getElementById('chunked-typewriter') as any;
            if (typewriter) {
              typewriter.addTextChunk(' [Slow chunk at 150ms]', '150');
            }
          }}
        >
          Add Slow Chunk
        </mdc-button>
        <mdc-button
          variant="tertiary"
          @click=${() => {
            const typewriter = document.getElementById('chunked-typewriter') as any;
            if (typewriter) {
              typewriter.addTextChunk(' [Normal speed chunk]');
            }
          }}
        >
          Add Normal Chunk
        </mdc-button>
        <mdc-button
          variant="secondary"
          @click=${() => {
            const typewriter = document.getElementById('chunked-typewriter') as any;
            if (typewriter) {
              typewriter.addInstantTextChunk(' [INSTANT]');
            }
          }}
        >
          Add Instant Text
        </mdc-button>
      </div>
      <div style="margin-top: 10px;">
        <mdc-text type="body-small-medium" tagname="p">
          Notice: Each chunk's speed setting is temporary and doesn't affect the component's base speed property.
        </mdc-text>
      </div>
    </div>
  `,
};

export const AccessibilityDemo: StoryObj = {
  render: () => html`
    <div>
      <mdc-text type="heading-large-bold" tagname="h3">Accessibility Features Demo</mdc-text>
      <mdc-text type="body-large-regular" tagname="p"
        >This typewriter component includes accessibility features:</mdc-text
      >
      <mdc-list style="margin: 16px 0;">
        <mdc-listitem>Screen readers announce the complete text</mdc-listitem>
        <mdc-listitem>Uses <code>aria-live="polite"</code> for dynamic updates</mdc-listitem>
        <mdc-listitem>Shows <code>aria-busy</code> during typing animation</mdc-listitem>
        <mdc-listitem>Cursor is hidden from screen readers with <code>aria-hidden</code></mdc-listitem>
      </mdc-list>

      <mdc-typewriter type="${TYPE.BODY_LARGE_REGULAR}" speed="normal" id="dynamic-typewriter-a11y">
        This text demonstrates accessible typewriter functionality. Screen readers will announce the complete text
        rather than character by character.
      </mdc-typewriter>
      <div style="margin-top: 20px;">
        <mdc-button
          variant="primary"
          @click=${() => {
            const typewriter = document.getElementById('dynamic-typewriter-a11y');
            if (typewriter) {
              typewriter.textContent += ' And now some additional text gets added!';
            }
          }}
        >
          Add more text
        </mdc-button>
      </div>
    </div>
  `,
};

export const DynamicExample: StoryObj = {
  render: () => html`
    <div>
      <mdc-typewriter id="dynamic-typewriter" type="${TYPE.BODY_LARGE_REGULAR}" speed="normal">
        Initial text that will be typed out.
      </mdc-typewriter>
      <div style="margin-top: 20px;">
        <mdc-button
          variant="primary"
          @click=${() => {
            const typewriter = document.getElementById('dynamic-typewriter');
            if (typewriter) {
              typewriter.textContent += ' And now some additional text gets added!';
            }
          }}
        >
          Add more text
        </mdc-button>
      </div>
    </div>
  `,
};

export const DynamicTextAndSpeedDemo: StoryObj = {
  render: () => html`
    <div>
      <mdc-text type="heading-large-bold" tagname="h3">Dynamic Text + Speed Control</mdc-text>
      <mdc-text type="body-large-regular" tagname="p"> This demo shows two different ways to control speed: </mdc-text>
      <mdc-list style="margin: 16px 0;">
        <mdc-listitem
          ><strong>Add Text:</strong> Adds a chunk with temporary speed (restores original speed after)</mdc-listitem
        >
        <mdc-listitem
          ><strong>Change Speed:</strong> Changes the component's base speed property (affects remaining
          text)</mdc-listitem
        >
      </mdc-list>

      <mdc-typewriter id="dynamic-combined-typewriter" type="${TYPE.BODY_LARGE_REGULAR}" speed="60">
        Welcome to the interactive typewriter!
      </mdc-typewriter>

      <div style="margin-top: 20px; display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        <mdc-input
          id="custom-text-input"
          type="text"
          placeholder="Enter text to add..."
          style="flex: 1; min-width: 200px;"
        ></mdc-input>

        <mdc-select id="speed-selector" style="min-width: 150px;">
          <mdc-selectlistbox>
            <mdc-option value="1" label="Very Fast"></mdc-option>
            <mdc-option value="20" label="Fast (20ms)"></mdc-option>
            <mdc-option value="60" label="Normal (60ms)" selected></mdc-option>
            <mdc-option value="120" label="Slow (120ms)"></mdc-option>
            <mdc-option value="200" label="Very Slow (200ms)"></mdc-option>
            <mdc-option value="custom" label="Custom..."></mdc-option>
          </mdc-selectlistbox>
        </mdc-select>

        <mdc-input
          id="custom-speed-input"
          type="number"
          placeholder="Custom ms"
          min="10"
          max="1000"
          step="10"
          style="width: 100px; display: none;"
        ></mdc-input>

        <mdc-button
          variant="primary"
          @click=${() => {
            const typewriter = document.getElementById('dynamic-combined-typewriter') as any;
            const textInput = document.getElementById('custom-text-input') as HTMLInputElement;
            const speedSelector = document.getElementById('speed-selector') as HTMLSelectElement;
            const customSpeedInput = document.getElementById('custom-speed-input') as HTMLInputElement;

            if (typewriter && textInput && speedSelector) {
              const text = textInput.value.trim();
              if (!text) return;

              let speed = speedSelector.value;
              if (speedSelector.value === 'custom' && customSpeedInput.value) {
                speed = customSpeedInput.value;
              }

              // Add the text chunk with temporary speed (restores original speed after)
              typewriter.addTextChunk(` ${text}`, speed);

              // Clear the input
              textInput.value = '';
            }
          }}
        >
          Add Text (Temporary Speed)
        </mdc-button>

        <mdc-button
          variant="secondary"
          @click=${() => {
            const typewriter = document.getElementById('dynamic-combined-typewriter') as any;
            const speedSelector = document.getElementById('speed-selector') as HTMLSelectElement;
            const customSpeedInput = document.getElementById('custom-speed-input') as HTMLInputElement;

            if (typewriter && speedSelector) {
              let newSpeed = speedSelector.value;
              if (speedSelector.value === 'custom' && customSpeedInput.value) {
                newSpeed = customSpeedInput.value;
              }

              // Change the component's base speed property (affects remaining characters)
              typewriter.speed = newSpeed;
            }
          }}
        >
          Change Base Speed
        </mdc-button>
      </div>

      <div style="margin-top: 15px;">
        <mdc-text type="body-small-medium" tagname="span">Quick Actions:</mdc-text>
        <div style="display: flex; gap: 10px; margin-top: 8px; flex-wrap: wrap;">
          <mdc-button
            variant="tertiary"
            @click=${() => {
              const typewriter = document.getElementById('dynamic-combined-typewriter') as any;
              if (typewriter) {
                typewriter.addTextChunk(' 🚀 Super fast chunk!', '15');
              }
            }}
          >
            Add Fast Chunk
          </mdc-button>

          <mdc-button
            variant="tertiary"
            @click=${() => {
              const typewriter = document.getElementById('dynamic-combined-typewriter') as any;
              if (typewriter) {
                typewriter.addTextChunk(' This chunk types slowly to demonstrate temporary speed override.', '150');
              }
            }}
          >
            Add Slow Chunk
          </mdc-button>

          <mdc-button
            variant="tertiary"
            @click=${() => {
              const typewriter = document.getElementById('dynamic-combined-typewriter') as any;
              if (typewriter) {
                typewriter.speed = '20'; // Change base speed
                typewriter.addTextChunk(' Base speed changed to fast!');
              }
            }}
          >
            Change Base + Add
          </mdc-button>

          <mdc-button
            variant="tertiary"
            @click=${() => {
              const typewriter = document.getElementById('dynamic-combined-typewriter') as any;
              if (typewriter) {
                typewriter.textContent = 'Reset! Ready for new content.';
                typewriter.speed = '60';
              }
            }}
          >
            Reset
          </mdc-button>
        </div>
      </div>

      <script>
        // Handle custom speed input visibility
        document.addEventListener('DOMContentLoaded', () => {
          const speedSelector = document.getElementById('speed-selector');
          const customSpeedInput = document.getElementById('custom-speed-input');

          if (speedSelector && customSpeedInput) {
            speedSelector.addEventListener('change', (e: Event) => {
              const target = e.target as HTMLSelectElement;
              if (target.value === 'custom') {
                customSpeedInput.style.display = 'block';
              } else {
                customSpeedInput.style.display = 'none';
              }
            });
          }
        });
      </script>
    </div>
  `,
};

export const InstantTextDemo: StoryObj = {
  render: () => html`
    <div>
      <mdc-text type="heading-large-bold" tagname="h3">Instant Text Addition</mdc-text>
      <mdc-text type="body-large-regular" tagname="p"
        >Demonstrate instant text that bypasses the typing animation:</mdc-text
      >

      <mdc-typewriter id="instant-typewriter" type="${TYPE.BODY_LARGE_REGULAR}" speed="normal">
        This text types normally...
      </mdc-typewriter>

      <div style="margin-top: 20px; display: flex; gap: 12px; flex-wrap: wrap;">
        <mdc-button
          variant="primary"
          @click=${() => {
            const typewriter = document.getElementById('instant-typewriter') as any;
            if (typewriter) {
              typewriter.addInstantTextChunk(' INSTANT TEXT!');
            }
          }}
        >
          Add Instant Text
        </mdc-button>

        <mdc-button
          variant="secondary"
          @click=${() => {
            const typewriter = document.getElementById('instant-typewriter') as any;
            if (typewriter) {
              typewriter.addTextChunk(' And back to typing...', 80);
            }
          }}
        >
          Add Animated Text
        </mdc-button>

        <mdc-button
          variant="tertiary"
          @click=${() => {
            const typewriter = document.getElementById('instant-typewriter') as any;
            if (typewriter) {
              // Using the instant parameter
              typewriter.addTextChunk(' Also instant!', undefined, true);
            }
          }}
        >
          Add Instant (Parameter)
        </mdc-button>
      </div>
    </div>
  `,
};

export const MixedChunksDemo: StoryObj = {
  render: () => html`
    <div>
      <mdc-text type="heading-large-bold" tagname="h3">Mixed Instant & Animated Chunks</mdc-text>
      <mdc-text type="body-large-regular" tagname="p"
        >Demonstrate seamless mixing of instant and animated text chunks:</mdc-text
      >

      <mdc-typewriter id="mixed-typewriter" type="${TYPE.BODY_LARGE_REGULAR}" speed="normal">
        Starting text...
      </mdc-typewriter>

      <div style="margin-top: 20px; display: flex; gap: 12px; flex-wrap: wrap;">
        <mdc-button
          variant="primary"
          @click=${() => {
            const typewriter = document.getElementById('mixed-typewriter') as any;
            if (typewriter) {
              // Add a sequence of mixed chunks
              typewriter.addTextChunk(' This will type out', 50);
              typewriter.addInstantTextChunk(' [INSTANT]');
              typewriter.addTextChunk(' then continue typing', 30);
              typewriter.addInstantTextChunk(' [INSTANT AGAIN]');
              typewriter.addTextChunk(' and finish normally.', 60);
            }
          }}
        >
          Add Mixed Sequence
        </mdc-button>

        <mdc-button
          variant="secondary"
          @click=${() => {
            const typewriter = document.getElementById('mixed-typewriter') as any;
            if (typewriter) {
              typewriter.textContent = 'Starting text...';
            }
          }}
        >
          Reset
        </mdc-button>
      </div>
    </div>
  `,
};

export const RapidUpdatesDemo: StoryObj = {
  render: () => html`
    <div>
      <mdc-text type="heading-large-bold" tagname="h3">Rapid Updates Use Case</mdc-text>
      <mdc-text type="body-large-regular" tagname="p"
        >Simulate rapid data updates where animation would be too slow:</mdc-text
      >

      <mdc-typewriter id="rapid-typewriter" type="${TYPE.BODY_LARGE_REGULAR}" speed="fast"> Live Feed: </mdc-typewriter>

      <div style="margin-top: 20px; display: flex; gap: 12px; flex-wrap: wrap;">
        <mdc-button
          variant="primary"
          @click=${() => {
            const typewriter = document.getElementById('rapid-typewriter') as any;
            if (typewriter) {
              // Simulate rapid live updates
              const messages = [
                'User123 joined',
                'New message received',
                'System update complete',
                'Alert: High traffic detected',
                'Database sync finished',
              ];

              messages.forEach((message, index) => {
                setTimeout(() => {
                  const timestamp = new Date().toLocaleTimeString();
                  typewriter.addInstantTextChunk(`\n[${timestamp}] ${message}`);
                }, index * 500);
              });
            }
          }}
        >
          Simulate Live Updates
        </mdc-button>

        <mdc-button
          variant="secondary"
          @click=${() => {
            const typewriter = document.getElementById('rapid-typewriter') as any;
            if (typewriter) {
              typewriter.textContent = 'Live Feed: ';
            }
          }}
        >
          Clear Feed
        </mdc-button>
      </div>
    </div>
  `,
};
// End AI-Assisted
