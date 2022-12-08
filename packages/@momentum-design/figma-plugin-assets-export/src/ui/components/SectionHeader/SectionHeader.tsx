import React from 'react';

import './SectionHeader.css';

interface Props {
  children: React.ReactNode;
}
function SectionHeader({ children }: Props) {
  return <p className="section-header">{children}</p>;
}

export default SectionHeader;
