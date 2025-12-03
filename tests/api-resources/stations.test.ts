// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DbahnStations from 'dbahn-stations';

const client = new DbahnStations({
  clientID: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource stations', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.stations.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.stations.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.stations.list(
        {
          category: 'category',
          eva: 0,
          federalstate: 'federalstate',
          limit: 0,
          logicaloperator: 'logicaloperator',
          offset: 0,
          ril: 'ril',
          searchstring: 'searchstring',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DbahnStations.NotFoundError);
  });
});
