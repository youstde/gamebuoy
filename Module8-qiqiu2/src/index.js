(function(factory){
    var root =this,Baitai = root.Baitai = root.Baitai ? root.Baitai : {};
    Baitai.Buoy = factory(root);
    if (typeof module !== "undefined" && module.exports) {
        module.exports = Baitai.Buoy;
    }
}(function(root){
    var tpl = _include('./index.html');
    var base = _include('../../base.js');
    //原型上添加公共方法
    base(Buoy);
    function Buoy(options){
        this.data = '';
        this.el = '';
        this.options = options;
        this._init();
        this._imgPreList();
    }
    Buoy.prototype._init = function() {
        var el = document.createElement('div');
        el.innerHTML = tpl;
        this.el = el.querySelector('a');
        this._bindEvent();
    }
    Buoy.prototype._bindEvent = function() {
        this.el.addEventListener('click', function(){
            this.options.clickCallback && this.options.clickCallback();
        }.bind(this));
    }
    Buoy.prototype._createDom = function() {
        var parentNode = document.querySelector('.Buoy-box');
        parentNode.innerHTML = '';
        parentNode.appendChild(this.el);
    }

    Buoy.prototype.showBuoy = function() {
        this._createDom();
    }
    Buoy.prototype.setMessage = function(url) {
        this.el.href = url;
    }
    /**
     * 传入数据进行填充
     * 向外
     * @param data
     */
    Buoy.prototype.sendMessage = function(url){
        this.setMessage(url);
    };
    /**
     * 图片预加载
     * @private
     */
    Buoy.prototype._imgPreList = function() {
        var imgLists = [
            {
                name: 'star1',
                type: 'style',
                canWebp: true,
                imgUlr: '//oss.ltcdn.cc/game/Theme/Buoy/Images/buoy8/star1.png'
            },{
                name: 'star2',
                type: 'style',
                canWebp: true,
                imgUlr: '//oss.ltcdn.cc/game/Theme/Buoy/Images/buoy8/star2.png'
            },{
                name: 'bl1',
                type: 'style',
                canWebp: true,
                imgUlr: '//oss.ltcdn.cc/game/Theme/Buoy/Images/buoy8/pop1.png'
            },{
                name: 'bl2',
                type: 'style',
                canWebp: true,
                imgUlr: '//oss.ltcdn.cc/game/Theme/Buoy/Images/buoy8/pop2.png'
            },{
                name: 'bl3',
                type: 'style',
                canWebp: true,
                imgUlr: '//oss.ltcdn.cc/game/Theme/Buoy/Images/buoy8/pop3.png'
            },{
                name: 'redpack',
                type: 'style',
                canWebp: true,
                imgUlr: '//oss.ltcdn.cc/game/Theme/Buoy/Images/buoy8/pop4.png'
            }
        ];
        this._setPreImgLoad(imgLists);
    }
    return Buoy;
}));