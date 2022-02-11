# 从零开始学WEB前端💦——网页的装饰——CSS基础

## 📓项目介绍

先做个自我介绍，本人是一个没人写前端所以就自学前端的后端程序员🙇。在此项目中我会和大家一起从零基础开始学习前端，从后端程序员的视角来看前端，受限于作者的水平本项目暂时只会更新到前端框架VUE，不会涉及node.js。该项目适合零基础的小白或者和我一样开发网站没人写前端所以自学前端的后端程序员😂。

该项目的学习顺序是按照我自己学习时总结出来的，其中的每个知识点都是我认真去理解的，同时也查了很多的资料，所有的参考资料我都放在了文章末尾。尊重开源，尊重知识产权。每一个案例我都亲手写过并觉得不错才放上去的。每次的代码和笔记我都放在了开源仓库里，有需要的同学请不要吝啬给我一个star。如果觉得本文写的不错的话记得点赞+关注，你们的支持是我坚持下去的动力😃。

> 云想衣裳花想容，春风拂槛露华浓。 ——李白《清平调·其一》

语雀地址：[https://www.yuque.com/beilayanmen](https://www.yuque.com/beilayanmen)

Github地址：[https://github.com/SuZui-cn/my-web](https://github.com/SuZui-cn/my-web)

Gitee地址：[https://gitee.com/north_gate/my-web](https://gitee.com/north_gate/my-web)

个人博客地址：[https://foollyone.cn/](https://foollyone.cn/)

## ⌨本文知识点



<!--more-->

在上一篇中我们学习了HTML以及基础的应用，如果把网页学习比作修房子的话，现在我们已经修建了房子的框架。但是目前就只有毛胚房，而这章的CSS就相当于我们在给房子装修。CSS主要要掌握选择器、各种属性以及在布局中的实际应用。这章的内容比较多，要善于使用ctrl+f快速搜索本文的内容。可以把本文当作笔记，在需要的时候再来翻看。

> 看一本工具书的时候，先看目录，了解这本书的内容结构，再对书本内容进行浏览，重点在看案例、之后记住哪本书大致讲了什么，讲的内容在哪可以应用。用到的时候再去翻看那本书。

## CSS概述

CSS 指层叠样式表 (Cascading Style Sheets)。

> 层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现[HTML](https://baike.baidu.com/item/HTML)（[标准通用标记语言](https://baike.baidu.com/item/标准通用标记语言/6805073)的一个应用）或[XML](https://baike.baidu.com/item/XML)（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。 ——百度百科

我们之前在练习HTML的时候用到了一个名为`style`的标签属性，这个属性可以改变标签的外观。而这个属性其实就是CSS属性。

我们有时候在浏览网页的时候可能因为网络问题导致网页出现下面的这种情况，这像极了我们在刚开始学习html的时候做的标签练习，只有html。出现这种情况是因为css文件没有加载到客户端，所以在网页上只出现了纯html结构。

<img src="https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220211220719863.png" alt="image-20220211220719863" style="zoom:25%;" />

只要css文件加载正确了，网页也就有了他原本的样子。

<img src="https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220211221117778.png" alt="image-20220211221117778" style="zoom:25%;" />

通过这个例子，我们可以了解css的具体作用以及其存在的重要性。

## CSS语法

CSS的基础语法十分简单，我们来看一段代码

<img src="https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220211223612394.png" alt="image-20220211223612394"  />

> css中的注释是以/\*开始，以\*/结束的

## HTML引入CSS

接下来我们要学习在html中如何引入css。具体的方法有三种分别是行内式、内联式、外链式。

### 行内式

我们之前在html的标签中直接使用`style`属性来设置css样式就是行内式。

具体代码如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>行内式</title>
  </head>
  <body>
    <p style="color: red; font-size: 20px">
      行内式引用CSS
    </p>
  </body>
</html>
```

效果如图：

![image-20220211225133913](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220211225133913.png)

行内式引入存在以下的问题：

* 只能选中单个标签
* 将CSS代码写在HTML标签中会使得代码臃肿不易维护。

> 所以在实际编写代码时，不推荐使用行内式

### 内联式

刚刚的语法案例就是使用的内联式

具体代码如下：

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS语法</title>
    <!-- <style>标签是在<head>标签中书写的 -->
    <style>
      /* css中的注释是以/*开始，以* /结束的 */
      /* 这里的p和h1是选择器 */
      p {
        /* 下面的是给选择器选中的标签设置属性 */
        /* 具体设置的属性是以:为分界，左边是属性的名字成为键，右边是设置的属性值，称为值 */
        color: red;
        font-size: 30px;
        text-decoration: underline;
        font-weight: bold;
        text-align: center;
        font-style: italic;
      }
      h1 {
        color: blue;
        font-size: 50px;
        font-weight: bold;
        background-color: pink;
      }
    </style>
  </head>
  <body>
    <h1>我是大标题</h1>
    <p>我是内容</p>
  </body>
</html>
```

效果如图：

![image-20220211225411836](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220211225411836.png)

### 外链式

外联式就是将行内式的`style`标签移到一个单独的文件里，然后在HTML文件中引入。

具体做法如下：

新建一个css文件夹专门装css文件

![image-20220211230436907](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220211230436907.png)

为了方便查看html和css，这里使用了vscode的多窗口，左边html文件，右边css文件。

![image-20220211230427199](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220211230427199.png)

分窗口的具体操作：将文件直接拖到要分窗的位置，出现一个半透明的窗口松开鼠标既可。

![image-20220211230558442](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220211230558442.png)

> 如果同时采用两个或两个以上的CSS引入方式，则其优先级为：
>
> 行内式 > 内联式 > 外链式

## CSS选择器

从css的语法我们可以看出，css主要由两个部分构成：选择器，属性。

现在我们来学习选择器，选择器使用的好可以帮我们减少很多代码量。

CSS选择器：

* 基本选择器
  * 标签选择器：针对**一类**标签
  * ID 选择器：针对某**一个**特定的标签使用
  * 类选择器：针对**你想要的所有**标签使用
  * 通用选择器（通配符）：针对所有的标签都适用（不建议使用）

* 高级选择器
  -   后代选择器：用空格隔开
  -   交集选择器：选择器之间紧密相连
  -   并集选择器（分组选择器）：用逗号隔开
  -   伪类选择器

为了减少篇幅，所以我把所有选择器都放在一个文件里讲解，最好的学习方式是先把所有选择器都注释掉，然后逐步解除注释看一下每个选择器生效时的效果。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>css标签选择器的应用</title>
    <style>
      /* 不同选择器选中相同标签时，会因选择器先后顺序不同出现属性覆盖 */
      /* 通用选择器 */
      /* 所有标签都会被选中 */
      * {
        color: aqua;
      }
      /*标签选择器*/
      /* 所有的<p>标签都会被选中 */
      p {
        color: red;
      }
      /*类选择器*/
      /* 类选择器是在标签中添加class属性，class属性的值可以自定义，之后再通过值来定位标签 */
      .class {
        color: rosybrown;
      }
      /*id选择器*/
      /* 与类选择器使用方法相同 */
      #id {
        color: royalblue;
      }
      /*交集选择器*/
      /* 定义交集选择器的时候，两个选择器之间紧密相连。一般是以标签名开头 */
      /* 如果后一个选择器是类选择器，则写为`p.l2`；如果后一个选择器 id 选择器，则写为`p#l2`。 */
      p.l2 {
        color: tan;
      }
      /*并集选择器*/
      .l3,
      .l4 {
        color: sandybrown;
      }
      /*后代选择器*/
      /* 这里表示body标签所有div标签下的所有p标签 这三个标签不一定是连续紧挨着的*/
      body div p {
        color: silver;
      }
      /* 伪类选择器 */
      /* 伪类选择器比较复杂，这里只介绍一种:hover */
      /* 其作用是当鼠标放置时候会出现的属性 */
      a:hover {
        color: blue;
      }
    </style>
  </head>

  <body>
    <span>通用选择器</span>
    <p>标签选择器</p>
    <p class="class">类选择器</p>
    <p id="id">id选择器</p>
    <p class="l2">交集选择器</p>
    <p class="l3">并集选择器1</p>
    <p class="l4">并集选择器2</p>
    <div><p class="l5">后代选择器</p></div>
    <a>伪类选择器</a>
  </body>
</html>
```

## 属性

### 字体属性

#### 字号

#### 行高

#### 字体



### 文本属性



### 定位属性



### 鼠标属性



### CSS单位



### 常用标签属性



## CSS的两个性质

### 继承性



### 层叠性



## 盒子

### 盒子模型



### 浮动



### 定位



## 标准文档流



## 行内元素和块级元素



## 案例



## 思考题











