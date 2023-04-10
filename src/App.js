import React from "react"
import "./App.css"
import TodoList from "./components/TodoList/TodoList"
import Layout from "./components/Layout/Layout"
import Dashboard from "./components/Dashboard/Dashboard"
// import { SumNumEachCountry } from "./Tesla2tables/MUI/SumSalesNumEachCountry"
// import EnhancedTable from "./Tesla2tables/MUI/SortTable"
// import DataTable from "./Tesla2tables/DataGrid"
// import RegionModelFilters from "./Tesla2tables/MUI/RegionModelFilters"
import SumNumEachCountryVanilla from "./Tesla2tables/SumNumEachCountryVanilla"
import RegionModelFiltersVanilla from "./Tesla2tables/RegionModelFiltersVanilla"
import useGetData from "./Tesla2tables/hooks/useGetData"
import CarsApp from "./contextRedux/components/CarsApp"
import { useState, createContext } from "react"
import { store } from "./contextRedux/redux/reduxToolkits"
import { Provider } from "react-redux"
import { Routes, Route, Navigate } from "react-router-dom"
import { Test } from "./components/testRouter/test"
import { TestRoute } from "./components/testRouter/TestRoute"
import { NotFound } from "./components/NotFound"
import { TestID } from "./components/testRouter/TestID"
import { TestRoute2 } from "./components/testRouter/TestRoute2"
import IndexTest from "./components/testRouter/IndexTest"
import MyRoute from "./MyRouter/MyRoute"
import MyRoutes from "./MyRouter/MyRoutes"
import { RouterView } from "./components/router/index"
import Search from "./Books/Search"
//export const MyContext = createContext()//outside fn
export default function App () {
  // const [counter, setCounter] = useState(1)
  // const increment = () => { setCounter(counter + 1) }
  // const { isLoading, error, data } = useGetData()
  return (<>
    {/*<DataTable />
      <EnhancedTable />
       <SumNumEachCountry /> 
      <RegionModelFilters />       
      <SumNumEachCountryVanilla data={data} />
      <RegionModelFiltersVanilla data={data} /> 
      <MyContext.Provider value={{ counter, increment }}> 
      <CarsApp /></MyContext.Provider> 
      <Provider store={store}><CarsApp /></Provider>
      <Layout >
        <RouterView />
      </Layout>*/}
    <Search></Search>
  </>)
}

// <Routes>
//           <Route path='/' element={<Navigate to='/dashboard' />} />
//           <Route path='/dashboard' element={<Dashboard />}></Route>
//           <Route path='/todolist' element={<TodoList />} />
//           <Route path='/test' element={<Test />}>
//             {/* <Route index element={<IndexTest />} /> */}
//             <Route path='route' element={<TestRoute />} />
//             <Route path='route2' element={<TestRoute2 />} />
//             <Route path=':id' element={<TestID />} />
//             {/* index noPath, '/test:id' <Outlet/>4kids */}
//           </Route>
//           <Route path='*' element={<NotFound />} />
//         </Routes>
//<Routes>
//         <Route path='/todolist' element={<TodoList />} />
//</Routes>
//an index route is that it's the default child route 
//when the parent matches but none of its children do.
// import Selects from "./components/Selects";
// import useGetData from "./hooks/useGetData";
// import "./App.css";

// function App() {
//   const { data, isLoading, error } = useGetData();

//   if (isLoading) return <h1>Loading...</h1>;
//   if (error) return <h1>{error}</h1>;

//   return (
//     <div className="App">
//       <Selects data={data || []} />
//     </div>
//   );
// }

// class App extends React.Component {
//   state = {
//     activePage: "TodoList",
//   };

//   handleChangeActivePage = (newActivePage) => {
//     console.log('newActivePage', newActivePage)
//     this.setState({
//       activePage: newActivePage,
//     })
//   };

//   render () {
//     let content = null
//     switch (this.state.activePage) {
//       case "Dashboard":
//         content = <Dashboard />
//         break
//       case "TodoList":
//         content = <TodoList />
//         break
//       default:
//         break
//     }
//     return (
//       <Layout handleChangeActivePage={this.handleChangeActivePage}>
//         {content}
//       </Layout>
//     )//bad, using layout pass props
//   }
// }
// export default App

{/*
//const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png'
const array = []
for (let i = 0; i < 18; i++) {
  const rndInt = Math.floor(Math.random() * 1015) + 1
  array.push(rndInt)
}
<div style={{ width: '1300px' }}>
<ul style={{ display: 'flex', flexWrap: 'wrap' }}>
  {array.map((ele, index) => <li key='index'>
    <img style={{ width: '200px', height: '200px' }}
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ele}.png`} alt="ele" /></li>)}
</ul>
</div> */}


// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// // You can do this:
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       <Route path="dashboard" element={<Dashboard />} />
//       <Route path="about" element={<About />} />
//     </Route>
//   )
// );
//<RouterProvider></RouterProvider>