import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CartItems } from '../index';
import { productExample } from '../../../models';

const func1 = jest.fn();
const closeFunc = jest.fn();

test('open cart', () => {
  const items = [productExample];
  const { unmount } = render(
    <CartItems items={items} open onClose={closeFunc} deleteItemFromCart={func1} totalPrice={500} />
  );

  expect(screen.getByText(/Shopping cart/i)).toBeInTheDocument();
  expect(screen.getByText(productExample.name)).toBeInTheDocument();

  userEvent.click(screen.getByTestId('close-cart-button'));
  userEvent.click(screen.getByText(/Continue Shopping/i));

  expect(closeFunc).toHaveBeenCalledTimes(2);
  unmount();
  expect(screen.queryByText(/Shopping cart/i)).toBeNull();
});
