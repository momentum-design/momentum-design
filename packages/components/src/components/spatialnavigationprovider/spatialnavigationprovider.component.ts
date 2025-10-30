import { property } from 'lit/decorators.js';

import { Provider } from '../../models';
import { capitalize } from '../../utils/string';
import { findFocusable, getDomActiveElement } from '../../utils/dom';
import { FocusTrapStack } from '../../utils/mixins/focus/FocusTrapStack';

import SpatialNavigationProviderContext from './spatialnavigationprovider.context';
import {
  Direction,
  SpatialNavigationContextValue,
  SpatialNavigationKeyMapping,
} from './spatialnavigationprovider.types';
import { DEFAULTS } from './spatialnavigationprovider.constants';
import { orderElementsByDistance } from './spatialnavigationprovider.utils';

/**
 * This component manages the spatial navigation state and
 * provides the necessary context to the rest of the components in the library.
 * It should be placed at the root of the application.
 *
 * [Spatial navigation](https://en.wikipedia.org/wiki/Spatial_navigation) is a way to navigate through focusable
 * elements, but instead of using the tab key to move forward and shift + tab to move backward,
 * it uses the arrow keys (up, down, left, right) to move in the respective direction.
 *
 * ## Calculate next element to focus
 *
 * ### Manually specify the next element
 *
 * Spatial navigation automatic behavior can be overwritten with the following data attributes on the focusable element.
 *
 * | Attribute                                 | Value                                    | Default | Description                                                                         |
 * |-------------------------------------------|------------------------------------------|---------|-------------------------------------------------------------------------------------|
 * | data-spatial-left                         | selector string                          | N/A     | Next focused item when user presses left                                            |
 * | data-spatial-up                           | selector string                          | N/A     | Next focused item when user presses up                                              |
 * | data-spatial-right                        | selector string                          | N/A     | Next focused item when user presses right                                           |
 * | data-spatial-down                         | selector string                          | N/A     | Next focused item when user presses down                                            |
 * | data-spatial-nested-focusable-direction 	 | 'none', 'horizontal', 'vertical', 'both' | 'none'  | Overwrite the edge distance calculation on the specified direction                  |
 * | data-spatial-go-back                      | N/A	                                    | N/A     | Spatial navigation trigger click on the first focusable element with this attribute |
 *
 * ### Element internal navigation
 *
 * Complex component such as List, Combobox, Tree, etc. has its own keyboard based navigation.
 * To avoid interference between the component internal navigation and spatial navigation, these components should
 * handle the keydown events and call event.preventDefault() when the navigation is handled internally.
 *
 * For example List component should call event.preventDefault() when up/down arrow keys are used to navigate except
 * when the first/last item is reached and the user tries to go further in the same direction (and no loop back).
 * In this case the event should not be stopped so that SpatialNavigationProvider can handle the focus change.
 *
 * ### Automatic
 *
 * The algorithm do the following steps:
 *
 * - Collect all focusable elements on the page
 * - Calculate distance between the found elements and the focused element
 *   it use [W3 find the shortest distance](https://www.w3.org/TR/css-nav-1/#find-the-shortest-distance) algorithm
 * - Sort the elements by edge distance and distance
 * - Pick the closest and call focus() on it
 *
 * Edge distance calculation use the closest edges in the specified direction (left, up, right, down),
 * but focusable elements can overwrite this behavior with the `data-spatial-nested-focusable-direction` attribute.
 * This overwrite is necessary when the the focusable elements contains other focusables, for example List and Tree nodes.
 *
 * ## Limitations
 *
 * - Content scrolling is not supported at the moment, for example:
 *    - When the focused element (eg.: list item) is bigger then the viewport
 *    - the element is a scrollable content without interactive items
 *
 * @event navback - (React: onNavigationBack) This event is dispatched a back navigation triggered by the user.
 *                         The event's detail contains the goBackElement if any. It is cancelable to prevent click
 *                         action on the goBackElement.
 * @event navfocusnext - (React: onNavFocusNext) This event is dispatched before the focus is changing to the next element.
 *                    It can be canceled to prevent the focus change.
 *
 * @tagname mdc-spatialnavigationprovider
 */
class SpatialNavigationProvider extends Provider<SpatialNavigationContextValue> {
  @property({ attribute: false })
  navigationKeyMapping: SpatialNavigationKeyMapping = DEFAULTS.SPATIAL_NAVIGATION_KEY_MAPPING;

  /** Root element */
  private root: HTMLElement = this;

  /** Currently focused element
   * Use WeakRef to avoid memory leaks
   * */
  private activeElement: undefined | WeakRef<HTMLElement>;

  /**
   * Observer to track the active element changes.
   */
  private activeElementObserver!: MutationObserver;

  get validKeys() {
    return [
      this.navigationKeyMapping.up,
      this.navigationKeyMapping.down,
      this.navigationKeyMapping.left,
      this.navigationKeyMapping.right,
      this.navigationKeyMapping.enter,
      this.navigationKeyMapping.back,
    ];
  }

  constructor() {
    // initialize the context by running the Provider constructor:
    super({
      context: SpatialNavigationProviderContext,
    });
    this.activeElementObserver = new MutationObserver(this.activeElementObserverCallback);
  }

  override connectedCallback() {
    super.connectedCallback();

    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('focus', this.handleFocus);

    this.initActiveElement();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();

    this.activeElement = undefined;
    this.activeElementObserver.disconnect();

    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('focus', this.handleFocus);
  }

  /**
   * Context object of the ControlTypeProvider, to be consumed by child components
   */
  public static get Context() {
    return SpatialNavigationProviderContext;
  }

  protected override updateContext(): void {
    if (this.context.value !== this.navigationKeyMapping) {
      this.context.value = {
        ...this.navigationKeyMapping,
        directionKeys: [
          this.navigationKeyMapping.up,
          this.navigationKeyMapping.down,
          this.navigationKeyMapping.left,
          this.navigationKeyMapping.right,
        ],
      };

      this.context.updateObservers();
    }
  }

  /**
   * Mutation Observer callback
   */
  private activeElementObserverCallback: MutationCallback = (): void => {
    const currentActiveElement = this.getActiveElement();
    if (!currentActiveElement || !currentActiveElement.isConnected) {
      this.initActiveElement();
    }
  };

  /**
   * Initialize the spatial navigation.
   */
  initActiveElement(): void {
    const elements = findFocusable(this.root);
    this.findActiveElement(elements);
  }

  /**
   * Update the list of the focusable elements in the app.
   */
  private findActiveElement(elements: HTMLElement[]): void {
    const currentActiveElement = this.getActiveElement();
    if (!currentActiveElement || !elements.includes(currentActiveElement)) {
      const nextActiveElement = elements[0];
      if (nextActiveElement) {
        this.setActiveElementAndFocus(nextActiveElement);
      }
    }
  }

  private focusableElements(): HTMLElement[] {
    if (FocusTrapStack.getActiveTrap()) {
      return findFocusable(FocusTrapStack.getActiveTrap());
    }

    return findFocusable(this.root);
  }

  /**
   * Focus the next element in the given direction.
   *
   * @param direction - User pressed arrow key.
   * @returns true when focus handled by the provider, false otherwise
   *
   */
  focusNext(direction: Direction): boolean {
    const elements = this.focusableElements();

    // Do nothing when there is no focusable element
    if (elements.length === 0) {
      return false;
    }

    let currentActiveElement = this.getActiveElement();

    // When the active element in the DOM is not in our focusable elements list,
    // reset it to the first focusable element
    if (!currentActiveElement || !elements.includes(currentActiveElement)) {
      [currentActiveElement] = elements;
      this.setActiveElement(currentActiveElement);
    }

    // If the current active element is not focused in the DOM, focus it
    if (currentActiveElement !== getDomActiveElement()) {
      currentActiveElement.focus();
      return true;
    }

    // Check if the current active element has instruction to find the next focusable
    const nextElementSelector = currentActiveElement.dataset[`spatial${capitalize(direction)}`];
    if (nextElementSelector) {
      const nextElement = this.root.querySelector<HTMLElement>(nextElementSelector);
      if (nextElement) {
        this.setActiveElementAndFocus(nextElement);
        return true;
      }
    }

    // Find the closest element in the given direction
    const results = orderElementsByDistance(currentActiveElement, elements, direction, DEFAULTS.WEIGHTS);
    const nextActiveElement = results[0]?.candidate;

    if (nextActiveElement) {
      const focusEvent = new CustomEvent('navfocusnext', {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail: {
          direction,
          nextActiveElement,
        },
      });
      dispatchEvent(focusEvent);
      if (!focusEvent.defaultPrevented) {
        this.setActiveElementAndFocus(nextActiveElement);
        return true;
      }
    }
    return false;
  }

  emitGoBackEvent(goBackElement: undefined | HTMLElement): boolean {
    const goBackEvent = new CustomEvent('navback', {
      detail: {
        goBackElement,
      },
      bubbles: true,
      cancelable: true,
      composed: true,
    });
    this.dispatchEvent(goBackEvent);

    return goBackEvent.defaultPrevented;
  }

  /**
   * Set the active element.
   *
   * Also connect star tracking the active element.
   * @param element -
   */
  setActiveElement(element: HTMLElement): void {
    if (element === this.activeElement?.deref()) return;

    this.activeElementObserver.disconnect();
    if (element) {
      this.activeElement = new WeakRef(element);
      if (element.parentNode) {
        this.activeElementObserver.observe(element.parentNode, { childList: true });
      }
    } else {
      this.activeElement = undefined;
    }
  }

  /**
   * Set the active element and call .focus() on it
   * @param element -
   */
  setActiveElementAndFocus(element: HTMLElement): void {
    this.setActiveElement(element);
    // Focus the element asynchronously to make sure all calculations are done before focusing
    queueMicrotask(() => element.focus());
  }

  /**
   * Get active (focused) element
   */
  getActiveElement(): HTMLElement | undefined {
    return this.activeElement?.deref();
  }

  handleKeyDown = (evt: KeyboardEvent) => {
    if (
      evt.defaultPrevented ||
      evt.shiftKey ||
      evt.ctrlKey ||
      evt.altKey ||
      evt.metaKey ||
      !this.validKeys.includes(evt.key)
    ) {
      return;
    }

    let keyEventHandled = false;

    switch (evt.key) {
      case this.navigationKeyMapping.up:
        keyEventHandled = this.focusNext('up');
        break;
      case this.navigationKeyMapping.down:
        keyEventHandled = this.focusNext('down');
        break;
      case this.navigationKeyMapping.left:
        keyEventHandled = this.focusNext('left');
        break;
      case this.navigationKeyMapping.right:
        keyEventHandled = this.focusNext('right');
        break;
      case this.navigationKeyMapping.enter:
        keyEventHandled = this.pressEnter();
        break;
      case this.navigationKeyMapping.back:
        keyEventHandled = this.goBack();
        break;
      default:
    }

    if (keyEventHandled) {
      // Prevent default action when the event is handled otherwise leave it to the parent to handle it
      evt.preventDefault();
    }
  };

  handleFocus = (evt: FocusEvent) => {
    if (evt.target instanceof HTMLElement) {
      this.setActiveElement(evt.target);
    }
  };

  /**
   * Trigger click on the active element
   *
   * @returns true when click triggered, false otherwise
   */
  private pressEnter() {
    const activeElement = this.getActiveElement();
    if (activeElement?.click) {
      activeElement.click();
      return true;
    }
    return false;
  }

  /**
   * Handle back action
   *
   * Either trigger click on goBack element if any
   * otherwise call default go back handler
   *
   * @returns true when go back handled, false otherwise
   */
  goBack(): boolean {
    const goBackElement = findFocusable(this.root).find(el => el.dataset.spatialGoBack);
    const isDefaultPrevented = this.emitGoBackEvent(goBackElement);

    if (goBackElement && !isDefaultPrevented) {
      goBackElement.click();
      return true;
    }
    return false;
  }
}

export default SpatialNavigationProvider;
