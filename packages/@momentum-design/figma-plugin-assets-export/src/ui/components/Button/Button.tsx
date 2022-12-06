import React, { ButtonHTMLAttributes } from 'react';
import './Button.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button(props: Props) {
  return <button className='button' {...props}></button>;
}

export default Button;
