import { property } from 'lit/decorators.js';

import { Provider } from '../../models';
import { findFocusable, getDomActiveElement, getHostComposePath, isScrollable } from '../../utils/dom';
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

// AI-Assisted
/**
 * This component manages focus using spatial navigation and provides context for child components.
 *
 * Place it at the root of the application.
 *
 * [Spatial navigation](https://en.wikipedia.org/wiki/Spatial_navigation) lets users move focus among
 * elements on a 2D plane, common on TVs and game consoles with remotes or gamepads.
 *
 * ## Focus management
 *
 * The provider listens to keyboard events and moves focus among elements based on arrow key input.
 * You can influence or override this behavior.
 *
 * Note: The algorithm is distance-based, so the UI should be designed so focusable elements are
 * predictably reachable. Relative element positions should remain stable; responsive layouts can
 * make navigation unpredictable. This is less of an issue on fixed-size TV UIs but can show unexpected
 * behavior in Storybook when resizing. See the "Limitations" section.
 *
 * ### Automatic
 *
 * By default, the next focus target is computed from element positions:
 *
 * 1. Find the nearest focus area (scrollable container or active focus trap) relative to the current element.
 * 2. Collect focusable elements in that area.
 * 3. Compute distances from the current element to candidates using the W3C "find the shortest
 *    distance" algorithm: https://www.w3.org/TR/css-nav-1/#find-the-shortest-distance
 * 4. If no candidates are found, repeat from step 1, skipping areas already checked.
 * 5. Focus the closest candidate.
 *
 * Elements with `data-spatial-focusable` are treated as focusable even if they would otherwise not be
 * (e.g., `tabindex="-1"`).
 *
 * ### Overwrite next element
 *
 * Override automatic navigation by adding one of these attributes to a focusable element:
 *
 * - `data-spatial-up`
 * - `data-spatial-down`
 * - `data-spatial-left`
 * - `data-spatial-right`
 *
 * Each attribute value must be the id of the element to focus when the corresponding key is pressed.
 *
 * ### Element internal navigation
 *
 * Complex components (List, Combobox, Tree, etc.) may handle their own navigation. For example, a List moves
 * focus internally on Down until the last item, after which Down should fall back to provider navigation.
 *
 * To prevent the provider from handling a key, listen to `navbeforeprocess` and call `event.preventDefault()`.
 * This event fires after the component handles `keydown`.
 *
 * ### Cancel focus change
 *
 * Before focusing a computed target, the provider dispatches `navbeforefocus` on the current element. Call
 * `event.preventDefault()` on this event to cancel the focus change.
 *
 * ## Enter action
 *
 * Pressing Enter triggers `.click()` on the currently focused element.
 *
 * You can prevent this by listening to `navbeforeprocess` and calling `event.preventDefault()`.
 *
 * ## Escape/Back action
 *
 * Pressing Escape tries to find a focusable element with `data-spatial-go-back` and clicks it. If none exists,
 * the provider calls `history.back()`.
 *
 * You can prevent this by listening to `navbeforeprocess` and calling `event.preventDefault()`.
 *
 * You can also intercept the back click by listening to `navback` and calling `event.preventDefault()`.
 *
 * ## Control data attributes
 *
 * Supported data attributes:
 *
 * | Attribute              | Value       | Default | Description                                                                         |
 * |------------------------|-------------|---------|-------------------------------------------------------------------------------------|
 * | `data-spatial-left`    | element id  | N/A     | Focus this element when Left is pressed                                             |
 * | `data-spatial-up`      | element id  | N/A     | Focus this element when Up is pressed                                               |
 * | `data-spatial-right`   | element id  | N/A     | Focus this element when Right is pressed                                            |
 * | `data-spatial-down`    | element id  | N/A     | Focus this element when Down is pressed                                             |
 * | `data-spatial-go-back` | N/A         | N/A     | First focusable element with this attribute is clicked on Back/Escape               |
 * | `data-spatial-focusable` | N/A       | N/A     | Treat element as focusable even if it normally is not (e.g., `tabindex="-1"`)      |
 *
 * ## Event emitting order
 *
 * On a navigation key press, events fire in this order:
 *
 * 1. `navbeforeprocess` on the currently focused element.
 * 2. If not prevented:
 * a. Arrow keys: `navbeforefocus` on the currently focused element.
 * b. Enter: `.click()` on the currently focused element.
 * c. Escape/Back: `navback` on the provider, then `.click()` on the go-back element or `history.back()`.
 * 3. If no target is found in the requested direction: `navnotarget` on the provider.
 *
 * ## Handle complex components
 *
 * ### Generic components
 *
 * Components that handle navigation internally should prevent the provider from acting. Handle `navbeforeprocess`
 * and call `event.preventDefault()` for keys you process yourself.
 *
 * ### Form inputs
 *
 * Native inputs often submit on Enter, which is not desirable here. Enter should toggle or activate the control
 * (e.g., check/uncheck). Provide a dedicated submit button users can navigate to and press Enter on.
 *
 * ### Utilities for complex components
 *
 * #### KeyToActionMixin
 *
 * Maps key events to action names. Call `getActionForKeyEvent` to get the action for a keyboard event. Also provides
 * `getKeyboardNavMode` to check whether navigation is spatial or default.
 *
 * #### KeyDownHandledMixin
 *
 * Notify the provider when a component handled `keydown` internally. Call `keyDownEventHandled` whenever you process
 * keydown yourself.
 *
 * ## Platform specific behaviors
 *
 * Consider remote/gamepad constraints. Often focus alone is not enough and users press Enter to "enter" an interactive mode:
 * - Select: Enter opens options rather than arrow keys opening a popover.
 * - Text inputs: see the next section.
 * - Slider: Enter to start adjusting, arrow keys to change value, Enter/Escape to stop.
 *
 * ### Text inputs
 *
 * On TV-like platforms without physical keyboards, Enter/focus on an input should open a virtual keyboard instead of submitting
 * the form. Users must close the keyboard (Escape) to continue spatial navigation.
 *
 * If navigation keys are mapped to letters (e.g., `w/a/s/d`), they should navigate, not change input values. Inputs should
 * be edited via the virtual keyboard.
 *
 * Note: Stories do not emulate virtual keyboards, so letter-based navigation may change input values in Storybook.
 *
 * ## Debugging
 *
 * ### Storybook toolbar
 *
 * Enable "Spatial navigation" in the toolbar. Key mapping:
 * - Up - ArrowUp
 * - Left - ArrowLeft
 * - Down - ArrowDown
 * - Right - ArrowRight
 * - Enter - Enter
 * - Escape - Escape
 *
 * With wrapper: wraps the component in a 3x3 grid with surrounding buttons for testing.
 * Without wrapper: renders the component alone.
 *
 * ### Visual debugger
 *
 * With spatial navigation enabled, press Shift + navigation key to visualize calculations:
 *
 * - Star: next active element
 * - `#{number}`: candidate order by distance
 * - `D: {distance}`: computed distance
 *
 * ## Limitations
 *
 * ### Completeness
 *
 * The algorithm cannot guarantee reachability to all elements using the four directions. Some components can be isolated.
 *
 * Workarounds:
 * - Use data attributes to explicitly link navigation targets.
 * - Arrange DOM to improve spatial consistency:
 * - Group focusable elements using dedicated components (lists, menus, etc.).
 * - Avoid complex grid-like layouts with variable-sized items.
 * - Avoid overlap along horizontal or vertical axes.
 * - Avoid nested focusable elements where possible.
 * - Tune algorithm weights to match your UI layout.
 *
 * ### Scrollable containers
 *
 * Content scrolling is not supported yet, e.g.:
 * - Focused element larger than the viewport.
 * - Scrollable content without interactive children.
 *
 * ### Nested providers
 *
 * Only one provider instance is supported in the application at a time.
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
   * It is possible to map left/right/up/down/enter/escape actions to any valid key
   * @see [KeyboardEvent: key property](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
   *
   * Some devices might have different key names for the same physical key, for example "GoBack" key on some remotes.
   *
   * By default, the following key mapping is used:
   * - up: "ArrowUp"
   * - down: "ArrowDown"
   * - left: "ArrowLeft"
   * - right: "ArrowRight"
   * - enter: "Enter"
   * - escape: "Escape"
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
    const focusableElements = [];

    let path = event.composedPath() as HTMLElement[];
    // In case the event triggered outside this provider (e.g.: body, etc.)
    path = path.includes(this.root) ? path : [this.root];
    // Walk through the composed path to find the focus areas (scrollable or focus trap)
    for (const el of path) {
      if (el === activeTrap || el === this.root || isScrollable(el)) {
        // Find focusable elements within the current focus area (excluding the already checked focus areas)
        focusableElements.push(
          ...findFocusable(el, {
            excludedElements: checkedFocusArea ? [checkedFocusArea] : undefined,
            includeSelectors: ['[data-spatial-focusable]'],
          }),
        );
        const result = this.focusNextInFocusableAria(focusableElements, direction);
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
    // We look for the element in all the shadow DOMs in the composed path of the active element,
    // so mdc component can use this feature as well.
    const dataAttrName = `data-spatial-${direction}`;
    if (currentDomActiveElement) {
      const elementWithDataset = getHostComposePath(currentDomActiveElement).find(node =>
        node.hasAttribute(dataAttrName),
      );
      const nextElementId = elementWithDataset?.getAttribute(dataAttrName);

      if (elementWithDataset && nextElementId) {
        const nextElement = (elementWithDataset.getRootNode() as Document | ShadowRoot)?.getElementById(nextElementId);
        if (nextElement) {
          return nextElement;
        }
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
    const navBeforeProcessEvent = new SpatialNavigationEvent('navbeforeprocess', this, action);
    if (evt.target) {
      (evt.composedPath()[0] || evt.target)?.dispatchEvent(navBeforeProcessEvent);
    }

    if (navBeforeProcessEvent.defaultPrevented) {
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
    const activeElement = getDomActiveElement();
    if (activeElement instanceof HTMLElement) {
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
