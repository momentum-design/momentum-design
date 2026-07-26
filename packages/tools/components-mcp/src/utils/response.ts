// AI-Assisted
import type { McpToolResponse } from '../common';

function textResponse(text: string): McpToolResponse {
  return {
    content: [
      {
        type: 'text',
        text,
      },
    ],
  };
}

function errorResponse(message: string): McpToolResponse {
  return {
    ...textResponse(message),
    isError: true,
  };
}

export { errorResponse, textResponse };
// End AI-Assisted
