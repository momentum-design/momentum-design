import React, { ChangeEvent, useState, useCallback, useEffect } from 'react';

import './TextArea.css';

interface Props {
  value: any;
  disabled?: boolean;
}
/**
 * Controlled TextArea
 *
 * This TextArea component needs to be on the one hand be controlled with the use of `localValue`,
 * because TextArea changes can only be done with `value` & `onChange`. On the other hand the
 * TextArea needs to react to changes from the top. This is achieved with the additional `useEffect`.
 */
const TextArea = React.forwardRef(({ value, disabled }: Props, ref: React.ForwardedRef<HTMLTextAreaElement>) => {
  const parentValue = JSON.stringify(value, null, 2);
  const [localValue, setLocalValue] = useState(parentValue);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      if (e.target.value !== localValue) {
        setLocalValue(e.target.value);
      }
    },
    [localValue],
  );

  useEffect(() => {
    if (parentValue !== localValue) {
      setLocalValue(parentValue);
    }
  }, [parentValue]);

  return (
    <textarea
      className="textarea"
      disabled={disabled}
      ref={ref}
      value={localValue}
      onChange={handleChange}
    />
  );
});

export default TextArea;
