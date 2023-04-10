import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './BooksList.module.css'
import { useDispatch } from 'react-redux'
import { bookDetails } from '../Redux/store'
import { removeBook, } from '../Redux/store'
import img from '../public/backup.jpg'
export default function BooksList (props) {
  let { booksList, isShowRemove } = props
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClick = (book) => {
    navigate(`/book/${book.id}`)
    dispatch(bookDetails(book))
  }//<h5>Books List: </h5>
  const handleRemoveWishlist = (book) => {
    //navigate or navLink to detailsPage
    dispatch(removeBook(book))
  }
  return (<>
    <div className={styles.bookslist}>
      <ul>
        {
          booksList?.map(book => {
            let { id, volumeInfo } = book
            // let authors = volumeInfo.authors
            return <li key={id}>
              <div className={styles.title} onClick={() => handleClick(book)}>
                {/* <NavLink to={'/book/' + id}> */}
                <h4>{volumeInfo.title}</h4>
                {/* </NavLink> */}
              </div>
              <div className="authors">{
                volumeInfo.authors?.map(author => <div key={author}>{author}</div>)
              }
              </div>
              <div className={styles.thumbnail} onClick={() => handleClick(book)}>
                {/* <object data="../public/backup.jpg" type="image/jpg"> */}
                <img src={volumeInfo.imageLinks?.smallThumbnail ?? img} alt={volumeInfo.title} />
                {/* </object> */}
              </div>
              {isShowRemove && (
                <div className="remove_wishilist">
                  <button onClick={() => handleRemoveWishlist(book)}>remove from wishlist</button>
                </div>
              )}
            </li>
          })}
      </ul>
    </div>
  </>)
}
