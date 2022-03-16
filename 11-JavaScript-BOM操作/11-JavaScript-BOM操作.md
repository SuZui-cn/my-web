# 从零开始学WEB前端💦——JavaScript-BOM操作

## 📓项目介绍

先做个自我介绍，本人是一个没人写前端所以就自学前端的后端程序员🙇。在此项目中我会和大家一起从零基础开始学习前端，从后端程序员的视角来看前端，受限于作者的水平本项目暂时只会更新到前端框架VUE，不会涉及node.js。该项目适合零基础的小白或者和我一样开发网站没人写前端所以自学前端的后端程序员😂。

该项目的学习顺序是按照我自己学习时总结出来的，其中的每个知识点都是我认真去理解的，同时也查了很多的资料，所有的参考资料我都放在了文章末尾。尊重开源，尊重知识产权。每一个案例我都亲手写过并觉得不错才放上去的。每次的代码和笔记我都放在了开源仓库里，有需要的同学请不要吝啬给我一个star。如果觉得本文写的不错的话记得点赞+关注，你们的支持是我坚持下去的动力😃。

> 折戟沉沙铁未销，自将磨洗认前朝。
>
> 东风不与周郎便，铜雀春深锁二乔。
>
> ——杜牧《赤壁》

语雀地址：[https://www.yuque.com/beilayanmen](https://www.yuque.com/beilayanmen)

Github地址：[https://github.com/SuZui-cn/my-web](https://github.com/SuZui-cn/my-web)

Gitee地址：[https://gitee.com/north_gate/my-web](https://gitee.com/north_gate/my-web)

个人博客地址：[https://foollyone.cn/](https://foollyone.cn/)

## ⌨本文知识点

* window对象
  * 全局作用域
  * 常见事件
  * 调节窗口大小
  * 定时器setTimeout
  * this指向问题
* location对象
  * 跳转页面
  * location常见方法
* 小结

<!--more-->

> ECMAScript是JavaScript的核心，但如果要在Web中使用JavaScript，那么BOM（浏览器对象模型）则无疑才是真正的核心。BOM提供了很多对象，用于访问浏览器的功能，这些功能与任何网页内容无关。
>
> ——Nicholas C.Zakas《JavaScript高级程序设计（第三版）》

## window对象

BOM的核心对象是window，它表示浏览器的一个实例。在浏览器中，window对象有双重角色，它既是通过JavaScript访问浏览器窗口的一个接口，又是ECMAScript规定的Global对象。这意味着在网页中定义的任何一个对象、变量和函数，都以window作为其Global对象，因此有权访问parseInt()等方法。

### 全局作用域

由于window对象同时扮演着ECMAScript中Global对象的角色，因此所有在全局作用域中声明的变量、函数都会变成window对象的属性和方法。来看下面的例子。

![image-20220310215154178](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220310215154178.png)

我们在全局作用域中定义了一个变量name和一个函数sayName()，它们被自动归在了window对象名下。于是，可以通过window.name访问变量name，可以通过window.sayAge()访问函数sayName()。由于sayName()存在于全局作用域中，因此this.name被映射到window.name，最终显示的仍然是正确的结果。

### 常见事件

window对象也有一些自己的事件，这里我们用

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <script>
      window.addEventListener('load', function () {
        var btn = document.querySelector('button');
        btn.addEventListener('click', function () {
          alert('点击我');
        });
      });
      window.addEventListener('load', function () {
        alert(22);
      });
      document.addEventListener('DOMContentLoaded', function () {
        alert(33);
      });
      // load 等页面内容全部加载完毕，包含页面dom元素 图片 flash  css 等等
      // DOMContentLoaded 是DOM 加载完毕，不包含图片 falsh css 等就可以执行 加载速度比 load更快一些
    </script>
  </head>

  <body>
    <button>点击</button>
  </body>
</html>
```

### 调节窗口大小

比如下面这个案例，当我们把网页缩放到800的时候盒子就会消失不见。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      div {
        width: 200px;
        height: 200px;
        background-color: pink;
      }
    </style>
  </head>

  <body>
    <script>
      window.addEventListener('load', function () {
        var div = document.querySelector('div');
        window.addEventListener('resize', function () {
          console.log(window.innerWidth);
          console.log('变化了');
          if (window.innerWidth <= 800) {
            div.style.display = 'none';
          } else {
            div.style.display = 'block';
          }
        });
      });
    </script>
    <div></div>
  </body>
</html>
```

### 定时器setTimeout

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <script>
      // 1. setTimeout
      // 语法规范：  window.setTimeout(调用函数, 延时时间);
      // 1. 这个window在调用的时候可以省略
      // 2. 这个延时时间单位是毫秒 但是可以省略，如果省略默认的是0
      // 3. 这个调用函数可以直接写函数 还可以写 函数名 还有一个写法 '函数名()'
      // 4. 页面中可能有很多的定时器，我们经常给定时器加标识符 （名字)
      // setTimeout(function() {
      //     console.log('时间到了');

      // }, 2000);
      function callback() {
        console.log('执行力');
      }
      var timer1 = setTimeout(callback, 3000);
      var timer2 = setTimeout(callback, 5000);
      // setTimeout('callback()', 3000); // 我们不提倡这个写法
    </script>
  </body>
</html>

```

### this指向问题

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <button>点击</button>
    <script>
      // this 指向问题 一般情况下this的最终指向的是那个调用它的对象

      // 1. 全局作用域或者普通函数中this指向全局对象window（ 注意定时器里面的this指向window）
      console.log(this);

      function fn() {
        console.log(this);
      }
      window.fn();
      window.setTimeout(function () {
        console.log(this);
      }, 1000);
      // 2. 方法调用中谁调用this指向谁
      var o = {
        sayHi: function () {
          console.log(this); // this指向的是 o 这个对象
        },
      };
      o.sayHi();
      var btn = document.querySelector('button');
      // btn.onclick = function() {
      //     console.log(this); // this指向的是btn这个按钮对象

      // }
      btn.addEventListener('click', function () {
        console.log(this); // this指向的是btn这个按钮对象
      });
      // 3. 构造函数中this指向构造函数的实例
      function Fun() {
        console.log(this); // this 指向的是fun 实例对象
      }
      var fun = new Fun();
    </script>
  </body>
</html>
```

## location对象

### 转跳页面

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <button>点击</button>
    <div></div>
    <script>
        var btn = document.querySelector('button');
        var div = document.querySelector('div');
        btn.addEventListener('click', function() {
            // console.log(location.href);
            location.href = 'http://www.itcast.cn';
        })
        var timer = 5;
        setInterval(function() {
            if (timer == 0) {
                location.href = 'http://www.itcast.cn';
            } else {
                div.innerHTML = '您将在' + timer + '秒钟之后跳转到首页';
                timer--;
            }

        }, 1000);
    </script>
</body>
</html>
```

### location常见方法

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <button>点击</button>
    <script>
      var btn = document.querySelector('button');
      btn.addEventListener('click', function () {
        // 记录浏览历史，所以可以实现后退功能
        // location.assign('http://www.itcast.cn');
        // 不记录浏览历史，所以不可以实现后退功能
        // location.replace('http://www.itcast.cn');
        location.reload(true);
      });
    </script>
  </body>
</html>
```

## 小结

浏览器对象模型（BOM）以window对象为依托，表示浏览器窗口以及页面可见区域。同时，window对象还是ECMAScript中的Global对象，因而所有全局变量和函数都是它的属性，且所有原生的构造函数及其他函数也都存在于它的命名空间下。

* ❏ 在使用框架时，每个框架都有自己的window对象以及所有原生构造函数及其他函数的副本。每个框架都保存在frames集合中，可以通过位置或通过名称来访问。
* ❏ 有一些窗口指针，可以用来引用其他框架，包括父框架。
* ❏ top对象始终指向最外围的框架，也就是整个浏览器窗口。
* ❏ parent对象表示包含当前框架的框架，而self对象则回指window。
* ❏ 使用location对象可以通过编程方式来访问浏览器的导航系统。设置相应的属性，可以逐段或整体性地修改浏览器的URL。
* ❏ 调用replace()方法可以导航到一个新URL，同时该URL会替换浏览器历史记录中当前显示的页面。
* ❏ navigator对象提供了与浏览器有关的信息。到底提供哪些信息，很大程度上取决于用户的浏览器；不过，也有一些公共的属性（如userAgent）存在于所有浏览器中。