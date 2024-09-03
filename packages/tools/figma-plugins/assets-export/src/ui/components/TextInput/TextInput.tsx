import React from 'react';

import './TextInput.css';

interface Props extends React.HTMLProps<HTMLInputElement> {
}
const TextInput = React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLInputElement>) => (
  <input
    type="text"
    className="text-input"
    disabled={props.disabled}
    ref={ref}
    value={props.value}
    {...props}></input>));

export default TextInput;
