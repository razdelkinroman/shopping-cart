import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchItems = createAsyncThunk('products/fetchAll', async (slug: string, thunkAPI) => {
  try {
    const response = await axios.get(`http://localhost:3001/products?category=${slug}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось загрузить продукты');
  }
});
