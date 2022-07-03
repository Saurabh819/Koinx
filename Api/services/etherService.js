const axios = require('axios');


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


module.exports = { fetchCrptoTransaction}

