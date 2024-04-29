/* eslint-disable max-len */
import React from 'react';
import classnames from 'classnames';

import './RunIcon.css';

interface Props {
  disabled?: boolean;
}
function RunIcon({ disabled }: Props) {
  return (
    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={classnames('run-icon', disabled && 'disabled')}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0.0976562L0.765 0.575781L8.765 5.57578L9.4434 5.99978L8.765 6.42378L0.765 11.4238L0 11.9019V10.9998V0.99978V0.0976562ZM1 1.9019V10.0977L7.5566 5.99978L1 1.9019Z"
        fill="black"
        fill-opacity="0.8"
      />
    </svg>
  );
}

export default RunIcon;
