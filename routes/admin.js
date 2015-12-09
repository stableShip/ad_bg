/// <reference path="../typings/tsd.d.ts" />
var express = require("express");
var router = express.Router();
var ad = require("../modules/Ad");
router.route("/admin").get(function (req, res) {
    if (req.session.login) {
        ad.getAdLogs(req.query.name).then(function (data) {
            res.render("admin/index", { data: data });
        });
    }
    else {
        res.redirect("admin/login");
    }
});
router.route("/admin/login").get(function (req, res) {
    res.render("admin/login");
}).post(function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    if (username === "admin" && password === "meiriq") {
        req.session.login = true;
        res.send(true);
    }
    else {
        req.session.login = false;
        res.send(false);
    }
});
module.exports = router;
