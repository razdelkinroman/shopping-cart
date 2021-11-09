import { useAppSelector, useAppDispatch } from 'hooks/useRedux';
import { CartItems } from 'components/CartItems';
import { cartItemsSelector, totalPriceSelector } from 'store/reducers/cart/cart-selectors';
import { deleteItemFromCartAction } from 'store/reducers/cart/cart-actions-creators';
import { IProduct } from 'models';

interface ICartContainerProps {
  setOpenCart: (open: boolean) => void;
  state: boolean;
}
export const CartContainer = ({ setOpenCart, state }: ICartContainerProps) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(cartItemsSelector);
  const totalPrice = useAppSelector(totalPriceSelector);

  const deleteItemFromCartHandler = (item: IProduct) => dispatch(deleteItemFromCartAction(item));

  const onCloseCartHandler = () => setOpenCart(false);

  return (
    <CartItems
      items={cartItems}
      open={state}
      onClose={onCloseCartHandler}
      deleteItemFromCart={deleteItemFromCartHandler}
      totalPrice={totalPrice}
    />
  );
};
