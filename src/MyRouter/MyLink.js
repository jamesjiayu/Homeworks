import React, { useContext } from 'react'
import { RouterContext } from './MyBrowerRouter'
export default function MyLink ({ to, children }) {
  const { forceUpdate } = useContext(RouterContext)
  console.log(to, 'history')
  const handleclick = (evt) => {//react call it and give arg
    evt.preventDefault() // window.location.href = to; location refresh,but history not
    window.history.pushState({}, '', to)//pushState(state, unused, url)
    forceUpdate()
  }
  return (
    <a href={to} onClick={handleclick}>{children}</a>)
}
