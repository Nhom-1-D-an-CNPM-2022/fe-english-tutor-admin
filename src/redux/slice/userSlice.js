import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../services/userApi';

export const getInfo = createAsyncThunk('user/get-info', async (accessToken) => {
  return await userApi.getInfo(accessToken).then((res) => res.data);
});

const initialState = {
  isAccount: false,
  account: {},
  status: false,
  message: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInfo.fulfilled, (state, action) => {
      if (action.payload.user) {
        state.account = action.payload.user;
        state.isAccount = true;
      } else {
        state.isAccount = false;
      }
    });

    builder.addCase(getInfo.rejected, (state, action) => {
        state.isAccount = false;
    });
  },
});

const { reducer, actions } = userSlice;
export const {} = actions;
export default reducer;
