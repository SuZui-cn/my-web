# 从零开始学WEB前端💦——CSS基础

## 📓项目介绍

先做个自我介绍，本人是一个没人写前端所以就自学前端的后端程序员🙇。在此项目中我会和大家一起从零基础开始学习前端，从后端程序员的视角来看前端，受限于作者的水平本项目暂时只会更新到前端框架VUE，不会涉及node.js。该项目适合零基础的小白或者和我一样开发网站没人写前端所以自学前端的后端程序员😂。

该项目的学习顺序是按照我自己学习时总结出来的，其中的每个知识点都是我认真去理解的，同时也查了很多的资料，所有的参考资料我都放在了文章末尾。尊重开源，尊重知识产权。每一个案例我都亲手写过并觉得不错才放上去的。每次的代码和笔记我都放在了开源仓库里，有需要的同学请不要吝啬给我一个star。如果觉得本文写的不错的话记得点赞+关注，你们的支持是我坚持下去的动力😃。

> 云想衣裳花想容，春风拂槛露华浓。 ——李白《清平调·其一》

语雀地址：[https://www.yuque.com/beilayanmen](https://www.yuque.com/beilayanmen)

Github地址：[https://github.com/SuZui-cn/my-web](https://github.com/SuZui-cn/my-web)

Gitee地址：[https://gitee.com/north_gate/my-web](https://gitee.com/north_gate/my-web)

个人博客地址：[https://foollyone.cn/](https://foollyone.cn/)

## ⌨本文知识点

* CSS概述
* CSS语法
* HTML引入CSS
* CSS选择器
* 属性
* 盒子
* 案例

<!--more-->

在上一篇中我们学习了HTML以及基础的应用，如果把网页学习比作修房子的话，现在我们已经修建了房子的框架。但是目前就只有毛胚房，而这章的CSS就相当于我们在给房子装修。CSS主要要掌握选择器、各种属性以及在布局中的实际应用。这章的内容比较多，要善于使用ctrl+f快速搜索本文的内容。可以把本文当作笔记，在需要的时候再来翻看。

**本章中很多概念都来自千古壹号大佬的开源项目[https://github.com/qianguyihao/Web](https://github.com/qianguyihao/Web)以及菜鸟教程，尊重知识产权，本系列文章仅用作学习，不做商用。如果觉得概念写的不错的话欢迎大家去给千古壹号大佬的开源项目点个star。**

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
      /* CSS继承性演示 */
      body {
        color: red;
      }
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

### CSS的继承性与层叠性

#### 继承性

在上面那段代码中我们可以发现：在我们只给`<body>`标签设置字体红色的时候`<body>`标签里的其他标签也一起被设置了红色。

> 有一些属性，当给自己设置的时候，自己的后代都继承上了，这个就是**继承性。**

注意：

- 关于文字样式的属性，都具有继承性。这些属性包括：color、 text-开头的、line-开头的、font-开头的。

- 关于盒子、定位、布局的属性，都不能继承。

以后当我们谈到css有哪些特性的时候，我们要首先想到继承性。而且，要知道哪些属性具有继承性、哪些属性没有继承性。

#### 层叠性

同样是上面选择器的演示代码，在多个选择器选中同一个标签的时候属性的设置会出现覆盖，而这个属性的覆盖是通过**权重**的计算得出的。层叠性的重点就在于计算**权重**。

> **层叠性：就是css处理冲突的能力。**

> 当多个选择器，选择上了某个元素的时候，要按照如下顺序统计权重：
>
> -  id 选择器
> -  类选择器、属性选择器、伪类选择器
> -  标签选择器、伪元素选择器
>
> 因为对于相同方式的样式表，其选择器排序的优先级为：ID选择器 > 类选择器 > 标签选择器
>
> **权重相同时，以书写靠后的样式为准。**
>
> **如果不能直接选中某个元素，通过继承性影响的话，那么权重是0。**

上面的话可以总结为这张图。

![image-20220213162626330](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213162626330.png)

>  pass：
>
> 引入方式的优先级为：行内式 > 内联式 > 外链式
>
> 如果都是内嵌样式表，优先级的顺序如下：（ID 选择器 > 类选择器 > 标签选择器）
>
> 总结起来就是：**就近原则**

**关于权重问题需要注意两种情况**

情况一：同一个标签携带了多个类名

- 1、对同一个标签，如果用到了了多个相同的内嵌样式表，它的优先级：**定义**的样式表中，谁最近，就用谁。
- 2、对于同一个标签，如果引用了多个相同的外部样式表，它的优先级：html文件中，引用样式表的位置越近，就用谁。

情况二：!important标记：优先级最高

!important就是给一个属性提高权重。这个属性的权重就是**无穷大**。

案例

![image-20220213164836114](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213164836114.png)

![image-20220213164924930](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213164924930.png)

关于!important我们还需要注意三点：

* !important提升的是一个属性，而不是一个选择器
* !important无法提升继承的权重，该是0还是0
* !important不影响就近原则

> pass：做网站的时候，!important 尽量不要用。否则会让css写的很乱。

## 属性

关于属性这一节知识点会很多，死记硬背是很低效的一种方法，所以我会在后面案例那里用实际的代码来演示常用的一些属性设置以及一些效果的实现。而这一节作为一个铺垫，大家大致的了解一下有些什么属性。

在开始讲解CSS属性之前，为了方便之后调试设置的属性，我先给大家补充一下如何使用谷歌浏览器查看网页的元素以及样式。

### 浏览器审查元素

#### 打开审查元素

方法一：

键盘f12或者fn+f12

方法二：

鼠标右键点击页面->点击检查

![image-20220213172542149](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213172542149.png)

之后出现的界面中左侧为HTML结构，右侧为CSS属性

![image-20220213171541375](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213171541375.png)

有同学的界面可能出现在侧边，具体切换界面出现方式的操作如下：

![image-20220213171809051](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213171809051.png)

#### 查看单个标签属性

![image-20220213172248768](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213172248768.png)

#### 切换响应模式

如果我们要切换到移动端模式，就点击这个按钮

![image-20220213172427533](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213172427533.png)

### 字体属性

字体属性属于非布局样式属性，字体属性主要常见的有字体大小、行高

![image-20220213170631427](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213170631427.png)

#### 行高

关于行高这部分的讲解我在翻阅资料以及书籍的时候发现千古壹号这位大佬讲的比MDN写的还详细，所以下方便引用他的讲解。

CSS中，所有的行，都有行高。盒子模型的padding，绝对不是直接作用在文字上的，而是作用在“行”上的。

如下图所示：

![](http://img.smyhvae.com/20170808_2216.png)

上图中，我们设置行高为30px，30px * 5 = 150px，通过查看审查元素，这个p标签的高度果然为150px。而且我们发现，我们并没有给这个p标签设置高度，显然是内容将其撑高的。

垂直方向来看，文字在自己的行里是居中的。比如，文字是14px，行高是24px，那么padding就是5px：

![](http://img.smyhvae.com/20170808_2220.png)

为了严格保证字在行里面居中，我们的工程师有一个约定： **行高、字号，一般都是偶数**。这样可以保证，它们的差一定偶数，就能够被2整除。

#### 如何让单行文本垂直居中

小技巧：如果一段文本只有一行，如果此时设置**行高 = 盒子高**，就可以保证单行文本垂直居中。这个很好理解。

上面这个小技巧，只适用于单行文本垂直居中，不适用于多行。如果想让多行文本垂直居中，还需要计算盒子的padding。计算方式如下：

![](http://img.smyhvae.com/20170808_2240.png)

#### `vertical-align: middle;` 属性

`vertical-align`属性可用于指定**行内元素**（inline）、**行内块元素**（inline-block）、**表格的单元格**（table-cell）的垂直对齐方式。主要是用于图片、表格、文本的对齐。

代码举例：

```css
vertical-align: middle; /*指定行级元素的垂直对齐方式。*/
```

#### 字体

```
font-family: 字体
```

字体这里需要强调一点

> 网页中不是所有字体都能用，因为这个字体要看用户的电脑里面装没装

在设置文字属性的时候也可以简写成

```
font: 加粗 字号/行高/ 字体
```

比如

```
font: 400 14px/24px "宋体";
```

#### 字体加粗属性

在设置字体是否加粗时，属性值既可以填写`normal`、`bold`这样的加粗字体，也可以直接填写 100至900 这样的数字。`normal`的值相当于400，`bold`的值相当于700。

```
.div {
	font-weight: normal; /*正常*/
	font-weight: bold;  /*加粗*/
	font-weight: 100;
	font-weight: 200;
	font-weight: 900;
}
```

### 文本属性

常用的文本属性有以下几个

![image-20220213174349695](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213174349695.png)

### 列表属性

列表属性中常用的有以下几个

![image-20220213174526732](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213174526732.png)

### 背景属性

background常用的属性如下：

- `background-color:#ff99ff;`  设置元素的背景颜色。
- `background-image:url(images/2.gif);` 将图像设置为背景。
- `background-repeat: no-repeat;`  设置背景图片是否重复及如何重复，默认平铺满。（重要）
  - `no-repeat`不要平铺；
  - `repeat-x`横向平铺；
  - `repeat-y`纵向平铺。
- `background-position:center top;` 设置背景图片在当前容器中的位置。
- `background-attachment:scroll;` 设置背景图片是否跟着滚动条一起移动。
  属性值可以是：`scroll`（与fixed属性相反，默认属性）、`fixed`（背景就会被固定住，不会被滚动条滚走）。
- 另外还有一个综合属性叫做`background`，它的作用是：将上面的多个属性写在一个声明中。

### 定位属性

CSS的定位属性有三种，分别是绝对定位、相对定位、固定定位。

```css
position: absolute;  <!-- 绝对定位 -->
position: relative;  <!-- 相对定位 -->
position: fixed;     <!-- 固定定位 -->
```

#### 相对定位

**相对定位**：让元素相对于自己原来的位置，进行位置调整（可用于盒子的位置微调）。

![image-20220213195703931](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213195703931.png)

> 相对定位不脱标：对定位的真实位置还在老家，只不过影子出去了，可以到处飘。

#### 绝对定位

> 以下参考**千古壹号**大佬写的文章。

**绝对定位**：定义横纵坐标。原点在父容器的左上角或左下角。横坐标用left表示，纵坐标用top或者bottom表示。

```css
position: absolute;  /*绝对定位*/
left: 10px;  /*横坐标*/
top/bottom: 20px;  /*纵坐标*/
```

> 绝对定位脱标:**绝对定位的盒子脱离了标准文档流。**所以，所有的标准文档流的性质，绝对定位之后都不遵守了。绝对定位之后，标签就不区分所谓的行内元素、块级元素了，不需要`display:block`就可以设置宽、高了。

##### 绝对定位的参考点（重要）

（1）如果用**top描述**，那么参考点就是**页面的左上角**，而不是浏览器的左上角：

![](http://img.smyhvae.com/20180115_2120.png)

（2）如果用**bottom描述**，那么参考点就是**浏览器首屏窗口尺寸**（好好理解“首屏”二字），对应的页面的左下角：

![](http://img.smyhvae.com/20180115_2121.png)

##### 以盒子为参考点

一个绝对定位的元素，如果父辈元素中也出现了已定位（无论是绝对定位、相对定位，还是固定定位）的元素，那么将以父辈这个元素，为参考点。

![](http://img.smyhvae.com/20180115_2210.png)

以下几点需要注意。

（1） 要听最近的已经定位的祖先元素的，不一定是父亲，可能是爷爷：

```
		<div class="box1">        相对定位
			<div class="box2">    没有定位
				<p></p>           绝对定位，将以box1为参考，因为box2没有定位，box1就是最近的父辈元素
			</div>
		</div>

```

（2）不一定是相对定位，任何定位，都可以作为儿子的参考点：

（3）绝对定位的儿子，无视参考的那个盒子的padding：

##### 让绝对定位中的盒子在父亲里居中

我们知道，如果想让一个**标准流中的盒子在父亲里居中**（水平方向看），可以将其设置`margin: 0 auto`属性。

可如果盒子是绝对定位的，此时已经脱标了，如果还想让其居中（位于父亲的正中间），可以这样做：

```
	div {
		width: 600px;
		height: 60px;
		position: absolute;  绝对定位的盒子
		left: 50%;           首先，让左边线居中
		top: 0;
		margin-left: -300px;  然后，向左移动宽度（600px）的一半
	}
```

如上方代码所示，我们先让这个宽度为600px的盒子，左边线居中，然后向左移动宽度（600px）的一半，就达到效果了。

![](http://img.smyhvae.com/20180116_1356.png)

我们可以总结成一个公式：

> left:50%; margin-left:负的宽度的一半

#### 固定定位

**固定定位**：就是相对浏览器窗口进行定位。无论页面如何滚动，这个盒子显示的位置不变。

> 备注：IE6不兼容。

案例：网页右下角的“返回到顶部”，顶部导航栏。



#### z-index属性

**z-index**属性：表示谁压着谁。数值大的压盖住数值小的。

有如下特性：

 （1）属性值大的位于上层，属性值小的位于下层。

 （2）z-index值没有单位，就是一个正整数。默认的z-index值是0。

 （3）如果大家都没有z-index值，或者z-index值一样，那么在HTML代码里写在后面，谁就在上面能压住别人。定位了的元素，永远能够压住没有定位的元素。

 （4）只有定位了的元素，才能有z-index值。也就是说，不管相对定位、绝对定位、固定定位，都可以使用z-index值。**而浮动的元素不能用**。

 （5）从父现象：父亲怂了，儿子再牛逼也没用。意思是，如果父亲1比父亲2大，那么，即使儿子1比儿子2小，儿子1也能在最上层。

![](https://gitee.com/north_gate/drawing-bed/raw/master/images/2015-10-03-css-32.png)

### CSS单位

这一节是我单独拎出来的，因为这个知识点经常用到。

html中的单位只有一种，那就是像素px，所以单位是可以省略的，但是在CSS中不一样，在CSS中的单位都是**必须要写的**。

#### 绝对单位

1 `in`=2.54`cm`=25.4`mm`=72`pt`=6`pc`。

各种单位的含义：

- `in`：英寸Inches (1 英寸 = 2.54 厘米)
- `cm`：厘米Centimeters
- `mm`：毫米Millimeters
- `pt`：点Points，或者叫英镑 (1点 = 1/72英寸)
- `pc`：皮卡Picas (1 皮卡 = 12 点)

#### 相对单位

`px`：像素
`em`：印刷单位相当于12个点
`%`：百分比，相对周围的文字的大小

为什么说像素px是一个相对单位呢，这也很好理解。比如说，电脑屏幕的的尺寸是不变的，但是我们可以让其显示不同的分辨率，在不同的分辨率下，单个像素的长度肯定是不一样的啦。

## 盒子

### 盒子模型

盒子模型，英文即box model。无论是div、span、还是a都是盒子。但是，图片、表单元素一律看作是文本，它们并不是盒子。这个很好理解，比如说，一张图片里并不能放东西，它自己就是自己的内容。

我们直接来看代码

![image-20220213191045954](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213191045954.png)

![image-20220213191944966](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213191944966.png)

一个盒子中主要的属性就5个：width、height、padding、border、margin。如下：

- width和height：**内容**的宽度、高度（不是盒子的宽度、高度）。
- padding：内边距。
- border：边框。
- margin：外边距。

下图取自菜鸟教程，

![image-20220213191247506](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213191247506.png)

现在让我们来深入学习盒子的几个属性。

#### margin

margin是外边距，也可以单独的设置上左右下四个方向的属性。其中的简写方式如下：

```css
/*单独设置四个方向上边距为5px,右边距为20px,下边距为15px,左边距为10px*/
margin-top: 5px;
margin-right: 20px;
margin-bottom: 15px;
margin-left: 10px;
/*统一设置四个方向的外边距为10px*/
margin: 10px;
/*上边距为25px,左右边距为50px,下边距为75px*/
margin:25px 50px 75px;
/*上下边距为25px,左右边距为50px*/
margin:25px 50px;
```



![image-20220213192848443](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213192848443.png)

> pass：`<body>`标签也有margin，`<body>`标签有必要强调一下。很多人以为`<body>`标签占据的是整个页面的全部区域，其实是错误的，正确的理解是这样的：整个网页最大的盒子是`<document>`，即浏览器。而`<body>`是`<document>`的儿子。浏览器给`<body>`默认的margin大小是8个像素，此时`<body>`占据了整个页面的一大部分区域，而不是全部区域。

#### padding

内边距和外边距margin一样也可以单独设置四个方向。

```css
/*单独设置四个方向上边距为5px,右边距为20px,下边距为15px,左边距为10px*/
padding-top: 5px;
padding-right: 20px;
padding-bottom: 15px;
padding-left: 10px;
/*统一设置四个方向的内边距为10px*/
padding: 10px;
/*上边距为25px,左右边距为50px,下边距为75px*/
padding: 25px 50px 75px;
/*上下边距为25px,左右边距为50px*/
padding: 25px 50px;
```

![image-20220213194257232](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213194257232.png)

#### width和height

比如说一个盒子的样式如下：

```css
.box1{
	width: 100px;
	height: 100px;
	padding: 100px;
	border: 1px solid red;
}
```

真实占有宽度 = 左border + 左padding + width + 右padding + 右border

真实占有高度 = 上border + 上padding + height + 下padding + 下border

> **如果想保持一个盒子的真实占有宽度不变，那么加width的时候就要减padding。加padding的时候就要减width**。因为盒子变胖了是灾难性的，这会把别的盒子挤下去。

#### border

border就是边框。边框有三个要素：像素（粗细）、线型、颜色。

> 颜色如果不写，默认是黑色。另外两个属性如果不写，则无法显示边框。

border-style 属性指定要显示的边框类型。

允许以下值：

- dotted - 定义点线边框
- dashed - 定义虚线边框
- solid - 定义实线边框
- double - 定义双边框
- groove - 定义 3D 坡口边框。效果取决于 border-color 值
- ridge - 定义 3D 脊线边框。效果取决于 border-color 值
- inset - 定义 3D inset 边框。效果取决于 border-color 值
- outset - 定义 3D outset 边框。效果取决于 border-color 值
- none - 定义无边框
- hidden - 定义隐藏边框

border-style 属性可以设置一到四个值（用于上边框、右边框、下边框和左边框）。

![image-20220213194851818](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213194851818.png)

具体应用如下：

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            p.dotted {
                border-style: dotted;
            }
            p.dashed {
                border-style: dashed;
            }
            p.solid {
                border-style: solid;
            }
            p.double {
                border-style: double;
            }
            p.groove {
                border-style: groove;
            }
            p.ridge {
                border-style: ridge;
            }
            p.inset {
                border-style: inset;
            }
            p.outset {
                border-style: outset;
            }
            p.none {
                border-style: none;
            }
            p.hidden {
                border-style: hidden;
            }
            p.mix {
                border-style: dotted dashed solid double;
            }
        </style>
    </head>
    <body>
        <h1>border-style 属性</h1>
        <p>此属性规定要显示的边框类型：</p>
        <p class="dotted">点状边框。</p>
        <p class="dashed">虚线边框。</p>
        <p class="solid">实线边框。</p>
        <p class="double">双线边框。</p>
        <p class="groove">凹槽边框。</p>
        <p class="ridge">垄状边框。</p>
        <p class="inset">3D inset 边框。</p>
        <p class="outset">3D outset 边框。</p>
        <p class="none">无边框。</p>
        <p class="hidden">隐藏边框。</p>
        <p class="mix">混合边框。</p>
    </body>
</html>

```

### 标准文档流

以下参考**千古壹号**大佬

宏观地讲，我们的web页面和photoshop等设计软件有本质的区别：web页面的制作，是个“流”，必须从上而下，像“织毛衣”。而设计软件，想往哪里画个东西，都能画。

#### 标准文档流的特性

**（1）空白折叠现象：**

无论多少个空格、换行、tab，都会折叠为一个空格。

比如，如果我们想让img标签之间没有空隙，必须紧密连接：

```
<img src="images/0.jpg" /><img src="images/1.jpg" /><img src="images/2.jpg" />
```


**（2）高矮不齐，底边对齐：**

举例如下：

![](http://img.smyhvae.com/20170729_1508_2.png)

**（3）自动换行，一行写不满，换行写。**

#### 行内元素和块级元素

标准文档流等级森严。标签分为两种等级：

- 行内元素
- 块级元素

![](https://gitee.com/north_gate/drawing-bed/raw/master/images/20170729_1529_2.png)

**行内元素和块级元素的区别：**（非常重要）

行内元素：

- 与其他行内元素并排；
- 不能设置宽、高。默认的宽度，就是文字的宽度。

块级元素：

- 霸占一行，不能与其他任何元素并列；
- 能接受宽、高。如果不设置宽度，那么宽度将默认变为父亲的100%。

**行内元素和块级元素的分类：**

在以前的HTML知识中，我们已经将标签分过类，当时分为了：文本级、容器级。

从HTML的角度来讲，标签分为：

- 文本级标签：p、span、a、b、i、u、em。
- 容器级标签：div、h系列、li、dt、dd。

> PS：为甚么说p是文本级标签呢？因为p里面只能放文字&图片&表单元素，p里面不能放h和ul，p里面也不能放p。

现在，从CSS的角度讲，CSS的分类和上面的很像，就p不一样：

- 行内元素：除了p之外，所有的文本级标签，都是行内元素。p是个文本级，但是是个块级元素。

- 块级元素：所有的容器级标签都是块级元素，还有p标签。

我们把上面的分类画一个图，即可一目了然：

![](http://img.smyhvae.com/20170729_1545.png)



### 行内元素和块级元素的相互转换

我们可以通过`display`属性将块级元素和行内元素进行相互转换。display即“显示模式”。

#### 块级元素可以转换为行内元素：

一旦，给一个块级元素（比如div）设置：

```
display: inline;
```

那么，这个标签将立即变为行内元素，此时它和一个span无异。inline就是“行内”。也就是说：

- 此时这个div不能设置宽度、高度；
- 此时这个div可以和别人并排了。

举例如下：

![](http://img.smyhvae.com/20170729_1629.png)


#### 行内元素转换为块级元素：

同样的道理，一旦给一个行内元素（比如span）设置：

```
display: block;
```

那么，这个标签将立即变为块级元素，此时它和一个div无异。block”是“块”的意思。也就是说：

- 此时这个span能够设置宽度、高度
- 此时这个span必须霸占一行了，别人无法和他并排
- 如果不设置宽度，将撑满父亲

举例如下：

![](http://img.smyhvae.com/20170729_1638.png)

标准流里面的限制非常多，导致很多页面效果无法实现。如果我们现在就要并排、并且就要设置宽高，那该怎么办呢？办法是：移民！**脱离标准流**！


css中一共有三种手段，使一个元素脱离标准文档流：

- （1）浮动
- （2）绝对定位
- （3）固定定位

### 浮动

#### 浮动的性质

> 浮动是css里面布局用的最多的属性。

现在有两个div，分别设置宽高。我们知道，它们的效果如下：

![](http://img.smyhvae.com/20170729_1722.png)

此时，如果给这两个div增加一个浮动属性，比如`float: left;`，效果如下：

![](http://img.smyhvae.com/20170729_1723.png)

这就达到了浮动的效果。此时，两个元素并排了，并且两个元素都能够设置宽度、高度了（这在上一段的标准流中，不能实现）。

浮动想学好，一定要知道三个性质。接下来讲一讲。

##### 性质1：浮动的元素脱标

脱标即脱离标准流。我们来看几个例子。

证明1：

![](http://img.smyhvae.com/20170729_2028.png)

上图中，在默认情况下，两个div标签是上下进行排列的。现在由于float属性让上图中的第一个`<div>`标签出现了浮动，于是这个标签在另外一个层面上进行排列。而第二个`<div>`还在自己的层面上遵从标准流进行排列。

证明2：

![](http://img.smyhvae.com/20180111_2320.png)

上图中，span标签在标准流中，是不能设置宽高的（因为是行内元素）。但是，一旦设置为浮动之后，即使不转成块级元素，也能够设置宽高了。

所以能够证明一件事：**一旦一个元素浮动了，那么，将能够并排了，并且能够设置宽高了。无论它原来是个div还是个span。**所有标签，浮动之后，已经不区分行内、块级了。


##### 性质2：浮动的元素互相贴靠

我们来看一个例子就明白了。

我们给三个div均设置了`float: left;`属性之后，然后设置宽高。当改变浏览器窗口大小时，可以看到div的贴靠效果：

![](http://img.smyhvae.com/20170730_1910.gif)


上图显示，3号如果有足够空间，那么就会靠着2号。如果没有足够的空间，那么会靠着1号大哥。
如果没有足够的空间靠着1号大哥，3号自己去贴左墙。

不过3号自己去贴墙的时候，注意：

![](http://img.smyhvae.com/20170730_1928.gif)


上图显示，3号贴左墙的时候，并不会往1号里面挤。

同样，float还有一个属性值是`right`，这个和属性值`left`是对称的。


##### 性质3：浮动的元素有“字围”效果

来看一张图就明白了。我们让div浮动，p不浮动。

![](http://img.smyhvae.com/20170730_2005.png)

上图中，我们发现：**div挡住了p，但不会挡住p中的文字**，形成“字围”效果。

总结：**标准流中的文字不会被浮动的盒子遮挡住**。（文字就像水一样）

关于浮动我们要强调一点，浮动这个东西，为避免混乱，我们在初期一定要遵循一个原则：**永远不是一个东西单独浮动，浮动都是一起浮动，要浮动，大家都浮动。**


##### 性质4：收缩

收缩：一个浮动的元素，如果没有设置width，那么将自动收缩为内容的宽度（这点非常像行内元素）。

举例如下：

![](http://img.smyhvae.com/20170801_1720.png)


上图中，div本身是块级元素，如果不设置width，它会单独霸占整行；但是，设置div浮动后，它会收缩


##### 浮动的补充（做网站时注意）

![](http://img.smyhvae.com/20170731_2248.png)


上图所示，将para1和para2设置为浮动，它们是div的儿子。此时para1+para2的宽度小于div的宽度。效果如上图所示。可如果设置para1+para2的宽度大于div的宽度，我们会发现，para2掉下来了：

![](http://img.smyhvae.com/20170731_2252_2.png)

#### 浮动的清除

> 这里所说的清除浮动，指的是清除浮动与浮动之间的影响。

通过上面这个例子，我们发现，此例中的网页就是通过浮动实现并排的。

比如说一个网页有header、content、footer这三部分。就拿content部分来举例，如果设置content的儿子为浮动，但是，这个儿子又是一个全新的标准流，于是儿子的儿子仍然在标准流里。

从学习浮动的第一天起，我们就要明白，浮动有开始，就要有清除。我们先来做个实验。

下面这个例子，有两个块级元素div，div没有任何属性，每个div里有li，效果如下：

![](http://img.smyhvae.com/20170801_2122.png)


上面这个例子很简单。可如果我们给里面的`<li>`标签加浮动。效果却成了下面这个样子：

代码如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
		*{

		}
		li{
			float: left;
			width: 100px;
			height: 20px;
			background-color: pink;


		}
	</style>
</head>
<body>
	<div class="box1">
		<ul>
			<li>生命壹号1</li>
			<li>生命壹号2</li>
			<li>生命壹号3</li>
			<li>生命壹号4</li>
		</ul>
	</div>
	<div class="box2">
		<ul>
			<li>许嵩1</li>
			<li>许嵩2</li>
			<li>许嵩3</li>
			<li>许嵩4</li>
		</ul>
	</div>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20170801_2137.png)


上图中，我们发现：第二组中的第1个li，去贴靠第一组中的最后一个li了（我们本以为这些li会分成两排）。

这便引出我们要讲的：清除浮动的第一种方式。
那该怎么解决呢？


##### 方法1：给浮动元素的祖先元素加高度

造成前言中这个现象的根本原因是：li的**父亲div没有设置高度**，导致这两个div的高度均为0px（我们可以通过网页的审查元素进行查看）。div的高度为零，导致不能给自己浮动的孩子，撑起一个容器。

撑不起一个容器，导致自己的孩子没办法在自己的内部进行正确的浮动。

好，现在就算给这个div设置高度，可如果div自己的高度小于孩子的高度，也会出现不正常的现象：

![](http://img.smyhvae.com/20170801_2152.png)


给div设置一个正确的合适的高度（至少保证高度大于儿子的高度），就可以看到正确的现象：

![](http://img.smyhvae.com/20170801_2153.png)

**总结：**

**如果一个元素要浮动，那么它的祖先元素一定要有高度。**

**有高度的盒子，才能关住浮动**。（记住这句过来人的经验之语）

只要浮动在一个有高度的盒子中，那么这个浮动就不会影响后面的浮动元素。所以就是清除浮动带来的影响了。

![](http://img.smyhvae.com/20170801_2200.png)


![](http://img.smyhvae.com/20170801_2201.png)

##### 方法2：clear:both;

网页制作中，高度height其实很少出现。为什么？因为能被内容撑高！也就是说，刚刚我们讲解的方法1，工作中用得很少。

那么，能不能不写height，也把浮动清除了呢？也让浮动之间，互不影响呢？

这个时候，我们可以使用`clear:both;`这个属性。如下：

![](http://img.smyhvae.com/20170801_2233.png)


```
clear:both;
```

clear就是清除，both指的是左浮动、右浮动都要清除。`clear:both`的意思就是：**不允许左侧和右侧有浮动对象。**

这种方法有一个非常大的、致命的问题，**它所在的标签，margin属性失效了**。读者可以试试看。


margin失效的本质原因是：上图中的box1和box2，高度为零。



##### 方法3：隔墙法

上面这个例子中，为了防止第二个div贴靠到第二个div，我们可以在这两个div中间用一个新的div隔开，然后给这个新的div设置`clear: both;`属性；同时，既然这个新的div无法设置margin属性，我们可以给它设置height，以达到margin的效果（曲线救国）。这便是隔墙法。


我们看看例子效果就知道了：

![](http://img.smyhvae.com/20170802_1109.png)

上图这个例子就是隔墙法。


**内墙法：**


近些年，有演化出了“内墙法”：

![](http://img.smyhvae.com/20170802_1123.png)

上面这个图非常重要，当作内墙法的公式，先记下来。


为了讲内墙法，我们先记住一句重要的话：**一个父亲是不能被浮动的儿子撑出高度的**。举例如下：

（1）我们在一个div里放一个有宽高的p，效果如下：（很简单）

![](http://img.smyhvae.com/20170802_1716.png)

（2）可如果在此基础之上，给p设置浮动，却发现父亲div没有高度了：

![](http://img.smyhvae.com/20170802_1730.png)

（3）此时，我么可以在div的里面放一个div（作为内墙），就可以让父亲div恢复高度：

![](http://img.smyhvae.com/20170802_1812.png)

于是，我们采用内墙法解决前言中的问题：

![](http://img.smyhvae.com/20170802_1834.png)

与外墙法相比，内墙法的优势（本质区别）在于：内墙法可以给它所在的家撑出宽度（让box1有高）。即：box1的高度可以自适应内容。

而外墙法，虽然一道墙可以把两个div隔开，但是这两个div没有高，也就是说，无法wrap_content。


##### 方法4：overflow:hidden;

我们可以使用如下属性：

```
overflow:hidden;
```


overflow即“溢出”， hidden即“隐藏”。这个属性的意思是“溢出隐藏”。顾名思义：所有溢出边框的内容，都要隐藏掉。如下：

![](http://img.smyhvae.com/20170804_1449.png)


上图显示，`overflow:hidden;`的本意是清除溢出到盒子外面的文字。但是，前端开发工程师发现了，它能做偏方。如下：

一个父亲不能被自己浮动的儿子，撑出高度。但是，只要给父亲加上`overflow:hidden`; 那么，父亲就能被儿子撑出高了。这是一个偏方。

举个例子：

![](http://img.smyhvae.com/20170804_1920.png)


那么对于前言中的例子，我们同样可以使用这一属性：

![](http://img.smyhvae.com/20170804_1934.png)

## 案例

恭喜看到这里的小伙伴，你超越了很多人了，虽然css的重点就在于选择器和各种标签属性，但是从中延伸出来的一系列知识点，可以直接把人劝退。如果不是有**千古壹号**大佬的开源项目，作者身为一个后端程序员绝对不可能把css讲透彻。

现在和作者做一下作者初学时候写的案例，保证每个案例都十分的精髓。

代码都在仓库里面，有需要的自取，记得给个star（不做白嫖党！）

Github地址：[https://github.com/SuZui-cn/my-web](https://github.com/SuZui-cn/my-web)

Gitee地址：[https://gitee.com/north_gate/my-web](https://gitee.com/north_gate/my-web)

> 三更灯火五更鸡，正是男儿读书时。
> 黑发不知勤学早，白首方悔读书迟。
>
> ——颜真卿《劝学》

### 案例01抖音风格字体

先看效果

> pass：作者除了“su_zui”之外还有一个笔名“北落燕门”

![image-20220213211315845](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213211315845.png)

这里主要是设置基础的文本阴影效果，非常简单一行代码搞定。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>抖音字体</title>
    <style>
      .bgc {
        background-color: #555555;
        width: 1000px;
        height: 400px;
        /* 外边距上下180px，左右自动 */
        /* margin:0 auto 可以设置水平居中 */
        margin: 180px auto;
      }
      .font {
        /* 字体大小 */
        font-size: 250px;
        /* 字体加粗 */
        font-weight: 800;
        color: red;
        /* 核心代码，依次设置的值为：颜色、水平阴影位置、垂直阴影位置 （位置为负数表示相反方向）*/
        text-shadow: black -9px -9px, blue 9px 9px;
      }
    </style>
  </head>
  <body>
    <div class="bgc">
      <span class="font">北落燕门</span>
    </div>
  </body>
</html>
```



### 案例02精灵图

这个案例需要使用ps来完成，是一个体会精灵图的案例。

> 当用户访问一个网站时，浏览器会向服务器发送一系列请求，比如说网页上的每张图像都需要经过一次请求才能最终展示给用户。然而，一个网页中往往包含大量的图像资源（例如在页面中展示的图片、网页的背景图像以及一些装饰性的图像等），这就会导致浏览器频繁的请求服务器，大大降低网页的加载速度。为了有效的减少请求服务器的次数，提高页面加载的速度，就出现了 CSS Sprites 技术，也被称为精灵技术。
>
> 简单来讲，精灵技术就是一种处理网页背景图像的方式，它需要将一个页面中涉及到的所有或一部分较小的背景图像合并到一张较大的图片中，然后再将这个图片应用到网页种。通常情况下，我们只是将背景图像中那些较小的、零碎的图像集中到一个大的图像中，这个较大的图像被称为精灵图（也被称为雪碧图）
>
> ——http://m.biancheng.net/css3/sprite.html

 精灵图使用教程：[https://blog.csdn.net/sinat_34104446/article/details/83032762](https://blog.csdn.net/sinat_34104446/article/details/83032762)

这里要提一句，要从事前端的同学需要有一点ps和墨刀的基础，这样可以准确的把美工制作的原型图的各个部分的具体像素量出来。

我在仓库里放了`学成网首页.psd`有需要的同学可以自己设置做一下，配套的视频是黑马pink老师的前端教程，作者当时看到就是这套视频。

黑马程序员pink老师前端入门教程：[https://www.bilibili.com/video/BV14J4114768](https://www.bilibili.com/video/BV14J4114768)

慕课网墨刀教程：[https://www.imooc.com/learn/1310](https://www.imooc.com/learn/1310)

![image-20220213213720500](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213213720500.png)



具体效果：

![image-20220213214246832](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213214246832.png)



代码：

这里为了方便大家练习，我把精灵图的连接换成了图床链接

> 图床其实是互联网中存储图片的空间，举个栗子：
>
> 假设你在微博分享一张图片，你的粉丝可以通过互联网看到你分享的图片，那么他是去访问你的手机的相册吗？其实不是的，你分享图片，也就是把图片上传到微博的服务器，微博将为你生成一个独一无二的访问链接，这个链接指向的空间其实就是图床。

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      body {
        margin: 0 auto;
        width: 500px;
      }
      div {
        float: left;
        width: 108px;
        height: 120px;
        margin-right: 50px;
        /* 这里的是图床链接 */
        background-image: url('https://gitee.com/north_gate/drawing-bed/raw/master/images/jinglingtu.png');
      }
      /* 下面设置的background-position是对应字母在图片里的位置，需要使用PS来获取 */
      #l {
        background-position: 0px 400px;
      }
      #x {
        background-position: 350px 125px;
      }
      #h {
        background-position: 390px 542px;
      }
      span {
        display: block;
        width: 100%;
        font-family: serif;
        font-size: 20px;
        color: red;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <span>欢迎使用CSS</span>
    <div id="l"></div>
    <div id="x"></div>
    <div id="h"></div>
  </body>
</html>

```



### 案例03绝对定位

来自**千古壹号**大佬的案例

绝对定位非常适合用来做“压盖”效果。我们来举个lagou.com上的例子。

现在有如下两张图片素材：

![](http://img.smyhvae.com/20180116_1115.png)

![](http://img.smyhvae.com/20180116_1116.jpg)

要求作出如下效果：

![](http://img.smyhvae.com/20180116_1117.png)

代码实现如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
		.box{
			margin: 100px;
			width: 308px;
			height: 307px;
			border: 1px solid #FF7E00;
			position: relative;  /*子绝父相*/

		}
		.box .image img{
			width: 308px;
			height: 196px;
		}
		.box .dtc{
			display: block;  /*转为块级元素，才能设置span的宽高*/
			width: 52px;
			height: 28px;
			background-image: url(http://img.smyhvae.com/20180116_1115.png);
			background-position: -108px 0px; /*这里用到了精灵图*/
			position: absolute;  /*采用绝对定位的方式，将精灵图盖在最上层*/
			top: -9px;
			left: 13px;
		}
		.box h4{
			background-color: black;
			color: white;
			width:308px;
			height: 40px;
			line-height: 40px;
			position: absolute;
			top: 156px;
		}
	</style>
</head>
<body>
	<div class="box">
		<span class="dtc"></span>
		<div class="image">
			<img src="http://img.smyhvae.com/20180116_1116.jpg" alt="">
		</div>
		<h4>广东深圳宝安区建安一路海雅缤纷城4楼</h4>
	</div>
</body>
</html>
```

代码解释如下：

- 为了显示“多套餐”那个小图，我们需要用到精灵图。

- “多套餐”下方黑色背景的文字都是通过“子绝父相”的方式的盖在大海报image的上方的。

代码的效果如下：

![](https://gitee.com/north_gate/drawing-bed/raw/master/images/20180116_1335.png)

### 案例04固定定位

顶部导航栏

先上效果，当鼠标放置时小格子的背景颜色会变：

![image-20220213214914425](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213214914425.png)

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <title>Document</title>
    <style type="text/css">
      * {
        margin: 0;
        padding: 0;
      }
      body {
        /*为什么要写这个？*/
        /*不希望我们的页面被nav挡住*/
        padding-top: 60px;
        /*IE6不兼容固定定位，所以这个padding没有什么用，就去掉就行了*/
        _padding-top: 0;
        height: 1200px;
      }
      .nav {
        /* 设置固定位置 */
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;
        background-color: #333;
        /* 设置nav置于上层 */
        z-index: 99999999;
      }
      .inner_c {
        width: 1000px;
        height: 60px;
        margin: 0 auto;
      }
      /* 消除ul标签自带的原点 */
      .inner_c ul {
        list-style: none;
      }
      .inner_c ul li {
        /* 向左浮动 */
        float: left;
        width: 100px;
        height: 60px;
        text-align: center;
        line-height: 60px;
      }
      .inner_c ul li a {
        display: block;
        width: 100px;
        height: 60px;
        color: white;
        text-decoration: none;
      }
      /* 用伪类设置鼠标放置时的样式 */
      .inner_c ul li a:hover {
        background-color: gold;
      }
      p {
        font-size: 30px;
      }
      .btn {
        display: block;
        width: 120px;
        height: 30px;
        background-color: orange;
        position: relative;
        top: 2px;
        left: 1px;
      }
    </style>
  </head>
  <body>
    <div class="nav">
      <div class="inner_c">
        <ul>
          <li><a href="#">网页栏目</a></li>
          <li><a href="#">网页栏目</a></li>
          <li><a href="#">网页栏目</a></li>
          <li><a href="#">网页栏目</a></li>
          <li><a href="#">网页栏目</a></li>
          <li><a href="#">网页栏目</a></li>
          <li><a href="#">网页栏目</a></li>
          <li><a href="#">网页栏目</a></li>
          <li><a href="#">网页栏目</a></li>
          <li><a href="#">网页栏目</a></li>
        </ul>
      </div>
    </div>
  </body>
</html>

```

### 案例05伪类

鼠标悬停显示和隐藏特效

鼠标放置前

![image-20220213215814141](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213215814141.png)

鼠标放置之后

![image-20220213215828080](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213215828080.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>显示与隐藏特效</title>
    <style>
      body {
        display: inline-block;
        margin: 0px;
      }
      #code {
        width: 100%;
        height: 100px;
        position: fixed;
        bottom: 0px;
        background-color: black;
      }
      #wechat {
        width: 44px;
        height: 44px;
        background-image: url('https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213215548443.png');
        background-size: 100%;
        margin: 28px auto;
        position: relative;
      }
      #erweima {
        width: 180px;
        height: 180px;
        background-image: url('https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213215500170.png');
        background-size: 100%;
        position: absolute;
        left: -66px;
        bottom: 70px;
        /* 这里设置为none，让其不可见 */
        display: none;
      }
      /* 这里用伪类设置display属性为block块级元素使其可见 */
      #wechat:hover > #erweima {
        display: block;
      }
    </style>
  </head>
  <body>
    <div id="code">
      <div id="wechat">
        <div id="erweima"></div>
      </div>
    </div>
  </body>
</html>
```

伪类结合表格案例

鼠标放置时对应行颜色变为灰色

![image-20220213215950693](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213215950693.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="Generator" content="EditPlus®" />
    <meta name="Author" content="" />
    <meta name="Keywords" content="" />
    <meta name="Description" content="" />
    <title>Document</title>
    <style type="text/css">
      /*整个表格的样式*/
      table {
        width: 300px;
        height: 200px;
        border: 1px solid blue;
        /*border-collapse属性：对表格的线进行折叠*/
        border-collapse: collapse;
      }

      /*鼠标悬停时，让当前行显示#868686这种灰色*/
      table tr:hover {
        background: #868686;
      }

      /*每个单元格的样式*/
      table td {
        border: 1px solid red;
      }
    </style>
  </head>
  <body>
    <table>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </body>
</html>
```



### 案例06跳动的心

这个案例主要需要掌握如何用正方形的盒子做出爱心的图案（设置边框即可）

作者当时做这个的时候使用了关键帧，做成了逐帧动画。

这里有对应的B站视频：[https://www.bilibili.com/video/BV1UE411h7Ez?from=search&seid=14832393251779908197&spm_id_from=333.337.0.0](https://www.bilibili.com/video/BV1UE411h7Ez?from=search&seid=14832393251779908197&spm_id_from=333.337.0.0)

![image-20220213220207917](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213220207917.png)

```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>跳动的心</title>
    <style>
      .all {
        width: 100%;
        height: 100%;
        margin: 0 auto;
      }

      .bgc {
        position: absolute;
        background-color: pink;
        height: 100%;
        width: 100%;
      }

      .title {
        font-size: 90px;
        position: absolute;
        left: 580px;
        top: 520px;
        margin: 0 auto;
      }

      .chest {
        width: 500px;
        height: 500px;
        margin: 0 auto;
        position: relative;
      }

      .heart {
        position: absolute;
        z-index: 2;
        background: linear-gradient(-90deg, #f50a45 0%, #d5093c 40%);
        /* 这里的beat是定义了一个逐帧动画，在后面 */
        animation: beat 0.7s ease 0s infinite normal;
      }

      .heart.center {
        background: linear-gradient(-45deg, #b80734 0%, #d5093c 40%);
      }

      .heart.top {
        z-index: 3;
      }

      .side {
        top: 100px;
        width: 220px;
        height: 220px;
        border-radius: 220px;
      }

      .center {
        width: 210px;
        height: 210px;
        bottom: 100px;
        left: 145px;
        /*transform: rotate(45deg);*/
      }

      .left {
        left: 62px;
      }

      .right {
        right: 62px;
      }
      /* 这里是定义的具体关键帧 */
      @keyframes beat {
        0% {
          transform: scale(1) rotate(225deg);
          box-shadow: 0 0 40px #d5093c;
        }

        50% {
          transform: scale(1.1) rotate(225deg);
          box-shadow: 0 0 70px #d5093c;
        }

        100% {
          transform: scale(1) rotate(225deg);
          box-shadow: 0 0 40px #d5093c;
        }
      }
    </style>
  </head>
  <body class="all">
    <div class="bgc"></div>
    <div class="title"><b>跳动的心</b></div>
    <div class="chest">
      <div class="heart left side top"></div>
      <div class="heart center"></div>
      <div class="heart right side"></div>
    </div>
  </body>
</html>
```

### 案例07小米布局

从这个案例开始都是仿照的真实的网站制作的静态页面，因为代码量较多，我就不放详细代码，只讲述制作的思路。

效果图：

![image-20220213220611126](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213220611126.png)

制作思路：

标准的DIV+CSS布局，右侧使用了固定定位。中间部分使用浮动制作。

需要知道一个概念：版心

> “版心”（可视区）是指网页中主体内容所在的区域。一般在浏览器窗口水平居中显示，常见的宽度值为960px、980px、1000px、1200px等。

使用版心可以保证我们的内容都位于水平居中。

```css
/* 清除浏览器自带的8px边距 */
* {
    margin: 0;
    padding: 0;
}
/* 版心 */
.w {
    width: 1226px;
    margin: 0 auto;
}
```

![image-20220213220808709](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213220808709.png)

### 案例08拼多多

完全仿照当时的拼多多官网。标准的DIV+CSS布局。初学者大概两小时可以完成。

![image-20220213221303053](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213221303053.png)

### 案例09京东商城

作者大一寒假学习的时候编写的，但是因为当时作者也是初学者所以很多细节做的不好，但是还是很有参考价值。

![image-20220213221754222](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213221754222.png)

![image-20220213221809438](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213221809438.png)

![image-20220213221824783](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220213221824783.png)



完成了最后三个真实网站的静态页面编写，相信你一定熟练度掌握了`html`标签以及`css`基本的属性，希望大家在学习的过程中一定要动手写代码，只有亲手去写才能发现自己的问题，更好的去理解代码。

同时在结尾在此致敬**千古壹号**大佬。

> 我们要做到**敬畏每一行代码**，不能浮于表面。团队开发，要的不是个性，而是**标准和规范**。 ——千古壹号











