const express = require('express');
const router = express.Router();
const etherService = require('../services/etherService')

// fetch crypto Transaction controller

router.get('/post', async(req, res, next)  => {
    
    const [error,errorMsg, result] = await etherService.fetchCrptoTransaction(req.body);

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

