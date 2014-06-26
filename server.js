var express = require('express');
var app = express();
var static = require('serve-static');
var im = require('imagemagick');

app.use(static(__dirname));

app.get('/:width/:height', function(req, res, next) {
  
  im.crop({
    srcPath: 'kittens.jpg',
    dstPath: 'kittens-small.jpg',
    width: req.params.width,
    height: req.params.height 
  }, function(err, stdout, stderr) {
    if (err) {
      next(err);
    } else {
      res.sendfile('kittens-small.jpg');
    }
  });
});

app.listen(3000);
