const express = require('express')
const router = express.Router()


router.post('/login', (req, res) => {
  console.log(req.body)
  const { username, password } = req.body
  if (username === 'j' && password === '2') res.send({ ok: 1 })
  res.send({ ok: 0 })
})
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router
