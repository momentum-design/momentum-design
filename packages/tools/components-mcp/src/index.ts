#!/usr/bin/env node
// AI-Assisted
/* eslint-disable import/no-unresolved, no-console */
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';

import { CONSTANTS } from './common';
import tools from './tools';
import { errorResponse } from './utils/response';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function createServer(): Server {
  const server = new Server(
    {
      name: CONSTANTS.SERVER_NAME,
      version: CONSTANTS.SERVER_VERSION,
    },
    {
      capabilities: {
        tools: {},
      },
      instructions: [
        'Use this server to discover Momentum Design components, assets, and color tokens, inspect documented APIs,',
        'generate framework-specific examples, validate component usage, find asset usage snippets,',
        'and plan migrations from Momentum UI patterns.',
        'Prefer get_component_api when exact property values, defaults, slots, events,',
        'CSS parts, or accessibility rules are needed.',
        'Prefer get_asset_info when exact icon, illustration, animation, or brand visual names are needed.',
        'Prefer get_color_token for exact CSS variables and migrate_icon_name for icon migration suggestions.',
      ].join(' '),
    },
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: tools.map(tool => tool.definition),
  }));

  server.setRequestHandler(CallToolRequestSchema, async request => {
    const tool = tools.find(item => item.definition.name === request.params.name);

    if (!tool) {
      return errorResponse(`Unknown tool: ${request.params.name}`);
    }

    try {
      return await tool.handler(isRecord(request.params.arguments) ? request.params.arguments : {});
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);

      return errorResponse(`Error executing tool "${request.params.name}": ${message}`);
    }
  });

  return server;
}

async function main(): Promise<void> {
  const server = createServer();
  const transport = new StdioServerTransport();

  await server.connect(transport);
  console.error(`${CONSTANTS.SERVER_NAME} started`);
  console.error(`Available tools: ${tools.map(tool => tool.definition.name).join(', ')}`);
}

if (require.main === module) {
  main().catch(error => {
    console.error('Fatal error in components MCP server:', error);
    process.exit(1);
  });
}

export { createServer };
/* eslint-enable import/no-unresolved, no-console */
// End AI-Assisted
