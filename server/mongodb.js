var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chartdb');

var portfolioSchema = new mongoose.Schema({
  name: String,
  etfs: {
    total: Number,
    world: {
      name: String,
      percentage: Number
    },
    emergingMarket: {
      name: String,
      percentage: Number
    },
    hedged: {
      name: String,
      percentage: Number
    }
  },
  bonds: {
    total: Number,
    firstBond: {
      name: String,
      percentage: Number
    }
    secondBond: {
      name: String,
      percentage: Number
    }
  }
})

module.exports = mongoose.model('Portfolio', portfolioSchema);