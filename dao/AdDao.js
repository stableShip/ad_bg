/// <reference path="../typings/tsd.d.ts" />
var dbHelper = require("./db");
var AdDao = (function () {
    function AdDao() {
    }
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
     * @param name 渠道信息
     */
    AdDao.getAdLogs = function (name) {
        var conn = dbHelper.getDbConn();
        var sql = 'select * from ad_log where 1=1 ';
        if (name) {
            sql += " and name like '%" + name + "%'";
        }
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
