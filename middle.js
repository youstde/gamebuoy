window.supportWebp = true;
(function (win) {
    win.BuoyMiddle = function (options) {
        var baseUrl = 'http://127.0.0.1:8082/Buoy',
            finallUlr = '';
        // var baseUrl = '//imgcow.oss-cn-hangzhou.aliyuncs.com/game/Theme/Buoy/Buoy',
        //     finallUlr = '';
        finallUlr = baseUrl + '_' + options.id + '.js?v=2017092111';
        var scriptObj = document.createElement('script');
        scriptObj.src = finallUlr;
        document.getElementsByTagName("body")[0].appendChild(scriptObj);
        scriptObj.onload = function () {
            var Buoy = new Baitai.Buoy({
                clickCallback: function () {
                    options.clickCallback && options.clickCallback();
                }
            });
            options.ready && options.ready(Buoy);
        };

    };
})(window);