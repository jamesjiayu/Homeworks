import React, { useContext } from "react"
import Header from "../Header/Header"
import { RouterContext } from "../../MyRouter/MyBrowerRouter"

export default function Layout (props) {
  // const first = useContext(RouterContext)
  // console.log("context", first)
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="content">{props.children}</main>
    </>
  )
}

// class Layout extends React.Component {
//   render () {
//     const { handleChangeActivePage } = this.props
//     return (
//       <>
//         <header>
//           <Header handleChangeActivePage={handleChangeActivePage} />
//         </header>
//         <main className="content">{this.props.children}</main>
//       </>
//     )
//   }
// }

// export default Layout
