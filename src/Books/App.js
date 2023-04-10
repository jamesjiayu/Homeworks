import React from 'react'
import { store, persistor } from './Redux/store'
import { Provider } from 'react-redux'
import Search from './Search'
import Wishlist from './Wishlist'
import { Routes, Route, Navigate } from 'react-router-dom'
import Details from './components/Details'
import { NotFound } from './components/NotFound'
import { PersistGate } from 'redux-persist/integration/react'
import styles from './App.module.css'
export default function App () {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path='/' element={<Navigate to='/search' />} />
          <Route path='/search' element={<Search />} />
          <Route path='/wishlist' element={<Wishlist />}></Route>
          <Route path='/book/:detailsID' element={<Details />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </PersistGate>
    </Provider>
  )
}
