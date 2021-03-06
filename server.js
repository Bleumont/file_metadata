var express = require('express');
var cors = require('cors');
require('dotenv').config();
let multer = require('multer');
const upload = multer({ dest: 'public/' });

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), function (req, res) {
  const resObj = {};
  resObj['name'] = req.file.originalname;
  resObj['type'] = req.file.mimetype;
  resObj['size'] = req.file.size;
  console.log(resObj);
  res.json(resObj);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
