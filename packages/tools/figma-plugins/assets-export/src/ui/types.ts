export type TabType = 'export' | 'tools' | 'settings';

export type ExportStatus =
  | 'Clicked'
  | 'Calculating Changes In Progress'
  | 'Exporting to Github In Progress'
  | 'Failure'
  | 'Complete'
  | '';

export type StorageStatus = 'inprogress' | 'failure' | 'complete' | '';
