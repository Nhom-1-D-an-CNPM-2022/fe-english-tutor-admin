import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from '../../services/authApi';

export const login = createAsyncThunk('auth/login', async (params) => {
  return await authApi.login(params).then((res) => res.data);
});
export const getInfo = createAsyncThunk('auth/get-info', async (params) => {
  return await authApi.getInfo().then((res) => res.data);
});

const initialState = {
  isAccount: false,
  account: {},
  status: false,
  message: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    logout(state) {
      state.isAccount = false;
      state.account = {};
      localStorage.setItem('jwt', '');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload.data) {
        state.isAccount = true;
        localStorage.setItem('jwt', action.payload.data);
      } else {
        state.isAccount = false;
        state.account = {};
        localStorage.setItem('jwt', '');
      }
    });
    builder.addCase(getInfo.fulfilled, (state, action) => {
      if (action.payload.data) {
        state.account = action.payload.data;
        state.isAccount = true;
      } else {
        state.account = {};
        state.isAccount = false;
      }
    });
    builder.addCase(getInfo.rejected, (state, action) => {
      state.account = {};
      state.isAccount = false;
    });
  },
});

const { reducer, actions } = authSlice;
export const { logout } = actions;
export default reducer;
