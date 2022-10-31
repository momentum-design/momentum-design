import { NodePlopAPI } from 'plop';
import { WorkspaceGenerator } from './generators/workspace';

export default (plop: NodePlopAPI) => {
  plop.setGenerator(WorkspaceGenerator.name, WorkspaceGenerator.generator);
};
