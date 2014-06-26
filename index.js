var im = require('imagemagick');

im.crop({
  srcPath: 'kittens.jpg',
  dstPath: 'kittens-small.jpg',
  width: 100,
  height: 100
}, function(err, stdout, stderr) {
  console.log(arguments);
  if (!err) {
    stdout.pipe(process.stdout);
    stderr.pipe(process.stderr);
  }
});
