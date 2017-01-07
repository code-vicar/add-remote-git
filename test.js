var log = require('npmlog')
var addRemoteGit = require('./add-remote-git')

addRemoteGit('expressjs/express', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(arguments);
  }
})
