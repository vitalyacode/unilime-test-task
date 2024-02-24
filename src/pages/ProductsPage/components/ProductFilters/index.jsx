import { useCallback, useState } from 'react';
import { Input } from '../../../../shared/Input';
import './styles.css';

const initFilters = {
  title: '',
  price_to: 100000,
  price_from: 1,
};

export const ProductFilters = ({ handleSearch }) => {
  const [filters, setFilters] = useState(initFilters);

  const handleFiltersChange = useCallback((propName, newValue, type) => {
    setFilters((prev) => ({
      ...prev,
      [propName]: type === 'number' ? Number(newValue) : newValue,
    }));
  }, []);

  const handlePriceFromOnBlur = () => {
    if (filters.price_from > filters.price_to && typeof filters.price_to === 'number') {
      handleFiltersChange('price_from', filters.price_to - 1);
    }
  };

  const handlePriceToOnBlur = () => {
    if (filters.price_from > filters.price_to && typeof filters.price_from === 'number') {
      handleFiltersChange('price_to', filters.price_from + 1);
    }
  };

  return (
    <div className="filters">
      <Input
        value={filters.title}
        onChange={(e) => handleFiltersChange('title', e.target.value)}
        style={{ width: '100%' }}
        className="filterInput"
        placeholder="Title"
        label="Title:"
      />
      <Input
        value={filters.price_from}
        onBlur={handlePriceFromOnBlur}
        onChange={(e) => handleFiltersChange('price_from', e.target.value, 'number')}
        className="filterInput"
        type="number"
        min={0}
        style={{ width: '100%' }}
        placeholder="Price from"
        label="Price from:"
      />
      <Input
        value={filters.price_to}
        onChange={(e) => handleFiltersChange('price_to', e.target.value, 'number')}
        onBlur={handlePriceToOnBlur}
        style={{ width: '100%' }}
        min={0}
        type="number"
        className="filterInput"
        placeholder="Price to"
        label="Price to:"
      />
      <button onClick={() => handleSearch(filters)}>Search</button>
    </div>
  );
};
