var fs = require('fs');


function studentlist(req, cb) {
	fs.readFile("jsonfiles/studentlist.json", 'utf8', function(err, data) {
	        if (err)
	            console.log("ERROR READING FILE")
	        var obj = JSON.parse(data);
	        cb(obj);
	});
}
module.exports = studentlist;
