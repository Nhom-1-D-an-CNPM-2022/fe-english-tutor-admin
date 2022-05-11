import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userSlice from '../slice/userSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userSlice'],
};
const rootReducer = combineReducers({
  userSlice,
});

export default persistReducer(persistConfig, rootReducer);
