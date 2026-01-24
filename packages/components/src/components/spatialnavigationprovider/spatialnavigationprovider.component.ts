import { property } from 'lit/decorators.js';

import { Provider } from '../../models';
import { capitalize } from '../../utils/string';
import { findFocusable, getDomActiveElement } from '../../utils/dom';
import { FocusTrapStack } from '../../utils/mixins/focus/FocusTrapStack';

import SpatialNavigationProviderContext from './spatialnavigationprovider.context';
import {
  Direction,
  ShortestDistanceWeights,
  SpatialNavigationContextValue,
  SpatialNavigationActionToKeyMap,
  SpatialNavigationKeyToActionMap,
} from './spatialnavigationprovider.types';
import { DEFAULTS } from './spatialnavigationprovider.constants';
import { orderElementsByDistance } from './spatialnavigationprovider.utils';
import { NavBackEvent, NavBeforeFocusEvent, NavBeforeProcessEvent } from './spatialnavigationprovider.events';

/**
 * This component manages the spatial navigation state and
 * provides the necessary context to the rest of the components in the library.
 * It should be placed at the root of the application.
 *
 * [Spatial navigation](https://en.wikipedia.org/wiki/Spatial_navigation) is a way to navigate through focusable
 * elements on a 2 dimensional plane. It is commonly used in TV and game console applications where
 * a remote control or a gamepad is used to navigate through the UI.
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
 * ### Completeness
 *
 * The current algorithm can not guaranty to all focusable element will be reachable via the for direction keys.
 * In some case component(s) can be isolated in a way that it is not reachable from other components.
 *
 * Workarounds:
 *  - Manually specify the next element to focus with the data attributes. This can guaranty the isolated element prioritized
 *     over the automatic calculation.
 *  - Rearrange the focusable elements in the DOM to be more aligned:
 *    - Use dedicated components (lists, menus, etc.) as much as possible to group focusable elements.
 *    - Avoid complex layouts where focusable elements are fit into a grid like structure with different sizes.
 *    - Avoid overlap between focusable elements on the vertical or the horizontal axis.
 *    - Avoid nested focusable elements when possible.
 *  - Adjust weights of the algorithm to work better with your UI layout.
 *
 * ### Scrollable containers
 *
 * Content scrolling is not supported at the moment, for example:
 * - When the focused element (eg.: list item) is bigger then the viewport
 * - the element is a scrollable content without interactive items
 *
 * ## Contribution
 *
 *
 *
 * @event navback - (React: onNavBack) This event dispatched a back navigation triggered by the user.
 *                  The event's detail contains the goBackElement if any. It is cancelable to prevent click
 *                  action on the goBackElement.
 * @event navbeforeprocess - (React: onNavBeforeProcess) This event dispatched before spatial navigation process any key event.
 *                           It can be canceled to prevent any action from spatial navigation, e.g.: back, click or calculating the next candidate.
 * @event navbeforefocus - (React: onNavBeforeFocus) This event is dispatched before the focus is changing to the next element.
 *                         It can be canceled to prevent the focus change. @see https://www.w3.org/TR/css-nav-1/#event-type-navbeforefocus
 *
 * @tagname mdc-spatialnavigationprovider
 */
class SpatialNavigationProvider extends Provider<SpatialNavigationContextValue> {
  /**
   * Key mapping for spatial navigation actions
   * It is possible to map left/right/up/down/enter/back actions to any valid key
   * @see [KeyboardEvent: key property](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
   *
   * Note: some devices might have different key names for the same physical key, for example "GoBack" key on some remotes.
   */
  @property({ attribute: false })
  public navigationKeyMapping: SpatialNavigationActionToKeyMap = DEFAULTS.SPATIAL_NAVIGATION_KEY_MAPPING;

  /**
   * Weights used in the distance calculation algorithm
   * @see https://www.w3.org/TR/css-nav-1/#find-the-shortest-distance
   */
  @property({ attribute: false })
  public distanceCalculationWeights: ShortestDistanceWeights = DEFAULTS.WEIGHTS;

  /**
   * Root element
   * @internal
   */
  private root: HTMLElement = this;

  /**
   * Currently focused element
   * Use WeakRef to avoid memory leaks
   * @internal
   */
  private activeElement: undefined | WeakRef<HTMLElement>;

  /**
   * Observer to track the active element changes.
   * @internal
   */
  private activeElementObserver!: MutationObserver;

  /**
   * Storey the initial history length to avoid going back beyond the provider initialization point
   * @internal
   */
  private readonly initialHistoryLength = window.history.length;

  /**
   * List of navigation keys
   */
  get navigationKeys() {
    return [
      this.navigationKeyMapping.up,
      this.navigationKeyMapping.down,
      this.navigationKeyMapping.left,
      this.navigationKeyMapping.right,
      this.navigationKeyMapping.enter,
      this.navigationKeyMapping.escape,
    ];
  }

  constructor() {
    // initialize the context by running the Provider constructor:
    super({
      context: SpatialNavigationProviderContext,
    });
    this.activeElementObserver = new MutationObserver(this.activeElementObserverCallback);

    this.addEventListener('keydown', this.handleKeyDown);
    this.addEventListener('focus', this.handleFocus);
  }

  override connectedCallback() {
    super.connectedCallback();

    this.initActiveElement();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();

    this.activeElement = undefined;
    this.activeElementObserver.disconnect();
  }

  /**
   * Context object of the ControlTypeProvider, to be consumed by child components
   */
  public static get Context() {
    return SpatialNavigationProviderContext;
  }

  protected override updateContext(): void {
    const { actionToKeyMap } = this.context.value || {};
    if (
      !actionToKeyMap ||
      actionToKeyMap.left !== this.navigationKeyMapping.left ||
      actionToKeyMap.right !== this.navigationKeyMapping.right ||
      actionToKeyMap.up !== this.navigationKeyMapping.up ||
      actionToKeyMap.down !== this.navigationKeyMapping.down ||
      actionToKeyMap.enter !== this.navigationKeyMapping.enter ||
      actionToKeyMap.escape !== this.navigationKeyMapping.escape
    ) {
      this.context.value = {
        actionToKeyMap: { ...this.navigationKeyMapping },
        keyToActionMap: Object.fromEntries(
          Object.entries(this.navigationKeyMapping).map(([action, key]) => [key, action]),
        ) as SpatialNavigationKeyToActionMap,
      };

      this.context.updateObservers();
    }
  }

  /**
   * Initialize the spatial navigation.
   * @internal
   */
  private initActiveElement(nextActiveElement?: HTMLElement): void {
    const elements = findFocusable(this.root);
    this.findActiveElement(elements, nextActiveElement);
  }

  /**
   * Update the list of the focusable elements in the app.
   * @internal
   */
  private findActiveElement(elements: HTMLElement[], currentActiveElement?: HTMLElement): void {
    if (!currentActiveElement || !elements.includes(currentActiveElement)) {
      const nextActiveElement = elements[0];
      if (nextActiveElement) {
        this.setActiveElementAndFocus(nextActiveElement);
      }
    }
  }

  /**
   * Get all focusable elements within the spatial navigation scope
   * It limits the search to the active focus trap when there is any
   * @internal
   */
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
   * @internal
   */
  private focusNext(direction: Direction): boolean {
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
    const results = orderElementsByDistance(currentActiveElement, elements, direction, this.distanceCalculationWeights);
    const nextActiveElement = results[0]?.candidate;

    if (nextActiveElement) {
      const focusEvent = new NavBeforeFocusEvent(direction, nextActiveElement);
      dispatchEvent(focusEvent);
      if (!focusEvent.defaultPrevented) {
        this.setActiveElementAndFocus(nextActiveElement);
        return true;
      }
    }
    return false;
  }

  /**
   * Emit navigation back event
   *
   * @param goBackElement - The element that will be clicked on go back action
   * @internal
   */
  private emitGoBackEvent(goBackElement: undefined | HTMLElement): boolean {
    const goBackEvent = new NavBackEvent(goBackElement);
    this.dispatchEvent(goBackEvent);

    return goBackEvent.defaultPrevented;
  }

  /**
   * Set the active element.
   *
   * Also, setup MutationObserver to track the element removal from the DOM.
   *
   * @param element - New active element
   * @internal
   */
  private setActiveElement(element: HTMLElement): void {
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
   *
   * @param element - New active element
   * @internal
   */
  private setActiveElementAndFocus(element: HTMLElement): void {
    this.setActiveElement(element);
    // Focus the element asynchronously to make sure all calculations are done before focusing
    queueMicrotask(() => element.focus());
  }

  /**
   * Get active (focused) element
   * @internal
   */
  private getActiveElement(): HTMLElement | undefined {
    return this.activeElement?.deref();
  }

  /**
   * Handle keydown event
   *
   * @param evt - Keyboard event
   * @internal
   */
  private handleKeyDown = (evt: KeyboardEvent) => {
    if (evt.shiftKey || evt.ctrlKey || evt.altKey || evt.metaKey || !this.navigationKeys.includes(evt.key)) {
      return;
    }

    const event = new NavBeforeProcessEvent();
    getDomActiveElement()?.dispatchEvent(event);

    if (event.defaultPrevented) {
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
      case this.navigationKeyMapping.escape:
        keyEventHandled = this.goBack();
        break;
      default:
    }

    if (keyEventHandled) {
      // Prevent default action when the event is handled otherwise leave it to the parent to handle it
      evt.preventDefault();
    }
  };

  /**
   * Mutation Observer callback
   * @internal
   */
  private activeElementObserverCallback: MutationCallback = (): void => {
    const currentActiveElement = this.getActiveElement();
    if (!currentActiveElement || !currentActiveElement.isConnected) {
      this.initActiveElement(currentActiveElement);
    }
  };

  /**
   * Handle focus event
   * @param evt - Focus event
   * @internal
   */
  private handleFocus = (evt: FocusEvent) => {
    this.initActiveElement(evt.target as HTMLElement);
  };

  /**
   * Trigger click on the active element
   *
   * @returns true when click triggered, false otherwise
   */
  public pressEnter() {
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
  public goBack(): boolean {
    const goBackElement = findFocusable(this.root).find(el => el.dataset.spatialGoBack);
    const isDefaultPrevented = this.emitGoBackEvent(goBackElement);

    if (goBackElement && !isDefaultPrevented) {
      goBackElement.click();
      return true;
    }

    if (window.history.length > this.initialHistoryLength) {
      window.history.back();
      return true;
    }
    return false;
  }
}

export default SpatialNavigationProvider;
