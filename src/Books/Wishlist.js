import React, { useEffect, useState } from 'react'
import BooksList from './components/BooksList'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Wishlist.module.css'
export default function Wishlist () {
  //const dispatch = useDispatch()
  const wishlist = useSelector(state => state.wishlist.list)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(false) ///
  }, [])
  return (<>
    <div className={styles.container}><h3>Wishlist: </h3>
      {isLoading && <h3>loading...</h3>}
      <BooksList booksList={wishlist} isShowRemove={true}></BooksList>
    </div>
  </>)//dispatch={dispatch}
}
