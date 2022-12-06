import React from 'react';

import './Select.css';

interface Props {
  children: React.ReactNode;
  name: string;
  setSelectValue: React.Dispatch<React.SetStateAction<any | undefined>>;
}

function Select({ setSelectValue, name, children }: Props) {
  const handleChange = (e: any) => {
    setSelectValue(e.target.value);
  };

  return (
    <select name={name} onChange={handleChange}>
      {children}
    </select>
  );
}

export default Select;
