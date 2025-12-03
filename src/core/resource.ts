// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { DbahnStations } from '../client';

export abstract class APIResource {
  protected _client: DbahnStations;

  constructor(client: DbahnStations) {
    this._client = client;
  }
}
