const fs = require('fs');

var user = {
  username: "quangtm210395",
  name: "Tran Minh Quang",
  age: 22,
  github: "github.com/quangtm210395",
  email: 'quangtm210395@gmail.com',
  position: "Junior Web Developer",
  company: "FPT University"
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