import React, { useState, useEffect } from 'react'
import getData from '../api/getData'
export default function useGetData (initState) {
  const [data, setData] = useState(initState || null)//?init
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  async function fetchData () {
    try {
      const res = await getData()
      setData(res)
      //console.log(data, 'data in useGetData')
    } catch (error) {
      setError(error.message || 'sth wrong when fetching data')
    }
    setIsLoading(false)//?here or in useEffect

  }
  useEffect(() => {
    fetchData()
    // getData().then(val => {
    //   setData(val)
    //   console.log('data:', data)
    // })
    //setIsLoading(false)
  }, [])

  return { isLoading, error, data }
}
