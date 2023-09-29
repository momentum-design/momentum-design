/* eslint-disable max-len */
import React, { useRef } from 'react';
import Button from '../Button/Button';

import './Help.css';

interface Props {
  tooltipContent?: React.ReactNode;
}
function Help({ tooltipContent }: Props) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const handleButtonClick = () => {
    dialogRef.current?.showModal();
  };

  const handleDialogClick = () => {
    dialogRef.current?.close();
  };

  return (
    <div className="tooltip">
      <Button onClick={handleButtonClick} title="Help">?</Button>
      <dialog ref={dialogRef} onClick={handleDialogClick} className="tooltipcontent"><div id="inner-content">{tooltipContent}</div></dialog>
    </div>
  );
}

export default Help;
