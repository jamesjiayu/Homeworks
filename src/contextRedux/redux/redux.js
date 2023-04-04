// import { createStore } from 'redux'
// import { createContext, useContext } from 'react'
// import { log } from 'console'
// //view action reducer store
// export function myCreateStore (reducer) {
//   let state, listeners = []
//   function getState () {
//     return state
//   }
//   function dispatch (action) {    //action is plain obj. action.type!=='undefined'
//     state = reducer(state, action)
//     listeners.forEach(listener => { listener() })
//     return action
//   }
//   function subscribe (listener) {
//     //    if (typeof listener !== 'function') throw new Error('listener must be a fn')
//     if (!listeners.includes(listener)) {
//       listeners.push(listener)
//     }
//     return function (listener) {
//       let index = listeners.indexOf(listener)
//       listeners.splice(index, 1)
//     }
//   }
//   dispatch({ type: Symbol() })//1st state
//   return { getState, subscribe, dispatch }
// }
// //const result: any = useSelector(selector: Function, equalityFn?: Function)
// //const counter = useSelector(state => state.value)
// //function (state) { return state.value }
// //returns a reference to the dispatch function from the Redux store.
// //You may use it to dispatch actions as needed
// //const dispatch = useDispatch()


// export const MyProviderContext = createContext()
// export function Provider (props) {
//   let { store, children } = props
//   //console.log(store)
//   return (<MyProviderContext.Provider value={{ store }}>
//     {children}
//   </MyProviderContext.Provider>)
// }//.Provider !! {{store}}

// //reducer: function receives previous state and action, return new state
// //action: object has type prop(string), message of how to update state

// function counterReducer (state = { value: 0 }, action) {
//   switch (action.type) {
//     case 'counter/incremented':
//       return { value: state.value + 1 }
//     case 'counter/decremented':
//       return { value: state.value - 1 }
//     default:
//       return state
//   }
// }

// // Create a Redux store holding the state of your app.
// // Its API is { subscribe, dispatch, getState }.
// export let store = myCreateStore(counterReducer)

// //closure: myCreateStore

// export function useSelector (selector) {
//   if (typeof selector !== 'function') {
//     throw new Error(`You must pass a function as a selector to useSelector`)
//   }
//   const context = useContext(MyProviderContext)
//   console.log(context, 'context in useSelector')
//   let state
//   context.subscribe(() => {
//     state = context.getState()
//   })
//   return selector(state)
// }
// export function useDispatch () {
//   const context = useContext(MyProviderContext) //context
//   return context.dispatch
// }



// // You can use subscribe() to update the UI in response to state changes.
// // Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// // There may be additional use cases where it's helpful to subscribe as well.

// //read store
// store.subscribe(() => console.log(store.getState()))

// // The only way to mutate the internal state is to dispatch an action.
// // The actions can be serialized, logged or stored and later replayed.
// //write store
// /* store.dispatch({ type: 'counter/incremented' }); //1
// // {value: 1}
// store.dispatch({ type: 'counter/incremented' }); //2
// // {value: 2}
// store.dispatch({ type: 'counter/decremented' }); //1
// // {value: 1} */


