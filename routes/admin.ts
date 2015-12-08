
/// <reference path="../typings/tsd.d.ts" />
import express = require("express")
var router = express.Router();
import configs = require("../configs/configs");
import ad = require("../modules/Ad");

router
    .route("/admin")
    .get(function(req: express.Request, res: express.Response) {
        if (req.session.login) {
            
            ad.getAdLogs().then(data=> {
                res.send(data[0])
            })
        } else {
            res.redirect("admin/login");
        }
    });


router
    .route("/admin/login")
    .get(function(req: express.Request, res: express.Response) {
        res.render("admin/login");
    })
    .post(function(req: express.Request, res: express.Response) {
        var username = req.body.username;
        var password = req.body.password;
        if (username === "admin" && password === "meiriq") {
            req.session.login = true;
            res.send(true);
        } else {
            req.session.login = false;
            res.send(false);
        }
    });

module.exports = router