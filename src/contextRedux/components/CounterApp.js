import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Component } from "react"
import { useContext } from "react"
import { store, useSelector, useDispatch, } from "../redux/myRedux"
// import { MyContext } from "../../App"
//import { CounterContext } from "../CounterContext"
//import { store, MyProviderContext, useSelector, useDispatch } from "../redux/redux"
//import { useSelector, useDispatch, connect } from "react-redux"


export const CounterApp = (props) => {
  //console.log(props, 'props in CounterApp')
  // const { counter, increment } = useContext(MyContext)
  // console.log(useContext(MyContext))
  // const { store } = useContext(MyProviderContext)
  // console.log(store, 'in countapp store')
  // // const { counter, increment } = useContext(CounterContext)
  // const [counter, setCounter] = useState(store.getState().counter)
  // useEffect(() => {
  //   store.subscribe(() => {
  //     const { counter } = store.getState()
  //     setCounter(counter)
  //   })
  // }, [])
  // const counter = useSelector(state => state.value)
  //const dispatch = useDispatch()
  //console.log(store.getState(), 'getState()')
  // const [counter, setCounter] = useState(store.getState().value)//.value
  // useEffect(() => {
  //   store.subscribe(() => setCounter(store.getState().value))//()=// .value
  // }, [])

  //const result: any = useSelector(selector: Function, equalityFn?: Function)
  //const counter = useSelector(state => state.value)//function (state) { return state.value }
  //returns a reference to the dispatch function from the Redux store.
  //You may use it to dispatch actions as needed
  //const dispatch = useDispatch()
  const dispatch = useDispatch()
  const handleIncrement = () => {
    // dispatch({ type: "counter/incremented" })
    // store.dispatch({ type: 'counter/incremented' })
  }
  const handleDecrement = () => {
    //  dispatch({ type: "counter/decremented" })
    //store.dispatch({ type: 'decrement' })
    dispatch({ type: 'decrement' })
  }
  return (
    <div>
      <h1>Counter</h1>
      {/* <div>{counter}</div>

      <button onClick={() => store.dispatch({ type: 'increment' })}>increment</button> */}
      <button onClick={handleDecrement}>decrement</button>
      {/* <button onClick={increment}>increment</button> */}
    </div>
  )
}

//connect: function(mapStateToProps, mapDispatchToProps) return HOC

// export class CounterApp extends Component {

//   render () {
//     console.log(this.props)
//     return (
//       <div>
//         <h1>Counter</h1>
//         <div>{this.props.val}</div>

//         <button onClick={this.props.increment}>increment</button>
//         <button onClick={this.props.decrement}>increment</button>
//       </div>
//     )
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'counter/incremented' }),
//     decrement: () => dispatch({ type: 'counter/decremented' }), //{ type:}
//   }
// }
// export default connect((state) => {
//   return { val: state.value }
// }, mapDispatchToProps)(CounterApp)//

// const mapStateToProps = (state) => ({
//   counter: state.value,
// })


// const mapDispatchToProps = (dispatch) => {
//   return {
//     // dispatching plain actions
//     increment: () => dispatch({ type: 'counter/incremented' }),
//     decrement: () => dispatch({ type: 'counter/decremented' }),
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)
