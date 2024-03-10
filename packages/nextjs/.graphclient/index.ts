// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import PrefixTransform from "@graphql-mesh/transform-prefix";
import BlockTrackingTransform from "@graphprotocol/client-block-tracking";
import AutoPaginationTransform from "@graphprotocol/client-auto-pagination";
import StitchingMerger from "@graphql-mesh/merger-stitching";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { Uniswapv2Types } from './sources/uniswapv2/types';
import type { Balancerv2Types } from './sources/balancerv2/types';
import * as importedModule$0 from "./sources/balancerv2/introspectionSchema";
import * as importedModule$1 from "./sources/uniswapv2/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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
  uni_BigDecimal: any;
  uni_Bytes: any;
  uni_Int8: any;
};

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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  bal_Aggregation_interval: bal_Aggregation_interval;
  bal_AmpUpdate: ResolverTypeWrapper<bal_AmpUpdate>;
  bal_AmpUpdate_filter: bal_AmpUpdate_filter;
  bal_AmpUpdate_orderBy: bal_AmpUpdate_orderBy;
  bal_Balancer: ResolverTypeWrapper<bal_Balancer>;
  bal_BalancerSnapshot: ResolverTypeWrapper<bal_BalancerSnapshot>;
  bal_BalancerSnapshot_filter: bal_BalancerSnapshot_filter;
  bal_BalancerSnapshot_orderBy: bal_BalancerSnapshot_orderBy;
  bal_Balancer_filter: bal_Balancer_filter;
  bal_Balancer_orderBy: bal_Balancer_orderBy;
  bal_BigDecimal: ResolverTypeWrapper<Scalars['bal_BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  bal_BlockChangedFilter: bal_BlockChangedFilter;
  bal_Block_height: bal_Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  bal_Bytes: ResolverTypeWrapper<Scalars['bal_Bytes']>;
  bal_CircuitBreaker: ResolverTypeWrapper<bal_CircuitBreaker>;
  bal_CircuitBreaker_filter: bal_CircuitBreaker_filter;
  bal_CircuitBreaker_orderBy: bal_CircuitBreaker_orderBy;
  bal_FXOracle: ResolverTypeWrapper<bal_FXOracle>;
  bal_FXOracle_filter: bal_FXOracle_filter;
  bal_FXOracle_orderBy: bal_FXOracle_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  bal_GradualWeightUpdate: ResolverTypeWrapper<bal_GradualWeightUpdate>;
  bal_GradualWeightUpdate_filter: bal_GradualWeightUpdate_filter;
  bal_GradualWeightUpdate_orderBy: bal_GradualWeightUpdate_orderBy;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  bal_Int8: ResolverTypeWrapper<Scalars['bal_Int8']>;
  bal_InvestType: bal_InvestType;
  bal_JoinExit: ResolverTypeWrapper<bal_JoinExit>;
  bal_JoinExit_filter: bal_JoinExit_filter;
  bal_JoinExit_orderBy: bal_JoinExit_orderBy;
  bal_LatestPrice: ResolverTypeWrapper<bal_LatestPrice>;
  bal_LatestPrice_filter: bal_LatestPrice_filter;
  bal_LatestPrice_orderBy: bal_LatestPrice_orderBy;
  bal_ManagementOperation: ResolverTypeWrapper<bal_ManagementOperation>;
  bal_ManagementOperation_filter: bal_ManagementOperation_filter;
  bal_ManagementOperation_orderBy: bal_ManagementOperation_orderBy;
  bal_OperationType: bal_OperationType;
  bal_OrderDirection: bal_OrderDirection;
  bal_Pool: ResolverTypeWrapper<bal_Pool>;
  bal_PoolContract: ResolverTypeWrapper<bal_PoolContract>;
  bal_PoolContract_filter: bal_PoolContract_filter;
  bal_PoolContract_orderBy: bal_PoolContract_orderBy;
  bal_PoolHistoricalLiquidity: ResolverTypeWrapper<bal_PoolHistoricalLiquidity>;
  bal_PoolHistoricalLiquidity_filter: bal_PoolHistoricalLiquidity_filter;
  bal_PoolHistoricalLiquidity_orderBy: bal_PoolHistoricalLiquidity_orderBy;
  bal_PoolShare: ResolverTypeWrapper<bal_PoolShare>;
  bal_PoolShare_filter: bal_PoolShare_filter;
  bal_PoolShare_orderBy: bal_PoolShare_orderBy;
  bal_PoolSnapshot: ResolverTypeWrapper<bal_PoolSnapshot>;
  bal_PoolSnapshot_filter: bal_PoolSnapshot_filter;
  bal_PoolSnapshot_orderBy: bal_PoolSnapshot_orderBy;
  bal_PoolToken: ResolverTypeWrapper<bal_PoolToken>;
  bal_PoolToken_filter: bal_PoolToken_filter;
  bal_PoolToken_orderBy: bal_PoolToken_orderBy;
  bal_Pool_filter: bal_Pool_filter;
  bal_Pool_orderBy: bal_Pool_orderBy;
  bal_PriceRateProvider: ResolverTypeWrapper<bal_PriceRateProvider>;
  bal_PriceRateProvider_filter: bal_PriceRateProvider_filter;
  bal_PriceRateProvider_orderBy: bal_PriceRateProvider_orderBy;
  bal_ProtocolIdData: ResolverTypeWrapper<bal_ProtocolIdData>;
  bal_ProtocolIdData_filter: bal_ProtocolIdData_filter;
  bal_ProtocolIdData_orderBy: bal_ProtocolIdData_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  bal_Swap: ResolverTypeWrapper<bal_Swap>;
  bal_SwapFeeUpdate: ResolverTypeWrapper<bal_SwapFeeUpdate>;
  bal_SwapFeeUpdate_filter: bal_SwapFeeUpdate_filter;
  bal_SwapFeeUpdate_orderBy: bal_SwapFeeUpdate_orderBy;
  bal_Swap_filter: bal_Swap_filter;
  bal_Swap_orderBy: bal_Swap_orderBy;
  bal_Token: ResolverTypeWrapper<bal_Token>;
  bal_TokenPrice: ResolverTypeWrapper<bal_TokenPrice>;
  bal_TokenPrice_filter: bal_TokenPrice_filter;
  bal_TokenPrice_orderBy: bal_TokenPrice_orderBy;
  bal_TokenSnapshot: ResolverTypeWrapper<bal_TokenSnapshot>;
  bal_TokenSnapshot_filter: bal_TokenSnapshot_filter;
  bal_TokenSnapshot_orderBy: bal_TokenSnapshot_orderBy;
  bal_Token_filter: bal_Token_filter;
  bal_Token_orderBy: bal_Token_orderBy;
  bal_TradePair: ResolverTypeWrapper<bal_TradePair>;
  bal_TradePairSnapshot: ResolverTypeWrapper<bal_TradePairSnapshot>;
  bal_TradePairSnapshot_filter: bal_TradePairSnapshot_filter;
  bal_TradePairSnapshot_orderBy: bal_TradePairSnapshot_orderBy;
  bal_TradePair_filter: bal_TradePair_filter;
  bal_TradePair_orderBy: bal_TradePair_orderBy;
  bal_User: ResolverTypeWrapper<bal_User>;
  bal_UserInternalBalance: ResolverTypeWrapper<bal_UserInternalBalance>;
  bal_UserInternalBalance_filter: bal_UserInternalBalance_filter;
  bal_UserInternalBalance_orderBy: bal_UserInternalBalance_orderBy;
  bal_User_filter: bal_User_filter;
  bal_User_orderBy: bal_User_orderBy;
  bal__Block_: ResolverTypeWrapper<bal__Block_>;
  bal__Meta_: ResolverTypeWrapper<bal__Meta_>;
  bal__SubgraphErrorPolicy_: bal__SubgraphErrorPolicy_;
  uni_Aggregation_interval: uni_Aggregation_interval;
  uni_BigDecimal: ResolverTypeWrapper<Scalars['uni_BigDecimal']>;
  uni_BlockChangedFilter: uni_BlockChangedFilter;
  uni_Block_height: uni_Block_height;
  uni_Bundle: ResolverTypeWrapper<uni_Bundle>;
  uni_Bundle_filter: uni_Bundle_filter;
  uni_Bundle_orderBy: uni_Bundle_orderBy;
  uni_Burn: ResolverTypeWrapper<uni_Burn>;
  uni_Burn_filter: uni_Burn_filter;
  uni_Burn_orderBy: uni_Burn_orderBy;
  uni_Bytes: ResolverTypeWrapper<Scalars['uni_Bytes']>;
  uni_Collect: ResolverTypeWrapper<uni_Collect>;
  uni_Collect_filter: uni_Collect_filter;
  uni_Collect_orderBy: uni_Collect_orderBy;
  uni_Factory: ResolverTypeWrapper<uni_Factory>;
  uni_Factory_filter: uni_Factory_filter;
  uni_Factory_orderBy: uni_Factory_orderBy;
  uni_Flash: ResolverTypeWrapper<uni_Flash>;
  uni_Flash_filter: uni_Flash_filter;
  uni_Flash_orderBy: uni_Flash_orderBy;
  uni_Int8: ResolverTypeWrapper<Scalars['uni_Int8']>;
  uni_Mint: ResolverTypeWrapper<uni_Mint>;
  uni_Mint_filter: uni_Mint_filter;
  uni_Mint_orderBy: uni_Mint_orderBy;
  uni_OrderDirection: uni_OrderDirection;
  uni_Pool: ResolverTypeWrapper<uni_Pool>;
  uni_PoolDayData: ResolverTypeWrapper<uni_PoolDayData>;
  uni_PoolDayData_filter: uni_PoolDayData_filter;
  uni_PoolDayData_orderBy: uni_PoolDayData_orderBy;
  uni_PoolHourData: ResolverTypeWrapper<uni_PoolHourData>;
  uni_PoolHourData_filter: uni_PoolHourData_filter;
  uni_PoolHourData_orderBy: uni_PoolHourData_orderBy;
  uni_Pool_filter: uni_Pool_filter;
  uni_Pool_orderBy: uni_Pool_orderBy;
  uni_Position: ResolverTypeWrapper<uni_Position>;
  uni_PositionSnapshot: ResolverTypeWrapper<uni_PositionSnapshot>;
  uni_PositionSnapshot_filter: uni_PositionSnapshot_filter;
  uni_PositionSnapshot_orderBy: uni_PositionSnapshot_orderBy;
  uni_Position_filter: uni_Position_filter;
  uni_Position_orderBy: uni_Position_orderBy;
  uni_Swap: ResolverTypeWrapper<uni_Swap>;
  uni_Swap_filter: uni_Swap_filter;
  uni_Swap_orderBy: uni_Swap_orderBy;
  uni_Tick: ResolverTypeWrapper<uni_Tick>;
  uni_TickDayData: ResolverTypeWrapper<uni_TickDayData>;
  uni_TickDayData_filter: uni_TickDayData_filter;
  uni_TickDayData_orderBy: uni_TickDayData_orderBy;
  uni_TickHourData: ResolverTypeWrapper<uni_TickHourData>;
  uni_TickHourData_filter: uni_TickHourData_filter;
  uni_TickHourData_orderBy: uni_TickHourData_orderBy;
  uni_Tick_filter: uni_Tick_filter;
  uni_Tick_orderBy: uni_Tick_orderBy;
  uni_Token: ResolverTypeWrapper<uni_Token>;
  uni_TokenDayData: ResolverTypeWrapper<uni_TokenDayData>;
  uni_TokenDayData_filter: uni_TokenDayData_filter;
  uni_TokenDayData_orderBy: uni_TokenDayData_orderBy;
  uni_TokenHourData: ResolverTypeWrapper<uni_TokenHourData>;
  uni_TokenHourData_filter: uni_TokenHourData_filter;
  uni_TokenHourData_orderBy: uni_TokenHourData_orderBy;
  uni_Token_filter: uni_Token_filter;
  uni_Token_orderBy: uni_Token_orderBy;
  uni_Transaction: ResolverTypeWrapper<uni_Transaction>;
  uni_Transaction_filter: uni_Transaction_filter;
  uni_Transaction_orderBy: uni_Transaction_orderBy;
  uni_UniswapDayData: ResolverTypeWrapper<uni_UniswapDayData>;
  uni_UniswapDayData_filter: uni_UniswapDayData_filter;
  uni_UniswapDayData_orderBy: uni_UniswapDayData_orderBy;
  uni__Block_: ResolverTypeWrapper<uni__Block_>;
  uni__Meta_: ResolverTypeWrapper<uni__Meta_>;
  uni__SubgraphErrorPolicy_: uni__SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  bal_AmpUpdate: bal_AmpUpdate;
  bal_AmpUpdate_filter: bal_AmpUpdate_filter;
  bal_Balancer: bal_Balancer;
  bal_BalancerSnapshot: bal_BalancerSnapshot;
  bal_BalancerSnapshot_filter: bal_BalancerSnapshot_filter;
  bal_Balancer_filter: bal_Balancer_filter;
  bal_BigDecimal: Scalars['bal_BigDecimal'];
  BigInt: Scalars['BigInt'];
  bal_BlockChangedFilter: bal_BlockChangedFilter;
  bal_Block_height: bal_Block_height;
  Boolean: Scalars['Boolean'];
  bal_Bytes: Scalars['bal_Bytes'];
  bal_CircuitBreaker: bal_CircuitBreaker;
  bal_CircuitBreaker_filter: bal_CircuitBreaker_filter;
  bal_FXOracle: bal_FXOracle;
  bal_FXOracle_filter: bal_FXOracle_filter;
  Float: Scalars['Float'];
  bal_GradualWeightUpdate: bal_GradualWeightUpdate;
  bal_GradualWeightUpdate_filter: bal_GradualWeightUpdate_filter;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  bal_Int8: Scalars['bal_Int8'];
  bal_JoinExit: bal_JoinExit;
  bal_JoinExit_filter: bal_JoinExit_filter;
  bal_LatestPrice: bal_LatestPrice;
  bal_LatestPrice_filter: bal_LatestPrice_filter;
  bal_ManagementOperation: bal_ManagementOperation;
  bal_ManagementOperation_filter: bal_ManagementOperation_filter;
  bal_Pool: bal_Pool;
  bal_PoolContract: bal_PoolContract;
  bal_PoolContract_filter: bal_PoolContract_filter;
  bal_PoolHistoricalLiquidity: bal_PoolHistoricalLiquidity;
  bal_PoolHistoricalLiquidity_filter: bal_PoolHistoricalLiquidity_filter;
  bal_PoolShare: bal_PoolShare;
  bal_PoolShare_filter: bal_PoolShare_filter;
  bal_PoolSnapshot: bal_PoolSnapshot;
  bal_PoolSnapshot_filter: bal_PoolSnapshot_filter;
  bal_PoolToken: bal_PoolToken;
  bal_PoolToken_filter: bal_PoolToken_filter;
  bal_Pool_filter: bal_Pool_filter;
  bal_PriceRateProvider: bal_PriceRateProvider;
  bal_PriceRateProvider_filter: bal_PriceRateProvider_filter;
  bal_ProtocolIdData: bal_ProtocolIdData;
  bal_ProtocolIdData_filter: bal_ProtocolIdData_filter;
  String: Scalars['String'];
  bal_Swap: bal_Swap;
  bal_SwapFeeUpdate: bal_SwapFeeUpdate;
  bal_SwapFeeUpdate_filter: bal_SwapFeeUpdate_filter;
  bal_Swap_filter: bal_Swap_filter;
  bal_Token: bal_Token;
  bal_TokenPrice: bal_TokenPrice;
  bal_TokenPrice_filter: bal_TokenPrice_filter;
  bal_TokenSnapshot: bal_TokenSnapshot;
  bal_TokenSnapshot_filter: bal_TokenSnapshot_filter;
  bal_Token_filter: bal_Token_filter;
  bal_TradePair: bal_TradePair;
  bal_TradePairSnapshot: bal_TradePairSnapshot;
  bal_TradePairSnapshot_filter: bal_TradePairSnapshot_filter;
  bal_TradePair_filter: bal_TradePair_filter;
  bal_User: bal_User;
  bal_UserInternalBalance: bal_UserInternalBalance;
  bal_UserInternalBalance_filter: bal_UserInternalBalance_filter;
  bal_User_filter: bal_User_filter;
  bal__Block_: bal__Block_;
  bal__Meta_: bal__Meta_;
  uni_BigDecimal: Scalars['uni_BigDecimal'];
  uni_BlockChangedFilter: uni_BlockChangedFilter;
  uni_Block_height: uni_Block_height;
  uni_Bundle: uni_Bundle;
  uni_Bundle_filter: uni_Bundle_filter;
  uni_Burn: uni_Burn;
  uni_Burn_filter: uni_Burn_filter;
  uni_Bytes: Scalars['uni_Bytes'];
  uni_Collect: uni_Collect;
  uni_Collect_filter: uni_Collect_filter;
  uni_Factory: uni_Factory;
  uni_Factory_filter: uni_Factory_filter;
  uni_Flash: uni_Flash;
  uni_Flash_filter: uni_Flash_filter;
  uni_Int8: Scalars['uni_Int8'];
  uni_Mint: uni_Mint;
  uni_Mint_filter: uni_Mint_filter;
  uni_Pool: uni_Pool;
  uni_PoolDayData: uni_PoolDayData;
  uni_PoolDayData_filter: uni_PoolDayData_filter;
  uni_PoolHourData: uni_PoolHourData;
  uni_PoolHourData_filter: uni_PoolHourData_filter;
  uni_Pool_filter: uni_Pool_filter;
  uni_Position: uni_Position;
  uni_PositionSnapshot: uni_PositionSnapshot;
  uni_PositionSnapshot_filter: uni_PositionSnapshot_filter;
  uni_Position_filter: uni_Position_filter;
  uni_Swap: uni_Swap;
  uni_Swap_filter: uni_Swap_filter;
  uni_Tick: uni_Tick;
  uni_TickDayData: uni_TickDayData;
  uni_TickDayData_filter: uni_TickDayData_filter;
  uni_TickHourData: uni_TickHourData;
  uni_TickHourData_filter: uni_TickHourData_filter;
  uni_Tick_filter: uni_Tick_filter;
  uni_Token: uni_Token;
  uni_TokenDayData: uni_TokenDayData;
  uni_TokenDayData_filter: uni_TokenDayData_filter;
  uni_TokenHourData: uni_TokenHourData;
  uni_TokenHourData_filter: uni_TokenHourData_filter;
  uni_Token_filter: uni_Token_filter;
  uni_Transaction: uni_Transaction;
  uni_Transaction_filter: uni_Transaction_filter;
  uni_UniswapDayData: uni_UniswapDayData;
  uni_UniswapDayData_filter: uni_UniswapDayData_filter;
  uni__Block_: uni__Block_;
  uni__Meta_: uni__Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  bal_balancer?: Resolver<Maybe<ResolversTypes['bal_Balancer']>, ParentType, ContextType, RequireFields<Querybal_balancerArgs, 'id' | 'subgraphError'>>;
  bal_balancers?: Resolver<Array<ResolversTypes['bal_Balancer']>, ParentType, ContextType, RequireFields<Querybal_balancersArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_pool?: Resolver<Maybe<ResolversTypes['bal_Pool']>, ParentType, ContextType, RequireFields<Querybal_poolArgs, 'id' | 'subgraphError'>>;
  bal_pools?: Resolver<Array<ResolversTypes['bal_Pool']>, ParentType, ContextType, RequireFields<Querybal_poolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_poolContract?: Resolver<Maybe<ResolversTypes['bal_PoolContract']>, ParentType, ContextType, RequireFields<Querybal_poolContractArgs, 'id' | 'subgraphError'>>;
  bal_poolContracts?: Resolver<Array<ResolversTypes['bal_PoolContract']>, ParentType, ContextType, RequireFields<Querybal_poolContractsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_poolToken?: Resolver<Maybe<ResolversTypes['bal_PoolToken']>, ParentType, ContextType, RequireFields<Querybal_poolTokenArgs, 'id' | 'subgraphError'>>;
  bal_poolTokens?: Resolver<Array<ResolversTypes['bal_PoolToken']>, ParentType, ContextType, RequireFields<Querybal_poolTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_priceRateProvider?: Resolver<Maybe<ResolversTypes['bal_PriceRateProvider']>, ParentType, ContextType, RequireFields<Querybal_priceRateProviderArgs, 'id' | 'subgraphError'>>;
  bal_priceRateProviders?: Resolver<Array<ResolversTypes['bal_PriceRateProvider']>, ParentType, ContextType, RequireFields<Querybal_priceRateProvidersArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_circuitBreaker?: Resolver<Maybe<ResolversTypes['bal_CircuitBreaker']>, ParentType, ContextType, RequireFields<Querybal_circuitBreakerArgs, 'id' | 'subgraphError'>>;
  bal_circuitBreakers?: Resolver<Array<ResolversTypes['bal_CircuitBreaker']>, ParentType, ContextType, RequireFields<Querybal_circuitBreakersArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_poolShare?: Resolver<Maybe<ResolversTypes['bal_PoolShare']>, ParentType, ContextType, RequireFields<Querybal_poolShareArgs, 'id' | 'subgraphError'>>;
  bal_poolShares?: Resolver<Array<ResolversTypes['bal_PoolShare']>, ParentType, ContextType, RequireFields<Querybal_poolSharesArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_user?: Resolver<Maybe<ResolversTypes['bal_User']>, ParentType, ContextType, RequireFields<Querybal_userArgs, 'id' | 'subgraphError'>>;
  bal_users?: Resolver<Array<ResolversTypes['bal_User']>, ParentType, ContextType, RequireFields<Querybal_usersArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_userInternalBalance?: Resolver<Maybe<ResolversTypes['bal_UserInternalBalance']>, ParentType, ContextType, RequireFields<Querybal_userInternalBalanceArgs, 'id' | 'subgraphError'>>;
  bal_userInternalBalances?: Resolver<Array<ResolversTypes['bal_UserInternalBalance']>, ParentType, ContextType, RequireFields<Querybal_userInternalBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_gradualWeightUpdate?: Resolver<Maybe<ResolversTypes['bal_GradualWeightUpdate']>, ParentType, ContextType, RequireFields<Querybal_gradualWeightUpdateArgs, 'id' | 'subgraphError'>>;
  bal_gradualWeightUpdates?: Resolver<Array<ResolversTypes['bal_GradualWeightUpdate']>, ParentType, ContextType, RequireFields<Querybal_gradualWeightUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_ampUpdate?: Resolver<Maybe<ResolversTypes['bal_AmpUpdate']>, ParentType, ContextType, RequireFields<Querybal_ampUpdateArgs, 'id' | 'subgraphError'>>;
  bal_ampUpdates?: Resolver<Array<ResolversTypes['bal_AmpUpdate']>, ParentType, ContextType, RequireFields<Querybal_ampUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_swapFeeUpdate?: Resolver<Maybe<ResolversTypes['bal_SwapFeeUpdate']>, ParentType, ContextType, RequireFields<Querybal_swapFeeUpdateArgs, 'id' | 'subgraphError'>>;
  bal_swapFeeUpdates?: Resolver<Array<ResolversTypes['bal_SwapFeeUpdate']>, ParentType, ContextType, RequireFields<Querybal_swapFeeUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_swap?: Resolver<Maybe<ResolversTypes['bal_Swap']>, ParentType, ContextType, RequireFields<Querybal_swapArgs, 'id' | 'subgraphError'>>;
  bal_swaps?: Resolver<Array<ResolversTypes['bal_Swap']>, ParentType, ContextType, RequireFields<Querybal_swapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_joinExit?: Resolver<Maybe<ResolversTypes['bal_JoinExit']>, ParentType, ContextType, RequireFields<Querybal_joinExitArgs, 'id' | 'subgraphError'>>;
  bal_joinExits?: Resolver<Array<ResolversTypes['bal_JoinExit']>, ParentType, ContextType, RequireFields<Querybal_joinExitsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_latestPrice?: Resolver<Maybe<ResolversTypes['bal_LatestPrice']>, ParentType, ContextType, RequireFields<Querybal_latestPriceArgs, 'id' | 'subgraphError'>>;
  bal_latestPrices?: Resolver<Array<ResolversTypes['bal_LatestPrice']>, ParentType, ContextType, RequireFields<Querybal_latestPricesArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_poolHistoricalLiquidity?: Resolver<Maybe<ResolversTypes['bal_PoolHistoricalLiquidity']>, ParentType, ContextType, RequireFields<Querybal_poolHistoricalLiquidityArgs, 'id' | 'subgraphError'>>;
  bal_poolHistoricalLiquidities?: Resolver<Array<ResolversTypes['bal_PoolHistoricalLiquidity']>, ParentType, ContextType, RequireFields<Querybal_poolHistoricalLiquiditiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_tokenPrice?: Resolver<Maybe<ResolversTypes['bal_TokenPrice']>, ParentType, ContextType, RequireFields<Querybal_tokenPriceArgs, 'id' | 'subgraphError'>>;
  bal_tokenPrices?: Resolver<Array<ResolversTypes['bal_TokenPrice']>, ParentType, ContextType, RequireFields<Querybal_tokenPricesArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_managementOperation?: Resolver<Maybe<ResolversTypes['bal_ManagementOperation']>, ParentType, ContextType, RequireFields<Querybal_managementOperationArgs, 'id' | 'subgraphError'>>;
  bal_managementOperations?: Resolver<Array<ResolversTypes['bal_ManagementOperation']>, ParentType, ContextType, RequireFields<Querybal_managementOperationsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_poolSnapshot?: Resolver<Maybe<ResolversTypes['bal_PoolSnapshot']>, ParentType, ContextType, RequireFields<Querybal_poolSnapshotArgs, 'id' | 'subgraphError'>>;
  bal_poolSnapshots?: Resolver<Array<ResolversTypes['bal_PoolSnapshot']>, ParentType, ContextType, RequireFields<Querybal_poolSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_token?: Resolver<Maybe<ResolversTypes['bal_Token']>, ParentType, ContextType, RequireFields<Querybal_tokenArgs, 'id' | 'subgraphError'>>;
  bal_tokens?: Resolver<Array<ResolversTypes['bal_Token']>, ParentType, ContextType, RequireFields<Querybal_tokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_tokenSnapshot?: Resolver<Maybe<ResolversTypes['bal_TokenSnapshot']>, ParentType, ContextType, RequireFields<Querybal_tokenSnapshotArgs, 'id' | 'subgraphError'>>;
  bal_tokenSnapshots?: Resolver<Array<ResolversTypes['bal_TokenSnapshot']>, ParentType, ContextType, RequireFields<Querybal_tokenSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_tradePair?: Resolver<Maybe<ResolversTypes['bal_TradePair']>, ParentType, ContextType, RequireFields<Querybal_tradePairArgs, 'id' | 'subgraphError'>>;
  bal_tradePairs?: Resolver<Array<ResolversTypes['bal_TradePair']>, ParentType, ContextType, RequireFields<Querybal_tradePairsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_tradePairSnapshot?: Resolver<Maybe<ResolversTypes['bal_TradePairSnapshot']>, ParentType, ContextType, RequireFields<Querybal_tradePairSnapshotArgs, 'id' | 'subgraphError'>>;
  bal_tradePairSnapshots?: Resolver<Array<ResolversTypes['bal_TradePairSnapshot']>, ParentType, ContextType, RequireFields<Querybal_tradePairSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_balancerSnapshot?: Resolver<Maybe<ResolversTypes['bal_BalancerSnapshot']>, ParentType, ContextType, RequireFields<Querybal_balancerSnapshotArgs, 'id' | 'subgraphError'>>;
  bal_balancerSnapshots?: Resolver<Array<ResolversTypes['bal_BalancerSnapshot']>, ParentType, ContextType, RequireFields<Querybal_balancerSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_protocolIdData?: Resolver<Maybe<ResolversTypes['bal_ProtocolIdData']>, ParentType, ContextType, RequireFields<Querybal_protocolIdDataArgs, 'id' | 'subgraphError'>>;
  bal_protocolIdDatas?: Resolver<Array<ResolversTypes['bal_ProtocolIdData']>, ParentType, ContextType, RequireFields<Querybal_protocolIdDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_fxoracle?: Resolver<Maybe<ResolversTypes['bal_FXOracle']>, ParentType, ContextType, RequireFields<Querybal_fxoracleArgs, 'id' | 'subgraphError'>>;
  bal_fxoracles?: Resolver<Array<ResolversTypes['bal_FXOracle']>, ParentType, ContextType, RequireFields<Querybal_fxoraclesArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal__meta?: Resolver<Maybe<ResolversTypes['bal__Meta_']>, ParentType, ContextType, Partial<Querybal__metaArgs>>;
  uni_factory?: Resolver<Maybe<ResolversTypes['uni_Factory']>, ParentType, ContextType, RequireFields<Queryuni_factoryArgs, 'id' | 'subgraphError'>>;
  uni_factories?: Resolver<Array<ResolversTypes['uni_Factory']>, ParentType, ContextType, RequireFields<Queryuni_factoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_bundle?: Resolver<Maybe<ResolversTypes['uni_Bundle']>, ParentType, ContextType, RequireFields<Queryuni_bundleArgs, 'id' | 'subgraphError'>>;
  uni_bundles?: Resolver<Array<ResolversTypes['uni_Bundle']>, ParentType, ContextType, RequireFields<Queryuni_bundlesArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_token?: Resolver<Maybe<ResolversTypes['uni_Token']>, ParentType, ContextType, RequireFields<Queryuni_tokenArgs, 'id' | 'subgraphError'>>;
  uni_tokens?: Resolver<Array<ResolversTypes['uni_Token']>, ParentType, ContextType, RequireFields<Queryuni_tokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_pool?: Resolver<Maybe<ResolversTypes['uni_Pool']>, ParentType, ContextType, RequireFields<Queryuni_poolArgs, 'id' | 'subgraphError'>>;
  uni_pools?: Resolver<Array<ResolversTypes['uni_Pool']>, ParentType, ContextType, RequireFields<Queryuni_poolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_tick?: Resolver<Maybe<ResolversTypes['uni_Tick']>, ParentType, ContextType, RequireFields<Queryuni_tickArgs, 'id' | 'subgraphError'>>;
  uni_ticks?: Resolver<Array<ResolversTypes['uni_Tick']>, ParentType, ContextType, RequireFields<Queryuni_ticksArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_position?: Resolver<Maybe<ResolversTypes['uni_Position']>, ParentType, ContextType, RequireFields<Queryuni_positionArgs, 'id' | 'subgraphError'>>;
  uni_positions?: Resolver<Array<ResolversTypes['uni_Position']>, ParentType, ContextType, RequireFields<Queryuni_positionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_positionSnapshot?: Resolver<Maybe<ResolversTypes['uni_PositionSnapshot']>, ParentType, ContextType, RequireFields<Queryuni_positionSnapshotArgs, 'id' | 'subgraphError'>>;
  uni_positionSnapshots?: Resolver<Array<ResolversTypes['uni_PositionSnapshot']>, ParentType, ContextType, RequireFields<Queryuni_positionSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_transaction?: Resolver<Maybe<ResolversTypes['uni_Transaction']>, ParentType, ContextType, RequireFields<Queryuni_transactionArgs, 'id' | 'subgraphError'>>;
  uni_transactions?: Resolver<Array<ResolversTypes['uni_Transaction']>, ParentType, ContextType, RequireFields<Queryuni_transactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_mint?: Resolver<Maybe<ResolversTypes['uni_Mint']>, ParentType, ContextType, RequireFields<Queryuni_mintArgs, 'id' | 'subgraphError'>>;
  uni_mints?: Resolver<Array<ResolversTypes['uni_Mint']>, ParentType, ContextType, RequireFields<Queryuni_mintsArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_burn?: Resolver<Maybe<ResolversTypes['uni_Burn']>, ParentType, ContextType, RequireFields<Queryuni_burnArgs, 'id' | 'subgraphError'>>;
  uni_burns?: Resolver<Array<ResolversTypes['uni_Burn']>, ParentType, ContextType, RequireFields<Queryuni_burnsArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_swap?: Resolver<Maybe<ResolversTypes['uni_Swap']>, ParentType, ContextType, RequireFields<Queryuni_swapArgs, 'id' | 'subgraphError'>>;
  uni_swaps?: Resolver<Array<ResolversTypes['uni_Swap']>, ParentType, ContextType, RequireFields<Queryuni_swapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_collect?: Resolver<Maybe<ResolversTypes['uni_Collect']>, ParentType, ContextType, RequireFields<Queryuni_collectArgs, 'id' | 'subgraphError'>>;
  uni_collects?: Resolver<Array<ResolversTypes['uni_Collect']>, ParentType, ContextType, RequireFields<Queryuni_collectsArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_flash?: Resolver<Maybe<ResolversTypes['uni_Flash']>, ParentType, ContextType, RequireFields<Queryuni_flashArgs, 'id' | 'subgraphError'>>;
  uni_flashes?: Resolver<Array<ResolversTypes['uni_Flash']>, ParentType, ContextType, RequireFields<Queryuni_flashesArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_uniswapDayData?: Resolver<Maybe<ResolversTypes['uni_UniswapDayData']>, ParentType, ContextType, RequireFields<Queryuni_uniswapDayDataArgs, 'id' | 'subgraphError'>>;
  uni_uniswapDayDatas?: Resolver<Array<ResolversTypes['uni_UniswapDayData']>, ParentType, ContextType, RequireFields<Queryuni_uniswapDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_poolDayData?: Resolver<Maybe<ResolversTypes['uni_PoolDayData']>, ParentType, ContextType, RequireFields<Queryuni_poolDayDataArgs, 'id' | 'subgraphError'>>;
  uni_poolDayDatas?: Resolver<Array<ResolversTypes['uni_PoolDayData']>, ParentType, ContextType, RequireFields<Queryuni_poolDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_poolHourData?: Resolver<Maybe<ResolversTypes['uni_PoolHourData']>, ParentType, ContextType, RequireFields<Queryuni_poolHourDataArgs, 'id' | 'subgraphError'>>;
  uni_poolHourDatas?: Resolver<Array<ResolversTypes['uni_PoolHourData']>, ParentType, ContextType, RequireFields<Queryuni_poolHourDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_tickHourData?: Resolver<Maybe<ResolversTypes['uni_TickHourData']>, ParentType, ContextType, RequireFields<Queryuni_tickHourDataArgs, 'id' | 'subgraphError'>>;
  uni_tickHourDatas?: Resolver<Array<ResolversTypes['uni_TickHourData']>, ParentType, ContextType, RequireFields<Queryuni_tickHourDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_tickDayData?: Resolver<Maybe<ResolversTypes['uni_TickDayData']>, ParentType, ContextType, RequireFields<Queryuni_tickDayDataArgs, 'id' | 'subgraphError'>>;
  uni_tickDayDatas?: Resolver<Array<ResolversTypes['uni_TickDayData']>, ParentType, ContextType, RequireFields<Queryuni_tickDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_tokenDayData?: Resolver<Maybe<ResolversTypes['uni_TokenDayData']>, ParentType, ContextType, RequireFields<Queryuni_tokenDayDataArgs, 'id' | 'subgraphError'>>;
  uni_tokenDayDatas?: Resolver<Array<ResolversTypes['uni_TokenDayData']>, ParentType, ContextType, RequireFields<Queryuni_tokenDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_tokenHourData?: Resolver<Maybe<ResolversTypes['uni_TokenHourData']>, ParentType, ContextType, RequireFields<Queryuni_tokenHourDataArgs, 'id' | 'subgraphError'>>;
  uni_tokenHourDatas?: Resolver<Array<ResolversTypes['uni_TokenHourData']>, ParentType, ContextType, RequireFields<Queryuni_tokenHourDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni__meta?: Resolver<Maybe<ResolversTypes['uni__Meta_']>, ParentType, ContextType, Partial<Queryuni__metaArgs>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  bal_balancer?: SubscriptionResolver<Maybe<ResolversTypes['bal_Balancer']>, "bal_balancer", ParentType, ContextType, RequireFields<Subscriptionbal_balancerArgs, 'id' | 'subgraphError'>>;
  bal_balancers?: SubscriptionResolver<Array<ResolversTypes['bal_Balancer']>, "bal_balancers", ParentType, ContextType, RequireFields<Subscriptionbal_balancersArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_pool?: SubscriptionResolver<Maybe<ResolversTypes['bal_Pool']>, "bal_pool", ParentType, ContextType, RequireFields<Subscriptionbal_poolArgs, 'id' | 'subgraphError'>>;
  bal_pools?: SubscriptionResolver<Array<ResolversTypes['bal_Pool']>, "bal_pools", ParentType, ContextType, RequireFields<Subscriptionbal_poolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_poolContract?: SubscriptionResolver<Maybe<ResolversTypes['bal_PoolContract']>, "bal_poolContract", ParentType, ContextType, RequireFields<Subscriptionbal_poolContractArgs, 'id' | 'subgraphError'>>;
  bal_poolContracts?: SubscriptionResolver<Array<ResolversTypes['bal_PoolContract']>, "bal_poolContracts", ParentType, ContextType, RequireFields<Subscriptionbal_poolContractsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_poolToken?: SubscriptionResolver<Maybe<ResolversTypes['bal_PoolToken']>, "bal_poolToken", ParentType, ContextType, RequireFields<Subscriptionbal_poolTokenArgs, 'id' | 'subgraphError'>>;
  bal_poolTokens?: SubscriptionResolver<Array<ResolversTypes['bal_PoolToken']>, "bal_poolTokens", ParentType, ContextType, RequireFields<Subscriptionbal_poolTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_priceRateProvider?: SubscriptionResolver<Maybe<ResolversTypes['bal_PriceRateProvider']>, "bal_priceRateProvider", ParentType, ContextType, RequireFields<Subscriptionbal_priceRateProviderArgs, 'id' | 'subgraphError'>>;
  bal_priceRateProviders?: SubscriptionResolver<Array<ResolversTypes['bal_PriceRateProvider']>, "bal_priceRateProviders", ParentType, ContextType, RequireFields<Subscriptionbal_priceRateProvidersArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_circuitBreaker?: SubscriptionResolver<Maybe<ResolversTypes['bal_CircuitBreaker']>, "bal_circuitBreaker", ParentType, ContextType, RequireFields<Subscriptionbal_circuitBreakerArgs, 'id' | 'subgraphError'>>;
  bal_circuitBreakers?: SubscriptionResolver<Array<ResolversTypes['bal_CircuitBreaker']>, "bal_circuitBreakers", ParentType, ContextType, RequireFields<Subscriptionbal_circuitBreakersArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_poolShare?: SubscriptionResolver<Maybe<ResolversTypes['bal_PoolShare']>, "bal_poolShare", ParentType, ContextType, RequireFields<Subscriptionbal_poolShareArgs, 'id' | 'subgraphError'>>;
  bal_poolShares?: SubscriptionResolver<Array<ResolversTypes['bal_PoolShare']>, "bal_poolShares", ParentType, ContextType, RequireFields<Subscriptionbal_poolSharesArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_user?: SubscriptionResolver<Maybe<ResolversTypes['bal_User']>, "bal_user", ParentType, ContextType, RequireFields<Subscriptionbal_userArgs, 'id' | 'subgraphError'>>;
  bal_users?: SubscriptionResolver<Array<ResolversTypes['bal_User']>, "bal_users", ParentType, ContextType, RequireFields<Subscriptionbal_usersArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_userInternalBalance?: SubscriptionResolver<Maybe<ResolversTypes['bal_UserInternalBalance']>, "bal_userInternalBalance", ParentType, ContextType, RequireFields<Subscriptionbal_userInternalBalanceArgs, 'id' | 'subgraphError'>>;
  bal_userInternalBalances?: SubscriptionResolver<Array<ResolversTypes['bal_UserInternalBalance']>, "bal_userInternalBalances", ParentType, ContextType, RequireFields<Subscriptionbal_userInternalBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_gradualWeightUpdate?: SubscriptionResolver<Maybe<ResolversTypes['bal_GradualWeightUpdate']>, "bal_gradualWeightUpdate", ParentType, ContextType, RequireFields<Subscriptionbal_gradualWeightUpdateArgs, 'id' | 'subgraphError'>>;
  bal_gradualWeightUpdates?: SubscriptionResolver<Array<ResolversTypes['bal_GradualWeightUpdate']>, "bal_gradualWeightUpdates", ParentType, ContextType, RequireFields<Subscriptionbal_gradualWeightUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_ampUpdate?: SubscriptionResolver<Maybe<ResolversTypes['bal_AmpUpdate']>, "bal_ampUpdate", ParentType, ContextType, RequireFields<Subscriptionbal_ampUpdateArgs, 'id' | 'subgraphError'>>;
  bal_ampUpdates?: SubscriptionResolver<Array<ResolversTypes['bal_AmpUpdate']>, "bal_ampUpdates", ParentType, ContextType, RequireFields<Subscriptionbal_ampUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_swapFeeUpdate?: SubscriptionResolver<Maybe<ResolversTypes['bal_SwapFeeUpdate']>, "bal_swapFeeUpdate", ParentType, ContextType, RequireFields<Subscriptionbal_swapFeeUpdateArgs, 'id' | 'subgraphError'>>;
  bal_swapFeeUpdates?: SubscriptionResolver<Array<ResolversTypes['bal_SwapFeeUpdate']>, "bal_swapFeeUpdates", ParentType, ContextType, RequireFields<Subscriptionbal_swapFeeUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_swap?: SubscriptionResolver<Maybe<ResolversTypes['bal_Swap']>, "bal_swap", ParentType, ContextType, RequireFields<Subscriptionbal_swapArgs, 'id' | 'subgraphError'>>;
  bal_swaps?: SubscriptionResolver<Array<ResolversTypes['bal_Swap']>, "bal_swaps", ParentType, ContextType, RequireFields<Subscriptionbal_swapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_joinExit?: SubscriptionResolver<Maybe<ResolversTypes['bal_JoinExit']>, "bal_joinExit", ParentType, ContextType, RequireFields<Subscriptionbal_joinExitArgs, 'id' | 'subgraphError'>>;
  bal_joinExits?: SubscriptionResolver<Array<ResolversTypes['bal_JoinExit']>, "bal_joinExits", ParentType, ContextType, RequireFields<Subscriptionbal_joinExitsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_latestPrice?: SubscriptionResolver<Maybe<ResolversTypes['bal_LatestPrice']>, "bal_latestPrice", ParentType, ContextType, RequireFields<Subscriptionbal_latestPriceArgs, 'id' | 'subgraphError'>>;
  bal_latestPrices?: SubscriptionResolver<Array<ResolversTypes['bal_LatestPrice']>, "bal_latestPrices", ParentType, ContextType, RequireFields<Subscriptionbal_latestPricesArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_poolHistoricalLiquidity?: SubscriptionResolver<Maybe<ResolversTypes['bal_PoolHistoricalLiquidity']>, "bal_poolHistoricalLiquidity", ParentType, ContextType, RequireFields<Subscriptionbal_poolHistoricalLiquidityArgs, 'id' | 'subgraphError'>>;
  bal_poolHistoricalLiquidities?: SubscriptionResolver<Array<ResolversTypes['bal_PoolHistoricalLiquidity']>, "bal_poolHistoricalLiquidities", ParentType, ContextType, RequireFields<Subscriptionbal_poolHistoricalLiquiditiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_tokenPrice?: SubscriptionResolver<Maybe<ResolversTypes['bal_TokenPrice']>, "bal_tokenPrice", ParentType, ContextType, RequireFields<Subscriptionbal_tokenPriceArgs, 'id' | 'subgraphError'>>;
  bal_tokenPrices?: SubscriptionResolver<Array<ResolversTypes['bal_TokenPrice']>, "bal_tokenPrices", ParentType, ContextType, RequireFields<Subscriptionbal_tokenPricesArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_managementOperation?: SubscriptionResolver<Maybe<ResolversTypes['bal_ManagementOperation']>, "bal_managementOperation", ParentType, ContextType, RequireFields<Subscriptionbal_managementOperationArgs, 'id' | 'subgraphError'>>;
  bal_managementOperations?: SubscriptionResolver<Array<ResolversTypes['bal_ManagementOperation']>, "bal_managementOperations", ParentType, ContextType, RequireFields<Subscriptionbal_managementOperationsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_poolSnapshot?: SubscriptionResolver<Maybe<ResolversTypes['bal_PoolSnapshot']>, "bal_poolSnapshot", ParentType, ContextType, RequireFields<Subscriptionbal_poolSnapshotArgs, 'id' | 'subgraphError'>>;
  bal_poolSnapshots?: SubscriptionResolver<Array<ResolversTypes['bal_PoolSnapshot']>, "bal_poolSnapshots", ParentType, ContextType, RequireFields<Subscriptionbal_poolSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_token?: SubscriptionResolver<Maybe<ResolversTypes['bal_Token']>, "bal_token", ParentType, ContextType, RequireFields<Subscriptionbal_tokenArgs, 'id' | 'subgraphError'>>;
  bal_tokens?: SubscriptionResolver<Array<ResolversTypes['bal_Token']>, "bal_tokens", ParentType, ContextType, RequireFields<Subscriptionbal_tokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_tokenSnapshot?: SubscriptionResolver<Maybe<ResolversTypes['bal_TokenSnapshot']>, "bal_tokenSnapshot", ParentType, ContextType, RequireFields<Subscriptionbal_tokenSnapshotArgs, 'id' | 'subgraphError'>>;
  bal_tokenSnapshots?: SubscriptionResolver<Array<ResolversTypes['bal_TokenSnapshot']>, "bal_tokenSnapshots", ParentType, ContextType, RequireFields<Subscriptionbal_tokenSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_tradePair?: SubscriptionResolver<Maybe<ResolversTypes['bal_TradePair']>, "bal_tradePair", ParentType, ContextType, RequireFields<Subscriptionbal_tradePairArgs, 'id' | 'subgraphError'>>;
  bal_tradePairs?: SubscriptionResolver<Array<ResolversTypes['bal_TradePair']>, "bal_tradePairs", ParentType, ContextType, RequireFields<Subscriptionbal_tradePairsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_tradePairSnapshot?: SubscriptionResolver<Maybe<ResolversTypes['bal_TradePairSnapshot']>, "bal_tradePairSnapshot", ParentType, ContextType, RequireFields<Subscriptionbal_tradePairSnapshotArgs, 'id' | 'subgraphError'>>;
  bal_tradePairSnapshots?: SubscriptionResolver<Array<ResolversTypes['bal_TradePairSnapshot']>, "bal_tradePairSnapshots", ParentType, ContextType, RequireFields<Subscriptionbal_tradePairSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_balancerSnapshot?: SubscriptionResolver<Maybe<ResolversTypes['bal_BalancerSnapshot']>, "bal_balancerSnapshot", ParentType, ContextType, RequireFields<Subscriptionbal_balancerSnapshotArgs, 'id' | 'subgraphError'>>;
  bal_balancerSnapshots?: SubscriptionResolver<Array<ResolversTypes['bal_BalancerSnapshot']>, "bal_balancerSnapshots", ParentType, ContextType, RequireFields<Subscriptionbal_balancerSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_protocolIdData?: SubscriptionResolver<Maybe<ResolversTypes['bal_ProtocolIdData']>, "bal_protocolIdData", ParentType, ContextType, RequireFields<Subscriptionbal_protocolIdDataArgs, 'id' | 'subgraphError'>>;
  bal_protocolIdDatas?: SubscriptionResolver<Array<ResolversTypes['bal_ProtocolIdData']>, "bal_protocolIdDatas", ParentType, ContextType, RequireFields<Subscriptionbal_protocolIdDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal_fxoracle?: SubscriptionResolver<Maybe<ResolversTypes['bal_FXOracle']>, "bal_fxoracle", ParentType, ContextType, RequireFields<Subscriptionbal_fxoracleArgs, 'id' | 'subgraphError'>>;
  bal_fxoracles?: SubscriptionResolver<Array<ResolversTypes['bal_FXOracle']>, "bal_fxoracles", ParentType, ContextType, RequireFields<Subscriptionbal_fxoraclesArgs, 'skip' | 'first' | 'subgraphError'>>;
  bal__meta?: SubscriptionResolver<Maybe<ResolversTypes['bal__Meta_']>, "bal__meta", ParentType, ContextType, Partial<Subscriptionbal__metaArgs>>;
  uni_factory?: SubscriptionResolver<Maybe<ResolversTypes['uni_Factory']>, "uni_factory", ParentType, ContextType, RequireFields<Subscriptionuni_factoryArgs, 'id' | 'subgraphError'>>;
  uni_factories?: SubscriptionResolver<Array<ResolversTypes['uni_Factory']>, "uni_factories", ParentType, ContextType, RequireFields<Subscriptionuni_factoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_bundle?: SubscriptionResolver<Maybe<ResolversTypes['uni_Bundle']>, "uni_bundle", ParentType, ContextType, RequireFields<Subscriptionuni_bundleArgs, 'id' | 'subgraphError'>>;
  uni_bundles?: SubscriptionResolver<Array<ResolversTypes['uni_Bundle']>, "uni_bundles", ParentType, ContextType, RequireFields<Subscriptionuni_bundlesArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_token?: SubscriptionResolver<Maybe<ResolversTypes['uni_Token']>, "uni_token", ParentType, ContextType, RequireFields<Subscriptionuni_tokenArgs, 'id' | 'subgraphError'>>;
  uni_tokens?: SubscriptionResolver<Array<ResolversTypes['uni_Token']>, "uni_tokens", ParentType, ContextType, RequireFields<Subscriptionuni_tokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_pool?: SubscriptionResolver<Maybe<ResolversTypes['uni_Pool']>, "uni_pool", ParentType, ContextType, RequireFields<Subscriptionuni_poolArgs, 'id' | 'subgraphError'>>;
  uni_pools?: SubscriptionResolver<Array<ResolversTypes['uni_Pool']>, "uni_pools", ParentType, ContextType, RequireFields<Subscriptionuni_poolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_tick?: SubscriptionResolver<Maybe<ResolversTypes['uni_Tick']>, "uni_tick", ParentType, ContextType, RequireFields<Subscriptionuni_tickArgs, 'id' | 'subgraphError'>>;
  uni_ticks?: SubscriptionResolver<Array<ResolversTypes['uni_Tick']>, "uni_ticks", ParentType, ContextType, RequireFields<Subscriptionuni_ticksArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_position?: SubscriptionResolver<Maybe<ResolversTypes['uni_Position']>, "uni_position", ParentType, ContextType, RequireFields<Subscriptionuni_positionArgs, 'id' | 'subgraphError'>>;
  uni_positions?: SubscriptionResolver<Array<ResolversTypes['uni_Position']>, "uni_positions", ParentType, ContextType, RequireFields<Subscriptionuni_positionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_positionSnapshot?: SubscriptionResolver<Maybe<ResolversTypes['uni_PositionSnapshot']>, "uni_positionSnapshot", ParentType, ContextType, RequireFields<Subscriptionuni_positionSnapshotArgs, 'id' | 'subgraphError'>>;
  uni_positionSnapshots?: SubscriptionResolver<Array<ResolversTypes['uni_PositionSnapshot']>, "uni_positionSnapshots", ParentType, ContextType, RequireFields<Subscriptionuni_positionSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_transaction?: SubscriptionResolver<Maybe<ResolversTypes['uni_Transaction']>, "uni_transaction", ParentType, ContextType, RequireFields<Subscriptionuni_transactionArgs, 'id' | 'subgraphError'>>;
  uni_transactions?: SubscriptionResolver<Array<ResolversTypes['uni_Transaction']>, "uni_transactions", ParentType, ContextType, RequireFields<Subscriptionuni_transactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_mint?: SubscriptionResolver<Maybe<ResolversTypes['uni_Mint']>, "uni_mint", ParentType, ContextType, RequireFields<Subscriptionuni_mintArgs, 'id' | 'subgraphError'>>;
  uni_mints?: SubscriptionResolver<Array<ResolversTypes['uni_Mint']>, "uni_mints", ParentType, ContextType, RequireFields<Subscriptionuni_mintsArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_burn?: SubscriptionResolver<Maybe<ResolversTypes['uni_Burn']>, "uni_burn", ParentType, ContextType, RequireFields<Subscriptionuni_burnArgs, 'id' | 'subgraphError'>>;
  uni_burns?: SubscriptionResolver<Array<ResolversTypes['uni_Burn']>, "uni_burns", ParentType, ContextType, RequireFields<Subscriptionuni_burnsArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_swap?: SubscriptionResolver<Maybe<ResolversTypes['uni_Swap']>, "uni_swap", ParentType, ContextType, RequireFields<Subscriptionuni_swapArgs, 'id' | 'subgraphError'>>;
  uni_swaps?: SubscriptionResolver<Array<ResolversTypes['uni_Swap']>, "uni_swaps", ParentType, ContextType, RequireFields<Subscriptionuni_swapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_collect?: SubscriptionResolver<Maybe<ResolversTypes['uni_Collect']>, "uni_collect", ParentType, ContextType, RequireFields<Subscriptionuni_collectArgs, 'id' | 'subgraphError'>>;
  uni_collects?: SubscriptionResolver<Array<ResolversTypes['uni_Collect']>, "uni_collects", ParentType, ContextType, RequireFields<Subscriptionuni_collectsArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_flash?: SubscriptionResolver<Maybe<ResolversTypes['uni_Flash']>, "uni_flash", ParentType, ContextType, RequireFields<Subscriptionuni_flashArgs, 'id' | 'subgraphError'>>;
  uni_flashes?: SubscriptionResolver<Array<ResolversTypes['uni_Flash']>, "uni_flashes", ParentType, ContextType, RequireFields<Subscriptionuni_flashesArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_uniswapDayData?: SubscriptionResolver<Maybe<ResolversTypes['uni_UniswapDayData']>, "uni_uniswapDayData", ParentType, ContextType, RequireFields<Subscriptionuni_uniswapDayDataArgs, 'id' | 'subgraphError'>>;
  uni_uniswapDayDatas?: SubscriptionResolver<Array<ResolversTypes['uni_UniswapDayData']>, "uni_uniswapDayDatas", ParentType, ContextType, RequireFields<Subscriptionuni_uniswapDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_poolDayData?: SubscriptionResolver<Maybe<ResolversTypes['uni_PoolDayData']>, "uni_poolDayData", ParentType, ContextType, RequireFields<Subscriptionuni_poolDayDataArgs, 'id' | 'subgraphError'>>;
  uni_poolDayDatas?: SubscriptionResolver<Array<ResolversTypes['uni_PoolDayData']>, "uni_poolDayDatas", ParentType, ContextType, RequireFields<Subscriptionuni_poolDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_poolHourData?: SubscriptionResolver<Maybe<ResolversTypes['uni_PoolHourData']>, "uni_poolHourData", ParentType, ContextType, RequireFields<Subscriptionuni_poolHourDataArgs, 'id' | 'subgraphError'>>;
  uni_poolHourDatas?: SubscriptionResolver<Array<ResolversTypes['uni_PoolHourData']>, "uni_poolHourDatas", ParentType, ContextType, RequireFields<Subscriptionuni_poolHourDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_tickHourData?: SubscriptionResolver<Maybe<ResolversTypes['uni_TickHourData']>, "uni_tickHourData", ParentType, ContextType, RequireFields<Subscriptionuni_tickHourDataArgs, 'id' | 'subgraphError'>>;
  uni_tickHourDatas?: SubscriptionResolver<Array<ResolversTypes['uni_TickHourData']>, "uni_tickHourDatas", ParentType, ContextType, RequireFields<Subscriptionuni_tickHourDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_tickDayData?: SubscriptionResolver<Maybe<ResolversTypes['uni_TickDayData']>, "uni_tickDayData", ParentType, ContextType, RequireFields<Subscriptionuni_tickDayDataArgs, 'id' | 'subgraphError'>>;
  uni_tickDayDatas?: SubscriptionResolver<Array<ResolversTypes['uni_TickDayData']>, "uni_tickDayDatas", ParentType, ContextType, RequireFields<Subscriptionuni_tickDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_tokenDayData?: SubscriptionResolver<Maybe<ResolversTypes['uni_TokenDayData']>, "uni_tokenDayData", ParentType, ContextType, RequireFields<Subscriptionuni_tokenDayDataArgs, 'id' | 'subgraphError'>>;
  uni_tokenDayDatas?: SubscriptionResolver<Array<ResolversTypes['uni_TokenDayData']>, "uni_tokenDayDatas", ParentType, ContextType, RequireFields<Subscriptionuni_tokenDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni_tokenHourData?: SubscriptionResolver<Maybe<ResolversTypes['uni_TokenHourData']>, "uni_tokenHourData", ParentType, ContextType, RequireFields<Subscriptionuni_tokenHourDataArgs, 'id' | 'subgraphError'>>;
  uni_tokenHourDatas?: SubscriptionResolver<Array<ResolversTypes['uni_TokenHourData']>, "uni_tokenHourDatas", ParentType, ContextType, RequireFields<Subscriptionuni_tokenHourDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  uni__meta?: SubscriptionResolver<Maybe<ResolversTypes['uni__Meta_']>, "uni__meta", ParentType, ContextType, Partial<Subscriptionuni__metaArgs>>;
}>;

export type bal_AmpUpdateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_AmpUpdate'] = ResolversParentTypes['bal_AmpUpdate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  poolId?: Resolver<ResolversTypes['bal_Pool'], ParentType, ContextType>;
  scheduledTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  startAmp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endAmp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal_BalancerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_Balancer'] = ResolversParentTypes['bal_Balancer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  poolCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pools?: Resolver<Maybe<Array<ResolversTypes['bal_Pool']>>, ParentType, ContextType, RequireFields<bal_BalancerpoolsArgs, 'skip' | 'first'>>;
  snapshots?: Resolver<Maybe<Array<ResolversTypes['bal_BalancerSnapshot']>>, ParentType, ContextType, RequireFields<bal_BalancersnapshotsArgs, 'skip' | 'first'>>;
  totalLiquidity?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  totalSwapCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalSwapVolume?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  totalSwapFee?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  totalProtocolFee?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  protocolFeesCollector?: Resolver<Maybe<ResolversTypes['bal_Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal_BalancerSnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_BalancerSnapshot'] = ResolversParentTypes['bal_BalancerSnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  vault?: Resolver<ResolversTypes['bal_Balancer'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  poolCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalLiquidity?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  totalSwapCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalSwapVolume?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  totalSwapFee?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  totalProtocolFee?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface bal_BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['bal_BigDecimal'], any> {
  name: 'bal_BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface bal_BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['bal_Bytes'], any> {
  name: 'bal_Bytes';
}

export type bal_CircuitBreakerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_CircuitBreaker'] = ResolversParentTypes['bal_CircuitBreaker']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['bal_Pool'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['bal_PoolToken'], ParentType, ContextType>;
  bptPrice?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  lowerBoundPercentage?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  upperBoundPercentage?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal_FXOracleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_FXOracle'] = ResolversParentTypes['bal_FXOracle']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tokens?: Resolver<Array<ResolversTypes['bal_Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal_GradualWeightUpdateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_GradualWeightUpdate'] = ResolversParentTypes['bal_GradualWeightUpdate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  poolId?: Resolver<ResolversTypes['bal_Pool'], ParentType, ContextType>;
  scheduledTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  startWeights?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  endWeights?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface bal_Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['bal_Int8'], any> {
  name: 'bal_Int8';
}

export type bal_JoinExitResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_JoinExit'] = ResolversParentTypes['bal_JoinExit']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['bal_InvestType'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['bal_Bytes'], ParentType, ContextType>;
  amounts?: Resolver<Array<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  valueUSD?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['bal_Pool'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['bal_User'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tx?: Resolver<ResolversTypes['bal_Bytes'], ParentType, ContextType>;
  block?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal_LatestPriceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_LatestPrice'] = ResolversParentTypes['bal_LatestPrice']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['bal_Bytes'], ParentType, ContextType>;
  pricingAsset?: Resolver<ResolversTypes['bal_Bytes'], ParentType, ContextType>;
  poolId?: Resolver<ResolversTypes['bal_Pool'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal_ManagementOperationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_ManagementOperation'] = ResolversParentTypes['bal_ManagementOperation']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['bal_OperationType'], ParentType, ContextType>;
  cashDelta?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  managedDelta?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  poolTokenId?: Resolver<ResolversTypes['bal_PoolToken'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal_PoolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_Pool'] = ResolversParentTypes['bal_Pool']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['bal_Bytes'], ParentType, ContextType>;
  poolType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  poolTypeVersion?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  factory?: Resolver<Maybe<ResolversTypes['bal_Bytes']>, ParentType, ContextType>;
  strategyType?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  oracleEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swapEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  swapEnabledInternal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  swapEnabledCurationSignal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  swapFee?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['bal_Bytes']>, ParentType, ContextType>;
  isPaused?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  totalWeight?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  totalSwapVolume?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  totalSwapFee?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  totalLiquidity?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  totalLiquiditySansBPT?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  totalShares?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  totalProtocolFee?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  createTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  swapsCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  holdersCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  vaultID?: Resolver<ResolversTypes['bal_Balancer'], ParentType, ContextType>;
  tx?: Resolver<Maybe<ResolversTypes['bal_Bytes']>, ParentType, ContextType>;
  tokensList?: Resolver<Array<ResolversTypes['bal_Bytes']>, ParentType, ContextType>;
  tokens?: Resolver<Maybe<Array<ResolversTypes['bal_PoolToken']>>, ParentType, ContextType, RequireFields<bal_PooltokensArgs, 'skip' | 'first'>>;
  joinsExits?: Resolver<Maybe<Array<ResolversTypes['bal_JoinExit']>>, ParentType, ContextType, RequireFields<bal_PooljoinsExitsArgs, 'skip' | 'first'>>;
  swaps?: Resolver<Maybe<Array<ResolversTypes['bal_Swap']>>, ParentType, ContextType, RequireFields<bal_PoolswapsArgs, 'skip' | 'first'>>;
  shares?: Resolver<Maybe<Array<ResolversTypes['bal_PoolShare']>>, ParentType, ContextType, RequireFields<bal_PoolsharesArgs, 'skip' | 'first'>>;
  snapshots?: Resolver<Maybe<Array<ResolversTypes['bal_PoolSnapshot']>>, ParentType, ContextType, RequireFields<bal_PoolsnapshotsArgs, 'skip' | 'first'>>;
  historicalValues?: Resolver<Maybe<Array<ResolversTypes['bal_PoolHistoricalLiquidity']>>, ParentType, ContextType, RequireFields<bal_PoolhistoricalValuesArgs, 'skip' | 'first'>>;
  weightUpdates?: Resolver<Maybe<Array<ResolversTypes['bal_GradualWeightUpdate']>>, ParentType, ContextType, RequireFields<bal_PoolweightUpdatesArgs, 'skip' | 'first'>>;
  amp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  latestAmpUpdate?: Resolver<Maybe<ResolversTypes['bal_AmpUpdate']>, ParentType, ContextType>;
  ampUpdates?: Resolver<Maybe<Array<ResolversTypes['bal_AmpUpdate']>>, ParentType, ContextType, RequireFields<bal_PoolampUpdatesArgs, 'skip' | 'first'>>;
  priceRateProviders?: Resolver<Maybe<Array<ResolversTypes['bal_PriceRateProvider']>>, ParentType, ContextType, RequireFields<bal_PoolpriceRateProvidersArgs, 'skip' | 'first'>>;
  principalToken?: Resolver<Maybe<ResolversTypes['bal_Bytes']>, ParentType, ContextType>;
  baseToken?: Resolver<Maybe<ResolversTypes['bal_Bytes']>, ParentType, ContextType>;
  expiryTime?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  unitSeconds?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  managementFee?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  joinExitEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mustAllowlistLPs?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  managementAumFee?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  totalAumFeeCollectedInBPT?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  circuitBreakers?: Resolver<Maybe<Array<ResolversTypes['bal_CircuitBreaker']>>, ParentType, ContextType, RequireFields<bal_PoolcircuitBreakersArgs, 'skip' | 'first'>>;
  mainIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wrappedIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lowerTarget?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  upperTarget?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  sqrtAlpha?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  sqrtBeta?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  root3Alpha?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  c?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  s?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  tauAlphaX?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  tauAlphaY?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  tauBetaX?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  tauBetaY?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  u?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  v?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  w?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  z?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  dSq?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  alpha?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  beta?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  lambda?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  delta?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  epsilon?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  isInRecoveryMode?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  protocolSwapFeeCache?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  protocolYieldFeeCache?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  protocolAumFeeCache?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  totalProtocolFeePaidInBPT?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  lastJoinExitAmp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  lastPostJoinExitInvariant?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  protocolId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  protocolIdData?: Resolver<Maybe<ResolversTypes['bal_ProtocolIdData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal_PoolContractResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_PoolContract'] = ResolversParentTypes['bal_PoolContract']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['bal_Pool'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal_PoolHistoricalLiquidityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_PoolHistoricalLiquidity'] = ResolversParentTypes['bal_PoolHistoricalLiquidity']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  poolId?: Resolver<ResolversTypes['bal_Pool'], ParentType, ContextType>;
  poolTotalShares?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  poolLiquidity?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  poolShareValue?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  pricingAsset?: Resolver<ResolversTypes['bal_Bytes'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal_PoolShareResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_PoolShare'] = ResolversParentTypes['bal_PoolShare']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userAddress?: Resolver<ResolversTypes['bal_User'], ParentType, ContextType>;
  poolId?: Resolver<ResolversTypes['bal_Pool'], ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal_PoolSnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_PoolSnapshot'] = ResolversParentTypes['bal_PoolSnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['bal_Pool'], ParentType, ContextType>;
  amounts?: Resolver<Array<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  totalShares?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  swapVolume?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  protocolFee?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  swapFees?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  swapsCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  holdersCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal_PoolTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_PoolToken'] = ResolversParentTypes['bal_PoolToken']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  poolId?: Resolver<Maybe<ResolversTypes['bal_Pool']>, ParentType, ContextType>;
  token?: Resolver<ResolversTypes['bal_Token'], ParentType, ContextType>;
  assetManager?: Resolver<ResolversTypes['bal_Bytes'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  oldPriceRate?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  priceRate?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  paidProtocolFees?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  cashBalance?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  managedBalance?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  managements?: Resolver<Maybe<Array<ResolversTypes['bal_ManagementOperation']>>, ParentType, ContextType, RequireFields<bal_PoolTokenmanagementsArgs, 'skip' | 'first'>>;
  weight?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  isExemptFromYieldProtocolFee?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  circuitBreaker?: Resolver<Maybe<ResolversTypes['bal_CircuitBreaker']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal_PriceRateProviderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_PriceRateProvider'] = ResolversParentTypes['bal_PriceRateProvider']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  poolId?: Resolver<ResolversTypes['bal_Pool'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['bal_PoolToken'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['bal_Bytes'], ParentType, ContextType>;
  rate?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  lastCached?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cacheDuration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cacheExpiry?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal_ProtocolIdDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_ProtocolIdData'] = ResolversParentTypes['bal_ProtocolIdData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal_SwapResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_Swap'] = ResolversParentTypes['bal_Swap']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['bal_Bytes'], ParentType, ContextType>;
  tokenIn?: Resolver<ResolversTypes['bal_Bytes'], ParentType, ContextType>;
  tokenInSym?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenOut?: Resolver<ResolversTypes['bal_Bytes'], ParentType, ContextType>;
  tokenOutSym?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenAmountIn?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  tokenAmountOut?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  valueUSD?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  poolId?: Resolver<ResolversTypes['bal_Pool'], ParentType, ContextType>;
  userAddress?: Resolver<ResolversTypes['bal_User'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  block?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  tx?: Resolver<ResolversTypes['bal_Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal_SwapFeeUpdateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_SwapFeeUpdate'] = ResolversParentTypes['bal_SwapFeeUpdate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['bal_Pool'], ParentType, ContextType>;
  scheduledTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  startSwapFeePercentage?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  endSwapFeePercentage?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal_TokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_Token'] = ResolversParentTypes['bal_Token']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalBalanceUSD?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  totalBalanceNotional?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  totalVolumeUSD?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  totalVolumeNotional?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  totalSwapCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  latestPrice?: Resolver<Maybe<ResolversTypes['bal_LatestPrice']>, ParentType, ContextType>;
  latestUSDPrice?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  latestUSDPriceTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  latestFXPrice?: Resolver<Maybe<ResolversTypes['bal_BigDecimal']>, ParentType, ContextType>;
  pool?: Resolver<Maybe<ResolversTypes['bal_Pool']>, ParentType, ContextType>;
  fxOracleDecimals?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal_TokenPriceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_TokenPrice'] = ResolversParentTypes['bal_TokenPrice']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  poolId?: Resolver<ResolversTypes['bal_Pool'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['bal_Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  pricingAsset?: Resolver<ResolversTypes['bal_Bytes'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal_TokenSnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_TokenSnapshot'] = ResolversParentTypes['bal_TokenSnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['bal_Token'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalBalanceUSD?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  totalBalanceNotional?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  totalVolumeUSD?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  totalVolumeNotional?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  totalSwapCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal_TradePairResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_TradePair'] = ResolversParentTypes['bal_TradePair']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['bal_Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['bal_Token'], ParentType, ContextType>;
  totalSwapVolume?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  totalSwapFee?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal_TradePairSnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_TradePairSnapshot'] = ResolversParentTypes['bal_TradePairSnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['bal_TradePair'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalSwapVolume?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  totalSwapFee?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal_UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_User'] = ResolversParentTypes['bal_User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sharesOwned?: Resolver<Maybe<Array<ResolversTypes['bal_PoolShare']>>, ParentType, ContextType, RequireFields<bal_UsersharesOwnedArgs, 'skip' | 'first'>>;
  swaps?: Resolver<Maybe<Array<ResolversTypes['bal_Swap']>>, ParentType, ContextType, RequireFields<bal_UserswapsArgs, 'skip' | 'first'>>;
  userInternalBalances?: Resolver<Maybe<Array<ResolversTypes['bal_UserInternalBalance']>>, ParentType, ContextType, RequireFields<bal_UseruserInternalBalancesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal_UserInternalBalanceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal_UserInternalBalance'] = ResolversParentTypes['bal_UserInternalBalance']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userAddress?: Resolver<Maybe<ResolversTypes['bal_User']>, ParentType, ContextType>;
  token?: Resolver<ResolversTypes['bal_Bytes'], ParentType, ContextType>;
  tokenInfo?: Resolver<Maybe<ResolversTypes['bal_Token']>, ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['bal_BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal__Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal__Block_'] = ResolversParentTypes['bal__Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['bal_Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parentHash?: Resolver<Maybe<ResolversTypes['bal_Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type bal__Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['bal__Meta_'] = ResolversParentTypes['bal__Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['bal__Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface uni_BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uni_BigDecimal'], any> {
  name: 'uni_BigDecimal';
}

export type uni_BundleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['uni_Bundle'] = ResolversParentTypes['uni_Bundle']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ethPriceUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type uni_BurnResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['uni_Burn'] = ResolversParentTypes['uni_Burn']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['uni_Transaction'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['uni_Pool'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['uni_Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['uni_Token'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['uni_Bytes']>, ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['uni_Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  amountUSD?: Resolver<Maybe<ResolversTypes['uni_BigDecimal']>, ParentType, ContextType>;
  tickLower?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tickUpper?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface uni_BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uni_Bytes'], any> {
  name: 'uni_Bytes';
}

export type uni_CollectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['uni_Collect'] = ResolversParentTypes['uni_Collect']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['uni_Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['uni_Pool'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['uni_Bytes']>, ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  amountUSD?: Resolver<Maybe<ResolversTypes['uni_BigDecimal']>, ParentType, ContextType>;
  tickLower?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tickUpper?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type uni_FactoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['uni_Factory'] = ResolversParentTypes['uni_Factory']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  poolCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalVolumeUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  totalVolumeETH?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  totalFeesUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  totalFeesETH?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  totalValueLockedETH?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSDUntracked?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  totalValueLockedETHUntracked?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type uni_FlashResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['uni_Flash'] = ResolversParentTypes['uni_Flash']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['uni_Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['uni_Pool'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['uni_Bytes'], ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes['uni_Bytes'], ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  amountUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  amount0Paid?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  amount1Paid?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface uni_Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uni_Int8'], any> {
  name: 'uni_Int8';
}

export type uni_MintResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['uni_Mint'] = ResolversParentTypes['uni_Mint']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['uni_Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['uni_Pool'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['uni_Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['uni_Token'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['uni_Bytes'], ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['uni_Bytes']>, ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['uni_Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  amountUSD?: Resolver<Maybe<ResolversTypes['uni_BigDecimal']>, ParentType, ContextType>;
  tickLower?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tickUpper?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type uni_PoolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['uni_Pool'] = ResolversParentTypes['uni_Pool']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['uni_Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['uni_Token'], ParentType, ContextType>;
  feeTier?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sqrtPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthGlobal0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthGlobal1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  observationIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collectedFeesToken0?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  collectedFeesToken1?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  collectedFeesUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  totalValueLockedToken0?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  totalValueLockedToken1?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  totalValueLockedETH?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSDUntracked?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  liquidityProviderCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  poolHourData?: Resolver<Array<ResolversTypes['uni_PoolHourData']>, ParentType, ContextType, RequireFields<uni_PoolpoolHourDataArgs, 'skip' | 'first'>>;
  poolDayData?: Resolver<Array<ResolversTypes['uni_PoolDayData']>, ParentType, ContextType, RequireFields<uni_PoolpoolDayDataArgs, 'skip' | 'first'>>;
  mints?: Resolver<Array<ResolversTypes['uni_Mint']>, ParentType, ContextType, RequireFields<uni_PoolmintsArgs, 'skip' | 'first'>>;
  burns?: Resolver<Array<ResolversTypes['uni_Burn']>, ParentType, ContextType, RequireFields<uni_PoolburnsArgs, 'skip' | 'first'>>;
  swaps?: Resolver<Array<ResolversTypes['uni_Swap']>, ParentType, ContextType, RequireFields<uni_PoolswapsArgs, 'skip' | 'first'>>;
  collects?: Resolver<Array<ResolversTypes['uni_Collect']>, ParentType, ContextType, RequireFields<uni_PoolcollectsArgs, 'skip' | 'first'>>;
  ticks?: Resolver<Array<ResolversTypes['uni_Tick']>, ParentType, ContextType, RequireFields<uni_PoolticksArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type uni_PoolDayDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['uni_PoolDayData'] = ResolversParentTypes['uni_PoolDayData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['uni_Pool'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sqrtPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  feeGrowthGlobal0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthGlobal1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tvlUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  open?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  high?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  low?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  close?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type uni_PoolHourDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['uni_PoolHourData'] = ResolversParentTypes['uni_PoolHourData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  periodStartUnix?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['uni_Pool'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sqrtPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  feeGrowthGlobal0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthGlobal1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tvlUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  open?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  high?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  low?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  close?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type uni_PositionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['uni_Position'] = ResolversParentTypes['uni_Position']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['uni_Bytes'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['uni_Pool'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['uni_Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['uni_Token'], ParentType, ContextType>;
  tickLower?: Resolver<ResolversTypes['uni_Tick'], ParentType, ContextType>;
  tickUpper?: Resolver<ResolversTypes['uni_Tick'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  depositedToken0?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  depositedToken1?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  withdrawnToken0?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  withdrawnToken1?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  collectedFeesToken0?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  collectedFeesToken1?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['uni_Transaction'], ParentType, ContextType>;
  feeGrowthInside0LastX128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthInside1LastX128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type uni_PositionSnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['uni_PositionSnapshot'] = ResolversParentTypes['uni_PositionSnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['uni_Bytes'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['uni_Pool'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['uni_Position'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  depositedToken0?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  depositedToken1?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  withdrawnToken0?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  withdrawnToken1?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  collectedFeesToken0?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  collectedFeesToken1?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['uni_Transaction'], ParentType, ContextType>;
  feeGrowthInside0LastX128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthInside1LastX128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type uni_SwapResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['uni_Swap'] = ResolversParentTypes['uni_Swap']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['uni_Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['uni_Pool'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['uni_Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['uni_Token'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['uni_Bytes'], ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes['uni_Bytes'], ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['uni_Bytes'], ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  amountUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  sqrtPriceX96?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type uni_TickResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['uni_Tick'] = ResolversParentTypes['uni_Tick']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  poolAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tickIdx?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['uni_Pool'], ParentType, ContextType>;
  liquidityGross?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityNet?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  price0?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  price1?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  collectedFeesToken0?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  collectedFeesToken1?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  collectedFeesUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityProviderCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthOutside0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthOutside1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type uni_TickDayDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['uni_TickDayData'] = ResolversParentTypes['uni_TickDayData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['uni_Pool'], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes['uni_Tick'], ParentType, ContextType>;
  liquidityGross?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityNet?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  feeGrowthOutside0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthOutside1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type uni_TickHourDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['uni_TickHourData'] = ResolversParentTypes['uni_TickHourData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  periodStartUnix?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['uni_Pool'], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes['uni_Tick'], ParentType, ContextType>;
  liquidityGross?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityNet?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type uni_TokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['uni_Token'] = ResolversParentTypes['uni_Token']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  poolCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalValueLocked?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSDUntracked?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  derivedETH?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  whitelistPools?: Resolver<Array<ResolversTypes['uni_Pool']>, ParentType, ContextType, RequireFields<uni_TokenwhitelistPoolsArgs, 'skip' | 'first'>>;
  tokenDayData?: Resolver<Array<ResolversTypes['uni_TokenDayData']>, ParentType, ContextType, RequireFields<uni_TokentokenDayDataArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type uni_TokenDayDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['uni_TokenDayData'] = ResolversParentTypes['uni_TokenDayData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['uni_Token'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  totalValueLocked?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  priceUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  open?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  high?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  low?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  close?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type uni_TokenHourDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['uni_TokenHourData'] = ResolversParentTypes['uni_TokenHourData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  periodStartUnix?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['uni_Token'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  totalValueLocked?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  priceUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  open?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  high?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  low?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  close?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type uni_TransactionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['uni_Transaction'] = ResolversParentTypes['uni_Transaction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  mints?: Resolver<Array<Maybe<ResolversTypes['uni_Mint']>>, ParentType, ContextType, RequireFields<uni_TransactionmintsArgs, 'skip' | 'first'>>;
  burns?: Resolver<Array<Maybe<ResolversTypes['uni_Burn']>>, ParentType, ContextType, RequireFields<uni_TransactionburnsArgs, 'skip' | 'first'>>;
  swaps?: Resolver<Array<Maybe<ResolversTypes['uni_Swap']>>, ParentType, ContextType, RequireFields<uni_TransactionswapsArgs, 'skip' | 'first'>>;
  flashed?: Resolver<Array<Maybe<ResolversTypes['uni_Flash']>>, ParentType, ContextType, RequireFields<uni_TransactionflashedArgs, 'skip' | 'first'>>;
  collects?: Resolver<Array<Maybe<ResolversTypes['uni_Collect']>>, ParentType, ContextType, RequireFields<uni_TransactioncollectsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type uni_UniswapDayDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['uni_UniswapDayData'] = ResolversParentTypes['uni_UniswapDayData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  volumeETH?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  volumeUSDUntracked?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tvlUSD?: Resolver<ResolversTypes['uni_BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type uni__Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['uni__Block_'] = ResolversParentTypes['uni__Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['uni_Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parentHash?: Resolver<Maybe<ResolversTypes['uni_Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type uni__Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['uni__Meta_'] = ResolversParentTypes['uni__Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['uni__Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  bal_AmpUpdate?: bal_AmpUpdateResolvers<ContextType>;
  bal_Balancer?: bal_BalancerResolvers<ContextType>;
  bal_BalancerSnapshot?: bal_BalancerSnapshotResolvers<ContextType>;
  bal_BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  bal_Bytes?: GraphQLScalarType;
  bal_CircuitBreaker?: bal_CircuitBreakerResolvers<ContextType>;
  bal_FXOracle?: bal_FXOracleResolvers<ContextType>;
  bal_GradualWeightUpdate?: bal_GradualWeightUpdateResolvers<ContextType>;
  bal_Int8?: GraphQLScalarType;
  bal_JoinExit?: bal_JoinExitResolvers<ContextType>;
  bal_LatestPrice?: bal_LatestPriceResolvers<ContextType>;
  bal_ManagementOperation?: bal_ManagementOperationResolvers<ContextType>;
  bal_Pool?: bal_PoolResolvers<ContextType>;
  bal_PoolContract?: bal_PoolContractResolvers<ContextType>;
  bal_PoolHistoricalLiquidity?: bal_PoolHistoricalLiquidityResolvers<ContextType>;
  bal_PoolShare?: bal_PoolShareResolvers<ContextType>;
  bal_PoolSnapshot?: bal_PoolSnapshotResolvers<ContextType>;
  bal_PoolToken?: bal_PoolTokenResolvers<ContextType>;
  bal_PriceRateProvider?: bal_PriceRateProviderResolvers<ContextType>;
  bal_ProtocolIdData?: bal_ProtocolIdDataResolvers<ContextType>;
  bal_Swap?: bal_SwapResolvers<ContextType>;
  bal_SwapFeeUpdate?: bal_SwapFeeUpdateResolvers<ContextType>;
  bal_Token?: bal_TokenResolvers<ContextType>;
  bal_TokenPrice?: bal_TokenPriceResolvers<ContextType>;
  bal_TokenSnapshot?: bal_TokenSnapshotResolvers<ContextType>;
  bal_TradePair?: bal_TradePairResolvers<ContextType>;
  bal_TradePairSnapshot?: bal_TradePairSnapshotResolvers<ContextType>;
  bal_User?: bal_UserResolvers<ContextType>;
  bal_UserInternalBalance?: bal_UserInternalBalanceResolvers<ContextType>;
  bal__Block_?: bal__Block_Resolvers<ContextType>;
  bal__Meta_?: bal__Meta_Resolvers<ContextType>;
  uni_BigDecimal?: GraphQLScalarType;
  uni_Bundle?: uni_BundleResolvers<ContextType>;
  uni_Burn?: uni_BurnResolvers<ContextType>;
  uni_Bytes?: GraphQLScalarType;
  uni_Collect?: uni_CollectResolvers<ContextType>;
  uni_Factory?: uni_FactoryResolvers<ContextType>;
  uni_Flash?: uni_FlashResolvers<ContextType>;
  uni_Int8?: GraphQLScalarType;
  uni_Mint?: uni_MintResolvers<ContextType>;
  uni_Pool?: uni_PoolResolvers<ContextType>;
  uni_PoolDayData?: uni_PoolDayDataResolvers<ContextType>;
  uni_PoolHourData?: uni_PoolHourDataResolvers<ContextType>;
  uni_Position?: uni_PositionResolvers<ContextType>;
  uni_PositionSnapshot?: uni_PositionSnapshotResolvers<ContextType>;
  uni_Swap?: uni_SwapResolvers<ContextType>;
  uni_Tick?: uni_TickResolvers<ContextType>;
  uni_TickDayData?: uni_TickDayDataResolvers<ContextType>;
  uni_TickHourData?: uni_TickHourDataResolvers<ContextType>;
  uni_Token?: uni_TokenResolvers<ContextType>;
  uni_TokenDayData?: uni_TokenDayDataResolvers<ContextType>;
  uni_TokenHourData?: uni_TokenHourDataResolvers<ContextType>;
  uni_Transaction?: uni_TransactionResolvers<ContextType>;
  uni_UniswapDayData?: uni_UniswapDayDataResolvers<ContextType>;
  uni__Block_?: uni__Block_Resolvers<ContextType>;
  uni__Meta_?: uni__Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = Balancerv2Types.Context & Uniswapv2Types.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/balancerv2/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    case ".graphclient/sources/uniswapv2/introspectionSchema":
      return Promise.resolve(importedModule$1) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const balancerv2Transforms = [];
const uniswapv2Transforms = [];
const additionalTypeDefs = [] as any[];
const balancerv2Handler = new GraphqlHandler({
              name: "balancerv2",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("balancerv2"),
              logger: logger.child("balancerv2"),
              importFn,
            });
const uniswapv2Handler = new GraphqlHandler({
              name: "uniswapv2",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("uniswapv2"),
              logger: logger.child("uniswapv2"),
              importFn,
            });
balancerv2Transforms[0] = new PrefixTransform({
                  apiName: "balancerv2",
                  config: {"value":"bal_","includeRootOperations":true},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
uniswapv2Transforms[0] = new PrefixTransform({
                  apiName: "uniswapv2",
                  config: {"value":"uni_","includeRootOperations":true},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
balancerv2Transforms[1] = new BlockTrackingTransform({
                  apiName: "balancerv2",
                  config: {"validateSchema":true},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
balancerv2Transforms[2] = new AutoPaginationTransform({
                  apiName: "balancerv2",
                  config: {"validateSchema":true},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
uniswapv2Transforms[1] = new BlockTrackingTransform({
                  apiName: "uniswapv2",
                  config: {"validateSchema":true},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
uniswapv2Transforms[2] = new AutoPaginationTransform({
                  apiName: "uniswapv2",
                  config: {"validateSchema":true},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
sources[0] = {
          name: 'balancerv2',
          handler: balancerv2Handler,
          transforms: balancerv2Transforms
        }
sources[1] = {
          name: 'uniswapv2',
          handler: uniswapv2Handler,
          transforms: uniswapv2Transforms
        }
const additionalResolvers = [] as any[]
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: GetBalPoolDocument,
        get rawSDL() {
          return printWithCache(GetBalPoolDocument);
        },
        location: 'GetBalPoolDocument.graphql'
      },{
        document: GetHistoricalDataDocument,
        get rawSDL() {
          return printWithCache(GetHistoricalDataDocument);
        },
        location: 'GetHistoricalDataDocument.graphql'
      },{
        document: GetDataDocument,
        get rawSDL() {
          return printWithCache(GetDataDocument);
        },
        location: 'GetDataDocument.graphql'
      },{
        document: GetPoolsDocument,
        get rawSDL() {
          return printWithCache(GetPoolsDocument);
        },
        location: 'GetPoolsDocument.graphql'
      },{
        document: GetUniPoolDocument,
        get rawSDL() {
          return printWithCache(GetUniPoolDocument);
        },
        location: 'GetUniPoolDocument.graphql'
      },{
        document: SearchPoolsDocument,
        get rawSDL() {
          return printWithCache(SearchPoolsDocument);
        },
        location: 'SearchPoolsDocument.graphql'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type GetBalPoolQueryVariables = Exact<{
  poolId: Scalars['ID'];
}>;


export type GetBalPoolQuery = { bal_pool?: Maybe<(
    Pick<bal_Pool, 'createTime' | 'factory' | 'holdersCount' | 'isPaused' | 'lastPostJoinExitInvariant' | 'name' | 'owner' | 'poolType' | 'poolTypeVersion' | 'totalLiquidity' | 'totalProtocolFee' | 'totalSwapFee' | 'totalSwapVolume' | 'tx'>
    & { tokens?: Maybe<Array<Pick<bal_PoolToken, 'address' | 'balance' | 'decimals' | 'name' | 'symbol' | 'weight' | 'id'>>> }
  )> };

export type GetHistoricalDataQueryVariables = Exact<{
  poolId: Scalars['String'];
}>;


export type GetHistoricalDataQuery = { bal_poolHistoricalLiquidities: Array<Pick<bal_PoolHistoricalLiquidity, 'poolLiquidity' | 'block' | 'poolTotalShares'>> };

export type GetDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDataQuery = { bal_balancer?: Maybe<Pick<bal_Balancer, 'id' | 'poolCount' | 'totalLiquidity' | 'totalProtocolFee' | 'totalSwapCount' | 'totalSwapFee' | 'totalSwapVolume'>>, uni_factory?: Maybe<Pick<uni_Factory, 'poolCount' | 'totalFeesUSD' | 'totalValueLockedUSD' | 'totalVolumeUSD'>> };

export type GetPoolsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  balOrderBy?: InputMaybe<bal_Pool_orderBy>;
  balOrderDirection?: InputMaybe<bal_OrderDirection>;
  uniOrderBy?: InputMaybe<uni_Pool_orderBy>;
  uniOrderDirection?: InputMaybe<uni_OrderDirection>;
}>;


export type GetPoolsQuery = { bal_pools: Array<(
    Pick<bal_Pool, 'id' | 'name' | 'poolType' | 'swapFee' | 'swapsCount' | 'totalLiquidity' | 'totalSwapFee' | 'totalSwapVolume'>
    & { tokens?: Maybe<Array<Pick<bal_PoolToken, 'symbol' | 'address'>>> }
  )>, uni_pools: Array<(
    Pick<uni_Pool, 'id' | 'feeTier' | 'txCount' | 'liquidity' | 'feesUSD' | 'volumeUSD' | 'totalValueLockedUSD'>
    & { token1: Pick<uni_Token, 'symbol'>, token0: Pick<uni_Token, 'symbol'> }
  )> };

export type GetUniPoolQueryVariables = Exact<{
  poolId: Scalars['ID'];
}>;


export type GetUniPoolQuery = { uni_pool?: Maybe<(
    Pick<uni_Pool, 'feeTier' | 'feesUSD' | 'txCount' | 'liquidity' | 'token0Price' | 'token1Price' | 'volumeToken0' | 'volumeToken1' | 'volumeUSD' | 'createdAtTimestamp' | 'totalValueLockedUSD' | 'totalValueLockedETH' | 'totalValueLockedToken0' | 'totalValueLockedToken1'>
    & { token0: Pick<uni_Token, 'decimals' | 'derivedETH' | 'feesUSD' | 'id' | 'name' | 'symbol' | 'totalValueLockedUSD' | 'txCount' | 'volumeUSD' | 'volume'>, token1: Pick<uni_Token, 'decimals' | 'derivedETH' | 'feesUSD' | 'id' | 'name' | 'symbol' | 'totalValueLocked' | 'totalValueLockedUSD' | 'txCount' | 'volume' | 'volumeUSD'> }
  )> };

export type SearchPoolsQueryVariables = Exact<{
  balPoolId?: InputMaybe<Scalars['ID']>;
  uniPoolId?: InputMaybe<Scalars['ID']>;
  poolAddress?: InputMaybe<Scalars['bal_Bytes']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
}>;


export type SearchPoolsQuery = { bal_pools: Array<(
    Pick<bal_Pool, 'id' | 'name' | 'poolType' | 'swapFee' | 'swapsCount' | 'totalLiquidity' | 'totalSwapFee' | 'totalSwapVolume'>
    & { tokens?: Maybe<Array<Pick<bal_PoolToken, 'symbol'>>> }
  )>, uni_pools: Array<(
    Pick<uni_Pool, 'id' | 'feeTier' | 'txCount' | 'liquidity' | 'feesUSD' | 'volumeUSD' | 'totalValueLockedUSD'>
    & { token1: Pick<uni_Token, 'symbol'>, token0: Pick<uni_Token, 'symbol'> }
  )> };


export const GetBalPoolDocument = gql`
    query GetBalPool($poolId: ID!) {
  bal_pool(id: $poolId) {
    createTime
    factory
    holdersCount
    isPaused
    lastPostJoinExitInvariant
    name
    owner
    poolType
    poolTypeVersion
    totalLiquidity
    totalProtocolFee
    totalSwapFee
    totalSwapVolume
    tx
    tokens {
      address
      balance
      decimals
      name
      symbol
      weight
      id
    }
  }
}
    ` as unknown as DocumentNode<GetBalPoolQuery, GetBalPoolQueryVariables>;
export const GetHistoricalDataDocument = gql`
    query GetHistoricalData($poolId: String!) {
  bal_poolHistoricalLiquidities(where: {poolId: $poolId}) {
    poolLiquidity
    block
    poolTotalShares
  }
}
    ` as unknown as DocumentNode<GetHistoricalDataQuery, GetHistoricalDataQueryVariables>;
export const GetDataDocument = gql`
    query GetData {
  bal_balancer(id: "2") {
    id
    poolCount
    totalLiquidity
    totalProtocolFee
    totalSwapCount
    totalSwapFee
    totalSwapVolume
  }
  uni_factory(id: "0x1F98431c8aD98523631AE4a59f267346ea31F984") {
    poolCount
    totalFeesUSD
    totalValueLockedUSD
    totalVolumeUSD
  }
}
    ` as unknown as DocumentNode<GetDataQuery, GetDataQueryVariables>;
export const GetPoolsDocument = gql`
    query GetPools($first: Int = 10, $skip: Int, $balOrderBy: bal_Pool_orderBy, $balOrderDirection: bal_OrderDirection, $uniOrderBy: uni_Pool_orderBy, $uniOrderDirection: uni_OrderDirection) {
  bal_pools(
    first: $first
    skip: $skip
    orderBy: $balOrderBy
    orderDirection: $balOrderDirection
    where: {totalLiquidity_gt: "100", totalSwapVolume_gt: "100"}
  ) {
    id
    name
    tokens {
      symbol
      address
    }
    poolType
    swapFee
    swapsCount
    totalLiquidity
    totalSwapFee
    totalSwapVolume
  }
  uni_pools(
    first: $first
    skip: $skip
    orderBy: $uniOrderBy
    orderDirection: $uniOrderDirection
    where: {totalValueLockedUSD_gt: "100", volumeUSD_gt: "100"}
  ) {
    id
    feeTier
    txCount
    liquidity
    token1 {
      symbol
    }
    token0 {
      symbol
    }
    feesUSD
    volumeUSD
    totalValueLockedUSD
  }
}
    ` as unknown as DocumentNode<GetPoolsQuery, GetPoolsQueryVariables>;
export const GetUniPoolDocument = gql`
    query GetUniPool($poolId: ID!) {
  uni_pool(id: $poolId) {
    feeTier
    feesUSD
    txCount
    liquidity
    token0Price
    token1Price
    volumeToken0
    volumeToken1
    token0 {
      decimals
      derivedETH
      feesUSD
      id
      name
      symbol
      totalValueLockedUSD
      txCount
      volumeUSD
      volume
    }
    token1 {
      decimals
      derivedETH
      feesUSD
      id
      name
      symbol
      totalValueLocked
      totalValueLockedUSD
      txCount
      volume
      volumeUSD
    }
    volumeUSD
    createdAtTimestamp
    totalValueLockedUSD
    totalValueLockedETH
    totalValueLockedToken0
    totalValueLockedToken1
  }
}
    ` as unknown as DocumentNode<GetUniPoolQuery, GetUniPoolQueryVariables>;
export const SearchPoolsDocument = gql`
    query SearchPools($balPoolId: ID, $uniPoolId: ID, $poolAddress: bal_Bytes, $tokenSymbol: String) {
  bal_pools(where: {id: $balPoolId, address_contains: $poolAddress}) {
    id
    name
    tokens(where: {symbol_contains: "B"}) {
      symbol
    }
    poolType
    swapFee
    swapsCount
    totalLiquidity
    totalSwapFee
    totalSwapVolume
  }
  uni_pools(
    where: {id: $uniPoolId, token1_: {symbol_contains: "B"}, token0_: {symbol_contains: "B"}}
  ) {
    id
    feeTier
    txCount
    liquidity
    token1 {
      symbol
    }
    token0 {
      symbol
    }
    feesUSD
    volumeUSD
    totalValueLockedUSD
  }
}
    ` as unknown as DocumentNode<SearchPoolsQuery, SearchPoolsQueryVariables>;







export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    GetBalPool(variables: GetBalPoolQueryVariables, options?: C): Promise<GetBalPoolQuery> {
      return requester<GetBalPoolQuery, GetBalPoolQueryVariables>(GetBalPoolDocument, variables, options) as Promise<GetBalPoolQuery>;
    },
    GetHistoricalData(variables: GetHistoricalDataQueryVariables, options?: C): Promise<GetHistoricalDataQuery> {
      return requester<GetHistoricalDataQuery, GetHistoricalDataQueryVariables>(GetHistoricalDataDocument, variables, options) as Promise<GetHistoricalDataQuery>;
    },
    GetData(variables?: GetDataQueryVariables, options?: C): Promise<GetDataQuery> {
      return requester<GetDataQuery, GetDataQueryVariables>(GetDataDocument, variables, options) as Promise<GetDataQuery>;
    },
    GetPools(variables?: GetPoolsQueryVariables, options?: C): Promise<GetPoolsQuery> {
      return requester<GetPoolsQuery, GetPoolsQueryVariables>(GetPoolsDocument, variables, options) as Promise<GetPoolsQuery>;
    },
    GetUniPool(variables: GetUniPoolQueryVariables, options?: C): Promise<GetUniPoolQuery> {
      return requester<GetUniPoolQuery, GetUniPoolQueryVariables>(GetUniPoolDocument, variables, options) as Promise<GetUniPoolQuery>;
    },
    SearchPools(variables?: SearchPoolsQueryVariables, options?: C): Promise<SearchPoolsQuery> {
      return requester<SearchPoolsQuery, SearchPoolsQueryVariables>(SearchPoolsDocument, variables, options) as Promise<SearchPoolsQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;