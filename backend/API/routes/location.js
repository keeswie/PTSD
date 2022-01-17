const express = require('express')
const router = express.Router()
const Location = require('../../model/location')

router.post('/', (req, res, next) => {
  Location
    .create(req.body)
    .then(result => {
      console.log(result)
      res.status(201).json({
        message: 'Location added',
        request: {
          type: 'GET',
          url: 'http://localhost:3000/locations/' + result.barcode
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
  Location.find()
    .then(result => {
      if (result) {
        const response = {
          Location: result.map(result => {
            return {
              barcode: result.barcode,
              productNumber: result.productNumber,
              date: result.date,
              request: {
                type: 'GET',
                url: 'http://localhost:3000/locations' + result.barcode
              },
              product: {
                type: 'GET',
                url: 'http://localhost:300/products/' + result.productBarcode
              }
            }
          })
        }
        res.status(200).json(response)
      } else {
        res.status(204).json({
          message: 'could not find any location in the databse'
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        error: err
      })
    })
})
router.get('/:barcode', (req, res, next) => {
  const barcode = req.params.barcode
  Location.find({ barcode: barcode }, 'barcode productNumber date')
    .then(docs => {
      if (docs) {
        res.status(200).json({ docs })
      } else {
        res.status(204).json({
          message: ' could not find location with given barcode'
        })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })
})
router.put('/:barcode', (req, res, next) => {
  const barcode = req.params.barcode
  try {    
    const update = {}
    for (const ops of req.body.update) {
      update[ops.propName] = ops.value
    }
  } catch {
    res.status(501).json({
      message: 'sikkel'
    })
  }
  Location.findOneAndUpdate({ barcode: barcode }, { $set: update })
    .then(result => {
      res.status(200).json({
        message: 'location updated',
        Product: result,
        request: {
          type: 'GET',
          url: 'http://localhost:3000/locations/' + barcode
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
router.delete('/:barcode', (req, res, next) => {
  const barcode = req.params.barcode
  Location.findOneAndDelete({ barcode: barcode })
    .then(result => {
      res.status(200).json({
        Product: result,
        message: 'location succesfully deleted'
      })
    })
    .catch(err => {
      res.status(500).json({
        error: err
      })
    })
})
module.exports = router
