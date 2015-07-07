var express = require('express');
var compression = require('compression');
var app = express();

app.use(compression());

// Server
app.use(express.static(__dirname));

app.listen(process.env.PORT || 3000);
