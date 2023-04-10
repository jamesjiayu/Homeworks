import React, { useState, useEffect, useMemo } from 'react'
import Select from './components/select.jsx'
import TableCell from './components/TableCell.jsx'
import TableRow from './components/TableRow.jsx'
import useSelect from './hooks/useSelect.js'
let array =
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
// const regions = ['All'], models = ['All']
// function createRegionsModels (arr) {
//   arr?.forEach(ele => {
//     if (!regions.includes(ele.region)) { regions.push(ele.region) }
//     if (!models.includes(ele.model)) { models.push(ele.model) }
//   })
//   // console.log(regions, 'in createRegionsModels')
//   return { regions, models }
// }

function createData (arr, region = 'All', model = 'All') {
  // console.log(region, 'region in createDatae')
  if (region === 'All' && model === 'All') { return arr }
  const fliterArr = arr?.filter(ele => {
    if (ele.region === region && model === 'All') {
      return ele
    }
    if (region === "All" && ele.model === model) { return ele }
    if (ele.region === region && ele.model === model) { return ele }
  })
  return fliterArr
}
function formatData (items, options) {
  const obj = items.reduce((acc, curr) => {
    if (
      (!acc[curr.region] && curr.region === options.region) ||
      (!acc[curr.region] && options.region === "all")
    ) {
      acc[curr.region] = [{ region: curr.region, model: "sum", sales: 0 }]
    }
    if (
      acc[curr.region] &&
      (curr.model === options.model || options.model === "all")
    ) {
      acc[curr.region][0].sales += curr.sales
      acc[curr.region].push(curr)
    }
    return acc
  }, {})
  return obj
}
//console.log(formatData(array, { region: 'all', model: 'all' }))
// {CA: [{…}, {…}, {…}, {…}, {…}]
// EU: [{…}, {…}, {…}, {…}]
// US: [{…}, {…}, {…}, {…}]
// }
export default function RegionModelFiltersVanilla ({ data }) {
  // const [rows, setRows] = useState(data)
  const [rows, setRows] = useState([])
  const [columns, setColumns] = useState([])
  const [regions, setRegions] = useState([])
  const [models, setModels] = useState([])
  let [region, onRegionChange, regionOptions] = useSelect({ data: regions ?? [] })
  //let [model, onModelChange, modelOptions, setVal] = useSelect({ data: models ?? [] })
  const [model, setModel] = useState('All')
  const [filterRows, setFilterRows] = useState([])
  useEffect(() => {
    setRows(data)
  }, [])
  useEffect(() => {
    const columnsSet = new Set()
    const regionsSet = new Set()
    //const modelsSet = new Set() //不受region控制
    data?.forEach(item => {
      Object.keys(item).forEach(ele => columnsSet.add(ele))
      regionsSet.add(item.region)// modelsSet.add(item.model)
    })
    setColumns([...columnsSet])
    setRegions(['All', ...regionsSet])//setModels(['All', ...modelsSet])
  }, [data]) // 
  useEffect(() => { //一开始只有All并且region一变就setModel('All')
    const modelsSet = new Set()
    data?.filter(item => region === item.region)
      .forEach(item => { modelsSet.add(item.model) })
    setModels(['All', ...modelsSet])
    setModel('All')
  }, [data, region])

  // const [region, setRegion] = useState('All')
  // const [model, setModel] = useState('All')
  // const { regions, models } = createRegionsModels(array)
  //const { regions, models } = useMemo(() => createRegionsModels(data), [data])
  //console.log(regions, 'regions in RegionModelFiltersVanilla')

  // const handleRegion = (e) => {
  //   setRegion(e.target.value)
  // }
  // const handleModel = (e) => {
  //   //console.log(e.target.value)
  //   setModel(e.target.value)
  // }
  useEffect(() => {
    let newRows = data?.filter(item => {
      if (region === 'All') return true
      return item.region === region
    }).filter(item => {
      if (model === 'All') return true
      return item.model === model
    })
    setFilterRows(newRows)
    //  setRows(createData(array, region, model))//
  }, [data, region, model]) //if rows(not data).不显示

  return (
    <div>
      <div>
        {/* <label htmlFor="region">Region Filter:</label>
      <select name="region" id="region" value={region} onChange={(event) => handleRegion(event)}>
        {regions.map(ele => <option key={ele}> {ele} </option>)}
      </select>
            <label htmlFor="model">Model Filter:</label>
      <select name="model" id="model" value={model} onChange={(event) => handleModel(event)}>
        {models.map(ele => <option key={ele}> {ele} </option>)}
      </select> ???????????????event???????????????????????????(e) => onRegionChange(e)*/}
        <Select label='RegionFilter' value={region}
          onChange={onRegionChange} options={regionOptions} />
        <Select label='ModelFilter' value={model}
          onChange={(e) => { setModel(e.target.value) }} options={models} />
      </div>
      <table>
        <thead>
          <TableRow>
            {columns.map(col =>
              <TableCell key={col}>{col}</TableCell>)}
          </TableRow>
        </thead>
        <tbody>
          {filterRows?.map((row, index) => {
            //  console.log('data in map') //key use uuid
            return (
              <TableRow key={index} >{
                columns.map(col => <TableCell key={col}>{row[col]}</TableCell>)
              }</TableRow>
            )
          })}
          {/* {
            data?.map((row, index) => (
              <tr key={index}>
                <td>{row.region}</td>
                <td>{row.model}</td>
                <td >{row.sales}</td>
              </tr>))
          } */}
        </tbody>
      </table>
    </div>
  )
}
