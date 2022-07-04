

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var etherTnasactionSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    created_date: { type: Date, default: Date.now },
    transaction_detail: { type: Object },
    address:{type:String}
});

module.exports = mongoose.model('etherTransaction', etherTnasactionSchema)