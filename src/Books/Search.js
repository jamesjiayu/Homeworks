import React, { useState } from 'react'
import BooksList from './components/BooksList'
import styles from './Search.module.css'
export default function Search () {
  const [inputVal, setInputVal] = useState('')
  const [booksList, setBooksList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const handleInputChange = (e) => {
    setInputVal(e.target.value)
  }
  const handleSearch = () => {
    setIsLoading(true)
    async function getDataAPI () {
      try {
        const URL = `https://www.googleapis.com/books/v1/volumes?q=${inputVal}&startIndex=0&maxResults=3`
        const response = await fetch(URL)
        let { status, statusText, ok } = response
        console.log(ok, 'ok', statusText, 'status Text', status, 'status')//200+300+
        if (/^(2|3)\d{2}$/.test(status)) {//&& ok
          const json = await response.json()
          const data = await json.items
          return data
        }//else err-->catch ????
      } catch (err) {
        console.log(err, 'err ')
        setErrorMsg(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    function getData () {
      getDataAPI().then(data => setBooksList(data))
    }
    getData()

    // async function getDataOrError () {
    //   try {
    //     const data = await getDataAPI()
    //     setBooksList(data)
    //   } catch (err) {
    //     // setErrorMsg(err.message ?? `can't get data`)
    //   }
    //   setIsLoading(false)
    // }
    // fetch(URL).then(res => res.json())
    //   .then(res => {
    //     setBooksList(res.items)
    //   })
  }
  return (<>
    <div className={styles.container}>
      <label htmlFor='search'>
        <h3>Search for the book's title or the author's name</h3>
      </label>
      <div>
        <input value={inputVal} onChange={handleInputChange} type="search" name="search" id="search" />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
    {isLoading && <h3>loading...</h3>}
    {errorMsg && <h3>{errorMsg + '. Please try later...'}</h3>}
    <BooksList booksList={booksList} isShowRemove={false}></BooksList>
  </>)
}

