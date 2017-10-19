#### 游戏浮标
##### 有个middlereal.js文件,其作为一个中间点,去请求不同样式的浮标类型`http://imgcow.oss-cn-hangzhou.aliyuncs.com/game/Theme/Buoy/middlereal.js`
##### middlereal.js向外暴露出一个方法window.BuoyMiddle
```
window.BuoyMiddle({
            id: '4',  //要请求的浮标类型的ID
            ready: function(Buoy) {   //浮标初始化完毕后调用
                Buoy.sendMessage('http://www.baidu.com');
                Buoy.showBuoy();
            },
            clickCallback: function() { //点击浮标时的回调
                console.log(111);
            }
        });
```

