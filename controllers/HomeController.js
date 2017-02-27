const fs = require('fs');

var user = {
  name: "quang",
  age: 21,
  email: 'quangtm210395@gmail.com'
}

var _getIndex = (req, res) => {
  res.render('home', user)
}

var _getUsers = (req, res) => {
  fs.readFile('./user.json', (err, data) => {
    if (err) throw err
    res.render('getUser', JSON.parse(data))
  })
}

module.exports.getIndex = _getIndex
module.exports.getUsers = _getUsers