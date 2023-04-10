const express = require('express')
const app = express()
const router1 = require('./router/indexRouter')
///////.env jwt 
const routerAuth = require('./router/auth')
const dotenv = require('dotenv')
dotenv.config()

app.use(express.static('Public'))
app.use(express.urlencoded({ extended: false }))
//username=james&&password=1234  www-form-urlencoded
app.use(express.json())

app.use('/auth', routerAuth)

app.use(router1)//= app.use('/', router1)
//app.use('/home', router1) //  /home/ if router1('/',handler)
// app.use((err, req, res) => {
//   res.status(404).send('Lost...')
// })
app.listen(8888, () => { console.log('8888 is listening') })