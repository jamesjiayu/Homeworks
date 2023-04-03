import React, { useState, useEffect, useMemo } from 'react'
import Select from './components/select.jsx'
import TableCell from './components/TableCell.jsx'
import TableRow from './components/TableRow.jsx'
// let array =
//   [
//     {
//       region: "US",
//       model: "A",
//       sales: 150
//     },
//     {
//       region: "US",
//       model: "B",
//       sales: 120
//     },
//     {
//       region: "US",
//       model: "C",
//       sales: 350
//     },
//     {
//       region: "EU",
//       model: "A",
//       sales: 200
//     },
//     {
//       region: "EU",
//       model: "B",
//       sales: 100
//     },
//     {
//       region: "EU",
//       model: "C",
//       sales: 250
//     },
//     {
//       region: "CA",
//       model: "A",
//       sales: 200
//     },
//     {
//       region: "CA",
//       model: "B",
//       sales: 100
//     },
//     {
//       region: "CA",
//       model: "C",
//       sales: 230
//     },
//     {
//       region: "CA",
//       model: "D",
//       sales: 400
//     }
//   ]

function createRegionsModels (arr) {
  const regions = ['All'], models = ['All']
  arr?.forEach(ele => {
    if (!regions.includes(ele.region)) { regions.push(ele.region) }
    if (!models.includes(ele.model)) { models.push(ele.model) }
  })
  console.log(regions, 'in createRegionsModels')
  return { regions, models }
}

function createData (arr, region = 'All', model = 'All') {
  if (region === 'All' && model === 'All') { return arr }
  const fliterArr = arr.filter(ele => {
    if (ele.region === region && model === 'All') {
      return ele
    }
    if (region === "All" && ele.model === model) { return ele }
    if (ele.region === region && ele.model === model) { return ele }
  })
  return fliterArr
}

export default function RegionModelFiltersVanilla (props) {
  console.log(props, 'in RegionModelFiltersVanilla')
  const [data, setData] = useState(props.data || null)
  const [region, setRegion] = useState('All')
  const [model, setModel] = useState('All')
  const { regions, models } = createRegionsModels(data)
  //const { regions, models } = useMemo(() => createRegionsModels(data), [data])
  console.log(regions, 'regions in RegionModelFiltersVanilla')
  // useEffect(() => {
  //   setData(array)
  //   //createRegionsModels(array)
  // }, [])

  const handleRegion = (e) => {
    setRegion(e.target.value)
  }
  const handleModel = (e) => {
    //console.log(e.target.value)
    setModel(e.target.value)
  }
  useEffect(() => {
    setData(createData(data, region, model))
    // console.log(createData(array, region))
  }, [region, model])

  return (
    <div><div>
      {/* <label htmlFor="region">Region Filter:</label>
      <select name="region" id="region" value={region} onChange={(event) => handleRegion(event)}>
        {regions.map(ele => <option key={ele}> {ele} </option>)}
      </select>
            <label htmlFor="model">Model Filter:</label>
      <select name="model" id="model" value={model} onChange={(event) => handleModel(event)}>
        {models.map(ele => <option key={ele}> {ele} </option>)}
      </select> ???????????????event??????????????????????????? */}
      <Select label='RegionFilter' value={region} onChange={(e) => handleRegion(e)} options={regions} />
      <Select label='ModelFilter' value={model} onChange={handleModel} options={models} />

    </div>
      <table>
        <thead>
          <tr>
            <th>Region</th>
            <th>Model</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => (
            <TableRow key={index} >
              <TableCell>{row.region}</TableCell>
              <TableCell>{row.model}</TableCell>
              <TableCell>{row.sales}</TableCell>
            </TableRow>
          ))}
          {/* {
            data?.map((row, index) => (
              <tr key={index}>
                <td>{row.region}</td>
                <td>{row.model}</td>
                <td >{row.sales}</td>
              </tr>))
          } */}
        </tbody>
      </table></div>
  )
}
