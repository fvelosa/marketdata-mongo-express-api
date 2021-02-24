/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum InterpType {
  None = "none",
  Round = "round",
  Lin = "lin",
  Near = "near",
}

export enum DayCountConventionCodes {
  ACTACT = "ACTACT",
  ACTACT29 = "ACTACT29",
}

export enum BusinessDayConventionCodes {
  AFTER = "AFTER",
  BEFORE = "BEFORE",
  EURODOLLAR = "EURODOLLAR",
}

export enum EndOfMonthRule {
  TRUE = "TRUE",
  FALSE = "FALSE",
}

export enum Tenor {
  MONTHLY = "MONTHLY",
  QUARTERLY = "QUARTERLY",
  SEMIANNUAL = "SEMIANNUAL",
  ANNUAL = "ANNUAL",
}

export enum CompoundFrequencies {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
  QUARTERLY = "QUARTERLY",
  SEMIANNUAL = "SEMIANNUAL",
  ANNUAL = "ANNUAL",
  SIMPLE = "SIMPLE",
  CONTINUOUS = "CONTINUOUS",
}

export enum ExpiryUnits {
  DAYS = "DAYS",
  WEEKS = "WEEKS",
  MONTHS = "MONTHS",
  YEARS = "YEARS",
  MIXED = "MIXED",
}

export interface Yield {
  curveType?: "Yield";
  curveID?: string;

  /** @format date */
  observationDate?: string;
  currencyID?: string;
  interpType?: InterpType;
  extrapType?: InterpType;
  dayCountConv?: DayCountConventionCodes;
  compoundFreq?: CompoundFrequencies;
  yields?: { maturty?: number; yield?: string };
}

export interface SwaptionVolMtx {
  curveType?: "SwaptionVolMtx";
  curveID?: string;

  /** @format date */
  observationDate?: string;
  currencyID?: string;
  lenghtInterpType?: InterpType;
  lenghtExtrapType?: InterpType;
  expiryInterpType?: InterpType;
  expiryExtrapType?: InterpType;
  tenor?: Tenor;
  dayCountConv?: DayCountConventionCodes;
  daysPerAnnum?: number;
  holidaySet?: string;
  expiryUnits?: ExpiryUnits;
  busDaysConv?: BusinessDayConventionCodes;
  invalidDateRule?: "PREV" | "NEXT" | "IGNORE";
  endOfMonthRule?: EndOfMonthRule;
  length?: number;
  volatilities?: { expiry?: number; volatility?: string }[];
}
