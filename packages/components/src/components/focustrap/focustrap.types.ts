// AI-Assisted
interface Events {
  /** Fired when the focus trap is activated (React: onFocusTrapActivated) */
  onFocusTrapActivatedEvent: Event;
  /** Fired when the focus trap is deactivated (React: onFocusTrapDeactivated) */
  onFocusTrapDeactivatedEvent: Event;
}

declare global {
  interface GlobalEventHandlersEventMap {
    focustrapactivated: Event;
    focustrapdeactivated: Event;
  }
}

export type { Events };
// End AI-Assisted
