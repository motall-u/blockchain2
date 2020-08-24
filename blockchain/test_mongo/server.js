// // //Connected to server 	 
// // const mongo= require('mongodb').MongoClient;
// // const client=require('socket.io').listen(4000).sockets;

// // //Connect to mongo
// // url='mongodb://127.0.0.1/mongochat';
// // mongo.connect(url,function(err,db){
// // 	if (err) {
// // 		throw err;
// // 	}
// // 	console.log('Mongo db connected successfuly...');
// // });


// //Inclusion

// var http=require('http');
// ///Body
// var server=http.createServer(function(req,res){
// 	res.writeHead(200);
// 	res.end('Le serveur a ete cree');
// 	//console.log(res)
// });
// server.on('close',function () {
// 		console.log('Bye bye!');
// 	})


// server.listen(8080);
// //server.close();
// server.close();

var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();

jeu.on('game', function(message){
    console.log(message);
});

jeu.emit('game', 'Vous avez perdu !');


