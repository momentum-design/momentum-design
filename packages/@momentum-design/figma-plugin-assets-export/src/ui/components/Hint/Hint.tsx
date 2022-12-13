import React from 'react';
import type { Description } from '../../../shared/types';
import Link from '../Link/Link';

import './Hint.css';

interface Props {
  description: Description;
}
function Hint({ description }: Props) {
  return (
    <p className="hint">
      <span>{description.name} will be exported to </span>
      <Link url={description.url} target="_blank">
        {description.urlText}
      </Link>
      <span>.</span>
    </p>
  );
}

export default Hint;
