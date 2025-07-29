// AI-Assisted
import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { disableControls } from '../../../config/storybook/utils';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';

import { DEFAULTS } from './typewriter.constants';

const render = (args: Args) => html`
  <mdc-typewriter
    type="${args.type}"
    tagname="${ifDefined(args.tagname)}"
    speed="${args.speed}"
    max-queue-size="${ifDefined(args.maxQueueSize)}"
    >${args.children}</mdc-typewriter
  >
`;

const meta: Meta = {
  title: 'Components/typewriter',
  tags: ['autodocs'],
  component: 'mdc-typewriter',
  render,
  parameters: {
    badges: ['experimental'],
  },
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
      control: { type: 'number', min: 10, max: 1000, step: 10 },
      description: 'Speed of typewriter effect in milliseconds per character. Lower = faster.',
    },
    maxQueueSize: {
      control: { type: 'number', min: 1, max: 1000, step: 1 },
      description:
        'Maximum number of text chunks in queue before dropping oldest chunks. Set to high value for unlimited.',
    },
    ...classArgType,
    ...styleArgType,
    ...disableControls(['text']),
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
  args: {
    type: TYPE.BODY_LARGE_REGULAR,
    tagname: VALID_TEXT_TAGS.P,
    speed: 100,
    children: 'This uses a custom speed value of 100ms per character.',
  },
};

export const DynamicSpeedDemo: StoryObj = {
  render: () => html`
    <div>
      <h3>Dynamic Speed Adjustment</h3>
      <mdc-typewriter id="dynamic-speed-typewriter" type="${TYPE.BODY_LARGE_REGULAR}" speed="normal">
        This text starts at normal speed...
      </mdc-typewriter>
      <div style="margin-top: 20px;">
        <button
          @click=${() => {
            const typewriter = document.getElementById('dynamic-speed-typewriter') as any;
            if (typewriter) {
              typewriter.speed = 20; // Much faster
              typewriter.addTextChunk(' and now continues much faster!');
            }
          }}
        >
          Add Fast Text
        </button>
        <button
          @click=${() => {
            const typewriter = document.getElementById('dynamic-speed-typewriter') as any;
            if (typewriter) {
              typewriter.speed = 150; // Much slower
              typewriter.addTextChunk(' And now very slowly...');
            }
          }}
        >
          Add Slow Text
        </button>
      </div>
    </div>
  `,
};

export const ChunkedTextDemo: StoryObj = {
  render: () => html`
    <div>
      <h3>Chunked Text Addition</h3>
      <mdc-typewriter id="chunked-typewriter" type="${TYPE.BODY_LARGE_REGULAR}" speed="normal">
        Initial text.
      </mdc-typewriter>
      <div style="margin-top: 20px;">
        <button
          @click=${() => {
            const typewriter = document.getElementById('chunked-typewriter') as any;
            if (typewriter) {
              typewriter.addTextChunk(' First chunk added.', 20);
            }
          }}
        >
          Add Chunk 1 (Fast)
        </button>
        <button
          @click=${() => {
            const typewriter = document.getElementById('chunked-typewriter') as any;
            if (typewriter) {
              typewriter.addTextChunk(' Second chunk added.', 120);
            }
          }}
        >
          Add Chunk 2 (Slow)
        </button>
        <button
          @click=${() => {
            const typewriter = document.getElementById('chunked-typewriter') as any;
            if (typewriter) {
              typewriter.addTextChunk(' Final chunk!');
            }
          }}
        >
          Add Chunk 3 (Normal)
        </button>
      </div>
    </div>
  `,
};

export const AccessibilityDemo: StoryObj = {
  render: () => html`
    <div>
      <h3>Accessibility Features Demo</h3>
      <p>This typewriter component includes accessibility features:</p>
      <ul>
        <li>Screen readers announce the complete text</li>
        <li>Uses <code>aria-live="polite"</code> for dynamic updates</li>
        <li>Shows <code>aria-busy</code> during typing animation</li>
        <li>Cursor is hidden from screen readers with <code>aria-hidden</code></li>
      </ul>

      <mdc-typewriter type="${TYPE.BODY_LARGE_REGULAR}" speed="normal" id="dynamic-typewriter-a11y">
        This text demonstrates accessible typewriter functionality. Screen readers will announce the complete text
        rather than character by character.
      </mdc-typewriter>
      <div style="margin-top: 20px;">
        <button
          @click=${() => {
            const typewriter = document.getElementById('dynamic-typewriter-a11y');
            if (typewriter) {
              typewriter.textContent += ' And now some additional text gets added!';
            }
          }}
        >
          Add more text
        </button>
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
        <button
          @click=${() => {
            const typewriter = document.getElementById('dynamic-typewriter');
            if (typewriter) {
              typewriter.textContent += ' And now some additional text gets added!';
            }
          }}
        >
          Add more text
        </button>
      </div>
    </div>
  `,
};

export const EventHandlingExample: StoryObj = {
  render: () => {
    // Event handling will be set up when the component is connected
    setTimeout(() => {
      const typewriter = document.getElementById('event-typewriter');
      const statusArea = document.getElementById('event-status');

      if (typewriter && statusArea) {
        // Listen for typing-complete event
        typewriter.addEventListener('typing-complete', () => {
          statusArea.innerHTML += `<div>Event: typing-complete at ${new Date().toLocaleTimeString()}</div>`;
        });

        // Listen for change event
        typewriter.addEventListener('change', () => {
          statusArea.innerHTML += `<div>Event: change at ${new Date().toLocaleTimeString()}</div>`;
        });
      }
    }, 100);

    return html`
      <div>
        <h3>Event Handling</h3>
        <mdc-typewriter id="event-typewriter" type="${TYPE.BODY_LARGE_REGULAR}" speed="normal">
          This text will trigger events as it types.
        </mdc-typewriter>
        <div style="margin-top: 20px;">
          <button
            @click=${() => {
              const typewriter = document.getElementById('event-typewriter');
              if (typewriter) {
                typewriter.textContent = 'Content changed! Watch for events.';
              }
            }}
          >
            Change content
          </button>
        </div>
        <div id="event-status" style="margin-top: 20px; padding: 10px; min-height: 100px;">
          <div>Events will appear here:</div>
        </div>
      </div>
    `;
  },
};

export const DynamicTextAndSpeedDemo: StoryObj = {
  render: () => html`
    <div>
      <h3>Dynamic Text + Speed Control</h3>
      <p>Add custom text chunks with different speeds interactively:</p>

      <mdc-typewriter id="dynamic-combined-typewriter" type="${TYPE.BODY_LARGE_REGULAR}" speed="60">
        Welcome to the interactive typewriter!
      </mdc-typewriter>

      <div style="margin-top: 20px; display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        <input
          id="custom-text-input"
          type="text"
          placeholder="Enter text to add..."
          style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; flex: 1; min-width: 200px;"
        />

        <select id="speed-selector" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
          <option value="20">Fast (20ms)</option>
          <option value="60" selected>Normal (60ms)</option>
          <option value="120">Slow (120ms)</option>
          <option value="200">Very Slow (200ms)</option>
          <option value="custom">Custom...</option>
        </select>

        <input
          id="custom-speed-input"
          type="number"
          placeholder="Custom ms"
          min="10"
          max="1000"
          step="10"
          style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; width: 100px; display: none;"
        />

        <button
          @click=${() => {
            const typewriter = document.getElementById('dynamic-combined-typewriter') as any;
            const textInput = document.getElementById('custom-text-input') as HTMLInputElement;
            const speedSelector = document.getElementById('speed-selector') as HTMLSelectElement;
            const customSpeedInput = document.getElementById('custom-speed-input') as HTMLInputElement;

            if (typewriter && textInput && speedSelector) {
              const text = textInput.value.trim();
              if (!text) return;

              let speed = parseInt(speedSelector.value, 10);
              if (speedSelector.value === 'custom' && customSpeedInput.value) {
                speed = parseInt(customSpeedInput.value, 10);
              }

              // Add the text chunk with the selected speed
              typewriter.addTextChunk(` ${text}`, speed);

              // Clear the input
              textInput.value = '';
            }
          }}
          style="padding: 8px 16px; background: #007ACC; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Text
        </button>

        <button
          @click=${() => {
            const typewriter = document.getElementById('dynamic-combined-typewriter') as any;
            const speedSelector = document.getElementById('speed-selector') as HTMLSelectElement;
            const customSpeedInput = document.getElementById('custom-speed-input') as HTMLInputElement;

            if (typewriter && speedSelector) {
              let newSpeed = parseInt(speedSelector.value, 10);
              if (speedSelector.value === 'custom' && customSpeedInput.value) {
                newSpeed = parseInt(customSpeedInput.value, 10);
              }

              // Change the global typing speed
              typewriter.speed = newSpeed;
            }
          }}
          style="padding: 8px 16px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          Change Speed
        </button>
      </div>

      <div style="margin-top: 15px;">
        <strong>Quick Actions:</strong>
        <div style="display: flex; gap: 10px; margin-top: 8px; flex-wrap: wrap;">
          <button
            @click=${() => {
              const typewriter = document.getElementById('dynamic-combined-typewriter') as any;
              if (typewriter) {
                typewriter.addTextChunk(' 🚀 Super fast!', 15);
              }
            }}
            style="padding: 6px 12px; background: #ff6b35; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.9em;"
          >
            Add Fast Emoji
          </button>

          <button
            @click=${() => {
              const typewriter = document.getElementById('dynamic-combined-typewriter') as any;
              if (typewriter) {
                typewriter.addTextChunk(
                  ' This is a longer sentence that demonstrates how the typewriter handles more substantial text additions with custom speeds.',
                  40,
                );
              }
            }}
            style="padding: 6px 12px; background: #6f42c1; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.9em;"
          >
            Add Long Text
          </button>

          <button
            @click=${() => {
              const typewriter = document.getElementById('dynamic-combined-typewriter') as any;
              if (typewriter) {
                typewriter.speed = 20;
                typewriter.addTextChunk(' Speed changed to fast mode!');
              }
            }}
            style="padding: 6px 12px; background: #20c997; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.9em;"
          >
            Change Speed + Add
          </button>

          <button
            @click=${() => {
              const typewriter = document.getElementById('dynamic-combined-typewriter') as any;
              if (typewriter) {
                typewriter.textContent = 'Reset! Ready for new content.';
                typewriter.speed = 60;
              }
            }}
            style="padding: 6px 12px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.9em;"
          >
            Reset
          </button>
        </div>
      </div>

      <script>
        // Handle custom speed input visibility
        document.addEventListener('DOMContentLoaded', () => {
          const speedSelector = document.getElementById('speed-selector');
          const customSpeedInput = document.getElementById('custom-speed-input');

          if (speedSelector && customSpeedInput) {
            speedSelector.addEventListener('change', e => {
              if (e.target.value === 'custom') {
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
      <h3>Instant Text Addition</h3>
      <p>Demonstrate instant text that bypasses the typing animation:</p>

      <mdc-typewriter id="instant-typewriter" type="${TYPE.BODY_LARGE_REGULAR}" speed="normal">
        This text types normally...
      </mdc-typewriter>

      <div style="margin-top: 20px;">
        <button
          @click=${() => {
            const typewriter = document.getElementById('instant-typewriter') as any;
            if (typewriter) {
              typewriter.addInstantTextChunk(' INSTANT TEXT!');
            }
          }}
          style="padding: 8px 16px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Instant Text
        </button>

        <button
          @click=${() => {
            const typewriter = document.getElementById('instant-typewriter') as any;
            if (typewriter) {
              typewriter.addTextChunk(' And back to typing...', 80);
            }
          }}
          style="padding: 8px 16px; background: #007ACC; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Animated Text
        </button>

        <button
          @click=${() => {
            const typewriter = document.getElementById('instant-typewriter') as any;
            if (typewriter) {
              // Using the instant parameter
              typewriter.addTextChunk(' Also instant!', undefined, true);
            }
          }}
          style="padding: 8px 16px; background: #6f42c1; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Instant (Parameter)
        </button>
      </div>
    </div>
  `,
};

export const MixedChunksDemo: StoryObj = {
  render: () => html`
    <div>
      <h3>Mixed Instant & Animated Chunks</h3>
      <p>Demonstrate seamless mixing of instant and animated text chunks:</p>

      <mdc-typewriter id="mixed-typewriter" type="${TYPE.BODY_LARGE_REGULAR}" speed="normal">
        Starting text...
      </mdc-typewriter>

      <div style="margin-top: 20px;">
        <button
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
          style="padding: 8px 16px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Mixed Sequence
        </button>

        <button
          @click=${() => {
            const typewriter = document.getElementById('mixed-typewriter') as any;
            if (typewriter) {
              typewriter.textContent = 'Starting text...';
            }
          }}
          style="padding: 8px 16px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          Reset
        </button>
      </div>
    </div>
  `,
};

export const RapidUpdatesDemo: StoryObj = {
  render: () => html`
    <div>
      <h3>Rapid Updates Use Case</h3>
      <p>Simulate rapid data updates where animation would be too slow:</p>

      <mdc-typewriter id="rapid-typewriter" type="${TYPE.BODY_LARGE_REGULAR}" speed="fast"> Live Feed: </mdc-typewriter>

      <div style="margin-top: 20px;">
        <button
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
          style="padding: 8px 16px; background: #fd7e14; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          Simulate Live Updates
        </button>

        <button
          @click=${() => {
            const typewriter = document.getElementById('rapid-typewriter') as any;
            if (typewriter) {
              typewriter.textContent = 'Live Feed: ';
            }
          }}
          style="padding: 8px 16px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          Clear Feed
        </button>
      </div>
    </div>
  `,
};
// End AI-Assisted
