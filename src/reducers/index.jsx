import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage'
import {
  persistReducer
} from 'redux-persist';
import authSlice from './authReducer';
import userSlice from './userReducer';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  auth: authSlice,
  users: userSlice,
})

export const reducer = persistReducer(persistConfig, rootReducer)