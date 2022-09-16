/* eslint-disable no-constant-condition */
import { useEffect, useState } from 'react';
import { IProduct } from '../../models';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline';

import { useAppSelector } from '../../hooks/useRedux';
import { itemInCartSelector } from '../../store/reducers/cart/cart-selectors';
import { RootState } from '../../store/store';

interface IQuantityCounterProps {
  itemInCart: IProduct | undefined;
  changeProductQuantity: (item: IProduct) => void;
}

const QuantityCounter = ({
  itemInCart,

  changeProductQuantity,
}: IQuantityCounterProps) => {
  const [count, setCount] = useState(itemInCart?.quantity || 1);

  useEffect(() => {
    if (itemInCart) {
      const updatedProduct = {
        ...itemInCart,
        quantity: count,
      };
      changeProductQuantity(updatedProduct);
    }
  }, [count]);

  return (
    <div className="w-20 h-7 flex justify-between">
      <button>
        <MinusCircleIcon className="w-4 h-5" onClick={() => setCount((prev) => prev - 1)} />
      </button>
      <span>{count}</span>
      <button>
        <PlusCircleIcon className="w-4 h-5" onClick={() => setCount((prev) => prev + 1)} />
      </button>
    </div>
  );
};

interface IProductItemsProps {
  className: string;
  product: IProduct;
  addItemToCart: (item: IProduct) => void;
  changeProductQuantity: (item: IProduct) => void;
}

export const AddToCartButton = (props: IProductItemsProps) => {
  const { className, product, addItemToCart, changeProductQuantity } = props;
  const itemInCart = useAppSelector((state: RootState) => itemInCartSelector(state, product.id));

  return (
    <>
      {itemInCart ? (
        <QuantityCounter changeProductQuantity={changeProductQuantity} itemInCart={itemInCart} />
      ) : (
        <button
          className={`${className} py-1 px-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 disabled:opacity-50 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          onClick={() => addItemToCart(product)}
          disabled={!!itemInCart}
        >
          Add to cart
        </button>
      )}
    </>
  );
};
