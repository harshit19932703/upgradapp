var fs = require('fs');

function addlist(req, res) {
  var newdata = req.body[0];
  console.log("XXXXXXXXXX",newdata);
  fs.readFile('jsonfiles/questions.json', function(err, data) {
    var json = JSON.parse(data);
    json.push(newdata);
    console.log("YYYYYYYYYYY",json)
    fs.writeFile('jsonfiles/questions.json',JSON.stringify(json), function(err) {
      if (err) throw err;
      res.send('ok')
    });
  })



}

module.exports = addlist;
