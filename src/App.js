import React from "react"
import "./App.css"
// import TodoList from "./components/TodoList/TodoList"
// import Layout from "./components/Layout/Layout"
// import Dashboard from "./components/Dashboard/Dashboard"
// import { SumNumEachCountry } from "./Tesla2tables/MUI/SumSalesNumEachCountry"
// import EnhancedTable from "./Tesla2tables/MUI/SortTable"
// import DataTable from "./Tesla2tables/DataGrid"
// import RegionModelFilters from "./Tesla2tables/MUI/RegionModelFilters"
import SumNumEachCountryVanilla from "./Tesla2tables/SumNumEachCountryVanilla"
import RegionModelFiltersVanilla from "./Tesla2tables/RegionModelFiltersVanilla"
import useGetData from "./Tesla2tables/hooks/useGetData"
import CarsApp from "./contextRedux/components/CarsApp"
import { useState, createContext } from "react"
export const MyContext = createContext()//outside fn
export default function App () {
  // const [counter, setCounter] = useState(1)
  // const increment = () => { setCounter(counter + 1) }
  // const { isLoading, error, data } = useGetData()
  // console.log(data, 'data in App')
  return (
    <>{/*<DataTable />
      <EnhancedTable />
       <SumNumEachCountry /> 
      <RegionModelFilters />       
      <SumNumEachCountryVanilla data={data} />
      <RegionModelFiltersVanilla data={data} /> 
      <MyContext.Provider value={{ counter, increment }}> 
      <CarsApp /></MyContext.Provider>*/}
      <CarsApp />
    </>
  )
}

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
