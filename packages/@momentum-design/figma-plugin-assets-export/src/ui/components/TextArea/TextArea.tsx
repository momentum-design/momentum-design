import React from 'react';

import './TextArea.css';

interface Props {
  text: any;
  disabled?: boolean;
}
const TextArea = React.forwardRef(({ text, disabled }: Props, ref: React.ForwardedRef<HTMLTextAreaElement>) => (
  <textarea className="textarea" disabled={disabled} ref={ref}>
    {JSON.stringify(text, null, 2)}
  </textarea>));

export default TextArea;
