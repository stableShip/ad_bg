/// <reference path="../typings/tsd.d.ts" />

import dbHelper = require("./db");
import mysql = require('mysql');
import _ = require("underscore");

class AdDao {
    /**
     * 添加广告日志信息
     * @param data:广告日志信息
     */
    public static addAdLog(data: any) {
        var conn = dbHelper.getDbConn();
        var sql: string = 'insert into ad_log set ?  ON DUPLICATE KEY UPDATE subcount=subcount+1';
        return conn.queryAsync(sql, data).then(function(rows) {
            return true;
        }).finally(function() {
            conn.end();
        });
    }

    /**
     * 获取广告日志信息
     * @param appName 应用名称
     */
    public static getAdLogs(appName?: string) {

        var conn = dbHelper.getDbConn();
        var sql: string = 'select * from ad_log where 1=1 ';
        if (name) {
            sql += " and name like '%" + name + "%'"
        }
        return conn.queryAsync(sql).then(function(rows) {
            if (rows.length > 0 && rows[0].length > 0) {
                return rows
            }
        }).finally(function() {
            conn.end();
        });
    }


}

export = AdDao;