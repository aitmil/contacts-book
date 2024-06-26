import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const register = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    try {
      const res = await axios.post('users/signup', newUser);
      axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('users/login', userData);
      axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const res = await axios.post('users/logout');
    axios.defaults.headers.common.Authorization = '';
    return res.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});
