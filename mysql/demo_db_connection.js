var mysql = require('mysql');

var conn = mysql.createConnection({
	host: "localhost",
	user: "seb",
	password: "seb0tr0n"
});

conn.connect(function(err){
	if (err) throw(err);
	console.log("Connected!");
	var sql = "SELECT * FROM stuff.mountain_bikes";
	conn.query(sql,function(err,result){
		if (err) throw err;
		console.log("Result: ");
		console.log(result);
	});
});
