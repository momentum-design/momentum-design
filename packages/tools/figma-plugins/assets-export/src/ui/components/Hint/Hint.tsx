import React from 'react';
import type { Description } from '../../../shared/types';
import Link from '../Link/Link';

import './Hint.css';

interface Props {
  description: Description;
  className?: string;
}
function Hint({ description, className }: Props) {
  return (
    <p className="hint">
      <span className="name">{description.name} will be exported to </span>
      <Link url={description.url} target="_blank" className={className}>
        {description.urlText}
      </Link>
      <span>.</span>
    </p>
  );
}

export default Hint;
