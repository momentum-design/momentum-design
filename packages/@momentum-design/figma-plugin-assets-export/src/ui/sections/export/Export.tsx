/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';

import './Export.css';
import { Hint, Row, Select, Option, TextInput, Label } from '../../components';
import type { ExportStatus } from '../../types';
import List from '../../components/List/List';
import type { AssetChunks, AssetSetting, Settings } from '../../../shared/types';
import ExportButton from './ExportButton';
import { useExportForm } from './hooks/useExportForm';
import { useExportFlow } from './hooks/useExportFlow';

interface Props {
  settings: Settings;
  assetChunks: AssetChunks;
  exportStatus: ExportStatus;
  setExportStatus: React.Dispatch<React.SetStateAction<ExportStatus>>;
}

function Export({ settings, assetChunks, exportStatus, setExportStatus }: Props) {
  const [selectedAssetSetting, setSelectedAssetSetting] = useState<AssetSetting | undefined>(undefined);

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
    setSelectedAssetSetting(settings?.assets[id]);
  };

  return (
    <List>
      <Row>
        <Label htmlFor='assets-type'>
        Type:
        </Label>
        <Select name="assets-type" id='assets-type' className="asset-select" setSelectValue={handleSelectChange}>
          <Option value="" disabled selected>
            Select assets type
          </Option>
          {settings && Object.entries(settings.assets).map(([id, assetSetting]) => (
            <Option value={id}>{assetSetting.name}</Option>
          ))}
        </Select>
      </Row>
      <Row type='small'/>
      <Row>
        <Label htmlFor='title'>
        Title:
        </Label>
        <TextInput name="title" id="title" onChange={handleTitleChange} value={title}></TextInput>
      </Row>
      <Row type='small'/>
      <Row>
        <Label htmlFor='branch'>
        Branch:
        </Label>
        <TextInput id='branch' onChange={handleBranchChange} value={branch}></TextInput>
      </Row>
      <Row type='small'/>
      <Row>
        <Label htmlFor='message'>
        Message:
        </Label>
        <TextInput id='message' onChange={handleMessageChange} value={message}></TextInput>
      </Row>
      <Row type='small'/>
      <Row>
        <ExportButton
          exportStatus={exportStatus}
          selectedAssetSetting={selectedAssetSetting}
          assetChunks={assetChunks}
          gitConfig={gitConfig}
          handleClick={onExportStart}
          onExportComplete={onExportComplete}
          onExportFailure={onExportFailure}
        ></ExportButton>
      </Row>
      <Row>
        <p>
          {exportStatus && `${exportStatus}:`}
          {exportStatus === 'complete' ? (
            <a href={exportMeta?.data?.url} target="_blank">
              Pull Request
            </a>
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
