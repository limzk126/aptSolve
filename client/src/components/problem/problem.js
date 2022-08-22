import React, { useMemo } from 'react';
import { useTable } from 'react-table';

const Problem = () => {
  const columns = [
    {
      Header: 'Title',
      accessor: 'title',
    },
    {
      Header: 'Solved Yourself',
      accessor: 'yourself',
    },
    {
      Header: 'Thinking Time',
      accessor: 'think',
    },
    {
      Header: 'Coding Time',
      accessor: 'code',
    },
    {
      Header: 'Debug Time',
      accessor: 'debug',
    },
    {
      Header: 'Total Time',
      accessor: 'total',
    },
    {
      Header: 'Comments',
      accessor: 'comments',
    },
  ];
  const data = [
    {
      title: 'sas',
      yourself: 'yas',
      think: 10,
      code: 11,
      debug: 20,
      total: 100,
      comments: 'YNO',
    },
  ];
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell, idx) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Problem;
