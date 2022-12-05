import React from 'react';

import './FormRow.css';

interface Props {
    children?: React.ReactNode;
}

function FormRow({ children }: Props) {
  return (
    <div className="form-row">{children}</div>
  );
}

export default FormRow;
