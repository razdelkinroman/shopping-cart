import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { IProduct } from '../../../models';

export const cartItemsSelector = (state: RootState) => state.cart.items;

export const totalPriceSelector = createSelector(cartItemsSelector, (items) =>
  items.reduce((acc: number, item: IProduct) => acc + item.price * item.quantity, 0)
);

const selectItemId = (state: RootState, itemId: number) => itemId;

export const itemInCartSelector = createSelector(
  [cartItemsSelector, selectItemId],
  (items, itemId) => items.find((item) => item.id === itemId)
);
