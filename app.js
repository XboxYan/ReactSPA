var express = require('express');
var proxy = require('http-proxy-middleware');
 
var app = express();
 
app.use('/', proxy({target: 'http://news-at.zhihu.com/api', changeOrigin: true}));
app.listen(3000);