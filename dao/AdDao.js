/// <reference path="../typings/tsd.d.ts" />
var dbHelper = require("./db");
var moment = require("moment");
var AdDao = (function () {
    function AdDao() {
    }
    /**
     * 添加广告日志信息
     * @param data:广告日志信息
     */
    AdDao.addAdLog = function (data) {
        var conn = dbHelper.getDbConn();
        var sql = 'insert into ad_log set ?  ON DUPLICATE KEY UPDATE subcount=subcount+1';
        return conn.queryAsync(sql, data).then(function (rows) {
            return true;
        }).finally(function () {
            conn.end();
        });
    };
    /**
     * 获取广告日志信息
     * @param appName 应用名称
     */
    AdDao.getAdLogs = function (appName, date) {
        if (date === void 0) { date = moment().format("YYYYMMDD"); }
        var conn = dbHelper.getDbConn();
        var sql = 'select * from ad_log where 1=1 ';
        if (appName) {
            sql += " and name like '%" + appName + "%'";
        }
        sql += " and date = " + date;
        console.log(sql);
        return conn.queryAsync(sql).then(function (rows) {
            if (rows.length > 0 && rows[0].length > 0) {
                return rows;
            }
        }).finally(function () {
            conn.end();
        });
    };
    return AdDao;
})();
module.exports = AdDao;
