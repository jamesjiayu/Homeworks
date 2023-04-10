const express = require('express')
const router1 = express.Router()


router1.post('/login', (req, res) => {
  console.log(req.body)
  const { username, password } = req.body
  if (username === 'j' && password === '2') res.send({ ok: 1 })
  res.send({ ok: 0 })
})
router1.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router1
