const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Customer = require('../../model/customer')

router.post('/', (req, res, next) => {
  const id = new mongoose.Types.ObjectId()
  req.body._id = id
  Customer
    .create(req.body)
    .then(result => {
      console.log(result)
      res.status(201).json({
        message: 'customer added',
        request: {
          type: 'GET',
          url: 'http://localhost:3000/customers/' + result._id
        }
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  Customer.findById(id)
    .then(result => {
      if (result) {
        console.log(result)
        res.status(200).json(result)
      } else {
        res.status(204).json({
          message: 'no customer with given id found'
        })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})
router.put('/:id', (req, res, next) => {
  const id = req.params.id
  const update = {}
  for (const ops of req.body) {
    update[ops.propName] = ops.value
  }
  Customer.findOneAndUpdate({ _id: id }, { $set: update })
    .then(result => {
      res.status(200).json({
        message: 'customer updated',
        Customer: result,
        request: {
          type: 'Get',
          url: 'http://localhost:3000/customers/' + id
        }
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })
})
router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  Customer.findOneAndDelete({ _id: id })
    .then(result => {
      res.status(200).json({
        Customer: result,
        message: 'customer deleted'
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })
})

module.exports = router
