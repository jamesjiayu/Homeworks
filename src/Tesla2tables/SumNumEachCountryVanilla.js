import React, { useMemo } from 'react'
import './SumNumEachCountryVanilla.css'
import TableCell from './components/TableCell'
import TableRow from './components/TableRow'
function createData (arr) {
  if (arr === null) { arr = [] }//1st time
  let sumUS = 0, sumEU = 0, sumCA = 0, arrUS = [], arrEU = [], arrCA = []
  for (let i = 0; i < arr.length; i++) {
    let { region, model, sales } = arr[i]
    switch (region) {
      case 'US':
        sumUS += sales
        arrUS.push(arr[i])
        break
      case 'EU':
        sumEU += sales
        arrEU.push(arr[i])
        break
      case 'CA':
        sumCA += sales
        arrCA.push(arr[i])
        break
      default:
        break
    }
  }
  return [{
    region: "US",
    model: "sum",
    sales: sumUS
  }, ...arrUS, {
    region: "EU",
    model: "sum",
    sales: sumEU
  }, ...arrEU, {
    region: "CA",
    model: "sum",
    sales: sumCA
  }, ...arrCA]
}
export default function SumNumEachCountryVanilla ({ data }) {
  let rows = useMemo(() => createData(data), [data])
  return (
    <div><table>
      <thead>
        <TableRow>
          <TableCell>Region</TableCell>
          <TableCell>Model</TableCell>
          <TableCell>Sales</TableCell>
        </TableRow>
      </thead>
      <tbody>
        {/* {
          rows.map((row, index) => (
            <tr key={index}>
              <td>{row.region}</td>
              <td>{row.model}</td>
              <td >{row.sales}</td>
            </tr>))
        } */}
        {
          rows.map((row, index) => (
            <TableRow key={index} >
              <TableCell>{row.region}</TableCell>
              <TableCell>{row.model}</TableCell>
              <TableCell>{row.sales}</TableCell>
            </TableRow>))
        }
      </tbody>
    </table></div>
  )
}
