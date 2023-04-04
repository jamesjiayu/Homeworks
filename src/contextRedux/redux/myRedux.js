import React, { createContext } from 'react'
import { createStore } from 'redux'
export let store = createStore(reducer)

const Provider = createContext()
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