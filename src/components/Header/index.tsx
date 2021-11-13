import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';

interface IHeaderProps {
  setOpenCart: (state: boolean) => void;
  itemsCountFromCart: number;
}

export const Header = ({ setOpenCart, itemsCountFromCart }: IHeaderProps) => {
  return (
    <div className="h-12 px-8 py-4 flex flex-row-reverse">
      <div className="relative">
        <ShoppingCartIcon className="h-12 w-12" onClick={() => setOpenCart(true)} />
        {itemsCountFromCart ? (
          <span className="absolute flex top-0 right-0 w-5 h-5 bg-red-500 text-white font-semibold text-sm rounded-full items-center justify-center">
            {itemsCountFromCart}
          </span>
        ) : null}
      </div>
    </div>
  );
};
