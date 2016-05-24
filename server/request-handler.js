var portfolioController = require('./portfolioController');

module.exports = {
  get: function(req, res) {
    res.send('Hi there! GET request received');
  },
  fetch: function(req, res) {
    portfolioController.fetch()
      .then(function(result) {
        console.log('fetched data', result);
        res.send(result);
      });
  },
  post: function(req, res) {
    var portfolio = req.body;
    console.log('data received', portfolio);
    portfolioController.add(portfolio);
    res.send('POST request received');
  }
}