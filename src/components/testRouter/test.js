import React from 'react'
import { Outlet } from 'react-router-dom'
// <Outlet/>!!!!!!!!!!!!
const Test = () => {
  return (
    <div>Test
      <Outlet></Outlet>
    </div>
  )
}
export default Test