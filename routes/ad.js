/// <reference path="../typings/tsd.d.ts" />
var express = require("express");
var router = express.Router();
var ad = require("../modules/Ad");
router.route("/ad").get(function (req, res) {
    ad.addAdLog(req.query).then(function (data) {
        res.sendStatus(200);
    });
}).post(function (req, res) {
    ad.getAdLogs().then(function (data) {
        return res.json(data);
    });
});
module.exports = router;
