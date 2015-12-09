/// <reference path="../typings/tsd.d.ts" />
var AdDao = require("../dao/AdDao");
var moment = require("moment");
var Ad = (function () {
    function Ad() {
    }
    /**
     * 添加广告日志信息
     * @param ad 广告信息
     */
    Ad.addAdLog = function (ad) {
        ad.date = moment().format("YYYYMMDD");
        return AdDao.addAdLog(ad).then(function (result) {
            return result;
        });
    };
    /**
    * 获取广告日志信息
    * @param appName 应用名称
    * @returns {*}
    */
    Ad.getAdLogs = function (appName) {
        return AdDao.getAdLogs(appName).then(function (result) {
            if (result && result.length > 0) {
                return result[0];
            }
            return [];
        });
    };
    return Ad;
})();
module.exports = Ad;
