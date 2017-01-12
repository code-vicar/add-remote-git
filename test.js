var path = require('path')
var fse = require('fs-extra')
var addRemoteGit = require('./add-remote-git')

addRemoteGit.download('expressjs/express', function (err, download) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(download);
    fse.copy(download.tmpdir, path.resolve(__dirname, 'expressjs'), function(err) {
        if (err) {
            console.log(err);
            return;
        }

        addRemoteGit.clearCache(function(err) {
            if (err) {
                console.log(err);
                return;
            }

            console.log('success');
        })
    })
})
