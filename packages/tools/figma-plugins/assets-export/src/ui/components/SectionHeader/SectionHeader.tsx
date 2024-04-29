import React from 'react';

import './SectionHeader.css';

interface Props {
  children: React.ReactNode;
}
function SectionHeader({ children }: Props) {
  return <p data-testid='section-header' className='section-header'>{children}</p>;
}

export default SectionHeader;
