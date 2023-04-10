import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addBook, removeBook, } from '../Redux/store'
import { useDispatch, useSelector } from 'react-redux'
import img from '../public/backup.jpg'

export default function Details (props) {
  //const [isShow, setIsShow] = useState(false)
  const dispatch = useDispatch()
  // let params = useParams()
  // console.log(params.detailsID, 'params.detailsID')
  const bookDetails = useSelector(state => state.book.details)
  const { id, volumeInfo } = bookDetails
  // console.log(bookDetails, 'bookDetails')
  const navigate = useNavigate()

  const handleAddWishlist = (book) => {
    //navigate or navLink to detailsPage
    dispatch(addBook(book))
    navigate('/wishlist')
  }

  return (<>
    <div className='details_container'>
      <h3 className="title">{volumeInfo?.title}</h3>
      <div className="big_thumbnail">
        <img src={volumeInfo?.imageLinks?.smallThumbnail ?? img} alt={volumeInfo?.title} /> </div>
      <div className="authors">{
        volumeInfo.authors?.map(author => <div key={author}>{author}</div>)
      }</div>
      <div className="add_wishlist">
        <button onClick={() => handleAddWishlist(bookDetails)}>Add to wishlist</button>
      </div>
      <div className="desc">{volumeInfo.description}</div>

    </div>
  </>)
}
