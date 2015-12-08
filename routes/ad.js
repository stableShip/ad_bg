/// <reference path="../typings/tsd.d.ts" />
var express = require("express");
var router = express.Router();
var ad = require("../modules/Ad");
router.route("/ad").get(function (req, res) {
    console.log(req.query);
    ad.addAdLog(req.query).then(function (data) {
        res.send();
    });
}).post(function (req, res) {
    ad.getAdLogs().then(function (data) {
        console.log(1111111111);
        return res.json(data);
    });
});
module.exports = router;
