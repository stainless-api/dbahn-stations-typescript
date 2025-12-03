# Dbahn Stations TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:stainless-sdks/dbahn-stations-typescript.git
cd dbahn-stations-typescript
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export DBAHN_STATIONS_CLIENT_ID="My Client ID"
export DBAHN_STATIONS_CLIENT_SECRET="My Client Secret"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npx -y dbahn-stations-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "dbahn_stations_api": {
      "command": "node",
      "args": [
        "/path/to/local/dbahn-stations-typescript/packages/mcp-server",
        "--client=claude",
        "--tools=all"
      ],
      "env": {
        "DBAHN_STATIONS_CLIENT_ID": "My Client ID",
        "DBAHN_STATIONS_CLIENT_SECRET": "My Client Secret"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are three ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API
3. Exposing a docs search tool and a code execution tool, allowing the client to write code to be executed against the TypeScript client

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Code execution

If you specify `--tools=code` to the MCP server, it will expose just two tools:

- `search_docs` - Searches the API documentation and returns a list of markdown results
- `execute` - Runs code against the TypeScript client

This allows the LLM to implement more complex logic by chaining together many API calls without loading
intermediary results into its context window.

The code execution itself happens in a Deno sandbox that has network access only to the base URL for the API.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| -------------- | ------------------------ | --------------- |
| `DB-Client-ID` | `clientID` | ClientID |
| `DB-Api-Key` | `clientSecret` | ClientSecret |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "dbahn_stations_api": {
      "url": "http://localhost:3000",
      "headers": {
        "DB-Client-ID": "My Client ID"
      }
    }
  }
}
```

The command-line arguments for filtering tools and specifying clients can also be used as query parameters in the URL.
For example, to exclude specific tools while including others, use the URL:

```
http://localhost:3000?resource=cards&resource=accounts&no_tool=create_cards
```

Or, to configure for the Cursor client, with a custom max tool name length, use the URL:

```
http://localhost:3000?client=cursor&capability=tool-name-length%3D40
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "dbahn-stations-mcp/server";

// import a specific tool
import retrieveStations from "dbahn-stations-mcp/tools/stations/retrieve-stations";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [retrieveStations, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `stations`:

- `retrieve_stations` (`read`): Get a QueryResult object containing one station object specified by its id.
- `list_stations` (`read`): Get a QueryResult object containing station objects from the database applying to the parameters described below.

  QueryResult is a container providing the following information about the query result.

  1. the total number of hits
  2. the maximum number of hits to be returned in that QueryResult object
  3. the offset of the first hit returned in that QueryResult object with respect to all hits returned by the query
  4. the result objects

  The parameters described below work as filters to reduce the number of hits returned. Some of these parameters must be used only once, others are allowed to be used multiple times. Valid parameters that are allowed to be used only once are _offset_, _limit_ and _logicaloperator_.

  All other parameters described below may be used multiple times.

  If a parameter is given more than once, the result will contain all hits that match all given parameter values.

  E.g. _federalstate=berlin&federalstate=saarland_ returns all stations in Berlin and Saarland.

  If more than one filter criterion is used at the same time, the different filter criteria are interpreted as if they are combined by a logical AND operator, unless the parameter _logicaloperator_ is set to _or_.

  E.g. _category=1-2&federalstate=hamburg_ returns all stations in Hamburg having category 1 or 2.

  _category=1-2&federalstate=hamburg&federalsate=hessen_ returns all stations in Hamburg and Hessen having category 1 or 2, while

  _searchstring=berlin\*&federalstate=hamburg&federalsate=hessen&logicaloperator=or_ will return all stations with a name starting with 'berlin' as well as all stations in Hamburg and Hessen.

  If no 'limit' parameter is given, the number of hits (stations) is set to its maximum value of 10000.

  To specify parameter values containing German umlauts, the following encoding has to be used

  - ä => %C3%A4
  - ö => %C3%B6
  - ü => %C3%BC
  - Ä => %C3%84
  - Ö => %C3%96
  - Ü => %C3%9C
  - ß => %C3%9F

### Resource `szentralen`:

- `retrieve_szentralen` (`read`): Get a QueryResult object containing one SZentralen object specified by its id.
- `list_szentralen` (`read`): Get a QueryResult object containing SZentralen objects from the database applying to the parameters described below.
  QueryResult is a container providing the following information about the query result.
  1. the total number of hits
  2. the maximum number of hits to be returned in that QueryResult object
  3. the offset of the first hit returned in that QueryResult object with respect to all hits returned by the query
  4. the result objects
