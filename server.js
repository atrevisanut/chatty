const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());


const messages = [
	{
	  message: "Hi there!",
      username: "basicusr",
      image: "https://images.unsplash.com/photo-1459664018906-085c36f472af?dpr=1.25&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg=",
	  time: "11:11am"
    }
];

app.get('/', function(req, res) {
	res.status(200).set({
	    'Content-Type': 'application/json',
	    'Access-Control-Allow-Origin': '*',
	    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
	    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
	    'X-XSS-Protection': '1; mode=block',
	    'X-Frame-Options': 'SAMEORIGIN',
	    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  	}).send(JSON.stringify(messages));
})

app.post('/', function(req, res) {
    var date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        mm = m.toString().length === 1 ? "0" + m : m,
        ampm = h >= 12 ? 'pm' : 'am';
	messages.push({
		message: req.body.message,
        username: req.body.username,
        image: "https://images.unsplash.com/photo-1459664018906-085c36f472af?dpr=1.25&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg=",
		time: h+":"+mm+" "+ampm
	});
	res.status(200).set({
	    'Content-Type': 'application/json',
	    'Access-Control-Allow-Origin': '*',
	    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
	    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }).send(JSON.stringify(messages));
})

app.options('/', function(req,res){
    res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    }).send()
 
})

app.listen(3000, function(){
    console.log("listening on port 3000")
});