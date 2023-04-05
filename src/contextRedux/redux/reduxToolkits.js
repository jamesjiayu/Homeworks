import { configureStore, createSlice, createAsyncThunk, } from "@reduxjs/toolkit"
import logger from 'redux-logger'

const mockFetch = async () => {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      resolve(99)//  rej(88) //
    }, 1000)
  })
}
//createAsyncThunk( action type string,payload creator async fn) 
// async function(values like item IDs ,thunkAPI){return a promise}
//{dispatch, getState}=thunkAPI
//https://redux-toolkit.js.org/api/createAsyncThunk#payloadcreator
export const fetchCounter = createAsyncThunk(
  'counter/fetchCounter',
  async (values, { dispatch, getState }) => {
    const response = await mockFetch()
    return response//.json()//may be response.data
  })
//slice: slices of the store
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },// 
  reducers: {
    increment (state, action) {
      state.value += 1
      // "Mutating" update syntax thanks to Immer, and no `return` needed
    },
    decrement: state => { state.value -= 1 },//not returing it =>state.value -=1
    incrementAmount: function (state, action) { state.value += action.payload },
  },
  //internal actions, which not exposed to components
  extraReducers: builder => { //fn(builder){ builder.addCase(actionCreator, reducer)}
    builder.addCase(fetchCounter.pending, () => { console.log('loaing') })
      //action.type:"counter/fetchCounter/pending"
      .addCase(fetchCounter.fulfilled, (state, action) => {//counter/fetchCounter/fulfilled
        state.value = action.payload//?
      })
      .addCase(fetchCounter.rejected, function (state, action) { console.log('sth wrong') })
    ////show notification, hide <h1>loading</h1> //action.error :  {message: '88'}
  }

})
// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { increment, decrement, incrementAmount, } = counterSlice.actions
//export const reducer = counterSlice.reducer

const todoSlice = createSlice({
  name: 'todo',
  initialState: { todos: [] },
  reducers: {
    add: (state, action) => { },
    remove: function (state, action) { },
    deleteTodo (state, action) { console.log(state) }
  },
  extraReducers: function (builder) {
    builder.addCase()
  }
})
const todoReducer = todoSlice.reducer
export const { add, remove, deleteTodo } = todoSlice.actions
export const store = configureStore({
  reducer: { // Automatically calls `combineReducers`
    counter: counterSlice.reducer,// slice 1st then put into store
    // todo: todoSlice.reducer,//todoReducer,
    // sth: sthReducer 
  },
  //middleware: fn return []//immer, thunk, sth//[...getDefaultMiddleware(),someMiddleware]
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})


// const rootReducer = combineReducers({
//   posts: postsReducer,
//   users: usersReducer
// })
//  extraReducers: builder => {
//     // Use `extraReducers` to handle actions that were generated
//     // _outside_ of the slice, such as thunks or in other slices
//     builder
//       .addCase(fetchTodos.pending, (state, action) => {
//         state.status = 'loading'
//       })
//       // Pass the generated action creators to `.addCase()`
//       .addCase(fetchTodos.fulfilled, (state, action) => {
//         // Same "mutating" update syntax thanks to Immer
//         state.status = 'succeeded'
//         state.todos = action.payload
//       })
//       .addCase(fetchTodos.rejected, (state, action) => {
//         state.status = 'failed'
//         state.todos = []
//         state.error = action.error
//       })
//   }
// const store = configureStore({
//   // Can create a root reducer separately and pass that in
//   reducer: rootReducer,
//   middleware: getDefaultMiddleware => {
//     const middleware = getDefaultMiddleware({
//       // Pass in a custom `extra` argument to the thunk middleware
//       thunk: {
//         extraArgument: { serviceLayer }
//       },
//       // Customize the built-in serializability dev check
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(customMiddleware, api.middleware)

//     // Conditionally add another middleware in dev
//     if (process.env.NODE_ENV !== 'production') {
//       middleware.push(logger)
//     }

//     return middleware
//   },
//   // Turn off devtools in prod, or pass options in dev
//   devTools: process.env.NODE_ENV === 'production' ? false : {
//     stateSanitizer: stateSanitizerForDevtools
//   }
// })