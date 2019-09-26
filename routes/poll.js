const express = require('express')
const router = express.Router()

const Pusher = require('pusher')

var pusher = new Pusher({
  appId: '465033',
  key: '0c6e1e724fc994c33998',
  secret: '170e91139139db484d47',
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