var express = require('express');
var multer  = require('multer');
const PORT = 3000;

var app = express();

//La imagen puede guardarse en memoria (un buffer temporal) o en disco. 
//Este ejemplo es con buffer.


var storage = multer.memoryStorage();
var upload = multer({ storage: storage });


app.post('/uploadimage', upload.single('image'), function (req, res, next) {

	var uploadedImage = req.file; //Dentro de uploadedImage.buffer.data esta la imagen en forma de byte array
	var imageComments = req.body; //Aca se guardan attachments utiles como 'userid' y 'filecomments' que se agregaron a la imagen desde el cliente


	res.setHeader('Content-Type', 'application/json');
	responseData = { "message": "POST received", "image_data": uploadedImage, "image_comments": imageComments };
	res.send(JSON.stringify(responseData));
});

app.listen(PORT, function () {
  console.log('App listening on port %s.', PORT);
});