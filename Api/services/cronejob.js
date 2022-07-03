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
    console.log(responseData.data)
    return [error, errorMsg, responseData.data];
}

// POST: store etherum latest price
async function storeEtheruemPrice() {
    console.log("hi")

  setInterval(async() => {
    var etherumPriceData= await fetchEtherumPrice()
    console.log(etherumPriceData)
    const etherumPrices = new EtherPriceDB({
        _id: new mongoose.Types.ObjectId(),
        etherPrice: etherumPriceData[2]?.ethereum
    })
    // inserting user data
    await etherumPrices.save(function(err){
        if(err) console.log(err); 
      });

  }, 3000);
    
}
module.exports = { storeEtheruemPrice}