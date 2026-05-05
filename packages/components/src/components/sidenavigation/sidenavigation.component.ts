import { CSSResult, html, nothing, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

import { Component, Provider } from '../../models';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { TAG_NAME as NAVMENUITEM_TAGNAME } from '../navmenuitem/navmenuitem.constants';
import { TAG_NAME as MENUPOPOVER_TAGNAME } from '../menupopover/menupopover.constants';
import { DIRECTIONS, DIVIDER_VARIANT, DIVIDER_ORIENTATION } from '../divider/divider.constants';
import { ROLE } from '../../utils/roles';
import type NavMenuItem from '../navmenuitem';
import { KEYS } from '../../utils/keys';

import type { SideNavigationVariant } from './sidenavigation.types';
import { DEFAULTS, VARIANTS } from './sidenavigation.constants';
import SideNavigationContext from './sidenavigation.context';
import styles from './sidenavigation.styles';

/**
 * @tagname mdc-sidenavigation
 *
 * @dependency mdc-text
 * @dependency mdc-button
 * @dependency mdc-divider
 * @dependency mdc-menubar
 *
 * @event activechange - (React: onActiveChange) Dispatched when the active state of the navmenuitem changes.
 *
 * @slot scrollable-section - Slot for the scrollable content area of the side navigation.
 * @slot scrollable-menubar - Slot for the menubar inside the scrollable section.
 * @slot fixed-section - Slot for the fixed content area of the side navigation.
 * @slot fixed-menubar - Slot for the menubar inside the fixed section.
 * @slot brand-logo - Slot for the brand logo (e.g., icon or img).
 *
 * @csspart side-navigation-container - The main container wrapping the entire side navigation.
 * @csspart scrollable-section - The scrollable section of the side navigation.
 * @csspart scrollable-menubar - The menubar inside the scrollable section.
 * @csspart separator - The divider between the scrollable and fixed sections.
 * @csspart fixed-section - The fixed section of the side navigation.
 * @csspart fixed-menubar - The menubar inside the fixed section.
 * @csspart brand-logo-container - The container wrapping the brand logo and footer text.
 * @csspart footer-text - The footer text label in the fixed section.
 * @csspart vertical-divider - The vertical divider between the scrollable and fixed sections.
 * @csspart vertical-divider-button - The button inside the vertical divider used to toggle expand/collapse.
 *
 * @event toggle - (React: onToggle) Dispatched when the grabber button is clicked to expand/collapse the sidenavigation.
 * @event activechange - (React: onActiveChange) Dispatched when the active state of a nested navmenuitem changes.
 *
 * @cssproperty --mdc-sidenavigation-expanded-width - width of the sideNavigation when expanded
 * @cssproperty --mdc-sidenavigation-expanded-left-padding - padding for the left side of navmenuitems, when expanded
 * @cssproperty --mdc-sidenavigation-expanded-right-padding - padding for the right side of navmenuitems, when expanded
 * @cssproperty --mdc-sidenavigation-collapsed-width - width of the sideNavigation when collapsed
 * @cssproperty --mdc-sidenavigation-collapsed-left-padding - padding for the left side of navmenuitems, when collapsed
 * @cssproperty --mdc-sidenavigation-collapsed-right-padding - padding for the right side of navmenuitems, when collapsed
 * @cssproperty --mdc-sidenavigation-top-padding - padding for the top of the scrollable section - note: if setting to 0 focus ring might be cut off
 * @cssproperty --mdc-sidenavigation-bottom-padding - padding for the bottom of the scrollable section
 * @cssproperty --mdc-sidenavigation-vertical-divider-button-z-index - z-index of the vertical divider button
 */
class SideNavigation extends Provider<SideNavigationContext> {
  /**
   * Five variants of the sideNavigation
   * - **fixed-collapsed**: Shows icons without labels and has fixed width, 4.5rem.
   * - **fixed-expanded**: Shows icons with labels and has fixed width, 15rem.
   * - **flexible**: Toggles between collapsed/expanded states.
   * - **flexible-on-hover**: Similar to flexible, but the grabber button is only visible on hover or focus.
   * - **hidden**: Removes the sidenavigation from the DOM.
   * @default flexible
   */
  @property({ type: String, reflect: true })
  variant: SideNavigationVariant = DEFAULTS.VARIANT;

  /**
   * Displays footer text in the bottom section of the sidenavigation.
   *
   * Note: if footerText is not provided, the bottom brand logo section will not be rendered.
   * @default ''
   */
  @property({ type: String, reflect: true, attribute: 'footer-text' })
  footerText: string = '';

  /**
   * Determines whether the sideNavigation is expanded or not.
   *
   * NOTE: For `fixed-collapsed` and `fixed-expanded` variants, this property is hard set to `false` and `true` respectively.
   * For `flexible` and `flexible-on-hover` variants, this property can be toggled / controlled from parent.
   *
   * @default true
   */
  @property({ type: Boolean, reflect: true, attribute: 'expanded' })
  expanded?: boolean;

  /**
   * Provides an accessible label for the grabber button.
   * This value is used to set the `aria-label` attribute for the button.
   *
   * @default ''
   */
  @property({ type: String, reflect: true, attribute: 'grabber-btn-aria-label' })
  grabberBtnAriaLabel?: string;

  /**
   * Hides the divider between the scrollable and fixed sections when set to true.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'hide-fixed-section-divider' })
  hideFixedSectionDivider: boolean = false;

  /**
   * When `is-dropdown` is enabled, a parent `mdc-navmenuitem` can render its submenu inside a sibling
   * `div[data-trigger="<navmenuitem-id>"]` while the sidenavigation is expanded. In collapsed mode,
   * dropdown submenus are never rendered, even when `is-dropdown` is enabled.
   */
  @property({ type: Boolean, reflect: true, attribute: 'is-dropdown' })
  isDropdown: boolean = false;

  constructor() {
    super({
      context: SideNavigationContext.context,
      initialValue: new SideNavigationContext(DEFAULTS.VARIANT, true),
    });

    this.addEventListener('activechange', this.handleNestedNavMenuItemActiveChange.bind(this) as EventListener);
    this.addEventListener('keydown', this.handleDropdownKeyDown.bind(this));
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = ROLE.NAVIGATION;
    this.setupFlexibleOnHoverListeners();
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeFlexibleOnHoverListeners();
  }

  private isHovered: boolean = false;

  private isFocused: boolean = false;

  /** @internal */
  private handleMouseEnter = () => {
    this.isHovered = true;
    this.showGrabberButton();
  };

  /** @internal */
  private handleMouseLeave = () => {
    this.isHovered = false;
    if (!this.isFocused) {
      this.hideGrabberButton();
    }
  };

  /** @internal */
  private handleFocusIn = (e: FocusEvent): void => {
    if (!this.isFocused) {
      if (this.navMenuItems.find(item => item === e.target)) {
        // if target of focusin event is navMenuItem and it has not a visible focus, do not proceed further.
        // this is to avoid showing grabber button on click events
        if (!(e.target as HTMLElement).matches(':focus-visible')) {
          return;
        }
      }

      this.isFocused = true;
      this.showGrabberButton();
    }
  };

  /** @internal */
  private handleFocusOut = (e: FocusEvent): void => {
    if (!this.contains(e.relatedTarget as Node)) {
      this.isFocused = false;
      if (!this.isHovered) {
        this.hideGrabberButton();
      }
    }
  };

  /** @internal */
  private showGrabberButton() {
    this.toggleAttribute('data-grabber-visible', true);
  }

  /** @internal */
  private hideGrabberButton() {
    this.toggleAttribute('data-grabber-visible', false);
  }

  /**
   * Sets up event listeners for flexible-on-hover variant.
   * Only adds listeners if the variant is flexible-on-hover.
   * @internal
   */
  private setupFlexibleOnHoverListeners = (): void => {
    if (this.variant === VARIANTS.FLEXIBLE_ON_HOVER) {
      this.addEventListener('mouseenter', this.handleMouseEnter);
      this.addEventListener('mouseleave', this.handleMouseLeave);
      this.addEventListener('focusin', this.handleFocusIn);
      this.addEventListener('focusout', this.handleFocusOut);
    }
  };

  /**
   * Removes event listeners for flexible-on-hover variant.
   * Safe to call regardless of current variant.
   * @internal
   */
  private removeFlexibleOnHoverListeners = (): void => {
    this.removeEventListener('mouseenter', this.handleMouseEnter);
    this.removeEventListener('mouseleave', this.handleMouseLeave);
    this.removeEventListener('focusin', this.handleFocusIn);
    this.removeEventListener('focusout', this.handleFocusOut);
  };

  public static get Context() {
    return SideNavigationContext.context;
  }

  protected override updated(changedProperties: Map<string, any>): void {
    super.updated(changedProperties);

    if (changedProperties.has('variant')) {
      this.setVariant(this.variant);

      // Re-setup listeners when variant changes
      this.removeFlexibleOnHoverListeners();
      this.setupFlexibleOnHoverListeners();

      // hard set expanded state for fixed variants:
      switch (this.variant) {
        case VARIANTS.FIXED_EXPANDED:
          this.expanded = true;
          break;
        case VARIANTS.FIXED_COLLAPSED:
          this.expanded = false;
          break;
        default:
      }
    }

    if (changedProperties.has('variant') || changedProperties.has('expanded') || changedProperties.has('isDropdown')) {
      this.updateContext();
    }

    // When collapsing or when isDropdown is turned off, close all dropdown containers
    if (changedProperties.has('expanded') || changedProperties.has('isDropdown')) {
      if (!this.expanded || !this.isDropdown) {
        this.closeAllDropdowns();
      }

      // Handle dropdown-to-flyout conversion
      if (this.isDropdown) {
        if (!this.expanded) {
          this.convertDropdownsToFlyouts();
        } else {
          this.convertFlyoutsToDropdowns();
        }
      } else {
        // If isDropdown is turned off, clean up any dynamic menupopover elements
        this.convertFlyoutsToDropdowns();
      }
    }
  }

  protected override firstUpdated(changedProperties: PropertyValues): void {
    super.firstUpdated(changedProperties);

    if (
      (this.variant === VARIANTS.FLEXIBLE || this.variant === VARIANTS.FLEXIBLE_ON_HOVER) &&
      this.expanded === undefined
    ) {
      this.expanded = true;
      this.updateContext();
    }

    // Hide all dropdown containers by default
    this.hideAllDropdownContainers();

    // If initially collapsed with isDropdown, convert to flyouts
    if (this.isDropdown && !this.expanded) {
      this.convertDropdownsToFlyouts();
    }
  }

  /**
   * Update all observing components of this
   * provider to update the values
   *
   * Is called on every re-render, see Provider class
   */
  protected updateContext(): void {
    if (
      this.context.value.variant !== this.variant ||
      this.context.value.expanded !== this.expanded ||
      this.context.value.isDropdown !== this.isDropdown
    ) {
      this.context.value.variant = this.variant;
      this.context.value.expanded = this.expanded;
      this.context.value.isDropdown = this.isDropdown;
      this.context.updateObservers();
    }
  }

  /**
   * Handle the navMenuItem active change event fired from the nested navMenuItem.
   * @internal
   * @param event - Custom Event fired from the nested navMenuItem.
   */
  private handleNestedNavMenuItemActiveChange = (event: CustomEvent<any>): void => {
    if (this.context?.value) {
      const newNavMenuItem = this.findNav(this.navMenuItems, event.detail.navId);
      this.context.value.setCurrentActiveNavMenuItem(newNavMenuItem);
    }
  };

  /**
   * Matches new navMenuItem with navId.
   * @param NavMenuItem - The new active navMenuItem.
   *
   * @internal
   */
  private findNav = (navs: NavMenuItem[], navId: string): NavMenuItem | undefined =>
    navs.find(nav => nav.navId === navId);

  /**
   * Returns all nested, non-disabled mdc-navmenuitem elements inside this component.
   * @internal
   */
  private get navMenuItems(): NavMenuItem[] {
    return Array.from(this.querySelectorAll(`${NAVMENUITEM_TAGNAME}:not([disabled])`));
  }

  /**
   * Closes all open dropdown containers and resets their parent navmenuitems.
   * @internal
   */
  private closeAllDropdowns(): void {
    this.navMenuItems.filter(item => this.context.value.isDropDownParent(item)).forEach(item => item.closeDropdown());

    // Also hide all dropdown containers
    this.hideAllDropdownContainers();
  }

  /**
   * Hides all div[data-trigger] elements within the sidenavigation.
   * @internal
   */
  private hideAllDropdownContainers(): void {
    const containers = this.querySelectorAll<HTMLElement>('div[data-trigger]');
    containers.forEach(container => {
      Object.assign(container.style, {
        display: 'none',
        flexDirection: 'column',
        gap: '0.25rem',
      });
    });
  }

  /**
   * When collapsed with isDropdown, converts div[data-trigger] children into dynamically
   * created menupopover elements for flyout behavior.
   * @internal
   */
  private convertDropdownsToFlyouts(): void {
    const containers = this.querySelectorAll<HTMLElement>('div[data-trigger]');
    containers.forEach(container => {
      const triggerId = container.getAttribute('data-trigger');
      if (!triggerId) return;

      // Check if a dynamic menupopover already exists for this trigger
      const existingPopover = container.parentElement?.querySelector(
        `${MENUPOPOVER_TAGNAME}[triggerid="${CSS.escape(triggerId)}"][data-dynamic-popover]`,
      );
      if (existingPopover) return;

      // Create menupopover
      const popover = document.createElement(MENUPOPOVER_TAGNAME);
      popover.setAttribute('triggerid', triggerId);
      popover.setAttribute('data-dynamic-popover', '');
      popover.setAttribute('placement', 'right-start');

      // Move children from div to menupopover
      while (container.firstChild) {
        popover.appendChild(container.firstChild);
      }

      // Insert menupopover after the div
      container.after(popover);

      // Hide the empty div
      Object.assign(container.style, { display: 'none' });
    });
  }

  /**
   * When expanding with isDropdown, converts dynamically created menupopover elements
   * back to div[data-trigger] containers.
   * @internal
   */
  private convertFlyoutsToDropdowns(): void {
    const dynamicPopovers = this.querySelectorAll<HTMLElement>(`${MENUPOPOVER_TAGNAME}[data-dynamic-popover]`);
    dynamicPopovers.forEach(popover => {
      const triggerId = popover.getAttribute('triggerid');
      if (!triggerId) return;

      // Find the corresponding div[data-trigger]
      const container = this.querySelector<HTMLElement>(`div[data-trigger="${CSS.escape(triggerId)}"]`);
      if (!container) return;

      // Move children back from menupopover to div
      while (popover.firstChild) {
        container.appendChild(popover.firstChild);
      }

      // Remove the dynamic menupopover
      popover.remove();
    });
  }

  /**
   * Handles Escape key inside dropdown containers to close the dropdown
   * and return focus to the parent trigger navmenuitem.
   * @internal
   */
  private handleDropdownKeyDown(event: KeyboardEvent): void {
    if (!this.isDropdown || !this.expanded) return;
    const target = event.target as HTMLElement;
    const isNavMenuItem = target.tagName.toLowerCase() === NAVMENUITEM_TAGNAME;
    if (!isNavMenuItem) return;

    const targetItem = target as NavMenuItem;

    if (event.key === KEYS.ESCAPE) {
      const dropdownContainer = target.closest('div[data-trigger]') as HTMLElement | null;
      if (!dropdownContainer) return;

      const triggerId = dropdownContainer.getAttribute('data-trigger');
      if (!triggerId) return;

      const triggerItem = this.querySelector(`${NAVMENUITEM_TAGNAME}#${CSS.escape(triggerId)}`) as NavMenuItem | null;
      if (triggerItem) {
        triggerItem.closeDropdown();
        triggerItem.focus();
        event.stopPropagation();
      }
      return;
    }

    const context = this.context.value;
    const isInsideDropdown = targetItem.hasAttribute('in-dropdown-container');
    const isOpen = targetItem.getAttribute('aria-expanded') === 'true';

    if (isInsideDropdown) {
      const dropdownContainer = target.closest('div[data-trigger]') as HTMLElement | null;
      if (!dropdownContainer) return;

      const children = Array.from(
        dropdownContainer.querySelectorAll<NavMenuItem>(`${NAVMENUITEM_TAGNAME}:not([disabled])`),
      );
      const currentIndex = children.indexOf(targetItem);
      if (currentIndex === -1) return;

      switch (event.key) {
        case KEYS.ARROW_DOWN:
          // Arrow Down: move focus to the next child navmenuitem in the dropdown container, if exists. If on the last child, move focus back to the first child.
          event.preventDefault();
          if (currentIndex + 1 < children.length) {
            children[currentIndex + 1].focus();
          } else {
            children[0].focus();
          }
          break;
        case KEYS.ARROW_UP:
          // Arrow Up: move focus to the previous child navmenuitem in the dropdown container, if exists. If on the first child, move focus to the last child.
          event.preventDefault();
          if (currentIndex > 0) {
            children[currentIndex - 1].focus();
          } else {
            children[children.length - 1].focus();
          }
          break;
        case KEYS.ARROW_RIGHT: {
          // Arrow Right: move focus to the next parent-level navmenuitem in the main list (if exists). If this parent-level navmenuitem has a dropdown, then open the dropdown and move focus to the first child navmenuitem in the dropdown container.
          const outerItems = this.navMenuItems.filter(item => !item.hasAttribute('in-dropdown-container'));
          const triggerId = dropdownContainer.getAttribute('data-trigger');
          const triggerIndex = outerItems.findIndex(item => item.id === triggerId);
          if (triggerIndex !== -1 && triggerIndex + 1 < outerItems.length) {
            const nextItem = outerItems[triggerIndex + 1];
            nextItem.focus();
            if (context.isDropDownParent(nextItem)) {
              nextItem.openDropdown();
              const nextDropdownContainer = nextItem.parentElement?.querySelector(
                `div[data-trigger="${nextItem.id}"]`,
              ) as HTMLElement | null;
              if (nextDropdownContainer) {
                const firstChild = nextDropdownContainer.querySelector(
                  `${NAVMENUITEM_TAGNAME}:not([disabled])`,
                ) as NavMenuItem | null;
                if (firstChild) {
                  firstChild.focus();
                }
              }
            }
          }
          break;
        }
        case KEYS.ARROW_LEFT: {
          // Arrow Left: move focus to the previous parent-level navmenuitem in the main list (if exists). If this parent-level navmenuitem has a dropdown, then open the dropdown and move focus to the first child navmenuitem in the dropdown container.
          const outerItems = this.navMenuItems.filter(item => !item.hasAttribute('in-dropdown-container'));
          const triggerId = dropdownContainer.getAttribute('data-trigger');
          const triggerIndex = outerItems.findIndex(item => item.id === triggerId);
          if (triggerIndex > 0) {
            const previousItem = outerItems[triggerIndex - 1];
            previousItem.focus();
            if (context.isDropDownParent(previousItem)) {
              previousItem.openDropdown();
              const previousDropdownContainer = previousItem.parentElement?.querySelector(
                `div[data-trigger="${previousItem.id}"]`,
              ) as HTMLElement | null;
              if (previousDropdownContainer) {
                const firstChild = previousDropdownContainer.querySelector(
                  `${NAVMENUITEM_TAGNAME}:not([disabled])`,
                ) as NavMenuItem | null;
                if (firstChild) {
                  firstChild.focus();
                }
              }
            }
          }
          break;
        }
        default:
          event.preventDefault();
      }
    }

    // if the dropdown is closed and ArrowRight is pressed on the parent navmenuitem, open the dropdown and move focus to the first child navmenuitem in the dropdown container
    if (event.key === KEYS.ARROW_RIGHT) {
      const dropdownContainer = targetItem.parentElement?.querySelector(
        `div[data-trigger="${targetItem.id}"]`,
      ) as HTMLElement | null;
      if (dropdownContainer) {
        if (!isOpen) {
          targetItem.openDropdown();
        }
        const firstChild = dropdownContainer.querySelector(
          `${NAVMENUITEM_TAGNAME}:not([disabled])`,
        ) as NavMenuItem | null;
        if (firstChild) {
          firstChild.focus();
          event.preventDefault();
        }
      }
    }
  }

  /**
   * Sets the variant attribute for the sideNavigation component.
   * If the provided variant is not included in the variant,
   * it defaults to the value specified in DEFAULTS.VARIANT.
   *
   * @param variant - The variant to set.
   *
   * @internal
   */
  private setVariant(variant: SideNavigationVariant) {
    this.setAttribute('variant', Object.values(VARIANTS).includes(variant) ? variant : DEFAULTS.VARIANT);
  }

  /**
   * Toggles navigation state for the flexible variant.
   *
   * @internal
   */
  private toggleSideNavigation(e: PointerEvent): void {
    this.expanded = !this.expanded;
    if (this.expanded === false && this.variant === VARIANTS.FLEXIBLE_ON_HOVER && e.pointerType === 'mouse') {
      // If collapsing via mouse click when in flexible-on-hover mode, reset hover/focus states
      this.isHovered = false;
      this.isFocused = false;
      this.hideGrabberButton();
    }
    this.dispatchEvent(new CustomEvent('toggle', { detail: { expanded: this.expanded } }));
  }

  private preventScrollOnSpace(event: KeyboardEvent): void {
    // Prevent default space key behavior to avoid scrolling the page
    if (event.key === KEYS.SPACE) {
      event.preventDefault();
    }
  }

  public override render() {
    if (this.variant === VARIANTS.HIDDEN) {
      return html``;
    }

    return html`
      <div part="side-navigation-container" id="side-nav-container">
        <div part="scrollable-section" tabindex="-1" @keydown=${this.preventScrollOnSpace}>
          <slot name="scrollable-section">
            <mdc-menubar part="scrollable-menubar">
              <slot name="scrollable-menubar"></slot>
            </mdc-menubar>
          </slot>
        </div>
        ${!this.hideFixedSectionDivider
          ? html`<mdc-divider variant="gradient" part="separator"></mdc-divider>`
          : nothing}
        <div part="fixed-section">
          <slot name="fixed-section">
            <mdc-menubar part="fixed-menubar">
              <slot name="fixed-menubar"></slot>
            </mdc-menubar>
          </slot>
          ${this.footerText
            ? html`
                <div part="brand-logo-container">
                  <slot name="brand-logo"></slot>
                  ${this.expanded
                    ? html` <mdc-text
                        type=${TYPE.BODY_MIDSIZE_MEDIUM}
                        tagname=${VALID_TEXT_TAGS.SPAN}
                        part="footer-text"
                        >${this.footerText}</mdc-text
                      >`
                    : nothing}
                </div>
              `
            : nothing}
        </div>
      </div>
      ${this.variant === VARIANTS.FLEXIBLE || this.variant === VARIANTS.FLEXIBLE_ON_HOVER
        ? html`<mdc-divider
            part="vertical-divider"
            orientation=${DIVIDER_ORIENTATION.VERTICAL}
            variant=${DIVIDER_VARIANT.GRADIENT}
            arrow-direction=${this.expanded ? DIRECTIONS.NEGATIVE : DIRECTIONS.POSITIVE}
            button-position=${DIRECTIONS.POSITIVE}
          >
            <mdc-button
              part="vertical-divider-button"
              aria-label=${this.grabberBtnAriaLabel ?? ''}
              @click=${this.toggleSideNavigation}
              aria-expanded="${!!this.expanded}"
              aria-controls="side-nav-container"
            ></mdc-button>
          </mdc-divider>`
        : nothing}
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default SideNavigation;
