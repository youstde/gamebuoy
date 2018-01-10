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
                name: 'luckbag',
                type: 'style',
                canWebp: true,
                imgUlr: '//oss.ltcdn.cc/game/Theme/Buoy/Images/Buoy5/bag-bg.png'
            },{
                name: 'luckbtn',
                type: 'style',
                canWebp: true,
                imgUlr: '//oss.ltcdn.cc/game/Theme/Buoy/Images/Buoy5/lucky-btn.png'
            },{
                name: 'luckbagCover',
                type: 'style',
                canWebp: true,
                imgUlr: '//oss.ltcdn.cc/game/Theme/Buoy/Images/Buoy5/bag-cover.png'
            },{
                name: 'red2',
                type: 'style',
                canWebp: true,
                imgUlr: '//oss.ltcdn.cc/game/Theme/Buoy/Images/Buoy5/red.png'
            },{
                name: 'gift',
                type: 'style',
                canWebp: true,
                imgUlr: '//oss.ltcdn.cc/game/Theme/Buoy/Images/Buoy5/gift.png'
            },{
                name: 'iphone',
                type: 'style',
                canWebp: true,
                imgUlr: '//oss.ltcdn.cc/game/Theme/Buoy/Images/Buoy5/iphone.png'
            },{
                name: 'gold3',
                type: 'style',
                canWebp: true,
                imgUlr: '//oss.ltcdn.cc/game/Theme/Buoy/Images/Buoy5/gold.png'
            }
        ];
        this._setPreImgLoad(imgLists);
    }
    return Buoy;
}));