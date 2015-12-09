﻿/// <reference path="../typings/tsd.d.ts" />

import dbHelper = require("../dao/db");
import _ = require("underscore");
import mysql = require('mysql');
import AdDao = require("../dao/AdDao");
import moment = require("moment");
class Ad {
    /**
     * 添加广告日志信息
     * @param ad 广告信息
     */
    public static addAdLog(ad) {
        ad.date = moment().format("YYYYMMDD");
        return AdDao.addAdLog(ad).then((result) => {
            return result;
        });
    }

   

     /**
     * 获取广告日志信息
     * @param 
     * @returns {*}
     */
    public static getAdLogs(name?:string) {
        return AdDao.getAdLogs(name).then(result => {
            if(result && result.length > 0){
                return result[0];
            }
            return []
        });
    }
}
export = Ad;