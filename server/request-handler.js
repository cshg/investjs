module.exports = {
  get: function(req, res) {
    res.send('Hi there! GET request received');
  },
  post: function(req, res) {
    res.send('POST request received');
  }
}