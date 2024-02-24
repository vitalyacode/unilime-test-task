import { useCallback, useEffect, useState } from 'react';
import httpClient from '../../api/httpClient';
import { API_ROUTES } from '../../api/routes';
import './styles.css';
import { Pagination } from '../../components/Pagination';
import { ProductCard } from './components/ProductCard';
import { ProductFilters } from './components/ProductFilters';

const initPagination = { page: 1 };

export const ProductsPage = () => {
  const [products, setProducts] = useState({});
  const [pagination, setPagination] = useState(initPagination);
  const [totalPages, setTotalPages] = useState();
  const [filters, setFilters] = useState();

  const onPageChange = (newPage) => {
    setPagination((prev) => ({ ...prev, page: newPage }));
  };

  const handleSearch = (newFilters) => {
    setPagination(initPagination);
    setProducts({});
    setFilters(newFilters);
  };

  const fetchProducts = useCallback(async () => {
    const { page } = pagination;

    if (!products[page]) {
      const { data } = await httpClient.get(API_ROUTES.PRODUCTS, {
        params: { ...pagination, ...filters },
      });
      setProducts((prev) => ({ ...prev, [pagination.page]: data.data }));
      setTotalPages(data.last_page);
    }
  }, [filters, pagination, products]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const currentProducts = products[pagination.page];

  return (
    <div className="productsPageContainer">
      <ProductFilters handleSearch={handleSearch} />
      <div className="productsWrapContainer">
        <div className="productsContainer">
          {currentProducts
            ? currentProducts.length
              ? currentProducts.map((product) => <ProductCard key={product.id} product={product} />)
              : 'Products by searched filters not found'
            : 'Products not found'}
        </div>
        <Pagination
          currentPage={pagination.page}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};
