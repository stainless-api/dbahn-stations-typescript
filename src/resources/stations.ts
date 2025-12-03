// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as StationsAPI from './stations';
import * as SzentralenAPI from './szentralen';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Stations extends APIResource {
  /**
   * Get a QueryResult object containing one station object specified by its id.
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<StationQuery> {
    return this._client.get(path`/stations/${id}`, options);
  }

  /**
   * Get a QueryResult object containing station objects from the database applying
   * to the parameters described below.
   *
   * QueryResult is a container providing the following information about the query
   * result.
   *
   * 1. the total number of hits
   * 2. the maximum number of hits to be returned in that QueryResult object
   * 3. the offset of the first hit returned in that QueryResult object with respect
   *    to all hits returned by the query
   * 4. the result objects
   *
   * The parameters described below work as filters to reduce the number of hits
   * returned. Some of these parameters must be used only once, others are allowed to
   * be used multiple times. Valid parameters that are allowed to be used only once
   * are _offset_, _limit_ and _logicaloperator_.
   *
   * All other parameters described below may be used multiple times.
   *
   * If a parameter is given more than once, the result will contain all hits that
   * match all given parameter values.
   *
   * E.g. _federalstate=berlin&federalstate=saarland_ returns all stations in Berlin
   * and Saarland.
   *
   * If more than one filter criterion is used at the same time, the different filter
   * criteria are interpreted as if they are combined by a logical AND operator,
   * unless the parameter _logicaloperator_ is set to _or_.
   *
   * E.g. _category=1-2&federalstate=hamburg_ returns all stations in Hamburg having
   * category 1 or 2.
   *
   * _category=1-2&federalstate=hamburg&federalsate=hessen_ returns all stations in
   * Hamburg and Hessen having category 1 or 2, while
   *
   * _searchstring=berlin\*&federalstate=hamburg&federalsate=hessen&logicaloperator=or_
   * will return all stations with a name starting with 'berlin' as well as all
   * stations in Hamburg and Hessen.
   *
   * If no 'limit' parameter is given, the number of hits (stations) is set to its
   * maximum value of 10000.
   *
   * To specify parameter values containing German umlauts, the following encoding
   * has to be used
   *
   * - ä => %C3%A4
   * - ö => %C3%B6
   * - ü => %C3%BC
   * - Ä => %C3%84
   * - Ö => %C3%96
   * - Ü => %C3%9C
   * - ß => %C3%9F
   */
  list(query: StationListParams | null | undefined = {}, options?: RequestOptions): APIPromise<StationQuery> {
    return this._client.get('/stations', { query, ...options });
  }
}

export interface Address {
  city?: string;

  houseNumber?: string;

  street?: string;

  zipcode?: string;
}

/**
 * GEOJSON object of type point. By default WGS84 is the coordinate system in
 * GEOJSON.
 */
export interface GeographicPoint {
  /**
   * first value is longitude, second latitude, third altitude (currently not
   * provided)
   */
  coordinates?: Array<number>;

  /**
   * the type of the GEOJSON Object e.g. point. Currently only point coordinates
   * without altitude are provided.
   */
  type?: string;
}

/**
 * period of time from/to
 */
export interface OpeningHours {
  fromTime?: string;

  toTime?: string;
}

/**
 * a weekly schedule
 */
export interface Schedule {
  availability?: Schedule.Availability;
}

export namespace Schedule {
  export interface Availability {
    /**
     * period of time from/to
     */
    friday?: StationsAPI.OpeningHours;

    /**
     * period of time from/to
     */
    holiday?: StationsAPI.OpeningHours;

    /**
     * period of time from/to
     */
    monday?: StationsAPI.OpeningHours;

    /**
     * period of time from/to
     */
    saturday?: StationsAPI.OpeningHours;

    /**
     * period of time from/to
     */
    sunday?: StationsAPI.OpeningHours;

    /**
     * period of time from/to
     */
    thursday?: StationsAPI.OpeningHours;

    /**
     * period of time from/to
     */
    tuesday?: StationsAPI.OpeningHours;

    /**
     * period of time from/to
     */
    wednesday?: StationsAPI.OpeningHours;
  }
}

export interface StationQuery {
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
  result?: Array<StationQuery.Result>;

  /**
   * total number of hits produced by that query
   */
  total?: number;
}

export namespace StationQuery {
  export interface Result {
    /**
     * local public sector entity, responsible for short distance public transport in a
     * specific area
     */
    aufgabentraeger?: Result.Aufgabentraeger;

    /**
     * the stations category (-1...7). Stations with category -1 or 0 are not in
     * production, e.g. planned, saled, without train stops.
     */
    category?: number;

    /**
     * a weekly schedule
     */
    DBinformation?: StationsAPI.Schedule;

    /**
     * station related EVA-Numbers
     */
    evaNumbers?: Array<Result.EvaNumber>;

    /**
     * german federal state
     */
    federalState?: string;

    /**
     * public bicycle parking y/n
     */
    hasBicycleParking?: boolean;

    /**
     * car sharing or car rental y/n
     */
    hasCarRental?: boolean;

    /**
     * DB lounge y/n
     */
    hasDBLounge?: boolean;

    /**
     * local public transport y/n
     */
    hasLocalPublicTransport?: boolean;

    /**
     * public facilities y/n
     */
    hasLockerSystem?: boolean;

    /**
     * lost and found y/n
     */
    hasLostAndFound?: boolean;

    /**
     * values are 'no' OR 'Nur nach Voranmeldung unter 030 65 21 28 88 (Ortstarif)' OR
     * 'Ja, um Voranmeldung unter 030 65 21 28 88 (Ortstarif) wird gebeten'
     */
    hasMobilityService?: string;

    /**
     * public parking y/n
     */
    hasParking?: boolean;

    /**
     * public facilities y/n
     */
    hasPublicFacilities?: boolean;

    /**
     * railway mission y/n
     */
    hasRailwayMission?: boolean;

    hasSteplessAccess?: 'yes' | 'no' | 'partial';

    /**
     * taxi rank in front of the station y/n
     */
    hasTaxiRank?: boolean;

    /**
     * local travel center y/n
     */
    hasTravelCenter?: boolean;

    /**
     * a shop for travel necessities y/n
     */
    hasTravelNecessities?: boolean;

    /**
     * public Wi-Fi is available y/n
     */
    hasWiFi?: boolean;

    /**
     * the stations IFOPT number
     */
    ifopt?: string;

    /**
     * a weekly schedule
     */
    localServiceStaff?: StationsAPI.Schedule;

    mailingAddress?: StationsAPI.Address;

    mobilityServiceStaff?: Result.MobilityServiceStaff;

    /**
     * the stations name
     */
    name?: string;

    /**
     * unique identifier representing a specific railway station
     */
    number?: number;

    /**
     * determines in some respect the price for train stops at a specific station
     * (1..7)
     */
    priceCategory?: number;

    /**
     * reference object. an internal organization type of DB InfraGo AG, regional
     * department.
     */
    regionalbereich?: Result.Regionalbereich;

    /**
     * station related Ril100s
     */
    ril100Identifiers?: Array<Result.Ril100Identifier>;

    stationManagement?: Result.StationManagement;

    /**
     * 3-S-Zentralen are 7/24 hours operating centers for german railway stations
     */
    szentrale?: SzentralenAPI.Szentrale;

    timeTableOffice?: Result.TimeTableOffice;

    wirelessLan?: Result.WirelessLan;
  }

  export namespace Result {
    /**
     * local public sector entity, responsible for short distance public transport in a
     * specific area
     */
    export interface Aufgabentraeger {
      /**
       * full name of Aufgabentraeger
       */
      name?: string;

      /**
       * unique identifier
       */
      shortName?: string;
    }

    export interface EvaNumber {
      /**
       * GEOJSON object of type point. By default WGS84 is the coordinate system in
       * GEOJSON.
       */
      geographicCoordinates?: StationsAPI.GeographicPoint;

      /**
       * isMain is supported for compatibility reasons only. The attribute has no
       * business background in terms of DB InfraGo AG.
       */
      isMain?: boolean;

      /**
       * EVA identifier
       */
      number?: number;
    }

    export interface MobilityServiceStaff {
      /**
       * a weekly schedule with 2 ranges
       */
      availability?: MobilityServiceStaff.Availability;

      /**
       * staff is on site
       */
      staffOnSite?: boolean;
    }

    export namespace MobilityServiceStaff {
      /**
       * a weekly schedule with 2 ranges
       */
      export interface Availability {
        availability?: Availability.Availability;
      }

      export namespace Availability {
        export interface Availability {
          /**
           * period of time from/to
           */
          friday1?: StationsAPI.OpeningHours;

          /**
           * period of time from/to
           */
          friday2?: StationsAPI.OpeningHours;

          /**
           * period of time from/to
           */
          monday1?: StationsAPI.OpeningHours;

          /**
           * period of time from/to
           */
          monday2?: StationsAPI.OpeningHours;

          /**
           * period of time from/to
           */
          saturday1?: StationsAPI.OpeningHours;

          /**
           * period of time from/to
           */
          saturday2?: StationsAPI.OpeningHours;

          /**
           * period of time from/to
           */
          sunday1?: StationsAPI.OpeningHours;

          /**
           * period of time from/to
           */
          sunday2?: StationsAPI.OpeningHours;

          /**
           * period of time from/to
           */
          thursday1?: StationsAPI.OpeningHours;

          /**
           * period of time from/to
           */
          thursday2?: StationsAPI.OpeningHours;

          /**
           * period of time from/to
           */
          tuesday1?: StationsAPI.OpeningHours;

          /**
           * period of time from/to
           */
          tuesday2?: StationsAPI.OpeningHours;

          /**
           * period of time from/to
           */
          wednesday1?: StationsAPI.OpeningHours;

          /**
           * period of time from/to
           */
          wednesday2?: StationsAPI.OpeningHours;
        }
      }
    }

    /**
     * reference object. an internal organization type of DB InfraGo AG, regional
     * department.
     */
    export interface Regionalbereich {
      /**
       * name of the regional department
       */
      name?: string;

      /**
       * unique identifier of the regional department
       */
      number?: number;

      shortName?: string;
    }

    export interface Ril100Identifier {
      /**
       * GEOJSON object of type point. By default WGS84 is the coordinate system in
       * GEOJSON.
       */
      geographicCoordinates?: StationsAPI.GeographicPoint;

      /**
       * @deprecated permission for steam engines y/n
       */
      hasSteamPermission?: boolean;

      /**
       * is stations main Ril100. Determination of DB InfraGo AG
       */
      isMain?: boolean;

      /**
       * UIC Primary Location Code PLC
       */
      primaryLocationCode?: string;

      /**
       * Unique identifier of 'Betriebsstelle' according to Ril100
       */
      rilIdentifier?: string;

      /**
       * Indicates whether the entry for a steam engine is restricted (eingeschränkt),
       * unrestricted (uneingeschränkt) or has an entryBan (Einfahrverbot).
       */
      steamPermission?: 'restricted' | 'unrestricted' | 'entryBan';
    }

    export interface StationManagement {
      name?: string;

      /**
       * identifier
       */
      number?: number;
    }

    export interface TimeTableOffice {
      /**
       * email
       */
      email?: string;

      /**
       * identifier
       */
      name?: string;
    }

    export interface WirelessLan {
      /**
       * amount of access points
       */
      amount?: number;

      /**
       * installation date
       */
      installDate?: string;

      /**
       * product
       */
      product?: string;
    }
  }
}

export interface StationListParams {
  /**
   * Filter by station category. Category ranges are supported as well as lists of
   * categories (e.g. category=2-4 or category=1,3-5). The category must be between 1
   * and 7 otherwise a parameter exception is returned.
   */
  category?: string;

  /**
   * Filter by EVA number. Wildcards are not allowed here.
   */
  eva?: number;

  /**
   * Filter by German federal state. Lists of federal states are also supported (e.g.
   * federalstate=bayern,hamburg). Wildcards are not allowed here.
   */
  federalstate?: string;

  /**
   * The maximum number of hits to be returned by that query. If 'limit' is set
   * greater than 10000, it will be reset to 10000 internally and only 10000 hits
   * will be returned.
   */
  limit?: number;

  /**
   * Logical operator to combine query parameters (default=AND). See above for
   * further details. Allowed values: or, and
   */
  logicaloperator?: string;

  /**
   * Offset of the first hit returned in the QueryResult object with respect to all
   * hits returned by the query. If this parameter is omitted, it will be set to 0
   * internally.
   */
  offset?: number;

  /**
   * Filter by Ril100-identifier. Wildcards are not allowed here.
   */
  ril?: string;

  /**
   * String to search for a station name. The wildcards _ (indicating an arbitrary
   * number of characters) and ? (indicating one single character) can be used in the
   * search pattern. A comma separated list of station names is also supported (e.g.
   * searchstring=hamburg_,berlin\*).
   */
  searchstring?: string;
}

export declare namespace Stations {
  export {
    type Address as Address,
    type GeographicPoint as GeographicPoint,
    type OpeningHours as OpeningHours,
    type Schedule as Schedule,
    type StationQuery as StationQuery,
    type StationListParams as StationListParams,
  };
}
