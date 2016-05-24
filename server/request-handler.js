var portfolioController = require('./portfolioController');
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var env = require('../env');

var options = {
  auth: {
    api_user: env.SENDGRID_USERNAME,
    api_key: env.SENDGRID_PASSWORD
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
    text: 'Your new Portfolio has been created. Make the following investments to follow your strategy.', // plaintext body
    html: '<b>Test</b>' // html body
  };
  client.sendMail(email, function(err, info) {
    if (err) {
      console.error('mail not sent', err);
    } else {
      console.log('Message sent:', + info.response);
    }
  });
  }
}