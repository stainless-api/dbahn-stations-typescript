// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from 'dbahn-stations';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  const clientID =
    Array.isArray(req.headers['db-client-id']) ? req.headers['db-client-id'][0] : req.headers['db-client-id'];
  const clientSecret =
    Array.isArray(req.headers['db-api-key']) ? req.headers['db-api-key'][0] : req.headers['db-api-key'];
  return { clientID, clientSecret };
};
