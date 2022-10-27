import { PromptQuestion } from 'node-plop';
import { PROMPT_TYPE } from '../constants';

export const prompt = (name: string, message: string, type: PROMPT_TYPE = PROMPT_TYPE.INPUT): PromptQuestion => ({
  type,
  name,
  message,
});
