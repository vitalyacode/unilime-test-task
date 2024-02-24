import { useCallback, useState } from 'react';
import { Input } from '../../../../shared/Input';
import './styles.css';

const initFilters = {
  title: '',
};

export const ProductFilters = ({ handleSearch }) => {
  const [filters, setFilters] = useState(initFilters);

  const handleFiltersChange = useCallback(
    (propName) => (e) => {
      setFilters((prev) => ({ ...prev, [propName]: e.target.value }));
    },
    []
  );

  return (
    <div className="filters">
      <Input
        value={filters.title}
        onChange={handleFiltersChange('title')}
        style={{ width: '100%' }}
        placeholder="Title"
        label="Title:"
      />
      <button onClick={() => handleSearch(filters)}>Search</button>
    </div>
  );
};
