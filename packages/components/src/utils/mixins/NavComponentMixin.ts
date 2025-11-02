import { property } from 'lit/decorators.js';
import { html, nothing, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { v4 } from 'uuid';

import type { Component } from '../../models';
import type { BadgeType } from '../../components/navmenuitem/navmenuitem.types';
import { ALLOWED_BADGE_TYPES, DEFAULTS } from '../../components/navmenuitem/navmenuitem.constants';
import type { PopoverPlacement } from '../../components/popover/popover.types';
import type { IconNames } from '../../components/icon/icon.types';
import { getIconNameWithoutStyle } from '../../components/button/button.utils';
import { TAG_NAME as TOOLTIP_TAG_NAME } from '../../components/tooltip/tooltip.constants';
import { TYPE, VALID_TEXT_TAGS } from '../../components/text/text.constants';
import type { TextType } from '../../components/text/text.types';

import type { Constructor } from './index.types';

export declare class NavComponentMixinInterface {
  label?: string;

  iconName?: IconNames;

  badgeType?: BadgeType;

  counter?: number;

  maxCounter: number;

  showLabel?: boolean;

  ariaLabel: string | null;

  tooltipText?: string;

  tooltipPlacement: PopoverPlacement;

  tooltipBoundaryPadding?: number;

  protected addTooltip(hostTagName: string, tooltipText: string): void;

  protected removeTooltip(): void;

  protected modifyIconName(active: boolean | undefined): void;

  protected renderTextLabel(label: string | undefined, type?: TextType): TemplateResult;

  protected renderBadge(showLabel: boolean | undefined): TemplateResult | typeof nothing;
}

export const NavComponentMixin = <T extends Constructor<Component>>(superClass: T) => {
  class InnerMixinClass extends superClass {
    /**
     * The label of the nav item.
     */
    @property({ type: String, reflect: true })
    label?: string;

    /**
     * Name of the leading icon (= filename).
     *
     * If no `icon-name` is provided, no icon will be rendered.
     */
    @property({ type: String, attribute: 'icon-name', reflect: true })
    iconName?: IconNames;

    /**
     * Type of the badge
     * Can be `dot` (notification) or `counter`.
     */
    @property({ type: String, reflect: true, attribute: 'badge-type' })
    badgeType?: BadgeType;

    /**
     * Counter is the number which can be provided in the badge.
     */
    @property({ type: Number, reflect: true })
    counter?: number;

    /**
     * The maximum number can be set up to 999, anything above that will be rendered as _999+_.
     * The max counter can be `9`, `99` or `999`.
     * @default 99
     */
    @property({ type: Number, attribute: 'max-counter', reflect: true })
    maxCounter: number = DEFAULTS.MAX_COUNTER;

    /**
     * Determines whether the nav item is expanded or not.
     *
     * If used in SideNavigation, this property is automatically managed by the SideNavigation component.
     * @default undefined
     */
    @property({ type: Boolean, reflect: true, attribute: 'show-label' })
    showLabel?: boolean;

    /**
     * Aria-label attribute to be set for accessibility
     */
    @property({ type: String, attribute: 'aria-label' })
    override ariaLabel: string | null = null;

    /**
     * The tooltip text is displayed on hover of the nav item.
     * Will only be shown when the `show-label` property is false
     * (i.e., when the nav item is collapsed).
     */
    @property({ type: String, reflect: true, attribute: 'tooltip-text' })
    tooltipText?: string;

    /**
     * The placement of the tooltip relative to the nav item.
     * @default 'right'
     */
    @property({ type: String, reflect: true, attribute: 'tooltip-placement' })
    tooltipPlacement: PopoverPlacement = 'right';

    /**
     * The boundary padding for the tooltip.
     * This defines the minimum distance in pixels between the tooltip and the edges of the viewport.
     * @default 0
     */
    @property({ type: Number, reflect: true, attribute: 'tooltip-boundary-padding' })
    tooltipBoundaryPadding?: number;

    /**
     * @internal
     */
    private prevIconName?: string;

    /**
     * @internal
     */
    protected addTooltip(hostTagName: string, tooltipText: string): void {
      if (!this.id) {
        this.id = `mdc-${hostTagName}-${v4()}`;
      }

      this.removeTooltip();

      const tooltip = document.createElement(TOOLTIP_TAG_NAME);
      tooltip.id = `mdc-${hostTagName}-tooltip-${v4()}`;
      tooltip.textContent = tooltipText;
      tooltip.setAttribute('triggerid', this.id);
      tooltip.setAttribute('show-arrow', '');
      tooltip.setAttribute('placement', this.tooltipPlacement);
      tooltip.setAttribute('boundary-padding', this.tooltipBoundaryPadding?.toString() || '0');

      // Set the slot attribute if the parent element has a slot.
      if (this.hasAttribute('slot')) {
        tooltip.setAttribute('slot', this.getAttribute('slot') || '');
      }

      // Attach the tooltip programmatically after the nearest parent element.
      this.after(tooltip);
    }

    /**
     * @internal
     */
    protected removeTooltip() {
      // Remove any existing tooltip.
      const existingTooltip = document.querySelector(`${TOOLTIP_TAG_NAME}[triggerid="${this.id}"]`);
      if (existingTooltip) {
        existingTooltip.remove();
      }
    }

    /**
     * Modifies the icon name based on the active state.
     * If the nav item is active, the icon name is suffixed with '-filled'.
     * If the nav item is inactive, the icon name is restored to its original value.
     * If '-filled' icon is not available, the icon name remains unchanged.
     * @internal
     * @param active - The active state.
     */
    protected modifyIconName(active: boolean | undefined): void {
      if (!this.iconName) return;

      const isFilled = this.iconName.endsWith('-filled');
      const baseIcon = getIconNameWithoutStyle(this.iconName);

      if (active) {
        if (!isFilled) {
          this.prevIconName = this.iconName;
          this.iconName = `${baseIcon}-filled` as IconNames;
        }
      } else if (this.prevIconName) {
        this.iconName = this.prevIconName as IconNames;
      }
    }

    /**
     * @internal
     */
    protected renderTextLabel(label: string | undefined, type: TextType = TYPE.BODY_MIDSIZE_MEDIUM): TemplateResult {
      return html` <mdc-text type=${type} tagname=${VALID_TEXT_TAGS.SPAN} part="text-container"> ${label} </mdc-text> `;
    }

    /**
     * @internal
     */
    protected renderBadge(showLabel: boolean | undefined): TemplateResult | typeof nothing {
      const isValidBadgeType = Object.values(ALLOWED_BADGE_TYPES).includes(this.badgeType as BadgeType);
      if (!isValidBadgeType) {
        return nothing;
      }

      return html`
        <mdc-badge
          part="${showLabel ? '' : 'badge'}"
          type="${ifDefined(this.badgeType)}"
          counter="${ifDefined(this.counter)}"
          max-counter="${this.maxCounter}"
        >
        </mdc-badge>
      `;
    }
  }
  // Cast return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as unknown as Constructor<NavComponentMixinInterface> & T;
};
