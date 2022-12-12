import React from 'react';
import classnames from 'classnames';
import './Row.css';

interface Props {
  type?: 'large' | 'normal' | 'small'
  children?: React.ReactNode;
  className?: string;
}

function Row({ type, children, className }: Props) {
  return (
    <div className={
      classnames(
        'row',
        type === 'small' && 'row-small',
        type === 'large' && 'row-large',
        className,
      )}>
      {children}
    </div>
  );
}

export default Row;
