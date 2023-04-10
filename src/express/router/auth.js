const routerAuth = require('express').Router()

const jwt = require('jsonwebtoken')
const CryptoJS = require('crypto-js')

// routerAuth.get('/', (req, res) => {
//   res.send('test')
// })
const users = []//{"username":"james", "password":"123456"}
routerAuth.post('/register', (request, response) => {
  const newUser = {
    username: request.body.username,
    password: CryptoJS.AES.encrypt(
      request.body.password,
      process.env.PASSWORD_SECRET
    ).toString()
  }
  users.push(newUser)
  response.status(200).send('sucess rgst')
})



routerAuth.post('/login', (req, res) => {
  console.log(users, 'users')
  const user = users.find(user => {
    return user.username === req.body.username
  })//find a {} or undefined(no this users)
  if (!user) {
    res.status(401).send('pwd or uname wrong')
    return
  }
  const decryptedPwd = CryptoJS.AES.decrypt(
    user.password,
    process.env.PASSWORD_SECRET).toString(CryptoJS.enc.Utf8)

  if (decryptedPwd !== req.body.password) {
    res.status(401).send('pwd or uname wrong')
    return
  }
  const accessToken = jwt.sign({
    username: user.username
  },
    process.env.JWT_SECRET, { expiresIn: "15s", }
  )//or use Blacklist
  res.status(200).json({ accessToken })

})


function auth (req, res, next) {
  const authHeader = req.headers['auth']
  const token = authHeader.split(" ")[1]
  if (!token) {
    res.sendStatus(401)
    return
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      res.sendStatus(401)
      return
    }
    req.user = user//store sth in request. be careful! rewrite sth
    next()
  })
}
routerAuth.get('/users', auth, (req, res) => {
  res.json(users)
})
module.exports = routerAuth