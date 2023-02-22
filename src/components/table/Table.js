import React,{ useMemo, useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Table as BsTable, Container } from "react-bootstrap";

import Pagination from "../pagination";

 import "./Table.css";

const Table = ({
  data = [],
  columns = [],
  navigationBar,
  pagination,
  paginate,
  emptyText = "No data",
  setPageTest
}) => {
  const [currentPage, setCurrentPage] = useState(paginate.page);

  const handleOnPageChange = useCallback((paginationData) => {
    const currentPageNumber = paginationData.currentPage;

    setCurrentPage(currentPageNumber);
    setPageTest(currentPageNumber);
  });

  const body = useMemo(() => {
    const pageData = pagination ? data : data;
    return pageData.map((row, index) => {
      return (
        <tr key={index}>
          {columns.map((column) => {
            return <td key={column.key}>{column.render(row, index)}</td>;
          })}
        </tr>
      );
    });
  });

  const head = useMemo(() => {
    return columns.map((column) => <th key={column.key}>{column.title}</th>);
  }, [columns]);

  const pages = useMemo(() => {
    if (!pagination) {
      return null;
    }

    return (
      <Container className="ld-table-pagination">
        <Pagination
          onPageChange={handleOnPageChange}
          totalElements={data.length}
          paginate={paginate}
        />
      </Container>
    );
  }, [pagination, data,currentPage,paginate]);

  return (
    <div className="ld-table-container">
      {navigationBar}
      <div className="ld-table-col">
        <BsTable bordered className="table ld-table" hover striped>
          <thead className="ld-table-head">
            <tr>{head}</tr>
          </thead>
          {data.length > 0 && <tbody>{body}</tbody>}
        </BsTable>
        {data.length === 0 && <div className="empty-table">{emptyText}</div>}
      </div>

    </div>
  );
};

Table.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      title: PropTypes.string,
      render: PropTypes.func,
    })
  ),
  pagination: PropTypes.bool,
  paginate: PropTypes.shape({
    hasNextPage: PropTypes.bool,
    hasPreviousPage: PropTypes.bool,
    itemCount: PropTypes.number,
    page: PropTypes.number,
    pageCount: PropTypes.number,
    take: PropTypes.number,
  }),
  pageLimit: PropTypes.number,
  navigationBar: PropTypes.node,
  emptyText: PropTypes.any,
};

export default Table;
