import convertMomentumUiUsageTool from './convertMomentumUiUsage';
import generateComponentCodeTool from './generateComponentCode';
import getAssetInfoTool from './getAssetInfo';
import getColorTokenTool from './getColorToken';
import getComponentApiTool from './getComponentApi';
import getComponentDocsTool from './getComponentDocs';
import getComponentExamplesTool from './getComponentExamples';
import listAssetsTool from './listAssets';
import listColorTokensTool from './listColorTokens';
import listComponentsTool from './listComponents';
import migrateIconNameTool from './migrateIconName';
import searchAssetsTool from './searchAssets';
import searchColorTokensTool from './searchColorTokens';
import searchComponentsTool from './searchComponents';
import validateComponentUsageTool from './validateComponentUsage';

const tools = [
  listComponentsTool,
  searchComponentsTool,
  getComponentDocsTool,
  getComponentApiTool,
  getComponentExamplesTool,
  generateComponentCodeTool,
  validateComponentUsageTool,
  listAssetsTool,
  searchAssetsTool,
  getAssetInfoTool,
  listColorTokensTool,
  searchColorTokensTool,
  getColorTokenTool,
  migrateIconNameTool,
  convertMomentumUiUsageTool,
];

export default tools;
