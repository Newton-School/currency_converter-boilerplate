const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  exchangeRate: {
    type: Number,
    required: true,
  },
});

const Currency = mongoose.model('Currency', currencySchema);

module.exports = Currency;
