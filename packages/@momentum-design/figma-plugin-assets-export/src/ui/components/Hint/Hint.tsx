import React from 'react';
import { CONSTANTS } from '../../constants';
import type { AssetsType } from '../../types';

import './Hint.css';

interface Props {
  assetType: AssetsType;
}
function Hint({ assetType }: Props) {
  const momentumRepoLink = `${CONSTANTS.URLS.MOMENTUM_BASE}/${assetType}`;

  return (
    <p className="hint">
      <span>All {assetType} will be exported to </span>
      <a href={momentumRepoLink} target="_blank">
        Momentum {assetType} package
      </a>
      <span>.</span>
    </p>
  );
}

export default Hint;
