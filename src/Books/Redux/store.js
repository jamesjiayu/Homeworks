import { configureStore, createSlice } from "@reduxjs/toolkit"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: { list: [] },
  reducers: {
    addBook: (state, action) => {
      if (!state.list.map(book => book.id).includes(action.payload.id))
        state.list.push(action.payload)
    },
    removeBook: (state, action) => {
      state.list = state.list.filter(book => book.id !== action.payload.id)
    }
  }
})
export const { addBook, removeBook } = wishlistSlice.actions

const bookSlice = createSlice({
  name: 'book',
  initialState: { details: {} },
  reducers: {
    bookDetails: (state, action) => {
      // console.log(action.payload)
      state.details = action.payload
    }
  }
})
export const { bookDetails } = bookSlice.actions
const persistConfig = {
  key: 'books',
  version: 1,
  storage,
  //whitelist: [],
  blacklist: ['book'],
}
const rootReducer = combineReducers({
  wishlist: wishlistSlice.reducer,
  book: bookSlice.reducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})
export let persistor = persistStore(store)

// https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })

// const rootReducer = combineReducers({
//   user: userReducer,
//   notes: NotesReducer
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
//   reducer: persistedReducer
// })

// const rootPersistConfig = {
//   key: 'root',
//   storage,
// }

// const userPersistConfig = {
//   key: 'user',
//   storage: storageSession,
// }

// const rootReducer = combineReducers({
//   user: persistReducer(userPersistConfig, userReducer),
//   notes: notesReducer
// })

// const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

// const store = configureStore({
//   reducer: persistedReducer
// })