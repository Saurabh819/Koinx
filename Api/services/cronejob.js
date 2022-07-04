const axios = require('axios');
const EtherPriceDB = require('../model/etherPriceModel')
const mongoose = require('mongoose');

// GET: fetch etherum latest price
async function fetchEtherumPrice() {
    let error = false
    var responseData = ''
    let errorMsg = ''
    responseData=
    await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr')
    return [error, errorMsg, responseData.data];
}

// POST: store etherum latest price
async function storeEtheruemPrice() {
  setInterval(async() => {
    var etherumPriceData= await fetchEtherumPrice()
    const etherumPrices = new EtherPriceDB({
        _id: new mongoose.Types.ObjectId(),
        etherPrice: etherumPriceData[2]?.ethereum
    })
    
    await etherumPrices.save(function(err){
        if(err) console.log(err); 
      });
  }, 600000)
}
module.exports = { storeEtheruemPrice}