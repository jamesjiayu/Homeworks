const express = require('express')
const app = express()
const router = require('./router/indexRouter')
app.use(express.static('Public'))

app.use(express.urlencoded({ extended: false }))
//username=james&&password=1234  www-form-urlencoded
app.use(express.json())

app.use(router)//= app.use('/', router)
//app.use('/home', router) //  /home/ if router('/',handler)
app.use((err, req, res) => {
  res.status(404).send('Lost...')
})
app.listen(8888, () => { console.log('8888 is listening') })