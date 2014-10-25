var converter = require('json-2-csv'), 
		moment = require('moment'),
		fs = require('fs');

var documents;



function readContent(callback) {
    fs.readFile("lubanga-timeline.csv", function (err, content) {
        if (err) return callback(err)
        callback(null, content)
    })
}

readContent(function (err, content) {
   documents = content.toString();

	

// convert the date format
	var index;
	for (index = 0; index < documents.length; ++index) {
	    documents[index].startDate = moment(documents[index].startDate, "YYYY-MM-DD").format("YYYY,MM,DD");		    
	}		

	// example options (not changed from default)

	

var options = {
			DELIMITER : {
			FIELD : '±',
			ARRAY : ';'
			},
			EOL : '\n',
			PARSE_CSV_NUMBERS : false
};

var json2csvCallback = function (err, csv) {
    if (err) throw err;
    console.log(csv);
};

converter.csv2json(documents, json2csvCallback, options);


})


	






