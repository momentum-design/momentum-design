import classNames from 'classnames';
import React from 'react';

import './Select.css';

interface Props extends React.HTMLProps<HTMLSelectElement> {
  children: React.ReactNode;
  setSelectValue: React.Dispatch<React.SetStateAction<any | undefined>>;
  className?: string
}

function Select({ setSelectValue, children, className, ...restProps }: Props) {
  const handleChange = (e: any) => {
    setSelectValue(e.target.value);
  };

  return (
    <select onChange={handleChange} className={classNames(className)} {...restProps}>
      {children}
    </select>
  );
}

export default Select;
