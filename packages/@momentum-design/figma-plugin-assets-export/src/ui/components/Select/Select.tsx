import classNames from 'classnames';
import React from 'react';

import './Select.css';

interface Props {
  children: React.ReactNode;
  name: string;
  setSelectValue: React.Dispatch<React.SetStateAction<any | undefined>>;
  className?: string
}

function Select({ setSelectValue, name, children, className }: Props) {
  const handleChange = (e: any) => {
    setSelectValue(e.target.value);
  };

  return (
    <select name={name} onChange={handleChange} className={classNames(className)}>
      {children}
    </select>
  );
}

export default Select;
