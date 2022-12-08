/* eslint-disable no-restricted-globals */
import React, { useEffect, useRef, useState } from 'react';

import './Export.css';
import { Hint, Row, Select, Button, Option, SectionHeader, TextInput } from '../../components';
import type { AssetsType } from '../../types';
import List from '../../components/List/List';
import { prCreated, exportData } from '../../utils/plugin';
import Github from '../../models/github';

interface Props {
  settings: any;
  assets: any;
  exporting: any;
  setExporting: any;
}

function Export({ settings, assets, exporting, setExporting }: Props) {
  const [selectedAssetType, setSelectedAssetType] = useState<AssetsType | undefined>(undefined);
  const [github, setGithub] = useState<Github | null>(null);
  const [exportError, setExportError] = useState<Error>();
  const [exportMeta, setExportMeta] = useState<any>();
  const titleInputRef = useRef<HTMLInputElement | null>(null);
  const branchInputRef = useRef<HTMLInputElement | null>(null);
  const messageInputRef = useRef<HTMLInputElement | null>(null);
  const [title, setTitle] = useState(`Asset Automation ${new Date().toISOString()}`);
  const [branch, setBranch] = useState(`automation-${new Date().toISOString().replace(/\.|:/g, '-')}`);
  const [message, setMessage] = useState(`feat(assets): Asset Automation ${new Date().toISOString()}`);

  const handleTitleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setTitle(event.currentTarget.value);
  };

  const handleBranchChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setBranch(event.currentTarget.value);
  };

  const handleMessageChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setMessage(event.currentTarget.value);
  };

  useEffect(() => {
    if (settings?.git) {
      setGithub(new Github(settings.git));
    }
    if (github) {
      github.config.assetTypePath = selectedAssetType;
      github.config.prTitle = title;
      github.config.prMessage = message;
      github.config.gitBranch = branch;
    }
  }, [settings, selectedAssetType, title]);

  useEffect(() => {
    if (exporting === 'inprogress') {
      if (github) {
        github.data = assets;
        setExporting('complete');
        github.pullRequest().then((data) => {
          setExporting('complete');
          prCreated(parent, data);
          setExportMeta(data);
        }).catch((e) => {
          setExporting('failure');
          setExportError(e);
        });
      }
    }
  }, [exporting]);

  const startProgress = () => {
    setExportMeta(null);
    setExportError(undefined);
    setExporting('clicked');
  };

  const handleClick = () => {
    startProgress();
    exportData(parent, settings);
  };

  return (
    <List>
      <Row>
        <SectionHeader>Assets type</SectionHeader>
      </Row>
      <Row>
        <Select name="assets-type" className="asset-select" setSelectValue={setSelectedAssetType}>
          <Option value="" disabled selected>Select assets type</Option>
          <Option value="icons/src">Icons</Option>
          <Option value="illustrations/src">Illustrations</Option>
        </Select>
      </Row>
      <Row>
        <label>
            Title
          <TextInput
            name="title"
            onChange={(e) => handleTitleChange(e)}
            value={title}
            ref={titleInputRef}></TextInput>
        </label>

      </Row>
      <Row />
      <Row>
        <label>
          Branch
          <TextInput
            onChange={(e) => handleBranchChange(e)}
            value={branch}
            ref={branchInputRef}
          ></TextInput>
        </label>
      </Row>
      <Row />
      <Row>
        <label>
          Message
          <TextInput
            onChange={(e) => handleMessageChange(e)}
            value={message}
            ref={messageInputRef}></TextInput>
        </label>
      </Row>
      <Row />
      <Row>
        <Button
          disabled={exporting === 'inprogress' || exporting === 'clicked' || selectedAssetType === undefined}
          onClick={handleClick}>
            Export
        </Button>
      </Row>
      <Row>
        <p>{exporting && `${exporting}:`}
          {exporting === 'complete' ? <a href={exportMeta?.data?.url} target="_blank">Pull Request</a> : ''}</p>
        {exportError ? <p>Error: {exportError.message}</p> : null}
      </Row>
      <Row className="align-bottom-center">
        {selectedAssetType && <Hint assetType={selectedAssetType}/>}
      </Row>
    </List>
  );
}
export default Export;
