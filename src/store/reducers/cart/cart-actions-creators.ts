import { createAction } from '@reduxjs/toolkit';
import { IProduct } from '../../../models';

export const addItemToCartAction = createAction<IProduct>('ADD_ITEM_TO_CART');
export const deleteItemFromCartAction = createAction<IProduct>('DELETE_ITEM_FROM_CART');
export const changeProductQuantityAction = createAction<IProduct>('CHANGE_PRODUCT_QUANTITY');
