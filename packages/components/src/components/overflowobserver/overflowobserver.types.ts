import type Text from '../text/text.component';

interface ContextType {
  observeResizeForOverflow: (element: Text) => void;
  unobserveResizeForOverflow: (element: Text) => void;
}

export type { ContextType };
