import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../../models';
import {
  addItemToCartAction,
  deleteItemFromCartAction,
  changeProductQuantityAction,
} from './cart-actions-creators';

interface CartState {
  items: IProduct[];
  isLoading: boolean;
  error: string;
}

export const initialState: CartState = {
  items: [],
  isLoading: false,
  error: '',
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addItemToCartAction, (state, action: PayloadAction<IProduct>) => {
      state.items.push(action.payload);
    })
    .addCase(deleteItemFromCartAction, (state, action: PayloadAction<IProduct>) => {
      return { ...state, items: state.items.filter((i) => i.id !== action.payload.id) };
    })
    .addCase(changeProductQuantityAction, (state, action: PayloadAction<IProduct>) => {
      const currentIndex = state.items.findIndex((item) => item.id === action.payload.id);
      console.log(action.payload);
      if (action.payload.quantity === 0) {
        return { ...state, items: state.items.filter((i) => i.id !== action.payload.id) };
      }
      state.items[currentIndex] = {
        ...state.items[currentIndex],
        quantity: action.payload.quantity,
      };
    });
});

export default cartReducer;
