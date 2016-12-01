var express = require('express');
var multer  = require('multer');
var app = express();


//La imagen puede guardarse en memoria (un buffer temporal) o en disco. 
//Este ejemplo es con buffer.


var storage = multer.memoryStorage();
var upload = multer({ storage: storage });


app.post('/uploadimage', upload.single('image'), function (req, res, next) {

	var uploadedImage = req.file; //Dentro de uploadedImage.buffer.data esta la imagen en forma de byte array
	var imageComments = req.body; //Aca se guardan userid y commentarios que se agregaron a la imagen desde el cliente


	res.setHeader('Content-Type', 'application/json');
	responseData = { "message": "POST received", "image_data": uploadedImage, "image_comments": imageComments };
	res.send(JSON.stringify(responseData));
});

app.listen(3000, function () {
  console.log('App listening on port 3000.');
});