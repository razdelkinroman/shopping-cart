import { combineReducers } from 'redux';
import cartReducer from './cart/cart-reducer';
import shopReducer from './shop/shop-reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  shop: shopReducer,
});

export default rootReducer;
