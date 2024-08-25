import React from 'react';
import './Label.css';

interface Props {
    children: React.ReactNode;
    htmlFor: string;
}
function Label({ children, htmlFor }: Props) {
  return (
    <label className="label" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export default Label;
