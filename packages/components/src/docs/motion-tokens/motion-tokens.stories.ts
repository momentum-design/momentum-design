import type { Decorator, Meta, StoryObj } from '@storybook/web-components';
import { html, type TemplateResult } from 'lit';

import { hideAllControls } from '../../../config/storybook/utils';

import '../../components/button';
import '../../components/chip';
import '../../components/icon';
import '../../components/motionprovider';

import {
  motionPrimitivesByCategory,
  objectStateAnimationTokens,
  type AnimationToken,
  type MotionPrimitiveToken,
} from './motion-tokens.stories.data';
import './motion-tokens.styles.css';
import {
  beginDurationFadeIn,
  buildEasingGraphGeometry,
  completeDurationFadeIn,
  FADING_IN_CLASS,
  FADING_OUT_CLASS,
  handleAnimationTokenTransitionEnd,
  playAnimationToken,
  replayEnter,
  replayExit,
} from './motion-tokens.stories.utils';

const stripBodyMotionClasses: Decorator = Story => {
  document.querySelector('body.sb-show-main')?.classList.remove('mds-motion', 'mds-animation');

  return Story();
};

const replayCard = (event: Event, isExit = false): void => {
  const card = (event.currentTarget as HTMLElement).closest('[data-motion-card]');

  if (!(card instanceof HTMLElement)) {
    return;
  }

  if (isExit) {
    replayExit(card);
    return;
  }

  replayEnter(card);
};

const handleDurationDotTransitionEnd = (event: TransitionEvent): void => {
  if (event.target !== event.currentTarget) {
    return;
  }

  const card = (event.currentTarget as HTMLElement).closest('[data-motion-card]');

  if (!(card instanceof HTMLElement)) {
    return;
  }

  if (
    event.propertyName === 'left' &&
    card.classList.contains('is-active') &&
    !card.classList.contains(FADING_OUT_CLASS)
  ) {
    card.classList.add(FADING_OUT_CLASS);
    return;
  }

  if (event.propertyName === 'opacity' && card.classList.contains(FADING_OUT_CLASS)) {
    beginDurationFadeIn(card);
    return;
  }

  if (event.propertyName === 'opacity' && card.classList.contains(FADING_IN_CLASS)) {
    completeDurationFadeIn(card);
  }
};

const handleEasingShapeTransitionEnd = (event: TransitionEvent): void => {
  if (event.target !== event.currentTarget) {
    return;
  }

  const shape = event.currentTarget as HTMLElement;
  const card = shape.closest('[data-motion-card]');

  if (!(card instanceof HTMLElement)) {
    return;
  }

  const isSquare = shape.classList.contains('motionTokensEasingSquare');

  if (
    event.propertyName === 'left' &&
    isSquare &&
    card.classList.contains('is-active') &&
    !card.classList.contains(FADING_OUT_CLASS)
  ) {
    card.classList.add(FADING_OUT_CLASS);
    return;
  }

  if (event.propertyName === 'opacity' && isSquare && card.classList.contains(FADING_OUT_CLASS)) {
    beginDurationFadeIn(card);
    return;
  }

  if (event.propertyName === 'opacity' && isSquare && card.classList.contains(FADING_IN_CLASS)) {
    completeDurationFadeIn(card);
  }
};

const handleDelayShapeTransitionEnd = (event: TransitionEvent): void => {
  if (event.target !== event.currentTarget) {
    return;
  }

  const shape = event.currentTarget as HTMLElement;
  const card = shape.closest('[data-motion-card]');

  if (!(card instanceof HTMLElement)) {
    return;
  }

  const isCircle = shape.classList.contains('motionTokensDelayCircle');

  if (
    event.propertyName === 'left' &&
    isCircle &&
    card.classList.contains('is-active') &&
    !card.classList.contains(FADING_OUT_CLASS)
  ) {
    card.classList.add(FADING_OUT_CLASS);
    return;
  }

  if (event.propertyName === 'opacity' && isCircle && card.classList.contains(FADING_OUT_CLASS)) {
    beginDurationFadeIn(card);
    return;
  }

  if (event.propertyName === 'opacity' && isCircle && card.classList.contains(FADING_IN_CLASS)) {
    completeDurationFadeIn(card);
  }
};

const renderPlayButton = (isExit = false): TemplateResult => html`
  <mdc-button
    class="motionTokensPlayButton"
    size="40"
    variant="secondary"
    prefix-icon="play-bold"
    aria-label="Play animation"
    @click=${(event: Event) => replayCard(event, isExit)}
  ></mdc-button>
`;

const EASING_DEMO_COLORS: Record<string, string> = {
  standard: 'var(--mds-color-theme-text-warning-normal)',
  entrance: 'var(--mds-color-theme-text-success-normal)',
  exit: 'var(--mds-color-theme-text-error-normal)',
  linear: 'var(--mds-color-theme-text-accent-normal)',
};

const getEasingDemoColor = (tokenName: string): string =>
  EASING_DEMO_COLORS[tokenName] ?? 'var(--mds-color-theme-text-accent-normal)';

interface TokenCardOptions {
  isExit?: boolean;
  initialActive?: boolean;
  aboveHeader?: TemplateResult;
  cardStyle?: string;
}

const renderTokenCard = (
  token: MotionPrimitiveToken | AnimationToken,
  meta: string,
  stage: TemplateResult,
  { isExit = false, initialActive = false, aboveHeader, cardStyle }: TokenCardOptions = {},
): TemplateResult => html`
  <article
    class="motionTokensCard ${initialActive ? 'is-active' : ''}"
    data-motion-card
    style=${cardStyle ?? ''}
  >
    ${aboveHeader}
    <div class="motionTokensCardHeader">
      <h4 class="title">${token.name}</h4>
      <h4 class="subtitle">${meta}</h4>
    </div>
    <div class="motionTokensStage">
      ${renderPlayButton(isExit)}
      ${stage}
    </div>
    <p class="motionTokensCardDescription">${token.description}</p>
  </article>
`;

const renderDurationCard = (token: MotionPrimitiveToken): TemplateResult =>
  renderTokenCard(
    token,
    token.value,
    html`
      <div class="motionTokensDurationTrack" style="--demo-duration: var(${token.cssVar})">
        <div class="motionTokensDurationDot" @transitionend=${handleDurationDotTransitionEnd}></div>
      </div>
    `,
  );

const renderEasingGraph = (token: MotionPrimitiveToken): TemplateResult => {
  const geometry = buildEasingGraphGeometry(token.value);

  if (!geometry) {
    return html``;
  }

  return html`
    <svg
      class="motionTokensEasingGraph"
      viewBox="0 0 100 100"
      role="img"
      aria-label="Easing curve for ${token.name}"
    >
      <line
        class="motionTokensEasingGraphHandle"
        x1="${geometry.start.x}"
        y1="${geometry.start.y}"
        x2="${geometry.control1.x}"
        y2="${geometry.control1.y}"
      ></line>
      <line
        class="motionTokensEasingGraphHandle"
        x1="${geometry.end.x}"
        y1="${geometry.end.y}"
        x2="${geometry.control2.x}"
        y2="${geometry.control2.y}"
      ></line>
      <path class="motionTokensEasingGraphCurve" d="${geometry.path}"></path>
      <circle
        class="motionTokensEasingGraphControl"
        cx="${geometry.control1.x}"
        cy="${geometry.control1.y}"
        r="2.5"
      ></circle>
      <circle
        class="motionTokensEasingGraphControl"
        cx="${geometry.control2.x}"
        cy="${geometry.control2.y}"
        r="2.5"
      ></circle>
      <circle
        class="motionTokensEasingGraphEndpoint"
        cx="${geometry.start.x}"
        cy="${geometry.start.y}"
        r="4"
      ></circle>
      <circle
        class="motionTokensEasingGraphEndpoint"
        cx="${geometry.end.x}"
        cy="${geometry.end.y}"
        r="4"
      ></circle>
    </svg>
  `;
};

const renderEasingCard = (token: MotionPrimitiveToken): TemplateResult =>
  renderTokenCard(
    token,
    token.value,
    html`
      <div class="motionTokensEasingTrack" style="--demo-easing: var(${token.cssVar})">
        <div
          class="motionTokensEasingSquare"
          @transitionend=${handleEasingShapeTransitionEnd}
        ></div>
        <div
          class="motionTokensEasingCircle"
          @transitionend=${handleEasingShapeTransitionEnd}
        ></div>
      </div>
    `,
    {
      aboveHeader: renderEasingGraph(token),
      cardStyle: `--motion-tokens-demo-color: ${getEasingDemoColor(token.name)}`,
    },
  );

const renderDelayCard = (token: MotionPrimitiveToken): TemplateResult =>
  renderTokenCard(
    token,
    token.value,
    html`
      <div class="motionTokensDelayTrack" style="--demo-delay: var(${token.cssVar})">
        <div class="motionTokensDelaySquare"></div>
        <div
          class="motionTokensDelayCircle"
          @transitionend=${handleDelayShapeTransitionEnd}
        ></div>
      </div>
    `,
  );

const renderAnimationPlayButton = (token: AnimationToken): TemplateResult => html`
  <mdc-button
    class="motionTokensAnimationPlayButton"
    size="32"
    variant="secondary"
    prefix-icon="play-bold"
    aria-label="Play ${token.name} animation"
    @click=${(event: Event) => playAnimationToken(event, token.demoProperties)}
  ></mdc-button>
`;

const renderObjectContainer = (token: AnimationToken): TemplateResult => {
  const transitionEndHandler = (event: TransitionEvent) =>
    handleAnimationTokenTransitionEnd(event, token.demoProperties);

  if (token.name === 'objectColor') {
    return html`
      <div class="motionTokensAnimationObject">
        <mdc-icon
          class="motionTokensAnimationIcon"
          name="launch-regular"
          data-animation-target
          @transitionend=${transitionEndHandler}
        ></mdc-icon>
      </div>
    `;
  }

  return html`
    <div
      class="motionTokensAnimationObject"
      data-animation-target
      @transitionend=${transitionEndHandler}
    >
      <mdc-icon class="motionTokensAnimationIcon" name="launch-regular"></mdc-icon>
    </div>
  `;
};

const renderAnimationPreview = (token: AnimationToken): TemplateResult => {
  if (token.name === 'textChange') {
    return html`
      <p
        class="motionTokensAnimationText"
        data-animation-target
        @transitionend=${(event: TransitionEvent) =>
          handleAnimationTokenTransitionEnd(event, token.demoProperties)}
      >
        This is an example.
      </p>
    `;
  }

  return renderObjectContainer(token);
};

const renderAnimationTokenCard = (token: AnimationToken): TemplateResult => html`
  <article
    class="motionTokensAnimationCard motionTokensAnimationCard--${token.name}"
    data-animation-card
    style=${token.borderColorTransition ? `--demo-border-transition: ${token.borderColorTransition}` : ''}
  >
    <header class="motionTokensAnimationCardHeader">
      <h4 class="title">${token.name}</h4>
      ${renderAnimationPlayButton(token)}
    </header>
    <div class="motionTokensAnimationPreview">
      ${renderAnimationPreview(token)}
    </div>
    <div class="motionTokensAnimationChips">
      <mdc-chip color="cobalt" label="Duration: ${token.durationValue}"></mdc-chip>
      <mdc-chip color="lime" label="Easing: ${token.easingLabel}"></mdc-chip>
    </div>
    <p class="motionTokensCardDescription">${token.description}</p>
  </article>
`;

const renderAnimationSection = (title: string, tokens: AnimationToken[]): TemplateResult => html`
  <section>
    <h3>${title}</h3>
    <div class="motionTokensGrid">${tokens.map(renderAnimationTokenCard)}</div>
  </section>
`;

const renderPrimitiveSection = (
  title: string,
  tokens: MotionPrimitiveToken[],
  renderCard: (token: MotionPrimitiveToken) => TemplateResult,
): TemplateResult => html`
  <section>
    <h3>${title}</h3>
    <div class="motionTokensGrid">${tokens.map(renderCard)}</div>
  </section>
`;

const meta: Meta = {
  title: 'Foundations/Motion Tokens',
  decorators: [stripBodyMotionClasses],
  parameters: {
    docs: {
      description: {
        component:
          'Interactive playground for Momentum motion primitives and named animation tokens. Toggle motion off to compare token-based transitions with instant state changes.',
      },
    },
  },
  argTypes: {
    motionEnabled: {
      control: 'boolean',
      description: 'When off, the provider uses `motion="reduce"` and token-based motion is disabled.',
    },
    ...hideAllControls(true),
  },
};

export default meta;

export const Example: StoryObj = {
  globals: {
    'mdc-code-preview': false,
  },
  args: {
    motionEnabled: true,
  },
  render: ({ motionEnabled }) => html`
    <mdc-motionprovider motion="${motionEnabled ? 'full' : 'reduce'}">
      <div class="motionTokensDemo">
        <header class="motionTokensIntro">
          <h1>Motion Tokens Demo</h1>
        </header>

        <section>
          <h2>Core motion tokens</h2>
          <p>
            Core motion tokens define our key timings and easing for all the animations that we use in Momentum. These tokens are used to define the duration, easing, and delay of all the animations that we use in Momentum.
          </p> 
        </section>

        ${renderPrimitiveSection(
          'Duration',
          motionPrimitivesByCategory.duration,
          renderDurationCard,
        )}
        ${renderPrimitiveSection(
          'Easing',
          motionPrimitivesByCategory.easing,
          renderEasingCard,
        )}
        ${renderPrimitiveSection(
          'Delay',
          motionPrimitivesByCategory.delay,
          renderDelayCard,
        )}

        <section class="motionTokensSection">
          <h2>Animation tokens</h2>
          <p>
            Animation tokens combine the core motion tokens to transition specific properties. These are combined to animate our components as well as as parts of the user’s interface. .
          </p>
          ${renderAnimationSection('Object state', objectStateAnimationTokens)}
        </section>
      </div>
    </mdc-motionprovider>
  `,
};
