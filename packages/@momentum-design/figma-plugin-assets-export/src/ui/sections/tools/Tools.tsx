/* eslint-disable no-restricted-globals */
import React, { useEffect, useState, useMemo } from 'react';
import classnames from 'classnames';
import { Button, Row, RunIcon } from '../../components';
import List from '../../components/List/List';
import { gTagDetector, linkRedirect } from '../../utils/plugin';
import { AssetType } from '../../../shared/action-constants';
import './Tools.css';

interface Props {
  settings: any;
  selectedAssetSettingId: any;
  gTagAsset: any;
  setGTagAsset: any;
  gTagAssetUpdate: any
  setGTagAssetUpdate: any
}

function Tools({ settings, selectedAssetSettingId, gTagAsset, setGTagAsset,
  gTagAssetUpdate, setGTagAssetUpdate }: Props) {
  const gTag = '<g> Detector';
  const [show, setShow] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(true);
  const [gTagData, setGTagData] = useState<any[]>([]);
  const selectedAssetSetting = useMemo(() => settings?.assets[selectedAssetSettingId] || undefined, [settings]);

  useEffect(() => {
    setGTagData(gTagAsset);
    if (show) {
      setLoader(false);
    }
  }, [gTagAssetUpdate]);
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        gTagDetector(parent, selectedAssetSetting);
      }, 50);
    }
  }, [show]);

  const tagClick = () => {
    setShow(true);
  };

  const linkClick = (tag: string) => {
    linkRedirect(parent, selectedAssetSetting, tag);
  };

  const modalClose = () => {
    setShow(false);
    setLoader(true);
    setGTagAsset([]);
    setGTagAssetUpdate(false);
  };

  return (
    <div className="tools">
      <List>
        <Row type="large" className="tools-row">
          <p className={classnames('bold-text', 'disabled-text')}>Name verification (WIP)</p>
          <Button className="right-aligned-button" disabled>
            <RunIcon disabled />
          </Button>
        </Row>
        <Row type="large" className="tools-row">
          <p className={classnames('bold-text', 'disabled-text')}>Duplication check (WIP)</p>
          <Button className="right-aligned-button" disabled>
            <RunIcon disabled />
          </Button>
        </Row>
        <Row type="large" className="tools-row">
          <p className={classnames('bold-text', selectedAssetSettingId !== AssetType.Icons ? 'disabled-text' : '')}>
            {gTag}
          </p>
          <Button
            className="right-aligned-button"
            onClick={tagClick}
            disabled={selectedAssetSettingId !== AssetType.Icons}
          >
            <RunIcon disabled={selectedAssetSettingId !== AssetType.Icons} />
          </Button>
        </Row>
      </List>
      {show && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={modalClose}>
              &times;
            </span>
            <p className="bold">Icons List</p>
            {!loader && gTagData?.length > 0 ? (
              gTagData.map((tag, index) => (
                <a key={index} className="link" onClick={() => linkClick(tag)}>
                  {tag}
                </a>
              ))
            ) : (<p>{loader ? 'Loading...' : 'No tags detected.'}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Tools;
