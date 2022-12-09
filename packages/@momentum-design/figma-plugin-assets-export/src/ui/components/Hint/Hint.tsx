import React from 'react';
import type { Description } from '../../../shared/types';

import './Hint.css';

interface Props {
  description: Description;
}
function Hint({ description }: Props) {
  return (
    <p className="hint">
      <span>{description.name} will be exported to </span>
      <a href={description.url} target="_blank">
        {description.urlText}
      </a>
      <span>.</span>
    </p>
  );
}

export default Hint;
