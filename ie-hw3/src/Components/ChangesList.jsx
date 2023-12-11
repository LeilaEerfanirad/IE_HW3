// ChangesList.js
import React from 'react';
import { useTable, useSortBy, useFilters } from 'react-table';
import { Link } from 'react-router-dom';

const ChangesList = ({ data }) => {
  const columns = React.useMemo(
    () => [
      { Header: 'نام شخص', accessor: 'name' },
      { Header: 'تاریخ تغییر', accessor: 'date' },
      { Header: 'نام آگهی تغییر یافته', accessor: 'title' },
      { Header: 'فیلد مربوطه', accessor: 'field' },
      { Header: 'مقدار قدیمی', accessor: 'old_value' },
      { Header: 'مقدار جدید', accessor: 'new_value' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useFilters, useSortBy);

  return (
    <div>
      <table {...getTableProps()} style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    borderBottom: '2px solid #dee2e6',
                    background: '#f8f9fa',
                    padding: '8px',
                    textAlign: 'center',
                  }}
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} style={{ borderBottom: '1px solid #dee2e6' }}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} style={{ padding: '8px', textAlign: 'center' }}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ChangesList;
