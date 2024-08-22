import React from 'react';

interface Props {
  active: boolean;
  handleClick: () => void;
  children: React.ReactNode;
}

function Tab({ active, handleClick, children }: Props) {
  return (
    <button className={`tab ${active ? 'active' : ''}`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Tab;
