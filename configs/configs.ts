/// <reference path="../typings/tsd.d.ts" />
import _ = require("underscore");
import path = require("path");
import fs = require("fs");
class Configs {

    /**
     * 获取limit配置
     */
    public static getLimitNum(): number {
        try {
            var dir = path.resolve(".", "./configs/limit.json");
            if (fs.existsSync(dir)) {
                var data = fs.readFileSync(dir,"utf8");
                var cof = JSON.parse(data);
                return cof.limit || 20;
            }
            return 20;
        } catch (e) {
            console.log(e);
        }
    }

}

export =Configs;