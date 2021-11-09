import { useState } from 'react';

import { AddToCartButton } from './AddToCartButton';
import { Spinner } from '../Spinner';
import { ArrowNarrowLeftIcon } from '@heroicons/react/outline';
import { IProduct } from '../../models';

interface IProductItemsProps {
  products: IProduct[];
  addItemToCart: (item: IProduct) => void;
  changeProductQuantity: (item: IProduct) => void;
  backToCategories: () => void;
}

export const ProductItems = (props: IProductItemsProps) => {
  const { products, addItemToCart, changeProductQuantity, backToCategories } = props;
  const [countVisibleProducts, setCountVisibleProducts] = useState(4);

  const onClickMoreProductsHandler = () => setCountVisibleProducts((prev) => prev + 4);
  const hasMoreProducts = products.length > countVisibleProducts;

  if (!products.length) {
    return <Spinner />;
  }

  return (
    <div className="bg-white flex flex-col">
      <div className="py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <button
          className="flex items-center text-purple-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          onClick={backToCategories}
        >
          <ArrowNarrowLeftIcon className="w-6 h-6 mr-2" /> back
        </button>
        <h2 className="text-3xl font-medium mb-10 tracking-tight text-gray-900">Most Popular</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product, index) => {
            if (index + 1 <= countVisibleProducts) {
              return (
                <div key={product.id} className="group relative">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>{product.name}</a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <p className="text-sm font-medium text-gray-900">{`${product.price}$`}</p>
                      <AddToCartButton
                        className="invisible group-hover:visible"
                        product={product}
                        addItemToCart={addItemToCart}
                        changeProductQuantity={changeProductQuantity}
                      />
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      {hasMoreProducts && (
        <button
          className="w-max border-2 mt-4 px-12 py-2 border-gray-600 self-center"
          onClick={onClickMoreProductsHandler}
        >
          Load More
        </button>
      )}
    </div>
  );
};
