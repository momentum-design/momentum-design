// AI-Assisted
import type { McpToolResponse } from '../common';

export interface ToolDefinition {
  name: string;
  description: string;
  inputSchema: {
    type: 'object';
    properties: Record<string, unknown>;
    required?: string[];
    additionalProperties?: boolean;
  };
}

export interface ComponentsMcpTool {
  definition: ToolDefinition;
  handler: (args: Record<string, unknown>) => McpToolResponse | Promise<McpToolResponse>;
}
// End AI-Assisted
