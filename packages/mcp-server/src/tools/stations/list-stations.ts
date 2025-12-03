// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'dbahn-stations-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import DbahnStations from 'dbahn-stations';

export const metadata: Metadata = {
  resource: 'stations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/stations',
};

export const tool: Tool = {
  name: 'list_stations',
  description:
    "Get a QueryResult object containing station objects from the database applying to the parameters described below.\n\nQueryResult is a container providing the following information about the query result.\n  1. the total number of hits\n  2. the maximum number of hits to be returned in that QueryResult object\n  3. the offset of the first hit returned in that QueryResult object with respect to all hits returned by the query\n  4. the result objects\n\nThe parameters described below work as filters to reduce the number of hits returned. Some of these parameters must be used only once, others are allowed to be used multiple times. Valid parameters that are allowed to be used only once are _offset_, _limit_ and _logicaloperator_.\n\nAll other parameters described below may be used multiple times.\n\nIf a parameter is given more than once, the result will contain all hits that match all given parameter values.\n\nE.g. _federalstate=berlin&federalstate=saarland_ returns all stations in Berlin and Saarland.\n\nIf more than one filter criterion is used at the same time, the different filter criteria are interpreted as if they are combined by a logical AND operator, unless the parameter _logicaloperator_ is set to _or_.\n\nE.g. _category=1-2&federalstate=hamburg_ returns all stations in Hamburg having category 1 or 2.\n\n_category=1-2&federalstate=hamburg&federalsate=hessen_ returns all stations in Hamburg and Hessen having category 1 or 2, while\n\n_searchstring=berlin*&federalstate=hamburg&federalsate=hessen&logicaloperator=or_ will return all stations with a name starting with 'berlin' as well as all stations in Hamburg and Hessen.\n\nIf no 'limit' parameter is given, the number of hits (stations) is set to its maximum value of 10000.\n\nTo specify parameter values containing German umlauts, the following encoding has to be used\n  * ä  => %C3%A4\n  * ö  => %C3%B6\n  * ü  => %C3%BC\n  * Ä  => %C3%84\n  * Ö  => %C3%96\n  * Ü  => %C3%9C\n  * ß  => %C3%9F\n",
  inputSchema: {
    type: 'object',
    properties: {
      category: {
        type: 'string',
        description:
          'Filter by station category. Category ranges are supported as well as lists of categories (e.g. category=2-4 or category=1,3-5). The category must be between 1 and 7 otherwise a parameter exception is returned.',
      },
      eva: {
        type: 'integer',
        description: 'Filter by EVA number. Wildcards are not allowed here.',
      },
      federalstate: {
        type: 'string',
        description:
          'Filter by German federal state. Lists of federal states are also supported (e.g. federalstate=bayern,hamburg). Wildcards are not allowed here.',
      },
      limit: {
        type: 'integer',
        description:
          "The maximum number of hits to be returned by that query. If 'limit' is set greater than 10000, it will be reset to 10000 internally and only 10000 hits will be returned.",
      },
      logicaloperator: {
        type: 'string',
        description:
          'Logical operator to combine query parameters (default=AND). See above for further details.  Allowed values: or, and',
      },
      offset: {
        type: 'integer',
        description:
          'Offset of the first hit returned in the QueryResult object with respect to all hits returned by the query. If this parameter is omitted, it will be set to 0 internally.',
      },
      ril: {
        type: 'string',
        description: 'Filter by Ril100-identifier. Wildcards are not allowed here.',
      },
      searchstring: {
        type: 'string',
        description:
          'String to search for a station name. The wildcards * (indicating an arbitrary number of characters) and ? (indicating one single character) can be used in the search pattern. A comma separated list of station names is also supported (e.g. searchstring=hamburg*,berlin*).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: DbahnStations, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.stations.list(body));
  } catch (error) {
    if (error instanceof DbahnStations.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
