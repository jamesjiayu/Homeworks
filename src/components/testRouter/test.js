import React from 'react'
import { Outlet } from 'react-router-dom'
// <Outlet/>!!!!!!!!!!!!
export const Test = () => {
  return (
    <div>Test
      <Outlet></Outlet>
    </div>
  )
}
