import {Table} from "react-bootstrap";
import React from "react";
import "../styles/Table.css"

export const LdTableData = ({config = {}, thead, tbody, className}) => {
   const localClass = new Set((className ? className.split(' ') : []));
   localClass.add('ld-table-data');

   const uuidv4 = () => {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
         ((c ^ crypto.getRandomValues(new Uint8Array(1))[0]) & (15 >> c / 4)).toString(16)
      );
   }

   return <Table className={Array.from(localClass).join(' ')} striped hover responsive>
      <thead>
      <tr>
         {thead.map((label, k) => <th key={`thead-${k}`}>{label}</th>)}
      </tr>
      </thead>
      <tbody>
      {tbody.map((row, k) => {
         let localProps = {...(config.propsRow || {})};
         const _names = config.columns.map(i => i.name,);
         for (const key in localProps) {
            if (typeof localProps[key] === 'function') {
               const _row = Object.assign({}, ..._names.map((e, i) => ({[e]: row[i]})));
               const oldFun = localProps[key];
               localProps[key] = (e) => {
                  return oldFun(e, _row);
               }
            }
         }
         return <tr key={`row-${k}`} data-index={k} {...localProps} >
            {row.map((column) => <td key={uuidv4()}>{column}</td>)}
         </tr>
      })}
      {tbody.length === 0 && <tr>
         <td className='text-center' colSpan={thead.length}><i>{config.placeholderEmpty || 'Sin registros...'}</i></td>
      </tr>}
      </tbody>
   </Table>;

}