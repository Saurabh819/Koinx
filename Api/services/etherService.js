const axios = require('axios');
const EtherPriceDB = require('../model/etherPriceModel')
const mongoose = require('mongoose');

// GET: fetch crypto transaction
async function fetchCrptoTransaction(request) {
    let error = false
    var responseData = ''
    let errorMsg = ''
    responseData=
    
    await axios.get('https://api.etherscan.io/api?module=account&action=txlist&address=0xce94e5621a5f7068253c42558c147480f38b5e0d&startblock=0&endblock=99999999&page=1&offset=1&sort=asc&apikey=VKP3VUVRD9293PJ6UHPQ91QZJR692W4K49')
    console.log(responseData.data)
    return [error, errorMsg, responseData.data];
}

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

  // setInterval(async() => {
    var etherumPriceData= await fetchEtherumPrice()
    console.log(etherumPriceData)
    // const etherumPrices = new EtherPriceDB({
    //     _id: new mongoose.Types.ObjectId(),
    //     created_date: new Date(),
        
    //     etherPrice: etherumPriceData[2]?.ethereum
    // })
    // inserting user data
    // etherumPrices.save(function(err){
    //     if(err) console.log(err); 
    //   });

  // }, 3000);
    
}

module.exports = { fetchCrptoTransaction,storeEtheruemPrice}

