import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/';

export const register = createAsyncThunk('auth/register', async () => {});
