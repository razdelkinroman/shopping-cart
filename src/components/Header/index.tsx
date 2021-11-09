import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';

interface IHeaderProps {
  setOpenCart: (state: boolean) => void;
}

export const Header = ({ setOpenCart }: IHeaderProps) => {
  return (
    <div className="h-12 px-8 py-4 flex flex-row-reverse">
      <ShoppingCartIcon className="h-8 w-8" onClick={() => setOpenCart(true)} />
    </div>
  );
};
