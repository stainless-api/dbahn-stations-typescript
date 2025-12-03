// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as StationsAPI from './stations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Szentralen extends APIResource {
  /**
   * Get a QueryResult object containing one SZentralen object specified by its id.
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<SzentraleQuery> {
    return this._client.get(path`/szentralen/${id}`, options);
  }

  /**
   * Get a QueryResult object containing SZentralen objects from the database
   * applying to the parameters described below. QueryResult is a container providing
   * the following information about the query result.
   *
   * 1. the total number of hits
   * 2. the maximum number of hits to be returned in that QueryResult object
   * 3. the offset of the first hit returned in that QueryResult object with respect
   *    to all hits returned by the query
   * 4. the result objects
   */
  list(
    query: SzentralenListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SzentraleQuery> {
    return this._client.get('/szentralen', { query, ...options });
  }
}

/**
 * 3-S-Zentralen are 7/24 hours operating centers for german railway stations
 */
export interface Szentrale {
  address?: StationsAPI.Address;

  /**
   * email adress of the 3-S-Zentrale (no longer supported!)
   */
  email?: string;

  /**
   * internal fax number
   */
  internalFaxNumber?: string;

  /**
   * internal phone number
   */
  internalPhoneNumber?: string;

  /**
   * mobile phone number (no longer supported!)
   */
  mobilePhoneNumber?: string;

  /**
   * unique identifier of 3SZentrale
   */
  name?: string;

  /**
   * unique identifier for SZentrale
   */
  number?: number;

  /**
   * public fax number
   */
  publicFaxNumber?: string;

  publicPhoneNumber?: string;
}

export interface SzentraleQuery {
  /**
   * maximum number of result objects to be returned
   */
  limit?: number;

  /**
   * offset of the first result object with respect to the total number of hits
   * produced by the query
   */
  offset?: number;

  /**
   * result objects produced by that query
   */
  result?: Array<Szentrale>;

  /**
   * total number of hits produced by that query
   */
  total?: number;
}

export interface SzentralenListParams {
  /**
   * The maximum number of hits to be returned by that query. If 'limit' is set
   * greater than 10000, it will be reset to 10000 internally and only 100 hits will
   * be returned.
   */
  limit?: number;

  /**
   * Offset of the first hit returned in the QueryResult object with respect to all
   * hits returned by the query. If this parameter is omitted, it will be set to 0
   * internally.
   */
  offset?: number;
}

export declare namespace Szentralen {
  export {
    type Szentrale as Szentrale,
    type SzentraleQuery as SzentraleQuery,
    type SzentralenListParams as SzentralenListParams,
  };
}
