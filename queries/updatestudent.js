var fs = require('fs');
function updatestudent(req, res) {
    var json=JSON.stringify(req.body);
     // console.log("WRITTENFILECONTENT", req.body);
    fs.writeFile('jsonfiles/studentlist.json',json, 'utf8', function(err, data) {
        if (err)
            console.log("ERROR READING FILE")
        res.send('ok')
    });




}
module.exports = updatestudent;
