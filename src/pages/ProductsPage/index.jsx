import { useCallback, useEffect, useState } from 'react';
import httpClient from '../../api/httpClient';
import { API_ROUTES } from '../../api/routes';
import QueryString from 'qs';
import { ProductCard } from '../../components/ProductCard';
import './styles.css';
import { Pagination } from '../../components/Pagination';

export const ProductsPage = () => {
  const [products, setProducts] = useState({});
  const [pagination, setPagination] = useState({ page: 1 });

  const fetchProducts = useCallback(async () => {
    const { page } = pagination;

    if (!products[page]) {
      const { data } = await httpClient.get(
        API_ROUTES.PRODUCTS,
        QueryString.stringify({ ...pagination })
      );
      setProducts((prev) => ({ ...prev, [pagination.page]: data.data }));
    }
  }, [pagination, products]);
  console.log(products);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const currentProducts = products[pagination.page];

  return (
    <div className="productsPageContainer">
      <div className="filters">
        <p>filter 1</p>
        <p>filter 2</p>
      </div>
      <div className="productsWrapContainer">
        <div className="productsContainer">
          {currentProducts &&
            currentProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
        <Pagination />
      </div>
    </div>
  );
};
