/*
  Node.js script to replace all instances of a regex in a file
*/

var fs = require('fs');

var config = {
  fileToReplace: 'FILL_ME_IN',
  rxg: /FILL_ME_IN/,
  stringToReplace: 'FILL_ME_IN'
};

var parseString = function(str) {
  var rxg = config.rxg;

  while (str && str.match(rxg)) {
    str = str.replace(rxg, config.stringToReplace);
  }

  return str;
};

fs.readFile(fileToReplace, 'utf-8', function(err, data) {
  if(err) throw err;

  data = JSON.parse(parseString(JSON.stringify(data)));

  fs.writeFile(fileToReplace, data, function(err) {
    if(err) throw err;

    console.log('Donezo');
  });
});
