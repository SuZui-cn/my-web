# 从零开始学WEB前端💦——JavaScript异步请求

## 📓项目介绍

先做个自我介绍，本人是一个没人写前端所以就自学前端的后端程序员🙇。在此项目中我会和大家一起从零基础开始学习前端，从后端程序员的视角来看前端，受限于作者的水平本项目暂时只会更新到前端框架VUE，不会涉及node.js。该项目适合零基础的小白或者和我一样开发网站没人写前端所以自学前端的后端程序员😂。

该项目的学习顺序是按照我自己学习时总结出来的，其中的每个知识点都是我认真去理解的，同时也查了很多的资料，所有的参考资料我都放在了文章末尾。尊重开源，尊重知识产权。每一个案例我都亲手写过并觉得不错才放上去的。每次的代码和笔记我都放在了开源仓库里，有需要的同学请不要吝啬给我一个star。如果觉得本文写的不错的话记得点赞+关注，你们的支持是我坚持下去的动力😃。

> 独怜幽草涧边生，上有黄鹂深树鸣。
> 春潮带雨晚来急，野渡无人舟自横。
> 
> ——韦应物《滁州西涧》

语雀地址：[https://www.yuque.com/beilayanmen](https://www.yuque.com/beilayanmen)

Github地址：[https://github.com/SuZui-cn/my-web](https://github.com/SuZui-cn/my-web)

Gitee地址：[https://gitee.com/north_gate/my-web](https://gitee.com/north_gate/my-web)

个人博客地址：[https://foollyone.cn/](https://foollyone.cn/)

## ⌨本文知识点

* AJAX介绍
* 原生AJAX
  * 创建对象
  * 发起请求
  * 服务器响应
* 案例

<!--more-->

AJAX(异步请求) 作为和后端交互的主要方式，这个技术一定要着重掌握。在掌握原生AJAX之后学习异步请求框架会变得非常的轻松。

## AJAX介绍

> AJAX = 异步 JavaScript 和 XML。
>
> AJAX 是一种用于创建快速动态网页的技术。
>
> 通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。
>
> 传统的网页（不使用 AJAX）如果需要更新内容，必需重载整个网页面。
>
> 有很多使用 AJAX 的应用程序案例：新浪微博、Google 地图、开心网等等。
>
> ——菜鸟教程

> AJAX 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。

## 工作原理

![image-20220310224058964](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220310224058964.png)

## 原生AJAX

原生AJAX的使用步骤分为一下几步：

* 创建对象
* 发起请求
* 服务器响应
* onreadystatechange 事件

### 创建对象

XMLHttpRequest 是 AJAX 的基础。

所有现代浏览器均支持 XMLHttpRequest 对象（IE5 和 IE6 使用 ActiveXObject）。

XMLHttpRequest 用于在后台与服务器交换数据。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

```javascript
var xmlhttp;
if (window.XMLHttpRequest)
{
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp=new XMLHttpRequest();
}
else
{
    // IE6, IE5 浏览器执行代码
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
```

### 发起请求

如需将请求发送到服务器，我们使用 **XMLHttpRequest** 对象的 **open()** 和 **send()** 方法：

```
xmlhttp.open("GET","ajax_info.txt",true);
xmlhttp.send();
```

![image-20220310230314612](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220310230314612.png)

以下情况使用POST：

*  不愿使用缓存文件（更新服务器上的文件或数据库）
* 向服务器发送大量数据（POST 没有数据量限制）
* 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠

### 服务器响应

如需获得来自服务器的响应，请使用 XMLHttpRequest 对象的 responseText 或 responseXML 属性。

如果来自服务器的响应并非 XML，请使用 responseText 属性。

### onreadystatechange 事件

当请求被发送到服务器时，我们需要执行一些基于响应的任务。

每当 readyState 改变时，就会触发 onreadystatechange 事件。

readyState 属性存有 XMLHttpRequest 的状态信息。

下面是 XMLHttpRequest 对象的三个重要的属性：

![image-20220310230539436](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220310230539436.png)

在 onreadystatechange 事件中，我们规定当服务器响应已做好被处理的准备时所执行的任务。

当 readyState 等于 4 且状态为 200 时，表示响应已就绪：

## 案例

在实际的开发中url 应该为后端接口的地址，这里为了方便测试，所以采取读取本地文件的方式。但是由于谷歌的安全策略，AJAX无法访问本地文件。所以可以直接看菜鸟教程的案例。

地址：[https://www.runoob.com/try/try.php?filename=tryajax_first](https://www.runoob.com/try/try.php?filename=tryajax_first)

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <script>
      function loadXMLDoc() {
        var xmlhttp;
        if (window.XMLHttpRequest) {
          //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
          xmlhttp = new XMLHttpRequest();
        } else {
          // IE6, IE5 浏览器执行代码
          xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
        }
        xmlhttp.onreadystatechange = function () {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById('myDiv').innerHTML = xmlhttp.responseText;
          }
        };
        xmlhttp.open('GET', './测试.txt', true);
        xmlhttp.send();
      }
    </script>
  </head>
  <body>
    <div id="myDiv"><h2>使用 AJAX 修改该文本内容</h2></div>
    <button type="button" onclick="loadXMLDoc()">修改内容</button>
  </body>
</html>
```

### 发送get请求

```javascript
<input name="submit" type="button" id="submit" value="向服务器发出请求" />
<script>
    window.onload = function () {  //页面初始化
        var b = document.getElementsByTagName("input")[0];
        b.onclick = function () {
            var url = "url?callback=functionName"；  //设置查询字符串
            var xhr = createXHR();  //实例化XMLHttpRequest 对象
            xhr.open("GET", url, false);  //建立连接，要求同步响应
            xhr.send(null);  //发送请求
            console.log(xhr.responseText);  //接收数据
        }
    }
</script>
```

### 发送post请求

```javascript
window.onload = function () {  //页面初始化
    var b = document.getElementsByTagName("input")[0];
    b.onclick = function () {
        var url = "url";  //设置请求的地址
        var xhr = createXHR();  //实例化XMLHttpRequest 对象
        xhr.open("POST", url, false);  //建立连接，要求同步响应
        xhr.setRequestHeader ('Content-type', 'application/x-www-form-urlencoded');  //设置为表单方式提交
        xhr.send("callback=functionName");  //发送请求
        console.log(xhr.responseText);  //接收数据
    }
}
```

