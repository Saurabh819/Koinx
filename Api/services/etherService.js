const axios = require('axios');
const etherTransaction=require("../model/etherTransactionModel")
const mongoose = require('mongoose');


// GET: fetch crypto transaction
async function fetchCrptoTransaction(request) {
    let error = false
    var responseData = ''
    let errorMsg = ''
    let params=request.query
    
    if (!params.address){
      errorMsg='Address is mandantory in URL'
      error=true;
      return [error, errorMsg, responseData.data];
    }

    let address=params.address
    let url=`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=${params.pageno?params.pageno:1}&offset=${params.offset?params.offset:5}&sort=asc&apikey=VKP3VUVRD9293PJ6UHPQ91QZJR692W4K49`
    responseData= await axios.get(url)
    saveEtherTransaction(responseData.data,address)
    return [error, errorMsg, responseData.data];
}

// save Ether Transaction 
async function saveEtherTransaction(data,address) {
    data=data.result? data.result:[]
    var doc=[]
    data.forEach(ele => {
        doc.push(
          {
            _id: new mongoose.Types.ObjectId(),
            transaction_detail:ele,
            address:address
          }
        )
    });

    const result = await etherTransaction.insertMany(doc);
  
  
}


module.exports = { fetchCrptoTransaction}

