// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'dbahn-stations-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DbahnStations from 'dbahn-stations';

export const metadata: Metadata = {
  resource: 'stations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/stations/{id}',
};

export const tool: Tool = {
  name: 'retrieve_stations',
  description: 'Get a QueryResult object containing one station object specified by its id.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DbahnStations, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  try {
    return asTextContentResult(await client.stations.retrieve(id));
  } catch (error) {
    if (error instanceof DbahnStations.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
