const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Vote = require('../models/vote')

const Pusher = require('pusher')

var pusher = new Pusher({
  appId: '869233',
  key: 'a04876fd6f30e492290f',
  secret: 'c4976c647bb23781f638',
  cluster: 'us2',
  encrypted: true
})

router.get('/', (req, res) => {
  // res.send('POLL')
  Vote.find().then(votes => res.json({
    success: true,
    votes: votes
  }))
})

router.post('/', (req, res) => {
  const newVote = {
    os: req.body.os,
    points: 1
  }

  new Vote(newVote).save().then(vote => {
    pusher.trigger('os-poll', 'os-vote', {
      points: parseInt(vote.points),
      os: vote.os
    })
  
    return res.json({success: true, message: 'Thank you for voting'})
  })
})

module.exports = router