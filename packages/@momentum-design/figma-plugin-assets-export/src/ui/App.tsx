/* eslint-disable no-restricted-globals */
import React, { useState, useLayoutEffect } from 'react';

import './App.css';
import { Tabs, Footer } from './components';
import Export from './sections/export/Export';
import Settings from './sections/settings/Settings';
import Tools from './sections/tools/Tools';
import type { TabType } from './types';
import { requestSettingsFromStorage } from './utils/plugin';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('export');
  const [settings, setSettings] = useState();

  useLayoutEffect(() => {
    window.onmessage = (e) => {
      if (e.data.pluginMessage) {
        setSettings(e.data.pluginMessage);
      }
    };
    requestSettingsFromStorage(parent);
  }, []);

  return (
    <div className="wrapper">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content">
        {activeTab === 'export' && <Export settings={settings}/>}
        {activeTab === 'tools' && <Tools />}
        {activeTab === 'settings' && <Settings settings={settings} setSettings={setSettings} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
