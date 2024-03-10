'use client'
// stateContext.tsx

import React, { createContext, useReducer, useContext, ReactNode, Dispatch } from 'react';
import { TGetPoolQuery } from '~~/types/types';

interface State {
  poolLists: { [key in 'bal' | 'uni']: any[] };
  filterOptions: TGetPoolQuery;
  hasMore: { [key in 'bal' | 'uni']: boolean };
  loading: boolean;
  errors: string;
  selectedPool: 'bal' | 'uni';
  prevOrderDirection: 'asc' | 'desc';
  searchResults: any[];
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: State = {
  poolLists: { bal: [], uni: [] },
  filterOptions: {
    first: 10,
    skip: 0,
    balOrderBy: 'totalLiquidity',
    balOrderDirection: 'desc',
    uniOrderBy: 'totalValueLockedUSD',
    uniOrderDirection: 'desc',
  },
  hasMore: { bal: true, uni: true },
  loading: false,
  errors: '',
  selectedPool: 'bal',
  prevOrderDirection: 'desc',
  searchResults: [],
};

export const actionTypes = {
  SET_POOL_LISTS: 'SET_POOL_LISTS',
  SET_FILTER_OPTIONS: 'SET_FILTER_OPTIONS',
  SET_HAS_MORE: 'SET_HAS_MORE',
  SET_LOADING: 'SET_LOADING',
  SET_ERRORS: 'SET_ERRORS',
  SET_SELECTED_POOL: 'SET_SELECTED_POOL',
  SET_PREV_ORDER_DIRECTION: 'SET_PREV_ORDER_DIRECTION',
  SET_SEARCH_RESULTS: 'SET_SEARCH_RESULTS',
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_POOL_LISTS':
      return { ...state, poolLists: action.payload };
    case 'SET_FILTER_OPTIONS':
      return { ...state, filterOptions: action.payload };
    case 'SET_HAS_MORE':
      return { ...state, hasMore: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERRORS':
      return { ...state, errors: action.payload };
    case 'SET_SELECTED_POOL':
      return { ...state, selectedPool: action.payload };
    case 'SET_PREV_ORDER_DIRECTION':
      return { ...state, prevOrderDirection: action.payload };
    case 'SET_SEARCH_RESULTS':
      return { ...state, searchResults: action.payload };
    default:
      return state;
  }
};

interface StateContextProps {
  children: ReactNode;
}

export const StateContext = createContext<{ state: State; dispatch: Dispatch<Action> } | undefined>(undefined);

export const StateProvider: React.FC<StateContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
};

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useStateContext must be used within a StateProvider');
  }
  return context;
};
