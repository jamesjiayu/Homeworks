import * as React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
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
const rows = array.map((ele, index) => { return { id: index + 1, ...ele } })
//console.log(rows)//{id: 1, region: 'US', model: 'A', sales: 150}//['region','model','sales']
const columns = Object.keys(array[0]).map(ele => {
  if (ele === 'sales') {
    return {
      field: ele,
      headerName: ele,
      width: 100,
      filterable: false
    }
  }
  return {
    field: ele,
    headerName: ele,
    width: 100
  }
})
// [
//   { field: 'region', headerName: 'Region', width: 90, },
//   { field: 'model', headerName: 'Model', width: 90, },
//   {
//     field: 'sales',
//     headerName: 'Sales',
//     type: 'number',
//     width: 120,
//   },]
// const newColumns = columns.map(col => {
//   if (col.field === 'sales') { return { ...col, filterable: false } }
//   return col
// })
export default function RegionModelFilters () {
  //must div outside DataGrid
  return (<div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      slots={{ toolbar: GridToolbar }}
    />
  </div>)
}
