/// <reference path="../typings/tsd.d.ts" />

import dbHelper = require("./db");
import mysql = require('mysql');
import _ = require("underscore");

class AdDao {
    public static addAdLog(data:any) {
        var conn = dbHelper.getDbConn();
        var sql: string = 'insert into ad_log set ?  ON DUPLICATE KEY UPDATE subcount=subcount+1';
        return conn.queryAsync(sql, data).then(function (rows) {
                return true;
        }).finally(function () {
            conn.end();
        });
    }

    /**
     * 获取广告日志信息
     * @param name 渠道信息
     */
    public static getAdLogs(name?:string) {
        
        var conn= dbHelper.getDbConn();
        var sql: string = 'select * from ad_log where 1=1 ';
        if(name){
            sql += " and name = '"+ name +"'"
        }
        return conn.queryAsync(sql).then(function (rows) {
            if (rows.length > 0 && rows[0].length > 0) {
                return rows
            }
        }).finally(function () {
            conn.end();
        });
    }


}

export = AdDao;