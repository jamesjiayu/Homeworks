import React from 'react'
import { useParams } from 'react-router-dom'

export const TestID = () => {
  let { id } = useParams() // path='/test:id'
  console.log(useParams(), 'id')
  return (
    <div>Test ID is {id}</div>
  )
}
