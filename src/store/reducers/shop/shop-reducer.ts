import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchItems } from './shop-actions-creators';
import { IProduct } from '../../../models';

interface ShopState {
  items: IProduct[];
  isLoading: boolean;
  error: string;
}

const initialState: ShopState = {
  items: [],
  isLoading: false,
  error: '',
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchItems.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
      state.isLoading = false;
      state.error = '';
      state.items = action.payload;
    },
    [fetchItems.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchItems.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default shopSlice.reducer;
