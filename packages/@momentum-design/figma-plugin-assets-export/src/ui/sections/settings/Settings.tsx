/* eslint-disable no-restricted-globals */
import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import { Button, Row, SectionHeader } from '../../components';
import TextArea from '../../components/TextArea/TextArea';
import { restoreSettings, saveSettingsToStorage } from '../../utils/plugin';
import './Settings.css';

interface Props {
  settings: any;
  setSettings: any;
}
function Settings({ settings, setSettings }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (textareaRef.current?.value) {
      const newSettings = JSON.parse(textareaRef.current.value);
      setSettings(newSettings);
      saveSettingsToStorage(parent, newSettings);
    }
    setIsEditing(false);
  };

  const handleRestore = () => {
    restoreSettings(parent);
  };

  return (
    <div className="settings">
      <Row>
        <SectionHeader>Current settings</SectionHeader>
      </Row>
      <div className="settings-area">
        <TextArea disabled={!isEditing} ref={textareaRef} text={settings} />
      </div>
      <Row>
        <Button className="action-button" disabled={isEditing} onClick={handleEdit}>
          Edit
        </Button>
        <Button className="action-button" disabled={!isEditing} onClick={handleSave}>
          Save
        </Button>
        <Button
          className={classnames('action-button', 'right-align-button')}
          onClick={handleRestore}
        >
          Restore default settings
        </Button>
      </Row>
    </div>
  );
}

export default Settings;
