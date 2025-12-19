import type { Meta, StoryObj, Args } from '@storybook/web-components';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '.';
import { classArgType, styleArgType } from '../../../config/storybook/commonArgTypes';
import popoverMeta from '../popover/popover.stories';
import { DEFAULTS as POPOVER_DEFAULTS } from '../popover/popover.constants';
import { describeStory, hideAllControls, hideControls } from '../../../config/storybook/utils';

import { DEFAULTS } from './coachmark.constants';
import type Coachmark from './coachmark.component';

import '../button';
import '../avatar';
import '../appheader';
import '../brandvisual';
import '../searchfield';
import '../divider';
import '../tablist';
import '../tab';
import '../link';
import '../badge';
import '../card';
import '../tooltip';
import '../progressbar';

const render = (args: Args) => html`
  <div style="height: 50vh; display: inline-block">
    <mdc-button @click="${() => (document.getElementById(args.id) as Coachmark | undefined)?.show()}">
      open
    </mdc-button>
    <mdc-button @click="${() => (document.getElementById(args.id) as Coachmark | undefined)?.hide()}">
      close
    </mdc-button>
    <mdc-text id="${args.triggerID}">Anchor</mdc-text>
    <mdc-coachmark
      id="${args.id}"
      triggerID="${args.triggerID}"
      trigger="${args.trigger}"
      placement="${args.placement}"
      delay="${args.delay}"
      z-index="${args['z-index']}"
      ?visible="${args.visible}"
      .offset="${args.offset ?? 0}"
      ?interactive=${args.interactive}
      ?focus-trap=${args['focus-trap']}
      ?show-arrow=${args['show-arrow']}
      ?disable-flip=${args['disable-flip']}
      ?size=${args.size}
      ?backdrop=${args.backdrop}
      ?close-button=${args['close-button']}
      ?prevent-scroll=${args['prevent-scroll']}
      ?hide-on-blur=${args['hide-on-blur']}
      ?hide-on-escape=${args['hide-on-escape']}
      ?hide-on-outside-click=${args['hide-on-outside-click']}
      ?focus-back-to-trigger=${args['focus-back-to-trigger']}
      append-to=${args['append-to']}
      close-button-aria-label="${args['close-button-aria-label']}"
      aria-label="${args['aria-label']}"
      aria-labelledby="${args['aria-labelledby']}"
      aria-describedby="${args['aria-describedby']}"
      role="${args.role}"
      @shown="${action('onshown')}"
      @hidden="${action('onhidden')}"
      @created="${action('oncreated')}"
      @destroyed="${action('ondestroyed')}"
    >
      <mdc-text>Lorem ipsum dolor sit amet.</mdc-text>
    </mdc-coachmark>
  </div>
`;

const meta: Meta = {
  title: 'Components/coachmark',
  tags: ['autodocs'],
  component: 'mdc-coachmark',
  render,

  argTypes: {
    ...classArgType,
    ...styleArgType,
    ...popoverMeta.argTypes,
    ...hideControls(['color', 'aria-label', 'show-arrow']),
  },
};

export default meta;

export const Example: StoryObj = {
  args: {
    id: 'coachmark',
    triggerID: 'coachmark-trigger',
    trigger: DEFAULTS.TRIGGER,
    placement: POPOVER_DEFAULTS.PLACEMENT,
    color: POPOVER_DEFAULTS.COLOR,
    visible: POPOVER_DEFAULTS.VISIBLE,
    offset: POPOVER_DEFAULTS.OFFSET,
    'focus-trap': POPOVER_DEFAULTS.FOCUS_TRAP,
    'prevent-scroll': POPOVER_DEFAULTS.PREVENT_SCROLL,
    'show-arrow': DEFAULTS.ARROW,
    'close-button': DEFAULTS.CLOSE_BUTTON,
    interactive: POPOVER_DEFAULTS.INTERACTIVE,
    delay: POPOVER_DEFAULTS.DELAY,
    'hide-on-escape': POPOVER_DEFAULTS.HIDE_ON_ESCAPE,
    'hide-on-blur': POPOVER_DEFAULTS.HIDE_ON_BLUR,
    'hide-on-outside-click': POPOVER_DEFAULTS.HIDE_ON_CLICK_OUTSIDE,
    'focus-back-to-trigger': POPOVER_DEFAULTS.FOCUS_BACK,
    backdrop: POPOVER_DEFAULTS.BACKDROP,
    'disable-flip': POPOVER_DEFAULTS.DISABLE_FLIP,
    size: POPOVER_DEFAULTS.SIZE,
    'z-index': POPOVER_DEFAULTS.Z_INDEX,
    role: POPOVER_DEFAULTS.ROLE,
  },
};

export const TourGuide: StoryObj = {
  render: () => {
    const coachmark = () => document.getElementById('tour-coachmark') as Coachmark | undefined;
    const startCoachmark = () => {
      coachmark()?.show();
    };
    const stopCoachmark = () => {
      coachmark()?.hide();
    };
    const content = [
      {
        triggerID: 'brand-logo',
        title: 'Welcome',
        description: 'Welcome to our Momentum Design Sale! This is a guided tour.',
      },
      {
        triggerID: 'search-field',
        title: 'Search',
        description: 'Use this to search for products from the entire site.',
      },
      { triggerID: 'user-account', title: 'Your account', description: 'Click this to access your account settings.' },
      {
        triggerID: 'additional-options',
        title: 'Additional options',
        description: 'Click this to see more options.\n You can change language, delete account, and more.',
      },
      { triggerID: 'best-sellers-tab', title: 'Best Sellers', description: 'Browse our best selling products.' },
      { triggerID: 'today-deals-tab', title: "Today's Deals", description: 'Check out our daily deals and offers.' },
      { triggerID: 'electronics-tab', title: 'Electronics', description: 'Explore our electronics section.' },
      { triggerID: 'fashion-tab', title: 'Fashion', description: 'Browse our fashion collection.' },
      { triggerID: 'home-kitchen-tab', title: 'Home & Kitchen', description: 'Explore our home and kitchen products.' },
      { triggerID: 'gift-ideas-tab', title: 'Gift Ideas', description: 'Find the perfect gift for anyone.' },
      { triggerID: 'membership-tab', title: 'Membership', description: 'Learn about our membership benefits.' },
      { triggerID: 'card-8', title: 'Product Card', description: 'This is a product card with image and details.' },
      {
        triggerID: 'card-quick-peak-8',
        title: 'Quick Peak',
        description: 'Take a quick peak at the product for more details.',
      },
      {
        triggerID: 'card-cart-8',
        title: 'Add to cart',
        description: 'Add this item to your Cart. So that you can buy later.',
      },
    ];
    const dummyText = () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
    const updateProgress = (value: string) => {
      document.getElementsByTagName('mdc-progressbar')[0]?.setAttribute('value', value);
    };
    const updateCoachmarkPosition = (position: number) => {
      stopCoachmark();
      window.requestAnimationFrame(() => {
        const currentIndex = parseInt(coachmark()?.getAttribute('data-content-index') || '0', 10);
        const newIndex = currentIndex + position;
        updateProgress((newIndex * 7.14).toString());
        coachmark()?.setAttribute('data-content-index', newIndex.toString());
        coachmark()?.setAttribute('triggerID', content[newIndex].triggerID);
        const contentElement = document.getElementById('coachmark-content');
        if (contentElement) {
          contentElement.innerHTML = `
            <mdc-text>${content[newIndex].description}</mdc-text>
            <mdc-text type="body-small-regular">${dummyText()}</mdc-text>
          `;
        }
        startCoachmark();
      });
    };
    const goToNext = () => updateCoachmarkPosition(1);
    const goToPrev = () => updateCoachmarkPosition(-1);
    const startTour = () => {
      coachmark()?.setAttribute('data-content-index', '0');
      coachmark()?.setAttribute('triggerID', content[0].triggerID);
      startCoachmark();
    };
    const endTour = () => {
      stopCoachmark();
      coachmark()?.setAttribute('data-content-index', '0');
      coachmark()?.setAttribute('triggerID', content[0].triggerID);
    };
    return html`
      <mdc-coachmark
        id="tour-coachmark"
        triggerID="brand-logo"
        data-content-index="0"
        hide-on-escape
        hide-on-outside-click
      >
        <div style="margin: 1rem; height: 100%; width: 18rem;">
          <mdc-progressbar id="coachmark-progress" value="0" max="100"></mdc-progressbar>
          <div id="coachmark-content">
            <mdc-text>${content[0].description}</mdc-text>
            <mdc-text type="body-small-regular">${dummyText()}</mdc-text>
          </div>
          <div style="display: flex; gap: 8px; margin-top: 8px;">
            <mdc-button inverted @click="${goToPrev}">Previous</mdc-button>
            <mdc-button inverted @click="${goToNext}">Next</mdc-button>
            <mdc-button inverted @click="${endTour}" style="margin-left: auto">End tour</mdc-button>
          </div>
        </div>
      </mdc-coachmark>
      <div role="navigation">
        <mdc-appheader>
          <div slot="leading">
            <mdc-brandvisual
              name="momentum-design-logo-dark-color-horizontal"
              style="display: block"
              id="brand-logo"
            ></mdc-brandvisual>
          </div>
          <div slot="center" style="width: 20rem;">
            <mdc-searchfield
              id="search-field"
              placeholder="Search on the entire site"
              clear-aria-label="Clear"
            ></mdc-searchfield>
          </div>
          <div slot="trailing" style="display: flex; align-items: center; gap: 0.5rem;">
            <mdc-avatar id="user-account" name="avatar" src="https://picsum.photos/id/8/5000/3333"></mdc-avatar>
            <mdc-button
              id="additional-options"
              variant="tertiary"
              prefix-icon="waffle-menu-bold"
              aria-label="icon button"
            ></mdc-button>
          </div>
        </mdc-appheader>
        <mdc-divider></mdc-divider>
      </div>
      <mdc-tablist active-tab-id="today-deals-tab" style="margin: 0 25%;">
        <mdc-tab
          text="Best Sellers"
          id="best-sellers-tab"
          tab-id="best-sellers-tab"
          aria-controls="best-sellers-panel"
        ></mdc-tab>
        <mdc-tab
          text="Today's Deals"
          id="today-deals-tab"
          tab-id="today-deals-tab"
          aria-controls="today-deals-panel"
        ></mdc-tab>
        <mdc-tab
          text="Electronics"
          id="electronics-tab"
          tab-id="electronics-tab"
          aria-controls="electronics-panel"
        ></mdc-tab>
        <mdc-tab text="Fashion" id="fashion-tab" tab-id="fashion-tab" aria-controls="fashion-panel"></mdc-tab>
        <mdc-tab
          text="Home &amp; Kitchen"
          id="home-kitchen-tab"
          tab-id="home-kitchen-tab"
          aria-controls="home-kitchen-panel"
        ></mdc-tab>
        <mdc-tab
          text="Gift Ideas"
          id="gift-ideas-tab"
          tab-id="gift-ideas-tab"
          aria-controls="gift-ideas-panel"
        ></mdc-tab>
        <mdc-tab
          text="Membership"
          id="membership-tab"
          tab-id="membership-tab"
          aria-controls="membership-panel"
        ></mdc-tab>
      </mdc-tablist>
      <mdc-divider></mdc-divider>
      <div style="margin: 2rem 45%; text-align: center;">
        <mdc-button id="get-started" size="large" variant="filled" @click="${startTour}">Get Started</mdc-button>
        <mdc-tooltip triggerid="get-started" show-arrow strategy="fixed" placement="bottom"
          >Click to start the coachmark tour guide for this site</mdc-tooltip
        >
      </div>
      <div style="display: flex; justify-content: space-around; gap: 2rem; flex-wrap: wrap; margin: 3rem 10% 0 10%;">
        ${[
          { id: 8, title: 'Macbook Air', subtitle: 'Powerful laptop for professionals' },
          { id: 133, title: 'Vintage Rolls Royce', subtitle: 'Classic luxury car from the 1950s' },
          { id: 36, title: 'DIY Camera', subtitle: 'For your weekend crafting' },
          { id: 63, title: 'Tea Mug', subtitle: 'A perfect Indian gift' },
          { id: 145, title: 'Guitar', subtitle: 'String instrument for music lovers' },
          { id: 157, title: 'Skating Board', subtitle: 'Fun outdoor activity for all ages' },
        ].map(
          item =>
            html`<mdc-card
              id="card-${item.id}"
              variant="border"
              orientation="vertical"
              image-src="https://picsum.photos/id/${item.id}/150/120"
              card-title="${item.title}"
              subtitle="${item.subtitle}"
              title-tag-name="p"
              subtitle-tag-name="span"
              style="height: 300px;"
            >
              <div slot="footer">
                <mdc-divider style="margin: 6px 0;"></mdc-divider>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <mdc-link id="card-quick-peak-${item.id}" href="#" size="small">Quick peak</mdc-link>
                  <mdc-button id="card-cart-${item.id}" size="24" variant="secondary">Add to Cart</mdc-button>
                </div>
              </div>
            </mdc-card>`,
        )}
      </div>
      <div style="margin-top: 2rem;">
        <mdc-divider></mdc-divider>
      </div>
    `;
  },
  ...describeStory(
    html`<p>
      Please click on "Get started" to begin the guided tour. <br />
      Use the navigation buttons to move through the tour steps. The progress bar shows your current position in the
      tour.
    </p>`,
  ),
  ...hideAllControls(),
};
