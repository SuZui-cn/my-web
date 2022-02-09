# 从零开始学WEB前端💦——网页的骨架——HTML理论讲解

## 📓项目介绍

先做个自我介绍，本人是一个没人写前端所以就自学前端的后端程序员🙇。在此项目中我会和大家一起从零基础开始学习前端，从后端程序员的视角来看前端，受限于作者的水平本项目暂时只会更新到前端框架VUE，不会涉及node.js。该项目适合零基础的小白或者和我一样开发网站没人写前端所以自学前端的后端程序员😂。

该项目的学习顺序是按照我自己学习时总结出来的，其中的每个知识点都是我认真去理解的，同时也查了很多的资料，所有的参考资料我都放在了文章末尾。尊重开源，尊重知识产权。每一个案例我都亲手写过并觉得不错才放上去的。每次的代码和笔记我都放在了开源仓库里，有需要的同学请不要吝啬给我一个star。如果觉得本文写的不错的话记得点赞+关注，你们的支持是我坚持下去的动力😃。

> 六王毕，四海一，蜀山兀，阿房出。 ——杜牧《阿房宫赋》

语雀地址：[https://www.yuque.com/beilayanmen](https://www.yuque.com/beilayanmen)

Github地址：[https://github.com/SuZui-cn/my-web](https://github.com/SuZui-cn/my-web)

Gitee地址：[https://gitee.com/north_gate/my-web](https://gitee.com/north_gate/my-web)

个人博客地址：[https://foollyone.cn/](https://foollyone.cn/)

## ⌨本文知识点

* 我们的第一个网页

* W3C
  * 组织介绍
  * WEB标准

* HTML概念
* HTML结构详解
* HTML规范

<!--more-->

## 我们的第一个网页

现在我们就正式进入WEB前端的学习，先和大家一起来编写一个自己的网页。

### 0x01  在桌面创建一个记事本

右键桌面->新建->文本文档

![image-20220207192458979](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220207192458979.png)

有同学可能就会问：为什么我的创建的记事本文件名字叫“新建文本文档”而不是“新建文本文档.txt”呢？

这是因为.txt是后缀名，表示的是打开方式，就比如.docx后缀的都是默认用word打开，.xlsx的都是默认用excel打开。

> 常用文件扩展名，Windows系统文件按照不同的格式和用途分很多种类，为便于管理和识别，在对文件命名时，是以扩展名加以区分的，即文件名格式为： “主文件名.扩展名”。这样就可以根据文件的扩展名，判定文件的种类，从而知道其格式和用途。主要ISO、RAR、html、zip、exe、pdf等。
>
> ——百度百科

![image-20220207192316523](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220207192316523.png)

没有显示后缀名的同学需要打开“此电脑”->左上角选择查看->之后将文件拓展名勾选上。

这样

![image-20220207192956903](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220207192956903.png)



![image-20220207193025450](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220207193025450.png)

### 0x02  编写代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    靓仔的第一个网页
  </body>
</html>
```

直接将上面的代码粘贴到刚刚新建的记事本中，这时候我们就已经写好第一个网页了，只需要让谷歌浏览器去打开它我们就可以看到里面的内容了。

但是我们怎么让谷歌来打开一个记事本文件呢？很简单刚刚所提到的后缀名就可以解决，我们现在就把记事本的后缀名改成.html。

![image-20220207193535714](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220207193535714.png)

现在直接点击他就可以用浏览器打开了。

<small>有的同学因为默认浏览器不是谷歌浏览器，所以显示的图片就不是谷歌的，这不应该当前操作。但是强烈建议使用谷歌浏览器（千万别用IE浏览器），在JavaScript一节中会详细介绍浏览器对我们写网页的影响。</small>



![image-20220207193947364](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220207193947364.png)

恭喜！做到这一步你已经超越很多人了。

> 道虽迩，不行不至。事虽小，不为不成。  ——《荀子·修身》

下一步我会给大家讲解刚刚所写的那一段代码以及一些相关的专业知识。如果已经具备了专业知识的同学可以直接跳到标签介绍那里。

## W3C

### W3C组织

聊到网页我们就不得不提起一个组织：W3C

**W3C**：World Wide Web Consortium，万维网联盟组织，用来制定web标准的机构（组织）。

W3C 组织就类似于现实世界中的联合国。W3C就是网页世界的老大，规则都是由其来定的。所以我们在写网页的时候就需要遵守他的规则。

为什么要遵循WEB标准呢？因为很多浏览器的浏览器内核不同，导致页面解析出来的效果可能会有差异，给开发者增加无谓的工作量。因此需要指定统一的标准。

> 规则并不是用于约束小白的，而是用于约束高手的，因为高手会的太多，掌握太多他人所不会的。为了方便管理，所以需要规则加以约束。

## Web标准

**Web标准**：制作网页要遵循的规范。

Web标准不是某一个标准，而是由W3C组织和其他标准化组织制定的一系列标准的集合。

**Web标准包括三个方面**：

- 结构标准（HTML）：用于对网页元素进行整理和分类。

- 表现标准（CSS）：用于设置网页元素的版式、颜色、大小等外观样式。

- 行为标准（JS）：用于定义网页的交互和行为。

根据上面的Web标准，可以将 Web前端分为三层，如下。

**Web前端分三层**：

- HTML（HyperText Markup Language）：超文本标记语言。从**语义**的角度描述页面的**结构**。相当于人的身体组织结构。
- CSS（Cascading Style Sheets）：层叠样式表。从**审美**的角度美化页面的**样式**。相当于人的衣服和打扮。
- JS：JavaScript。从**交互**的角度描述页面的**行为**。相当于人的动作，让人有生命力。

## HTML概念

**HTML** 全称为 HyperText Markup Language，译为<font color=#0000ff>**超文本标记语言**</font>。

HTML 不是一种编程语言，是一种描述性的**标记语言**。

**作用**：HTML是负责描述文档**语义**的语言。

这里我们需要注意两个地方一个是超文本、一个是标记语言。

> 所谓的超文本，有两层含义：
>
> （1）图片、音频、视频、动画、多媒体等内容，成为超文本，因为它们超出了文本的限制。
>
> （2）不仅如此，它还可以从一个文件跳转到另一个文件，与世界各地主机的文件进行连接。即：超级链接文本。

> HTML 不是一种编程语言，是一种描述性的**标记语言**。这主要有两层含义：
>
> （1）**标记语言是一套标记标签**。比如：标签`<a>`表示超链接、标签`<img>`表示图片、标签`<h1>`表示一级标题等等，它们都是属于 HTML 标签。
>
> 说的通俗一点就是：网页是由网页元素组成的，这些元素是由 HTML 标签描述出来，然后通过浏览器解析，就可以显示给用户看了。
>
> （2）编程语言是有编译过程的，而标记语言没有编译过程，HTML标签是直接由浏览器解析执行。

## HTML结构详解

在记事本中编写代码虽然可以实现最终的效果，但是不免有些难以操作，所以现在我们用vscode来打开刚刚到记事本文件

打开方式一：点击左上角的文件然后选择打开文件，之后选中刚刚的记事本文件。

pass: 如果vscode界面是英文的说明没有安装汉化的插件，具体的安装步骤请看工具篇。

![image-20220207195457990](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220207195457990.png)

打开方式二：直接将文件拖动到vscode

文件和文件夹都是可以直接拖到vscode里面的，这样可以快捷打开。

![image-20220207195738856](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220207195738856.png)

我们要知道HTML标签都是有开始和结束的（<font color="blue">**双边标记**</font>），比如 `<html>` 和 `</html>`，在尖括号里多一个反斜杠表示结束。又或者有的标签是在末尾以/反斜杠直接闭合，这称为自闭合标签（<font color="blue">**单边标记**</font>）。

![image-20220207200027866](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220207200027866.png)

双边标记的标签在里面编写的是他的内容。

![image-20220207200623533](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220207200623533.png)

而自闭合标签大多数是编写的属性。

这些标签里有很多用等号的就称为标签的属性。

等号左边是要设置的属性名，右边是设置的属性值。

![image-20220207200716332](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220207200716332.png)

至于这些属性有什么用会在之后进行详细讲解。

一个最基本的网页应该包含一下的内容

```html
<!DOCTYPE html>
<html>
  <head>
    <title>标题</title>
  </head>
  <body>
    内容
  </body>
</html>
```

pass:这里的title标签的标题是浏览器标签的标题，如下图。

![image-20220207201148873](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220207201148873.png)

其层级结构应该如下：

* DOCTYPE
* html
  * head
    * title
  * body

```html
<!-- 任何一个标准的HTML页面，第一行一定是一个以`<!DOCTYPE ……>`开头的语句。这一行，就是文档声明头，即 DocType Declaration，简称DTD。 -->
<!DOCTYPE html>
<!-- 
  lang用于指定页面语言，最常见的语言类型有两种：
- en：定义页面语言为英语。
- zh-CN：定义页面语言为中文。 -->
<html lang="en">
  <head>
    <!-- <meta>标签 提供有关页面的基本信息 -->
    <!-- 字符集用meta标签中的`charset`定义，charset就是character set（即“字符集”），即网页的编码方式。 -->
    <meta charset="UTF-8" />
    <!-- Keywords是定义关键字，就是告诉搜索引擎，这个网页是干嘛的，能够提高搜索命中率。让别人能够找到你，搜索到你。 -->
    <meta name="Keywords" content="帅者的第一个网页" />
    <!-- 只要设置Description页面描述，那么百度搜索结果，就能够显示这些语句，这个技术叫做**SEO**（search engine optimization，搜索引擎优化）。 -->
    <meta name="Description" content="这是帅者的第一个网页" />
    <!-- `width=device-width` ：表示视口宽度等于屏幕宽度。viewport 这个知识点，初学者还比较难理解，在学WEB移动端的时候会用到 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- 用于设置网页标题 -->
    <title>Document</title>
  </head>
  <!-- <body>标签 用于定义HTML文档所要显示的内容，也称为主体标签。我们所写的代码必须放在此标签內。 -->
  <body>
    靓仔的第一个网页
  </body>
</html>

```

补充：头标签内部的常见标签如下：

 - `<title>`：指定整个网页的标题，在浏览器最上方显示。
 - `<base>`：为页面上的所有链接规定默认地址或默认目标。
 - `<meta>`：提供有关页面的基本信息
 - `<body>`：用于定义HTML文档所要显示的内容，也称为主体标签。我们所写的代码必须放在此标签內。
 - `<link>`：定义文档与外部资源的关系。

## HTML规范

（1）所有标记元素都要正确的嵌套，不能交叉嵌套。正确写法举例：`<h1><font></font></h1>`

（2）所有的标记都必须小写。

（3）所有的标签都必须闭合。

- 双标签：`<span></span>`

- 单标签：`<br>` 建议写成 `<br />`   `<hr>` 建议转成 `<hr />`，还有`<img src=“URL” />`

（4）所有的属性值必须加引号。`<font  color="red"></font>`

（5）所有的属性必须有值。`<hr noshade="noshade">`、`<input  type="radio" checked="checked" />`

（6）XHTML文档开头必须要有DTD文档类型定义。



**1）HTML对换行不敏感，对tab不敏感**

HTML只在乎标签的嵌套结构，嵌套的关系。谁嵌套了谁，谁被谁嵌套了，和换行、tab无关。换不换行、tab不tab，都不影响页面的结构。

也就是说，HTML不是依靠缩进来表示嵌套的，而是看标签的嵌套关系。但是，我们发现有良好的缩进，代码更易读。建议大家都正确缩进标签。

百度为了追求极致的显示速度，所有HTML标签都没有换行、都没有缩进（tab），HTML和换不换行无关，标签的层次依然清晰，只不过程序员不可读了。

**2）空白折叠现象**

HTML中所有的**文字之间**，如果有空格、换行、tab都将被折叠为一个空格显示。

**3）标签要严格封闭**

标签不封闭的结果是灾难性的。





