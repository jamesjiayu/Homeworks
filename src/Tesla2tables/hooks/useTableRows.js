import React, { useState } from 'react'

export default function useTableRows (initState) {
  const [rows, setRows] = useState(initState || [])

  return [rows, setRows]
}
