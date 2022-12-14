import React from 'react';
import './Link.css';

interface Props {
    url: string;
    target?: string;
    children: React.ReactNode;
}
function Link({ url, target, children }: Props) {
  return (
    <a className="link" href={url} target={target}>
      {children}
    </a>
  );
}

export default Link;
