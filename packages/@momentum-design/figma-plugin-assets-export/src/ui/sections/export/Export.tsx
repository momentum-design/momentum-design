/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';

import './Export.css';
import { Hint, Row, Select, Option, SectionHeader, TextInput } from '../../components';
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
  } = useExportForm(selectedAssetSetting);

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
        <SectionHeader>Assets type</SectionHeader>
      </Row>
      <Row>
        <Select name="assets-type" className="asset-select" setSelectValue={handleSelectChange}>
          <Option value="" disabled selected>
            Select assets type
          </Option>
          {settings && Object.entries(settings.assets).map(([id, assetSetting]) => (
            <Option value={id}>{assetSetting.name}</Option>
          ))}
        </Select>
      </Row>
      <Row>
        <label>
          Title
          <TextInput name="title" onChange={handleTitleChange} value={title}></TextInput>
        </label>
      </Row>
      <Row />
      <Row>
        <label>
          Branch
          <TextInput onChange={handleBranchChange} value={branch}></TextInput>
        </label>
      </Row>
      <Row />
      <Row>
        <label>
          Message
          <TextInput onChange={handleMessageChange} value={message}></TextInput>
        </label>
      </Row>
      <Row />
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
