import React, { useState, useEffect } from 'react'
// import '@fontsource/roboto/300.css'
// import '@fontsource/roboto/400.css'
// import '@fontsource/roboto/500.css'
// import '@fontsource/roboto/700.css'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

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
// function createData (name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein }
// }
// function createData1 (region, model, sales) {
//   return { region, model, sales }
// }
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
// console.log('createData2', createData(array))
// const rows1 = [
//   createData1(region, model, sales),
// ]
// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ]

export function SumNumEachCountry () {

  // useEffect(() => {
  //   //init states arr

  //   return () => {

  //   }
  // }, [])

  return (
    <> <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>reigion</TableCell>
            <TableCell align="right">model</TableCell>
            <TableCell align="right">sales</TableCell>
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))} */}
          {
            createData(array).map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.region}</TableCell>
                <TableCell align="right">{row.model}</TableCell>
                <TableCell align="right">{row.sales}</TableCell>
              </TableRow>))
          }
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}
