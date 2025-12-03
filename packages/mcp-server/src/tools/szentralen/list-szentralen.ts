// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'dbahn-stations-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'dbahn-stations-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DbahnStations from 'dbahn-stations';

export const metadata: Metadata = {
  resource: 'szentralen',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/szentralen',
};

export const tool: Tool = {
  name: 'list_szentralen',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a QueryResult object containing SZentralen objects from the database applying to the parameters described below.\nQueryResult is a container providing the following information about the query result.\n  1. the total number of hits\n  2. the maximum number of hits to be returned in that QueryResult object\n  3. the offset of the first hit returned in that QueryResult object with respect to all hits returned by the query\n  4. the result objects\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/szentrale_query',\n  $defs: {\n    szentrale_query: {\n      type: 'object',\n      properties: {\n        limit: {\n          type: 'integer',\n          description: 'maximum number of result objects to be returned'\n        },\n        offset: {\n          type: 'integer',\n          description: 'offset of the first result object with respect to the total number of hits produced by the query'\n        },\n        result: {\n          type: 'array',\n          description: 'result objects produced by that query',\n          items: {\n            $ref: '#/$defs/szentrale'\n          }\n        },\n        total: {\n          type: 'integer',\n          description: 'total number of hits produced by that query'\n        }\n      }\n    },\n    szentrale: {\n      type: 'object',\n      description: '3-S-Zentralen are 7/24 hours operating centers for german railway stations',\n      properties: {\n        address: {\n          $ref: '#/$defs/address'\n        },\n        email: {\n          type: 'string',\n          description: 'email adress of the 3-S-Zentrale (no longer supported!)'\n        },\n        internalFaxNumber: {\n          type: 'string',\n          description: 'internal fax number'\n        },\n        internalPhoneNumber: {\n          type: 'string',\n          description: 'internal phone number'\n        },\n        mobilePhoneNumber: {\n          type: 'string',\n          description: 'mobile phone number (no longer supported!)'\n        },\n        name: {\n          type: 'string',\n          description: 'unique identifier of 3SZentrale'\n        },\n        number: {\n          type: 'integer',\n          description: 'unique identifier for SZentrale'\n        },\n        publicFaxNumber: {\n          type: 'string',\n          description: 'public fax number'\n        },\n        publicPhoneNumber: {\n          type: 'string'\n        }\n      }\n    },\n    address: {\n      type: 'object',\n      properties: {\n        city: {\n          type: 'string'\n        },\n        houseNumber: {\n          type: 'string'\n        },\n        street: {\n          type: 'string'\n        },\n        zipcode: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description:
          "The maximum number of hits to be returned by that query. If 'limit' is set greater than 10000, it will be reset to 10000 internally and only 100 hits will be returned.",
      },
      offset: {
        type: 'integer',
        description:
          'Offset of the first hit returned in the QueryResult object with respect to all hits returned by the query. If this parameter is omitted, it will be set to 0 internally.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DbahnStations, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.szentralen.list(body)));
  } catch (error) {
    if (error instanceof DbahnStations.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
