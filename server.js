var express 	= require('express');
var app  		= express();
var server		= require('http').Server(app);
var io 			= require('socket.io')(server);
var bodyParser	= require('body-parser');

var client = require('socket.io-client')('http://localhost:6969',{
				reconnection: true,
    			reconnectionDelay: 1000
			});
 
	client.on('GPSServer', function(data){
			   	console.log("json notification: " + JSON.stringify(data));
			  	var station_id = "sockStation" + data.station;
			  	console.log(station_id);  
			    io.emit('sockStation21', data);		 		
		  	  });

  	io.sockets.on('connection', function(){
  		console.log("client has connected.");	
  		
				});	

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var port = process.env.PORT || 9876;
var router  = express.Router();
	router.get('/home', function(req, res){
		res.json({message : "json message"});
	});

	var secI = 0;	
	app.use('/scripts', express.static(__dirname + '/app/scripts'));
	app.use('/styles', express.static(__dirname + '/app/styles'));
	app.use('/home', express.static(__dirname + '/app/webAppFront.html'));
	app.use('/api', router);
	server.listen(port);
	console.log("server is listning at port " + port);

