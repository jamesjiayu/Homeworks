import React, { useState } from 'react'

export default function useTableRows (region = 'All', model = 'All', initState) {
  const [rows, setRows] = useState(initState || [])
  useEffect(() => {
    //setRows(createData( region, model))
    // console.log(createData(array, region))
  }, [region, model])

  return [rows, setRows]
}
