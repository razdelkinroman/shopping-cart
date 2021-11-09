import { RootState } from '../../store';

export const shopItemsSelector = (state: RootState) => state.shop.items;
