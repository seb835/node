var mysql = require('mysql');

var conn = mysql.createConnection({
	host: "localhost",
	user: "seb",
	password: "seb0tr0n"
});

conn.connect(function(err){
	if (err) throw(err);
	console.log("Connected!");
});
