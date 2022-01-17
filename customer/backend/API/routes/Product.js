const express = require('express')
const router = express.Router()
const Product = require('../../model/product')

router.get('/', (req, res, next) => {
  Product.find()
    .select('_id barcode name price image locationBarcode min ')
    .then(result => {
      if (result) {
        const response = {
          product: result.map(result => {
            return {
              id: result._id,
              barcode: result.barcode,
              name: result.name,
              price: result.price,
              image: result.image,
              locationBarcode: result.locationBarcode,
              min: result.min,
              request: {
                type: 'GET',
                url: 'http://localhost:3000/products/' + result.barcode
              }
            }
          })
        }
        console.log(response)
        res.status(200).json(response)
      } else {
        res.status(204).json({
          message: 'could not find any element in the database'
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
  Product.find({ barcode: barcode }, '_id barcode name price image locationBarcode min')
    .then(product => {
      console.log(product)
      if (product) {
        res.status(200).json({ product })
      } else {
        res.status(204).json({
          message: ' could not find product with given id'
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

router.post('/', (req, res, next) => {
  Product
    .create(req.body)
    .then(result => {
      console.log(result)
      res.status(201).json({
        message: 'product created succesfully',
        request: {
          type: 'GET',
          url: 'http://localhost:3000/products/' + result.barcode
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
router.put('/:barcode', (req, res, next) => {
  const barcode = req.params.barcode
  const update = {}
  
  for (const ops of req.body.update) {
    update[ops.propName] = ops.value
  }
  //console.log(update)
  Product.findOneAndUpdate({ barcode: barcode }, { $set: update })
    .then(result => {
      res.status(200).json({
        message: 'Product updated',
        Product: result,
        request: {
          type: 'GET',
          url: 'http://localhost:3000/products/' + barcode
        }
      })
      console.log(result)
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
  Product.findOneAndDelete({ barcode: barcode })
    .then(result => {
      res.status(200).json({
        Product: result,
        message: 'product succesfully deleted'
      })
    })
    .catch(err => {
      res.status(500).json({
        error: err
      })
    })
})
module.exports = router
