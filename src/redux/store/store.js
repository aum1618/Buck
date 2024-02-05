import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import Reducers from '../reducers';
import {keys} from '../../shared/constants/keys';

// Configuration for redux-persist to persist the Redux store
const persistConfig = {
  key: keys.reducer, // Unique key for the persisted data in AsyncStorage
  storage: AsyncStorage, // Storage engine for persisting data (AsyncStorage in this case)
  whitelist: [keys.appConfig], // List of reducers to be persisted
};

// Middleware configuration function
const configureMiddleware = getDefaultMiddleware => {
  let middlewares = [];

  // Add logger middleware in development environment
  if (__DEV__) {
    middlewares = [logger];
  }

  // Use the default middleware provided by Redux Toolkit
  return getDefaultMiddleware({
    // Ignore specific actions from being serialized
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(middlewares);
};

// Create a persisted reducer using redux-persist
const persistedReducer = persistReducer(persistConfig, Reducers);

// Configure the Redux store with persisted reducer and middleware
const store = configureStore({
  reducer: persistedReducer, // Set the root reducer to the persisted reducer
  middleware: configureMiddleware, // Apply custom middleware
});

// Create a persistor to manage persistence
const persistor = persistStore(store);

// Export the configured store and persistor
export {store, persistor};
