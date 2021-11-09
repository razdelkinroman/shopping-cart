import { IProduct } from './../../../../models/index';
import '@testing-library/jest-dom';
import reducer, { initialState } from '../cart-reducer';
import { productExample } from '../../../../models';
import {
  addItemToCartAction,
  changeProductQuantityAction,
  deleteItemFromCartAction,
} from '../cart-actions-creators';

const updatedProduct: IProduct = {
  ...productExample,
  quantity: 2,
};
const deletedProduct: IProduct = {
  ...productExample,
  quantity: 0,
};

test('добавить продукт в пустую корзину', () => {
  expect(reducer(initialState, addItemToCartAction(productExample))).toEqual({
    items: [productExample],
    isLoading: false,
    error: '',
  });
});

test('удалить продукт из корзины', () => {
  expect(
    reducer({ ...initialState, items: [productExample] }, deleteItemFromCartAction(productExample))
  ).toEqual(initialState);
  expect(
    reducer(
      { ...initialState, items: [productExample] },
      changeProductQuantityAction(deletedProduct)
    )
  ).toEqual(initialState);
});

test('изменить количество продукта в корзине', () => {
  expect(
    reducer(
      { ...initialState, items: [productExample] },
      changeProductQuantityAction(updatedProduct)
    )
  ).toEqual({
    items: [updatedProduct],
    isLoading: false,
    error: '',
  });
});
