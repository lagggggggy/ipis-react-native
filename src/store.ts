// https://redux.js.org/usage/usage-with-typescript
import {Middleware, combineReducers, configureStore} from '@reduxjs/toolkit';
import type {TypedUseSelectorHook} from 'react-redux';
import {useDispatch, useSelector, useStore} from 'react-redux';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  main: {},
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger as Middleware),
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState`, `AppDispatch` and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;

export default store;
