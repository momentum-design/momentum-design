import React from 'react';

import './Settings.css';

function HelpContent() {
  return (
    <div className="helpContent">
      <p>Replace the default settings with your own values and click save to apply.</p>
      <p>For easier modification, copy the settings into a editor, modify and paste it back in.</p>
      <p>When using "parts", the following terms can be used:</p>
      <p>COMPONENT_NAME | PARENT_NAME | SET_OR_COMPONENT_NAME | SF_ALTERNATIVE | RTL | WEIGHT | COLOR | STATE | SIZE</p>
    </div>
  );
}

export default HelpContent;
