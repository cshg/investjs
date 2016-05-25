var portfolioController = require('./portfolioController');
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var env = require('../env');

var options = {
  auth: {
    api_key: env.SENDGRID_APIKEY
  }
};

var client = nodemailer.createTransport(sgTransport(options));

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
  },
  sendMail: function(req, res) {
    var email = {
      from: '"InvestJS" <info@investjs.com>', // sender address
      to: 'christian.s.haug@gmail.com', // list of receivers
      subject: 'Your new Portfolio', // Subject line
      html: 'Your new Portfolio has been created. To use your newly created strategy buy the following assets: $' + req.body.stocks.total/100*req.body.capital*0.8 + ' in <a href="https://personal.vanguard.com/us/funds/snapshot?FundIntExt=INT&FundId=0970">Vanguard Total Market ETF</a>, $' + req.body.stocks.total/100*req.body.capital*0.2 + ' in <a href="https://www.ishares.com/us/products/244050/ishares-core-msci-emerging-markets-etf">iShares MSCI Emerging Market ETF</a> and $' + req.body.bonds.total/100*req.body.capital + ' in <a href="https://personal.vanguard.com/us/funds/snapshot?FundId=3711&FundIntExt=INT"> Vanguard International Bond</a>.'
      };
    client.sendMail(email, function(err, info) {
      if (err) {
        console.error('mail not sent', err);
      } else {
        console.log('Message sent:', + info);
      }
    });
  }
}