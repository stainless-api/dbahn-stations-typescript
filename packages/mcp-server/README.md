# Dbahn Stations TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export DBAHN_STATIONS_CLIENT_ID="My Client ID"
export DBAHN_STATIONS_CLIENT_SECRET="My Client Secret"
npx -y dbahn-stations-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "dbahn_stations_api": {
      "command": "npx",
      "args": ["-y", "dbahn-stations-mcp"],
      "env": {
        "DBAHN_STATIONS_CLIENT_ID": "My Client ID",
        "DBAHN_STATIONS_CLIENT_SECRET": "My Client Secret"
      }
    }
  }
}
```

### Cursor

If you use Cursor, you can install the MCP server by using the button below. You will need to set your environment variables
in Cursor's `mcp.json`, which can be found in Cursor Settings > Tools & MCP > New MCP Server.

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=dbahn-stations-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImRiYWhuLXN0YXRpb25zLW1jcCJdLCJlbnYiOnsiREJBSE5fU1RBVElPTlNfQ0xJRU5UX0lEIjoiU2V0IHlvdXIgREJBSE5fU1RBVElPTlNfQ0xJRU5UX0lEIGhlcmUuIiwiREJBSE5fU1RBVElPTlNfQ0xJRU5UX1NFQ1JFVCI6IlNldCB5b3VyIERCQUhOX1NUQVRJT05TX0NMSUVOVF9TRUNSRVQgaGVyZS4ifX0)

### VS Code

If you use MCP, you can install the MCP server by clicking the link below. You will need to set your environment variables
in VS Code's `mcp.json`, which can be found via Command Palette > MCP: Open User Configuration.

[Open VS Code](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22dbahn-stations-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22dbahn-stations-mcp%22%5D%2C%22env%22%3A%7B%22DBAHN_STATIONS_CLIENT_ID%22%3A%22Set%20your%20DBAHN_STATIONS_CLIENT_ID%20here.%22%2C%22DBAHN_STATIONS_CLIENT_SECRET%22%3A%22Set%20your%20DBAHN_STATIONS_CLIENT_SECRET%20here.%22%7D%7D)

### Claude Code

If you use Claude Code, you can install the MCP server by running the command below in your terminal. You will need to set your
environment variables in Claude Code's `.claude.json`, which can be found in your home directory.

```
claude mcp add --transport stdio dbahn_stations_api --env DBAHN_STATIONS_CLIENT_ID="Your DBAHN_STATIONS_CLIENT_ID here." DBAHN_STATIONS_CLIENT_SECRET="Your DBAHN_STATIONS_CLIENT_SECRET here." -- npx -y dbahn-stations-mcp
```

## Code Mode

This MCP server is built on the "Code Mode" tool scheme. In this MCP Server,
your agent will write code against the TypeScript SDK, which will then be executed in an
isolated sandbox. To accomplish this, the server will expose two tools to your agent:

- The first tool is a docs search tool, which can be used to generically query for
  documentation about your API/SDK.

- The second tool is a code tool, where the agent can write code against the TypeScript SDK.
  The code will be executed in a sandbox environment without web or filesystem access. Then,
  anything the code returns or prints will be returned to the agent as the result of the
  tool call.

Using this scheme, agents are capable of performing very complex tasks deterministically
and repeatably.

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
