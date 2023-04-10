const express = require('express')
const app = express()
app.get('/', (request, response) => {
  // response.write('world ')
  // response.end() /send= write + end
  response.send({ name: 'jimmy', age: 20 })
  return
})
app.get('/home/:id/:name', (req, res) => {
  res.send('/home/:/:')
})
const handler = (req, res, next) => {
  let flag = true
  if (flag) {
    // res.james = 'sth you wanna pass to next'
    console.log('handler')
  }
  else {
    res.send('ERR')
  }
  // next()
}
app.use(handler) //ORDER, all after it, will use it
// app.get('/a', (req, res, next) => { console.log('1st middleware'); next() },
//   (req, res, next) => { console.log('2nd middleware'); next() },
//   (req, res, next) => { console.log('3rd middleware') },)

// app.get('/b', [handler, handler``], handler)

app.listen(8080, () => {
  console.log('server is listening ')
})