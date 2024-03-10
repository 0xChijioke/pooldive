// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace Uniswapv2Types {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uni_BigDecimal: any;
  BigInt: any;
  uni_Bytes: any;
  uni_Int8: any;
};

export type uni_Aggregation_interval =
  | 'hour'
  | 'day';

export type uni_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type uni_Block_height = {
  hash?: InputMaybe<Scalars['uni_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type uni_Bundle = {
  id: Scalars['ID'];
  ethPriceUSD: Scalars['uni_BigDecimal'];
};

export type uni_Bundle_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  ethPriceUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  ethPriceUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  ethPriceUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  ethPriceUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  ethPriceUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  ethPriceUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  ethPriceUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  ethPriceUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<uni_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<uni_Bundle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<uni_Bundle_filter>>>;
};

export type uni_Bundle_orderBy =
  | 'id'
  | 'ethPriceUSD';

export type uni_Burn = {
  id: Scalars['ID'];
  transaction: uni_Transaction;
  pool: uni_Pool;
  token0: uni_Token;
  token1: uni_Token;
  timestamp: Scalars['BigInt'];
  owner?: Maybe<Scalars['uni_Bytes']>;
  origin: Scalars['uni_Bytes'];
  amount: Scalars['BigInt'];
  amount0: Scalars['uni_BigDecimal'];
  amount1: Scalars['uni_BigDecimal'];
  amountUSD?: Maybe<Scalars['uni_BigDecimal']>;
  tickLower: Scalars['BigInt'];
  tickUpper: Scalars['BigInt'];
  logIndex?: Maybe<Scalars['BigInt']>;
};

export type uni_Burn_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<uni_Transaction_filter>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<uni_Pool_filter>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<uni_Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<uni_Token_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['uni_Bytes']>;
  owner_not?: InputMaybe<Scalars['uni_Bytes']>;
  owner_gt?: InputMaybe<Scalars['uni_Bytes']>;
  owner_lt?: InputMaybe<Scalars['uni_Bytes']>;
  owner_gte?: InputMaybe<Scalars['uni_Bytes']>;
  owner_lte?: InputMaybe<Scalars['uni_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['uni_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['uni_Bytes']>;
  origin?: InputMaybe<Scalars['uni_Bytes']>;
  origin_not?: InputMaybe<Scalars['uni_Bytes']>;
  origin_gt?: InputMaybe<Scalars['uni_Bytes']>;
  origin_lt?: InputMaybe<Scalars['uni_Bytes']>;
  origin_gte?: InputMaybe<Scalars['uni_Bytes']>;
  origin_lte?: InputMaybe<Scalars['uni_Bytes']>;
  origin_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  origin_not_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  origin_contains?: InputMaybe<Scalars['uni_Bytes']>;
  origin_not_contains?: InputMaybe<Scalars['uni_Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount0?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amount1?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amountUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  tickLower?: InputMaybe<Scalars['BigInt']>;
  tickLower_not?: InputMaybe<Scalars['BigInt']>;
  tickLower_gt?: InputMaybe<Scalars['BigInt']>;
  tickLower_lt?: InputMaybe<Scalars['BigInt']>;
  tickLower_gte?: InputMaybe<Scalars['BigInt']>;
  tickLower_lte?: InputMaybe<Scalars['BigInt']>;
  tickLower_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickLower_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper?: InputMaybe<Scalars['BigInt']>;
  tickUpper_not?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<uni_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<uni_Burn_filter>>>;
  or?: InputMaybe<Array<InputMaybe<uni_Burn_filter>>>;
};

export type uni_Burn_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__totalSupply'
  | 'token0__volume'
  | 'token0__volumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__feesUSD'
  | 'token0__txCount'
  | 'token0__poolCount'
  | 'token0__totalValueLocked'
  | 'token0__totalValueLockedUSD'
  | 'token0__totalValueLockedUSDUntracked'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__totalSupply'
  | 'token1__volume'
  | 'token1__volumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__feesUSD'
  | 'token1__txCount'
  | 'token1__poolCount'
  | 'token1__totalValueLocked'
  | 'token1__totalValueLockedUSD'
  | 'token1__totalValueLockedUSDUntracked'
  | 'token1__derivedETH'
  | 'timestamp'
  | 'owner'
  | 'origin'
  | 'amount'
  | 'amount0'
  | 'amount1'
  | 'amountUSD'
  | 'tickLower'
  | 'tickUpper'
  | 'logIndex';

export type uni_Collect = {
  id: Scalars['ID'];
  transaction: uni_Transaction;
  timestamp: Scalars['BigInt'];
  pool: uni_Pool;
  owner?: Maybe<Scalars['uni_Bytes']>;
  amount0: Scalars['uni_BigDecimal'];
  amount1: Scalars['uni_BigDecimal'];
  amountUSD?: Maybe<Scalars['uni_BigDecimal']>;
  tickLower: Scalars['BigInt'];
  tickUpper: Scalars['BigInt'];
  logIndex?: Maybe<Scalars['BigInt']>;
};

export type uni_Collect_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<uni_Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<uni_Pool_filter>;
  owner?: InputMaybe<Scalars['uni_Bytes']>;
  owner_not?: InputMaybe<Scalars['uni_Bytes']>;
  owner_gt?: InputMaybe<Scalars['uni_Bytes']>;
  owner_lt?: InputMaybe<Scalars['uni_Bytes']>;
  owner_gte?: InputMaybe<Scalars['uni_Bytes']>;
  owner_lte?: InputMaybe<Scalars['uni_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['uni_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['uni_Bytes']>;
  amount0?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amount1?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amountUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  tickLower?: InputMaybe<Scalars['BigInt']>;
  tickLower_not?: InputMaybe<Scalars['BigInt']>;
  tickLower_gt?: InputMaybe<Scalars['BigInt']>;
  tickLower_lt?: InputMaybe<Scalars['BigInt']>;
  tickLower_gte?: InputMaybe<Scalars['BigInt']>;
  tickLower_lte?: InputMaybe<Scalars['BigInt']>;
  tickLower_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickLower_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper?: InputMaybe<Scalars['BigInt']>;
  tickUpper_not?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<uni_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<uni_Collect_filter>>>;
  or?: InputMaybe<Array<InputMaybe<uni_Collect_filter>>>;
};

export type uni_Collect_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'timestamp'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'owner'
  | 'amount0'
  | 'amount1'
  | 'amountUSD'
  | 'tickLower'
  | 'tickUpper'
  | 'logIndex';

export type uni_Factory = {
  id: Scalars['ID'];
  poolCount: Scalars['BigInt'];
  txCount: Scalars['BigInt'];
  totalVolumeUSD: Scalars['uni_BigDecimal'];
  totalVolumeETH: Scalars['uni_BigDecimal'];
  totalFeesUSD: Scalars['uni_BigDecimal'];
  totalFeesETH: Scalars['uni_BigDecimal'];
  untrackedVolumeUSD: Scalars['uni_BigDecimal'];
  totalValueLockedUSD: Scalars['uni_BigDecimal'];
  totalValueLockedETH: Scalars['uni_BigDecimal'];
  totalValueLockedUSDUntracked: Scalars['uni_BigDecimal'];
  totalValueLockedETHUntracked: Scalars['uni_BigDecimal'];
  owner: Scalars['ID'];
};

export type uni_Factory_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  poolCount?: InputMaybe<Scalars['BigInt']>;
  poolCount_not?: InputMaybe<Scalars['BigInt']>;
  poolCount_gt?: InputMaybe<Scalars['BigInt']>;
  poolCount_lt?: InputMaybe<Scalars['BigInt']>;
  poolCount_gte?: InputMaybe<Scalars['BigInt']>;
  poolCount_lte?: InputMaybe<Scalars['BigInt']>;
  poolCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poolCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolumeUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalVolumeETH?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalVolumeETH_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalVolumeETH_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalVolumeETH_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalVolumeETH_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalVolumeETH_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalVolumeETH_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalVolumeETH_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalFeesUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalFeesUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalFeesUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalFeesUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalFeesUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalFeesUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalFeesUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalFeesUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalFeesETH?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalFeesETH_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalFeesETH_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalFeesETH_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalFeesETH_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalFeesETH_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalFeesETH_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalFeesETH_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedETH?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedETH_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedETH_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedETH_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedETH_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedETH_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedETH_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedETH_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedUSDUntracked?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSDUntracked_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSDUntracked_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSDUntracked_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSDUntracked_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSDUntracked_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSDUntracked_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedUSDUntracked_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedETHUntracked?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedETHUntracked_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedETHUntracked_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedETHUntracked_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedETHUntracked_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedETHUntracked_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedETHUntracked_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedETHUntracked_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  owner?: InputMaybe<Scalars['ID']>;
  owner_not?: InputMaybe<Scalars['ID']>;
  owner_gt?: InputMaybe<Scalars['ID']>;
  owner_lt?: InputMaybe<Scalars['ID']>;
  owner_gte?: InputMaybe<Scalars['ID']>;
  owner_lte?: InputMaybe<Scalars['ID']>;
  owner_in?: InputMaybe<Array<Scalars['ID']>>;
  owner_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<uni_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<uni_Factory_filter>>>;
  or?: InputMaybe<Array<InputMaybe<uni_Factory_filter>>>;
};

export type uni_Factory_orderBy =
  | 'id'
  | 'poolCount'
  | 'txCount'
  | 'totalVolumeUSD'
  | 'totalVolumeETH'
  | 'totalFeesUSD'
  | 'totalFeesETH'
  | 'untrackedVolumeUSD'
  | 'totalValueLockedUSD'
  | 'totalValueLockedETH'
  | 'totalValueLockedUSDUntracked'
  | 'totalValueLockedETHUntracked'
  | 'owner';

export type uni_Flash = {
  id: Scalars['ID'];
  transaction: uni_Transaction;
  timestamp: Scalars['BigInt'];
  pool: uni_Pool;
  sender: Scalars['uni_Bytes'];
  recipient: Scalars['uni_Bytes'];
  amount0: Scalars['uni_BigDecimal'];
  amount1: Scalars['uni_BigDecimal'];
  amountUSD: Scalars['uni_BigDecimal'];
  amount0Paid: Scalars['uni_BigDecimal'];
  amount1Paid: Scalars['uni_BigDecimal'];
  logIndex?: Maybe<Scalars['BigInt']>;
};

export type uni_Flash_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<uni_Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<uni_Pool_filter>;
  sender?: InputMaybe<Scalars['uni_Bytes']>;
  sender_not?: InputMaybe<Scalars['uni_Bytes']>;
  sender_gt?: InputMaybe<Scalars['uni_Bytes']>;
  sender_lt?: InputMaybe<Scalars['uni_Bytes']>;
  sender_gte?: InputMaybe<Scalars['uni_Bytes']>;
  sender_lte?: InputMaybe<Scalars['uni_Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  sender_contains?: InputMaybe<Scalars['uni_Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['uni_Bytes']>;
  recipient?: InputMaybe<Scalars['uni_Bytes']>;
  recipient_not?: InputMaybe<Scalars['uni_Bytes']>;
  recipient_gt?: InputMaybe<Scalars['uni_Bytes']>;
  recipient_lt?: InputMaybe<Scalars['uni_Bytes']>;
  recipient_gte?: InputMaybe<Scalars['uni_Bytes']>;
  recipient_lte?: InputMaybe<Scalars['uni_Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['uni_Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['uni_Bytes']>;
  amount0?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amount1?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amountUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amount0Paid?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0Paid_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0Paid_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0Paid_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0Paid_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0Paid_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0Paid_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amount0Paid_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amount1Paid?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1Paid_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1Paid_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1Paid_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1Paid_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1Paid_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1Paid_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amount1Paid_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<uni_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<uni_Flash_filter>>>;
  or?: InputMaybe<Array<InputMaybe<uni_Flash_filter>>>;
};

export type uni_Flash_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'timestamp'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'sender'
  | 'recipient'
  | 'amount0'
  | 'amount1'
  | 'amountUSD'
  | 'amount0Paid'
  | 'amount1Paid'
  | 'logIndex';

export type uni_Mint = {
  id: Scalars['ID'];
  transaction: uni_Transaction;
  timestamp: Scalars['BigInt'];
  pool: uni_Pool;
  token0: uni_Token;
  token1: uni_Token;
  owner: Scalars['uni_Bytes'];
  sender?: Maybe<Scalars['uni_Bytes']>;
  origin: Scalars['uni_Bytes'];
  amount: Scalars['BigInt'];
  amount0: Scalars['uni_BigDecimal'];
  amount1: Scalars['uni_BigDecimal'];
  amountUSD?: Maybe<Scalars['uni_BigDecimal']>;
  tickLower: Scalars['BigInt'];
  tickUpper: Scalars['BigInt'];
  logIndex?: Maybe<Scalars['BigInt']>;
};

export type uni_Mint_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<uni_Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<uni_Pool_filter>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<uni_Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<uni_Token_filter>;
  owner?: InputMaybe<Scalars['uni_Bytes']>;
  owner_not?: InputMaybe<Scalars['uni_Bytes']>;
  owner_gt?: InputMaybe<Scalars['uni_Bytes']>;
  owner_lt?: InputMaybe<Scalars['uni_Bytes']>;
  owner_gte?: InputMaybe<Scalars['uni_Bytes']>;
  owner_lte?: InputMaybe<Scalars['uni_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['uni_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['uni_Bytes']>;
  sender?: InputMaybe<Scalars['uni_Bytes']>;
  sender_not?: InputMaybe<Scalars['uni_Bytes']>;
  sender_gt?: InputMaybe<Scalars['uni_Bytes']>;
  sender_lt?: InputMaybe<Scalars['uni_Bytes']>;
  sender_gte?: InputMaybe<Scalars['uni_Bytes']>;
  sender_lte?: InputMaybe<Scalars['uni_Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  sender_contains?: InputMaybe<Scalars['uni_Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['uni_Bytes']>;
  origin?: InputMaybe<Scalars['uni_Bytes']>;
  origin_not?: InputMaybe<Scalars['uni_Bytes']>;
  origin_gt?: InputMaybe<Scalars['uni_Bytes']>;
  origin_lt?: InputMaybe<Scalars['uni_Bytes']>;
  origin_gte?: InputMaybe<Scalars['uni_Bytes']>;
  origin_lte?: InputMaybe<Scalars['uni_Bytes']>;
  origin_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  origin_not_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  origin_contains?: InputMaybe<Scalars['uni_Bytes']>;
  origin_not_contains?: InputMaybe<Scalars['uni_Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount0?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amount1?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amountUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  tickLower?: InputMaybe<Scalars['BigInt']>;
  tickLower_not?: InputMaybe<Scalars['BigInt']>;
  tickLower_gt?: InputMaybe<Scalars['BigInt']>;
  tickLower_lt?: InputMaybe<Scalars['BigInt']>;
  tickLower_gte?: InputMaybe<Scalars['BigInt']>;
  tickLower_lte?: InputMaybe<Scalars['BigInt']>;
  tickLower_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickLower_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper?: InputMaybe<Scalars['BigInt']>;
  tickUpper_not?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<uni_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<uni_Mint_filter>>>;
  or?: InputMaybe<Array<InputMaybe<uni_Mint_filter>>>;
};

export type uni_Mint_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'timestamp'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__totalSupply'
  | 'token0__volume'
  | 'token0__volumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__feesUSD'
  | 'token0__txCount'
  | 'token0__poolCount'
  | 'token0__totalValueLocked'
  | 'token0__totalValueLockedUSD'
  | 'token0__totalValueLockedUSDUntracked'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__totalSupply'
  | 'token1__volume'
  | 'token1__volumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__feesUSD'
  | 'token1__txCount'
  | 'token1__poolCount'
  | 'token1__totalValueLocked'
  | 'token1__totalValueLockedUSD'
  | 'token1__totalValueLockedUSDUntracked'
  | 'token1__derivedETH'
  | 'owner'
  | 'sender'
  | 'origin'
  | 'amount'
  | 'amount0'
  | 'amount1'
  | 'amountUSD'
  | 'tickLower'
  | 'tickUpper'
  | 'logIndex';

/** Defines the order direction, either ascending or descending */
export type uni_OrderDirection =
  | 'asc'
  | 'desc';

export type uni_Pool = {
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  token0: uni_Token;
  token1: uni_Token;
  feeTier: Scalars['BigInt'];
  liquidity: Scalars['BigInt'];
  sqrtPrice: Scalars['BigInt'];
  feeGrowthGlobal0X128: Scalars['BigInt'];
  feeGrowthGlobal1X128: Scalars['BigInt'];
  token0Price: Scalars['uni_BigDecimal'];
  token1Price: Scalars['uni_BigDecimal'];
  tick?: Maybe<Scalars['BigInt']>;
  observationIndex: Scalars['BigInt'];
  volumeToken0: Scalars['uni_BigDecimal'];
  volumeToken1: Scalars['uni_BigDecimal'];
  volumeUSD: Scalars['uni_BigDecimal'];
  untrackedVolumeUSD: Scalars['uni_BigDecimal'];
  feesUSD: Scalars['uni_BigDecimal'];
  txCount: Scalars['BigInt'];
  collectedFeesToken0: Scalars['uni_BigDecimal'];
  collectedFeesToken1: Scalars['uni_BigDecimal'];
  collectedFeesUSD: Scalars['uni_BigDecimal'];
  totalValueLockedToken0: Scalars['uni_BigDecimal'];
  totalValueLockedToken1: Scalars['uni_BigDecimal'];
  totalValueLockedETH: Scalars['uni_BigDecimal'];
  totalValueLockedUSD: Scalars['uni_BigDecimal'];
  totalValueLockedUSDUntracked: Scalars['uni_BigDecimal'];
  liquidityProviderCount: Scalars['BigInt'];
  poolHourData: Array<uni_PoolHourData>;
  poolDayData: Array<uni_PoolDayData>;
  mints: Array<uni_Mint>;
  burns: Array<uni_Burn>;
  swaps: Array<uni_Swap>;
  collects: Array<uni_Collect>;
  ticks: Array<uni_Tick>;
};


export type uni_PoolpoolHourDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_PoolHourData_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_PoolHourData_filter>;
};


export type uni_PoolpoolDayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_PoolDayData_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_PoolDayData_filter>;
};


export type uni_PoolmintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Mint_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Mint_filter>;
};


export type uni_PoolburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Burn_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Burn_filter>;
};


export type uni_PoolswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Swap_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Swap_filter>;
};


export type uni_PoolcollectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Collect_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Collect_filter>;
};


export type uni_PoolticksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Tick_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Tick_filter>;
};

export type uni_PoolDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  pool: uni_Pool;
  liquidity: Scalars['BigInt'];
  sqrtPrice: Scalars['BigInt'];
  token0Price: Scalars['uni_BigDecimal'];
  token1Price: Scalars['uni_BigDecimal'];
  tick?: Maybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128: Scalars['BigInt'];
  feeGrowthGlobal1X128: Scalars['BigInt'];
  tvlUSD: Scalars['uni_BigDecimal'];
  volumeToken0: Scalars['uni_BigDecimal'];
  volumeToken1: Scalars['uni_BigDecimal'];
  volumeUSD: Scalars['uni_BigDecimal'];
  feesUSD: Scalars['uni_BigDecimal'];
  txCount: Scalars['BigInt'];
  open: Scalars['uni_BigDecimal'];
  high: Scalars['uni_BigDecimal'];
  low: Scalars['uni_BigDecimal'];
  close: Scalars['uni_BigDecimal'];
};

export type uni_PoolDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<uni_Pool_filter>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPrice?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_not?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_gt?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_lt?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_gte?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_lte?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token0Price?: InputMaybe<Scalars['uni_BigDecimal']>;
  token0Price_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  token0Price_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  token0Price_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  token0Price_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  token0Price_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  token0Price_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  token0Price_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  token1Price?: InputMaybe<Scalars['uni_BigDecimal']>;
  token1Price_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  token1Price_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  token1Price_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  token1Price_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  token1Price_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  token1Price_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  token1Price_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  tick?: InputMaybe<Scalars['BigInt']>;
  tick_not?: InputMaybe<Scalars['BigInt']>;
  tick_gt?: InputMaybe<Scalars['BigInt']>;
  tick_lt?: InputMaybe<Scalars['BigInt']>;
  tick_gte?: InputMaybe<Scalars['BigInt']>;
  tick_lte?: InputMaybe<Scalars['BigInt']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal0X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal0X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal1X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tvlUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  tvlUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  tvlUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  tvlUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  tvlUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  tvlUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  open?: InputMaybe<Scalars['uni_BigDecimal']>;
  open_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  open_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  open_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  open_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  open_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  high?: InputMaybe<Scalars['uni_BigDecimal']>;
  high_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  high_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  high_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  high_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  high_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  low?: InputMaybe<Scalars['uni_BigDecimal']>;
  low_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  low_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  low_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  low_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  low_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  close?: InputMaybe<Scalars['uni_BigDecimal']>;
  close_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  close_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  close_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  close_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  close_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<uni_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<uni_PoolDayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<uni_PoolDayData_filter>>>;
};

export type uni_PoolDayData_orderBy =
  | 'id'
  | 'date'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'liquidity'
  | 'sqrtPrice'
  | 'token0Price'
  | 'token1Price'
  | 'tick'
  | 'feeGrowthGlobal0X128'
  | 'feeGrowthGlobal1X128'
  | 'tvlUSD'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'feesUSD'
  | 'txCount'
  | 'open'
  | 'high'
  | 'low'
  | 'close';

export type uni_PoolHourData = {
  id: Scalars['ID'];
  periodStartUnix: Scalars['Int'];
  pool: uni_Pool;
  liquidity: Scalars['BigInt'];
  sqrtPrice: Scalars['BigInt'];
  token0Price: Scalars['uni_BigDecimal'];
  token1Price: Scalars['uni_BigDecimal'];
  tick?: Maybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128: Scalars['BigInt'];
  feeGrowthGlobal1X128: Scalars['BigInt'];
  tvlUSD: Scalars['uni_BigDecimal'];
  volumeToken0: Scalars['uni_BigDecimal'];
  volumeToken1: Scalars['uni_BigDecimal'];
  volumeUSD: Scalars['uni_BigDecimal'];
  feesUSD: Scalars['uni_BigDecimal'];
  txCount: Scalars['BigInt'];
  open: Scalars['uni_BigDecimal'];
  high: Scalars['uni_BigDecimal'];
  low: Scalars['uni_BigDecimal'];
  close: Scalars['uni_BigDecimal'];
};

export type uni_PoolHourData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  periodStartUnix?: InputMaybe<Scalars['Int']>;
  periodStartUnix_not?: InputMaybe<Scalars['Int']>;
  periodStartUnix_gt?: InputMaybe<Scalars['Int']>;
  periodStartUnix_lt?: InputMaybe<Scalars['Int']>;
  periodStartUnix_gte?: InputMaybe<Scalars['Int']>;
  periodStartUnix_lte?: InputMaybe<Scalars['Int']>;
  periodStartUnix_in?: InputMaybe<Array<Scalars['Int']>>;
  periodStartUnix_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<uni_Pool_filter>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPrice?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_not?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_gt?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_lt?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_gte?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_lte?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token0Price?: InputMaybe<Scalars['uni_BigDecimal']>;
  token0Price_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  token0Price_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  token0Price_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  token0Price_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  token0Price_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  token0Price_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  token0Price_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  token1Price?: InputMaybe<Scalars['uni_BigDecimal']>;
  token1Price_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  token1Price_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  token1Price_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  token1Price_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  token1Price_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  token1Price_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  token1Price_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  tick?: InputMaybe<Scalars['BigInt']>;
  tick_not?: InputMaybe<Scalars['BigInt']>;
  tick_gt?: InputMaybe<Scalars['BigInt']>;
  tick_lt?: InputMaybe<Scalars['BigInt']>;
  tick_gte?: InputMaybe<Scalars['BigInt']>;
  tick_lte?: InputMaybe<Scalars['BigInt']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal0X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal0X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal1X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tvlUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  tvlUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  tvlUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  tvlUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  tvlUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  tvlUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  open?: InputMaybe<Scalars['uni_BigDecimal']>;
  open_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  open_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  open_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  open_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  open_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  high?: InputMaybe<Scalars['uni_BigDecimal']>;
  high_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  high_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  high_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  high_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  high_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  low?: InputMaybe<Scalars['uni_BigDecimal']>;
  low_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  low_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  low_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  low_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  low_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  close?: InputMaybe<Scalars['uni_BigDecimal']>;
  close_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  close_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  close_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  close_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  close_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<uni_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<uni_PoolHourData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<uni_PoolHourData_filter>>>;
};

export type uni_PoolHourData_orderBy =
  | 'id'
  | 'periodStartUnix'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'liquidity'
  | 'sqrtPrice'
  | 'token0Price'
  | 'token1Price'
  | 'tick'
  | 'feeGrowthGlobal0X128'
  | 'feeGrowthGlobal1X128'
  | 'tvlUSD'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'feesUSD'
  | 'txCount'
  | 'open'
  | 'high'
  | 'low'
  | 'close';

export type uni_Pool_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<uni_Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<uni_Token_filter>;
  feeTier?: InputMaybe<Scalars['BigInt']>;
  feeTier_not?: InputMaybe<Scalars['BigInt']>;
  feeTier_gt?: InputMaybe<Scalars['BigInt']>;
  feeTier_lt?: InputMaybe<Scalars['BigInt']>;
  feeTier_gte?: InputMaybe<Scalars['BigInt']>;
  feeTier_lte?: InputMaybe<Scalars['BigInt']>;
  feeTier_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeTier_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPrice?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_not?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_gt?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_lt?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_gte?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_lte?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal0X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal0X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal1X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token0Price?: InputMaybe<Scalars['uni_BigDecimal']>;
  token0Price_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  token0Price_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  token0Price_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  token0Price_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  token0Price_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  token0Price_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  token0Price_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  token1Price?: InputMaybe<Scalars['uni_BigDecimal']>;
  token1Price_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  token1Price_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  token1Price_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  token1Price_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  token1Price_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  token1Price_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  token1Price_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  tick?: InputMaybe<Scalars['BigInt']>;
  tick_not?: InputMaybe<Scalars['BigInt']>;
  tick_gt?: InputMaybe<Scalars['BigInt']>;
  tick_lt?: InputMaybe<Scalars['BigInt']>;
  tick_gte?: InputMaybe<Scalars['BigInt']>;
  tick_lte?: InputMaybe<Scalars['BigInt']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  observationIndex?: InputMaybe<Scalars['BigInt']>;
  observationIndex_not?: InputMaybe<Scalars['BigInt']>;
  observationIndex_gt?: InputMaybe<Scalars['BigInt']>;
  observationIndex_lt?: InputMaybe<Scalars['BigInt']>;
  observationIndex_gte?: InputMaybe<Scalars['BigInt']>;
  observationIndex_lte?: InputMaybe<Scalars['BigInt']>;
  observationIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  observationIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeToken0?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collectedFeesToken0?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  collectedFeesToken1?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  collectedFeesUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  collectedFeesUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedToken0?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedToken0_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedToken0_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedToken0_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedToken0_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedToken0_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedToken0_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedToken0_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedToken1?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedToken1_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedToken1_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedToken1_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedToken1_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedToken1_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedToken1_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedToken1_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedETH?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedETH_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedETH_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedETH_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedETH_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedETH_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedETH_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedETH_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedUSDUntracked?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSDUntracked_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSDUntracked_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSDUntracked_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSDUntracked_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSDUntracked_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSDUntracked_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedUSDUntracked_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  liquidityProviderCount?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_not?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poolHourData_?: InputMaybe<uni_PoolHourData_filter>;
  poolDayData_?: InputMaybe<uni_PoolDayData_filter>;
  mints_?: InputMaybe<uni_Mint_filter>;
  burns_?: InputMaybe<uni_Burn_filter>;
  swaps_?: InputMaybe<uni_Swap_filter>;
  collects_?: InputMaybe<uni_Collect_filter>;
  ticks_?: InputMaybe<uni_Tick_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<uni_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<uni_Pool_filter>>>;
  or?: InputMaybe<Array<InputMaybe<uni_Pool_filter>>>;
};

export type uni_Pool_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__totalSupply'
  | 'token0__volume'
  | 'token0__volumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__feesUSD'
  | 'token0__txCount'
  | 'token0__poolCount'
  | 'token0__totalValueLocked'
  | 'token0__totalValueLockedUSD'
  | 'token0__totalValueLockedUSDUntracked'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__totalSupply'
  | 'token1__volume'
  | 'token1__volumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__feesUSD'
  | 'token1__txCount'
  | 'token1__poolCount'
  | 'token1__totalValueLocked'
  | 'token1__totalValueLockedUSD'
  | 'token1__totalValueLockedUSDUntracked'
  | 'token1__derivedETH'
  | 'feeTier'
  | 'liquidity'
  | 'sqrtPrice'
  | 'feeGrowthGlobal0X128'
  | 'feeGrowthGlobal1X128'
  | 'token0Price'
  | 'token1Price'
  | 'tick'
  | 'observationIndex'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'feesUSD'
  | 'txCount'
  | 'collectedFeesToken0'
  | 'collectedFeesToken1'
  | 'collectedFeesUSD'
  | 'totalValueLockedToken0'
  | 'totalValueLockedToken1'
  | 'totalValueLockedETH'
  | 'totalValueLockedUSD'
  | 'totalValueLockedUSDUntracked'
  | 'liquidityProviderCount'
  | 'poolHourData'
  | 'poolDayData'
  | 'mints'
  | 'burns'
  | 'swaps'
  | 'collects'
  | 'ticks';

export type uni_Position = {
  id: Scalars['ID'];
  owner: Scalars['uni_Bytes'];
  pool: uni_Pool;
  token0: uni_Token;
  token1: uni_Token;
  tickLower: uni_Tick;
  tickUpper: uni_Tick;
  liquidity: Scalars['BigInt'];
  depositedToken0: Scalars['uni_BigDecimal'];
  depositedToken1: Scalars['uni_BigDecimal'];
  withdrawnToken0: Scalars['uni_BigDecimal'];
  withdrawnToken1: Scalars['uni_BigDecimal'];
  collectedFeesToken0: Scalars['uni_BigDecimal'];
  collectedFeesToken1: Scalars['uni_BigDecimal'];
  transaction: uni_Transaction;
  feeGrowthInside0LastX128: Scalars['BigInt'];
  feeGrowthInside1LastX128: Scalars['BigInt'];
};

export type uni_PositionSnapshot = {
  id: Scalars['ID'];
  owner: Scalars['uni_Bytes'];
  pool: uni_Pool;
  position: uni_Position;
  blockNumber: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  liquidity: Scalars['BigInt'];
  depositedToken0: Scalars['uni_BigDecimal'];
  depositedToken1: Scalars['uni_BigDecimal'];
  withdrawnToken0: Scalars['uni_BigDecimal'];
  withdrawnToken1: Scalars['uni_BigDecimal'];
  collectedFeesToken0: Scalars['uni_BigDecimal'];
  collectedFeesToken1: Scalars['uni_BigDecimal'];
  transaction: uni_Transaction;
  feeGrowthInside0LastX128: Scalars['BigInt'];
  feeGrowthInside1LastX128: Scalars['BigInt'];
};

export type uni_PositionSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['uni_Bytes']>;
  owner_not?: InputMaybe<Scalars['uni_Bytes']>;
  owner_gt?: InputMaybe<Scalars['uni_Bytes']>;
  owner_lt?: InputMaybe<Scalars['uni_Bytes']>;
  owner_gte?: InputMaybe<Scalars['uni_Bytes']>;
  owner_lte?: InputMaybe<Scalars['uni_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['uni_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['uni_Bytes']>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<uni_Pool_filter>;
  position?: InputMaybe<Scalars['String']>;
  position_not?: InputMaybe<Scalars['String']>;
  position_gt?: InputMaybe<Scalars['String']>;
  position_lt?: InputMaybe<Scalars['String']>;
  position_gte?: InputMaybe<Scalars['String']>;
  position_lte?: InputMaybe<Scalars['String']>;
  position_in?: InputMaybe<Array<Scalars['String']>>;
  position_not_in?: InputMaybe<Array<Scalars['String']>>;
  position_contains?: InputMaybe<Scalars['String']>;
  position_contains_nocase?: InputMaybe<Scalars['String']>;
  position_not_contains?: InputMaybe<Scalars['String']>;
  position_not_contains_nocase?: InputMaybe<Scalars['String']>;
  position_starts_with?: InputMaybe<Scalars['String']>;
  position_starts_with_nocase?: InputMaybe<Scalars['String']>;
  position_not_starts_with?: InputMaybe<Scalars['String']>;
  position_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  position_ends_with?: InputMaybe<Scalars['String']>;
  position_ends_with_nocase?: InputMaybe<Scalars['String']>;
  position_not_ends_with?: InputMaybe<Scalars['String']>;
  position_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  position_?: InputMaybe<uni_Position_filter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedToken0?: InputMaybe<Scalars['uni_BigDecimal']>;
  depositedToken0_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  depositedToken0_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  depositedToken0_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  depositedToken0_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  depositedToken0_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  depositedToken0_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  depositedToken0_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  depositedToken1?: InputMaybe<Scalars['uni_BigDecimal']>;
  depositedToken1_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  depositedToken1_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  depositedToken1_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  depositedToken1_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  depositedToken1_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  depositedToken1_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  depositedToken1_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  withdrawnToken0?: InputMaybe<Scalars['uni_BigDecimal']>;
  withdrawnToken0_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  withdrawnToken0_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  withdrawnToken0_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  withdrawnToken0_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  withdrawnToken0_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  withdrawnToken0_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  withdrawnToken0_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  withdrawnToken1?: InputMaybe<Scalars['uni_BigDecimal']>;
  withdrawnToken1_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  withdrawnToken1_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  withdrawnToken1_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  withdrawnToken1_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  withdrawnToken1_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  withdrawnToken1_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  withdrawnToken1_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  collectedFeesToken0?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  collectedFeesToken1?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<uni_Transaction_filter>;
  feeGrowthInside0LastX128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthInside0LastX128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthInside1LastX128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthInside1LastX128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<uni_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<uni_PositionSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<uni_PositionSnapshot_filter>>>;
};

export type uni_PositionSnapshot_orderBy =
  | 'id'
  | 'owner'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'position'
  | 'position__id'
  | 'position__owner'
  | 'position__liquidity'
  | 'position__depositedToken0'
  | 'position__depositedToken1'
  | 'position__withdrawnToken0'
  | 'position__withdrawnToken1'
  | 'position__collectedFeesToken0'
  | 'position__collectedFeesToken1'
  | 'position__feeGrowthInside0LastX128'
  | 'position__feeGrowthInside1LastX128'
  | 'blockNumber'
  | 'timestamp'
  | 'liquidity'
  | 'depositedToken0'
  | 'depositedToken1'
  | 'withdrawnToken0'
  | 'withdrawnToken1'
  | 'collectedFeesToken0'
  | 'collectedFeesToken1'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'feeGrowthInside0LastX128'
  | 'feeGrowthInside1LastX128';

export type uni_Position_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['uni_Bytes']>;
  owner_not?: InputMaybe<Scalars['uni_Bytes']>;
  owner_gt?: InputMaybe<Scalars['uni_Bytes']>;
  owner_lt?: InputMaybe<Scalars['uni_Bytes']>;
  owner_gte?: InputMaybe<Scalars['uni_Bytes']>;
  owner_lte?: InputMaybe<Scalars['uni_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['uni_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['uni_Bytes']>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<uni_Pool_filter>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<uni_Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<uni_Token_filter>;
  tickLower?: InputMaybe<Scalars['String']>;
  tickLower_not?: InputMaybe<Scalars['String']>;
  tickLower_gt?: InputMaybe<Scalars['String']>;
  tickLower_lt?: InputMaybe<Scalars['String']>;
  tickLower_gte?: InputMaybe<Scalars['String']>;
  tickLower_lte?: InputMaybe<Scalars['String']>;
  tickLower_in?: InputMaybe<Array<Scalars['String']>>;
  tickLower_not_in?: InputMaybe<Array<Scalars['String']>>;
  tickLower_contains?: InputMaybe<Scalars['String']>;
  tickLower_contains_nocase?: InputMaybe<Scalars['String']>;
  tickLower_not_contains?: InputMaybe<Scalars['String']>;
  tickLower_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tickLower_starts_with?: InputMaybe<Scalars['String']>;
  tickLower_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tickLower_not_starts_with?: InputMaybe<Scalars['String']>;
  tickLower_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tickLower_ends_with?: InputMaybe<Scalars['String']>;
  tickLower_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tickLower_not_ends_with?: InputMaybe<Scalars['String']>;
  tickLower_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tickLower_?: InputMaybe<uni_Tick_filter>;
  tickUpper?: InputMaybe<Scalars['String']>;
  tickUpper_not?: InputMaybe<Scalars['String']>;
  tickUpper_gt?: InputMaybe<Scalars['String']>;
  tickUpper_lt?: InputMaybe<Scalars['String']>;
  tickUpper_gte?: InputMaybe<Scalars['String']>;
  tickUpper_lte?: InputMaybe<Scalars['String']>;
  tickUpper_in?: InputMaybe<Array<Scalars['String']>>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['String']>>;
  tickUpper_contains?: InputMaybe<Scalars['String']>;
  tickUpper_contains_nocase?: InputMaybe<Scalars['String']>;
  tickUpper_not_contains?: InputMaybe<Scalars['String']>;
  tickUpper_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tickUpper_starts_with?: InputMaybe<Scalars['String']>;
  tickUpper_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tickUpper_not_starts_with?: InputMaybe<Scalars['String']>;
  tickUpper_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tickUpper_ends_with?: InputMaybe<Scalars['String']>;
  tickUpper_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tickUpper_not_ends_with?: InputMaybe<Scalars['String']>;
  tickUpper_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tickUpper_?: InputMaybe<uni_Tick_filter>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedToken0?: InputMaybe<Scalars['uni_BigDecimal']>;
  depositedToken0_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  depositedToken0_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  depositedToken0_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  depositedToken0_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  depositedToken0_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  depositedToken0_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  depositedToken0_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  depositedToken1?: InputMaybe<Scalars['uni_BigDecimal']>;
  depositedToken1_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  depositedToken1_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  depositedToken1_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  depositedToken1_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  depositedToken1_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  depositedToken1_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  depositedToken1_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  withdrawnToken0?: InputMaybe<Scalars['uni_BigDecimal']>;
  withdrawnToken0_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  withdrawnToken0_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  withdrawnToken0_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  withdrawnToken0_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  withdrawnToken0_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  withdrawnToken0_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  withdrawnToken0_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  withdrawnToken1?: InputMaybe<Scalars['uni_BigDecimal']>;
  withdrawnToken1_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  withdrawnToken1_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  withdrawnToken1_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  withdrawnToken1_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  withdrawnToken1_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  withdrawnToken1_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  withdrawnToken1_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  collectedFeesToken0?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  collectedFeesToken1?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<uni_Transaction_filter>;
  feeGrowthInside0LastX128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthInside0LastX128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthInside1LastX128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthInside1LastX128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<uni_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<uni_Position_filter>>>;
  or?: InputMaybe<Array<InputMaybe<uni_Position_filter>>>;
};

export type uni_Position_orderBy =
  | 'id'
  | 'owner'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__totalSupply'
  | 'token0__volume'
  | 'token0__volumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__feesUSD'
  | 'token0__txCount'
  | 'token0__poolCount'
  | 'token0__totalValueLocked'
  | 'token0__totalValueLockedUSD'
  | 'token0__totalValueLockedUSDUntracked'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__totalSupply'
  | 'token1__volume'
  | 'token1__volumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__feesUSD'
  | 'token1__txCount'
  | 'token1__poolCount'
  | 'token1__totalValueLocked'
  | 'token1__totalValueLockedUSD'
  | 'token1__totalValueLockedUSDUntracked'
  | 'token1__derivedETH'
  | 'tickLower'
  | 'tickLower__id'
  | 'tickLower__poolAddress'
  | 'tickLower__tickIdx'
  | 'tickLower__liquidityGross'
  | 'tickLower__liquidityNet'
  | 'tickLower__price0'
  | 'tickLower__price1'
  | 'tickLower__volumeToken0'
  | 'tickLower__volumeToken1'
  | 'tickLower__volumeUSD'
  | 'tickLower__untrackedVolumeUSD'
  | 'tickLower__feesUSD'
  | 'tickLower__collectedFeesToken0'
  | 'tickLower__collectedFeesToken1'
  | 'tickLower__collectedFeesUSD'
  | 'tickLower__createdAtTimestamp'
  | 'tickLower__createdAtBlockNumber'
  | 'tickLower__liquidityProviderCount'
  | 'tickLower__feeGrowthOutside0X128'
  | 'tickLower__feeGrowthOutside1X128'
  | 'tickUpper'
  | 'tickUpper__id'
  | 'tickUpper__poolAddress'
  | 'tickUpper__tickIdx'
  | 'tickUpper__liquidityGross'
  | 'tickUpper__liquidityNet'
  | 'tickUpper__price0'
  | 'tickUpper__price1'
  | 'tickUpper__volumeToken0'
  | 'tickUpper__volumeToken1'
  | 'tickUpper__volumeUSD'
  | 'tickUpper__untrackedVolumeUSD'
  | 'tickUpper__feesUSD'
  | 'tickUpper__collectedFeesToken0'
  | 'tickUpper__collectedFeesToken1'
  | 'tickUpper__collectedFeesUSD'
  | 'tickUpper__createdAtTimestamp'
  | 'tickUpper__createdAtBlockNumber'
  | 'tickUpper__liquidityProviderCount'
  | 'tickUpper__feeGrowthOutside0X128'
  | 'tickUpper__feeGrowthOutside1X128'
  | 'liquidity'
  | 'depositedToken0'
  | 'depositedToken1'
  | 'withdrawnToken0'
  | 'withdrawnToken1'
  | 'collectedFeesToken0'
  | 'collectedFeesToken1'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'feeGrowthInside0LastX128'
  | 'feeGrowthInside1LastX128';

export type Query = {
  uni_factory?: Maybe<uni_Factory>;
  uni_factories: Array<uni_Factory>;
  uni_bundle?: Maybe<uni_Bundle>;
  uni_bundles: Array<uni_Bundle>;
  uni_token?: Maybe<uni_Token>;
  uni_tokens: Array<uni_Token>;
  uni_pool?: Maybe<uni_Pool>;
  uni_pools: Array<uni_Pool>;
  uni_tick?: Maybe<uni_Tick>;
  uni_ticks: Array<uni_Tick>;
  uni_position?: Maybe<uni_Position>;
  uni_positions: Array<uni_Position>;
  uni_positionSnapshot?: Maybe<uni_PositionSnapshot>;
  uni_positionSnapshots: Array<uni_PositionSnapshot>;
  uni_transaction?: Maybe<uni_Transaction>;
  uni_transactions: Array<uni_Transaction>;
  uni_mint?: Maybe<uni_Mint>;
  uni_mints: Array<uni_Mint>;
  uni_burn?: Maybe<uni_Burn>;
  uni_burns: Array<uni_Burn>;
  uni_swap?: Maybe<uni_Swap>;
  uni_swaps: Array<uni_Swap>;
  uni_collect?: Maybe<uni_Collect>;
  uni_collects: Array<uni_Collect>;
  uni_flash?: Maybe<uni_Flash>;
  uni_flashes: Array<uni_Flash>;
  uni_uniswapDayData?: Maybe<uni_UniswapDayData>;
  uni_uniswapDayDatas: Array<uni_UniswapDayData>;
  uni_poolDayData?: Maybe<uni_PoolDayData>;
  uni_poolDayDatas: Array<uni_PoolDayData>;
  uni_poolHourData?: Maybe<uni_PoolHourData>;
  uni_poolHourDatas: Array<uni_PoolHourData>;
  uni_tickHourData?: Maybe<uni_TickHourData>;
  uni_tickHourDatas: Array<uni_TickHourData>;
  uni_tickDayData?: Maybe<uni_TickDayData>;
  uni_tickDayDatas: Array<uni_TickDayData>;
  uni_tokenDayData?: Maybe<uni_TokenDayData>;
  uni_tokenDayDatas: Array<uni_TokenDayData>;
  uni_tokenHourData?: Maybe<uni_TokenHourData>;
  uni_tokenHourDatas: Array<uni_TokenHourData>;
  /** Access to subgraph metadata */
  uni__meta?: Maybe<uni__Meta_>;
};


export type Queryuni_factoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_factoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Factory_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Factory_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_bundleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_bundlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Bundle_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Bundle_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_tokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Token_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Token_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_poolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_poolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Pool_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Pool_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_tickArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_ticksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Tick_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Tick_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_positionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_positionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Position_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Position_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_positionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_positionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_PositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_PositionSnapshot_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_transactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_transactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Transaction_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Transaction_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_mintArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_mintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Mint_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Mint_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_burnArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_burnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Burn_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Burn_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_swapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_swapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Swap_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Swap_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_collectArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_collectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Collect_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Collect_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_flashArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_flashesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Flash_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Flash_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_uniswapDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_uniswapDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_UniswapDayData_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_UniswapDayData_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_poolDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_poolDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_PoolDayData_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_PoolDayData_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_poolHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_poolHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_PoolHourData_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_PoolHourData_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_tickHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_tickHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_TickHourData_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_TickHourData_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_tickDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_tickDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_TickDayData_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_TickDayData_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_tokenDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_tokenDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_TokenDayData_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_TokenDayData_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_tokenHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni_tokenHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_TokenHourData_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_TokenHourData_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Queryuni__metaArgs = {
  block?: InputMaybe<uni_Block_height>;
};

export type Subscription = {
  uni_factory?: Maybe<uni_Factory>;
  uni_factories: Array<uni_Factory>;
  uni_bundle?: Maybe<uni_Bundle>;
  uni_bundles: Array<uni_Bundle>;
  uni_token?: Maybe<uni_Token>;
  uni_tokens: Array<uni_Token>;
  uni_pool?: Maybe<uni_Pool>;
  uni_pools: Array<uni_Pool>;
  uni_tick?: Maybe<uni_Tick>;
  uni_ticks: Array<uni_Tick>;
  uni_position?: Maybe<uni_Position>;
  uni_positions: Array<uni_Position>;
  uni_positionSnapshot?: Maybe<uni_PositionSnapshot>;
  uni_positionSnapshots: Array<uni_PositionSnapshot>;
  uni_transaction?: Maybe<uni_Transaction>;
  uni_transactions: Array<uni_Transaction>;
  uni_mint?: Maybe<uni_Mint>;
  uni_mints: Array<uni_Mint>;
  uni_burn?: Maybe<uni_Burn>;
  uni_burns: Array<uni_Burn>;
  uni_swap?: Maybe<uni_Swap>;
  uni_swaps: Array<uni_Swap>;
  uni_collect?: Maybe<uni_Collect>;
  uni_collects: Array<uni_Collect>;
  uni_flash?: Maybe<uni_Flash>;
  uni_flashes: Array<uni_Flash>;
  uni_uniswapDayData?: Maybe<uni_UniswapDayData>;
  uni_uniswapDayDatas: Array<uni_UniswapDayData>;
  uni_poolDayData?: Maybe<uni_PoolDayData>;
  uni_poolDayDatas: Array<uni_PoolDayData>;
  uni_poolHourData?: Maybe<uni_PoolHourData>;
  uni_poolHourDatas: Array<uni_PoolHourData>;
  uni_tickHourData?: Maybe<uni_TickHourData>;
  uni_tickHourDatas: Array<uni_TickHourData>;
  uni_tickDayData?: Maybe<uni_TickDayData>;
  uni_tickDayDatas: Array<uni_TickDayData>;
  uni_tokenDayData?: Maybe<uni_TokenDayData>;
  uni_tokenDayDatas: Array<uni_TokenDayData>;
  uni_tokenHourData?: Maybe<uni_TokenHourData>;
  uni_tokenHourDatas: Array<uni_TokenHourData>;
  /** Access to subgraph metadata */
  uni__meta?: Maybe<uni__Meta_>;
};


export type Subscriptionuni_factoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_factoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Factory_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Factory_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_bundleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_bundlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Bundle_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Bundle_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_tokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Token_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Token_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_poolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_poolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Pool_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Pool_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_tickArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_ticksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Tick_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Tick_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_positionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_positionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Position_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Position_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_positionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_positionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_PositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_PositionSnapshot_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_transactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_transactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Transaction_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Transaction_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_mintArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_mintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Mint_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Mint_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_burnArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_burnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Burn_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Burn_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_swapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_swapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Swap_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Swap_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_collectArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_collectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Collect_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Collect_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_flashArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_flashesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Flash_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Flash_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_uniswapDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_uniswapDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_UniswapDayData_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_UniswapDayData_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_poolDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_poolDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_PoolDayData_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_PoolDayData_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_poolHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_poolHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_PoolHourData_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_PoolHourData_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_tickHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_tickHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_TickHourData_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_TickHourData_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_tickDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_tickDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_TickDayData_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_TickDayData_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_tokenDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_tokenDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_TokenDayData_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_TokenDayData_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_tokenHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni_tokenHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_TokenHourData_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_TokenHourData_filter>;
  block?: InputMaybe<uni_Block_height>;
  subgraphError?: uni__SubgraphErrorPolicy_;
};


export type Subscriptionuni__metaArgs = {
  block?: InputMaybe<uni_Block_height>;
};

export type uni_Swap = {
  id: Scalars['ID'];
  transaction: uni_Transaction;
  timestamp: Scalars['BigInt'];
  pool: uni_Pool;
  token0: uni_Token;
  token1: uni_Token;
  sender: Scalars['uni_Bytes'];
  recipient: Scalars['uni_Bytes'];
  origin: Scalars['uni_Bytes'];
  amount0: Scalars['uni_BigDecimal'];
  amount1: Scalars['uni_BigDecimal'];
  amountUSD: Scalars['uni_BigDecimal'];
  sqrtPriceX96: Scalars['BigInt'];
  tick: Scalars['BigInt'];
  logIndex?: Maybe<Scalars['BigInt']>;
};

export type uni_Swap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<uni_Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<uni_Pool_filter>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<uni_Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<uni_Token_filter>;
  sender?: InputMaybe<Scalars['uni_Bytes']>;
  sender_not?: InputMaybe<Scalars['uni_Bytes']>;
  sender_gt?: InputMaybe<Scalars['uni_Bytes']>;
  sender_lt?: InputMaybe<Scalars['uni_Bytes']>;
  sender_gte?: InputMaybe<Scalars['uni_Bytes']>;
  sender_lte?: InputMaybe<Scalars['uni_Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  sender_contains?: InputMaybe<Scalars['uni_Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['uni_Bytes']>;
  recipient?: InputMaybe<Scalars['uni_Bytes']>;
  recipient_not?: InputMaybe<Scalars['uni_Bytes']>;
  recipient_gt?: InputMaybe<Scalars['uni_Bytes']>;
  recipient_lt?: InputMaybe<Scalars['uni_Bytes']>;
  recipient_gte?: InputMaybe<Scalars['uni_Bytes']>;
  recipient_lte?: InputMaybe<Scalars['uni_Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['uni_Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['uni_Bytes']>;
  origin?: InputMaybe<Scalars['uni_Bytes']>;
  origin_not?: InputMaybe<Scalars['uni_Bytes']>;
  origin_gt?: InputMaybe<Scalars['uni_Bytes']>;
  origin_lt?: InputMaybe<Scalars['uni_Bytes']>;
  origin_gte?: InputMaybe<Scalars['uni_Bytes']>;
  origin_lte?: InputMaybe<Scalars['uni_Bytes']>;
  origin_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  origin_not_in?: InputMaybe<Array<Scalars['uni_Bytes']>>;
  origin_contains?: InputMaybe<Scalars['uni_Bytes']>;
  origin_not_contains?: InputMaybe<Scalars['uni_Bytes']>;
  amount0?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amount1?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amountUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  sqrtPriceX96?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_not?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_gt?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_lt?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_gte?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_lte?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPriceX96_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tick?: InputMaybe<Scalars['BigInt']>;
  tick_not?: InputMaybe<Scalars['BigInt']>;
  tick_gt?: InputMaybe<Scalars['BigInt']>;
  tick_lt?: InputMaybe<Scalars['BigInt']>;
  tick_gte?: InputMaybe<Scalars['BigInt']>;
  tick_lte?: InputMaybe<Scalars['BigInt']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<uni_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<uni_Swap_filter>>>;
  or?: InputMaybe<Array<InputMaybe<uni_Swap_filter>>>;
};

export type uni_Swap_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'transaction__gasUsed'
  | 'transaction__gasPrice'
  | 'timestamp'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__totalSupply'
  | 'token0__volume'
  | 'token0__volumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__feesUSD'
  | 'token0__txCount'
  | 'token0__poolCount'
  | 'token0__totalValueLocked'
  | 'token0__totalValueLockedUSD'
  | 'token0__totalValueLockedUSDUntracked'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__totalSupply'
  | 'token1__volume'
  | 'token1__volumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__feesUSD'
  | 'token1__txCount'
  | 'token1__poolCount'
  | 'token1__totalValueLocked'
  | 'token1__totalValueLockedUSD'
  | 'token1__totalValueLockedUSDUntracked'
  | 'token1__derivedETH'
  | 'sender'
  | 'recipient'
  | 'origin'
  | 'amount0'
  | 'amount1'
  | 'amountUSD'
  | 'sqrtPriceX96'
  | 'tick'
  | 'logIndex';

export type uni_Tick = {
  id: Scalars['ID'];
  poolAddress?: Maybe<Scalars['String']>;
  tickIdx: Scalars['BigInt'];
  pool: uni_Pool;
  liquidityGross: Scalars['BigInt'];
  liquidityNet: Scalars['BigInt'];
  price0: Scalars['uni_BigDecimal'];
  price1: Scalars['uni_BigDecimal'];
  volumeToken0: Scalars['uni_BigDecimal'];
  volumeToken1: Scalars['uni_BigDecimal'];
  volumeUSD: Scalars['uni_BigDecimal'];
  untrackedVolumeUSD: Scalars['uni_BigDecimal'];
  feesUSD: Scalars['uni_BigDecimal'];
  collectedFeesToken0: Scalars['uni_BigDecimal'];
  collectedFeesToken1: Scalars['uni_BigDecimal'];
  collectedFeesUSD: Scalars['uni_BigDecimal'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  liquidityProviderCount: Scalars['BigInt'];
  feeGrowthOutside0X128: Scalars['BigInt'];
  feeGrowthOutside1X128: Scalars['BigInt'];
};

export type uni_TickDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  pool: uni_Pool;
  tick: uni_Tick;
  liquidityGross: Scalars['BigInt'];
  liquidityNet: Scalars['BigInt'];
  volumeToken0: Scalars['uni_BigDecimal'];
  volumeToken1: Scalars['uni_BigDecimal'];
  volumeUSD: Scalars['uni_BigDecimal'];
  feesUSD: Scalars['uni_BigDecimal'];
  feeGrowthOutside0X128: Scalars['BigInt'];
  feeGrowthOutside1X128: Scalars['BigInt'];
};

export type uni_TickDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<uni_Pool_filter>;
  tick?: InputMaybe<Scalars['String']>;
  tick_not?: InputMaybe<Scalars['String']>;
  tick_gt?: InputMaybe<Scalars['String']>;
  tick_lt?: InputMaybe<Scalars['String']>;
  tick_gte?: InputMaybe<Scalars['String']>;
  tick_lte?: InputMaybe<Scalars['String']>;
  tick_in?: InputMaybe<Array<Scalars['String']>>;
  tick_not_in?: InputMaybe<Array<Scalars['String']>>;
  tick_contains?: InputMaybe<Scalars['String']>;
  tick_contains_nocase?: InputMaybe<Scalars['String']>;
  tick_not_contains?: InputMaybe<Scalars['String']>;
  tick_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tick_starts_with?: InputMaybe<Scalars['String']>;
  tick_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tick_not_starts_with?: InputMaybe<Scalars['String']>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tick_ends_with?: InputMaybe<Scalars['String']>;
  tick_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tick_not_ends_with?: InputMaybe<Scalars['String']>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tick_?: InputMaybe<uni_Tick_filter>;
  liquidityGross?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_not?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityGross_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNet?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_not?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNet_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeToken0?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  feeGrowthOutside0X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside0X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside1X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside1X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<uni_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<uni_TickDayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<uni_TickDayData_filter>>>;
};

export type uni_TickDayData_orderBy =
  | 'id'
  | 'date'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'tick'
  | 'tick__id'
  | 'tick__poolAddress'
  | 'tick__tickIdx'
  | 'tick__liquidityGross'
  | 'tick__liquidityNet'
  | 'tick__price0'
  | 'tick__price1'
  | 'tick__volumeToken0'
  | 'tick__volumeToken1'
  | 'tick__volumeUSD'
  | 'tick__untrackedVolumeUSD'
  | 'tick__feesUSD'
  | 'tick__collectedFeesToken0'
  | 'tick__collectedFeesToken1'
  | 'tick__collectedFeesUSD'
  | 'tick__createdAtTimestamp'
  | 'tick__createdAtBlockNumber'
  | 'tick__liquidityProviderCount'
  | 'tick__feeGrowthOutside0X128'
  | 'tick__feeGrowthOutside1X128'
  | 'liquidityGross'
  | 'liquidityNet'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'feesUSD'
  | 'feeGrowthOutside0X128'
  | 'feeGrowthOutside1X128';

export type uni_TickHourData = {
  id: Scalars['ID'];
  periodStartUnix: Scalars['Int'];
  pool: uni_Pool;
  tick: uni_Tick;
  liquidityGross: Scalars['BigInt'];
  liquidityNet: Scalars['BigInt'];
  volumeToken0: Scalars['uni_BigDecimal'];
  volumeToken1: Scalars['uni_BigDecimal'];
  volumeUSD: Scalars['uni_BigDecimal'];
  feesUSD: Scalars['uni_BigDecimal'];
};

export type uni_TickHourData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  periodStartUnix?: InputMaybe<Scalars['Int']>;
  periodStartUnix_not?: InputMaybe<Scalars['Int']>;
  periodStartUnix_gt?: InputMaybe<Scalars['Int']>;
  periodStartUnix_lt?: InputMaybe<Scalars['Int']>;
  periodStartUnix_gte?: InputMaybe<Scalars['Int']>;
  periodStartUnix_lte?: InputMaybe<Scalars['Int']>;
  periodStartUnix_in?: InputMaybe<Array<Scalars['Int']>>;
  periodStartUnix_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<uni_Pool_filter>;
  tick?: InputMaybe<Scalars['String']>;
  tick_not?: InputMaybe<Scalars['String']>;
  tick_gt?: InputMaybe<Scalars['String']>;
  tick_lt?: InputMaybe<Scalars['String']>;
  tick_gte?: InputMaybe<Scalars['String']>;
  tick_lte?: InputMaybe<Scalars['String']>;
  tick_in?: InputMaybe<Array<Scalars['String']>>;
  tick_not_in?: InputMaybe<Array<Scalars['String']>>;
  tick_contains?: InputMaybe<Scalars['String']>;
  tick_contains_nocase?: InputMaybe<Scalars['String']>;
  tick_not_contains?: InputMaybe<Scalars['String']>;
  tick_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tick_starts_with?: InputMaybe<Scalars['String']>;
  tick_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tick_not_starts_with?: InputMaybe<Scalars['String']>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tick_ends_with?: InputMaybe<Scalars['String']>;
  tick_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tick_not_ends_with?: InputMaybe<Scalars['String']>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tick_?: InputMaybe<uni_Tick_filter>;
  liquidityGross?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_not?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityGross_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNet?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_not?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNet_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeToken0?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<uni_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<uni_TickHourData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<uni_TickHourData_filter>>>;
};

export type uni_TickHourData_orderBy =
  | 'id'
  | 'periodStartUnix'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'tick'
  | 'tick__id'
  | 'tick__poolAddress'
  | 'tick__tickIdx'
  | 'tick__liquidityGross'
  | 'tick__liquidityNet'
  | 'tick__price0'
  | 'tick__price1'
  | 'tick__volumeToken0'
  | 'tick__volumeToken1'
  | 'tick__volumeUSD'
  | 'tick__untrackedVolumeUSD'
  | 'tick__feesUSD'
  | 'tick__collectedFeesToken0'
  | 'tick__collectedFeesToken1'
  | 'tick__collectedFeesUSD'
  | 'tick__createdAtTimestamp'
  | 'tick__createdAtBlockNumber'
  | 'tick__liquidityProviderCount'
  | 'tick__feeGrowthOutside0X128'
  | 'tick__feeGrowthOutside1X128'
  | 'liquidityGross'
  | 'liquidityNet'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'feesUSD';

export type uni_Tick_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  poolAddress?: InputMaybe<Scalars['String']>;
  poolAddress_not?: InputMaybe<Scalars['String']>;
  poolAddress_gt?: InputMaybe<Scalars['String']>;
  poolAddress_lt?: InputMaybe<Scalars['String']>;
  poolAddress_gte?: InputMaybe<Scalars['String']>;
  poolAddress_lte?: InputMaybe<Scalars['String']>;
  poolAddress_in?: InputMaybe<Array<Scalars['String']>>;
  poolAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolAddress_contains?: InputMaybe<Scalars['String']>;
  poolAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_not_contains?: InputMaybe<Scalars['String']>;
  poolAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_starts_with?: InputMaybe<Scalars['String']>;
  poolAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  poolAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_ends_with?: InputMaybe<Scalars['String']>;
  poolAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  poolAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tickIdx?: InputMaybe<Scalars['BigInt']>;
  tickIdx_not?: InputMaybe<Scalars['BigInt']>;
  tickIdx_gt?: InputMaybe<Scalars['BigInt']>;
  tickIdx_lt?: InputMaybe<Scalars['BigInt']>;
  tickIdx_gte?: InputMaybe<Scalars['BigInt']>;
  tickIdx_lte?: InputMaybe<Scalars['BigInt']>;
  tickIdx_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickIdx_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<uni_Pool_filter>;
  liquidityGross?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_not?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityGross_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNet?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_not?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNet_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price0?: InputMaybe<Scalars['uni_BigDecimal']>;
  price0_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  price0_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  price0_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  price0_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  price0_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  price0_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  price0_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  price1?: InputMaybe<Scalars['uni_BigDecimal']>;
  price1_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  price1_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  price1_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  price1_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  price1_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  price1_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  price1_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  collectedFeesToken0?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  collectedFeesToken1?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  collectedFeesUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  collectedFeesUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  collectedFeesUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_not?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside0X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside0X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside1X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside1X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<uni_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<uni_Tick_filter>>>;
  or?: InputMaybe<Array<InputMaybe<uni_Tick_filter>>>;
};

export type uni_Tick_orderBy =
  | 'id'
  | 'poolAddress'
  | 'tickIdx'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__createdAtBlockNumber'
  | 'pool__feeTier'
  | 'pool__liquidity'
  | 'pool__sqrtPrice'
  | 'pool__feeGrowthGlobal0X128'
  | 'pool__feeGrowthGlobal1X128'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__tick'
  | 'pool__observationIndex'
  | 'pool__volumeToken0'
  | 'pool__volumeToken1'
  | 'pool__volumeUSD'
  | 'pool__untrackedVolumeUSD'
  | 'pool__feesUSD'
  | 'pool__txCount'
  | 'pool__collectedFeesToken0'
  | 'pool__collectedFeesToken1'
  | 'pool__collectedFeesUSD'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalValueLockedETH'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalValueLockedUSDUntracked'
  | 'pool__liquidityProviderCount'
  | 'liquidityGross'
  | 'liquidityNet'
  | 'price0'
  | 'price1'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'feesUSD'
  | 'collectedFeesToken0'
  | 'collectedFeesToken1'
  | 'collectedFeesUSD'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'liquidityProviderCount'
  | 'feeGrowthOutside0X128'
  | 'feeGrowthOutside1X128';

export type uni_Token = {
  id: Scalars['ID'];
  symbol: Scalars['String'];
  name: Scalars['String'];
  decimals: Scalars['BigInt'];
  totalSupply: Scalars['BigInt'];
  volume: Scalars['uni_BigDecimal'];
  volumeUSD: Scalars['uni_BigDecimal'];
  untrackedVolumeUSD: Scalars['uni_BigDecimal'];
  feesUSD: Scalars['uni_BigDecimal'];
  txCount: Scalars['BigInt'];
  poolCount: Scalars['BigInt'];
  totalValueLocked: Scalars['uni_BigDecimal'];
  totalValueLockedUSD: Scalars['uni_BigDecimal'];
  totalValueLockedUSDUntracked: Scalars['uni_BigDecimal'];
  derivedETH: Scalars['uni_BigDecimal'];
  whitelistPools: Array<uni_Pool>;
  tokenDayData: Array<uni_TokenDayData>;
};


export type uni_TokenwhitelistPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Pool_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Pool_filter>;
};


export type uni_TokentokenDayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_TokenDayData_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_TokenDayData_filter>;
};

export type uni_TokenDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  token: uni_Token;
  volume: Scalars['uni_BigDecimal'];
  volumeUSD: Scalars['uni_BigDecimal'];
  untrackedVolumeUSD: Scalars['uni_BigDecimal'];
  totalValueLocked: Scalars['uni_BigDecimal'];
  totalValueLockedUSD: Scalars['uni_BigDecimal'];
  priceUSD: Scalars['uni_BigDecimal'];
  feesUSD: Scalars['uni_BigDecimal'];
  open: Scalars['uni_BigDecimal'];
  high: Scalars['uni_BigDecimal'];
  low: Scalars['uni_BigDecimal'];
  close: Scalars['uni_BigDecimal'];
};

export type uni_TokenDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<uni_Token_filter>;
  volume?: InputMaybe<Scalars['uni_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLocked?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLocked_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLocked_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLocked_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLocked_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLocked_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  priceUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  priceUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  priceUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  priceUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  priceUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  priceUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  priceUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  open?: InputMaybe<Scalars['uni_BigDecimal']>;
  open_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  open_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  open_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  open_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  open_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  high?: InputMaybe<Scalars['uni_BigDecimal']>;
  high_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  high_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  high_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  high_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  high_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  low?: InputMaybe<Scalars['uni_BigDecimal']>;
  low_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  low_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  low_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  low_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  low_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  close?: InputMaybe<Scalars['uni_BigDecimal']>;
  close_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  close_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  close_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  close_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  close_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<uni_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<uni_TokenDayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<uni_TokenDayData_filter>>>;
};

export type uni_TokenDayData_orderBy =
  | 'id'
  | 'date'
  | 'token'
  | 'token__id'
  | 'token__symbol'
  | 'token__name'
  | 'token__decimals'
  | 'token__totalSupply'
  | 'token__volume'
  | 'token__volumeUSD'
  | 'token__untrackedVolumeUSD'
  | 'token__feesUSD'
  | 'token__txCount'
  | 'token__poolCount'
  | 'token__totalValueLocked'
  | 'token__totalValueLockedUSD'
  | 'token__totalValueLockedUSDUntracked'
  | 'token__derivedETH'
  | 'volume'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'totalValueLocked'
  | 'totalValueLockedUSD'
  | 'priceUSD'
  | 'feesUSD'
  | 'open'
  | 'high'
  | 'low'
  | 'close';

export type uni_TokenHourData = {
  id: Scalars['ID'];
  periodStartUnix: Scalars['Int'];
  token: uni_Token;
  volume: Scalars['uni_BigDecimal'];
  volumeUSD: Scalars['uni_BigDecimal'];
  untrackedVolumeUSD: Scalars['uni_BigDecimal'];
  totalValueLocked: Scalars['uni_BigDecimal'];
  totalValueLockedUSD: Scalars['uni_BigDecimal'];
  priceUSD: Scalars['uni_BigDecimal'];
  feesUSD: Scalars['uni_BigDecimal'];
  open: Scalars['uni_BigDecimal'];
  high: Scalars['uni_BigDecimal'];
  low: Scalars['uni_BigDecimal'];
  close: Scalars['uni_BigDecimal'];
};

export type uni_TokenHourData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  periodStartUnix?: InputMaybe<Scalars['Int']>;
  periodStartUnix_not?: InputMaybe<Scalars['Int']>;
  periodStartUnix_gt?: InputMaybe<Scalars['Int']>;
  periodStartUnix_lt?: InputMaybe<Scalars['Int']>;
  periodStartUnix_gte?: InputMaybe<Scalars['Int']>;
  periodStartUnix_lte?: InputMaybe<Scalars['Int']>;
  periodStartUnix_in?: InputMaybe<Array<Scalars['Int']>>;
  periodStartUnix_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<uni_Token_filter>;
  volume?: InputMaybe<Scalars['uni_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLocked?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLocked_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLocked_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLocked_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLocked_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLocked_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  priceUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  priceUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  priceUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  priceUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  priceUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  priceUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  priceUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  open?: InputMaybe<Scalars['uni_BigDecimal']>;
  open_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  open_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  open_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  open_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  open_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  high?: InputMaybe<Scalars['uni_BigDecimal']>;
  high_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  high_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  high_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  high_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  high_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  low?: InputMaybe<Scalars['uni_BigDecimal']>;
  low_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  low_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  low_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  low_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  low_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  close?: InputMaybe<Scalars['uni_BigDecimal']>;
  close_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  close_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  close_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  close_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  close_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<uni_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<uni_TokenHourData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<uni_TokenHourData_filter>>>;
};

export type uni_TokenHourData_orderBy =
  | 'id'
  | 'periodStartUnix'
  | 'token'
  | 'token__id'
  | 'token__symbol'
  | 'token__name'
  | 'token__decimals'
  | 'token__totalSupply'
  | 'token__volume'
  | 'token__volumeUSD'
  | 'token__untrackedVolumeUSD'
  | 'token__feesUSD'
  | 'token__txCount'
  | 'token__poolCount'
  | 'token__totalValueLocked'
  | 'token__totalValueLockedUSD'
  | 'token__totalValueLockedUSDUntracked'
  | 'token__derivedETH'
  | 'volume'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'totalValueLocked'
  | 'totalValueLockedUSD'
  | 'priceUSD'
  | 'feesUSD'
  | 'open'
  | 'high'
  | 'low'
  | 'close';

export type uni_Token_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['uni_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poolCount?: InputMaybe<Scalars['BigInt']>;
  poolCount_not?: InputMaybe<Scalars['BigInt']>;
  poolCount_gt?: InputMaybe<Scalars['BigInt']>;
  poolCount_lt?: InputMaybe<Scalars['BigInt']>;
  poolCount_gte?: InputMaybe<Scalars['BigInt']>;
  poolCount_lte?: InputMaybe<Scalars['BigInt']>;
  poolCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poolCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLocked?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLocked_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLocked_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLocked_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLocked_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLocked_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedUSDUntracked?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSDUntracked_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSDUntracked_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSDUntracked_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSDUntracked_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSDUntracked_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  totalValueLockedUSDUntracked_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  totalValueLockedUSDUntracked_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  derivedETH?: InputMaybe<Scalars['uni_BigDecimal']>;
  derivedETH_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  derivedETH_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  derivedETH_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  derivedETH_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  derivedETH_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  derivedETH_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  derivedETH_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  whitelistPools?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_not?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_contains?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_not_contains?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_?: InputMaybe<uni_Pool_filter>;
  tokenDayData_?: InputMaybe<uni_TokenDayData_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<uni_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<uni_Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<uni_Token_filter>>>;
};

export type uni_Token_orderBy =
  | 'id'
  | 'symbol'
  | 'name'
  | 'decimals'
  | 'totalSupply'
  | 'volume'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'feesUSD'
  | 'txCount'
  | 'poolCount'
  | 'totalValueLocked'
  | 'totalValueLockedUSD'
  | 'totalValueLockedUSDUntracked'
  | 'derivedETH'
  | 'whitelistPools'
  | 'tokenDayData';

export type uni_Transaction = {
  id: Scalars['ID'];
  blockNumber: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  mints: Array<Maybe<uni_Mint>>;
  burns: Array<Maybe<uni_Burn>>;
  swaps: Array<Maybe<uni_Swap>>;
  flashed: Array<Maybe<uni_Flash>>;
  collects: Array<Maybe<uni_Collect>>;
};


export type uni_TransactionmintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Mint_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Mint_filter>;
};


export type uni_TransactionburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Burn_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Burn_filter>;
};


export type uni_TransactionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Swap_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Swap_filter>;
};


export type uni_TransactionflashedArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Flash_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Flash_filter>;
};


export type uni_TransactioncollectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<uni_Collect_orderBy>;
  orderDirection?: InputMaybe<uni_OrderDirection>;
  where?: InputMaybe<uni_Collect_filter>;
};

export type uni_Transaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mints_?: InputMaybe<uni_Mint_filter>;
  burns_?: InputMaybe<uni_Burn_filter>;
  swaps_?: InputMaybe<uni_Swap_filter>;
  flashed_?: InputMaybe<uni_Flash_filter>;
  collects_?: InputMaybe<uni_Collect_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<uni_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<uni_Transaction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<uni_Transaction_filter>>>;
};

export type uni_Transaction_orderBy =
  | 'id'
  | 'blockNumber'
  | 'timestamp'
  | 'gasUsed'
  | 'gasPrice'
  | 'mints'
  | 'burns'
  | 'swaps'
  | 'flashed'
  | 'collects';

export type uni_UniswapDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  volumeETH: Scalars['uni_BigDecimal'];
  volumeUSD: Scalars['uni_BigDecimal'];
  volumeUSDUntracked: Scalars['uni_BigDecimal'];
  feesUSD: Scalars['uni_BigDecimal'];
  txCount: Scalars['BigInt'];
  tvlUSD: Scalars['uni_BigDecimal'];
};

export type uni_UniswapDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  volumeETH?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeETH_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeETH_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeETH_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeETH_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeETH_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeETH_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeETH_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeUSDUntracked?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSDUntracked_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSDUntracked_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSDUntracked_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSDUntracked_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSDUntracked_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  volumeUSDUntracked_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  volumeUSDUntracked_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tvlUSD?: InputMaybe<Scalars['uni_BigDecimal']>;
  tvlUSD_not?: InputMaybe<Scalars['uni_BigDecimal']>;
  tvlUSD_gt?: InputMaybe<Scalars['uni_BigDecimal']>;
  tvlUSD_lt?: InputMaybe<Scalars['uni_BigDecimal']>;
  tvlUSD_gte?: InputMaybe<Scalars['uni_BigDecimal']>;
  tvlUSD_lte?: InputMaybe<Scalars['uni_BigDecimal']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['uni_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<uni_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<uni_UniswapDayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<uni_UniswapDayData_filter>>>;
};

export type uni_UniswapDayData_orderBy =
  | 'id'
  | 'date'
  | 'volumeETH'
  | 'volumeUSD'
  | 'volumeUSDUntracked'
  | 'feesUSD'
  | 'txCount'
  | 'tvlUSD';

export type uni__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['uni_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['uni_Bytes']>;
};

/** The type for the top-level _meta field */
export type uni__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: uni__Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type uni__SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  uni_factory: InContextSdkMethod<Query['uni_factory'], Queryuni_factoryArgs, MeshContext>,
  /** null **/
  uni_factories: InContextSdkMethod<Query['uni_factories'], Queryuni_factoriesArgs, MeshContext>,
  /** null **/
  uni_bundle: InContextSdkMethod<Query['uni_bundle'], Queryuni_bundleArgs, MeshContext>,
  /** null **/
  uni_bundles: InContextSdkMethod<Query['uni_bundles'], Queryuni_bundlesArgs, MeshContext>,
  /** null **/
  uni_token: InContextSdkMethod<Query['uni_token'], Queryuni_tokenArgs, MeshContext>,
  /** null **/
  uni_tokens: InContextSdkMethod<Query['uni_tokens'], Queryuni_tokensArgs, MeshContext>,
  /** null **/
  uni_pool: InContextSdkMethod<Query['uni_pool'], Queryuni_poolArgs, MeshContext>,
  /** null **/
  uni_pools: InContextSdkMethod<Query['uni_pools'], Queryuni_poolsArgs, MeshContext>,
  /** null **/
  uni_tick: InContextSdkMethod<Query['uni_tick'], Queryuni_tickArgs, MeshContext>,
  /** null **/
  uni_ticks: InContextSdkMethod<Query['uni_ticks'], Queryuni_ticksArgs, MeshContext>,
  /** null **/
  uni_position: InContextSdkMethod<Query['uni_position'], Queryuni_positionArgs, MeshContext>,
  /** null **/
  uni_positions: InContextSdkMethod<Query['uni_positions'], Queryuni_positionsArgs, MeshContext>,
  /** null **/
  uni_positionSnapshot: InContextSdkMethod<Query['uni_positionSnapshot'], Queryuni_positionSnapshotArgs, MeshContext>,
  /** null **/
  uni_positionSnapshots: InContextSdkMethod<Query['uni_positionSnapshots'], Queryuni_positionSnapshotsArgs, MeshContext>,
  /** null **/
  uni_transaction: InContextSdkMethod<Query['uni_transaction'], Queryuni_transactionArgs, MeshContext>,
  /** null **/
  uni_transactions: InContextSdkMethod<Query['uni_transactions'], Queryuni_transactionsArgs, MeshContext>,
  /** null **/
  uni_mint: InContextSdkMethod<Query['uni_mint'], Queryuni_mintArgs, MeshContext>,
  /** null **/
  uni_mints: InContextSdkMethod<Query['uni_mints'], Queryuni_mintsArgs, MeshContext>,
  /** null **/
  uni_burn: InContextSdkMethod<Query['uni_burn'], Queryuni_burnArgs, MeshContext>,
  /** null **/
  uni_burns: InContextSdkMethod<Query['uni_burns'], Queryuni_burnsArgs, MeshContext>,
  /** null **/
  uni_swap: InContextSdkMethod<Query['uni_swap'], Queryuni_swapArgs, MeshContext>,
  /** null **/
  uni_swaps: InContextSdkMethod<Query['uni_swaps'], Queryuni_swapsArgs, MeshContext>,
  /** null **/
  uni_collect: InContextSdkMethod<Query['uni_collect'], Queryuni_collectArgs, MeshContext>,
  /** null **/
  uni_collects: InContextSdkMethod<Query['uni_collects'], Queryuni_collectsArgs, MeshContext>,
  /** null **/
  uni_flash: InContextSdkMethod<Query['uni_flash'], Queryuni_flashArgs, MeshContext>,
  /** null **/
  uni_flashes: InContextSdkMethod<Query['uni_flashes'], Queryuni_flashesArgs, MeshContext>,
  /** null **/
  uni_uniswapDayData: InContextSdkMethod<Query['uni_uniswapDayData'], Queryuni_uniswapDayDataArgs, MeshContext>,
  /** null **/
  uni_uniswapDayDatas: InContextSdkMethod<Query['uni_uniswapDayDatas'], Queryuni_uniswapDayDatasArgs, MeshContext>,
  /** null **/
  uni_poolDayData: InContextSdkMethod<Query['uni_poolDayData'], Queryuni_poolDayDataArgs, MeshContext>,
  /** null **/
  uni_poolDayDatas: InContextSdkMethod<Query['uni_poolDayDatas'], Queryuni_poolDayDatasArgs, MeshContext>,
  /** null **/
  uni_poolHourData: InContextSdkMethod<Query['uni_poolHourData'], Queryuni_poolHourDataArgs, MeshContext>,
  /** null **/
  uni_poolHourDatas: InContextSdkMethod<Query['uni_poolHourDatas'], Queryuni_poolHourDatasArgs, MeshContext>,
  /** null **/
  uni_tickHourData: InContextSdkMethod<Query['uni_tickHourData'], Queryuni_tickHourDataArgs, MeshContext>,
  /** null **/
  uni_tickHourDatas: InContextSdkMethod<Query['uni_tickHourDatas'], Queryuni_tickHourDatasArgs, MeshContext>,
  /** null **/
  uni_tickDayData: InContextSdkMethod<Query['uni_tickDayData'], Queryuni_tickDayDataArgs, MeshContext>,
  /** null **/
  uni_tickDayDatas: InContextSdkMethod<Query['uni_tickDayDatas'], Queryuni_tickDayDatasArgs, MeshContext>,
  /** null **/
  uni_tokenDayData: InContextSdkMethod<Query['uni_tokenDayData'], Queryuni_tokenDayDataArgs, MeshContext>,
  /** null **/
  uni_tokenDayDatas: InContextSdkMethod<Query['uni_tokenDayDatas'], Queryuni_tokenDayDatasArgs, MeshContext>,
  /** null **/
  uni_tokenHourData: InContextSdkMethod<Query['uni_tokenHourData'], Queryuni_tokenHourDataArgs, MeshContext>,
  /** null **/
  uni_tokenHourDatas: InContextSdkMethod<Query['uni_tokenHourDatas'], Queryuni_tokenHourDatasArgs, MeshContext>,
  /** Access to subgraph metadata **/
  uni__meta: InContextSdkMethod<Query['uni__meta'], Queryuni__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  uni_factory: InContextSdkMethod<Subscription['uni_factory'], Subscriptionuni_factoryArgs, MeshContext>,
  /** null **/
  uni_factories: InContextSdkMethod<Subscription['uni_factories'], Subscriptionuni_factoriesArgs, MeshContext>,
  /** null **/
  uni_bundle: InContextSdkMethod<Subscription['uni_bundle'], Subscriptionuni_bundleArgs, MeshContext>,
  /** null **/
  uni_bundles: InContextSdkMethod<Subscription['uni_bundles'], Subscriptionuni_bundlesArgs, MeshContext>,
  /** null **/
  uni_token: InContextSdkMethod<Subscription['uni_token'], Subscriptionuni_tokenArgs, MeshContext>,
  /** null **/
  uni_tokens: InContextSdkMethod<Subscription['uni_tokens'], Subscriptionuni_tokensArgs, MeshContext>,
  /** null **/
  uni_pool: InContextSdkMethod<Subscription['uni_pool'], Subscriptionuni_poolArgs, MeshContext>,
  /** null **/
  uni_pools: InContextSdkMethod<Subscription['uni_pools'], Subscriptionuni_poolsArgs, MeshContext>,
  /** null **/
  uni_tick: InContextSdkMethod<Subscription['uni_tick'], Subscriptionuni_tickArgs, MeshContext>,
  /** null **/
  uni_ticks: InContextSdkMethod<Subscription['uni_ticks'], Subscriptionuni_ticksArgs, MeshContext>,
  /** null **/
  uni_position: InContextSdkMethod<Subscription['uni_position'], Subscriptionuni_positionArgs, MeshContext>,
  /** null **/
  uni_positions: InContextSdkMethod<Subscription['uni_positions'], Subscriptionuni_positionsArgs, MeshContext>,
  /** null **/
  uni_positionSnapshot: InContextSdkMethod<Subscription['uni_positionSnapshot'], Subscriptionuni_positionSnapshotArgs, MeshContext>,
  /** null **/
  uni_positionSnapshots: InContextSdkMethod<Subscription['uni_positionSnapshots'], Subscriptionuni_positionSnapshotsArgs, MeshContext>,
  /** null **/
  uni_transaction: InContextSdkMethod<Subscription['uni_transaction'], Subscriptionuni_transactionArgs, MeshContext>,
  /** null **/
  uni_transactions: InContextSdkMethod<Subscription['uni_transactions'], Subscriptionuni_transactionsArgs, MeshContext>,
  /** null **/
  uni_mint: InContextSdkMethod<Subscription['uni_mint'], Subscriptionuni_mintArgs, MeshContext>,
  /** null **/
  uni_mints: InContextSdkMethod<Subscription['uni_mints'], Subscriptionuni_mintsArgs, MeshContext>,
  /** null **/
  uni_burn: InContextSdkMethod<Subscription['uni_burn'], Subscriptionuni_burnArgs, MeshContext>,
  /** null **/
  uni_burns: InContextSdkMethod<Subscription['uni_burns'], Subscriptionuni_burnsArgs, MeshContext>,
  /** null **/
  uni_swap: InContextSdkMethod<Subscription['uni_swap'], Subscriptionuni_swapArgs, MeshContext>,
  /** null **/
  uni_swaps: InContextSdkMethod<Subscription['uni_swaps'], Subscriptionuni_swapsArgs, MeshContext>,
  /** null **/
  uni_collect: InContextSdkMethod<Subscription['uni_collect'], Subscriptionuni_collectArgs, MeshContext>,
  /** null **/
  uni_collects: InContextSdkMethod<Subscription['uni_collects'], Subscriptionuni_collectsArgs, MeshContext>,
  /** null **/
  uni_flash: InContextSdkMethod<Subscription['uni_flash'], Subscriptionuni_flashArgs, MeshContext>,
  /** null **/
  uni_flashes: InContextSdkMethod<Subscription['uni_flashes'], Subscriptionuni_flashesArgs, MeshContext>,
  /** null **/
  uni_uniswapDayData: InContextSdkMethod<Subscription['uni_uniswapDayData'], Subscriptionuni_uniswapDayDataArgs, MeshContext>,
  /** null **/
  uni_uniswapDayDatas: InContextSdkMethod<Subscription['uni_uniswapDayDatas'], Subscriptionuni_uniswapDayDatasArgs, MeshContext>,
  /** null **/
  uni_poolDayData: InContextSdkMethod<Subscription['uni_poolDayData'], Subscriptionuni_poolDayDataArgs, MeshContext>,
  /** null **/
  uni_poolDayDatas: InContextSdkMethod<Subscription['uni_poolDayDatas'], Subscriptionuni_poolDayDatasArgs, MeshContext>,
  /** null **/
  uni_poolHourData: InContextSdkMethod<Subscription['uni_poolHourData'], Subscriptionuni_poolHourDataArgs, MeshContext>,
  /** null **/
  uni_poolHourDatas: InContextSdkMethod<Subscription['uni_poolHourDatas'], Subscriptionuni_poolHourDatasArgs, MeshContext>,
  /** null **/
  uni_tickHourData: InContextSdkMethod<Subscription['uni_tickHourData'], Subscriptionuni_tickHourDataArgs, MeshContext>,
  /** null **/
  uni_tickHourDatas: InContextSdkMethod<Subscription['uni_tickHourDatas'], Subscriptionuni_tickHourDatasArgs, MeshContext>,
  /** null **/
  uni_tickDayData: InContextSdkMethod<Subscription['uni_tickDayData'], Subscriptionuni_tickDayDataArgs, MeshContext>,
  /** null **/
  uni_tickDayDatas: InContextSdkMethod<Subscription['uni_tickDayDatas'], Subscriptionuni_tickDayDatasArgs, MeshContext>,
  /** null **/
  uni_tokenDayData: InContextSdkMethod<Subscription['uni_tokenDayData'], Subscriptionuni_tokenDayDataArgs, MeshContext>,
  /** null **/
  uni_tokenDayDatas: InContextSdkMethod<Subscription['uni_tokenDayDatas'], Subscriptionuni_tokenDayDatasArgs, MeshContext>,
  /** null **/
  uni_tokenHourData: InContextSdkMethod<Subscription['uni_tokenHourData'], Subscriptionuni_tokenHourDataArgs, MeshContext>,
  /** null **/
  uni_tokenHourDatas: InContextSdkMethod<Subscription['uni_tokenHourDatas'], Subscriptionuni_tokenHourDatasArgs, MeshContext>,
  /** Access to subgraph metadata **/
  uni__meta: InContextSdkMethod<Subscription['uni__meta'], Subscriptionuni__metaArgs, MeshContext>
  };

  export type Context = {
      ["uniswapv2"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
