/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';

import './Export.css';
import { Hint, Row, Select, Button, Option, SectionHeader } from '../../components';
import type { AssetsType } from '../../types';
import List from '../../components/List/List';
import { exportData } from '../../utils/plugin';

interface Props {
  settings: any;
}
function Export({ settings }: Props) {
  const [selectedAssetType, setSelectedAssetType] = useState<AssetsType | undefined>(undefined);

  const handleClick = () => {
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
          <Option value="icons">Icons</Option>
          <Option value="illustrations">Illustrations</Option>
        </Select>
      </Row>
      <Row>
        <Button disabled={selectedAssetType === undefined} onClick={handleClick}>Export</Button>
      </Row>
      <Row className="align-bottom-center">
        {selectedAssetType && <Hint assetType={selectedAssetType}/>}
      </Row>
    </List>
  );
}
export default Export;
