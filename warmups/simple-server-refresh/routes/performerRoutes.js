const express = require('express')
const Router = express.Router()
const Performer = require('../models/Performer')

Router.route('/')
  .get((req, res) => {
    Performer.find((err, performers) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        res.json({ message: 'successfully retrieved all performers', data: performers })
      }
    })
  })
  .post((req, res) => {
    const performer = new Performer({
      name: req.body.name,
      band: req.body.band,
      rank: req.body.rank
    })

    performer.save((err, performer) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        res.json({ message: 'Performer added!', data: performer })
      }
    })

  })

  module.exports = Router
