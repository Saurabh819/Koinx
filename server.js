const port =  process.env.PORT || '3000' ;
const cronejob=require('./Api/services/cronejob')
const http = require('http')
const app = require('./app'); 
const server = http.createServer (app)
  
console.log(port)
server.listen(port, function() {
    cronejob.storeEtheruemPrice();
  });