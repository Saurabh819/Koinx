

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var etherPriceSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    created_date: { type: Date, default: Date.now },
    etherPrice: { type: Object }
});

module.exports = mongoose.model('etherumPrice', etherPriceSchema)

