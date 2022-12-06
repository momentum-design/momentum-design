/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';

import './App.css';
import { Tabs, Footer } from './components';
import Export from './sections/export/Export';
import Settings from './sections/settings/Settings';
import Tools from './sections/tools/Tools';
import type { TabType } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('export');
  return (
    <div className="wrapper">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
      <div className="content">
        {activeTab === 'export' && <Export />}
        {activeTab === 'tools' && <Tools />}
        {activeTab === 'settings' && <Settings />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
