import React from 'react';

import './List.css';

interface Props {
  children: React.ReactNode;
}

function List({ children }: Props) {
  return <div data-testid='list' className='list'>{children}</div>;
}

export default List;
