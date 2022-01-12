const express = require('express')
const router = express.Router()
const WishList = require('../../model/wishlist')

router.get('/:customerid', (req, res, next) => {
  const id = req.params.id
  WishList.find({ customerId: customerId }, 'products')
    .then(docs => {
      if (docs) {
        res.status(200).json({ docs })
      } else {
        res.status(204).json({
          message: ' could not find customer with given id'
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
router.put('/:customerid', (req, res, next) => {
  const customerId = req.params.customerId
  const update = {}
  for (const ops of req.body) {
    update[ops.propName] = ops.value
  }
  WishList.findOneAndUpdate({ customerId: customerId })
    .then(result => {
      res.status(200).json({
        message: 'WishList updated',
        WishList: result,
        request: {
          type: 'GET',
          url: 'http://localhost:3000/wishlists/' + customerId
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
module.exports = router
