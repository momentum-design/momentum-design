import React from 'react';
import classnames from 'classnames';
import './Row.css';

interface Props {
  type?: 'large' | 'normal' | 'small'
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function Row({ type, children, className, style }: Props) {
  return (
    <div
      data-testid='row'
      className={
        classnames(
          'row',
          type === 'small' && 'row-small',
          type === 'large' && 'row-large',
          className,
        )}
      style={style}>
      {children}
    </div>
  );
}

export default Row;
