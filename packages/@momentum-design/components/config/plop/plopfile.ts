import { NodePlopAPI } from 'plop';
import { ComponentGenerator } from './generators/component';

export default (plop: NodePlopAPI) => {
  plop.setGenerator(ComponentGenerator.name, ComponentGenerator.generator);
};
