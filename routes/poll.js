const express = require('express')
const router = express.Router()

const Pusher = require('pusher')

var pusher = new Pusher({
  appId: '869233',
  key: 'a04876fd6f30e492290f',
  secret: 'c4976c647bb23781f638',
  cluster: 'us2',
  encrypted: true
})

router.get('/', (req, res) => {
  res.send('POLL')
})

router.post('/', (req, res) => {
  pusher.trigger('os-poll', 'os-vote', {
    points: 1,
    os: req.body.os
  })

  return res.json({success: true, message: 'Thank you for voting'})
})

module.exports = router