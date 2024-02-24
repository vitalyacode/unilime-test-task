import { useCallback, useState } from 'react';
import { Input } from '../../../../shared/Input';
import './styles.css';
import { getToday } from '../../../../utils/getToday';

const initFilters = {
  title: '',
  price_to: 100000,
  price_from: 1,
  from: '2020-01-01',
  to: getToday(),
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
        placeholder="Price from"
        label="Price from:"
      />
      <Input
        value={filters.price_to}
        onChange={(e) => handleFiltersChange('price_to', e.target.value, 'number')}
        onBlur={handlePriceToOnBlur}
        min={0}
        type="number"
        className="filterInput"
        placeholder="Price to"
        label="Price to:"
      />
      <Input
        value={filters.from}
        onChange={(e) => handleFiltersChange('from', e.target.value)}
        min={0}
        type="date"
        className="filterInput"
        label="Date from:"
      />
      <Input
        value={filters.to}
        onChange={(e) => handleFiltersChange('to', e.target.value)}
        min={0}
        type="date"
        className="filterInput"
        label="Date to:"
      />
      <button onClick={() => handleSearch(filters)}>Search</button>
    </div>
  );
};
