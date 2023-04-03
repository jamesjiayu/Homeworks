import React from 'react'
import './SumNumEachCountryVanilla.css'
const array =
  [
    {
      region: "US",
      model: "A",
      sales: 150
    },
    {
      region: "US",
      model: "B",
      sales: 120
    },
    {
      region: "US",
      model: "C",
      sales: 350
    },
    {
      region: "EU",
      model: "A",
      sales: 200
    },
    {
      region: "EU",
      model: "B",
      sales: 100
    },
    {
      region: "EU",
      model: "C",
      sales: 250
    },
    {
      region: "CA",
      model: "A",
      sales: 200
    },
    {
      region: "CA",
      model: "B",
      sales: 100
    },
    {
      region: "CA",
      model: "C",
      sales: 230
    },
    {
      region: "CA",
      model: "D",
      sales: 400
    }
  ]
function createData (arr) {
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
export default function SumNumEachCountryVanilla () {
  return (
    <div><table>
      <tr>
        <th>Region</th>
        <th>Model</th>
        <th>Sales</th>
      </tr>
      {
        createData(array).map((row, index) => (
          <tr key={index}>
            <td>{row.region}</td>
            <td>{row.model}</td>
            <td >{row.sales}</td>
          </tr>))
      }
    </table></div>
  )
}
