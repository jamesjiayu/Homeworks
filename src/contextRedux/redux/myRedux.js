import React, { createContext, useContext } from 'react'
import { createStore } from 'redux'
export let store = myCreateStore(reducer)

const ReduxContext = createContext()
export function Provider (props) {
  const { store, children } = props// or value={store}
  return (<ReduxContext.Provider value={{ store, x: 1 }}>
    {children}
  </ReduxContext.Provider>
  )
}

export function reducer (state = { counter: 0 }, action) { //init
  switch (action.type) {
    case 'increment':
      return { counter: state.counter + 1 }
    case 'decrement':
      return { counter: state.counter - 1 }
    default:
      return state
  }
}
function myCreateStore (reducer) {
  let listeners = []
  let state // = reducer(state, action)
  const getState = () => state
  const subscribe = (listener) => {//list is fn
    !listeners.includes(listener) && listeners.push(listener)
    return () => {
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }
  const dispatch = (action) => {//action plain Obj && action.type
    state = reducer(state, action)
    listeners.forEach(listener => listener())
    return action//
  }
  dispatch({ type: Symbol() })
  return { getState, subscribe, dispatch }
}

export const useDispatch = () => {
  const context = useContext(ReduxContext)
  // console.log(context, 'context in usaDispatch myRedux')
  return context.store.dispatch
}
export const useSelector = (selector) => { //selector is fn
  const context = useContext(ReduxContext)
  context.store.subscribe(() => { })//? update rerender?
  const state = context.store.getState()
  return selector(state)
}

//Closure!!!!
//createStore(reducer, [preloadedState], [enhancer]) return store
//initial state. ||| (Function): store enhancer
//A reducing function that returns the next state tree,
//given the current state tree and an action to handle.
//store:getState() dispatch(action) subscribe(listener) replaceReducer(nextReducer)



//const result: any = useSelector(selector: Function, equalityFn?: Function)
//const counter = useSelector(state => state.value)//function (state) { return state.value }
//returns a reference to the dispatch function from the Redux store.
//You may use it to dispatch actions as needed
//const dispatch = useDispatch()

// mapStateToProps?: Function
// mapDispatchToProps?: Function | Object
// mergeProps?: Function
// options?: Object