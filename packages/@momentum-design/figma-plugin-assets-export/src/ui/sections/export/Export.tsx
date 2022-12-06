/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';

import './Export.css';
import { Hint, FormRow, Select, Button, Option } from '../../components';
import type { AssetsType } from '../../types';

function Export() {
  const [selectedAssetType, setSelectedAssetType] = useState<AssetsType | undefined>(undefined);

  const handleClick = () => {
    parent.postMessage({ pluginMessage: { type: 'export' } }, '*');
  };

  return (
    <div className="form">
      <FormRow>
        <p className="assets-type-header">Assets type</p>
      </FormRow>
      <FormRow>
        <Select name="assets-type" setSelectValue={setSelectedAssetType}>
          <Option value="" disabled selected>Select assets type</Option>
          <Option value="icons">Icons</Option>
          <Option value="illustrations">Illustrations</Option>
        </Select>
      </FormRow>
      <FormRow></FormRow>
      <FormRow>
        <Button disabled={selectedAssetType === undefined} onClick={handleClick}>Export assets</Button>
      </FormRow>
      <FormRow>
        {selectedAssetType && <Hint assetType={selectedAssetType}/>}
      </FormRow>
    </div>
  );
}
export default Export;
