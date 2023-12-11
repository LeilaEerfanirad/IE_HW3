// PaginationButtons.js
import React from 'react';
import { Link } from 'react-router-dom';

const PaginationButtons = ({ currentPage
    , totalPages }) => {
        return (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            {currentPage > 1 && (
              <Link to={`/${currentPage - 1}`} style={{ marginRight: '10px' }}>
                قبلی
              </Link>
            )}
            {currentPage < totalPages && (
              <Link to={`/${currentPage + 1}`} style={{ marginLeft: '10px' }}>
                بعدی
              </Link>
            )}
          </div>
        );
      };
      
      export default PaginationButtons;
      