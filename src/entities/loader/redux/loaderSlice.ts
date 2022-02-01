import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoaderActive: state => ({ ...state, isLoading: true }),
    setLoaderDisabled: state => ({ ...state, isLoading: false }),
  },
});

export default loaderSlice;
