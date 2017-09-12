var express = require("express")
var cmd=require('node-cmd');

var app = express()

app.listen(process.env.PORT || 8080, function() {
    console.log('Listening on port 8080!')
})

app.get('/shutdown', function(req,res){
	cmd.get(
		'shutdown -t 15 -s -c "Shutting down in 15 seconds"',
		function(err, data, stderr){
			if(err)
				res.end("error")
			else
		    	res.end("Shutdown command sent")
		}
	);
})

app.get('/restart', function(req,res){
	cmd.get(
		'shutdown -t 15 -r -c "Restarting in 15 seconds"',
		function(err, data, stderr){
			if(err)
				res.end("error")
			else
		    	res.end("Restart command set")
		}
	);
})

app.get('/hibernate', function(req,res){
	cmd.get(
		'ping -n 15 127.0.0.1 > NUL 2>&1 && shutdown /h /f',
		function(err, data, stderr){
			if(err)
				res.end("error")
			else
		    	res.end("Hibernate command set")
		}
	);
})