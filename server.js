// 1 import core modules
const path = require('path');
const express = require('express');
const callback = require('./public/App');

// 2 new express server instance
const app = express();

// 3 set views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// 3 declare a port
const PORT = 8080;

// 4 express middleware
app.use(express.static('./public'));

// 5 GET index view
app.get('/', callback.App)

// listen for requests from PORT
app.listen(PORT, () => console.log(`${PORT}`));