import { useState } from 'react';
import './styles.css';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [inputPage, setInputPage] = useState(currentPage);

  const handleInputChange = (e) => {
    setInputPage(e.target.value);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handlePrevPage = () => {
    handlePageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    handlePageChange(currentPage + 1);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handlePageChange(inputPage);
    }
  };

  return (
    <div className="paginationContainer">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Prev
      </button>
      <input
        type="number"
        value={inputPage}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        min="1"
        max={totalPages}
      />
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
      <p>
        Page {currentPage} of {totalPages}
      </p>
    </div>
  );
};
