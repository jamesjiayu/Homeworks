import React from 'react'
import { useParams } from 'react-router-dom'

const TestID = () => {
  let { id } = useParams() // path='/test:id'
  console.log(useParams(), 'id')
  return (
    <div>Test ID is {id}</div>
  )
}
export default TestID