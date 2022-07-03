const mongoose = require('mongoose');

const etherPriceSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    created_date: { type: Date },
    etherPrice: { type: Number },

   
})

module.exports = mongoose.model('etherPrice', etherPriceSchema)