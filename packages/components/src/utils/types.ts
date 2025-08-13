export type ValueOf<T> = T[keyof T];

/**
 * A generic type for strongly typing custom events with their targets
 * @typeParam T - The type of the event target (extends EventTarget)
 * @typeParam D - The type of the detail payload for the custom event
 *
 * @see [Strongly Typed Events for Web Components](https://dev.to/stuffbreaker/creating-strongly-typed-events-for-web-components-1jem)
 */
export type TypedCustomEvent<T extends EventTarget, D = unknown> = CustomEvent<D> & {
  target: T;
};

/**
 * A utility type to override the target of an event
 * @typeParam T - The type of the event (extends Event)
 * @typeParam E - The type of the event target (extends EventTarget)
 */
export type OverrideEventTarget<T extends Event, E extends EventTarget> = Omit<T, 'target'> & {
  target: E;
};
