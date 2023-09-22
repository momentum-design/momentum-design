/* eslint-disable no-restricted-globals */
import React, { useMemo } from 'react';

import './Export.css';
import { Hint, Row, Select, Option, TextInput, Label, Link } from '../../components';
import type { ExportStatus } from '../../types';
import List from '../../components/List/List';
import type { AssetChunks, Settings } from '../../../shared/types';
import { CONSTANTS } from '../../../shared/settings-constants';
import ExportButton from './ExportButton';
import { useExportForm } from './hooks/useExportForm';
import { useExportFlow } from './hooks/useExportFlow';

const defaultAssetTypeSetting = Object.values(CONSTANTS.INITIAL_SETTINGS.assets)[0].name;
interface Props {
  selectedAssetSettingId?: string;
  setSelectedAssetSettingId: React.Dispatch<React.SetStateAction<string | undefined>>;
  settings: Settings;
  assetChunks: AssetChunks;
  exportStatus: ExportStatus;
  setExportStatus: React.Dispatch<React.SetStateAction<ExportStatus>>;
}

function Export({
  settings,
  selectedAssetSettingId,
  setSelectedAssetSettingId,
  assetChunks,
  exportStatus,
  setExportStatus,
}: Props) {
  const selectedAssetSetting = useMemo(
    () => selectedAssetSettingId
      ? settings?.assets[selectedAssetSettingId]
      : undefined,
    [selectedAssetSettingId, settings],
  );

  const {
    title,
    branch,
    message,
    gitConfig,
    handleTitleChange,
    handleBranchChange,
    handleMessageChange,
  } = useExportForm(settings.auth, selectedAssetSetting);

  const {
    exportError,
    exportMeta,
    onExportComplete,
    onExportFailure,
    onExportStart,
  } = useExportFlow(
    setExportStatus,
    selectedAssetSetting,
  );

  const handleSelectChange = (id: string) => {
    setSelectedAssetSettingId(id);
    setExportStatus('');
  };

  return (
    <List>
      <Row>
        <Label htmlFor='assets-type'>
          Type:
        </Label>
        <Select
          name="assets-type"
          id='assets-type'
          className="asset-select"
          setSelectValue={handleSelectChange}
          value={selectedAssetSettingId}
          disabled={exportStatus === 'inprogress'}
        >
          <Option value="" disabled selected>
            Select assets type
          </Option>
          {settings && Object.entries(settings.assets).map(([id, assetSetting]) => (
            <Option
              value={id}
              disabled={assetSetting.name.includes(defaultAssetTypeSetting)}
            >
              {assetSetting.name}
            </Option>
          ))}
        </Select>
      </Row>
      <Row type='small' />
      <Row>
        <Label htmlFor='title'>
          Title:
        </Label>
        <TextInput name="title" id="title" onChange={handleTitleChange} value={title}></TextInput>
      </Row>
      <Row type='small' />
      <Row>
        <Label htmlFor='branch'>
          Branch:
        </Label>
        <TextInput id='branch' onChange={handleBranchChange} value={branch}></TextInput>
      </Row>
      <Row type='small' />
      <Row>
        <Label htmlFor='message'>
          Message:
        </Label>
        <TextInput id='message' onChange={handleMessageChange} value={message}></TextInput>
      </Row>
      <Row type='small' />
      <Row>
        <ExportButton
          exportStatus={exportStatus}
          selectedAssetSetting={selectedAssetSetting}
          assetChunks={assetChunks}
          gitConfig={gitConfig}
          handleClick={onExportStart}
          onExportComplete={onExportComplete}
          onExportFailure={onExportFailure}
        />
      </Row>
      <Row style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
        <p>
          {exportStatus && `Status: ${exportStatus}`}
        </p>
        <p>
          {exportStatus === 'complete' ? (
            <Link url={exportMeta?.data?.html_url} target="_blank">
              Pull Request Link
            </Link>
          ) : (
            ''
          )}
        </p>
        {exportError ? <p>Error: {exportError.message}</p> : null}
      </Row>
      <Row className="align-bottom-center">
        {selectedAssetSetting?.description && <Hint description={selectedAssetSetting.description} />}
      </Row>
    </List>
  );
}
export default Export;
