import React, { useEffect, useState } from 'react'

export default function useSelect ({ initState, data }) {
  const [val, setVal] = useState(initState || '')//init?
  const onChang = (e) => {
    //  console.log(e.target.value, 'e in useSelect'); 
    setVal(e.target.value)
  }
  useEffect(() => {
    setVal(data && data.length ? data[0] : '')
  }, [data])

  return [val, onChang, data]
}

//// If Data changes, the initial State also changes
 // In this specific scenario, data array will change when we get a response from JSON server
  // Also when category changes, the data arr in item useSelect will also change