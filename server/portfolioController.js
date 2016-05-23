var pModel = require('./portfolioModel');

module.exports = {
  add: function(data) {
    var portfolio = new pModel({
      stocks: {
        total: data.stocks
      },
      bonds: {
        total: data.bonds
      }
    });
    portfolio.save()
    .then(function(result) {
      console.log(result, 'successfully saved');
    });
  },
  fetch: function() {

  }
}