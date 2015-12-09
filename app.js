/// <reference path="./typings/tsd.d.ts" />
var express = require("express");
var ad = require("./routes/ad");
var admin = require("./routes/admin");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
var session = require('express-session');
// var RedisStore = require('connect-redis')(session);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: false
})); //extended为true，使用node内置qs解析数据，false时使用querystring
app.use(bodyParser.json({
    type: 'json'
})); //解析json类型数据
app.use(session({
    secret: 'mEiriQAdmin_qianYun2015',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 } //一分钟
}));
// redis session
// app.use(session({
//     store: new RedisStore({
//         prefix: 'ad_ipfilter:',
//         db: 1
//     }),
//     secret: 'mEiriQAdmin_qianYun2015',
//     cookie: { maxAge: 600000 }
// }));
//监听路由
app.use(ad);
app.use(admin);
app.set("port", 3000);
app.listen(app.get("port"), function () {
    console.log("server listen in ", app.get("port"));
});
