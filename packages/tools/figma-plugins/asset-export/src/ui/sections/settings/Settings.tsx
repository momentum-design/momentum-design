/* eslint-disable no-restricted-globals */
import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import { Button, Row, SectionHeader } from '../../components';
import TextArea from '../../components/TextArea/TextArea';
import { saveSettingsToStorage } from '../../utils/plugin';
import './Settings.css';
import { CONSTANTS as SETTINGS_CONSTANTS } from '../../../shared/settings-constants';
import type { Settings as SettingsType } from '../../../shared/types';
import Help from '../../components/Help/Help';
import HelpContent from './HelpContent';

interface Props {
  settings: any;
  setSettings: any;
  storage: any;
  setStorage: any;
}
function Settings({ settings, setSettings, storage }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const settingsTextareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    try {
      if (settingsTextareaRef.current?.value) {
        const settings: SettingsType = JSON.parse(settingsTextareaRef.current.value);
        setSettings(settings);
        saveSettingsToStorage(parent, settings);

        setIsEditing(false);
        setError(null);
      }
    } catch (e) {
      setError(e as Error);
      setIsEditing(false);
      throw e;
    }
  };

  const handleRestore = () => {
    const initialSettings = SETTINGS_CONSTANTS.INITIAL_SETTINGS;
    setSettings(initialSettings);
    saveSettingsToStorage(parent, initialSettings);
  };

  return (
    <div className="settings">
      <Row className="settings-row">
        <SectionHeader>Current settings:</SectionHeader>
        <Help tooltipContent={<HelpContent />}></Help>
      </Row>
      <div className="settings-area">
        <TextArea disabled={!isEditing} ref={settingsTextareaRef} value={settings} />
      </div>
      <Row>
        <Button className="action-button" disabled={isEditing} onClick={handleEdit}>
          Edit
        </Button>
        <Button className="action-button" disabled={!isEditing} onClick={handleSave}>
          Save
        </Button>
        <Button
          disabled={storage === 'inprogress'}
          className={classnames('action-button', 'right-align-button')}
          onClick={handleRestore}
        >
          Restore default settings
        </Button>
      </Row>
      {error?.message ? (<Row><p>{error.message}</p></Row>) : null}
    </div>
  );
}

export default Settings;
