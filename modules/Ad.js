var AdDao = require("../dao/AdDao");
var Ad = (function () {
    function Ad() {
    }
    /**
     * 添加广告日志信息
     * @param ad 广告信息
     */
    Ad.addAdLog = function (ad) {
        return AdDao.addAdLog(ad).then(function (result) {
            return result;
        });
    };
    /**
    * 获取广告日志信息
    * @param
    * @returns {*}
    */
    Ad.getAdLogs = function (name) {
        return AdDao.getAdLogs(name).then(function (result) {
            if (result && result.length > 0) {
                return result[0];
            }
            return [];
        });
    };
    return Ad;
})();
module.exports = Ad;
