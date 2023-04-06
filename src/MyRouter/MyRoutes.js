import React, { useContext, useEffect } from 'react'
import { RouterContext } from './MyBrowerRouter'
export default function MyRoutes ({ children }) {
  const { forceUpdate } = useContext(RouterContext)
  // console.log(window.history, 'history')
  useEffect(() => {
    const listener = (e) => {
      forceUpdate()
      console.log(e, 'popstate')
    }
    window.addEventListener('popstate', listener)
    return () => {
      window.removeEventListener('popstate', listener)
    }//After your component is removed from the DOM, 
    //React will run your cleanup function one last time.
  }, [])

  return <>{children}</>
}
