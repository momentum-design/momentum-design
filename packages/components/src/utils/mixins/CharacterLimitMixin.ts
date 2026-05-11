import { LitElement, nothing, html } from 'lit';
import { property, state } from 'lit/decorators.js';

import type { Constructor } from './index.types';

export interface CharacterLimitHost {
  value: string;
  helpText?: string;
}

interface Events {
  onLimitExceededEvent: CustomEvent;
}

export type { Events };

export declare class CharacterLimitMixinInterface {
  maxCharacterLimit?: number;

  characterLimitAnnouncement?: string;

  protected characterLimitAriaLiveAnnouncer?: string;

  protected handleCharacterOverflowStateChange(): void;

  protected announceCharacterLimitWarning(): void;

  protected renderCharacterCounter(): typeof nothing | ReturnType<typeof html>;
}

/**
 * Mixin that provides character limit / counter functionality.
 *
 * This mixin is shared between `mdc-input` and `mdc-textarea` components.
 * It provides:
 * - `maxCharacterLimit` and `characterLimitAnnouncement` properties
 * - Character overflow state tracking and `limitexceeded` event dispatching
 * - Screen reader announcement logic for character limit warnings
 * - `renderCharacterCounter()` method for rendering the counter UI
 *
 * The consuming component must:
 * - Have a `value` property (string)
 * - Have a `helpText` property (string)
 * - Call `handleCharacterOverflowStateChange()` when `value` changes
 * - Call `announceCharacterLimitWarning()` when `helpText` changes or value is updated
 *
 * @param superClass - The base class to extend.
 */
export const CharacterLimitMixin = <T extends Constructor<LitElement & CharacterLimitHost>>(superClass: T) => {
  /**
   * @event limitexceeded - (React: onLimitExceeded) This event is dispatched once when the character limit
   * exceeds or restored.
   */
  class InnerMixinClass extends superClass {
    /**
     * The maximum character limit for the field for character counter.
     */
    @property({ type: Number, attribute: 'max-character-limit' }) maxCharacterLimit?: number;

    /**
     * Template string for the announcement that will be read by screen readers when the max character limit is set.
     * Consumers must use the placeholders `%{number-of-characters}` and `%{max-character-limit}` in the string,
     * which will be dynamically replaced with the actual values at runtime.
     * For example: `%{number-of-characters} out of %{max-character-limit} characters are typed.`
     * Example output: "93 out of 140 characters are typed."
     */
    @property({ type: String, attribute: 'character-limit-announcement' }) characterLimitAnnouncement?: string;

    /**
     * @internal
     */
    @state() characterLimitAriaLiveAnnouncer?: string;

    /**
     * @internal
     */
    private characterLimitExceedingFired: boolean = false;

    /**
     * Dispatches the character overflow state change event.
     * @internal
     */
    private dispatchCharacterOverflowStateChangeEvent() {
      this.dispatchEvent(
        new CustomEvent('limitexceeded', {
          detail: {
            currentCharacterCount: this.value.length,
            maxCharacterLimit: this.maxCharacterLimit,
            value: this.value,
          },
          bubbles: true,
          composed: true,
        }),
      );
    }

    /**
     * Handles the character overflow state change.
     * Dispatches the character overflow state change event if the character limit is exceeded or restored.
     */
    protected handleCharacterOverflowStateChange() {
      if (this.maxCharacterLimit) {
        if (this.value.length > this.maxCharacterLimit && !this.characterLimitExceedingFired) {
          this.dispatchCharacterOverflowStateChangeEvent();
          this.characterLimitExceedingFired = true;
        } else if (this.value.length <= this.maxCharacterLimit && this.characterLimitExceedingFired) {
          this.dispatchCharacterOverflowStateChangeEvent();
          this.characterLimitExceedingFired = false;
        }
      }
    }

    /**
     * Announces the character limit warning based on the current value length.
     * If the value length exceeds the max character limit, the help text is announced (if help text is present).
     * If the value length does not exceed the max character limit, then the character limit announcement is announced.
     */
    protected announceCharacterLimitWarning() {
      this.characterLimitAriaLiveAnnouncer = '';
      if (!this.maxCharacterLimit || this.value.length === 0) {
        return;
      }
      if (this.helpText && this.value.length > this.maxCharacterLimit) {
        this.updateComplete
          .then(() => {
            this.characterLimitAriaLiveAnnouncer = this.helpText;
          })
          .catch(() => {});
      } else if (this.characterLimitAnnouncement && this.value.length <= this.maxCharacterLimit) {
        this.characterLimitAriaLiveAnnouncer = this.characterLimitAnnouncement
          .replace('%{number-of-characters}', this.value.length.toString())
          .replace('%{max-character-limit}', this.maxCharacterLimit.toString());
      }
    }

    /**
     * Renders the character counter element.
     */
    protected renderCharacterCounter() {
      if (!this.maxCharacterLimit) {
        return nothing;
      }
      return html`
        <mdc-text part="character-counter" tagname="span" type="body-midsize-regular">
          ${this.value.length}/${this.maxCharacterLimit}
        </mdc-text>
      `;
    }
  }

  return InnerMixinClass as unknown as Constructor<CharacterLimitMixinInterface> & T;
};
