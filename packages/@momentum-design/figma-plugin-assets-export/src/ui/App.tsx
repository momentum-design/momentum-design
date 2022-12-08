import React, { useState } from 'react';
import './App.css';
import { Tabs, Footer } from './components';
import Export from './sections/export/Export';
import Settings from './sections/settings/Settings';
import Tools from './sections/tools/Tools';
import type { TabType } from './types';
import { useStateHandlers } from './hooks/useStateHandlers';
import { useWindowMessage } from './hooks/useWindowMessage';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('export');
  const { settings, setSettings, assets, setAssets, exporting, setExporting, storage, setStorage } = useStateHandlers();

  useWindowMessage(setSettings, setAssets, setExporting, setStorage);
  return (
    <div className="wrapper">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content">
        {activeTab === 'export'
          && <Export settings={settings} assets={assets} exporting={exporting} setExporting={setExporting}/>}
        {activeTab === 'tools' && <Tools />}
        {activeTab === 'settings'
          && <Settings settings={settings} setSettings={setSettings} storage={storage} setStorage={setStorage} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
