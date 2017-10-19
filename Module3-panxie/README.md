#### 游戏浮标

![](http://ww1.sinaimg.cn/large/005QDhBjgy1fiumdof03ij30fm0nygxi.jpg)

添加了关闭弹窗时的回调,回调中会返回一个`type`类型，分为两种：`1.jump, 2.close`,第一种是点击跳转按钮去到广告落地页之前的回调，第二种是点击关闭按钮的回调

1.向外暴露一个js文件,会暴露出一个构造函数

```javascript
var prop = new Baitai.Popup({
            body:".Popup-box"  //弹窗模板需要放置的地方
        });
```

2.向外暴露的方法：

```javascript
sendMessage(DATA) //传入弹窗的展示数据
toggleState(ACTION) //弹窗的展示和隐藏，显示：‘show’,隐藏：‘hidden’
```

3.模板的具体使用流程：

* 1.该弹窗模板不会直接被引入到游戏中，而是通过`middle.js`去引入，直接引入到页面的是`middle.js`
* 2.通过middle.js引入成功后，其中new实例对象middle.js会直接做了