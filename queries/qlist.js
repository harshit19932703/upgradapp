var fs = require('fs');


function readqlistfile(req, cb) {
	fs.readFile("jsonfiles/questions.json", 'utf8', function(err, data) {
	        if (err)
	            console.log("ERROR READING FILE")
	        var obj = JSON.parse(data);
	        cb(obj);
	});
}
module.exports = readqlistfile;
