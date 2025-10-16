import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import type { Ref } from 'lit/directives/ref';
import lottie, { AnimationItem } from 'lottie-web/build/player/lottie_light';
import animationManifest from '@momentum-design/animations/dist/manifest';

import { Component } from '../../models';
import { ROLE } from '../../utils/roles';

import styles from './animation.styles';
import type { AnimationNames, LoopType } from './animation.types';
import { DEFAULTS } from './animation.constants';

/**
 * The `mdc-animation` component is a wrapper around the Lottie animation library.
 * It fetches the animation data dynamically based on the provided name and renders it.
 * This is a display only component that does not have any interactive functionality.
 * From accessibility perspective, (by default) it is a decorative image component.
 *
 * @tagname mdc-animation
 *
 * @event load - (React: onLoad) This event is dispatched when the animation is loaded
 * @event complete - (React: onComplete) This event is dispatched when all animation loops completed
 * @event error - (React: onError) This event is dispatched when animation loading failed
 */
class Animation extends Component {
  /**
   * Name of the animation (= filename)
   */
  @property({ type: String, reflect: true })
  name?: AnimationNames = DEFAULTS.NAME;

  /**
   * How many times to loop the animation
   * - "true" - infinite
   * - "false" - no loop
   * - number - number of times to loop
   */
  @property({ type: String, reflect: true })
  loop?: LoopType = DEFAULTS.LOOP;

  /**
   * Weather start the animation automatically
   */
  @property({ type: Boolean, reflect: true })
  autoplay?: boolean = DEFAULTS.AUTO_PLAY;

  /**
   * Aria-label attribute to be set for accessibility
   */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  /**
   * Aria-labelledby attribute to be set for accessibility
   */
  @property({ type: String, attribute: 'aria-labelledby' })
  ariaLabelledby: string | null = null;

  /**
   * Lottie animation instance
   */
  private lottieInstance?: AnimationItem;

  /**
   * Container for the animation
   */
  private containerRef: Ref<HTMLDivElement> = createRef();

  /**
   * Exposed API of the animation library (lottie)
   */
  get animation() {
    return this.lottieInstance;
  }

  private getLoopValue() {
    if (this.loop === 'true') return true;
    if (this.loop === 'false') return false;
    if (this.loop) return Number(this.loop);
    return true;
  }

  /**
   * Create new lotty instance for the loaded data
   */
  private onLoadSuccessHandler(animationData: any) {
    if (this.lottieInstance) {
      this.lottieInstance.removeEventListener('complete', this.onCompleteHandler);
      this.lottieInstance.destroy();
    }

    if (this.containerRef.value) {
      this.lottieInstance = lottie.loadAnimation({
        container: this.containerRef.value, // the dom element that will contain the animation
        renderer: 'svg',
        loop: this.getLoopValue(),
        autoplay: this.autoplay,
        animationData,
        name: this.name,
      });
      this.lottieInstance.addEventListener('complete', this.onCompleteHandler);
    }
    // Dispatch load event when animation ready to play
    this.dispatchEvent(new CustomEvent('load', { bubbles: true, cancelable: true, detail: { name: this.name } }));
  }

  /**
   * Error handler for animation loading
   */
  private onLoadFailHandler(error: Error) {
    const errorEvent = new CustomEvent('error', {
      bubbles: true,
      cancelable: true,
      detail: { error },
    });
    this.dispatchEvent(errorEvent);
  }

  /**
   * Import animation data dynamically
   */
  private getAnimationData() {
    if (this.name && animationManifest[this.name]) {
      // Make sure the path is point to a folder (and its sub-folders) that contains animation data only
      // otherwise bundlers (eg. webpack) will try to process everything in this folder including the types.d.ts
      const path = animationManifest[this.name].replace(/^\.\/lottie/, '');

      import(`@momentum-design/animations/dist/lottie${path}`)
        .then((result: any) => this.onLoadSuccessHandler(result.default))
        .catch((error: Error) => this.onLoadFailHandler(error));
    } else {
      this.onLoadFailHandler(new Error(`Invalid animation name: ${this.name}`));
    }
  }

  override updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    // fetch animation data when new animation needed or any animation parameter changed
    // note: we re-create the animation for parameter changes as well, because lottie
    //       does not API for changing them on the fly
    if (changedProperties.has('name') || changedProperties.has('loop') || changedProperties.has('autoplay')) {
      this.getAnimationData();
    }

    if (changedProperties.has('ariaLabel') || changedProperties.has('ariaLabelledby')) {
      this.role = this.ariaLabel || this.ariaLabelledby ? ROLE.IMG : null;
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();

    // Clean up the lottie instance when the component is removed from the DOM
    if (this.lottieInstance) {
      this.lottieInstance.removeEventListener('complete', this.onCompleteHandler);
      this.lottieInstance.destroy();
      this.lottieInstance = undefined;
    }
  }

  /**
   * Re-dispatch the complete event from the animation library
   *
   * This handler called with the animation instance instead of the component instance
   * so we need to bind it to the component instance. The arrow function just does that.
   */
  onCompleteHandler = () => {
    const event = new CustomEvent('complete', {
      detail: { name: this.name },
      bubbles: true,
    });
    this.dispatchEvent(event);
  };

  override render() {
    return html`<div aria-hidden="true" ${ref(this.containerRef)}></div>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Animation;
