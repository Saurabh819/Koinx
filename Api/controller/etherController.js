const express = require('express');
const router = express.Router();
const etherService = require('../services/etherService')

// fetch crypto Transaction controller

router.get('/transactions', async(req, res, next)  => {
    
    const [error,errorMsg, result] = await etherService.fetchCrptoTransaction(req);

    if (error) {
        return res.status(500).json({
            message: errorMsg
        })
    } else {
        res.status(200).json({
            response: result
        
        })
    }
});


// fetch current balance and current price controller

router.get('/getbalance', async(req, res, next)  => {
    
    const [error,errorMsg, result] = await etherService.getCurrentBalance(req);

    if (error) {
        return res.status(500).json({
            message: errorMsg
        })
    } else {
        res.status(200).json({
            response: result
        
        })
    }
});

// calculate current balance 

router.get('/calculatebalance', async(req, res, next)  => {
    
    const [error,errorMsg, result] = await etherService.calculateCurrentBalance(req);

    if (error) {
        return res.status(500).json({
            message: errorMsg
        })
    } else {
        res.status(200).json({
            response: result
        
        })
    }
});


module.exports = router

