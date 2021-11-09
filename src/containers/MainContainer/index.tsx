import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'hooks/useRedux';
import Layout from 'layout';
import { ProductItems } from 'components/ProductItems';
import { CategoryList } from 'components/CategoryList';
import { Header } from 'components/Header';
import { shopItemsSelector } from 'store/reducers/shop/shop-selectors';
import { fetchItems } from 'store/reducers/shop/shop-actions-creators';
import {
  addItemToCartAction,
  changeProductQuantityAction,
} from 'store/reducers/cart/cart-actions-creators';
import { useFetchData } from 'hooks/useFetchData';
import { IProduct } from 'models';

interface IMainContainerProps {
  setOpenCart: (open: boolean) => void;
}

export const MainContainer = ({ setOpenCart }: IMainContainerProps) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(shopItemsSelector);

  const [activeCategory, setActiveCategory] = useState('');
  const showCategories = !activeCategory;

  const { data: categories, isLoading: categoriesIsLoading } = useFetchData('categories');

  const addItemToCartHandler = (item: IProduct) => dispatch(addItemToCartAction(item));
  const changeProductQuantityHandler = (item: IProduct) =>
    dispatch(changeProductQuantityAction(item));

  const clearActiveCategory = () => setActiveCategory('');

  useEffect(() => {
    if (activeCategory) {
      dispatch(fetchItems(activeCategory));
    }
  }, [activeCategory, dispatch]);

  return (
    <Layout>
      <Header setOpenCart={setOpenCart} />
      {showCategories && (
        <CategoryList
          items={categories}
          selectCategory={setActiveCategory}
          isLoading={categoriesIsLoading}
        />
      )}

      {!showCategories && (
        <ProductItems
          products={products}
          addItemToCart={addItemToCartHandler}
          changeProductQuantity={changeProductQuantityHandler}
          backToCategories={clearActiveCategory}
        />
      )}
    </Layout>
  );
};
