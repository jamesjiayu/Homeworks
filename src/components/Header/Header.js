import React, { useEffect } from "react"
import "./Header.css"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import MyLink from "../../MyRouter/MyLink"
export default function Header () {
  //const nav = useNavigate()
  // const [first, setfirst] = React.useState()
  // useEffect(() => {
  //   setTimeout(() => {
  //     nav('/test/route')
  //   }, 1000)
  //   setTimeout(() => {
  //     nav(-1)
  //   }, 2000)
  // }, [first])

  //  const location = useLocation()
  //console.log(location)
  //  {pathname: '/test', search: '', hash: '', state: null, key: 'exqk7452'}
  //useful if you'd like to perform some side effect whenever the current location changes.
  // useEffect(() => {
  //   console.log(location.pathname, 'location.pathname')
  // }, [location])

  return (//https://reactrouter.com/en/main/components/nav-link
    <ul className="nav">
      <h1>Header</h1>
      <li ><NavLink to='/dashBoard' end>DashBoard</NavLink></li>
      <li ><NavLink to='/todolist' >TodoList</NavLink></li>
      <li ><NavLink to='/test' end className={
        ({ isActive, isPending }) => { }}
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isPending ? "bold" : "",
            background: isActive ? "red" : "",
          }
        }}>TestNavLin</NavLink></li>
      <li><button onClick={() => {
        // setfirst({})
      }}>useNavigate</button></li>
    </ul >
  )
}

// class Header extends React.Component {
//   render () {
//     const { handleChangeActivePage } = this.props

//     return (
//       <ul className="nav">
//         <h1>Header</h1>
//         <li onClick={() => handleChangeActivePage("Dashboard")}>DashBoard</li>
//         <li onClick={() => handleChangeActivePage("TodoList")}>TodoList</li>
//       </ul>
//     )
//   }
// }

// export default Header
