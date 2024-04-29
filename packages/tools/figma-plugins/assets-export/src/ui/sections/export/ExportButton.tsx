/* eslint-disable no-restricted-globals */
import React from 'react';
import { Button } from '../../components';
import type { GitSetting } from '../../../shared/types';
import type { ExportStatus } from '../../types';

interface Props {
  exportStatus: ExportStatus;
  gitConfig?: GitSetting;
  handleClick: () => void;
}

function ExportButton({
  exportStatus,
  gitConfig,
  handleClick,
}: Props) {
  return (
    <Button
      disabled={!['Failure', 'Complete', ''].includes(exportStatus) || gitConfig === undefined}
      onClick={handleClick}
    >
      Export
    </Button>
  );
}

export default ExportButton;
