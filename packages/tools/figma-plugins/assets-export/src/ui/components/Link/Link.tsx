import React from 'react';
import './Link.css';

interface Props {
    url: string;
    target?: string;
    children: React.ReactNode;
    className?: string;
}
function Link({ url, target, children, className }: Props) {
  return (
    <a className={`${className} link`} href={url} target={target}>
      {children}
    </a>
  );
}

export default Link;
