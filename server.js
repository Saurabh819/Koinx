const port =  process.env.PORT || '5000' ;
const etherService=require('./Api/services/etherService')
const http = require('http')
const app = require('./app'); 
const server = http.createServer (app)
  
console.log(port)
server.listen(port, function() {
    etherService.storeEtheruemPrice();
  });