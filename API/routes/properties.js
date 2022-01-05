const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).json({
        message: 'handling GET requests'
    });
});

router.get('/:id',(req,res, next) =>{
    const id = req.params.id;
    if(id == 'ding'){
        res.status(200).json({
            message: 'gg ding',
            ID: id
        });
    }else{
        res.status(200).json({
            message: 'mislukt'
        });
    };
});

router.post('/',(req, res, next) => {
    const property = {
        name: req.body.name,
        barcode: req.body.barcode
    }
    res.status(200).json({
        message: 'handling POST request',
        createdProp: property
    });
});

module.exports = router;