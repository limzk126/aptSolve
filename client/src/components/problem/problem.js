/* eslint-disable react/jsx-key */
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useTable } from 'react-table';
import { useSelector, useDispatch } from 'react-redux';
import CommentModal from '../modals/commentModal';
import EditModal from '../modals/editModal';
import { setSelectedProblem } from '../../reducers/selectedProblemReducer';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  deleteProblem,
  initializeProblems,
} from '../../reducers/problemReducer';
import problemService from '../../services/problem';

const Problem = () => {
  const dispatch = useDispatch();
  let allData = useSelector((state) => state.problem);
  const [data, setData] = useState([]);
  const [commentsVisible, setCommentsVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const effectTriggeredRef = useRef(false);

  useEffect(() => {
    if (!window.localStorage.getItem('user')) return;

    const user = JSON.parse(window.localStorage.getItem('user'));
    if (user.token) {
      problemService.setToken(user.token);
      dispatch(initializeProblems());
    }
  }, []);

  useEffect(() => {
    if (!allData || !allData.length) return;

    if (!effectTriggeredRef.current) {
      setData(allData.slice(0, 10));
      effectTriggeredRef.current = true;
    } else {
      setData(allData.slice(0, data.length));
    }
  }, [allData]);

  const deleteRow = (id) => () => {
    dispatch(deleteProblem(id));
  };

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
        Cell: ({ cell, row }) => {
          return (
            <div className="text-white flex justify-center">
              <svg
                onClick={() => {
                  dispatch(setSelectedProblem(row.original));
                  setCommentsVisible(true);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 hover:text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                />
              </svg>
            </div>
          );
        },
      },
      {
        Header: 'Actions',
        Cell: ({ cell, row }) => {
          return (
            <div className="text-white">
              <svg
                onClick={() => {
                  dispatch(setSelectedProblem(row.original));
                  setEditVisible(true);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 hover:text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 hover:text-black mx-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <svg
                onClick={deleteRow(row.original.id)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 hover:text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
          );
        },
      },
    ],
    []
  );

  const loadMoreHandler = () => {
    const lastItem = data.slice(-1);
    const idx = allData.findIndex((x) => {
      return x.id === lastItem[0].id;
    });
    setData(data.concat(allData.slice(idx + 1, idx + 101)));
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <CommentModal
        visible={commentsVisible}
        onClose={() => setCommentsVisible(false)}
      />
      <EditModal
        visible={editVisible}
        onClose={() => setEditVisible(false)}
        isEdit={true}
      />
      <div className="bg-black shadow-md rounded my-6">
        <InfiniteScroll
          dataLength={rows.length}
          next={loadMoreHandler}
          hasMore={true}
          load={<h3>Loading more items ...</h3>}
        >
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
                    className="border-b border-gray-200 hover:text-black hover:bg-purple-400"
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
        </InfiniteScroll>
      </div>
    </>
  );
};

export default Problem;
