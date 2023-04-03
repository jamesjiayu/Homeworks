import React from 'react'
import TableCell from './TableCell'
export default function TableRow(props) {
  // console.log(props, 'row props') //arry of 3 TableCells
  return (
    //!!!whay  {...props} .just pass the children or strings?
    <tr {...props}>
      {/* {tableCells.map((cell) => (
        <TableCell>{cell}</TableCell>
      ))} */}
    </tr>
  )
}
