import { property } from 'lit/decorators.js';

import { Provider } from '../../models';
import { capitalize } from '../../utils/string';
import { findFocusable, getDomActiveElement, getElementOrHost, isScrollable } from '../../utils/dom';
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
import { SpatialNavigationEvent } from './spatialnavigationprovider.events';

/**
 * This component manage focus navigation in a spatial navigation fashion, and
 * provides the necessary context for other components.
 *
 * It should be placed at the root of the application.
 *
 * [Spatial navigation](https://en.wikipedia.org/wiki/Spatial_navigation) is a way to navigate through focusable
 * elements on a 2 dimensional plane. It is commonly used in TV and game console applications where
 * a remote control or a gamepad is used to navigate through the UI.
 *
 * ## Focus management
 *
 * Spatial navigation provider manage the focus on the page by listening to the keyboard events. It search for focusable elements
 * on the page and calculate the next element to focus based on the user input (arrow keys). But there are few ways to interact
 * with the navigation process.
 *
 * ### Automatic
 *
 * By default the next focusable element is calculated automatically based on the position of the elements on the page.
 *
 * The algorithm do the following steps:
 *
 * 1. Find the closest Focusable area (scrollable or focus trap) from the currently focused element.
 * 2. Collect all focusable elements in the focusable area.
 * 3. Calculate distance between the candidate elements and the currently focused element
 *    it uses [W3 find the shortest distance](https://www.w3.org/TR/css-nav-1/#find-the-shortest-distance) algorithm.
 * 4. If there are no candidates in the focusable area, repeat from step 1 excluding the already checked focusable areas.
 * 5. Pick the closest candidate and call focus() on it.
 *
 * If an element has `data-spatial-focusable` attribute, it is considered focusable even if it has tabindex=-1.
 *
 * ### Overwrite next element
 *
 * Spatial navigation automatic behavior can be overwritten by adding special data attributes to the focusable element(s):
 *
 * - `data-spatial-up`
 * - `data-spatial-down`
 * - `data-spatial-left`
 * - `data-spatial-right`
 *
 * The value of these attributes should be the id of the element to focus when the user presses the corresponding arrow key.
 *
 * ### Element internal navigation
 *
 * Complex component such as List, Combobox, Tree, etc. has its own keyboard based navigation.
 *
 * For example List component when the user presses down and not the last row focused, this list should handle the navigation and
 * cancel spatial navigation automatic behavior. But when the last row is focused and the user presses down again, it should not
 * cancel the event and let the provider handle it.
 *
 * Consumers can cancel the navigation process by listening to the `navbeforeprocess` event and calling `event.preventDefault()`.
 * This event emitted after keydown handled by the components.
 *
 * ### Cancel focus change
 *
 * When the next focusable element is determined but before calling focus() on it, the `navbeforefocus` event is dispatched on
 * the currently focused element. Consumer can cancel the focus change by calling `event.preventDefault()` on this event.
 *
 * ## Enter action
 *
 * When the user presses the Enter key, the provider trigger click() on the currently focused element.
 *
 * This behavior can be prevented by listening to the `navbeforeprocess` event and calling `event.preventDefault()`.
 *
 * ## Escape/Back action
 *
 * When the user presses the Escape key, the provider first search for a focusable element with `data-spatial-go-back` attribute and
 * execute click() on it. If there is no such element, it calls the default browser history back action.
 *
 * This behavior can be prevented by listening to the `navbeforeprocess` event and calling `event.preventDefault()`.
 *
 * Also, the click action can be intercepted by listening to the `navback` event and cancel it by calling `event.preventDefault()` .
 *
 * ## Control data attributes
 *
 * List of all control data attributes:
 *
 * | Attribute              | Value       | Default | Description                                                                         |
 * |------------------------|-------------|---------|-------------------------------------------------------------------------------------|
 * | data-spatial-left      | element id  | N/A     | Next focused item when user presses left                                            |
 * | data-spatial-up        | element id  | N/A     | Next focused item when user presses up                                              |
 * | data-spatial-right     | element id  | N/A     | Next focused item when user presses right                                           |
 * | data-spatial-down      | element id  | N/A     | Next focused item when user presses down                                            |
 * | data-spatial-go-back   | N/A	        | N/A     | Spatial navigation trigger click on the first focusable element with this attribute |
 * | data-spatial-focusable | N/A	        | N/A     | Spatial navigation consider the element focusable even if it not (e.g.: tabindex=-1 |
 *
 * ## Event emitting order
 *
 * When the user presses a navigation key, the events are emitted in the following order:
 *
 * 1. `navbeforeprocess` on the currently focused element
 * 2. When the event not prevented
 *    a. For navigation (arrow) keys: `navbeforefocus` on the currently focused element
 *    b. For enter key: click() on the currently focused element
 *    c. For back/escape key: `navback` on the provider, then click() on the goBack element or history.back()
 * 3. When no focusable element found in the given direction: `navnotarget` on the provider
 *
 *
 * ## Handle complex components
 *
 * ### Generic components
 *
 * Components should notify the spatial navigation provider when they handle navigation internally.
 * For example a list component when the user presses down arrow key and the component moves focus to the next item internally,
 *
 * Component should handle the `navbeforeprocess` event and call `event.preventDefault()` to stop spatial navigation provider.
 *
 * ### Form inputs
 *
 * Inline form inputs (text input, checkbox, radio button, etc.) submit the form on Enter key by default.
 * This is not the expected behavior in spatial navigation context. User can change change the state of the input with enter
 * (check/uncheck, etc.). For form submission it is better to have a dedicated submit button that user can navigate to and press enter on it.
 *
 * ### Utilities for complex components
 *
 * #### KeyToActionMixin
 *
 * It abstracts away key codes and provide action names instead. Call `getActionForKeyEvent` to get the action for a given keyboard event.
 *
 * It also provides `getKeyboardNavMode` method to get the current keyboard navigation mode (spatial or default).
 *
 * #### KeyDownHandledMixin
 *
 * It provides a way to notify the spatial navigation provider when the component handled the keydown event internally.
 *
 * Components should call `keyDownEventHandled` whenwever they handle keydown event internally.
 *
 * ## Debugging
 *
 * ### Storybook toolbar
 *
 * Use the "Spatial navigation" option in the Storybook toolbar to enable/disable spatial navigation.
 * It has 2x2 mods:
 * - With 2 key mappings:
 *   1. Arrow keys + Enter + Escape
 *      - Up - Up arrow key
 *      - Left - Left arrow key
 *      - Down - Down arrow key
 *      - Right - Right arrow key
 *      - Enter - Enter key
 *      - Escape - Escape key
 *   2. Navigation keys: WASD
 *      - Up - W key
 *      - Left - A key
 *      - Down - S key
 *      - Right - D key
 *      - Enter - E key
 *      - Escape - Q key
 * - With OR without additional buttons around the component
 *
 * ### Visual debugger
 *
 * When "spatial navigation" is enabled in Storybook toolbar, press "Shift + Arrow key" to visualize the spatial navigation calculations.
 *
 * - Star: next active element
 * - #{number}: candidate elements ordered by distance
 * - D: {distance}: distance value used in the calculation
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
 *    over the automatic calculation.
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
 * ### Only one spatial navigation provider is supported
 *
 * At the moment only one spatial navigation provider is supported in the application.
 *
 * @event navbeforeprocess - (React: onNavBeforeProcess) This event dispatched before spatial navigation process any key event.
 *                           It can be canceled to prevent any action from spatial navigation, e.g.: back, click or calculating the next candidate.
 * @event navbeforefocus - (React: onNavBeforeFocus) This event is dispatched before the focus is changing to the next element.
 *                         It can be canceled to prevent the focus change. @see https://www.w3.org/TR/css-nav-1/#event-type-navbeforefocus
 * @event navback - (React: onNavBack) This event dispatched a back navigation triggered by the user.
 *                  The event's detail contains the goBackElement if any. It is cancelable to prevent click
 *                  action on the goBackElement.
 * @event navnotarget - (React: onNavNoTarget) This event is dispatched when there is no target to focus in the current focus area and
 *                      in the given direction .
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
  }

  override connectedCallback() {
    super.connectedCallback();

    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('focus', this.handleFocus);
    this.initActiveElement();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('focus', this.handleFocus);

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
   * Focus the next element in the given direction.
   *
   * @param event - Keyboard event
   * @param direction - User pressed arrow key.
   * @returns true when focus handled by the provider, false otherwise
   * @internal
   */
  private focusNext(event: Event, direction: Direction): boolean {
    const activeTrap = FocusTrapStack.getActiveTrap();
    let checkedFocusArea: HTMLElement | null = null;

    let path = event.composedPath() as HTMLElement[];
    // In case the event triggered outside this provider (e.g.: body, etc.)
    path = path.includes(this.root) ? path : [this.root];
    // Walk through the composed path to find the focus areas (scrollable or focus trap)
    for (const el of path) {
      if (el === activeTrap || el === this.root || isScrollable(el)) {
        // Find focusable elements within the current focus area (excluding the already checked focus areas)
        const focusables = findFocusable(el, {
          excludedElements: checkedFocusArea ? [checkedFocusArea] : undefined,
          includeSelectors: ['[data-spatial-focusable]'],
        });
        const result = this.focusNextInFocusableAria(focusables, direction);
        // If there is a focusable element found, or reached the active trap or the root, stop searching
        if (result || el === activeTrap || el === this.root) {
          if (result) this.emitNavBeforeFocusEvent(result, direction);
          return !!result;
        }
        checkedFocusArea = el;
      }
    }
    return false;
  }

  /**
   * Emit navbeforefocus event
   *
   * @param focusCandidate - The element that will be focused
   * @param direction - navigation direction
   * @returns true when focus changed, false otherwise
   * @internal
   */
  private emitNavBeforeFocusEvent(focusCandidate: HTMLElement, direction: Direction): boolean {
    if (focusCandidate) {
      const focusEvent = new SpatialNavigationEvent('navbeforefocus', focusCandidate, direction);
      this.getActiveElement()?.dispatchEvent(focusEvent);
      if (!focusEvent.defaultPrevented) {
        this.setActiveElementAndFocus(focusCandidate);
        return true;
      }
    }
    return false;
  }

  /**
   * Focus the next element in the given direction.
   *
   * @param elements - List of focusable elements
   * @param direction - User pressed arrow key.
   * @returns true when focus handled by the provider, false otherwise
   * @internal
   */
  private focusNextInFocusableAria(elements: HTMLElement[], direction: Direction): HTMLElement | undefined {
    // Do nothing when there is no focusable element
    if (elements.length === 0) {
      return undefined;
    }

    let currentActiveElement = this.getActiveElement();
    const currentDomActiveElement = getDomActiveElement() as HTMLElement | null;

    // Sync current active element if necessary
    // It can be out of sync when:
    // - the component handled the navigation (programmatically focused another element) so DOM active element is different
    // - focus fallback to body or other non-focusable element
    if (
      !currentActiveElement ||
      !elements.includes(currentActiveElement) ||
      currentActiveElement !== currentDomActiveElement
    ) {
      if (currentDomActiveElement && elements.includes(currentDomActiveElement)) {
        currentActiveElement = currentDomActiveElement;
      } else {
        [currentActiveElement] = elements;
      }
      this.setActiveElement(currentActiveElement);
    }

    // If DOM active element is not in the ficus area then move focus back to the current active element
    if (currentActiveElement !== getDomActiveElement()) {
      return currentActiveElement;
    }

    // Check if the current active element has instruction to find the next focusable
    const nextElementId = (getElementOrHost(currentActiveElement) as HTMLElement).dataset[
      `spatial${capitalize(direction)}`
    ];
    if (nextElementId) {
      const nextElement = document.getElementById(nextElementId);
      if (nextElement) {
        return nextElement;
      }
    }

    // Find the closest element in the given direction
    const results = orderElementsByDistance(currentActiveElement, elements, direction, this.distanceCalculationWeights);
    return results[0]?.candidate;
  }

  /**
   * Emit navigation back event
   *
   * @param goBackElement - The element that will be clicked on go back action
   * @internal
   */
  private emitGoBackEvent(goBackElement: undefined | HTMLElement): boolean {
    const goBackEvent = new SpatialNavigationEvent('navback', goBackElement as EventTarget, 'escape');
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
    const action = this.context.value!.keyToActionMap[evt.key];
    const event = new SpatialNavigationEvent('navbeforeprocess', this, action);
    getDomActiveElement()?.dispatchEvent(event);

    if (event.defaultPrevented) {
      return;
    }

    let keyEventHandled = false;

    switch (action) {
      case 'up':
        keyEventHandled = this.focusNext(evt, 'up');
        break;
      case 'down':
        keyEventHandled = this.focusNext(evt, 'down');
        break;
      case 'left':
        keyEventHandled = this.focusNext(evt, 'left');
        break;
      case 'right':
        keyEventHandled = this.focusNext(evt, 'right');
        break;
      case 'enter':
        keyEventHandled = this.pressEnter();
        break;
      case 'escape':
        keyEventHandled = this.goBack();
        break;
      default:
    }

    if (keyEventHandled) {
      // Prevent default action when the event is handled otherwise leave it to the parent to handle it
      evt.preventDefault();
    } else {
      this.dispatchEvent(new SpatialNavigationEvent('navnotarget', this, action));
    }
  };

  /**
   * Mutation Observer callback
   *
   * When the active element is removed from the DOM, try to find a new active element.
   *
   * @internal
   */
  private activeElementObserverCallback: MutationCallback = (): void => {
    const currentActiveElement = this.getActiveElement();

    if (!currentActiveElement || !currentActiveElement.isConnected) {
      // Do a soft check if the active element is inside the spatial navigation root
      // We want to track active element even when navigation (and dom) is managed by other components
      // e.g.: list, virtualized list, etc.
      if (this.root.contains(document.activeElement)) {
        const activeDomElement = getDomActiveElement() as HTMLElement | null;
        if (activeDomElement) {
          this.setActiveElement(activeDomElement);
        }
      } else {
        // Fallback, try to find a new active element
        this.initActiveElement(currentActiveElement);
      }
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
    const goBackElement = findFocusable(this.root).find(el => el.hasAttribute('data-spatial-go-back'));
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
