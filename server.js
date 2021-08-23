// 1 import core modules
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const callback = require('./public/App');

// 2 new express server instance
const app = express();

// 3 set views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// 3 declare a port
const PORT = 8080;

// 4 express middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// 5 GET index view
app.get('/', callback.App);
app.get('/form', callback.Form);

app.post('/form', (req, res) => {
  if(
    req.body.captcha === undefined ||
    req.body.captcha === '' ||
    req.body.captcha === null
  ){
    return res.json({"success": false, "msg":"Please select captcha"});
  }
  const token = '6Ld19hocAAAAAGJkia7OyjYoEP8jssY_qQQjShlF'

  const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${token}&response=${req.body.captcha}&remoteip=${req.connection.remoteAddress}`;

  request(verifyUrl, (err, response, body) => {
    body = JSON.parse(body);

    if(body.success !== undefined && !body.success){
      return res.json({"success": false, "msg":"Failed select captcha"});
    }
    return res.json({"success": true, "msg":"captcha passed"});
  })
});

// listen for requests from PORT
app.listen(PORT, () => console.log(`${PORT}`));

module.exports = app;