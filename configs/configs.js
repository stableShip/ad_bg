var path = require("path");
var fs = require("fs");
var Configs = (function () {
    function Configs() {
    }
    /**
     * 获取limit配置
     */
    Configs.getLimitNum = function () {
        try {
            var dir = path.resolve(".", "./configs/limit.json");
            if (fs.existsSync(dir)) {
                var data = fs.readFileSync(dir, "utf8");
                var cof = JSON.parse(data);
                return cof.limit || 20;
            }
            return 20;
        }
        catch (e) {
            console.log(e);
        }
    };
    return Configs;
})();
module.exports = Configs;
