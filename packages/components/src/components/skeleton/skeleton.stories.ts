import type { Meta, StoryObj, Args } from '@storybook/web-components';
import '.';
import { html } from 'lit';

import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import { textControls } from '../../../config/storybook/utils';

import { SKELETON_VARIANTS, DEFAULTS } from './skeleton.constants';

// Global counter for dynamic content
let dynamicContentCounter = 0;

// Helper functions for dynamic content story
const addContentToDynamic = (type: string) => {
  dynamicContentCounter += 1;

  const normalContainer = document.getElementById('normal-content-dynamic');
  const skeletonContainer = document.getElementById('skeleton-content-dynamic');

  if (!normalContainer || !skeletonContainer) return;

  // Clear placeholder text on first add
  if (normalContainer.children.length === 1 && normalContainer.children[0].tagName === 'P') {
    normalContainer.innerHTML = '';
    skeletonContainer.innerHTML = '';
  }

  let element: HTMLElement;

  switch (type) {
    case 'button':
      element = document.createElement('button');
      element.textContent = `Button ${dynamicContentCounter}`;
      element.style.cssText = `
        padding: 10px 20px; margin: 5px; background: #007bff;
        color: white; border: none; border-radius: 4px; cursor: pointer;
      `;
      break;

    case 'text':
      element = document.createElement('p');
      element.textContent = `Sample text paragraph ${dynamicContentCounter}.
        This is some content that the skeleton will wrap around.`;
      element.style.cssText = `
        margin: 5px 0; padding: 10px; background: #f8f9fa;
        border-radius: 4px; cursor: pointer;
      `;
      break;

    case 'image':
      element = document.createElement('div');
      element.textContent = `🖼️ Image ${dynamicContentCounter}`;
      element.style.cssText = `
        width: 100px; height: 80px;
        background: linear-gradient(45deg, #e9ecef, #dee2e6);
        display: flex; align-items: center; justify-content: center;
        margin: 5px; border-radius: 4px; cursor: pointer; font-size: 12px;
      `;
      break;

    case 'card':
      element = document.createElement('div');
      element.innerHTML = `
        <div style="padding: 15px; background: white; border: 1px solid #dee2e6;
                    border-radius: 8px; margin: 5px; cursor: pointer;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h5 style="margin: 0 0 10px 0;">Card ${dynamicContentCounter}</h5>
          <p style="margin: 0; color: #666; font-size: 14px;">
            This is a card with some content that demonstrates how the skeleton
            adapts to different content sizes.
          </p>
        </div>
      `;
      break;

    default:
      return;
  }

  // Clone element for both containers
  const normalElement = element.cloneNode(true) as HTMLElement;
  const skeletonElement = element.cloneNode(true) as HTMLElement;

  // Add click-to-remove functionality
  const removeElements = () => {
    normalElement.remove();
    skeletonElement.remove();
  };

  normalElement.onclick = removeElements;
  skeletonElement.onclick = removeElements;

  normalContainer.appendChild(normalElement);
  skeletonContainer.appendChild(skeletonElement);
};

const clearDynamicContent = () => {
  const normalContainer = document.getElementById('normal-content-dynamic');
  const skeletonContainer = document.getElementById('skeleton-content-dynamic');

  if (normalContainer && skeletonContainer) {
    normalContainer.innerHTML = `
      <p style="margin: 0; color: #666; font-style: italic;">
        Click buttons above to add content
      </p>
    `;
    skeletonContainer.innerHTML = `
      <p style="margin: 0; color: #666; font-style: italic;">
        Click buttons above to add content
      </p>
    `;
    dynamicContentCounter = 0;
  }
};

const render = (args: Args) => html`
  <mdc-skeleton
    variant="${args.variant}"
    class="${args.class}"
    style="--mdc-skeleton-height: 100px; --mdc-skeleton-width: 100px; ${args.style}"
  ></mdc-skeleton>
`;

const renderWithContent = (args: Args) => html`
  <div style="display: flex; flex-direction: column; gap: 20px;">
    <div style="display: flex; gap: 20px;">
      <div>
        <p>Normal content:</p>
        <button style="padding: 10px 20px;">Click me</button>
      </div>
      <div>
        <p>Skeleton wrapping content:</p>
        <mdc-skeleton variant="${args.variant}" class="${args.class}" style="${args.style}">
          <button style="padding: 10px 20px;">Click me</button>
        </mdc-skeleton>
      </div>
    </div>
  </div>
`;

const renderResponsive = (args: Args) => html`
  <div style="width: 100%; max-width: 400px; height: 200px; border: 2px dashed #ccc; position: relative;">
    <p style="position: absolute; top: -20px; left: 0; margin: 0; font-size: 12px;">
      Container (400px max-width, 200px height)
    </p>
    <mdc-skeleton variant="${args.variant}" class="${args.class}" style="${args.style}"></mdc-skeleton>
  </div>
`;

const meta: Meta = {
  title: 'Components/skeleton',
  tags: ['autodocs'],
  component: 'mdc-skeleton',
  render,

  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(SKELETON_VARIANTS),
    },
    ...textControls(['--mdc-skeleton-background-color', '--mdc-skeleton-height', '--mdc-skeleton-width']),
    ...classArgType,
    ...styleArgType,
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    variant: DEFAULTS.VARIANT,
  },
};

export const Rectangular: StoryObj = {
  args: {
    variant: SKELETON_VARIANTS.RECTANGULAR,
  },
};

export const Rounded: StoryObj = {
  args: {
    variant: SKELETON_VARIANTS.ROUNDED,
  },
};

export const Circular: StoryObj = {
  args: {
    variant: SKELETON_VARIANTS.CIRCULAR,
  },
};

export const Button: StoryObj = {
  args: {
    variant: SKELETON_VARIANTS.BUTTON,
  },
};

export const WithContent: StoryObj = {
  render: renderWithContent,
  args: {
    variant: SKELETON_VARIANTS.RECTANGULAR,
  },
};

export const DynamicContent: StoryObj = {
  render: (args: Args) => html`
    <div style="display: flex; flex-direction: column; gap: 20px; max-width: 600px;">
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <button
          @click=${() => addContentToDynamic('button')}
          style="padding: 8px 16px; background: #007bff; color: white;
                 border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Button
        </button>
        <button
          @click=${() => addContentToDynamic('text')}
          style="padding: 8px 16px; background: #28a745; color: white;
                 border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Text
        </button>
        <button
          @click=${() => addContentToDynamic('image')}
          style="padding: 8px 16px; background: #6f42c1; color: white;
                 border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Image
        </button>
        <button
          @click=${() => addContentToDynamic('card')}
          style="padding: 8px 16px; background: #fd7e14; color: white;
                 border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Card
        </button>
        <button
          @click=${() => clearDynamicContent()}
          style="padding: 8px 16px; background: #dc3545; color: white;
                 border: none; border-radius: 4px; cursor: pointer;"
        >
          Clear All
        </button>
      </div>

      <div style="display: flex; gap: 20px;">
        <div style="flex: 1;">
          <h4 style="margin: 0 0 10px 0;">Normal Content:</h4>
          <div
            id="normal-content-dynamic"
            style="border: 2px dashed #ccc; min-height: 100px;
                   border-radius: 4px;"
          >
            <p style="margin: 0; color: #666; font-style: italic;">Click buttons above to add content</p>
          </div>
        </div>

        <div style="flex: 1;">
          <h4 style="margin: 0 0 10px 0;">Skeleton Wrapped Content:</h4>
          <mdc-skeleton
            id="dynamic-skeleton-story"
            variant="${args.variant}"
            class="${args.class}"
            style="${args.style}; border: 2px dashed #999;"
          >
            <div id="skeleton-content-dynamic">
              <p style="margin: 0; color: #666; font-style: italic;">Click buttons above to add content</p>
            </div>
          </mdc-skeleton>
        </div>
      </div>
    </div>
  `,
  args: {
    variant: SKELETON_VARIANTS.RECTANGULAR,
  },
};

export const ResponsiveContainer: StoryObj = {
  render: renderResponsive,
  args: {
    variant: SKELETON_VARIANTS.RECTANGULAR,
  },
};
