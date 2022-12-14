import React from 'react';
import type { TabType } from '../../types';
import Tab from './Tab';

import './Tabs.css';

interface Props {
    activeTab: TabType;
    setActiveTab: React.Dispatch<React.SetStateAction<TabType>>
}

// TODO: build proper tabs component to allow for more tabs to be passed in
function Tabs({ activeTab, setActiveTab }: Props) {
  return <div className="tabs">
    <Tab handleClick={() => setActiveTab('export')} active={activeTab === 'export'}>Export</Tab>
    <Tab handleClick={() => setActiveTab('tools')} active={activeTab === 'tools'}>Tools</Tab>
    <Tab handleClick={() => setActiveTab('settings')} active={activeTab === 'settings'}>Settings</Tab>
  </div>;
}

export default Tabs;
