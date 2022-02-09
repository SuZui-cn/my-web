# 从零开始学WEB前端💦——网页的骨架——HTML实战练习

## 📓项目介绍

先做个自我介绍，本人是一个没人写前端所以就自学前端的后端程序员🙇。在此项目中我会和大家一起从零基础开始学习前端，从后端程序员的视角来看前端，受限于作者的水平本项目暂时只会更新到前端框架VUE，不会涉及node.js。该项目适合零基础的小白或者和我一样开发网站没人写前端所以自学前端的后端程序员😂。

该项目的学习顺序是按照我自己学习时总结出来的，其中的每个知识点都是我认真去理解的，同时也查了很多的资料，所有的参考资料我都放在了文章末尾。尊重开源，尊重知识产权。每一个案例我都亲手写过并觉得不错才放上去的。每次的代码和笔记我都放在了开源仓库里，有需要的同学请不要吝啬给我一个star。如果觉得本文写的不错的话记得点赞+关注，你们的支持是我坚持下去的动力😃。

> 纸上得来终觉浅，绝知此事要躬行。 ——陆游《冬夜读书示子聿》

语雀地址：[https://www.yuque.com/beilayanmen](https://www.yuque.com/beilayanmen)

Github地址：[https://github.com/SuZui-cn/my-web](https://github.com/SuZui-cn/my-web)

Gitee地址：[https://gitee.com/north_gate/my-web](https://gitee.com/north_gate/my-web)

个人博客地址：[https://foollyone.cn/](https://foollyone.cn/)

## ⌨本文知识点

* VSCode基本介绍
  * 前端工具介绍
  * VSCode的使用
* HTML常用标签
  * 基本文档标签
  * 基本标签
  * 文本格式化
  * 链接
  * 图片
  * 无序列表
  * 有序列表
  * 定义列表
  * 表格
  * 框架
  * 表单
* HTML标签练习
  * 标签练习
  * 基本标签实战
  * 列表标签练习
  * 图片标签练习
  * 表格标签练习
  * 表单标签练习

* 善于实用搜索引擎

<!--more-->

在上一篇文章中，我们主要是针对于HTML的基础理论进行了探讨。但是学习一门技术不能总停留在理论，本文将会和大家一起来对HTML进行练习。

> 实践是检验真理的唯一标准。

## VSCode基本介绍

### 前端工具介绍

作为一个合格的程序员，熟练的掌握开发工具是必不可少的。这里给大家稍微的讲解一下前端常用的开发工具。

* VSCode：插件众多，拓展性强；适用于绝大部分前端开发
* Sublime Text：界面简洁，轻量级启动快速。
* HBuilder：国产前端开发工具，非常不错的软件，在开发微信小程序和手机APP上非常好用。
* WebStorm：jetbrains公司旗下的JavaScript开发工具，适合在前端工程化的项目中使用。
* Dreamweaver：曾经以PS+DW+FW称霸网页领域，号称网页三剑客。
* 记事本：大佬都是用记事本写代码的。【手动狗头】

在以前编写网页大多数是使用的dreamweaver（DW），DW对于新手而言很友好，可以用可视化的编辑方式编写网页，但是DW自己生成的样式代码略微复杂，后期的维护难度很大。随着时代的进步，开发工具也在逐步的更新换代，DW逐渐退出前端开发的视野中。这里推荐大家使用VSCode这款神器。（想要编写微信小程序的同学可以试着使用HBuilder）。

### VSCode的使用

#### 自动保存

在编写完代码之后需要保存再打开浏览器才能看到界面的效果，作者在初学网页的时候经常忘记保存代码，导致页面一直不出现效果。所以推荐大家开启vscode里的自动保存。

左上角：文件->勾选自动保存。

![image-20220209210119608](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220209210119608.png)

#### 创建文件/文件夹

在VSCode中除了在之前介绍的可以直接将文件/文件夹直接拖进vscode以外，还可以快捷的创建文件/文件夹。只需要选中要创建文件/文件夹的父级目录再点击按钮就可以快捷创建。

具体操作如下图：

![image-20220209210629269](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220209210629269.png)

#### 插件推荐

这里推荐几款目前阶段适合大家的插件。插件这部分我不会一次推荐很多，只会分阶段的推荐，并且讲解每个插件的具体作用。以防大家装了一堆插件，结果连具体插件是做什么的都不知道。（也欢迎大家多多关注作者的干货推荐专栏，里面会推荐很多实用的插件）

##### Auto Close Tag

自动闭合标签。装上这款插件我们在写标签的时候只需要输入/就可以快速生成闭合标签。

![image-20220209211211068](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220209211211068.png)

##### Auto Rename Tag

自动重命名标签。这个插件可以让我们在修改标签时自动帮我们修改另一个。比如 在修改`<div>`标签为`<span>`标签的时候，它会自动帮我们把`</div>`标签替换为`</span>`标签。

![image-20220209211340002](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220209211340002.png)

##### open in browser

快速在浏览器打开，装上这个插件可以让我们在vscode界面中快速打开浏览器

> pass：该插件作者在初学的时候出现过快捷键不能正常打开浏览器的情况，解决办法是降低该插件的版本即可。

![image-20220209212227345](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220209212227345.png)

使用方式：

* 右键选择
* 快捷键：Alt + b

![image-20220209211720980](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220209211720980.png)

![image-20220209211958895](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220209211958895.png)

##### Live Server

实时预览，这款插件可以在本地运行一个微型服务器，让我们可以实时预览编辑的效果。（在修改召唤神龙那篇文章中就是用该插件和谷歌的另一个路径映射的插件联动，从而达到修改游戏的效果。有兴趣的同学可以去看看我写的修改召唤神龙的文章）

![image-20220209212319330](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220209212319330.png)

使用方式：

安装好该插件之后在vscode右下角会出现一个'Go Live'，点击即可。

![image-20220209212631953](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220209212631953.png)

##### Path Intellisense

路径联想，在我们引入图片或者其他文件的时候这款软件会为我们提示路径。

![image-20220209212732609](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220209212732609.png)





## HTML常用标签介绍

在网页中，每个html标签被称为元素，每个元素都有对应的属性（关于属性，会在下一篇CSS介绍的文章中详细讲解）

**HTML标签的本质是为文本添加语义！**

在学习编程的时候会涉及大量的概念，以及一些常用的代码片段。所以建议大家养成记笔记的习惯。

`拓展内容`

> 建议大家自主学习gitpage搭建个人博客（后期可能会出教程，等不了的同学可以自行百度，关键词：gitpage搭建个人博客）

> 同时建议大家学习markdown语法，并选择一款顺手的markdown编辑器。作者使用的是typroa 0.9版本（因为该软件1.0之后的版本收费）
>
> typroa历史版本下载：[https://typora.io/releases/all](https://typora.io/releases/all)
>
> 既然安装了typroa可以自主学习一下图床的概念，再将Typroa和PicGo联动起来

> 世上无难事，只要肯登攀。 —— 毛泽东《水调歌头·重上井冈山》

> pass:以下标签取自[菜鸟教程](https://www.runoob.com/html/html-quicklist.html)

### 基本文档标签

```html
<!DOCTYPE html>
<html>
	<head>
		<title>文档标题</title>
	</head>
	<body>
	可见文本...
	</body>
</html>
```

网页基础的结构，主要需要注意层级结构，以及外部文件是在`<head>`标签中引入（js文件可以在body中引入）

### 基本标签

```html
<h1>一级标题</h1>
<h2>二级标题 </h2>
<h3>三级标题</h3>
<h4> . . . </h4>
<h5> . . . </h5>
<h6>六级标题</h6>
<span>文本</span>
<div>‘盒子’</div>
<p>这是一个段落。</p>
<br> （换行）
<hr> （水平线）
<!-- 这是注释 -->
```

大家在这里可以试试`<span>`标签和`<div>`标签有什么区别

> 提示：行级元素，块级元素（后续DIV+CSS布局章节会详细讲解）

### 文本格式化

```html
<b>粗体文本</b>
<code>计算机代码</code>
<em>强调文本</em>
<i>斜体文本</i>
<kbd>键盘输入</kbd> 
<pre>预格式化文本</pre>
<small>更小的文本</small>
<strong>重要的文本</strong>
 
<abbr> （缩写）
<address> （联系信息）
<bdo> （文字方向）
<blockquote> （从另一个源引用的部分）
<cite> （工作的名称）
<del> （删除的文本）
<ins> （插入的文本）
<sub> （下标文本）
<sup> （上标文本）
```

### 链接

```html
普通的链接：<a href="http://www.example.com/">链接文本</a>
图像链接： <a href="http://www.example.com/"><img src="URL" alt="替换文本"></a>
邮件链接： <a href="mailto:webmaster@example.com">发送e-mail</a>
书签：
<a id="tips">提示部分</a>
<a href="#tips">跳到提示部分</a>
```

注意a标签设置跳转的属性是href可不是src。

### 图片

```html
<img loading="lazy" src="URL" alt="替换文本" height="42" width="42">
```

图片这里的话需要注意一点就是文件的引用路径，相对路径和绝对路径是不同的

相对路径和绝对路径的区别：[https://blog.csdn.net/qq_34107571/article/details/82834825](https://blog.csdn.net/qq_34107571/article/details/82834825)

> ./是当前文件夹
>
> ../是上一级文件夹
>
> ../../是上上一级文件夹

在目前的阶段，图片显示不出绝大部分是因为路径的问题，相对路径需要结合之前推荐的`Path Intellisense` 路径联想插件多多练习。

pass：使用绝对路径的时候将代码发送给别人，图片会因为路径位置没有对应图片而显示不出来，所以需要注意。其他外部文件（列如CSS、JS文件）在使用绝对路径的时候也会出现这种问题。这点需要注意。

### 无序列表

```html
<ul>
    <li>项目</li>
    <li>项目</li>
</ul>
```

### 有序列表

```html
<ol>
    <li>第一项</li>
    <li>第二项</li>
</ol>
```

### 定义列表

```html
<dl>
  <dt>项目 1</dt>
    <dd>描述项目 1</dd>
  <dt>项目 2</dt>
    <dd>描述项目 2</dd>
</dl>
```

### 表格

```html
<table border="1">
  <tr>
    <th>表格标题</th>
    <th>表格标题</th>
  </tr>
  <tr>
    <td>表格数据</td>
    <td>表格数据</td>
  </tr>
</table>
```

### 框架

```html
<iframe src="demo_iframe.htm"></iframe>
```

### 表单

```html
<!-- action是数据接受的地点，method是请求方式（关于这部分会在JavaScript的AJAX部分重点讲解） -->
<form action="demo_form.php" method="post/get">
  <input type="text" name="email" size="40" maxlength="50" />
  <input type="password" />
  <input type="checkbox" checked="checked" />
  <input type="radio" checked="checked" />
  <input type="submit" value="Send" />
  <input type="reset" />
  <input type="hidden" />
  <select>
    <option>苹果</option>
    <option selected="selected">香蕉</option>
    <option>樱桃</option>
  </select>
  <textarea name="comment" rows="60" cols="20"></textarea>
</form>
```

表单需要重点掌握，后期前后端交互的时候经常用到。

## HTML标签练习

还是那句话。

> 实践是检验真理的唯一标准。

建议大家建一个index.html文件，然后把上面所说的标签都敲一下，有人可能要说，那么多东西怎么记得住。

> 我亦无他，惟手熟尔。  ——欧阳修《卖油翁》

不断的练习是学习代码的必经之路。下面给大家推荐两篇文章，以及作者当时学习时候写的代码（代码都放在了文章开头的github和gitee仓库，有需要的自取能点个star那就更好了）

html速写语法规则：[https://blog.csdn.net/qq_33744228/article/details/80910377](https://blog.csdn.net/qq_33744228/article/details/80910377)

vscode快捷键：[https://www.php.cn/tool/vscode/473194.html](https://www.php.cn/tool/vscode/473194.html)

### 标签练习

这两个练习就是当时每个标签都使用了一下，看了一下每个标签会是什么效果。

文件路径：\my-web\03网页的骨架——HTML实战练习\代码\HTML练习\i标签练习.html

![image-20220209223307954](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220209223307954.png)

文件路径：\my-web\03网页的骨架——HTML实战练习\代码\HTML练习\i标签实例.html

<img src="https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220209223330926.png" alt="image-20220209223330926" style="zoom:33%;" />

### 基本标签实战

大家可以试着做一下下面的结构，图片可以截图自取。

文件路径：\my-web\03网页的骨架——HTML实战练习\代码\HTML练习\index.html

![image-20220209223615648](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220209223615648.png)

![image-20220209223630879](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220209223630879.png)



```
标题：帮你推开心灵那扇窗 ——现代服务产业学院开展心理公益讲座为“宅”家师生送良方
正文：2月29日，由现代服务产业学院心理老师高雪梅通过网络，向全校“宅”家的师生进行了一堂心理健康公益讲座，30余名师生在线与高老师进行了互动，并得到缓解焦虑的“良方”。
疫情发生以来，全国各地均加强了人员管控，人员只能“宅”在家里，心情难免会出现焦虑。在疫情期间，高雪梅老师的心理热线也曾接到几例相关心理咨询，学院按照要求开始网络课程教学后，在授课过程中和与学生的交流中也感到他们有一些焦虑症状，加上一些老师在组织网络教学过程中，因为年龄和经验等原因产生焦虑情绪。为让师生在疫情防控期间有更好的心态进行工作和学习，高雪梅老师结合师生的实际情况，用自己的专业知识组织了一堂“疫情期间如何缓解焦虑”心理健康公益讲座。
讲座由一段新型冠状病毒的科普视频引入，师生通过视频了解到本次疫情的发生和传播途径，掌握了如何进行自我防护。接着高老师带领大家认识各种心理状态，通过测试判断自己的心理状态，以“小丸子一家的战‘疫’”问答案例分析指出缓解焦虑的应对措施，让大家掌握心理疏导的具体做法，最后通过一份“应对无聊的计划清单”结束本次讲座。在讲座的过程中，师生互动、受益匪浅。纷纷反映：此次讲座让大家师生学会了疫情期间如何缓解焦虑的方法，同时也认识到心理健康的重要性，更有利于在今后的工作学习中保持积极向上的乐观态度。
```

### 列表标签练习

文件路径：\my-web\03网页的骨架——HTML实战练习\代码\HTML练习\列表嵌套\index.html

![image-20220209223817573](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220209223817573.png)

### 图片标签练习

下面有五张图片（截图自取）试试相对路径和绝对路径吧。

文件路径：\my-web\03网页的骨架——HTML实战练习\代码\HTML练习\图片链接\index.html

![image-20220209223913856](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220209223913856.png)

### 表格标签练习

文件路径：\my-web\03网页的骨架——HTML实战练习\代码\表格练习\table.html

<img src="https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220209224040763.png" alt="image-20220209224040763" style="zoom:50%;" />

文件路径：\my-web\03网页的骨架——HTML实战练习\代码\HTML练习\表格制作\index.html

<img src="https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220209224205010.png" alt="image-20220209224205010" style="zoom:50%;" />

### 表单标签练习

文件路径：\my-web\03网页的骨架——HTML实战练习\代码\表单练习\index.html

<img src="https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220209224132535.png" alt="image-20220209224132535" style="zoom:50%;" />

以上所有案例代码都在仓库里，有需要的同学可以在仓库下载，github访问不了的同学可以访问gitee。

github：[https://github.com/SuZui-cn/my-web](https://github.com/SuZui-cn/my-web)

![image-20220209224919543](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220209224919543.png)

gitee：[https://gitee.com/north_gate/my-web](https://gitee.com/north_gate/my-web)

![image-20220209225033497](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220209225033497.png)



## 善于使用搜索引擎

学习编程时会出现大量的问题，如果不愿意问人的话，强烈建议多用搜索引擎。我的文章中会出现很多前端系列外的知识和工具，这就需要大家善于使用搜索引擎，遇到不会的知识点就去搜索一下。遇到概念性的就百度百度/谷歌百科。

建议大家学习一下谷歌语法（百度同样实用）

谷歌语法：[https://blog.csdn.net/qq_50589021/article/details/115377111](https://blog.csdn.net/qq_50589021/article/details/115377111)

比如我只想搜索CSDN的相关内容就可以使用

```
关键词 site:blog.csdn.net
```

> 如果大家出现问题，可以私信我，我很乐意帮大家解决问题，但是有时候私信太多我会来不及处理，所以可以把问题写在评论区，知道问题所在的同学可以帮忙解决一下。





