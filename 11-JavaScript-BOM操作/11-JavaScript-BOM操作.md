# 从零开始学WEB前端💦——JavaScript-DOM操作

## 📓项目介绍

先做个自我介绍，本人是一个没人写前端所以就自学前端的后端程序员🙇。在此项目中我会和大家一起从零基础开始学习前端，从后端程序员的视角来看前端，受限于作者的水平本项目暂时只会更新到前端框架VUE，不会涉及node.js。该项目适合零基础的小白或者和我一样开发网站没人写前端所以自学前端的后端程序员😂。

该项目的学习顺序是按照我自己学习时总结出来的，其中的每个知识点都是我认真去理解的，同时也查了很多的资料，所有的参考资料我都放在了文章末尾。尊重开源，尊重知识产权。每一个案例我都亲手写过并觉得不错才放上去的。每次的代码和笔记我都放在了开源仓库里，有需要的同学请不要吝啬给我一个star。如果觉得本文写的不错的话记得点赞+关注，你们的支持是我坚持下去的动力😃。

> 风急天高猿啸哀，渚清沙白鸟飞回。
> 无边落木萧萧下，不尽长江滚滚来。
> 万里悲秋常作客，百年多病独登台。
> 艰难苦恨繁霜鬓，潦倒新停浊酒杯。
>
> ——杜甫《登高》

语雀地址：[https://www.yuque.com/beilayanmen](https://www.yuque.com/beilayanmen)

Github地址：[https://github.com/SuZui-cn/my-web](https://github.com/SuZui-cn/my-web)

Gitee地址：[https://gitee.com/north_gate/my-web](https://gitee.com/north_gate/my-web)

个人博客地址：[https://foollyone.cn/](https://foollyone.cn/)

## ⌨本文知识点

* DOM介绍
* 获取节点
  * 通过ID获取
  * 用类名获取
  * 用CSS选择器获取
  * 用name属性获取
  * 用标签获取
  * 获取属性
  * 获取元素内容
  * 获取表单数据
* 创建节点
* 插入节点
* 删除节点
* 事件

<!--more-->

在本节中会学习如何使用DOM，也就是用js操作标签和属性，还是一样的，学计算机就要多写代码。所以再次建议大家多写代码。

## DOM介绍

先来介绍一下什么是DOM。

> 文档对象模型（DOM）是表示和操作HTML和XML文档内容的基础API。API不是特别复杂，但是需要理解大量的架构细节。首先，应该理解HTML或XML文档的嵌套元素在DOM树对象中的表示。HTML文档的树状结构包含表示HTML标签或元素（如<body>、<p>）和表示文本字符串的节点，它也可能包含表示HTML注释的节点。
>
> ——弗兰纳根《JavaScript权威指南》

节点演示如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>网页标题</title>
  </head>
  <body>
    <h1>这是一级标题</h1>
    <p>这里<i>是</i>段落</p>
  </body>
</html>
```

我们把上面的代码转换成树状图，如下图：

![image-20220310172830147](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220310172830147.png)

在上面的图中，每个方框是文档的一个节点，它表示一个Node对象。同时，上图包含了3种不同类型的节点。树形的根部是Document节点，它代表整个文档。代表HTML元素的节点是Element节点，代表文本的节点是Text节点。Document、Element和Text是Node的子类，在第四部分中它们有自己的条目。Document和Element是两个重要的DOM类，本章大部分内容将阐述它们的属性和方法。

***注意，通用的Document和Element类型与HTMLDocument和HTMLElement类型之间是有严格的区别的。Document类型代表一个HTML或XML文档，Element类型代表该文档中的一个元素。HTMLDocument和HTMLElement子类只是针对于HTML文档和元素。***

> 在一个节点之上的直接节点是其父节点，在其下一层的直接节点是其子节点。在同一层上具有相同父节点的节点是兄弟节点。在一个节点之下的所有层级的一组节点是其后代节点。一个节点的任何父节点、祖父节点和其上层的所有节点是祖先节点。

文档节点的部分层次结构图：

![image-20220310173803975](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220310173803975.png)

## 获取节点

大多数客户端JavaScript程序运行时总是在操作一个或多个文档元素。当这些程序启动时，可以使用全局变量document来引用Document对象。但是，为了操作文档中的元素，必须通过某种方式获得或选取这些引用文档元素的Element对象。DOM定义许多方式来选取元素，查询文档的一个或多个元素有如下方法：

* 用指定的id属性；
* 用指定的类名；
* 匹配指定的选择器。
* 用指定的name属性；
* 用指定的标签名字；

### 用ID获取

任何HTML元素可以有一个id属性，在文档中该值必须唯一，即同一个文档中的两个元素不能有相同的ID。可以用Document对象的getElementById（）方法选取一个基于唯一ID的元素。

***pass：在使用`getElementById()` 方法的时候里面的参数不需要加`#`。***

![image-20220310175456942](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220310175456942.png)

### 用类名获取

HTML元素的class属性值是一个以空格隔开的列表，可以为空或包含多个标识符。它描述一种方法来定义多组相关的文档元素：在它们的class属性中有相同标识符的任何元素属于该组的一部分。在JavaScript中class是保留字，所以客户端JavaScript使用className属性来保存HTML的class属性值。class属性通常与CSS样式表一起使用，对某组内的所有元素应用相同的样式。

![image-20220310175826995](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220310175826995.png)

### 用CSS选择器获取

CSS选择器可以使用下面的方法选取元素：通过ID、名字、标签名和类名。与CSS3选择器的标准化一起的另一个称做“选择器API”的W3C标准定义了获取匹配一个给定选择器的元素的JavaScript方法。该API的关键是Document方法querySelectorAll（）。它接受包含一个CSS选择器的字符串参数，返回一个表示文档中匹配选择器的所有元素的NodeList对象。与前面描述的选取元素的方法不同，querySelectorAll（）返回的NodeList对象并不是实时的：它包含在调用时刻选择器所匹配的元素，但它并不更新后续文档的变化。如果没有匹配的元素，querySelectorAll（）将返回一个空的NodeList对象。如果选择器字符串非法，querySelectorAll（）将抛出一个异常。

![image-20220310181632813](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220310181632813.png)

除了querySelectorAll（），文档对象还定义了querySelector（）方法。与querySelectorAll（）的工作原理类似，但它只是返回第一个匹配的元素（以文档顺序）或者如果没有匹配的元素就返回null。

![image-20220310181757648](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220310181757648.png)

***pass：CSS定义了“:first-line”和“:first-letter”等伪元素。在CSS中，它们匹配文本节点的一部分而不是实际元素。如果和querySelectorAll（）或querySelector（）一起使用它们是不匹配的。而且，很多浏览器会拒绝返回“:link”和“:visited”等伪类的匹配结果，因为这会泄露用户的浏览历史记录。***

### 用name属性获取

HTML的name属性最初打算为表单元素分配名字，在表单数据提交到服务器时使用该属性的值。类似id属性，name是给元素分配名字，但是区别于id，name属性的值不是必须唯一：多个元素可能有同样的名字，在表单中，单选和复选按钮通常是这种情况。而且，和id不一样的是name属性只在少数HTML元素中有效，包括表单、表单元素、<iframe>和<img>元素。基于name属性的值选取HTML元素，可以使用Document对象的getElementsByName（）方法。

![image-20220310181215229](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220310181215229.png)

getElementsByName（）定义在HTMLDocument类中，而不在Document类中，所以它只针对HTML文档可用，在XML文档中不可用。它返回一个NodeList对象，后者的行为类似一个包含若干Element对象的只读数组。在IE中，getElementsByName（）也返回id属性匹配指定值的元素。为了兼容，应该小心谨慎，不要将同样的字符串同时用做名字和ID。

### 用标签获取

Document对象的getElementsByTagName（）方法可用来选取指定类型（标签名）的所有HTML或XML元素。例如，如下代码，在文档中获得包含所有<span>元素的只读的类数组对象：

![image-20220310181328961](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220310181328961.png)

### 获取属性

HTML元素由一个标签和一组称为属性（attribute）的名/值对组成。例如，<a>元素定义了一个超链接，它的href属性值作为链接的目的地址。HTML元素的属性值在代表这些元素的HTMLElement对象的属性（property）中是可用的。DOM还定义了另外的API来获取或设置XML属性值和非标准的HTML属性。

比如下面的获取图片标签的属性。

![image-20220310182829466](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220310182829466.png)

### 获取元素内容

在DOM中我们可以通过`innerHTML` 或者 `innerText` 来获取内容。操作如下：

![image-20220310203724795](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220310203724795.png)

同时我们也可以使用这两个属性给标签设置内容，但是我们需要知道这两个属性在设置内容上的区别，`innerHTML` 如果设置的内容含有标签的话会渲染，而 `innerText` 则不会渲染。

具体如下：

![image-20220310203930524](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220310203930524.png)

### 获取表单数据

我们可以使用`value` 属性来获取表单的数据。

![image-20220310210521300](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220310210521300.png)

具体代码如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
    <form>
        用户名：<input type="text" name="username" />
        <br />
        密码：<input type="password" name="password" />
        <br>
        性别：<input type="radio" name="sex" value="男">男</input>
              <input type="radio" name="sex" value="女">女</input>
        <br>
        <input type="button" onclick="show()" value="提交">
      </form>
    <script>
      function show(){
        var username = document.getElementsByName("username")[0]
      var password = document.getElementsByName("password")[0]
      var man = document.getElementsByName("sex")[0]
      var woman = document.getElementsByName("sex")[1]
      console.log(username.value)
      console.log(password.value)
      // 对于单选框我们需要使用checked属性来判断是否选中，
      // 选中时checked返回为真，反之为假。
      if (woman.checked){
        console.log("女")
      }else if(man.checked){
        console.log("男")
      }
      }
    </script>
  </body>
</html>
```

## 创建节点

创建新的Element节点可以使用Document对象的createElement（）方法。给方法传递元素的标签名：对HTML文档来说该名字不区分大小写。

让我们来看一个案例：

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
    <ul>
      <li>123</li>
    </ul>
    <script>
      // 1. 创建节点元素节点
      var li = document.createElement('li');
      // 2. 添加节点 node.appendChild(child)  node 父级  child 是子级 后面追加元素  类似于数组中的push
      var ul = document.querySelector('ul');
      ul.appendChild(li);
      // 3. 添加节点
      var lili = document.createElement('li');
    </script>
  </body>
</html>

```

具体效果如下：

![image-20220310211712360](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220310211712360.png)

## 插入节点

我们再来看一个留言发布的案例

![image-20220310211324469](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220310211324469.png)

具体代码如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      body {
        padding: 100px;
      }

      textarea {
        width: 200px;
        height: 100px;
        border: 1px solid pink;
        outline: none;
        resize: none;
      }

      ul {
        margin-top: 50px;
      }

      li {
        width: 300px;
        padding: 5px;
        background-color: rgb(245, 209, 243);
        color: red;
        font-size: 14px;
        margin: 15px 0;
      }
    </style>
  </head>

  <body>
    <textarea name="" id=""></textarea>
    <button>发布</button>
    <ul></ul>
    <script>
      // 1. 获取元素
      var btn = document.querySelector('button');
      var text = document.querySelector('textarea');
      var ul = document.querySelector('ul');
      // 2. 注册事件
      btn.onclick = function () {
        if (text.value == '') {
          alert('您没有输入内容');
          return false;
        } else {
          // console.log(text.value);
          // (1) 创建元素
          var li = document.createElement('li');
          // 先有li 才能赋值
          li.innerHTML = text.value;
          // (2) 添加元素
          ul.appendChild(li);
        }
      };
    </script>
  </body>
</html>
```

## 删除节点

在上面插入节点的案例上，我们来引入删除节点。点击删除的时候，留言的内容会被删除掉。

![image-20220310212102719](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220310212102719.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      body {
        padding: 100px;
      }

      textarea {
        width: 200px;
        height: 100px;
        border: 1px solid pink;
        outline: none;
        resize: none;
      }

      ul {
        margin-top: 50px;
      }

      li {
        width: 300px;
        padding: 5px;
        background-color: rgb(245, 209, 243);
        color: red;
        font-size: 14px;
        margin: 15px 0;
      }

      li a {
        float: right;
      }
    </style>
  </head>

  <body>
    <textarea name="" id=""></textarea>
    <button>发布</button>
    <ul></ul>
    <script>
      // 1. 获取元素
      var btn = document.querySelector('button');
      var text = document.querySelector('textarea');
      var ul = document.querySelector('ul');
      // 2. 注册事件
      btn.onclick = function () {
        if (text.value == '') {
          alert('您没有输入内容');
          return false;
        } else {
          // console.log(text.value);
          // (1) 创建元素
          var li = document.createElement('li');
          // 先有li 才能赋值
          li.innerHTML = text.value + "<a href='javascript:;'>删除</a>";
          // (2) 添加元素
          // ul.appendChild(li);
          ul.insertBefore(li, ul.children[0]);
          // (3) 删除元素 删除的是当前链接的li  它的父亲
          var as = document.querySelectorAll('a');
          for (var i = 0; i < as.length; i++) {
            as[i].onclick = function () {
              // node.removeChild(child); 删除的是 li 当前a所在的li  this.parentNode;
              ul.removeChild(this.parentNode);
            };
          }
        }
      };
    </script>
  </body>
</html>
```

## 事件

事件本身并不是一个需要定义的技术名词。简而言之，事件就是Web浏览器通知应用程序发生了什么事情。

常见的事件：

* 文档加载和准备就绪事件
* 鼠标事件
* 鼠标滚轮事件
* 拖放事件
* 键盘事件
* 文本输入事件

我们之前使用到的`onclick` 就是点击事件。接下来我们用两个案例来介绍一下事件。

当我们在浏览器按下键盘的`s` 的时候会聚焦到输入框中。

![image-20220310213248519](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220310213248519.png)

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
    <input type="text" />
    <script>
      // 核心思路： 检测用户是否按下了s 键，如果按下s 键，就把光标定位到搜索框里面
      // 使用键盘事件对象里面的keyCode 判断用户按下的是否是s键
      // 搜索框获得焦点： 使用 js 里面的 focus() 方法
      var search = document.querySelector('input');
      document.addEventListener('keyup', function (e) {
        // console.log(e.keyCode);
        if (e.keyCode === 83) {
          search.focus();
        }
      });
    </script>
  </body>
</html>
```

第二个案例：当我们在输入框里输入内容的时候，上方会出现一个文本框，里面输出我们输入的内容。

![image-20220310213016268](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220310213016268.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      .search {
        position: relative;
        width: 178px;
        margin: 100px;
      }

      .con {
        display: none;
        position: absolute;
        top: -40px;
        width: 171px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        padding: 5px 0;
        font-size: 18px;
        line-height: 20px;
        color: #333;
      }

      .con::before {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        top: 28px;
        left: 18px;
        border: 8px solid #000;
        border-style: solid dashed dashed;
        border-color: #fff transparent transparent;
      }
    </style>
  </head>

  <body>
    <div class="search">
      <div class="con">123</div>
      <input type="text" placeholder="请输入您的快递单号" class="jd" />
    </div>
    <script>
      // 快递单号输入内容时， 上面的大号字体盒子（con）显示(这里面的字号更大）
      // 表单检测用户输入： 给表单添加键盘事件
      // 同时把快递单号里面的值（value）获取过来赋值给 con盒子（innerText）做为内容
      // 如果快递单号里面内容为空，则隐藏大号字体盒子(con)盒子
      var con = document.querySelector('.con');
      var jd_input = document.querySelector('.jd');
      jd_input.addEventListener('keyup', function () {
        // console.log('输入内容啦');
        if (this.value == '') {
          con.style.display = 'none';
        } else {
          con.style.display = 'block';
          con.innerText = this.value;
        }
      });
      // 当我们失去焦点，就隐藏这个con盒子
      jd_input.addEventListener('blur', function () {
        con.style.display = 'none';
      });
      // 当我们获得焦点，就显示这个con盒子
      jd_input.addEventListener('focus', function () {
        if (this.value !== '') {
          con.style.display = 'block';
        }
      });
    </script>
  </body>
</html>
```





