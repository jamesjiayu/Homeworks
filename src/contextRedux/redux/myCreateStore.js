import React from 'react'
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