import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authSlice from '../slice/authSlice';
import sidebarSlice from '../slice/sidebarSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authSlice'],
};
const rootReducer = combineReducers({
  authSlice,
  sidebarSlice,
});

export default persistReducer(persistConfig, rootReducer);
