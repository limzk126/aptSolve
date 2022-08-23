/* eslint-disable react/jsx-key */
import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { useSelector } from 'react-redux';

const Problem = () => {
  const data = useSelector((state) => state.problem);
  console.log('DAATAAAA', data);
  const columns = useMemo(
    () => [
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
    ],
    []
  );
  let fakedata = [
    {
      title: 'extremely long title just because lol. Its gonna be even longer.',
      yourself: 'yas',
      think: 10,
      code: 111,
      debug: 20,
      total: 100,
      comments: 'YNO',
    },
  ];
  for (let i = 0; i < 100; ++i) {
    fakedata = fakedata.concat(fakedata[0]);
  }
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div className="bg-black shadow-md rounded my-6">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="py-3 px-6 text-left"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="text-white text-sm font-medium"
        >
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="border-b border-gray-200 hover:bg-purple-400"
              >
                {row.cells.map((cell, idx) => (
                  <td
                    {...cell.getCellProps()}
                    className="py-3 px-6 text-left whitespace-nowrap"
                  >
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

export default Problem;
