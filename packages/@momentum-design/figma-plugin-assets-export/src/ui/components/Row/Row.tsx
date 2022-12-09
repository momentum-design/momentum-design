import React from 'react';
import classnames from 'classnames';
import './Row.css';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

function Row({ children, className }: Props) {
  return (
    <div className={classnames('row', className)}>{children}</div>
  );
}

export default Row;
