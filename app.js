var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const etherRoutes = require('./api/controller/etherController')
var app = express();
const mongoose = require('mongoose');
 
const username = "Saurabh819";
const password = "Saurabh@1234";
const cluster = "cluster0.ue662";
const dbname = "KoinxDB";

// mongoose.connect(
//   `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   }
// );



//use body parser for parsing req body
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//enabling cors
app.use((req,res,next)=>
{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Accept, Content-Type, Authorization');

    if(req.method==='OPTIONS')
    {
        res.header('Access-Control-Allow-Methods','PUT, POST , PATCH , DELETE')
        return res.status(200).json({
        })
    }

    next();

});

app.use(cors());
app.use('/ether',etherRoutes)


app.use((req,res,next) => {
    const error = new Error("Not Found");
    error.status=404
    next(error)

})

app.use((error, req, res, next) => {

    res.status(error.status || 500);
    res.json({
        error:
            {
                message: error.message
            }
    });

});



module.exports = app;