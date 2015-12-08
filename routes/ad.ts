/// <reference path="../typings/tsd.d.ts" />

import express = require("express")
var router = express.Router();
import fs = require("fs");
import _ = require("underscore");
import ad = require("../modules/Ad")

router
    .route("/ad")
    .get((req: express.Request, res: express.Response) => {
        ad.addAdLog(req.query).then(data=>{
            res.sendStatus(200)
        });
    })
    .post((req: express.Request, res: express.Response) => {
        ad.getAdLogs().then(data=>{
            return res.json(data)
        })
    });
    



module.exports = router