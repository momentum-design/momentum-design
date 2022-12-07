import React, { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';
import './Button.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

function Button({ className, ...restProps }: Props) {
  return <button {...restProps} className={classnames('button', className)}></button>;
}

export default Button;
