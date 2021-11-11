export const productExample = {
  id: 1,
  name: 'Basic Tee',
  href: '#',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
  imageAlt: "Front of men's Basic Tee in black.",
  price: 35,
  color: 'Black',
  quantity: 1,
};

export const categoryExample = {
  id: 1,
  name: 'Desk and Office',
  description: 'Work from home accessories',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
  imageAlt:
    'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
  href: '#',
};

type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type ProductType = typeof productExample;
export type IProduct = WithOptional<ProductType, 'color'>;
export type ICategory = typeof categoryExample;
