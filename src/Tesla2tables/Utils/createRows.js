
export default function createData (arr, region = 'All', model = 'All') {
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
