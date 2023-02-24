import React, {} from 'react';
import "../styles/Paginacion.css"

import {Pagination} from "react-bootstrap";
import {
   ChevronRight,
   ChevronLeft,
   ChevronDoubleLeft,
   ChevronDoubleRight
} from 'react-bootstrap-icons'


export const LdTablePagination = ({currentPage, pageLimit, max, showPages = 5, setCurrentPage}) => {

   if (max <= pageLimit) {
      setCurrentPage(1);
      return null;
   }

   const _limitPages = Math.ceil(max / pageLimit);
   const _limitMorePage = Math.round(showPages / 2);

   const range = (_start_, _end_) => {
      return (new Array(_end_ - _start_ + 1)).fill(undefined).map((_, k) => k + _start_);
   };

   const pages = () => {
      const _showPages = (max >= pageLimit * showPages) ? showPages : Math.ceil(max / pageLimit);

      if (currentPage <= _limitMorePage)
         return range(1, _showPages);
      if (currentPage > (_limitPages - _limitMorePage))
         return range(_limitPages - _showPages + 1, _limitPages);
      const gap = (_showPages - _limitMorePage);
      const parGap = ((_showPages % 2) === 0) ? 1 : 0;
      return range(currentPage - gap + parGap, currentPage + gap)
   }

   const onFirst = () => setCurrentPage(1);
   const onPrev = () => setCurrentPage(currentPage - 1);
   const onNext = () => setCurrentPage(currentPage + 1);
   const onLast = () => setCurrentPage(_limitPages);

   return <Pagination className='ld-table-pagination'>
      <Pagination.First onClick={onFirst} disabled={currentPage === 1}>
         <ChevronDoubleLeft/>
      </Pagination.First>
      <Pagination.Prev onClick={onPrev} disabled={currentPage === 1}>
         <ChevronLeft/>
      </Pagination.Prev>
      {pages().map(index =>
         <Pagination.Item
            key={`pagination-item-${index}`}
            active={index === currentPage}
            onClick={() => {
               setCurrentPage(index)
            }}>
            {index}
         </Pagination.Item>
      )}
      <Pagination.Next onClick={onNext} disabled={currentPage === _limitPages}>
         <ChevronRight/>
      </Pagination.Next>
      <Pagination.Last onClick={onLast} disabled={currentPage === _limitPages}>
         <ChevronDoubleRight/>
      </Pagination.Last>
   </Pagination>
}