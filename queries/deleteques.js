// var fs = require('fs');
// var _ = require('underscore');
//
// function addlist(req, res) {
//   var deletedata = req.body;
//   fs.readFile('jsonfiles/questions.json', function(err, data) {
//     var json = JSON.parse(data);
//     for(i=0;i<deletedata.length;i++){
//       json =_.reject(json, function(d) {
//         return d.id == deletedata[i];
//       });
//
//     }
//     fs.writeFile('jsonfiles/questions.json', JSON.stringify(json), function(err) {
//       if (err) throw err;
//       res.send('ok')
//     });
//   })
//
//
//
// }
//
// module.exports = addlist;
