import React, { useContext } from 'react'
import { RouterContext } from './MyBrowerRouter'

export default function MyRoute ({ path, element }) {
  // console.log(window.location)
  const context = useContext(RouterContext)
  // let { forceUpdate } = useContext(RouterContext)
  // console.log(context, 'context')
  if (path === window.location.pathname) {
    return element
  }
}
