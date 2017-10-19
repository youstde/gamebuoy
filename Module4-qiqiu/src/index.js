(function(factory){
    var root =this,Baitai = root.Baitai = root.Baitai ? root.Baitai : {};
    Baitai.Buoy = factory(root);
    if (typeof module !== "undefined" && module.exports) {
        module.exports = Baitai.Buoy;
    }
}(function(root){
    var tpl = _include('./index.html');
    function Buoy(options){
        this.data = '';
        this.el = '';
        this.options = options;
        this._init();
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

    return Buoy;
}));