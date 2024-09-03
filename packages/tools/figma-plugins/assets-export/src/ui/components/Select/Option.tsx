import React from 'react';

interface Props {
    value: string;
    children: React.ReactNode;
    disabled?: boolean;
    selected?: boolean;
}

function Option({ value, disabled, selected, children }: Props) {
  return (
    <option value={value} disabled={disabled} selected={selected}>
      {children}
    </option>
  );
}

export default Option;
