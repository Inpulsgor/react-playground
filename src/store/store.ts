import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';
import middleware from './middleware';

/*
 * STORE
 */

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production', // enabled only in development mode
  });
};

/*
 * STORE TYPES
 */

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

const persistor = persistStore(setupStore());

export default { store: setupStore(), persistor };
