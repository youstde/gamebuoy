function base(Obj) {
    /**
     * 设置图片
     * 其中imglists中的图片如果canWebp是TRUE才会走这个方法，为FALSE不走，直接在样式中写定
     * @param imgLists
     * @private
     */
    Obj.prototype._setImgConfig = function(imgItem) {
        var _this = this;
        if(imgItem.name) {
            if(imgItem.type === 'style') {
                var els = _this.el.querySelectorAll('.config[data-config='+imgItem.name+']');
                if(els.length > 1) {
                    els.forEach(function(el){
                        el.style.backgroundImage = 'url('+imgItem.imgUlr+')';
                    });
                }else {
                    _this.el.querySelector('.config[data-config='+imgItem.name+']').style.backgroundImage = 'url('+imgItem.imgUlr+')';
                }
            }
        }
    }
    /**
     * 图片预加载设置(内部)
     * @param imgLists
     * @private
     */
    Obj.prototype._setPreImgLoad = function(imgLists){
        var _this = this;
        var newimages=[];
        imgLists.forEach(function(item, index){
            if(window.supportWebp) {
                if(item.canWebp) {
                    item.imgUlr +='?x-oss-process=image/format,webp';
                }
            }
            newimages[index]=new Image();
            newimages[index].src = item.imgUlr;
            _this._setImgConfig(item);
        });
    };
}