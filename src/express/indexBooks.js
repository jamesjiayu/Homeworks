const express = require('express')
const axios = require('axios')
const app = express()
let wishlist = [] // addBookWishlist() removeBook()
app.use(express.json())
app.get('/books', async (req, res) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${req.query.q}&startIndex=0&maxResults=10`
  let results = await axios(url)
  // console.log(results.data)
  // console.log(req.query.q)
  // res.send('books')
  res.json(results.data)
})
app.get('/wishlist', (req, res) => {
  res.json(wishlist)
  //res.send('sth diff')
})
app.post('/wishlist', (req, res) => {
  wishlist.push(req.body)
  res.json(wishlist)
  return
})
app.delete('/wishlist', (req, res) => {
  const bookId = req.body['id']
  const index = wishlist.find(book => book.id === bookId)
  console.log(index, 'index')
  if (index) {
    wishlist.splice(index, 1)
    res.send('success')
  } else { res.send('its NOT in wishlist') }
})
app.listen(9999, () => { console.log('9999 listening') })