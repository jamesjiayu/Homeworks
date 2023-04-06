import React from 'react'
import { createContext } from 'react'
export const RouterContext = createContext()
export default function MyBrowerRouter ({ children }) {
  const [state, setState] = React.useState(null)                    // useState(1)
  const forceUpdate = () => { setState({}) }//setState(prevState => prevState + 1)
  //  console.log(RouterContext.Provider 'RouterContext.Provider')
  return (
    <RouterContext.Provider value={{ forceUpdate, state }}>
      {children}
    </RouterContext.Provider>
  )
}
