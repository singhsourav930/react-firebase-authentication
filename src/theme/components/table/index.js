import React from "react";
import {
  TableBox,
  TableHeading,
  TableData,
  TablePaginationBox,
} from "./tableStyled.js";
import { get } from "lodash";
import { Pagination } from "../pagination";

export const Table = ({ ...props }) => {
  const columns = props?.columns || [];
  const row = props?.data || [];
  const isFetching = props?.isFetching || false;
  return (
    <div>
      <TableBox>
        <table cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              {Array.isArray(columns) &&
                columns.length > 0 &&
                columns.map((data, index) => {
                  return (
                    <TableHeading
                      key={`table-head-cell-${index}`}
                      style={{ width: data.width }}
                    >
                      <h5>{data?.title}</h5>
                    </TableHeading>
                  );
                })}
            </tr>
          </thead>
          <tbody>
            {Array.isArray(row) &&
              row.length > 0 &&
              row.map((rowData, index) => {
                return (
                  <tr key={index}>
                    {Array.isArray(columns) &&
                      columns.length > 0 &&
                      columns.map((colData, index) => {
                        const value = get(rowData, colData.key);
                        return (
                          <TableData key={`table-body-cell-${index}`}>
                            {colData.render
                              ? colData.render(colData, rowData)
                              : value}
                          </TableData>
                        );
                      })}
                  </tr>
                );
              })}
          </tbody>
        </table>
        {isFetching && <div className="text-center p-5"> Fetching...</div>}
      </TableBox>
      <TablePaginationBox>
        <Pagination {...props} />
      </TablePaginationBox>
    </div>
  );
};
