import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
  token: '',
  loading: false,
  credential: [],
  error: '',
  message: '',
  success: false,
  contentLoader: true,
};
//
const fetchGen = async (api, method, body) => {
  const res = await fetch('https://dukandar-api.onrender.com/appuser' + api, {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify(body),
  });
  return await res.json();
};
export const signupUser = createAsyncThunk('signupuser', async body => {
  const result = await fetchGen('/user-signup', 'post', body);
  return result;
});

export const signinUser = createAsyncThunk('signinuser', async body => {
  const result = await fetchGen('/user-signin', 'post', body);
  return result;
});

export const getUser = createAsyncThunk('getUser', async body => {
  const result = await fetchGen('/user-info', 'get', body);
  return result;
});

export const updateuser = createAsyncThunk('updateuser', async payload => {
  const result = await fetch('/appuser/user-update', {
    method: 'put',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify(payload),
  });
  return result.json();
});
const authReducer = createSlice({
  name: 'signupuser',
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem('token');
    },
  },
  extraReducers: {
    [signupUser.fulfilled]: (state, { payload: { error, token, user } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else if (user) {
        state.error = '';
        state.success = true;
        localStorage.setItem('token', token);
      }
    },
    [signupUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signinUser.fulfilled]: (
      state,
      { payload: { error, message, token, user } }
    ) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.token = user;
        state.error = '';
        state.success = true;
        state.message = message;
        localStorage.setItem('token', token);
      }
    },
    [signinUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, { payload: { error, user } }) => {
      state.loading = false;
      state.contentLoader = false;
      if (!error) {
        state.credential = user;
      }
    },
    [getUser.pending]: (state, action) => {},
    [updateuser.fulfilled]: (state, { payload: { user } }) => {
      state.loading = false;
      state.credential = user;
      state.success = true;
    },
    [updateuser.pending]: (state, action) => {
      state.loading = true;
    },
  },
});
export const { addToken } = authReducer.actions;
export default authReducer.reducer;
