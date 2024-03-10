// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace Balancerv2Types {
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
  bal_BigDecimal: any;
  BigInt: any;
  bal_Bytes: any;
  bal_Int8: any;
};

export type bal_Aggregation_interval =
  | 'hour'
  | 'day';

export type bal_AmpUpdate = {
  id: Scalars['ID'];
  poolId: bal_Pool;
  scheduledTimestamp: Scalars['Int'];
  startTimestamp: Scalars['BigInt'];
  endTimestamp: Scalars['BigInt'];
  startAmp: Scalars['BigInt'];
  endAmp: Scalars['BigInt'];
};

export type bal_AmpUpdate_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  poolId?: InputMaybe<Scalars['String']>;
  poolId_not?: InputMaybe<Scalars['String']>;
  poolId_gt?: InputMaybe<Scalars['String']>;
  poolId_lt?: InputMaybe<Scalars['String']>;
  poolId_gte?: InputMaybe<Scalars['String']>;
  poolId_lte?: InputMaybe<Scalars['String']>;
  poolId_in?: InputMaybe<Array<Scalars['String']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolId_contains?: InputMaybe<Scalars['String']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_contains?: InputMaybe<Scalars['String']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolId_starts_with?: InputMaybe<Scalars['String']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_ends_with?: InputMaybe<Scalars['String']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_?: InputMaybe<bal_Pool_filter>;
  scheduledTimestamp?: InputMaybe<Scalars['Int']>;
  scheduledTimestamp_not?: InputMaybe<Scalars['Int']>;
  scheduledTimestamp_gt?: InputMaybe<Scalars['Int']>;
  scheduledTimestamp_lt?: InputMaybe<Scalars['Int']>;
  scheduledTimestamp_gte?: InputMaybe<Scalars['Int']>;
  scheduledTimestamp_lte?: InputMaybe<Scalars['Int']>;
  scheduledTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  scheduledTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  startTimestamp?: InputMaybe<Scalars['BigInt']>;
  startTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  startTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  startTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  startTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  startTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  startTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTimestamp?: InputMaybe<Scalars['BigInt']>;
  endTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  endTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  endTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  endTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  endTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  endTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startAmp?: InputMaybe<Scalars['BigInt']>;
  startAmp_not?: InputMaybe<Scalars['BigInt']>;
  startAmp_gt?: InputMaybe<Scalars['BigInt']>;
  startAmp_lt?: InputMaybe<Scalars['BigInt']>;
  startAmp_gte?: InputMaybe<Scalars['BigInt']>;
  startAmp_lte?: InputMaybe<Scalars['BigInt']>;
  startAmp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startAmp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endAmp?: InputMaybe<Scalars['BigInt']>;
  endAmp_not?: InputMaybe<Scalars['BigInt']>;
  endAmp_gt?: InputMaybe<Scalars['BigInt']>;
  endAmp_lt?: InputMaybe<Scalars['BigInt']>;
  endAmp_gte?: InputMaybe<Scalars['BigInt']>;
  endAmp_lte?: InputMaybe<Scalars['BigInt']>;
  endAmp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endAmp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_AmpUpdate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_AmpUpdate_filter>>>;
};

export type bal_AmpUpdate_orderBy =
  | 'id'
  | 'poolId'
  | 'poolId__id'
  | 'poolId__address'
  | 'poolId__poolType'
  | 'poolId__poolTypeVersion'
  | 'poolId__factory'
  | 'poolId__strategyType'
  | 'poolId__oracleEnabled'
  | 'poolId__symbol'
  | 'poolId__name'
  | 'poolId__swapEnabled'
  | 'poolId__swapEnabledInternal'
  | 'poolId__swapEnabledCurationSignal'
  | 'poolId__swapFee'
  | 'poolId__owner'
  | 'poolId__isPaused'
  | 'poolId__totalWeight'
  | 'poolId__totalSwapVolume'
  | 'poolId__totalSwapFee'
  | 'poolId__totalLiquidity'
  | 'poolId__totalLiquiditySansBPT'
  | 'poolId__totalShares'
  | 'poolId__totalProtocolFee'
  | 'poolId__createTime'
  | 'poolId__swapsCount'
  | 'poolId__holdersCount'
  | 'poolId__tx'
  | 'poolId__amp'
  | 'poolId__principalToken'
  | 'poolId__baseToken'
  | 'poolId__expiryTime'
  | 'poolId__unitSeconds'
  | 'poolId__managementFee'
  | 'poolId__joinExitEnabled'
  | 'poolId__mustAllowlistLPs'
  | 'poolId__managementAumFee'
  | 'poolId__totalAumFeeCollectedInBPT'
  | 'poolId__mainIndex'
  | 'poolId__wrappedIndex'
  | 'poolId__lowerTarget'
  | 'poolId__upperTarget'
  | 'poolId__sqrtAlpha'
  | 'poolId__sqrtBeta'
  | 'poolId__root3Alpha'
  | 'poolId__c'
  | 'poolId__s'
  | 'poolId__tauAlphaX'
  | 'poolId__tauAlphaY'
  | 'poolId__tauBetaX'
  | 'poolId__tauBetaY'
  | 'poolId__u'
  | 'poolId__v'
  | 'poolId__w'
  | 'poolId__z'
  | 'poolId__dSq'
  | 'poolId__alpha'
  | 'poolId__beta'
  | 'poolId__lambda'
  | 'poolId__delta'
  | 'poolId__epsilon'
  | 'poolId__isInRecoveryMode'
  | 'poolId__protocolSwapFeeCache'
  | 'poolId__protocolYieldFeeCache'
  | 'poolId__protocolAumFeeCache'
  | 'poolId__totalProtocolFeePaidInBPT'
  | 'poolId__lastJoinExitAmp'
  | 'poolId__lastPostJoinExitInvariant'
  | 'poolId__protocolId'
  | 'scheduledTimestamp'
  | 'startTimestamp'
  | 'endTimestamp'
  | 'startAmp'
  | 'endAmp';

export type bal_Balancer = {
  id: Scalars['ID'];
  poolCount: Scalars['Int'];
  pools?: Maybe<Array<bal_Pool>>;
  snapshots?: Maybe<Array<bal_BalancerSnapshot>>;
  totalLiquidity: Scalars['bal_BigDecimal'];
  totalSwapCount: Scalars['BigInt'];
  totalSwapVolume: Scalars['bal_BigDecimal'];
  totalSwapFee: Scalars['bal_BigDecimal'];
  totalProtocolFee?: Maybe<Scalars['bal_BigDecimal']>;
  protocolFeesCollector?: Maybe<Scalars['bal_Bytes']>;
};


export type bal_BalancerpoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_Pool_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_Pool_filter>;
};


export type bal_BalancersnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_BalancerSnapshot_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_BalancerSnapshot_filter>;
};

export type bal_BalancerSnapshot = {
  id: Scalars['ID'];
  vault: bal_Balancer;
  timestamp: Scalars['Int'];
  poolCount: Scalars['Int'];
  totalLiquidity: Scalars['bal_BigDecimal'];
  totalSwapCount: Scalars['BigInt'];
  totalSwapVolume: Scalars['bal_BigDecimal'];
  totalSwapFee: Scalars['bal_BigDecimal'];
  totalProtocolFee?: Maybe<Scalars['bal_BigDecimal']>;
};

export type bal_BalancerSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  vault?: InputMaybe<Scalars['String']>;
  vault_not?: InputMaybe<Scalars['String']>;
  vault_gt?: InputMaybe<Scalars['String']>;
  vault_lt?: InputMaybe<Scalars['String']>;
  vault_gte?: InputMaybe<Scalars['String']>;
  vault_lte?: InputMaybe<Scalars['String']>;
  vault_in?: InputMaybe<Array<Scalars['String']>>;
  vault_not_in?: InputMaybe<Array<Scalars['String']>>;
  vault_contains?: InputMaybe<Scalars['String']>;
  vault_contains_nocase?: InputMaybe<Scalars['String']>;
  vault_not_contains?: InputMaybe<Scalars['String']>;
  vault_not_contains_nocase?: InputMaybe<Scalars['String']>;
  vault_starts_with?: InputMaybe<Scalars['String']>;
  vault_starts_with_nocase?: InputMaybe<Scalars['String']>;
  vault_not_starts_with?: InputMaybe<Scalars['String']>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  vault_ends_with?: InputMaybe<Scalars['String']>;
  vault_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vault_not_ends_with?: InputMaybe<Scalars['String']>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vault_?: InputMaybe<bal_Balancer_filter>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  poolCount?: InputMaybe<Scalars['Int']>;
  poolCount_not?: InputMaybe<Scalars['Int']>;
  poolCount_gt?: InputMaybe<Scalars['Int']>;
  poolCount_lt?: InputMaybe<Scalars['Int']>;
  poolCount_gte?: InputMaybe<Scalars['Int']>;
  poolCount_lte?: InputMaybe<Scalars['Int']>;
  poolCount_in?: InputMaybe<Array<Scalars['Int']>>;
  poolCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalLiquidity?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalLiquidity_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalLiquidity_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalLiquidity_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalLiquidity_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalLiquidity_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalLiquidity_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalSwapCount?: InputMaybe<Scalars['BigInt']>;
  totalSwapCount_not?: InputMaybe<Scalars['BigInt']>;
  totalSwapCount_gt?: InputMaybe<Scalars['BigInt']>;
  totalSwapCount_lt?: InputMaybe<Scalars['BigInt']>;
  totalSwapCount_gte?: InputMaybe<Scalars['BigInt']>;
  totalSwapCount_lte?: InputMaybe<Scalars['BigInt']>;
  totalSwapCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSwapCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSwapVolume?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalSwapFee?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalProtocolFee?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalProtocolFee_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalProtocolFee_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalProtocolFee_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalProtocolFee_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalProtocolFee_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalProtocolFee_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalProtocolFee_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_BalancerSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_BalancerSnapshot_filter>>>;
};

export type bal_BalancerSnapshot_orderBy =
  | 'id'
  | 'vault'
  | 'vault__id'
  | 'vault__poolCount'
  | 'vault__totalLiquidity'
  | 'vault__totalSwapCount'
  | 'vault__totalSwapVolume'
  | 'vault__totalSwapFee'
  | 'vault__totalProtocolFee'
  | 'vault__protocolFeesCollector'
  | 'timestamp'
  | 'poolCount'
  | 'totalLiquidity'
  | 'totalSwapCount'
  | 'totalSwapVolume'
  | 'totalSwapFee'
  | 'totalProtocolFee';

export type bal_Balancer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  poolCount?: InputMaybe<Scalars['Int']>;
  poolCount_not?: InputMaybe<Scalars['Int']>;
  poolCount_gt?: InputMaybe<Scalars['Int']>;
  poolCount_lt?: InputMaybe<Scalars['Int']>;
  poolCount_gte?: InputMaybe<Scalars['Int']>;
  poolCount_lte?: InputMaybe<Scalars['Int']>;
  poolCount_in?: InputMaybe<Array<Scalars['Int']>>;
  poolCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pools_?: InputMaybe<bal_Pool_filter>;
  snapshots_?: InputMaybe<bal_BalancerSnapshot_filter>;
  totalLiquidity?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalLiquidity_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalLiquidity_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalLiquidity_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalLiquidity_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalLiquidity_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalLiquidity_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalSwapCount?: InputMaybe<Scalars['BigInt']>;
  totalSwapCount_not?: InputMaybe<Scalars['BigInt']>;
  totalSwapCount_gt?: InputMaybe<Scalars['BigInt']>;
  totalSwapCount_lt?: InputMaybe<Scalars['BigInt']>;
  totalSwapCount_gte?: InputMaybe<Scalars['BigInt']>;
  totalSwapCount_lte?: InputMaybe<Scalars['BigInt']>;
  totalSwapCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSwapCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSwapVolume?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalSwapFee?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalProtocolFee?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalProtocolFee_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalProtocolFee_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalProtocolFee_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalProtocolFee_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalProtocolFee_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalProtocolFee_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalProtocolFee_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  protocolFeesCollector?: InputMaybe<Scalars['bal_Bytes']>;
  protocolFeesCollector_not?: InputMaybe<Scalars['bal_Bytes']>;
  protocolFeesCollector_gt?: InputMaybe<Scalars['bal_Bytes']>;
  protocolFeesCollector_lt?: InputMaybe<Scalars['bal_Bytes']>;
  protocolFeesCollector_gte?: InputMaybe<Scalars['bal_Bytes']>;
  protocolFeesCollector_lte?: InputMaybe<Scalars['bal_Bytes']>;
  protocolFeesCollector_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  protocolFeesCollector_not_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  protocolFeesCollector_contains?: InputMaybe<Scalars['bal_Bytes']>;
  protocolFeesCollector_not_contains?: InputMaybe<Scalars['bal_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_Balancer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_Balancer_filter>>>;
};

export type bal_Balancer_orderBy =
  | 'id'
  | 'poolCount'
  | 'pools'
  | 'snapshots'
  | 'totalLiquidity'
  | 'totalSwapCount'
  | 'totalSwapVolume'
  | 'totalSwapFee'
  | 'totalProtocolFee'
  | 'protocolFeesCollector';

export type bal_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type bal_Block_height = {
  hash?: InputMaybe<Scalars['bal_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type bal_CircuitBreaker = {
  id: Scalars['ID'];
  pool: bal_Pool;
  token: bal_PoolToken;
  bptPrice: Scalars['bal_BigDecimal'];
  lowerBoundPercentage: Scalars['bal_BigDecimal'];
  upperBoundPercentage: Scalars['bal_BigDecimal'];
};

export type bal_CircuitBreaker_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  pool_?: InputMaybe<bal_Pool_filter>;
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
  token_?: InputMaybe<bal_PoolToken_filter>;
  bptPrice?: InputMaybe<Scalars['bal_BigDecimal']>;
  bptPrice_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  bptPrice_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  bptPrice_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  bptPrice_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  bptPrice_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  bptPrice_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  bptPrice_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  lowerBoundPercentage?: InputMaybe<Scalars['bal_BigDecimal']>;
  lowerBoundPercentage_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  lowerBoundPercentage_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  lowerBoundPercentage_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  lowerBoundPercentage_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  lowerBoundPercentage_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  lowerBoundPercentage_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  lowerBoundPercentage_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  upperBoundPercentage?: InputMaybe<Scalars['bal_BigDecimal']>;
  upperBoundPercentage_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  upperBoundPercentage_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  upperBoundPercentage_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  upperBoundPercentage_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  upperBoundPercentage_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  upperBoundPercentage_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  upperBoundPercentage_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_CircuitBreaker_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_CircuitBreaker_filter>>>;
};

export type bal_CircuitBreaker_orderBy =
  | 'id'
  | 'pool'
  | 'pool__id'
  | 'pool__address'
  | 'pool__poolType'
  | 'pool__poolTypeVersion'
  | 'pool__factory'
  | 'pool__strategyType'
  | 'pool__oracleEnabled'
  | 'pool__symbol'
  | 'pool__name'
  | 'pool__swapEnabled'
  | 'pool__swapEnabledInternal'
  | 'pool__swapEnabledCurationSignal'
  | 'pool__swapFee'
  | 'pool__owner'
  | 'pool__isPaused'
  | 'pool__totalWeight'
  | 'pool__totalSwapVolume'
  | 'pool__totalSwapFee'
  | 'pool__totalLiquidity'
  | 'pool__totalLiquiditySansBPT'
  | 'pool__totalShares'
  | 'pool__totalProtocolFee'
  | 'pool__createTime'
  | 'pool__swapsCount'
  | 'pool__holdersCount'
  | 'pool__tx'
  | 'pool__amp'
  | 'pool__principalToken'
  | 'pool__baseToken'
  | 'pool__expiryTime'
  | 'pool__unitSeconds'
  | 'pool__managementFee'
  | 'pool__joinExitEnabled'
  | 'pool__mustAllowlistLPs'
  | 'pool__managementAumFee'
  | 'pool__totalAumFeeCollectedInBPT'
  | 'pool__mainIndex'
  | 'pool__wrappedIndex'
  | 'pool__lowerTarget'
  | 'pool__upperTarget'
  | 'pool__sqrtAlpha'
  | 'pool__sqrtBeta'
  | 'pool__root3Alpha'
  | 'pool__c'
  | 'pool__s'
  | 'pool__tauAlphaX'
  | 'pool__tauAlphaY'
  | 'pool__tauBetaX'
  | 'pool__tauBetaY'
  | 'pool__u'
  | 'pool__v'
  | 'pool__w'
  | 'pool__z'
  | 'pool__dSq'
  | 'pool__alpha'
  | 'pool__beta'
  | 'pool__lambda'
  | 'pool__delta'
  | 'pool__epsilon'
  | 'pool__isInRecoveryMode'
  | 'pool__protocolSwapFeeCache'
  | 'pool__protocolYieldFeeCache'
  | 'pool__protocolAumFeeCache'
  | 'pool__totalProtocolFeePaidInBPT'
  | 'pool__lastJoinExitAmp'
  | 'pool__lastPostJoinExitInvariant'
  | 'pool__protocolId'
  | 'token'
  | 'token__id'
  | 'token__assetManager'
  | 'token__symbol'
  | 'token__name'
  | 'token__decimals'
  | 'token__index'
  | 'token__address'
  | 'token__oldPriceRate'
  | 'token__priceRate'
  | 'token__balance'
  | 'token__paidProtocolFees'
  | 'token__cashBalance'
  | 'token__managedBalance'
  | 'token__weight'
  | 'token__isExemptFromYieldProtocolFee'
  | 'bptPrice'
  | 'lowerBoundPercentage'
  | 'upperBoundPercentage';

export type bal_FXOracle = {
  id: Scalars['ID'];
  tokens: Array<Scalars['bal_Bytes']>;
};

export type bal_FXOracle_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  tokens?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  tokens_not?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  tokens_contains?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  tokens_contains_nocase?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  tokens_not_contains?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  tokens_not_contains_nocase?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_FXOracle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_FXOracle_filter>>>;
};

export type bal_FXOracle_orderBy =
  | 'id'
  | 'tokens';

export type bal_GradualWeightUpdate = {
  id: Scalars['ID'];
  poolId: bal_Pool;
  scheduledTimestamp: Scalars['Int'];
  startTimestamp: Scalars['BigInt'];
  endTimestamp: Scalars['BigInt'];
  startWeights: Array<Scalars['BigInt']>;
  endWeights: Array<Scalars['BigInt']>;
};

export type bal_GradualWeightUpdate_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  poolId?: InputMaybe<Scalars['String']>;
  poolId_not?: InputMaybe<Scalars['String']>;
  poolId_gt?: InputMaybe<Scalars['String']>;
  poolId_lt?: InputMaybe<Scalars['String']>;
  poolId_gte?: InputMaybe<Scalars['String']>;
  poolId_lte?: InputMaybe<Scalars['String']>;
  poolId_in?: InputMaybe<Array<Scalars['String']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolId_contains?: InputMaybe<Scalars['String']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_contains?: InputMaybe<Scalars['String']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolId_starts_with?: InputMaybe<Scalars['String']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_ends_with?: InputMaybe<Scalars['String']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_?: InputMaybe<bal_Pool_filter>;
  scheduledTimestamp?: InputMaybe<Scalars['Int']>;
  scheduledTimestamp_not?: InputMaybe<Scalars['Int']>;
  scheduledTimestamp_gt?: InputMaybe<Scalars['Int']>;
  scheduledTimestamp_lt?: InputMaybe<Scalars['Int']>;
  scheduledTimestamp_gte?: InputMaybe<Scalars['Int']>;
  scheduledTimestamp_lte?: InputMaybe<Scalars['Int']>;
  scheduledTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  scheduledTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  startTimestamp?: InputMaybe<Scalars['BigInt']>;
  startTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  startTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  startTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  startTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  startTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  startTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTimestamp?: InputMaybe<Scalars['BigInt']>;
  endTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  endTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  endTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  endTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  endTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  endTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startWeights?: InputMaybe<Array<Scalars['BigInt']>>;
  startWeights_not?: InputMaybe<Array<Scalars['BigInt']>>;
  startWeights_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  startWeights_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  startWeights_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  startWeights_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  endWeights?: InputMaybe<Array<Scalars['BigInt']>>;
  endWeights_not?: InputMaybe<Array<Scalars['BigInt']>>;
  endWeights_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  endWeights_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  endWeights_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  endWeights_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_GradualWeightUpdate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_GradualWeightUpdate_filter>>>;
};

export type bal_GradualWeightUpdate_orderBy =
  | 'id'
  | 'poolId'
  | 'poolId__id'
  | 'poolId__address'
  | 'poolId__poolType'
  | 'poolId__poolTypeVersion'
  | 'poolId__factory'
  | 'poolId__strategyType'
  | 'poolId__oracleEnabled'
  | 'poolId__symbol'
  | 'poolId__name'
  | 'poolId__swapEnabled'
  | 'poolId__swapEnabledInternal'
  | 'poolId__swapEnabledCurationSignal'
  | 'poolId__swapFee'
  | 'poolId__owner'
  | 'poolId__isPaused'
  | 'poolId__totalWeight'
  | 'poolId__totalSwapVolume'
  | 'poolId__totalSwapFee'
  | 'poolId__totalLiquidity'
  | 'poolId__totalLiquiditySansBPT'
  | 'poolId__totalShares'
  | 'poolId__totalProtocolFee'
  | 'poolId__createTime'
  | 'poolId__swapsCount'
  | 'poolId__holdersCount'
  | 'poolId__tx'
  | 'poolId__amp'
  | 'poolId__principalToken'
  | 'poolId__baseToken'
  | 'poolId__expiryTime'
  | 'poolId__unitSeconds'
  | 'poolId__managementFee'
  | 'poolId__joinExitEnabled'
  | 'poolId__mustAllowlistLPs'
  | 'poolId__managementAumFee'
  | 'poolId__totalAumFeeCollectedInBPT'
  | 'poolId__mainIndex'
  | 'poolId__wrappedIndex'
  | 'poolId__lowerTarget'
  | 'poolId__upperTarget'
  | 'poolId__sqrtAlpha'
  | 'poolId__sqrtBeta'
  | 'poolId__root3Alpha'
  | 'poolId__c'
  | 'poolId__s'
  | 'poolId__tauAlphaX'
  | 'poolId__tauAlphaY'
  | 'poolId__tauBetaX'
  | 'poolId__tauBetaY'
  | 'poolId__u'
  | 'poolId__v'
  | 'poolId__w'
  | 'poolId__z'
  | 'poolId__dSq'
  | 'poolId__alpha'
  | 'poolId__beta'
  | 'poolId__lambda'
  | 'poolId__delta'
  | 'poolId__epsilon'
  | 'poolId__isInRecoveryMode'
  | 'poolId__protocolSwapFeeCache'
  | 'poolId__protocolYieldFeeCache'
  | 'poolId__protocolAumFeeCache'
  | 'poolId__totalProtocolFeePaidInBPT'
  | 'poolId__lastJoinExitAmp'
  | 'poolId__lastPostJoinExitInvariant'
  | 'poolId__protocolId'
  | 'scheduledTimestamp'
  | 'startTimestamp'
  | 'endTimestamp'
  | 'startWeights'
  | 'endWeights';

export type bal_InvestType =
  | 'Join'
  | 'Exit';

export type bal_JoinExit = {
  id: Scalars['ID'];
  type: bal_InvestType;
  sender: Scalars['bal_Bytes'];
  amounts: Array<Scalars['bal_BigDecimal']>;
  valueUSD?: Maybe<Scalars['bal_BigDecimal']>;
  pool: bal_Pool;
  user: bal_User;
  timestamp: Scalars['Int'];
  tx: Scalars['bal_Bytes'];
  block?: Maybe<Scalars['BigInt']>;
};

export type bal_JoinExit_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<bal_InvestType>;
  type_not?: InputMaybe<bal_InvestType>;
  type_in?: InputMaybe<Array<bal_InvestType>>;
  type_not_in?: InputMaybe<Array<bal_InvestType>>;
  sender?: InputMaybe<Scalars['bal_Bytes']>;
  sender_not?: InputMaybe<Scalars['bal_Bytes']>;
  sender_gt?: InputMaybe<Scalars['bal_Bytes']>;
  sender_lt?: InputMaybe<Scalars['bal_Bytes']>;
  sender_gte?: InputMaybe<Scalars['bal_Bytes']>;
  sender_lte?: InputMaybe<Scalars['bal_Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  sender_contains?: InputMaybe<Scalars['bal_Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['bal_Bytes']>;
  amounts?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  amounts_not?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  amounts_contains?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  amounts_contains_nocase?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  amounts_not_contains?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  amounts_not_contains_nocase?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  valueUSD?: InputMaybe<Scalars['bal_BigDecimal']>;
  valueUSD_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  valueUSD_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  valueUSD_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  valueUSD_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  valueUSD_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  valueUSD_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  valueUSD_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
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
  pool_?: InputMaybe<bal_Pool_filter>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<bal_User_filter>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  tx?: InputMaybe<Scalars['bal_Bytes']>;
  tx_not?: InputMaybe<Scalars['bal_Bytes']>;
  tx_gt?: InputMaybe<Scalars['bal_Bytes']>;
  tx_lt?: InputMaybe<Scalars['bal_Bytes']>;
  tx_gte?: InputMaybe<Scalars['bal_Bytes']>;
  tx_lte?: InputMaybe<Scalars['bal_Bytes']>;
  tx_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  tx_not_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  tx_contains?: InputMaybe<Scalars['bal_Bytes']>;
  tx_not_contains?: InputMaybe<Scalars['bal_Bytes']>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_JoinExit_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_JoinExit_filter>>>;
};

export type bal_JoinExit_orderBy =
  | 'id'
  | 'type'
  | 'sender'
  | 'amounts'
  | 'valueUSD'
  | 'pool'
  | 'pool__id'
  | 'pool__address'
  | 'pool__poolType'
  | 'pool__poolTypeVersion'
  | 'pool__factory'
  | 'pool__strategyType'
  | 'pool__oracleEnabled'
  | 'pool__symbol'
  | 'pool__name'
  | 'pool__swapEnabled'
  | 'pool__swapEnabledInternal'
  | 'pool__swapEnabledCurationSignal'
  | 'pool__swapFee'
  | 'pool__owner'
  | 'pool__isPaused'
  | 'pool__totalWeight'
  | 'pool__totalSwapVolume'
  | 'pool__totalSwapFee'
  | 'pool__totalLiquidity'
  | 'pool__totalLiquiditySansBPT'
  | 'pool__totalShares'
  | 'pool__totalProtocolFee'
  | 'pool__createTime'
  | 'pool__swapsCount'
  | 'pool__holdersCount'
  | 'pool__tx'
  | 'pool__amp'
  | 'pool__principalToken'
  | 'pool__baseToken'
  | 'pool__expiryTime'
  | 'pool__unitSeconds'
  | 'pool__managementFee'
  | 'pool__joinExitEnabled'
  | 'pool__mustAllowlistLPs'
  | 'pool__managementAumFee'
  | 'pool__totalAumFeeCollectedInBPT'
  | 'pool__mainIndex'
  | 'pool__wrappedIndex'
  | 'pool__lowerTarget'
  | 'pool__upperTarget'
  | 'pool__sqrtAlpha'
  | 'pool__sqrtBeta'
  | 'pool__root3Alpha'
  | 'pool__c'
  | 'pool__s'
  | 'pool__tauAlphaX'
  | 'pool__tauAlphaY'
  | 'pool__tauBetaX'
  | 'pool__tauBetaY'
  | 'pool__u'
  | 'pool__v'
  | 'pool__w'
  | 'pool__z'
  | 'pool__dSq'
  | 'pool__alpha'
  | 'pool__beta'
  | 'pool__lambda'
  | 'pool__delta'
  | 'pool__epsilon'
  | 'pool__isInRecoveryMode'
  | 'pool__protocolSwapFeeCache'
  | 'pool__protocolYieldFeeCache'
  | 'pool__protocolAumFeeCache'
  | 'pool__totalProtocolFeePaidInBPT'
  | 'pool__lastJoinExitAmp'
  | 'pool__lastPostJoinExitInvariant'
  | 'pool__protocolId'
  | 'user'
  | 'user__id'
  | 'timestamp'
  | 'tx'
  | 'block';

export type bal_LatestPrice = {
  id: Scalars['ID'];
  asset: Scalars['bal_Bytes'];
  pricingAsset: Scalars['bal_Bytes'];
  poolId: bal_Pool;
  price: Scalars['bal_BigDecimal'];
  block: Scalars['BigInt'];
};

export type bal_LatestPrice_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  asset?: InputMaybe<Scalars['bal_Bytes']>;
  asset_not?: InputMaybe<Scalars['bal_Bytes']>;
  asset_gt?: InputMaybe<Scalars['bal_Bytes']>;
  asset_lt?: InputMaybe<Scalars['bal_Bytes']>;
  asset_gte?: InputMaybe<Scalars['bal_Bytes']>;
  asset_lte?: InputMaybe<Scalars['bal_Bytes']>;
  asset_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  asset_not_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  asset_contains?: InputMaybe<Scalars['bal_Bytes']>;
  asset_not_contains?: InputMaybe<Scalars['bal_Bytes']>;
  pricingAsset?: InputMaybe<Scalars['bal_Bytes']>;
  pricingAsset_not?: InputMaybe<Scalars['bal_Bytes']>;
  pricingAsset_gt?: InputMaybe<Scalars['bal_Bytes']>;
  pricingAsset_lt?: InputMaybe<Scalars['bal_Bytes']>;
  pricingAsset_gte?: InputMaybe<Scalars['bal_Bytes']>;
  pricingAsset_lte?: InputMaybe<Scalars['bal_Bytes']>;
  pricingAsset_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  pricingAsset_not_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  pricingAsset_contains?: InputMaybe<Scalars['bal_Bytes']>;
  pricingAsset_not_contains?: InputMaybe<Scalars['bal_Bytes']>;
  poolId?: InputMaybe<Scalars['String']>;
  poolId_not?: InputMaybe<Scalars['String']>;
  poolId_gt?: InputMaybe<Scalars['String']>;
  poolId_lt?: InputMaybe<Scalars['String']>;
  poolId_gte?: InputMaybe<Scalars['String']>;
  poolId_lte?: InputMaybe<Scalars['String']>;
  poolId_in?: InputMaybe<Array<Scalars['String']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolId_contains?: InputMaybe<Scalars['String']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_contains?: InputMaybe<Scalars['String']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolId_starts_with?: InputMaybe<Scalars['String']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_ends_with?: InputMaybe<Scalars['String']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_?: InputMaybe<bal_Pool_filter>;
  price?: InputMaybe<Scalars['bal_BigDecimal']>;
  price_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  price_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  price_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  price_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  price_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  price_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  price_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_LatestPrice_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_LatestPrice_filter>>>;
};

export type bal_LatestPrice_orderBy =
  | 'id'
  | 'asset'
  | 'pricingAsset'
  | 'poolId'
  | 'poolId__id'
  | 'poolId__address'
  | 'poolId__poolType'
  | 'poolId__poolTypeVersion'
  | 'poolId__factory'
  | 'poolId__strategyType'
  | 'poolId__oracleEnabled'
  | 'poolId__symbol'
  | 'poolId__name'
  | 'poolId__swapEnabled'
  | 'poolId__swapEnabledInternal'
  | 'poolId__swapEnabledCurationSignal'
  | 'poolId__swapFee'
  | 'poolId__owner'
  | 'poolId__isPaused'
  | 'poolId__totalWeight'
  | 'poolId__totalSwapVolume'
  | 'poolId__totalSwapFee'
  | 'poolId__totalLiquidity'
  | 'poolId__totalLiquiditySansBPT'
  | 'poolId__totalShares'
  | 'poolId__totalProtocolFee'
  | 'poolId__createTime'
  | 'poolId__swapsCount'
  | 'poolId__holdersCount'
  | 'poolId__tx'
  | 'poolId__amp'
  | 'poolId__principalToken'
  | 'poolId__baseToken'
  | 'poolId__expiryTime'
  | 'poolId__unitSeconds'
  | 'poolId__managementFee'
  | 'poolId__joinExitEnabled'
  | 'poolId__mustAllowlistLPs'
  | 'poolId__managementAumFee'
  | 'poolId__totalAumFeeCollectedInBPT'
  | 'poolId__mainIndex'
  | 'poolId__wrappedIndex'
  | 'poolId__lowerTarget'
  | 'poolId__upperTarget'
  | 'poolId__sqrtAlpha'
  | 'poolId__sqrtBeta'
  | 'poolId__root3Alpha'
  | 'poolId__c'
  | 'poolId__s'
  | 'poolId__tauAlphaX'
  | 'poolId__tauAlphaY'
  | 'poolId__tauBetaX'
  | 'poolId__tauBetaY'
  | 'poolId__u'
  | 'poolId__v'
  | 'poolId__w'
  | 'poolId__z'
  | 'poolId__dSq'
  | 'poolId__alpha'
  | 'poolId__beta'
  | 'poolId__lambda'
  | 'poolId__delta'
  | 'poolId__epsilon'
  | 'poolId__isInRecoveryMode'
  | 'poolId__protocolSwapFeeCache'
  | 'poolId__protocolYieldFeeCache'
  | 'poolId__protocolAumFeeCache'
  | 'poolId__totalProtocolFeePaidInBPT'
  | 'poolId__lastJoinExitAmp'
  | 'poolId__lastPostJoinExitInvariant'
  | 'poolId__protocolId'
  | 'price'
  | 'block';

export type bal_ManagementOperation = {
  id: Scalars['ID'];
  type: bal_OperationType;
  cashDelta: Scalars['bal_BigDecimal'];
  managedDelta: Scalars['bal_BigDecimal'];
  poolTokenId: bal_PoolToken;
  timestamp: Scalars['Int'];
};

export type bal_ManagementOperation_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<bal_OperationType>;
  type_not?: InputMaybe<bal_OperationType>;
  type_in?: InputMaybe<Array<bal_OperationType>>;
  type_not_in?: InputMaybe<Array<bal_OperationType>>;
  cashDelta?: InputMaybe<Scalars['bal_BigDecimal']>;
  cashDelta_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  cashDelta_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  cashDelta_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  cashDelta_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  cashDelta_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  cashDelta_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  cashDelta_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  managedDelta?: InputMaybe<Scalars['bal_BigDecimal']>;
  managedDelta_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  managedDelta_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  managedDelta_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  managedDelta_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  managedDelta_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  managedDelta_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  managedDelta_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  poolTokenId?: InputMaybe<Scalars['String']>;
  poolTokenId_not?: InputMaybe<Scalars['String']>;
  poolTokenId_gt?: InputMaybe<Scalars['String']>;
  poolTokenId_lt?: InputMaybe<Scalars['String']>;
  poolTokenId_gte?: InputMaybe<Scalars['String']>;
  poolTokenId_lte?: InputMaybe<Scalars['String']>;
  poolTokenId_in?: InputMaybe<Array<Scalars['String']>>;
  poolTokenId_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolTokenId_contains?: InputMaybe<Scalars['String']>;
  poolTokenId_contains_nocase?: InputMaybe<Scalars['String']>;
  poolTokenId_not_contains?: InputMaybe<Scalars['String']>;
  poolTokenId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolTokenId_starts_with?: InputMaybe<Scalars['String']>;
  poolTokenId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolTokenId_not_starts_with?: InputMaybe<Scalars['String']>;
  poolTokenId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolTokenId_ends_with?: InputMaybe<Scalars['String']>;
  poolTokenId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolTokenId_not_ends_with?: InputMaybe<Scalars['String']>;
  poolTokenId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolTokenId_?: InputMaybe<bal_PoolToken_filter>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_ManagementOperation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_ManagementOperation_filter>>>;
};

export type bal_ManagementOperation_orderBy =
  | 'id'
  | 'type'
  | 'cashDelta'
  | 'managedDelta'
  | 'poolTokenId'
  | 'poolTokenId__id'
  | 'poolTokenId__assetManager'
  | 'poolTokenId__symbol'
  | 'poolTokenId__name'
  | 'poolTokenId__decimals'
  | 'poolTokenId__index'
  | 'poolTokenId__address'
  | 'poolTokenId__oldPriceRate'
  | 'poolTokenId__priceRate'
  | 'poolTokenId__balance'
  | 'poolTokenId__paidProtocolFees'
  | 'poolTokenId__cashBalance'
  | 'poolTokenId__managedBalance'
  | 'poolTokenId__weight'
  | 'poolTokenId__isExemptFromYieldProtocolFee'
  | 'timestamp';

export type bal_OperationType =
  | 'Deposit'
  | 'Withdraw'
  | 'Update';

/** Defines the order direction, either ascending or descending */
export type bal_OrderDirection =
  | 'asc'
  | 'desc';

export type bal_Pool = {
  id: Scalars['ID'];
  address: Scalars['bal_Bytes'];
  poolType?: Maybe<Scalars['String']>;
  poolTypeVersion?: Maybe<Scalars['Int']>;
  factory?: Maybe<Scalars['bal_Bytes']>;
  strategyType: Scalars['Int'];
  oracleEnabled: Scalars['Boolean'];
  symbol?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** Indicates if a pool can be swapped against. Combines multiple sources, including offchain curation */
  swapEnabled: Scalars['Boolean'];
  /** The native swapEnabled boolean. internal to the pool. Only applies to Gyro, LBPs and InvestmentPools */
  swapEnabledInternal?: Maybe<Scalars['Boolean']>;
  /** External indication from an offchain permissioned actor */
  swapEnabledCurationSignal?: Maybe<Scalars['Boolean']>;
  swapFee: Scalars['bal_BigDecimal'];
  owner?: Maybe<Scalars['bal_Bytes']>;
  isPaused?: Maybe<Scalars['Boolean']>;
  totalWeight?: Maybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume: Scalars['bal_BigDecimal'];
  totalSwapFee: Scalars['bal_BigDecimal'];
  totalLiquidity: Scalars['bal_BigDecimal'];
  totalLiquiditySansBPT?: Maybe<Scalars['bal_BigDecimal']>;
  totalShares: Scalars['bal_BigDecimal'];
  totalProtocolFee?: Maybe<Scalars['bal_BigDecimal']>;
  createTime: Scalars['Int'];
  swapsCount: Scalars['BigInt'];
  holdersCount: Scalars['BigInt'];
  vaultID: bal_Balancer;
  tx?: Maybe<Scalars['bal_Bytes']>;
  tokensList: Array<Scalars['bal_Bytes']>;
  tokens?: Maybe<Array<bal_PoolToken>>;
  joinsExits?: Maybe<Array<bal_JoinExit>>;
  swaps?: Maybe<Array<bal_Swap>>;
  shares?: Maybe<Array<bal_PoolShare>>;
  snapshots?: Maybe<Array<bal_PoolSnapshot>>;
  historicalValues?: Maybe<Array<bal_PoolHistoricalLiquidity>>;
  weightUpdates?: Maybe<Array<bal_GradualWeightUpdate>>;
  amp?: Maybe<Scalars['BigInt']>;
  latestAmpUpdate?: Maybe<bal_AmpUpdate>;
  ampUpdates?: Maybe<Array<bal_AmpUpdate>>;
  priceRateProviders?: Maybe<Array<bal_PriceRateProvider>>;
  principalToken?: Maybe<Scalars['bal_Bytes']>;
  baseToken?: Maybe<Scalars['bal_Bytes']>;
  expiryTime?: Maybe<Scalars['BigInt']>;
  unitSeconds?: Maybe<Scalars['BigInt']>;
  managementFee?: Maybe<Scalars['bal_BigDecimal']>;
  joinExitEnabled?: Maybe<Scalars['Boolean']>;
  mustAllowlistLPs?: Maybe<Scalars['Boolean']>;
  managementAumFee?: Maybe<Scalars['bal_BigDecimal']>;
  totalAumFeeCollectedInBPT?: Maybe<Scalars['bal_BigDecimal']>;
  circuitBreakers?: Maybe<Array<bal_CircuitBreaker>>;
  mainIndex?: Maybe<Scalars['Int']>;
  wrappedIndex?: Maybe<Scalars['Int']>;
  lowerTarget?: Maybe<Scalars['bal_BigDecimal']>;
  upperTarget?: Maybe<Scalars['bal_BigDecimal']>;
  sqrtAlpha?: Maybe<Scalars['bal_BigDecimal']>;
  sqrtBeta?: Maybe<Scalars['bal_BigDecimal']>;
  root3Alpha?: Maybe<Scalars['bal_BigDecimal']>;
  c?: Maybe<Scalars['bal_BigDecimal']>;
  s?: Maybe<Scalars['bal_BigDecimal']>;
  tauAlphaX?: Maybe<Scalars['bal_BigDecimal']>;
  tauAlphaY?: Maybe<Scalars['bal_BigDecimal']>;
  tauBetaX?: Maybe<Scalars['bal_BigDecimal']>;
  tauBetaY?: Maybe<Scalars['bal_BigDecimal']>;
  u?: Maybe<Scalars['bal_BigDecimal']>;
  v?: Maybe<Scalars['bal_BigDecimal']>;
  w?: Maybe<Scalars['bal_BigDecimal']>;
  z?: Maybe<Scalars['bal_BigDecimal']>;
  dSq?: Maybe<Scalars['bal_BigDecimal']>;
  alpha?: Maybe<Scalars['bal_BigDecimal']>;
  beta?: Maybe<Scalars['bal_BigDecimal']>;
  lambda?: Maybe<Scalars['bal_BigDecimal']>;
  delta?: Maybe<Scalars['bal_BigDecimal']>;
  epsilon?: Maybe<Scalars['bal_BigDecimal']>;
  isInRecoveryMode?: Maybe<Scalars['Boolean']>;
  protocolSwapFeeCache?: Maybe<Scalars['bal_BigDecimal']>;
  protocolYieldFeeCache?: Maybe<Scalars['bal_BigDecimal']>;
  protocolAumFeeCache?: Maybe<Scalars['bal_BigDecimal']>;
  totalProtocolFeePaidInBPT?: Maybe<Scalars['bal_BigDecimal']>;
  lastJoinExitAmp?: Maybe<Scalars['BigInt']>;
  lastPostJoinExitInvariant?: Maybe<Scalars['bal_BigDecimal']>;
  protocolId?: Maybe<Scalars['Int']>;
  protocolIdData?: Maybe<bal_ProtocolIdData>;
};


export type bal_PooltokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_PoolToken_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_PoolToken_filter>;
};


export type bal_PooljoinsExitsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_JoinExit_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_JoinExit_filter>;
};


export type bal_PoolswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_Swap_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_Swap_filter>;
};


export type bal_PoolsharesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_PoolShare_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_PoolShare_filter>;
};


export type bal_PoolsnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_PoolSnapshot_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_PoolSnapshot_filter>;
};


export type bal_PoolhistoricalValuesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_PoolHistoricalLiquidity_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_PoolHistoricalLiquidity_filter>;
};


export type bal_PoolweightUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_GradualWeightUpdate_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_GradualWeightUpdate_filter>;
};


export type bal_PoolampUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_AmpUpdate_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_AmpUpdate_filter>;
};


export type bal_PoolpriceRateProvidersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_PriceRateProvider_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_PriceRateProvider_filter>;
};


export type bal_PoolcircuitBreakersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_CircuitBreaker_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_CircuitBreaker_filter>;
};

export type bal_PoolContract = {
  id: Scalars['ID'];
  pool: bal_Pool;
};

export type bal_PoolContract_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  pool_?: InputMaybe<bal_Pool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_PoolContract_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_PoolContract_filter>>>;
};

export type bal_PoolContract_orderBy =
  | 'id'
  | 'pool'
  | 'pool__id'
  | 'pool__address'
  | 'pool__poolType'
  | 'pool__poolTypeVersion'
  | 'pool__factory'
  | 'pool__strategyType'
  | 'pool__oracleEnabled'
  | 'pool__symbol'
  | 'pool__name'
  | 'pool__swapEnabled'
  | 'pool__swapEnabledInternal'
  | 'pool__swapEnabledCurationSignal'
  | 'pool__swapFee'
  | 'pool__owner'
  | 'pool__isPaused'
  | 'pool__totalWeight'
  | 'pool__totalSwapVolume'
  | 'pool__totalSwapFee'
  | 'pool__totalLiquidity'
  | 'pool__totalLiquiditySansBPT'
  | 'pool__totalShares'
  | 'pool__totalProtocolFee'
  | 'pool__createTime'
  | 'pool__swapsCount'
  | 'pool__holdersCount'
  | 'pool__tx'
  | 'pool__amp'
  | 'pool__principalToken'
  | 'pool__baseToken'
  | 'pool__expiryTime'
  | 'pool__unitSeconds'
  | 'pool__managementFee'
  | 'pool__joinExitEnabled'
  | 'pool__mustAllowlistLPs'
  | 'pool__managementAumFee'
  | 'pool__totalAumFeeCollectedInBPT'
  | 'pool__mainIndex'
  | 'pool__wrappedIndex'
  | 'pool__lowerTarget'
  | 'pool__upperTarget'
  | 'pool__sqrtAlpha'
  | 'pool__sqrtBeta'
  | 'pool__root3Alpha'
  | 'pool__c'
  | 'pool__s'
  | 'pool__tauAlphaX'
  | 'pool__tauAlphaY'
  | 'pool__tauBetaX'
  | 'pool__tauBetaY'
  | 'pool__u'
  | 'pool__v'
  | 'pool__w'
  | 'pool__z'
  | 'pool__dSq'
  | 'pool__alpha'
  | 'pool__beta'
  | 'pool__lambda'
  | 'pool__delta'
  | 'pool__epsilon'
  | 'pool__isInRecoveryMode'
  | 'pool__protocolSwapFeeCache'
  | 'pool__protocolYieldFeeCache'
  | 'pool__protocolAumFeeCache'
  | 'pool__totalProtocolFeePaidInBPT'
  | 'pool__lastJoinExitAmp'
  | 'pool__lastPostJoinExitInvariant'
  | 'pool__protocolId';

export type bal_PoolHistoricalLiquidity = {
  id: Scalars['ID'];
  poolId: bal_Pool;
  poolTotalShares: Scalars['bal_BigDecimal'];
  poolLiquidity: Scalars['bal_BigDecimal'];
  poolShareValue: Scalars['bal_BigDecimal'];
  pricingAsset: Scalars['bal_Bytes'];
  block: Scalars['BigInt'];
};

export type bal_PoolHistoricalLiquidity_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  poolId?: InputMaybe<Scalars['String']>;
  poolId_not?: InputMaybe<Scalars['String']>;
  poolId_gt?: InputMaybe<Scalars['String']>;
  poolId_lt?: InputMaybe<Scalars['String']>;
  poolId_gte?: InputMaybe<Scalars['String']>;
  poolId_lte?: InputMaybe<Scalars['String']>;
  poolId_in?: InputMaybe<Array<Scalars['String']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolId_contains?: InputMaybe<Scalars['String']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_contains?: InputMaybe<Scalars['String']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolId_starts_with?: InputMaybe<Scalars['String']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_ends_with?: InputMaybe<Scalars['String']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_?: InputMaybe<bal_Pool_filter>;
  poolTotalShares?: InputMaybe<Scalars['bal_BigDecimal']>;
  poolTotalShares_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  poolTotalShares_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  poolTotalShares_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  poolTotalShares_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  poolTotalShares_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  poolTotalShares_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  poolTotalShares_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  poolLiquidity?: InputMaybe<Scalars['bal_BigDecimal']>;
  poolLiquidity_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  poolLiquidity_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  poolLiquidity_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  poolLiquidity_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  poolLiquidity_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  poolLiquidity_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  poolLiquidity_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  poolShareValue?: InputMaybe<Scalars['bal_BigDecimal']>;
  poolShareValue_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  poolShareValue_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  poolShareValue_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  poolShareValue_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  poolShareValue_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  poolShareValue_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  poolShareValue_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  pricingAsset?: InputMaybe<Scalars['bal_Bytes']>;
  pricingAsset_not?: InputMaybe<Scalars['bal_Bytes']>;
  pricingAsset_gt?: InputMaybe<Scalars['bal_Bytes']>;
  pricingAsset_lt?: InputMaybe<Scalars['bal_Bytes']>;
  pricingAsset_gte?: InputMaybe<Scalars['bal_Bytes']>;
  pricingAsset_lte?: InputMaybe<Scalars['bal_Bytes']>;
  pricingAsset_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  pricingAsset_not_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  pricingAsset_contains?: InputMaybe<Scalars['bal_Bytes']>;
  pricingAsset_not_contains?: InputMaybe<Scalars['bal_Bytes']>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_PoolHistoricalLiquidity_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_PoolHistoricalLiquidity_filter>>>;
};

export type bal_PoolHistoricalLiquidity_orderBy =
  | 'id'
  | 'poolId'
  | 'poolId__id'
  | 'poolId__address'
  | 'poolId__poolType'
  | 'poolId__poolTypeVersion'
  | 'poolId__factory'
  | 'poolId__strategyType'
  | 'poolId__oracleEnabled'
  | 'poolId__symbol'
  | 'poolId__name'
  | 'poolId__swapEnabled'
  | 'poolId__swapEnabledInternal'
  | 'poolId__swapEnabledCurationSignal'
  | 'poolId__swapFee'
  | 'poolId__owner'
  | 'poolId__isPaused'
  | 'poolId__totalWeight'
  | 'poolId__totalSwapVolume'
  | 'poolId__totalSwapFee'
  | 'poolId__totalLiquidity'
  | 'poolId__totalLiquiditySansBPT'
  | 'poolId__totalShares'
  | 'poolId__totalProtocolFee'
  | 'poolId__createTime'
  | 'poolId__swapsCount'
  | 'poolId__holdersCount'
  | 'poolId__tx'
  | 'poolId__amp'
  | 'poolId__principalToken'
  | 'poolId__baseToken'
  | 'poolId__expiryTime'
  | 'poolId__unitSeconds'
  | 'poolId__managementFee'
  | 'poolId__joinExitEnabled'
  | 'poolId__mustAllowlistLPs'
  | 'poolId__managementAumFee'
  | 'poolId__totalAumFeeCollectedInBPT'
  | 'poolId__mainIndex'
  | 'poolId__wrappedIndex'
  | 'poolId__lowerTarget'
  | 'poolId__upperTarget'
  | 'poolId__sqrtAlpha'
  | 'poolId__sqrtBeta'
  | 'poolId__root3Alpha'
  | 'poolId__c'
  | 'poolId__s'
  | 'poolId__tauAlphaX'
  | 'poolId__tauAlphaY'
  | 'poolId__tauBetaX'
  | 'poolId__tauBetaY'
  | 'poolId__u'
  | 'poolId__v'
  | 'poolId__w'
  | 'poolId__z'
  | 'poolId__dSq'
  | 'poolId__alpha'
  | 'poolId__beta'
  | 'poolId__lambda'
  | 'poolId__delta'
  | 'poolId__epsilon'
  | 'poolId__isInRecoveryMode'
  | 'poolId__protocolSwapFeeCache'
  | 'poolId__protocolYieldFeeCache'
  | 'poolId__protocolAumFeeCache'
  | 'poolId__totalProtocolFeePaidInBPT'
  | 'poolId__lastJoinExitAmp'
  | 'poolId__lastPostJoinExitInvariant'
  | 'poolId__protocolId'
  | 'poolTotalShares'
  | 'poolLiquidity'
  | 'poolShareValue'
  | 'pricingAsset'
  | 'block';

export type bal_PoolShare = {
  id: Scalars['ID'];
  userAddress: bal_User;
  poolId: bal_Pool;
  balance: Scalars['bal_BigDecimal'];
};

export type bal_PoolShare_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  userAddress?: InputMaybe<Scalars['String']>;
  userAddress_not?: InputMaybe<Scalars['String']>;
  userAddress_gt?: InputMaybe<Scalars['String']>;
  userAddress_lt?: InputMaybe<Scalars['String']>;
  userAddress_gte?: InputMaybe<Scalars['String']>;
  userAddress_lte?: InputMaybe<Scalars['String']>;
  userAddress_in?: InputMaybe<Array<Scalars['String']>>;
  userAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  userAddress_contains?: InputMaybe<Scalars['String']>;
  userAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  userAddress_not_contains?: InputMaybe<Scalars['String']>;
  userAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userAddress_starts_with?: InputMaybe<Scalars['String']>;
  userAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  userAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userAddress_ends_with?: InputMaybe<Scalars['String']>;
  userAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  userAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userAddress_?: InputMaybe<bal_User_filter>;
  poolId?: InputMaybe<Scalars['String']>;
  poolId_not?: InputMaybe<Scalars['String']>;
  poolId_gt?: InputMaybe<Scalars['String']>;
  poolId_lt?: InputMaybe<Scalars['String']>;
  poolId_gte?: InputMaybe<Scalars['String']>;
  poolId_lte?: InputMaybe<Scalars['String']>;
  poolId_in?: InputMaybe<Array<Scalars['String']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolId_contains?: InputMaybe<Scalars['String']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_contains?: InputMaybe<Scalars['String']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolId_starts_with?: InputMaybe<Scalars['String']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_ends_with?: InputMaybe<Scalars['String']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_?: InputMaybe<bal_Pool_filter>;
  balance?: InputMaybe<Scalars['bal_BigDecimal']>;
  balance_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  balance_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  balance_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  balance_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  balance_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  balance_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  balance_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_PoolShare_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_PoolShare_filter>>>;
};

export type bal_PoolShare_orderBy =
  | 'id'
  | 'userAddress'
  | 'userAddress__id'
  | 'poolId'
  | 'poolId__id'
  | 'poolId__address'
  | 'poolId__poolType'
  | 'poolId__poolTypeVersion'
  | 'poolId__factory'
  | 'poolId__strategyType'
  | 'poolId__oracleEnabled'
  | 'poolId__symbol'
  | 'poolId__name'
  | 'poolId__swapEnabled'
  | 'poolId__swapEnabledInternal'
  | 'poolId__swapEnabledCurationSignal'
  | 'poolId__swapFee'
  | 'poolId__owner'
  | 'poolId__isPaused'
  | 'poolId__totalWeight'
  | 'poolId__totalSwapVolume'
  | 'poolId__totalSwapFee'
  | 'poolId__totalLiquidity'
  | 'poolId__totalLiquiditySansBPT'
  | 'poolId__totalShares'
  | 'poolId__totalProtocolFee'
  | 'poolId__createTime'
  | 'poolId__swapsCount'
  | 'poolId__holdersCount'
  | 'poolId__tx'
  | 'poolId__amp'
  | 'poolId__principalToken'
  | 'poolId__baseToken'
  | 'poolId__expiryTime'
  | 'poolId__unitSeconds'
  | 'poolId__managementFee'
  | 'poolId__joinExitEnabled'
  | 'poolId__mustAllowlistLPs'
  | 'poolId__managementAumFee'
  | 'poolId__totalAumFeeCollectedInBPT'
  | 'poolId__mainIndex'
  | 'poolId__wrappedIndex'
  | 'poolId__lowerTarget'
  | 'poolId__upperTarget'
  | 'poolId__sqrtAlpha'
  | 'poolId__sqrtBeta'
  | 'poolId__root3Alpha'
  | 'poolId__c'
  | 'poolId__s'
  | 'poolId__tauAlphaX'
  | 'poolId__tauAlphaY'
  | 'poolId__tauBetaX'
  | 'poolId__tauBetaY'
  | 'poolId__u'
  | 'poolId__v'
  | 'poolId__w'
  | 'poolId__z'
  | 'poolId__dSq'
  | 'poolId__alpha'
  | 'poolId__beta'
  | 'poolId__lambda'
  | 'poolId__delta'
  | 'poolId__epsilon'
  | 'poolId__isInRecoveryMode'
  | 'poolId__protocolSwapFeeCache'
  | 'poolId__protocolYieldFeeCache'
  | 'poolId__protocolAumFeeCache'
  | 'poolId__totalProtocolFeePaidInBPT'
  | 'poolId__lastJoinExitAmp'
  | 'poolId__lastPostJoinExitInvariant'
  | 'poolId__protocolId'
  | 'balance';

export type bal_PoolSnapshot = {
  id: Scalars['ID'];
  pool: bal_Pool;
  amounts: Array<Scalars['bal_BigDecimal']>;
  totalShares: Scalars['bal_BigDecimal'];
  swapVolume: Scalars['bal_BigDecimal'];
  protocolFee?: Maybe<Scalars['bal_BigDecimal']>;
  swapFees: Scalars['bal_BigDecimal'];
  liquidity: Scalars['bal_BigDecimal'];
  swapsCount: Scalars['BigInt'];
  holdersCount: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type bal_PoolSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  pool_?: InputMaybe<bal_Pool_filter>;
  amounts?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  amounts_not?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  amounts_contains?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  amounts_contains_nocase?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  amounts_not_contains?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  amounts_not_contains_nocase?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalShares?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalShares_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalShares_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalShares_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalShares_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalShares_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalShares_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalShares_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  swapVolume?: InputMaybe<Scalars['bal_BigDecimal']>;
  swapVolume_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  swapVolume_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  swapVolume_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  swapVolume_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  swapVolume_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  swapVolume_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  swapVolume_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  protocolFee?: InputMaybe<Scalars['bal_BigDecimal']>;
  protocolFee_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  protocolFee_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  protocolFee_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  protocolFee_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  protocolFee_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  protocolFee_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  protocolFee_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  swapFees?: InputMaybe<Scalars['bal_BigDecimal']>;
  swapFees_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  swapFees_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  swapFees_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  swapFees_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  swapFees_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  swapFees_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  swapFees_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  liquidity?: InputMaybe<Scalars['bal_BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  swapsCount?: InputMaybe<Scalars['BigInt']>;
  swapsCount_not?: InputMaybe<Scalars['BigInt']>;
  swapsCount_gt?: InputMaybe<Scalars['BigInt']>;
  swapsCount_lt?: InputMaybe<Scalars['BigInt']>;
  swapsCount_gte?: InputMaybe<Scalars['BigInt']>;
  swapsCount_lte?: InputMaybe<Scalars['BigInt']>;
  swapsCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapsCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  holdersCount?: InputMaybe<Scalars['BigInt']>;
  holdersCount_not?: InputMaybe<Scalars['BigInt']>;
  holdersCount_gt?: InputMaybe<Scalars['BigInt']>;
  holdersCount_lt?: InputMaybe<Scalars['BigInt']>;
  holdersCount_gte?: InputMaybe<Scalars['BigInt']>;
  holdersCount_lte?: InputMaybe<Scalars['BigInt']>;
  holdersCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  holdersCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_PoolSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_PoolSnapshot_filter>>>;
};

export type bal_PoolSnapshot_orderBy =
  | 'id'
  | 'pool'
  | 'pool__id'
  | 'pool__address'
  | 'pool__poolType'
  | 'pool__poolTypeVersion'
  | 'pool__factory'
  | 'pool__strategyType'
  | 'pool__oracleEnabled'
  | 'pool__symbol'
  | 'pool__name'
  | 'pool__swapEnabled'
  | 'pool__swapEnabledInternal'
  | 'pool__swapEnabledCurationSignal'
  | 'pool__swapFee'
  | 'pool__owner'
  | 'pool__isPaused'
  | 'pool__totalWeight'
  | 'pool__totalSwapVolume'
  | 'pool__totalSwapFee'
  | 'pool__totalLiquidity'
  | 'pool__totalLiquiditySansBPT'
  | 'pool__totalShares'
  | 'pool__totalProtocolFee'
  | 'pool__createTime'
  | 'pool__swapsCount'
  | 'pool__holdersCount'
  | 'pool__tx'
  | 'pool__amp'
  | 'pool__principalToken'
  | 'pool__baseToken'
  | 'pool__expiryTime'
  | 'pool__unitSeconds'
  | 'pool__managementFee'
  | 'pool__joinExitEnabled'
  | 'pool__mustAllowlistLPs'
  | 'pool__managementAumFee'
  | 'pool__totalAumFeeCollectedInBPT'
  | 'pool__mainIndex'
  | 'pool__wrappedIndex'
  | 'pool__lowerTarget'
  | 'pool__upperTarget'
  | 'pool__sqrtAlpha'
  | 'pool__sqrtBeta'
  | 'pool__root3Alpha'
  | 'pool__c'
  | 'pool__s'
  | 'pool__tauAlphaX'
  | 'pool__tauAlphaY'
  | 'pool__tauBetaX'
  | 'pool__tauBetaY'
  | 'pool__u'
  | 'pool__v'
  | 'pool__w'
  | 'pool__z'
  | 'pool__dSq'
  | 'pool__alpha'
  | 'pool__beta'
  | 'pool__lambda'
  | 'pool__delta'
  | 'pool__epsilon'
  | 'pool__isInRecoveryMode'
  | 'pool__protocolSwapFeeCache'
  | 'pool__protocolYieldFeeCache'
  | 'pool__protocolAumFeeCache'
  | 'pool__totalProtocolFeePaidInBPT'
  | 'pool__lastJoinExitAmp'
  | 'pool__lastPostJoinExitInvariant'
  | 'pool__protocolId'
  | 'amounts'
  | 'totalShares'
  | 'swapVolume'
  | 'protocolFee'
  | 'swapFees'
  | 'liquidity'
  | 'swapsCount'
  | 'holdersCount'
  | 'timestamp';

export type bal_PoolToken = {
  id: Scalars['ID'];
  poolId?: Maybe<bal_Pool>;
  token: bal_Token;
  assetManager: Scalars['bal_Bytes'];
  symbol: Scalars['String'];
  name: Scalars['String'];
  decimals: Scalars['Int'];
  index?: Maybe<Scalars['Int']>;
  address: Scalars['String'];
  oldPriceRate?: Maybe<Scalars['bal_BigDecimal']>;
  priceRate: Scalars['bal_BigDecimal'];
  balance: Scalars['bal_BigDecimal'];
  paidProtocolFees?: Maybe<Scalars['bal_BigDecimal']>;
  cashBalance: Scalars['bal_BigDecimal'];
  managedBalance: Scalars['bal_BigDecimal'];
  managements?: Maybe<Array<bal_ManagementOperation>>;
  weight?: Maybe<Scalars['bal_BigDecimal']>;
  isExemptFromYieldProtocolFee?: Maybe<Scalars['Boolean']>;
  circuitBreaker?: Maybe<bal_CircuitBreaker>;
};


export type bal_PoolTokenmanagementsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_ManagementOperation_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_ManagementOperation_filter>;
};

export type bal_PoolToken_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  poolId?: InputMaybe<Scalars['String']>;
  poolId_not?: InputMaybe<Scalars['String']>;
  poolId_gt?: InputMaybe<Scalars['String']>;
  poolId_lt?: InputMaybe<Scalars['String']>;
  poolId_gte?: InputMaybe<Scalars['String']>;
  poolId_lte?: InputMaybe<Scalars['String']>;
  poolId_in?: InputMaybe<Array<Scalars['String']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolId_contains?: InputMaybe<Scalars['String']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_contains?: InputMaybe<Scalars['String']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolId_starts_with?: InputMaybe<Scalars['String']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_ends_with?: InputMaybe<Scalars['String']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_?: InputMaybe<bal_Pool_filter>;
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
  token_?: InputMaybe<bal_Token_filter>;
  assetManager?: InputMaybe<Scalars['bal_Bytes']>;
  assetManager_not?: InputMaybe<Scalars['bal_Bytes']>;
  assetManager_gt?: InputMaybe<Scalars['bal_Bytes']>;
  assetManager_lt?: InputMaybe<Scalars['bal_Bytes']>;
  assetManager_gte?: InputMaybe<Scalars['bal_Bytes']>;
  assetManager_lte?: InputMaybe<Scalars['bal_Bytes']>;
  assetManager_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  assetManager_not_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  assetManager_contains?: InputMaybe<Scalars['bal_Bytes']>;
  assetManager_not_contains?: InputMaybe<Scalars['bal_Bytes']>;
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
  decimals?: InputMaybe<Scalars['Int']>;
  decimals_not?: InputMaybe<Scalars['Int']>;
  decimals_gt?: InputMaybe<Scalars['Int']>;
  decimals_lt?: InputMaybe<Scalars['Int']>;
  decimals_gte?: InputMaybe<Scalars['Int']>;
  decimals_lte?: InputMaybe<Scalars['Int']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  index?: InputMaybe<Scalars['Int']>;
  index_not?: InputMaybe<Scalars['Int']>;
  index_gt?: InputMaybe<Scalars['Int']>;
  index_lt?: InputMaybe<Scalars['Int']>;
  index_gte?: InputMaybe<Scalars['Int']>;
  index_lte?: InputMaybe<Scalars['Int']>;
  index_in?: InputMaybe<Array<Scalars['Int']>>;
  index_not_in?: InputMaybe<Array<Scalars['Int']>>;
  address?: InputMaybe<Scalars['String']>;
  address_not?: InputMaybe<Scalars['String']>;
  address_gt?: InputMaybe<Scalars['String']>;
  address_lt?: InputMaybe<Scalars['String']>;
  address_gte?: InputMaybe<Scalars['String']>;
  address_lte?: InputMaybe<Scalars['String']>;
  address_in?: InputMaybe<Array<Scalars['String']>>;
  address_not_in?: InputMaybe<Array<Scalars['String']>>;
  address_contains?: InputMaybe<Scalars['String']>;
  address_contains_nocase?: InputMaybe<Scalars['String']>;
  address_not_contains?: InputMaybe<Scalars['String']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']>;
  address_starts_with?: InputMaybe<Scalars['String']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']>;
  address_not_starts_with?: InputMaybe<Scalars['String']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  address_ends_with?: InputMaybe<Scalars['String']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']>;
  address_not_ends_with?: InputMaybe<Scalars['String']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  oldPriceRate?: InputMaybe<Scalars['bal_BigDecimal']>;
  oldPriceRate_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  oldPriceRate_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  oldPriceRate_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  oldPriceRate_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  oldPriceRate_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  oldPriceRate_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  oldPriceRate_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  priceRate?: InputMaybe<Scalars['bal_BigDecimal']>;
  priceRate_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  priceRate_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  priceRate_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  priceRate_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  priceRate_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  priceRate_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  priceRate_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  balance?: InputMaybe<Scalars['bal_BigDecimal']>;
  balance_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  balance_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  balance_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  balance_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  balance_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  balance_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  balance_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  paidProtocolFees?: InputMaybe<Scalars['bal_BigDecimal']>;
  paidProtocolFees_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  paidProtocolFees_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  paidProtocolFees_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  paidProtocolFees_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  paidProtocolFees_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  paidProtocolFees_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  paidProtocolFees_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  cashBalance?: InputMaybe<Scalars['bal_BigDecimal']>;
  cashBalance_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  cashBalance_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  cashBalance_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  cashBalance_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  cashBalance_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  cashBalance_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  cashBalance_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  managedBalance?: InputMaybe<Scalars['bal_BigDecimal']>;
  managedBalance_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  managedBalance_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  managedBalance_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  managedBalance_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  managedBalance_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  managedBalance_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  managedBalance_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  managements_?: InputMaybe<bal_ManagementOperation_filter>;
  weight?: InputMaybe<Scalars['bal_BigDecimal']>;
  weight_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  weight_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  weight_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  weight_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  weight_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  weight_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  weight_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  isExemptFromYieldProtocolFee?: InputMaybe<Scalars['Boolean']>;
  isExemptFromYieldProtocolFee_not?: InputMaybe<Scalars['Boolean']>;
  isExemptFromYieldProtocolFee_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isExemptFromYieldProtocolFee_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  circuitBreaker?: InputMaybe<Scalars['String']>;
  circuitBreaker_not?: InputMaybe<Scalars['String']>;
  circuitBreaker_gt?: InputMaybe<Scalars['String']>;
  circuitBreaker_lt?: InputMaybe<Scalars['String']>;
  circuitBreaker_gte?: InputMaybe<Scalars['String']>;
  circuitBreaker_lte?: InputMaybe<Scalars['String']>;
  circuitBreaker_in?: InputMaybe<Array<Scalars['String']>>;
  circuitBreaker_not_in?: InputMaybe<Array<Scalars['String']>>;
  circuitBreaker_contains?: InputMaybe<Scalars['String']>;
  circuitBreaker_contains_nocase?: InputMaybe<Scalars['String']>;
  circuitBreaker_not_contains?: InputMaybe<Scalars['String']>;
  circuitBreaker_not_contains_nocase?: InputMaybe<Scalars['String']>;
  circuitBreaker_starts_with?: InputMaybe<Scalars['String']>;
  circuitBreaker_starts_with_nocase?: InputMaybe<Scalars['String']>;
  circuitBreaker_not_starts_with?: InputMaybe<Scalars['String']>;
  circuitBreaker_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  circuitBreaker_ends_with?: InputMaybe<Scalars['String']>;
  circuitBreaker_ends_with_nocase?: InputMaybe<Scalars['String']>;
  circuitBreaker_not_ends_with?: InputMaybe<Scalars['String']>;
  circuitBreaker_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  circuitBreaker_?: InputMaybe<bal_CircuitBreaker_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_PoolToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_PoolToken_filter>>>;
};

export type bal_PoolToken_orderBy =
  | 'id'
  | 'poolId'
  | 'poolId__id'
  | 'poolId__address'
  | 'poolId__poolType'
  | 'poolId__poolTypeVersion'
  | 'poolId__factory'
  | 'poolId__strategyType'
  | 'poolId__oracleEnabled'
  | 'poolId__symbol'
  | 'poolId__name'
  | 'poolId__swapEnabled'
  | 'poolId__swapEnabledInternal'
  | 'poolId__swapEnabledCurationSignal'
  | 'poolId__swapFee'
  | 'poolId__owner'
  | 'poolId__isPaused'
  | 'poolId__totalWeight'
  | 'poolId__totalSwapVolume'
  | 'poolId__totalSwapFee'
  | 'poolId__totalLiquidity'
  | 'poolId__totalLiquiditySansBPT'
  | 'poolId__totalShares'
  | 'poolId__totalProtocolFee'
  | 'poolId__createTime'
  | 'poolId__swapsCount'
  | 'poolId__holdersCount'
  | 'poolId__tx'
  | 'poolId__amp'
  | 'poolId__principalToken'
  | 'poolId__baseToken'
  | 'poolId__expiryTime'
  | 'poolId__unitSeconds'
  | 'poolId__managementFee'
  | 'poolId__joinExitEnabled'
  | 'poolId__mustAllowlistLPs'
  | 'poolId__managementAumFee'
  | 'poolId__totalAumFeeCollectedInBPT'
  | 'poolId__mainIndex'
  | 'poolId__wrappedIndex'
  | 'poolId__lowerTarget'
  | 'poolId__upperTarget'
  | 'poolId__sqrtAlpha'
  | 'poolId__sqrtBeta'
  | 'poolId__root3Alpha'
  | 'poolId__c'
  | 'poolId__s'
  | 'poolId__tauAlphaX'
  | 'poolId__tauAlphaY'
  | 'poolId__tauBetaX'
  | 'poolId__tauBetaY'
  | 'poolId__u'
  | 'poolId__v'
  | 'poolId__w'
  | 'poolId__z'
  | 'poolId__dSq'
  | 'poolId__alpha'
  | 'poolId__beta'
  | 'poolId__lambda'
  | 'poolId__delta'
  | 'poolId__epsilon'
  | 'poolId__isInRecoveryMode'
  | 'poolId__protocolSwapFeeCache'
  | 'poolId__protocolYieldFeeCache'
  | 'poolId__protocolAumFeeCache'
  | 'poolId__totalProtocolFeePaidInBPT'
  | 'poolId__lastJoinExitAmp'
  | 'poolId__lastPostJoinExitInvariant'
  | 'poolId__protocolId'
  | 'token'
  | 'token__id'
  | 'token__symbol'
  | 'token__name'
  | 'token__decimals'
  | 'token__address'
  | 'token__totalBalanceUSD'
  | 'token__totalBalanceNotional'
  | 'token__totalVolumeUSD'
  | 'token__totalVolumeNotional'
  | 'token__totalSwapCount'
  | 'token__latestUSDPrice'
  | 'token__latestUSDPriceTimestamp'
  | 'token__latestFXPrice'
  | 'token__fxOracleDecimals'
  | 'assetManager'
  | 'symbol'
  | 'name'
  | 'decimals'
  | 'index'
  | 'address'
  | 'oldPriceRate'
  | 'priceRate'
  | 'balance'
  | 'paidProtocolFees'
  | 'cashBalance'
  | 'managedBalance'
  | 'managements'
  | 'weight'
  | 'isExemptFromYieldProtocolFee'
  | 'circuitBreaker'
  | 'circuitBreaker__id'
  | 'circuitBreaker__bptPrice'
  | 'circuitBreaker__lowerBoundPercentage'
  | 'circuitBreaker__upperBoundPercentage';

export type bal_Pool_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  address?: InputMaybe<Scalars['bal_Bytes']>;
  address_not?: InputMaybe<Scalars['bal_Bytes']>;
  address_gt?: InputMaybe<Scalars['bal_Bytes']>;
  address_lt?: InputMaybe<Scalars['bal_Bytes']>;
  address_gte?: InputMaybe<Scalars['bal_Bytes']>;
  address_lte?: InputMaybe<Scalars['bal_Bytes']>;
  address_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  address_contains?: InputMaybe<Scalars['bal_Bytes']>;
  address_not_contains?: InputMaybe<Scalars['bal_Bytes']>;
  poolType?: InputMaybe<Scalars['String']>;
  poolType_not?: InputMaybe<Scalars['String']>;
  poolType_gt?: InputMaybe<Scalars['String']>;
  poolType_lt?: InputMaybe<Scalars['String']>;
  poolType_gte?: InputMaybe<Scalars['String']>;
  poolType_lte?: InputMaybe<Scalars['String']>;
  poolType_in?: InputMaybe<Array<Scalars['String']>>;
  poolType_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolType_contains?: InputMaybe<Scalars['String']>;
  poolType_contains_nocase?: InputMaybe<Scalars['String']>;
  poolType_not_contains?: InputMaybe<Scalars['String']>;
  poolType_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolType_starts_with?: InputMaybe<Scalars['String']>;
  poolType_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolType_not_starts_with?: InputMaybe<Scalars['String']>;
  poolType_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolType_ends_with?: InputMaybe<Scalars['String']>;
  poolType_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolType_not_ends_with?: InputMaybe<Scalars['String']>;
  poolType_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolTypeVersion?: InputMaybe<Scalars['Int']>;
  poolTypeVersion_not?: InputMaybe<Scalars['Int']>;
  poolTypeVersion_gt?: InputMaybe<Scalars['Int']>;
  poolTypeVersion_lt?: InputMaybe<Scalars['Int']>;
  poolTypeVersion_gte?: InputMaybe<Scalars['Int']>;
  poolTypeVersion_lte?: InputMaybe<Scalars['Int']>;
  poolTypeVersion_in?: InputMaybe<Array<Scalars['Int']>>;
  poolTypeVersion_not_in?: InputMaybe<Array<Scalars['Int']>>;
  factory?: InputMaybe<Scalars['bal_Bytes']>;
  factory_not?: InputMaybe<Scalars['bal_Bytes']>;
  factory_gt?: InputMaybe<Scalars['bal_Bytes']>;
  factory_lt?: InputMaybe<Scalars['bal_Bytes']>;
  factory_gte?: InputMaybe<Scalars['bal_Bytes']>;
  factory_lte?: InputMaybe<Scalars['bal_Bytes']>;
  factory_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  factory_not_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  factory_contains?: InputMaybe<Scalars['bal_Bytes']>;
  factory_not_contains?: InputMaybe<Scalars['bal_Bytes']>;
  strategyType?: InputMaybe<Scalars['Int']>;
  strategyType_not?: InputMaybe<Scalars['Int']>;
  strategyType_gt?: InputMaybe<Scalars['Int']>;
  strategyType_lt?: InputMaybe<Scalars['Int']>;
  strategyType_gte?: InputMaybe<Scalars['Int']>;
  strategyType_lte?: InputMaybe<Scalars['Int']>;
  strategyType_in?: InputMaybe<Array<Scalars['Int']>>;
  strategyType_not_in?: InputMaybe<Array<Scalars['Int']>>;
  oracleEnabled?: InputMaybe<Scalars['Boolean']>;
  oracleEnabled_not?: InputMaybe<Scalars['Boolean']>;
  oracleEnabled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  oracleEnabled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
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
  swapEnabled?: InputMaybe<Scalars['Boolean']>;
  swapEnabled_not?: InputMaybe<Scalars['Boolean']>;
  swapEnabled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  swapEnabled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  swapEnabledInternal?: InputMaybe<Scalars['Boolean']>;
  swapEnabledInternal_not?: InputMaybe<Scalars['Boolean']>;
  swapEnabledInternal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  swapEnabledInternal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  swapEnabledCurationSignal?: InputMaybe<Scalars['Boolean']>;
  swapEnabledCurationSignal_not?: InputMaybe<Scalars['Boolean']>;
  swapEnabledCurationSignal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  swapEnabledCurationSignal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  swapFee?: InputMaybe<Scalars['bal_BigDecimal']>;
  swapFee_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  swapFee_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  swapFee_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  swapFee_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  swapFee_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  swapFee_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  swapFee_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  owner?: InputMaybe<Scalars['bal_Bytes']>;
  owner_not?: InputMaybe<Scalars['bal_Bytes']>;
  owner_gt?: InputMaybe<Scalars['bal_Bytes']>;
  owner_lt?: InputMaybe<Scalars['bal_Bytes']>;
  owner_gte?: InputMaybe<Scalars['bal_Bytes']>;
  owner_lte?: InputMaybe<Scalars['bal_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['bal_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['bal_Bytes']>;
  isPaused?: InputMaybe<Scalars['Boolean']>;
  isPaused_not?: InputMaybe<Scalars['Boolean']>;
  isPaused_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isPaused_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  totalWeight?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalWeight_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalWeight_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalWeight_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalWeight_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalWeight_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalWeight_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalWeight_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalSwapVolume?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalSwapFee?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalLiquidity?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalLiquidity_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalLiquidity_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalLiquidity_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalLiquidity_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalLiquidity_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalLiquidity_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalLiquiditySansBPT?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalLiquiditySansBPT_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalLiquiditySansBPT_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalLiquiditySansBPT_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalLiquiditySansBPT_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalLiquiditySansBPT_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalLiquiditySansBPT_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalLiquiditySansBPT_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalShares?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalShares_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalShares_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalShares_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalShares_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalShares_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalShares_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalShares_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalProtocolFee?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalProtocolFee_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalProtocolFee_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalProtocolFee_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalProtocolFee_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalProtocolFee_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalProtocolFee_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalProtocolFee_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  createTime?: InputMaybe<Scalars['Int']>;
  createTime_not?: InputMaybe<Scalars['Int']>;
  createTime_gt?: InputMaybe<Scalars['Int']>;
  createTime_lt?: InputMaybe<Scalars['Int']>;
  createTime_gte?: InputMaybe<Scalars['Int']>;
  createTime_lte?: InputMaybe<Scalars['Int']>;
  createTime_in?: InputMaybe<Array<Scalars['Int']>>;
  createTime_not_in?: InputMaybe<Array<Scalars['Int']>>;
  swapsCount?: InputMaybe<Scalars['BigInt']>;
  swapsCount_not?: InputMaybe<Scalars['BigInt']>;
  swapsCount_gt?: InputMaybe<Scalars['BigInt']>;
  swapsCount_lt?: InputMaybe<Scalars['BigInt']>;
  swapsCount_gte?: InputMaybe<Scalars['BigInt']>;
  swapsCount_lte?: InputMaybe<Scalars['BigInt']>;
  swapsCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapsCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  holdersCount?: InputMaybe<Scalars['BigInt']>;
  holdersCount_not?: InputMaybe<Scalars['BigInt']>;
  holdersCount_gt?: InputMaybe<Scalars['BigInt']>;
  holdersCount_lt?: InputMaybe<Scalars['BigInt']>;
  holdersCount_gte?: InputMaybe<Scalars['BigInt']>;
  holdersCount_lte?: InputMaybe<Scalars['BigInt']>;
  holdersCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  holdersCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vaultID?: InputMaybe<Scalars['String']>;
  vaultID_not?: InputMaybe<Scalars['String']>;
  vaultID_gt?: InputMaybe<Scalars['String']>;
  vaultID_lt?: InputMaybe<Scalars['String']>;
  vaultID_gte?: InputMaybe<Scalars['String']>;
  vaultID_lte?: InputMaybe<Scalars['String']>;
  vaultID_in?: InputMaybe<Array<Scalars['String']>>;
  vaultID_not_in?: InputMaybe<Array<Scalars['String']>>;
  vaultID_contains?: InputMaybe<Scalars['String']>;
  vaultID_contains_nocase?: InputMaybe<Scalars['String']>;
  vaultID_not_contains?: InputMaybe<Scalars['String']>;
  vaultID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  vaultID_starts_with?: InputMaybe<Scalars['String']>;
  vaultID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  vaultID_not_starts_with?: InputMaybe<Scalars['String']>;
  vaultID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  vaultID_ends_with?: InputMaybe<Scalars['String']>;
  vaultID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vaultID_not_ends_with?: InputMaybe<Scalars['String']>;
  vaultID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  vaultID_?: InputMaybe<bal_Balancer_filter>;
  tx?: InputMaybe<Scalars['bal_Bytes']>;
  tx_not?: InputMaybe<Scalars['bal_Bytes']>;
  tx_gt?: InputMaybe<Scalars['bal_Bytes']>;
  tx_lt?: InputMaybe<Scalars['bal_Bytes']>;
  tx_gte?: InputMaybe<Scalars['bal_Bytes']>;
  tx_lte?: InputMaybe<Scalars['bal_Bytes']>;
  tx_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  tx_not_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  tx_contains?: InputMaybe<Scalars['bal_Bytes']>;
  tx_not_contains?: InputMaybe<Scalars['bal_Bytes']>;
  tokensList?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  tokensList_not?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  tokensList_contains?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  tokensList_contains_nocase?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  tokensList_not_contains?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  tokensList_not_contains_nocase?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  tokens_?: InputMaybe<bal_PoolToken_filter>;
  joinsExits_?: InputMaybe<bal_JoinExit_filter>;
  swaps_?: InputMaybe<bal_Swap_filter>;
  shares_?: InputMaybe<bal_PoolShare_filter>;
  snapshots_?: InputMaybe<bal_PoolSnapshot_filter>;
  historicalValues_?: InputMaybe<bal_PoolHistoricalLiquidity_filter>;
  weightUpdates_?: InputMaybe<bal_GradualWeightUpdate_filter>;
  amp?: InputMaybe<Scalars['BigInt']>;
  amp_not?: InputMaybe<Scalars['BigInt']>;
  amp_gt?: InputMaybe<Scalars['BigInt']>;
  amp_lt?: InputMaybe<Scalars['BigInt']>;
  amp_gte?: InputMaybe<Scalars['BigInt']>;
  amp_lte?: InputMaybe<Scalars['BigInt']>;
  amp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  latestAmpUpdate?: InputMaybe<Scalars['String']>;
  latestAmpUpdate_not?: InputMaybe<Scalars['String']>;
  latestAmpUpdate_gt?: InputMaybe<Scalars['String']>;
  latestAmpUpdate_lt?: InputMaybe<Scalars['String']>;
  latestAmpUpdate_gte?: InputMaybe<Scalars['String']>;
  latestAmpUpdate_lte?: InputMaybe<Scalars['String']>;
  latestAmpUpdate_in?: InputMaybe<Array<Scalars['String']>>;
  latestAmpUpdate_not_in?: InputMaybe<Array<Scalars['String']>>;
  latestAmpUpdate_contains?: InputMaybe<Scalars['String']>;
  latestAmpUpdate_contains_nocase?: InputMaybe<Scalars['String']>;
  latestAmpUpdate_not_contains?: InputMaybe<Scalars['String']>;
  latestAmpUpdate_not_contains_nocase?: InputMaybe<Scalars['String']>;
  latestAmpUpdate_starts_with?: InputMaybe<Scalars['String']>;
  latestAmpUpdate_starts_with_nocase?: InputMaybe<Scalars['String']>;
  latestAmpUpdate_not_starts_with?: InputMaybe<Scalars['String']>;
  latestAmpUpdate_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  latestAmpUpdate_ends_with?: InputMaybe<Scalars['String']>;
  latestAmpUpdate_ends_with_nocase?: InputMaybe<Scalars['String']>;
  latestAmpUpdate_not_ends_with?: InputMaybe<Scalars['String']>;
  latestAmpUpdate_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  latestAmpUpdate_?: InputMaybe<bal_AmpUpdate_filter>;
  ampUpdates_?: InputMaybe<bal_AmpUpdate_filter>;
  priceRateProviders_?: InputMaybe<bal_PriceRateProvider_filter>;
  principalToken?: InputMaybe<Scalars['bal_Bytes']>;
  principalToken_not?: InputMaybe<Scalars['bal_Bytes']>;
  principalToken_gt?: InputMaybe<Scalars['bal_Bytes']>;
  principalToken_lt?: InputMaybe<Scalars['bal_Bytes']>;
  principalToken_gte?: InputMaybe<Scalars['bal_Bytes']>;
  principalToken_lte?: InputMaybe<Scalars['bal_Bytes']>;
  principalToken_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  principalToken_not_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  principalToken_contains?: InputMaybe<Scalars['bal_Bytes']>;
  principalToken_not_contains?: InputMaybe<Scalars['bal_Bytes']>;
  baseToken?: InputMaybe<Scalars['bal_Bytes']>;
  baseToken_not?: InputMaybe<Scalars['bal_Bytes']>;
  baseToken_gt?: InputMaybe<Scalars['bal_Bytes']>;
  baseToken_lt?: InputMaybe<Scalars['bal_Bytes']>;
  baseToken_gte?: InputMaybe<Scalars['bal_Bytes']>;
  baseToken_lte?: InputMaybe<Scalars['bal_Bytes']>;
  baseToken_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  baseToken_not_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  baseToken_contains?: InputMaybe<Scalars['bal_Bytes']>;
  baseToken_not_contains?: InputMaybe<Scalars['bal_Bytes']>;
  expiryTime?: InputMaybe<Scalars['BigInt']>;
  expiryTime_not?: InputMaybe<Scalars['BigInt']>;
  expiryTime_gt?: InputMaybe<Scalars['BigInt']>;
  expiryTime_lt?: InputMaybe<Scalars['BigInt']>;
  expiryTime_gte?: InputMaybe<Scalars['BigInt']>;
  expiryTime_lte?: InputMaybe<Scalars['BigInt']>;
  expiryTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unitSeconds?: InputMaybe<Scalars['BigInt']>;
  unitSeconds_not?: InputMaybe<Scalars['BigInt']>;
  unitSeconds_gt?: InputMaybe<Scalars['BigInt']>;
  unitSeconds_lt?: InputMaybe<Scalars['BigInt']>;
  unitSeconds_gte?: InputMaybe<Scalars['BigInt']>;
  unitSeconds_lte?: InputMaybe<Scalars['BigInt']>;
  unitSeconds_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unitSeconds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  managementFee?: InputMaybe<Scalars['bal_BigDecimal']>;
  managementFee_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  managementFee_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  managementFee_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  managementFee_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  managementFee_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  managementFee_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  managementFee_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  joinExitEnabled?: InputMaybe<Scalars['Boolean']>;
  joinExitEnabled_not?: InputMaybe<Scalars['Boolean']>;
  joinExitEnabled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  joinExitEnabled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  mustAllowlistLPs?: InputMaybe<Scalars['Boolean']>;
  mustAllowlistLPs_not?: InputMaybe<Scalars['Boolean']>;
  mustAllowlistLPs_in?: InputMaybe<Array<Scalars['Boolean']>>;
  mustAllowlistLPs_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  managementAumFee?: InputMaybe<Scalars['bal_BigDecimal']>;
  managementAumFee_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  managementAumFee_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  managementAumFee_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  managementAumFee_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  managementAumFee_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  managementAumFee_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  managementAumFee_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalAumFeeCollectedInBPT?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalAumFeeCollectedInBPT_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalAumFeeCollectedInBPT_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalAumFeeCollectedInBPT_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalAumFeeCollectedInBPT_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalAumFeeCollectedInBPT_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalAumFeeCollectedInBPT_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalAumFeeCollectedInBPT_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  circuitBreakers_?: InputMaybe<bal_CircuitBreaker_filter>;
  mainIndex?: InputMaybe<Scalars['Int']>;
  mainIndex_not?: InputMaybe<Scalars['Int']>;
  mainIndex_gt?: InputMaybe<Scalars['Int']>;
  mainIndex_lt?: InputMaybe<Scalars['Int']>;
  mainIndex_gte?: InputMaybe<Scalars['Int']>;
  mainIndex_lte?: InputMaybe<Scalars['Int']>;
  mainIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  mainIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  wrappedIndex?: InputMaybe<Scalars['Int']>;
  wrappedIndex_not?: InputMaybe<Scalars['Int']>;
  wrappedIndex_gt?: InputMaybe<Scalars['Int']>;
  wrappedIndex_lt?: InputMaybe<Scalars['Int']>;
  wrappedIndex_gte?: InputMaybe<Scalars['Int']>;
  wrappedIndex_lte?: InputMaybe<Scalars['Int']>;
  wrappedIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  wrappedIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lowerTarget?: InputMaybe<Scalars['bal_BigDecimal']>;
  lowerTarget_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  lowerTarget_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  lowerTarget_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  lowerTarget_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  lowerTarget_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  lowerTarget_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  lowerTarget_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  upperTarget?: InputMaybe<Scalars['bal_BigDecimal']>;
  upperTarget_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  upperTarget_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  upperTarget_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  upperTarget_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  upperTarget_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  upperTarget_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  upperTarget_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  sqrtAlpha?: InputMaybe<Scalars['bal_BigDecimal']>;
  sqrtAlpha_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  sqrtAlpha_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  sqrtAlpha_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  sqrtAlpha_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  sqrtAlpha_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  sqrtAlpha_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  sqrtAlpha_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  sqrtBeta?: InputMaybe<Scalars['bal_BigDecimal']>;
  sqrtBeta_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  sqrtBeta_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  sqrtBeta_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  sqrtBeta_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  sqrtBeta_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  sqrtBeta_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  sqrtBeta_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  root3Alpha?: InputMaybe<Scalars['bal_BigDecimal']>;
  root3Alpha_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  root3Alpha_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  root3Alpha_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  root3Alpha_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  root3Alpha_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  root3Alpha_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  root3Alpha_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  c?: InputMaybe<Scalars['bal_BigDecimal']>;
  c_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  c_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  c_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  c_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  c_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  c_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  c_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  s?: InputMaybe<Scalars['bal_BigDecimal']>;
  s_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  s_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  s_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  s_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  s_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  s_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  s_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  tauAlphaX?: InputMaybe<Scalars['bal_BigDecimal']>;
  tauAlphaX_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  tauAlphaX_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  tauAlphaX_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  tauAlphaX_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  tauAlphaX_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  tauAlphaX_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  tauAlphaX_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  tauAlphaY?: InputMaybe<Scalars['bal_BigDecimal']>;
  tauAlphaY_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  tauAlphaY_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  tauAlphaY_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  tauAlphaY_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  tauAlphaY_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  tauAlphaY_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  tauAlphaY_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  tauBetaX?: InputMaybe<Scalars['bal_BigDecimal']>;
  tauBetaX_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  tauBetaX_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  tauBetaX_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  tauBetaX_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  tauBetaX_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  tauBetaX_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  tauBetaX_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  tauBetaY?: InputMaybe<Scalars['bal_BigDecimal']>;
  tauBetaY_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  tauBetaY_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  tauBetaY_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  tauBetaY_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  tauBetaY_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  tauBetaY_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  tauBetaY_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  u?: InputMaybe<Scalars['bal_BigDecimal']>;
  u_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  u_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  u_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  u_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  u_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  u_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  u_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  v?: InputMaybe<Scalars['bal_BigDecimal']>;
  v_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  v_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  v_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  v_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  v_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  v_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  v_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  w?: InputMaybe<Scalars['bal_BigDecimal']>;
  w_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  w_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  w_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  w_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  w_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  w_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  w_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  z?: InputMaybe<Scalars['bal_BigDecimal']>;
  z_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  z_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  z_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  z_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  z_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  z_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  z_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  dSq?: InputMaybe<Scalars['bal_BigDecimal']>;
  dSq_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  dSq_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  dSq_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  dSq_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  dSq_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  dSq_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  dSq_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  alpha?: InputMaybe<Scalars['bal_BigDecimal']>;
  alpha_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  alpha_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  alpha_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  alpha_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  alpha_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  alpha_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  alpha_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  beta?: InputMaybe<Scalars['bal_BigDecimal']>;
  beta_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  beta_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  beta_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  beta_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  beta_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  beta_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  beta_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  lambda?: InputMaybe<Scalars['bal_BigDecimal']>;
  lambda_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  lambda_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  lambda_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  lambda_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  lambda_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  lambda_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  lambda_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  delta?: InputMaybe<Scalars['bal_BigDecimal']>;
  delta_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  delta_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  delta_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  delta_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  delta_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  delta_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  delta_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  epsilon?: InputMaybe<Scalars['bal_BigDecimal']>;
  epsilon_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  epsilon_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  epsilon_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  epsilon_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  epsilon_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  epsilon_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  epsilon_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  isInRecoveryMode?: InputMaybe<Scalars['Boolean']>;
  isInRecoveryMode_not?: InputMaybe<Scalars['Boolean']>;
  isInRecoveryMode_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isInRecoveryMode_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  protocolSwapFeeCache?: InputMaybe<Scalars['bal_BigDecimal']>;
  protocolSwapFeeCache_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  protocolSwapFeeCache_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  protocolSwapFeeCache_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  protocolSwapFeeCache_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  protocolSwapFeeCache_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  protocolSwapFeeCache_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  protocolSwapFeeCache_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  protocolYieldFeeCache?: InputMaybe<Scalars['bal_BigDecimal']>;
  protocolYieldFeeCache_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  protocolYieldFeeCache_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  protocolYieldFeeCache_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  protocolYieldFeeCache_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  protocolYieldFeeCache_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  protocolYieldFeeCache_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  protocolYieldFeeCache_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  protocolAumFeeCache?: InputMaybe<Scalars['bal_BigDecimal']>;
  protocolAumFeeCache_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  protocolAumFeeCache_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  protocolAumFeeCache_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  protocolAumFeeCache_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  protocolAumFeeCache_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  protocolAumFeeCache_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  protocolAumFeeCache_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalProtocolFeePaidInBPT?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalProtocolFeePaidInBPT_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalProtocolFeePaidInBPT_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalProtocolFeePaidInBPT_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalProtocolFeePaidInBPT_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalProtocolFeePaidInBPT_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalProtocolFeePaidInBPT_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalProtocolFeePaidInBPT_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  lastJoinExitAmp?: InputMaybe<Scalars['BigInt']>;
  lastJoinExitAmp_not?: InputMaybe<Scalars['BigInt']>;
  lastJoinExitAmp_gt?: InputMaybe<Scalars['BigInt']>;
  lastJoinExitAmp_lt?: InputMaybe<Scalars['BigInt']>;
  lastJoinExitAmp_gte?: InputMaybe<Scalars['BigInt']>;
  lastJoinExitAmp_lte?: InputMaybe<Scalars['BigInt']>;
  lastJoinExitAmp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastJoinExitAmp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastPostJoinExitInvariant?: InputMaybe<Scalars['bal_BigDecimal']>;
  lastPostJoinExitInvariant_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  lastPostJoinExitInvariant_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  lastPostJoinExitInvariant_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  lastPostJoinExitInvariant_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  lastPostJoinExitInvariant_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  lastPostJoinExitInvariant_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  lastPostJoinExitInvariant_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  protocolId?: InputMaybe<Scalars['Int']>;
  protocolId_not?: InputMaybe<Scalars['Int']>;
  protocolId_gt?: InputMaybe<Scalars['Int']>;
  protocolId_lt?: InputMaybe<Scalars['Int']>;
  protocolId_gte?: InputMaybe<Scalars['Int']>;
  protocolId_lte?: InputMaybe<Scalars['Int']>;
  protocolId_in?: InputMaybe<Array<Scalars['Int']>>;
  protocolId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocolIdData?: InputMaybe<Scalars['String']>;
  protocolIdData_not?: InputMaybe<Scalars['String']>;
  protocolIdData_gt?: InputMaybe<Scalars['String']>;
  protocolIdData_lt?: InputMaybe<Scalars['String']>;
  protocolIdData_gte?: InputMaybe<Scalars['String']>;
  protocolIdData_lte?: InputMaybe<Scalars['String']>;
  protocolIdData_in?: InputMaybe<Array<Scalars['String']>>;
  protocolIdData_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocolIdData_contains?: InputMaybe<Scalars['String']>;
  protocolIdData_contains_nocase?: InputMaybe<Scalars['String']>;
  protocolIdData_not_contains?: InputMaybe<Scalars['String']>;
  protocolIdData_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocolIdData_starts_with?: InputMaybe<Scalars['String']>;
  protocolIdData_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocolIdData_not_starts_with?: InputMaybe<Scalars['String']>;
  protocolIdData_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocolIdData_ends_with?: InputMaybe<Scalars['String']>;
  protocolIdData_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocolIdData_not_ends_with?: InputMaybe<Scalars['String']>;
  protocolIdData_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocolIdData_?: InputMaybe<bal_ProtocolIdData_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_Pool_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_Pool_filter>>>;
};

export type bal_Pool_orderBy =
  | 'id'
  | 'address'
  | 'poolType'
  | 'poolTypeVersion'
  | 'factory'
  | 'strategyType'
  | 'oracleEnabled'
  | 'symbol'
  | 'name'
  | 'swapEnabled'
  | 'swapEnabledInternal'
  | 'swapEnabledCurationSignal'
  | 'swapFee'
  | 'owner'
  | 'isPaused'
  | 'totalWeight'
  | 'totalSwapVolume'
  | 'totalSwapFee'
  | 'totalLiquidity'
  | 'totalLiquiditySansBPT'
  | 'totalShares'
  | 'totalProtocolFee'
  | 'createTime'
  | 'swapsCount'
  | 'holdersCount'
  | 'vaultID'
  | 'vaultID__id'
  | 'vaultID__poolCount'
  | 'vaultID__totalLiquidity'
  | 'vaultID__totalSwapCount'
  | 'vaultID__totalSwapVolume'
  | 'vaultID__totalSwapFee'
  | 'vaultID__totalProtocolFee'
  | 'vaultID__protocolFeesCollector'
  | 'tx'
  | 'tokensList'
  | 'tokens'
  | 'joinsExits'
  | 'swaps'
  | 'shares'
  | 'snapshots'
  | 'historicalValues'
  | 'weightUpdates'
  | 'amp'
  | 'latestAmpUpdate'
  | 'latestAmpUpdate__id'
  | 'latestAmpUpdate__scheduledTimestamp'
  | 'latestAmpUpdate__startTimestamp'
  | 'latestAmpUpdate__endTimestamp'
  | 'latestAmpUpdate__startAmp'
  | 'latestAmpUpdate__endAmp'
  | 'ampUpdates'
  | 'priceRateProviders'
  | 'principalToken'
  | 'baseToken'
  | 'expiryTime'
  | 'unitSeconds'
  | 'managementFee'
  | 'joinExitEnabled'
  | 'mustAllowlistLPs'
  | 'managementAumFee'
  | 'totalAumFeeCollectedInBPT'
  | 'circuitBreakers'
  | 'mainIndex'
  | 'wrappedIndex'
  | 'lowerTarget'
  | 'upperTarget'
  | 'sqrtAlpha'
  | 'sqrtBeta'
  | 'root3Alpha'
  | 'c'
  | 's'
  | 'tauAlphaX'
  | 'tauAlphaY'
  | 'tauBetaX'
  | 'tauBetaY'
  | 'u'
  | 'v'
  | 'w'
  | 'z'
  | 'dSq'
  | 'alpha'
  | 'beta'
  | 'lambda'
  | 'delta'
  | 'epsilon'
  | 'isInRecoveryMode'
  | 'protocolSwapFeeCache'
  | 'protocolYieldFeeCache'
  | 'protocolAumFeeCache'
  | 'totalProtocolFeePaidInBPT'
  | 'lastJoinExitAmp'
  | 'lastPostJoinExitInvariant'
  | 'protocolId'
  | 'protocolIdData'
  | 'protocolIdData__id'
  | 'protocolIdData__name';

export type bal_PriceRateProvider = {
  id: Scalars['ID'];
  poolId: bal_Pool;
  token: bal_PoolToken;
  address: Scalars['bal_Bytes'];
  rate?: Maybe<Scalars['bal_BigDecimal']>;
  lastCached?: Maybe<Scalars['Int']>;
  cacheDuration?: Maybe<Scalars['Int']>;
  cacheExpiry?: Maybe<Scalars['Int']>;
};

export type bal_PriceRateProvider_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  poolId?: InputMaybe<Scalars['String']>;
  poolId_not?: InputMaybe<Scalars['String']>;
  poolId_gt?: InputMaybe<Scalars['String']>;
  poolId_lt?: InputMaybe<Scalars['String']>;
  poolId_gte?: InputMaybe<Scalars['String']>;
  poolId_lte?: InputMaybe<Scalars['String']>;
  poolId_in?: InputMaybe<Array<Scalars['String']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolId_contains?: InputMaybe<Scalars['String']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_contains?: InputMaybe<Scalars['String']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolId_starts_with?: InputMaybe<Scalars['String']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_ends_with?: InputMaybe<Scalars['String']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_?: InputMaybe<bal_Pool_filter>;
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
  token_?: InputMaybe<bal_PoolToken_filter>;
  address?: InputMaybe<Scalars['bal_Bytes']>;
  address_not?: InputMaybe<Scalars['bal_Bytes']>;
  address_gt?: InputMaybe<Scalars['bal_Bytes']>;
  address_lt?: InputMaybe<Scalars['bal_Bytes']>;
  address_gte?: InputMaybe<Scalars['bal_Bytes']>;
  address_lte?: InputMaybe<Scalars['bal_Bytes']>;
  address_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  address_contains?: InputMaybe<Scalars['bal_Bytes']>;
  address_not_contains?: InputMaybe<Scalars['bal_Bytes']>;
  rate?: InputMaybe<Scalars['bal_BigDecimal']>;
  rate_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  rate_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  rate_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  rate_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  rate_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  rate_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  rate_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  lastCached?: InputMaybe<Scalars['Int']>;
  lastCached_not?: InputMaybe<Scalars['Int']>;
  lastCached_gt?: InputMaybe<Scalars['Int']>;
  lastCached_lt?: InputMaybe<Scalars['Int']>;
  lastCached_gte?: InputMaybe<Scalars['Int']>;
  lastCached_lte?: InputMaybe<Scalars['Int']>;
  lastCached_in?: InputMaybe<Array<Scalars['Int']>>;
  lastCached_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cacheDuration?: InputMaybe<Scalars['Int']>;
  cacheDuration_not?: InputMaybe<Scalars['Int']>;
  cacheDuration_gt?: InputMaybe<Scalars['Int']>;
  cacheDuration_lt?: InputMaybe<Scalars['Int']>;
  cacheDuration_gte?: InputMaybe<Scalars['Int']>;
  cacheDuration_lte?: InputMaybe<Scalars['Int']>;
  cacheDuration_in?: InputMaybe<Array<Scalars['Int']>>;
  cacheDuration_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cacheExpiry?: InputMaybe<Scalars['Int']>;
  cacheExpiry_not?: InputMaybe<Scalars['Int']>;
  cacheExpiry_gt?: InputMaybe<Scalars['Int']>;
  cacheExpiry_lt?: InputMaybe<Scalars['Int']>;
  cacheExpiry_gte?: InputMaybe<Scalars['Int']>;
  cacheExpiry_lte?: InputMaybe<Scalars['Int']>;
  cacheExpiry_in?: InputMaybe<Array<Scalars['Int']>>;
  cacheExpiry_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_PriceRateProvider_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_PriceRateProvider_filter>>>;
};

export type bal_PriceRateProvider_orderBy =
  | 'id'
  | 'poolId'
  | 'poolId__id'
  | 'poolId__address'
  | 'poolId__poolType'
  | 'poolId__poolTypeVersion'
  | 'poolId__factory'
  | 'poolId__strategyType'
  | 'poolId__oracleEnabled'
  | 'poolId__symbol'
  | 'poolId__name'
  | 'poolId__swapEnabled'
  | 'poolId__swapEnabledInternal'
  | 'poolId__swapEnabledCurationSignal'
  | 'poolId__swapFee'
  | 'poolId__owner'
  | 'poolId__isPaused'
  | 'poolId__totalWeight'
  | 'poolId__totalSwapVolume'
  | 'poolId__totalSwapFee'
  | 'poolId__totalLiquidity'
  | 'poolId__totalLiquiditySansBPT'
  | 'poolId__totalShares'
  | 'poolId__totalProtocolFee'
  | 'poolId__createTime'
  | 'poolId__swapsCount'
  | 'poolId__holdersCount'
  | 'poolId__tx'
  | 'poolId__amp'
  | 'poolId__principalToken'
  | 'poolId__baseToken'
  | 'poolId__expiryTime'
  | 'poolId__unitSeconds'
  | 'poolId__managementFee'
  | 'poolId__joinExitEnabled'
  | 'poolId__mustAllowlistLPs'
  | 'poolId__managementAumFee'
  | 'poolId__totalAumFeeCollectedInBPT'
  | 'poolId__mainIndex'
  | 'poolId__wrappedIndex'
  | 'poolId__lowerTarget'
  | 'poolId__upperTarget'
  | 'poolId__sqrtAlpha'
  | 'poolId__sqrtBeta'
  | 'poolId__root3Alpha'
  | 'poolId__c'
  | 'poolId__s'
  | 'poolId__tauAlphaX'
  | 'poolId__tauAlphaY'
  | 'poolId__tauBetaX'
  | 'poolId__tauBetaY'
  | 'poolId__u'
  | 'poolId__v'
  | 'poolId__w'
  | 'poolId__z'
  | 'poolId__dSq'
  | 'poolId__alpha'
  | 'poolId__beta'
  | 'poolId__lambda'
  | 'poolId__delta'
  | 'poolId__epsilon'
  | 'poolId__isInRecoveryMode'
  | 'poolId__protocolSwapFeeCache'
  | 'poolId__protocolYieldFeeCache'
  | 'poolId__protocolAumFeeCache'
  | 'poolId__totalProtocolFeePaidInBPT'
  | 'poolId__lastJoinExitAmp'
  | 'poolId__lastPostJoinExitInvariant'
  | 'poolId__protocolId'
  | 'token'
  | 'token__id'
  | 'token__assetManager'
  | 'token__symbol'
  | 'token__name'
  | 'token__decimals'
  | 'token__index'
  | 'token__address'
  | 'token__oldPriceRate'
  | 'token__priceRate'
  | 'token__balance'
  | 'token__paidProtocolFees'
  | 'token__cashBalance'
  | 'token__managedBalance'
  | 'token__weight'
  | 'token__isExemptFromYieldProtocolFee'
  | 'address'
  | 'rate'
  | 'lastCached'
  | 'cacheDuration'
  | 'cacheExpiry';

export type bal_ProtocolIdData = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type bal_ProtocolIdData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_ProtocolIdData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_ProtocolIdData_filter>>>;
};

export type bal_ProtocolIdData_orderBy =
  | 'id'
  | 'name';

export type Query = {
  bal_balancer?: Maybe<bal_Balancer>;
  bal_balancers: Array<bal_Balancer>;
  bal_pool?: Maybe<bal_Pool>;
  bal_pools: Array<bal_Pool>;
  bal_poolContract?: Maybe<bal_PoolContract>;
  bal_poolContracts: Array<bal_PoolContract>;
  bal_poolToken?: Maybe<bal_PoolToken>;
  bal_poolTokens: Array<bal_PoolToken>;
  bal_priceRateProvider?: Maybe<bal_PriceRateProvider>;
  bal_priceRateProviders: Array<bal_PriceRateProvider>;
  bal_circuitBreaker?: Maybe<bal_CircuitBreaker>;
  bal_circuitBreakers: Array<bal_CircuitBreaker>;
  bal_poolShare?: Maybe<bal_PoolShare>;
  bal_poolShares: Array<bal_PoolShare>;
  bal_user?: Maybe<bal_User>;
  bal_users: Array<bal_User>;
  bal_userInternalBalance?: Maybe<bal_UserInternalBalance>;
  bal_userInternalBalances: Array<bal_UserInternalBalance>;
  bal_gradualWeightUpdate?: Maybe<bal_GradualWeightUpdate>;
  bal_gradualWeightUpdates: Array<bal_GradualWeightUpdate>;
  bal_ampUpdate?: Maybe<bal_AmpUpdate>;
  bal_ampUpdates: Array<bal_AmpUpdate>;
  bal_swapFeeUpdate?: Maybe<bal_SwapFeeUpdate>;
  bal_swapFeeUpdates: Array<bal_SwapFeeUpdate>;
  bal_swap?: Maybe<bal_Swap>;
  bal_swaps: Array<bal_Swap>;
  bal_joinExit?: Maybe<bal_JoinExit>;
  bal_joinExits: Array<bal_JoinExit>;
  bal_latestPrice?: Maybe<bal_LatestPrice>;
  bal_latestPrices: Array<bal_LatestPrice>;
  bal_poolHistoricalLiquidity?: Maybe<bal_PoolHistoricalLiquidity>;
  bal_poolHistoricalLiquidities: Array<bal_PoolHistoricalLiquidity>;
  bal_tokenPrice?: Maybe<bal_TokenPrice>;
  bal_tokenPrices: Array<bal_TokenPrice>;
  bal_managementOperation?: Maybe<bal_ManagementOperation>;
  bal_managementOperations: Array<bal_ManagementOperation>;
  bal_poolSnapshot?: Maybe<bal_PoolSnapshot>;
  bal_poolSnapshots: Array<bal_PoolSnapshot>;
  bal_token?: Maybe<bal_Token>;
  bal_tokens: Array<bal_Token>;
  bal_tokenSnapshot?: Maybe<bal_TokenSnapshot>;
  bal_tokenSnapshots: Array<bal_TokenSnapshot>;
  bal_tradePair?: Maybe<bal_TradePair>;
  bal_tradePairs: Array<bal_TradePair>;
  bal_tradePairSnapshot?: Maybe<bal_TradePairSnapshot>;
  bal_tradePairSnapshots: Array<bal_TradePairSnapshot>;
  bal_balancerSnapshot?: Maybe<bal_BalancerSnapshot>;
  bal_balancerSnapshots: Array<bal_BalancerSnapshot>;
  bal_protocolIdData?: Maybe<bal_ProtocolIdData>;
  bal_protocolIdDatas: Array<bal_ProtocolIdData>;
  bal_fxoracle?: Maybe<bal_FXOracle>;
  bal_fxoracles: Array<bal_FXOracle>;
  /** Access to subgraph metadata */
  bal__meta?: Maybe<bal__Meta_>;
};


export type Querybal_balancerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_balancersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_Balancer_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_Balancer_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_poolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_poolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_Pool_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_Pool_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_poolContractArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_poolContractsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_PoolContract_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_PoolContract_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_poolTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_poolTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_PoolToken_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_PoolToken_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_priceRateProviderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_priceRateProvidersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_PriceRateProvider_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_PriceRateProvider_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_circuitBreakerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_circuitBreakersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_CircuitBreaker_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_CircuitBreaker_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_poolShareArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_poolSharesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_PoolShare_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_PoolShare_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_userArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_usersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_User_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_User_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_userInternalBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_userInternalBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_UserInternalBalance_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_UserInternalBalance_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_gradualWeightUpdateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_gradualWeightUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_GradualWeightUpdate_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_GradualWeightUpdate_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_ampUpdateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_ampUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_AmpUpdate_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_AmpUpdate_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_swapFeeUpdateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_swapFeeUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_SwapFeeUpdate_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_SwapFeeUpdate_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_swapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_swapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_Swap_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_Swap_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_joinExitArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_joinExitsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_JoinExit_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_JoinExit_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_latestPriceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_latestPricesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_LatestPrice_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_LatestPrice_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_poolHistoricalLiquidityArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_poolHistoricalLiquiditiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_PoolHistoricalLiquidity_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_PoolHistoricalLiquidity_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_tokenPriceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_tokenPricesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_TokenPrice_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_TokenPrice_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_managementOperationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_managementOperationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_ManagementOperation_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_ManagementOperation_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_poolSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_poolSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_PoolSnapshot_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_PoolSnapshot_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_tokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_Token_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_Token_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_tokenSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_tokenSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_TokenSnapshot_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_TokenSnapshot_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_tradePairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_tradePairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_TradePair_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_TradePair_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_tradePairSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_tradePairSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_TradePairSnapshot_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_TradePairSnapshot_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_balancerSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_balancerSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_BalancerSnapshot_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_BalancerSnapshot_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_protocolIdDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_protocolIdDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_ProtocolIdData_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_ProtocolIdData_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_fxoracleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal_fxoraclesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_FXOracle_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_FXOracle_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Querybal__metaArgs = {
  block?: InputMaybe<bal_Block_height>;
};

export type Subscription = {
  bal_balancer?: Maybe<bal_Balancer>;
  bal_balancers: Array<bal_Balancer>;
  bal_pool?: Maybe<bal_Pool>;
  bal_pools: Array<bal_Pool>;
  bal_poolContract?: Maybe<bal_PoolContract>;
  bal_poolContracts: Array<bal_PoolContract>;
  bal_poolToken?: Maybe<bal_PoolToken>;
  bal_poolTokens: Array<bal_PoolToken>;
  bal_priceRateProvider?: Maybe<bal_PriceRateProvider>;
  bal_priceRateProviders: Array<bal_PriceRateProvider>;
  bal_circuitBreaker?: Maybe<bal_CircuitBreaker>;
  bal_circuitBreakers: Array<bal_CircuitBreaker>;
  bal_poolShare?: Maybe<bal_PoolShare>;
  bal_poolShares: Array<bal_PoolShare>;
  bal_user?: Maybe<bal_User>;
  bal_users: Array<bal_User>;
  bal_userInternalBalance?: Maybe<bal_UserInternalBalance>;
  bal_userInternalBalances: Array<bal_UserInternalBalance>;
  bal_gradualWeightUpdate?: Maybe<bal_GradualWeightUpdate>;
  bal_gradualWeightUpdates: Array<bal_GradualWeightUpdate>;
  bal_ampUpdate?: Maybe<bal_AmpUpdate>;
  bal_ampUpdates: Array<bal_AmpUpdate>;
  bal_swapFeeUpdate?: Maybe<bal_SwapFeeUpdate>;
  bal_swapFeeUpdates: Array<bal_SwapFeeUpdate>;
  bal_swap?: Maybe<bal_Swap>;
  bal_swaps: Array<bal_Swap>;
  bal_joinExit?: Maybe<bal_JoinExit>;
  bal_joinExits: Array<bal_JoinExit>;
  bal_latestPrice?: Maybe<bal_LatestPrice>;
  bal_latestPrices: Array<bal_LatestPrice>;
  bal_poolHistoricalLiquidity?: Maybe<bal_PoolHistoricalLiquidity>;
  bal_poolHistoricalLiquidities: Array<bal_PoolHistoricalLiquidity>;
  bal_tokenPrice?: Maybe<bal_TokenPrice>;
  bal_tokenPrices: Array<bal_TokenPrice>;
  bal_managementOperation?: Maybe<bal_ManagementOperation>;
  bal_managementOperations: Array<bal_ManagementOperation>;
  bal_poolSnapshot?: Maybe<bal_PoolSnapshot>;
  bal_poolSnapshots: Array<bal_PoolSnapshot>;
  bal_token?: Maybe<bal_Token>;
  bal_tokens: Array<bal_Token>;
  bal_tokenSnapshot?: Maybe<bal_TokenSnapshot>;
  bal_tokenSnapshots: Array<bal_TokenSnapshot>;
  bal_tradePair?: Maybe<bal_TradePair>;
  bal_tradePairs: Array<bal_TradePair>;
  bal_tradePairSnapshot?: Maybe<bal_TradePairSnapshot>;
  bal_tradePairSnapshots: Array<bal_TradePairSnapshot>;
  bal_balancerSnapshot?: Maybe<bal_BalancerSnapshot>;
  bal_balancerSnapshots: Array<bal_BalancerSnapshot>;
  bal_protocolIdData?: Maybe<bal_ProtocolIdData>;
  bal_protocolIdDatas: Array<bal_ProtocolIdData>;
  bal_fxoracle?: Maybe<bal_FXOracle>;
  bal_fxoracles: Array<bal_FXOracle>;
  /** Access to subgraph metadata */
  bal__meta?: Maybe<bal__Meta_>;
};


export type Subscriptionbal_balancerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_balancersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_Balancer_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_Balancer_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_poolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_poolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_Pool_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_Pool_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_poolContractArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_poolContractsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_PoolContract_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_PoolContract_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_poolTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_poolTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_PoolToken_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_PoolToken_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_priceRateProviderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_priceRateProvidersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_PriceRateProvider_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_PriceRateProvider_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_circuitBreakerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_circuitBreakersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_CircuitBreaker_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_CircuitBreaker_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_poolShareArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_poolSharesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_PoolShare_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_PoolShare_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_userArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_usersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_User_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_User_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_userInternalBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_userInternalBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_UserInternalBalance_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_UserInternalBalance_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_gradualWeightUpdateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_gradualWeightUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_GradualWeightUpdate_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_GradualWeightUpdate_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_ampUpdateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_ampUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_AmpUpdate_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_AmpUpdate_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_swapFeeUpdateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_swapFeeUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_SwapFeeUpdate_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_SwapFeeUpdate_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_swapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_swapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_Swap_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_Swap_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_joinExitArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_joinExitsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_JoinExit_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_JoinExit_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_latestPriceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_latestPricesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_LatestPrice_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_LatestPrice_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_poolHistoricalLiquidityArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_poolHistoricalLiquiditiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_PoolHistoricalLiquidity_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_PoolHistoricalLiquidity_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_tokenPriceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_tokenPricesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_TokenPrice_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_TokenPrice_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_managementOperationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_managementOperationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_ManagementOperation_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_ManagementOperation_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_poolSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_poolSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_PoolSnapshot_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_PoolSnapshot_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_tokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_Token_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_Token_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_tokenSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_tokenSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_TokenSnapshot_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_TokenSnapshot_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_tradePairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_tradePairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_TradePair_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_TradePair_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_tradePairSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_tradePairSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_TradePairSnapshot_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_TradePairSnapshot_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_balancerSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_balancerSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_BalancerSnapshot_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_BalancerSnapshot_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_protocolIdDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_protocolIdDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_ProtocolIdData_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_ProtocolIdData_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_fxoracleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal_fxoraclesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_FXOracle_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_FXOracle_filter>;
  block?: InputMaybe<bal_Block_height>;
  subgraphError?: bal__SubgraphErrorPolicy_;
};


export type Subscriptionbal__metaArgs = {
  block?: InputMaybe<bal_Block_height>;
};

export type bal_Swap = {
  id: Scalars['ID'];
  caller: Scalars['bal_Bytes'];
  tokenIn: Scalars['bal_Bytes'];
  tokenInSym: Scalars['String'];
  tokenOut: Scalars['bal_Bytes'];
  tokenOutSym: Scalars['String'];
  tokenAmountIn: Scalars['bal_BigDecimal'];
  tokenAmountOut: Scalars['bal_BigDecimal'];
  valueUSD: Scalars['bal_BigDecimal'];
  poolId: bal_Pool;
  userAddress: bal_User;
  timestamp: Scalars['Int'];
  block?: Maybe<Scalars['BigInt']>;
  tx: Scalars['bal_Bytes'];
};

export type bal_SwapFeeUpdate = {
  id: Scalars['ID'];
  pool: bal_Pool;
  scheduledTimestamp: Scalars['Int'];
  startTimestamp: Scalars['BigInt'];
  endTimestamp: Scalars['BigInt'];
  startSwapFeePercentage: Scalars['bal_BigDecimal'];
  endSwapFeePercentage: Scalars['bal_BigDecimal'];
};

export type bal_SwapFeeUpdate_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  pool_?: InputMaybe<bal_Pool_filter>;
  scheduledTimestamp?: InputMaybe<Scalars['Int']>;
  scheduledTimestamp_not?: InputMaybe<Scalars['Int']>;
  scheduledTimestamp_gt?: InputMaybe<Scalars['Int']>;
  scheduledTimestamp_lt?: InputMaybe<Scalars['Int']>;
  scheduledTimestamp_gte?: InputMaybe<Scalars['Int']>;
  scheduledTimestamp_lte?: InputMaybe<Scalars['Int']>;
  scheduledTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  scheduledTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  startTimestamp?: InputMaybe<Scalars['BigInt']>;
  startTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  startTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  startTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  startTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  startTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  startTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTimestamp?: InputMaybe<Scalars['BigInt']>;
  endTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  endTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  endTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  endTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  endTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  endTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startSwapFeePercentage?: InputMaybe<Scalars['bal_BigDecimal']>;
  startSwapFeePercentage_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  startSwapFeePercentage_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  startSwapFeePercentage_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  startSwapFeePercentage_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  startSwapFeePercentage_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  startSwapFeePercentage_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  startSwapFeePercentage_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  endSwapFeePercentage?: InputMaybe<Scalars['bal_BigDecimal']>;
  endSwapFeePercentage_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  endSwapFeePercentage_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  endSwapFeePercentage_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  endSwapFeePercentage_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  endSwapFeePercentage_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  endSwapFeePercentage_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  endSwapFeePercentage_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_SwapFeeUpdate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_SwapFeeUpdate_filter>>>;
};

export type bal_SwapFeeUpdate_orderBy =
  | 'id'
  | 'pool'
  | 'pool__id'
  | 'pool__address'
  | 'pool__poolType'
  | 'pool__poolTypeVersion'
  | 'pool__factory'
  | 'pool__strategyType'
  | 'pool__oracleEnabled'
  | 'pool__symbol'
  | 'pool__name'
  | 'pool__swapEnabled'
  | 'pool__swapEnabledInternal'
  | 'pool__swapEnabledCurationSignal'
  | 'pool__swapFee'
  | 'pool__owner'
  | 'pool__isPaused'
  | 'pool__totalWeight'
  | 'pool__totalSwapVolume'
  | 'pool__totalSwapFee'
  | 'pool__totalLiquidity'
  | 'pool__totalLiquiditySansBPT'
  | 'pool__totalShares'
  | 'pool__totalProtocolFee'
  | 'pool__createTime'
  | 'pool__swapsCount'
  | 'pool__holdersCount'
  | 'pool__tx'
  | 'pool__amp'
  | 'pool__principalToken'
  | 'pool__baseToken'
  | 'pool__expiryTime'
  | 'pool__unitSeconds'
  | 'pool__managementFee'
  | 'pool__joinExitEnabled'
  | 'pool__mustAllowlistLPs'
  | 'pool__managementAumFee'
  | 'pool__totalAumFeeCollectedInBPT'
  | 'pool__mainIndex'
  | 'pool__wrappedIndex'
  | 'pool__lowerTarget'
  | 'pool__upperTarget'
  | 'pool__sqrtAlpha'
  | 'pool__sqrtBeta'
  | 'pool__root3Alpha'
  | 'pool__c'
  | 'pool__s'
  | 'pool__tauAlphaX'
  | 'pool__tauAlphaY'
  | 'pool__tauBetaX'
  | 'pool__tauBetaY'
  | 'pool__u'
  | 'pool__v'
  | 'pool__w'
  | 'pool__z'
  | 'pool__dSq'
  | 'pool__alpha'
  | 'pool__beta'
  | 'pool__lambda'
  | 'pool__delta'
  | 'pool__epsilon'
  | 'pool__isInRecoveryMode'
  | 'pool__protocolSwapFeeCache'
  | 'pool__protocolYieldFeeCache'
  | 'pool__protocolAumFeeCache'
  | 'pool__totalProtocolFeePaidInBPT'
  | 'pool__lastJoinExitAmp'
  | 'pool__lastPostJoinExitInvariant'
  | 'pool__protocolId'
  | 'scheduledTimestamp'
  | 'startTimestamp'
  | 'endTimestamp'
  | 'startSwapFeePercentage'
  | 'endSwapFeePercentage';

export type bal_Swap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  caller?: InputMaybe<Scalars['bal_Bytes']>;
  caller_not?: InputMaybe<Scalars['bal_Bytes']>;
  caller_gt?: InputMaybe<Scalars['bal_Bytes']>;
  caller_lt?: InputMaybe<Scalars['bal_Bytes']>;
  caller_gte?: InputMaybe<Scalars['bal_Bytes']>;
  caller_lte?: InputMaybe<Scalars['bal_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['bal_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['bal_Bytes']>;
  tokenIn?: InputMaybe<Scalars['bal_Bytes']>;
  tokenIn_not?: InputMaybe<Scalars['bal_Bytes']>;
  tokenIn_gt?: InputMaybe<Scalars['bal_Bytes']>;
  tokenIn_lt?: InputMaybe<Scalars['bal_Bytes']>;
  tokenIn_gte?: InputMaybe<Scalars['bal_Bytes']>;
  tokenIn_lte?: InputMaybe<Scalars['bal_Bytes']>;
  tokenIn_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  tokenIn_not_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  tokenIn_contains?: InputMaybe<Scalars['bal_Bytes']>;
  tokenIn_not_contains?: InputMaybe<Scalars['bal_Bytes']>;
  tokenInSym?: InputMaybe<Scalars['String']>;
  tokenInSym_not?: InputMaybe<Scalars['String']>;
  tokenInSym_gt?: InputMaybe<Scalars['String']>;
  tokenInSym_lt?: InputMaybe<Scalars['String']>;
  tokenInSym_gte?: InputMaybe<Scalars['String']>;
  tokenInSym_lte?: InputMaybe<Scalars['String']>;
  tokenInSym_in?: InputMaybe<Array<Scalars['String']>>;
  tokenInSym_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenInSym_contains?: InputMaybe<Scalars['String']>;
  tokenInSym_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenInSym_not_contains?: InputMaybe<Scalars['String']>;
  tokenInSym_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenInSym_starts_with?: InputMaybe<Scalars['String']>;
  tokenInSym_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenInSym_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenInSym_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenInSym_ends_with?: InputMaybe<Scalars['String']>;
  tokenInSym_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenInSym_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenInSym_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOut?: InputMaybe<Scalars['bal_Bytes']>;
  tokenOut_not?: InputMaybe<Scalars['bal_Bytes']>;
  tokenOut_gt?: InputMaybe<Scalars['bal_Bytes']>;
  tokenOut_lt?: InputMaybe<Scalars['bal_Bytes']>;
  tokenOut_gte?: InputMaybe<Scalars['bal_Bytes']>;
  tokenOut_lte?: InputMaybe<Scalars['bal_Bytes']>;
  tokenOut_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  tokenOut_not_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  tokenOut_contains?: InputMaybe<Scalars['bal_Bytes']>;
  tokenOut_not_contains?: InputMaybe<Scalars['bal_Bytes']>;
  tokenOutSym?: InputMaybe<Scalars['String']>;
  tokenOutSym_not?: InputMaybe<Scalars['String']>;
  tokenOutSym_gt?: InputMaybe<Scalars['String']>;
  tokenOutSym_lt?: InputMaybe<Scalars['String']>;
  tokenOutSym_gte?: InputMaybe<Scalars['String']>;
  tokenOutSym_lte?: InputMaybe<Scalars['String']>;
  tokenOutSym_in?: InputMaybe<Array<Scalars['String']>>;
  tokenOutSym_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenOutSym_contains?: InputMaybe<Scalars['String']>;
  tokenOutSym_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenOutSym_not_contains?: InputMaybe<Scalars['String']>;
  tokenOutSym_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenOutSym_starts_with?: InputMaybe<Scalars['String']>;
  tokenOutSym_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOutSym_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenOutSym_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOutSym_ends_with?: InputMaybe<Scalars['String']>;
  tokenOutSym_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOutSym_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenOutSym_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAmountIn?: InputMaybe<Scalars['bal_BigDecimal']>;
  tokenAmountIn_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  tokenAmountIn_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  tokenAmountIn_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  tokenAmountIn_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  tokenAmountIn_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  tokenAmountIn_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  tokenAmountIn_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  tokenAmountOut?: InputMaybe<Scalars['bal_BigDecimal']>;
  tokenAmountOut_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  tokenAmountOut_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  tokenAmountOut_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  tokenAmountOut_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  tokenAmountOut_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  tokenAmountOut_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  tokenAmountOut_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  valueUSD?: InputMaybe<Scalars['bal_BigDecimal']>;
  valueUSD_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  valueUSD_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  valueUSD_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  valueUSD_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  valueUSD_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  valueUSD_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  valueUSD_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  poolId?: InputMaybe<Scalars['String']>;
  poolId_not?: InputMaybe<Scalars['String']>;
  poolId_gt?: InputMaybe<Scalars['String']>;
  poolId_lt?: InputMaybe<Scalars['String']>;
  poolId_gte?: InputMaybe<Scalars['String']>;
  poolId_lte?: InputMaybe<Scalars['String']>;
  poolId_in?: InputMaybe<Array<Scalars['String']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolId_contains?: InputMaybe<Scalars['String']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_contains?: InputMaybe<Scalars['String']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolId_starts_with?: InputMaybe<Scalars['String']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_ends_with?: InputMaybe<Scalars['String']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_?: InputMaybe<bal_Pool_filter>;
  userAddress?: InputMaybe<Scalars['String']>;
  userAddress_not?: InputMaybe<Scalars['String']>;
  userAddress_gt?: InputMaybe<Scalars['String']>;
  userAddress_lt?: InputMaybe<Scalars['String']>;
  userAddress_gte?: InputMaybe<Scalars['String']>;
  userAddress_lte?: InputMaybe<Scalars['String']>;
  userAddress_in?: InputMaybe<Array<Scalars['String']>>;
  userAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  userAddress_contains?: InputMaybe<Scalars['String']>;
  userAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  userAddress_not_contains?: InputMaybe<Scalars['String']>;
  userAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userAddress_starts_with?: InputMaybe<Scalars['String']>;
  userAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  userAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userAddress_ends_with?: InputMaybe<Scalars['String']>;
  userAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  userAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userAddress_?: InputMaybe<bal_User_filter>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tx?: InputMaybe<Scalars['bal_Bytes']>;
  tx_not?: InputMaybe<Scalars['bal_Bytes']>;
  tx_gt?: InputMaybe<Scalars['bal_Bytes']>;
  tx_lt?: InputMaybe<Scalars['bal_Bytes']>;
  tx_gte?: InputMaybe<Scalars['bal_Bytes']>;
  tx_lte?: InputMaybe<Scalars['bal_Bytes']>;
  tx_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  tx_not_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  tx_contains?: InputMaybe<Scalars['bal_Bytes']>;
  tx_not_contains?: InputMaybe<Scalars['bal_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_Swap_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_Swap_filter>>>;
};

export type bal_Swap_orderBy =
  | 'id'
  | 'caller'
  | 'tokenIn'
  | 'tokenInSym'
  | 'tokenOut'
  | 'tokenOutSym'
  | 'tokenAmountIn'
  | 'tokenAmountOut'
  | 'valueUSD'
  | 'poolId'
  | 'poolId__id'
  | 'poolId__address'
  | 'poolId__poolType'
  | 'poolId__poolTypeVersion'
  | 'poolId__factory'
  | 'poolId__strategyType'
  | 'poolId__oracleEnabled'
  | 'poolId__symbol'
  | 'poolId__name'
  | 'poolId__swapEnabled'
  | 'poolId__swapEnabledInternal'
  | 'poolId__swapEnabledCurationSignal'
  | 'poolId__swapFee'
  | 'poolId__owner'
  | 'poolId__isPaused'
  | 'poolId__totalWeight'
  | 'poolId__totalSwapVolume'
  | 'poolId__totalSwapFee'
  | 'poolId__totalLiquidity'
  | 'poolId__totalLiquiditySansBPT'
  | 'poolId__totalShares'
  | 'poolId__totalProtocolFee'
  | 'poolId__createTime'
  | 'poolId__swapsCount'
  | 'poolId__holdersCount'
  | 'poolId__tx'
  | 'poolId__amp'
  | 'poolId__principalToken'
  | 'poolId__baseToken'
  | 'poolId__expiryTime'
  | 'poolId__unitSeconds'
  | 'poolId__managementFee'
  | 'poolId__joinExitEnabled'
  | 'poolId__mustAllowlistLPs'
  | 'poolId__managementAumFee'
  | 'poolId__totalAumFeeCollectedInBPT'
  | 'poolId__mainIndex'
  | 'poolId__wrappedIndex'
  | 'poolId__lowerTarget'
  | 'poolId__upperTarget'
  | 'poolId__sqrtAlpha'
  | 'poolId__sqrtBeta'
  | 'poolId__root3Alpha'
  | 'poolId__c'
  | 'poolId__s'
  | 'poolId__tauAlphaX'
  | 'poolId__tauAlphaY'
  | 'poolId__tauBetaX'
  | 'poolId__tauBetaY'
  | 'poolId__u'
  | 'poolId__v'
  | 'poolId__w'
  | 'poolId__z'
  | 'poolId__dSq'
  | 'poolId__alpha'
  | 'poolId__beta'
  | 'poolId__lambda'
  | 'poolId__delta'
  | 'poolId__epsilon'
  | 'poolId__isInRecoveryMode'
  | 'poolId__protocolSwapFeeCache'
  | 'poolId__protocolYieldFeeCache'
  | 'poolId__protocolAumFeeCache'
  | 'poolId__totalProtocolFeePaidInBPT'
  | 'poolId__lastJoinExitAmp'
  | 'poolId__lastPostJoinExitInvariant'
  | 'poolId__protocolId'
  | 'userAddress'
  | 'userAddress__id'
  | 'timestamp'
  | 'block'
  | 'tx';

export type bal_Token = {
  id: Scalars['ID'];
  symbol?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  decimals: Scalars['Int'];
  address: Scalars['String'];
  totalBalanceUSD: Scalars['bal_BigDecimal'];
  totalBalanceNotional: Scalars['bal_BigDecimal'];
  totalVolumeUSD: Scalars['bal_BigDecimal'];
  totalVolumeNotional: Scalars['bal_BigDecimal'];
  totalSwapCount: Scalars['BigInt'];
  latestPrice?: Maybe<bal_LatestPrice>;
  latestUSDPrice?: Maybe<Scalars['bal_BigDecimal']>;
  latestUSDPriceTimestamp?: Maybe<Scalars['BigInt']>;
  latestFXPrice?: Maybe<Scalars['bal_BigDecimal']>;
  pool?: Maybe<bal_Pool>;
  fxOracleDecimals?: Maybe<Scalars['Int']>;
};

export type bal_TokenPrice = {
  id: Scalars['ID'];
  poolId: bal_Pool;
  asset: Scalars['bal_Bytes'];
  amount: Scalars['bal_BigDecimal'];
  pricingAsset: Scalars['bal_Bytes'];
  price: Scalars['bal_BigDecimal'];
  block: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type bal_TokenPrice_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  poolId?: InputMaybe<Scalars['String']>;
  poolId_not?: InputMaybe<Scalars['String']>;
  poolId_gt?: InputMaybe<Scalars['String']>;
  poolId_lt?: InputMaybe<Scalars['String']>;
  poolId_gte?: InputMaybe<Scalars['String']>;
  poolId_lte?: InputMaybe<Scalars['String']>;
  poolId_in?: InputMaybe<Array<Scalars['String']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolId_contains?: InputMaybe<Scalars['String']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_contains?: InputMaybe<Scalars['String']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolId_starts_with?: InputMaybe<Scalars['String']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_ends_with?: InputMaybe<Scalars['String']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolId_?: InputMaybe<bal_Pool_filter>;
  asset?: InputMaybe<Scalars['bal_Bytes']>;
  asset_not?: InputMaybe<Scalars['bal_Bytes']>;
  asset_gt?: InputMaybe<Scalars['bal_Bytes']>;
  asset_lt?: InputMaybe<Scalars['bal_Bytes']>;
  asset_gte?: InputMaybe<Scalars['bal_Bytes']>;
  asset_lte?: InputMaybe<Scalars['bal_Bytes']>;
  asset_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  asset_not_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  asset_contains?: InputMaybe<Scalars['bal_Bytes']>;
  asset_not_contains?: InputMaybe<Scalars['bal_Bytes']>;
  amount?: InputMaybe<Scalars['bal_BigDecimal']>;
  amount_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  amount_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  amount_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  amount_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  amount_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  amount_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  amount_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  pricingAsset?: InputMaybe<Scalars['bal_Bytes']>;
  pricingAsset_not?: InputMaybe<Scalars['bal_Bytes']>;
  pricingAsset_gt?: InputMaybe<Scalars['bal_Bytes']>;
  pricingAsset_lt?: InputMaybe<Scalars['bal_Bytes']>;
  pricingAsset_gte?: InputMaybe<Scalars['bal_Bytes']>;
  pricingAsset_lte?: InputMaybe<Scalars['bal_Bytes']>;
  pricingAsset_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  pricingAsset_not_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  pricingAsset_contains?: InputMaybe<Scalars['bal_Bytes']>;
  pricingAsset_not_contains?: InputMaybe<Scalars['bal_Bytes']>;
  price?: InputMaybe<Scalars['bal_BigDecimal']>;
  price_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  price_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  price_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  price_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  price_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  price_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  price_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_TokenPrice_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_TokenPrice_filter>>>;
};

export type bal_TokenPrice_orderBy =
  | 'id'
  | 'poolId'
  | 'poolId__id'
  | 'poolId__address'
  | 'poolId__poolType'
  | 'poolId__poolTypeVersion'
  | 'poolId__factory'
  | 'poolId__strategyType'
  | 'poolId__oracleEnabled'
  | 'poolId__symbol'
  | 'poolId__name'
  | 'poolId__swapEnabled'
  | 'poolId__swapEnabledInternal'
  | 'poolId__swapEnabledCurationSignal'
  | 'poolId__swapFee'
  | 'poolId__owner'
  | 'poolId__isPaused'
  | 'poolId__totalWeight'
  | 'poolId__totalSwapVolume'
  | 'poolId__totalSwapFee'
  | 'poolId__totalLiquidity'
  | 'poolId__totalLiquiditySansBPT'
  | 'poolId__totalShares'
  | 'poolId__totalProtocolFee'
  | 'poolId__createTime'
  | 'poolId__swapsCount'
  | 'poolId__holdersCount'
  | 'poolId__tx'
  | 'poolId__amp'
  | 'poolId__principalToken'
  | 'poolId__baseToken'
  | 'poolId__expiryTime'
  | 'poolId__unitSeconds'
  | 'poolId__managementFee'
  | 'poolId__joinExitEnabled'
  | 'poolId__mustAllowlistLPs'
  | 'poolId__managementAumFee'
  | 'poolId__totalAumFeeCollectedInBPT'
  | 'poolId__mainIndex'
  | 'poolId__wrappedIndex'
  | 'poolId__lowerTarget'
  | 'poolId__upperTarget'
  | 'poolId__sqrtAlpha'
  | 'poolId__sqrtBeta'
  | 'poolId__root3Alpha'
  | 'poolId__c'
  | 'poolId__s'
  | 'poolId__tauAlphaX'
  | 'poolId__tauAlphaY'
  | 'poolId__tauBetaX'
  | 'poolId__tauBetaY'
  | 'poolId__u'
  | 'poolId__v'
  | 'poolId__w'
  | 'poolId__z'
  | 'poolId__dSq'
  | 'poolId__alpha'
  | 'poolId__beta'
  | 'poolId__lambda'
  | 'poolId__delta'
  | 'poolId__epsilon'
  | 'poolId__isInRecoveryMode'
  | 'poolId__protocolSwapFeeCache'
  | 'poolId__protocolYieldFeeCache'
  | 'poolId__protocolAumFeeCache'
  | 'poolId__totalProtocolFeePaidInBPT'
  | 'poolId__lastJoinExitAmp'
  | 'poolId__lastPostJoinExitInvariant'
  | 'poolId__protocolId'
  | 'asset'
  | 'amount'
  | 'pricingAsset'
  | 'price'
  | 'block'
  | 'timestamp';

export type bal_TokenSnapshot = {
  id: Scalars['ID'];
  token: bal_Token;
  timestamp: Scalars['Int'];
  totalBalanceUSD: Scalars['bal_BigDecimal'];
  totalBalanceNotional: Scalars['bal_BigDecimal'];
  totalVolumeUSD: Scalars['bal_BigDecimal'];
  totalVolumeNotional: Scalars['bal_BigDecimal'];
  totalSwapCount: Scalars['BigInt'];
};

export type bal_TokenSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  token_?: InputMaybe<bal_Token_filter>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalBalanceUSD?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalBalanceUSD_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalBalanceUSD_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalBalanceUSD_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalBalanceUSD_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalBalanceUSD_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalBalanceUSD_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalBalanceUSD_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalBalanceNotional?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalBalanceNotional_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalBalanceNotional_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalBalanceNotional_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalBalanceNotional_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalBalanceNotional_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalBalanceNotional_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalBalanceNotional_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalVolumeUSD?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalVolumeNotional?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalVolumeNotional_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalVolumeNotional_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalVolumeNotional_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalVolumeNotional_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalVolumeNotional_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalVolumeNotional_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalVolumeNotional_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalSwapCount?: InputMaybe<Scalars['BigInt']>;
  totalSwapCount_not?: InputMaybe<Scalars['BigInt']>;
  totalSwapCount_gt?: InputMaybe<Scalars['BigInt']>;
  totalSwapCount_lt?: InputMaybe<Scalars['BigInt']>;
  totalSwapCount_gte?: InputMaybe<Scalars['BigInt']>;
  totalSwapCount_lte?: InputMaybe<Scalars['BigInt']>;
  totalSwapCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSwapCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_TokenSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_TokenSnapshot_filter>>>;
};

export type bal_TokenSnapshot_orderBy =
  | 'id'
  | 'token'
  | 'token__id'
  | 'token__symbol'
  | 'token__name'
  | 'token__decimals'
  | 'token__address'
  | 'token__totalBalanceUSD'
  | 'token__totalBalanceNotional'
  | 'token__totalVolumeUSD'
  | 'token__totalVolumeNotional'
  | 'token__totalSwapCount'
  | 'token__latestUSDPrice'
  | 'token__latestUSDPriceTimestamp'
  | 'token__latestFXPrice'
  | 'token__fxOracleDecimals'
  | 'timestamp'
  | 'totalBalanceUSD'
  | 'totalBalanceNotional'
  | 'totalVolumeUSD'
  | 'totalVolumeNotional'
  | 'totalSwapCount';

export type bal_Token_filter = {
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
  decimals?: InputMaybe<Scalars['Int']>;
  decimals_not?: InputMaybe<Scalars['Int']>;
  decimals_gt?: InputMaybe<Scalars['Int']>;
  decimals_lt?: InputMaybe<Scalars['Int']>;
  decimals_gte?: InputMaybe<Scalars['Int']>;
  decimals_lte?: InputMaybe<Scalars['Int']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  address?: InputMaybe<Scalars['String']>;
  address_not?: InputMaybe<Scalars['String']>;
  address_gt?: InputMaybe<Scalars['String']>;
  address_lt?: InputMaybe<Scalars['String']>;
  address_gte?: InputMaybe<Scalars['String']>;
  address_lte?: InputMaybe<Scalars['String']>;
  address_in?: InputMaybe<Array<Scalars['String']>>;
  address_not_in?: InputMaybe<Array<Scalars['String']>>;
  address_contains?: InputMaybe<Scalars['String']>;
  address_contains_nocase?: InputMaybe<Scalars['String']>;
  address_not_contains?: InputMaybe<Scalars['String']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']>;
  address_starts_with?: InputMaybe<Scalars['String']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']>;
  address_not_starts_with?: InputMaybe<Scalars['String']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  address_ends_with?: InputMaybe<Scalars['String']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']>;
  address_not_ends_with?: InputMaybe<Scalars['String']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  totalBalanceUSD?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalBalanceUSD_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalBalanceUSD_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalBalanceUSD_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalBalanceUSD_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalBalanceUSD_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalBalanceUSD_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalBalanceUSD_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalBalanceNotional?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalBalanceNotional_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalBalanceNotional_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalBalanceNotional_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalBalanceNotional_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalBalanceNotional_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalBalanceNotional_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalBalanceNotional_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalVolumeUSD?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalVolumeNotional?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalVolumeNotional_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalVolumeNotional_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalVolumeNotional_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalVolumeNotional_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalVolumeNotional_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalVolumeNotional_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalVolumeNotional_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalSwapCount?: InputMaybe<Scalars['BigInt']>;
  totalSwapCount_not?: InputMaybe<Scalars['BigInt']>;
  totalSwapCount_gt?: InputMaybe<Scalars['BigInt']>;
  totalSwapCount_lt?: InputMaybe<Scalars['BigInt']>;
  totalSwapCount_gte?: InputMaybe<Scalars['BigInt']>;
  totalSwapCount_lte?: InputMaybe<Scalars['BigInt']>;
  totalSwapCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSwapCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  latestPrice?: InputMaybe<Scalars['String']>;
  latestPrice_not?: InputMaybe<Scalars['String']>;
  latestPrice_gt?: InputMaybe<Scalars['String']>;
  latestPrice_lt?: InputMaybe<Scalars['String']>;
  latestPrice_gte?: InputMaybe<Scalars['String']>;
  latestPrice_lte?: InputMaybe<Scalars['String']>;
  latestPrice_in?: InputMaybe<Array<Scalars['String']>>;
  latestPrice_not_in?: InputMaybe<Array<Scalars['String']>>;
  latestPrice_contains?: InputMaybe<Scalars['String']>;
  latestPrice_contains_nocase?: InputMaybe<Scalars['String']>;
  latestPrice_not_contains?: InputMaybe<Scalars['String']>;
  latestPrice_not_contains_nocase?: InputMaybe<Scalars['String']>;
  latestPrice_starts_with?: InputMaybe<Scalars['String']>;
  latestPrice_starts_with_nocase?: InputMaybe<Scalars['String']>;
  latestPrice_not_starts_with?: InputMaybe<Scalars['String']>;
  latestPrice_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  latestPrice_ends_with?: InputMaybe<Scalars['String']>;
  latestPrice_ends_with_nocase?: InputMaybe<Scalars['String']>;
  latestPrice_not_ends_with?: InputMaybe<Scalars['String']>;
  latestPrice_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  latestPrice_?: InputMaybe<bal_LatestPrice_filter>;
  latestUSDPrice?: InputMaybe<Scalars['bal_BigDecimal']>;
  latestUSDPrice_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  latestUSDPrice_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  latestUSDPrice_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  latestUSDPrice_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  latestUSDPrice_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  latestUSDPrice_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  latestUSDPrice_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  latestUSDPriceTimestamp?: InputMaybe<Scalars['BigInt']>;
  latestUSDPriceTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  latestUSDPriceTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  latestUSDPriceTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  latestUSDPriceTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  latestUSDPriceTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  latestUSDPriceTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  latestUSDPriceTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  latestFXPrice?: InputMaybe<Scalars['bal_BigDecimal']>;
  latestFXPrice_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  latestFXPrice_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  latestFXPrice_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  latestFXPrice_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  latestFXPrice_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  latestFXPrice_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  latestFXPrice_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
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
  pool_?: InputMaybe<bal_Pool_filter>;
  fxOracleDecimals?: InputMaybe<Scalars['Int']>;
  fxOracleDecimals_not?: InputMaybe<Scalars['Int']>;
  fxOracleDecimals_gt?: InputMaybe<Scalars['Int']>;
  fxOracleDecimals_lt?: InputMaybe<Scalars['Int']>;
  fxOracleDecimals_gte?: InputMaybe<Scalars['Int']>;
  fxOracleDecimals_lte?: InputMaybe<Scalars['Int']>;
  fxOracleDecimals_in?: InputMaybe<Array<Scalars['Int']>>;
  fxOracleDecimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_Token_filter>>>;
};

export type bal_Token_orderBy =
  | 'id'
  | 'symbol'
  | 'name'
  | 'decimals'
  | 'address'
  | 'totalBalanceUSD'
  | 'totalBalanceNotional'
  | 'totalVolumeUSD'
  | 'totalVolumeNotional'
  | 'totalSwapCount'
  | 'latestPrice'
  | 'latestPrice__id'
  | 'latestPrice__asset'
  | 'latestPrice__pricingAsset'
  | 'latestPrice__price'
  | 'latestPrice__block'
  | 'latestUSDPrice'
  | 'latestUSDPriceTimestamp'
  | 'latestFXPrice'
  | 'pool'
  | 'pool__id'
  | 'pool__address'
  | 'pool__poolType'
  | 'pool__poolTypeVersion'
  | 'pool__factory'
  | 'pool__strategyType'
  | 'pool__oracleEnabled'
  | 'pool__symbol'
  | 'pool__name'
  | 'pool__swapEnabled'
  | 'pool__swapEnabledInternal'
  | 'pool__swapEnabledCurationSignal'
  | 'pool__swapFee'
  | 'pool__owner'
  | 'pool__isPaused'
  | 'pool__totalWeight'
  | 'pool__totalSwapVolume'
  | 'pool__totalSwapFee'
  | 'pool__totalLiquidity'
  | 'pool__totalLiquiditySansBPT'
  | 'pool__totalShares'
  | 'pool__totalProtocolFee'
  | 'pool__createTime'
  | 'pool__swapsCount'
  | 'pool__holdersCount'
  | 'pool__tx'
  | 'pool__amp'
  | 'pool__principalToken'
  | 'pool__baseToken'
  | 'pool__expiryTime'
  | 'pool__unitSeconds'
  | 'pool__managementFee'
  | 'pool__joinExitEnabled'
  | 'pool__mustAllowlistLPs'
  | 'pool__managementAumFee'
  | 'pool__totalAumFeeCollectedInBPT'
  | 'pool__mainIndex'
  | 'pool__wrappedIndex'
  | 'pool__lowerTarget'
  | 'pool__upperTarget'
  | 'pool__sqrtAlpha'
  | 'pool__sqrtBeta'
  | 'pool__root3Alpha'
  | 'pool__c'
  | 'pool__s'
  | 'pool__tauAlphaX'
  | 'pool__tauAlphaY'
  | 'pool__tauBetaX'
  | 'pool__tauBetaY'
  | 'pool__u'
  | 'pool__v'
  | 'pool__w'
  | 'pool__z'
  | 'pool__dSq'
  | 'pool__alpha'
  | 'pool__beta'
  | 'pool__lambda'
  | 'pool__delta'
  | 'pool__epsilon'
  | 'pool__isInRecoveryMode'
  | 'pool__protocolSwapFeeCache'
  | 'pool__protocolYieldFeeCache'
  | 'pool__protocolAumFeeCache'
  | 'pool__totalProtocolFeePaidInBPT'
  | 'pool__lastJoinExitAmp'
  | 'pool__lastPostJoinExitInvariant'
  | 'pool__protocolId'
  | 'fxOracleDecimals';

export type bal_TradePair = {
  /** Token Address - Token Address */
  id: Scalars['ID'];
  token0: bal_Token;
  token1: bal_Token;
  totalSwapVolume: Scalars['bal_BigDecimal'];
  totalSwapFee: Scalars['bal_BigDecimal'];
};

export type bal_TradePairSnapshot = {
  id: Scalars['ID'];
  pair: bal_TradePair;
  timestamp: Scalars['Int'];
  totalSwapVolume: Scalars['bal_BigDecimal'];
  totalSwapFee: Scalars['bal_BigDecimal'];
};

export type bal_TradePairSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<bal_TradePair_filter>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSwapVolume?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalSwapFee?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_TradePairSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_TradePairSnapshot_filter>>>;
};

export type bal_TradePairSnapshot_orderBy =
  | 'id'
  | 'pair'
  | 'pair__id'
  | 'pair__totalSwapVolume'
  | 'pair__totalSwapFee'
  | 'timestamp'
  | 'totalSwapVolume'
  | 'totalSwapFee';

export type bal_TradePair_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  token0_?: InputMaybe<bal_Token_filter>;
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
  token1_?: InputMaybe<bal_Token_filter>;
  totalSwapVolume?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalSwapFee?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  totalSwapFee_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_TradePair_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_TradePair_filter>>>;
};

export type bal_TradePair_orderBy =
  | 'id'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__address'
  | 'token0__totalBalanceUSD'
  | 'token0__totalBalanceNotional'
  | 'token0__totalVolumeUSD'
  | 'token0__totalVolumeNotional'
  | 'token0__totalSwapCount'
  | 'token0__latestUSDPrice'
  | 'token0__latestUSDPriceTimestamp'
  | 'token0__latestFXPrice'
  | 'token0__fxOracleDecimals'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__address'
  | 'token1__totalBalanceUSD'
  | 'token1__totalBalanceNotional'
  | 'token1__totalVolumeUSD'
  | 'token1__totalVolumeNotional'
  | 'token1__totalSwapCount'
  | 'token1__latestUSDPrice'
  | 'token1__latestUSDPriceTimestamp'
  | 'token1__latestFXPrice'
  | 'token1__fxOracleDecimals'
  | 'totalSwapVolume'
  | 'totalSwapFee';

export type bal_User = {
  id: Scalars['ID'];
  sharesOwned?: Maybe<Array<bal_PoolShare>>;
  swaps?: Maybe<Array<bal_Swap>>;
  userInternalBalances?: Maybe<Array<bal_UserInternalBalance>>;
};


export type bal_UsersharesOwnedArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_PoolShare_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_PoolShare_filter>;
};


export type bal_UserswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_Swap_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_Swap_filter>;
};


export type bal_UseruserInternalBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<bal_UserInternalBalance_orderBy>;
  orderDirection?: InputMaybe<bal_OrderDirection>;
  where?: InputMaybe<bal_UserInternalBalance_filter>;
};

export type bal_UserInternalBalance = {
  id: Scalars['ID'];
  userAddress?: Maybe<bal_User>;
  token: Scalars['bal_Bytes'];
  tokenInfo?: Maybe<bal_Token>;
  balance: Scalars['bal_BigDecimal'];
};

export type bal_UserInternalBalance_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  userAddress?: InputMaybe<Scalars['String']>;
  userAddress_not?: InputMaybe<Scalars['String']>;
  userAddress_gt?: InputMaybe<Scalars['String']>;
  userAddress_lt?: InputMaybe<Scalars['String']>;
  userAddress_gte?: InputMaybe<Scalars['String']>;
  userAddress_lte?: InputMaybe<Scalars['String']>;
  userAddress_in?: InputMaybe<Array<Scalars['String']>>;
  userAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  userAddress_contains?: InputMaybe<Scalars['String']>;
  userAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  userAddress_not_contains?: InputMaybe<Scalars['String']>;
  userAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userAddress_starts_with?: InputMaybe<Scalars['String']>;
  userAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  userAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userAddress_ends_with?: InputMaybe<Scalars['String']>;
  userAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  userAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userAddress_?: InputMaybe<bal_User_filter>;
  token?: InputMaybe<Scalars['bal_Bytes']>;
  token_not?: InputMaybe<Scalars['bal_Bytes']>;
  token_gt?: InputMaybe<Scalars['bal_Bytes']>;
  token_lt?: InputMaybe<Scalars['bal_Bytes']>;
  token_gte?: InputMaybe<Scalars['bal_Bytes']>;
  token_lte?: InputMaybe<Scalars['bal_Bytes']>;
  token_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['bal_Bytes']>>;
  token_contains?: InputMaybe<Scalars['bal_Bytes']>;
  token_not_contains?: InputMaybe<Scalars['bal_Bytes']>;
  tokenInfo?: InputMaybe<Scalars['String']>;
  tokenInfo_not?: InputMaybe<Scalars['String']>;
  tokenInfo_gt?: InputMaybe<Scalars['String']>;
  tokenInfo_lt?: InputMaybe<Scalars['String']>;
  tokenInfo_gte?: InputMaybe<Scalars['String']>;
  tokenInfo_lte?: InputMaybe<Scalars['String']>;
  tokenInfo_in?: InputMaybe<Array<Scalars['String']>>;
  tokenInfo_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenInfo_contains?: InputMaybe<Scalars['String']>;
  tokenInfo_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenInfo_not_contains?: InputMaybe<Scalars['String']>;
  tokenInfo_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenInfo_starts_with?: InputMaybe<Scalars['String']>;
  tokenInfo_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenInfo_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenInfo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenInfo_ends_with?: InputMaybe<Scalars['String']>;
  tokenInfo_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenInfo_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenInfo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenInfo_?: InputMaybe<bal_Token_filter>;
  balance?: InputMaybe<Scalars['bal_BigDecimal']>;
  balance_not?: InputMaybe<Scalars['bal_BigDecimal']>;
  balance_gt?: InputMaybe<Scalars['bal_BigDecimal']>;
  balance_lt?: InputMaybe<Scalars['bal_BigDecimal']>;
  balance_gte?: InputMaybe<Scalars['bal_BigDecimal']>;
  balance_lte?: InputMaybe<Scalars['bal_BigDecimal']>;
  balance_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  balance_not_in?: InputMaybe<Array<Scalars['bal_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_UserInternalBalance_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_UserInternalBalance_filter>>>;
};

export type bal_UserInternalBalance_orderBy =
  | 'id'
  | 'userAddress'
  | 'userAddress__id'
  | 'token'
  | 'tokenInfo'
  | 'tokenInfo__id'
  | 'tokenInfo__symbol'
  | 'tokenInfo__name'
  | 'tokenInfo__decimals'
  | 'tokenInfo__address'
  | 'tokenInfo__totalBalanceUSD'
  | 'tokenInfo__totalBalanceNotional'
  | 'tokenInfo__totalVolumeUSD'
  | 'tokenInfo__totalVolumeNotional'
  | 'tokenInfo__totalSwapCount'
  | 'tokenInfo__latestUSDPrice'
  | 'tokenInfo__latestUSDPriceTimestamp'
  | 'tokenInfo__latestFXPrice'
  | 'tokenInfo__fxOracleDecimals'
  | 'balance';

export type bal_User_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sharesOwned_?: InputMaybe<bal_PoolShare_filter>;
  swaps_?: InputMaybe<bal_Swap_filter>;
  userInternalBalances_?: InputMaybe<bal_UserInternalBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<bal_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<bal_User_filter>>>;
  or?: InputMaybe<Array<InputMaybe<bal_User_filter>>>;
};

export type bal_User_orderBy =
  | 'id'
  | 'sharesOwned'
  | 'swaps'
  | 'userInternalBalances';

export type bal__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['bal_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['bal_Bytes']>;
};

/** The type for the top-level _meta field */
export type bal__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: bal__Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type bal__SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  bal_balancer: InContextSdkMethod<Query['bal_balancer'], Querybal_balancerArgs, MeshContext>,
  /** null **/
  bal_balancers: InContextSdkMethod<Query['bal_balancers'], Querybal_balancersArgs, MeshContext>,
  /** null **/
  bal_pool: InContextSdkMethod<Query['bal_pool'], Querybal_poolArgs, MeshContext>,
  /** null **/
  bal_pools: InContextSdkMethod<Query['bal_pools'], Querybal_poolsArgs, MeshContext>,
  /** null **/
  bal_poolContract: InContextSdkMethod<Query['bal_poolContract'], Querybal_poolContractArgs, MeshContext>,
  /** null **/
  bal_poolContracts: InContextSdkMethod<Query['bal_poolContracts'], Querybal_poolContractsArgs, MeshContext>,
  /** null **/
  bal_poolToken: InContextSdkMethod<Query['bal_poolToken'], Querybal_poolTokenArgs, MeshContext>,
  /** null **/
  bal_poolTokens: InContextSdkMethod<Query['bal_poolTokens'], Querybal_poolTokensArgs, MeshContext>,
  /** null **/
  bal_priceRateProvider: InContextSdkMethod<Query['bal_priceRateProvider'], Querybal_priceRateProviderArgs, MeshContext>,
  /** null **/
  bal_priceRateProviders: InContextSdkMethod<Query['bal_priceRateProviders'], Querybal_priceRateProvidersArgs, MeshContext>,
  /** null **/
  bal_circuitBreaker: InContextSdkMethod<Query['bal_circuitBreaker'], Querybal_circuitBreakerArgs, MeshContext>,
  /** null **/
  bal_circuitBreakers: InContextSdkMethod<Query['bal_circuitBreakers'], Querybal_circuitBreakersArgs, MeshContext>,
  /** null **/
  bal_poolShare: InContextSdkMethod<Query['bal_poolShare'], Querybal_poolShareArgs, MeshContext>,
  /** null **/
  bal_poolShares: InContextSdkMethod<Query['bal_poolShares'], Querybal_poolSharesArgs, MeshContext>,
  /** null **/
  bal_user: InContextSdkMethod<Query['bal_user'], Querybal_userArgs, MeshContext>,
  /** null **/
  bal_users: InContextSdkMethod<Query['bal_users'], Querybal_usersArgs, MeshContext>,
  /** null **/
  bal_userInternalBalance: InContextSdkMethod<Query['bal_userInternalBalance'], Querybal_userInternalBalanceArgs, MeshContext>,
  /** null **/
  bal_userInternalBalances: InContextSdkMethod<Query['bal_userInternalBalances'], Querybal_userInternalBalancesArgs, MeshContext>,
  /** null **/
  bal_gradualWeightUpdate: InContextSdkMethod<Query['bal_gradualWeightUpdate'], Querybal_gradualWeightUpdateArgs, MeshContext>,
  /** null **/
  bal_gradualWeightUpdates: InContextSdkMethod<Query['bal_gradualWeightUpdates'], Querybal_gradualWeightUpdatesArgs, MeshContext>,
  /** null **/
  bal_ampUpdate: InContextSdkMethod<Query['bal_ampUpdate'], Querybal_ampUpdateArgs, MeshContext>,
  /** null **/
  bal_ampUpdates: InContextSdkMethod<Query['bal_ampUpdates'], Querybal_ampUpdatesArgs, MeshContext>,
  /** null **/
  bal_swapFeeUpdate: InContextSdkMethod<Query['bal_swapFeeUpdate'], Querybal_swapFeeUpdateArgs, MeshContext>,
  /** null **/
  bal_swapFeeUpdates: InContextSdkMethod<Query['bal_swapFeeUpdates'], Querybal_swapFeeUpdatesArgs, MeshContext>,
  /** null **/
  bal_swap: InContextSdkMethod<Query['bal_swap'], Querybal_swapArgs, MeshContext>,
  /** null **/
  bal_swaps: InContextSdkMethod<Query['bal_swaps'], Querybal_swapsArgs, MeshContext>,
  /** null **/
  bal_joinExit: InContextSdkMethod<Query['bal_joinExit'], Querybal_joinExitArgs, MeshContext>,
  /** null **/
  bal_joinExits: InContextSdkMethod<Query['bal_joinExits'], Querybal_joinExitsArgs, MeshContext>,
  /** null **/
  bal_latestPrice: InContextSdkMethod<Query['bal_latestPrice'], Querybal_latestPriceArgs, MeshContext>,
  /** null **/
  bal_latestPrices: InContextSdkMethod<Query['bal_latestPrices'], Querybal_latestPricesArgs, MeshContext>,
  /** null **/
  bal_poolHistoricalLiquidity: InContextSdkMethod<Query['bal_poolHistoricalLiquidity'], Querybal_poolHistoricalLiquidityArgs, MeshContext>,
  /** null **/
  bal_poolHistoricalLiquidities: InContextSdkMethod<Query['bal_poolHistoricalLiquidities'], Querybal_poolHistoricalLiquiditiesArgs, MeshContext>,
  /** null **/
  bal_tokenPrice: InContextSdkMethod<Query['bal_tokenPrice'], Querybal_tokenPriceArgs, MeshContext>,
  /** null **/
  bal_tokenPrices: InContextSdkMethod<Query['bal_tokenPrices'], Querybal_tokenPricesArgs, MeshContext>,
  /** null **/
  bal_managementOperation: InContextSdkMethod<Query['bal_managementOperation'], Querybal_managementOperationArgs, MeshContext>,
  /** null **/
  bal_managementOperations: InContextSdkMethod<Query['bal_managementOperations'], Querybal_managementOperationsArgs, MeshContext>,
  /** null **/
  bal_poolSnapshot: InContextSdkMethod<Query['bal_poolSnapshot'], Querybal_poolSnapshotArgs, MeshContext>,
  /** null **/
  bal_poolSnapshots: InContextSdkMethod<Query['bal_poolSnapshots'], Querybal_poolSnapshotsArgs, MeshContext>,
  /** null **/
  bal_token: InContextSdkMethod<Query['bal_token'], Querybal_tokenArgs, MeshContext>,
  /** null **/
  bal_tokens: InContextSdkMethod<Query['bal_tokens'], Querybal_tokensArgs, MeshContext>,
  /** null **/
  bal_tokenSnapshot: InContextSdkMethod<Query['bal_tokenSnapshot'], Querybal_tokenSnapshotArgs, MeshContext>,
  /** null **/
  bal_tokenSnapshots: InContextSdkMethod<Query['bal_tokenSnapshots'], Querybal_tokenSnapshotsArgs, MeshContext>,
  /** null **/
  bal_tradePair: InContextSdkMethod<Query['bal_tradePair'], Querybal_tradePairArgs, MeshContext>,
  /** null **/
  bal_tradePairs: InContextSdkMethod<Query['bal_tradePairs'], Querybal_tradePairsArgs, MeshContext>,
  /** null **/
  bal_tradePairSnapshot: InContextSdkMethod<Query['bal_tradePairSnapshot'], Querybal_tradePairSnapshotArgs, MeshContext>,
  /** null **/
  bal_tradePairSnapshots: InContextSdkMethod<Query['bal_tradePairSnapshots'], Querybal_tradePairSnapshotsArgs, MeshContext>,
  /** null **/
  bal_balancerSnapshot: InContextSdkMethod<Query['bal_balancerSnapshot'], Querybal_balancerSnapshotArgs, MeshContext>,
  /** null **/
  bal_balancerSnapshots: InContextSdkMethod<Query['bal_balancerSnapshots'], Querybal_balancerSnapshotsArgs, MeshContext>,
  /** null **/
  bal_protocolIdData: InContextSdkMethod<Query['bal_protocolIdData'], Querybal_protocolIdDataArgs, MeshContext>,
  /** null **/
  bal_protocolIdDatas: InContextSdkMethod<Query['bal_protocolIdDatas'], Querybal_protocolIdDatasArgs, MeshContext>,
  /** null **/
  bal_fxoracle: InContextSdkMethod<Query['bal_fxoracle'], Querybal_fxoracleArgs, MeshContext>,
  /** null **/
  bal_fxoracles: InContextSdkMethod<Query['bal_fxoracles'], Querybal_fxoraclesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  bal__meta: InContextSdkMethod<Query['bal__meta'], Querybal__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  bal_balancer: InContextSdkMethod<Subscription['bal_balancer'], Subscriptionbal_balancerArgs, MeshContext>,
  /** null **/
  bal_balancers: InContextSdkMethod<Subscription['bal_balancers'], Subscriptionbal_balancersArgs, MeshContext>,
  /** null **/
  bal_pool: InContextSdkMethod<Subscription['bal_pool'], Subscriptionbal_poolArgs, MeshContext>,
  /** null **/
  bal_pools: InContextSdkMethod<Subscription['bal_pools'], Subscriptionbal_poolsArgs, MeshContext>,
  /** null **/
  bal_poolContract: InContextSdkMethod<Subscription['bal_poolContract'], Subscriptionbal_poolContractArgs, MeshContext>,
  /** null **/
  bal_poolContracts: InContextSdkMethod<Subscription['bal_poolContracts'], Subscriptionbal_poolContractsArgs, MeshContext>,
  /** null **/
  bal_poolToken: InContextSdkMethod<Subscription['bal_poolToken'], Subscriptionbal_poolTokenArgs, MeshContext>,
  /** null **/
  bal_poolTokens: InContextSdkMethod<Subscription['bal_poolTokens'], Subscriptionbal_poolTokensArgs, MeshContext>,
  /** null **/
  bal_priceRateProvider: InContextSdkMethod<Subscription['bal_priceRateProvider'], Subscriptionbal_priceRateProviderArgs, MeshContext>,
  /** null **/
  bal_priceRateProviders: InContextSdkMethod<Subscription['bal_priceRateProviders'], Subscriptionbal_priceRateProvidersArgs, MeshContext>,
  /** null **/
  bal_circuitBreaker: InContextSdkMethod<Subscription['bal_circuitBreaker'], Subscriptionbal_circuitBreakerArgs, MeshContext>,
  /** null **/
  bal_circuitBreakers: InContextSdkMethod<Subscription['bal_circuitBreakers'], Subscriptionbal_circuitBreakersArgs, MeshContext>,
  /** null **/
  bal_poolShare: InContextSdkMethod<Subscription['bal_poolShare'], Subscriptionbal_poolShareArgs, MeshContext>,
  /** null **/
  bal_poolShares: InContextSdkMethod<Subscription['bal_poolShares'], Subscriptionbal_poolSharesArgs, MeshContext>,
  /** null **/
  bal_user: InContextSdkMethod<Subscription['bal_user'], Subscriptionbal_userArgs, MeshContext>,
  /** null **/
  bal_users: InContextSdkMethod<Subscription['bal_users'], Subscriptionbal_usersArgs, MeshContext>,
  /** null **/
  bal_userInternalBalance: InContextSdkMethod<Subscription['bal_userInternalBalance'], Subscriptionbal_userInternalBalanceArgs, MeshContext>,
  /** null **/
  bal_userInternalBalances: InContextSdkMethod<Subscription['bal_userInternalBalances'], Subscriptionbal_userInternalBalancesArgs, MeshContext>,
  /** null **/
  bal_gradualWeightUpdate: InContextSdkMethod<Subscription['bal_gradualWeightUpdate'], Subscriptionbal_gradualWeightUpdateArgs, MeshContext>,
  /** null **/
  bal_gradualWeightUpdates: InContextSdkMethod<Subscription['bal_gradualWeightUpdates'], Subscriptionbal_gradualWeightUpdatesArgs, MeshContext>,
  /** null **/
  bal_ampUpdate: InContextSdkMethod<Subscription['bal_ampUpdate'], Subscriptionbal_ampUpdateArgs, MeshContext>,
  /** null **/
  bal_ampUpdates: InContextSdkMethod<Subscription['bal_ampUpdates'], Subscriptionbal_ampUpdatesArgs, MeshContext>,
  /** null **/
  bal_swapFeeUpdate: InContextSdkMethod<Subscription['bal_swapFeeUpdate'], Subscriptionbal_swapFeeUpdateArgs, MeshContext>,
  /** null **/
  bal_swapFeeUpdates: InContextSdkMethod<Subscription['bal_swapFeeUpdates'], Subscriptionbal_swapFeeUpdatesArgs, MeshContext>,
  /** null **/
  bal_swap: InContextSdkMethod<Subscription['bal_swap'], Subscriptionbal_swapArgs, MeshContext>,
  /** null **/
  bal_swaps: InContextSdkMethod<Subscription['bal_swaps'], Subscriptionbal_swapsArgs, MeshContext>,
  /** null **/
  bal_joinExit: InContextSdkMethod<Subscription['bal_joinExit'], Subscriptionbal_joinExitArgs, MeshContext>,
  /** null **/
  bal_joinExits: InContextSdkMethod<Subscription['bal_joinExits'], Subscriptionbal_joinExitsArgs, MeshContext>,
  /** null **/
  bal_latestPrice: InContextSdkMethod<Subscription['bal_latestPrice'], Subscriptionbal_latestPriceArgs, MeshContext>,
  /** null **/
  bal_latestPrices: InContextSdkMethod<Subscription['bal_latestPrices'], Subscriptionbal_latestPricesArgs, MeshContext>,
  /** null **/
  bal_poolHistoricalLiquidity: InContextSdkMethod<Subscription['bal_poolHistoricalLiquidity'], Subscriptionbal_poolHistoricalLiquidityArgs, MeshContext>,
  /** null **/
  bal_poolHistoricalLiquidities: InContextSdkMethod<Subscription['bal_poolHistoricalLiquidities'], Subscriptionbal_poolHistoricalLiquiditiesArgs, MeshContext>,
  /** null **/
  bal_tokenPrice: InContextSdkMethod<Subscription['bal_tokenPrice'], Subscriptionbal_tokenPriceArgs, MeshContext>,
  /** null **/
  bal_tokenPrices: InContextSdkMethod<Subscription['bal_tokenPrices'], Subscriptionbal_tokenPricesArgs, MeshContext>,
  /** null **/
  bal_managementOperation: InContextSdkMethod<Subscription['bal_managementOperation'], Subscriptionbal_managementOperationArgs, MeshContext>,
  /** null **/
  bal_managementOperations: InContextSdkMethod<Subscription['bal_managementOperations'], Subscriptionbal_managementOperationsArgs, MeshContext>,
  /** null **/
  bal_poolSnapshot: InContextSdkMethod<Subscription['bal_poolSnapshot'], Subscriptionbal_poolSnapshotArgs, MeshContext>,
  /** null **/
  bal_poolSnapshots: InContextSdkMethod<Subscription['bal_poolSnapshots'], Subscriptionbal_poolSnapshotsArgs, MeshContext>,
  /** null **/
  bal_token: InContextSdkMethod<Subscription['bal_token'], Subscriptionbal_tokenArgs, MeshContext>,
  /** null **/
  bal_tokens: InContextSdkMethod<Subscription['bal_tokens'], Subscriptionbal_tokensArgs, MeshContext>,
  /** null **/
  bal_tokenSnapshot: InContextSdkMethod<Subscription['bal_tokenSnapshot'], Subscriptionbal_tokenSnapshotArgs, MeshContext>,
  /** null **/
  bal_tokenSnapshots: InContextSdkMethod<Subscription['bal_tokenSnapshots'], Subscriptionbal_tokenSnapshotsArgs, MeshContext>,
  /** null **/
  bal_tradePair: InContextSdkMethod<Subscription['bal_tradePair'], Subscriptionbal_tradePairArgs, MeshContext>,
  /** null **/
  bal_tradePairs: InContextSdkMethod<Subscription['bal_tradePairs'], Subscriptionbal_tradePairsArgs, MeshContext>,
  /** null **/
  bal_tradePairSnapshot: InContextSdkMethod<Subscription['bal_tradePairSnapshot'], Subscriptionbal_tradePairSnapshotArgs, MeshContext>,
  /** null **/
  bal_tradePairSnapshots: InContextSdkMethod<Subscription['bal_tradePairSnapshots'], Subscriptionbal_tradePairSnapshotsArgs, MeshContext>,
  /** null **/
  bal_balancerSnapshot: InContextSdkMethod<Subscription['bal_balancerSnapshot'], Subscriptionbal_balancerSnapshotArgs, MeshContext>,
  /** null **/
  bal_balancerSnapshots: InContextSdkMethod<Subscription['bal_balancerSnapshots'], Subscriptionbal_balancerSnapshotsArgs, MeshContext>,
  /** null **/
  bal_protocolIdData: InContextSdkMethod<Subscription['bal_protocolIdData'], Subscriptionbal_protocolIdDataArgs, MeshContext>,
  /** null **/
  bal_protocolIdDatas: InContextSdkMethod<Subscription['bal_protocolIdDatas'], Subscriptionbal_protocolIdDatasArgs, MeshContext>,
  /** null **/
  bal_fxoracle: InContextSdkMethod<Subscription['bal_fxoracle'], Subscriptionbal_fxoracleArgs, MeshContext>,
  /** null **/
  bal_fxoracles: InContextSdkMethod<Subscription['bal_fxoracles'], Subscriptionbal_fxoraclesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  bal__meta: InContextSdkMethod<Subscription['bal__meta'], Subscriptionbal__metaArgs, MeshContext>
  };

  export type Context = {
      ["balancerv2"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
