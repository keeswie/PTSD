const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Employee = require('../../model/employee')

router.post('/', (req, res, next) => {
  const id = new mongoose.Types.ObjectId()
  req.body._id = id
  Employee
    .create(req.body)
    .then(result => {
      console.log(result)
      res.status(201).json({
        message: 'employee added',
        request: {
          type: 'GET',
          url: 'http://localhost:3000/employees/' + result._id
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

router.get('/', (req, res, next) => {
  Employee.find()
    .select('_id name email additionalInfo')
    .then(result => {
      if (result) {
        const response = {
          employee: result.map(result => {
            return {
              name: result.name,
              email: result.email,
              additionalInfo: result.additionalInfo,
              request: {
                type: 'GET',
                url: `http://localhost:3000/employees/${result._id}`
              }
            }
          })
        }
        res.status(200).json(response)
      } else {
        res.status(204).json({
          message: 'could not find any employee in the databse'
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        error: err
      })
    })
})
router.get('/:id', (req, res, next) => {
  const id = req.params.id
  Employee.findById(id)
    .then(result => {
      if (result) {
        console.log(result)
        res.status(200).json(result)
      } else {
        res.status(204).json({
          message: 'no employee with given id found'
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
  Employee.findOneAndUpdate({ _id: id }, { $set: update })
    .then(result => {
      res.status(200).json({
        message: 'employee updated',
        Employee: result,
        request: {
          type: 'Get',
          url: 'http://localhost:3000/employees/' + id
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
  Employee.findOneAndDelete({ _id: id })
    .then(result => {
      res.status(200).json({
        Employee: result,
        message: 'employee deleted'
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
