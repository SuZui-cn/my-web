# 从零开始学WEB前端💦——网页的装饰——CSS进阶

## 📓项目介绍

先做个自我介绍，本人是一个没人写前端所以就自学前端的后端程序员🙇。在此项目中我会和大家一起从零基础开始学习前端，从后端程序员的视角来看前端，受限于作者的水平本项目暂时只会更新到前端框架VUE，不会涉及node.js。该项目适合零基础的小白或者和我一样开发网站没人写前端所以自学前端的后端程序员😂。

该项目的学习顺序是按照我自己学习时总结出来的，其中的每个知识点都是我认真去理解的，同时也查了很多的资料，所有的参考资料我都放在了文章末尾。尊重开源，尊重知识产权。每一个案例我都亲手写过并觉得不错才放上去的。每次的代码和笔记我都放在了开源仓库里，有需要的同学请不要吝啬给我一个star。如果觉得本文写的不错的话记得点赞+关注，你们的支持是我坚持下去的动力😃。

> 千山鸟飞绝，万径人踪灭。
> 孤舟蓑笠翁，独钓寒江雪。 ——柳宗元《江雪》

语雀地址：[https://www.yuque.com/beilayanmen](https://www.yuque.com/beilayanmen)

Github地址：[https://github.com/SuZui-cn/my-web](https://github.com/SuZui-cn/my-web)

Gitee地址：[https://gitee.com/north_gate/my-web](https://gitee.com/north_gate/my-web)

个人博客地址：[https://foollyone.cn/](https://foollyone.cn/)

## ⌨本文知识点

* CSS布局相关
* 动画
* 组件库的使用
* 小技巧

<!--more-->

太难了，上一篇CSS基础的文章访问量惨淡，唉，直接给我干emo了。所以我就选择《江雪》作为本章的开篇。从零开始学WEB前端——网页的装饰——CSS基础：[https://blog.csdn.net/su_zui/article/details/122915398?spm=1001.2014.3001.5502](https://blog.csdn.net/su_zui/article/details/122915398?spm=1001.2014.3001.5502)

还是再次推荐一下，还是写的挺不错的（就是有点长）

————————————————正文开始——————————————————

## CSS布局相关

我们在上一章的最后三个案例中我们可以发现网页都是有一个大致的框架，这个框架约束着我们哪里该放什么样的内容，这个内容约束的框架就被称为**布局**，这部分作者一般都是使用的组件库，所以这里只是粗略的介绍几种。在之后会教大家如何使用组件库。

给大家推荐W3Cschool的CSS布局教程：[https://www.w3cschool.cn/css/css-layout.html](https://www.w3cschool.cn/css/css-layout.html)

接下来介绍几种常见的布局方式：

![image-20220216214630130](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220216214630130.png)

### 0x01 “上中下”布局 

这种布局是最常见的

![image-20220216215750856](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220216215750856.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      div {
        text-align: center;
      }
      .header {
        height: 10vh;
        background-color: red;
      }
      .main {
        height: 70vh;
        background-color: pink;
      }
      .footer {
        height: 20vh;
        background-color: aquamarine;
      }
    </style>
  </head>
  <body>
    <div class="header">这里是头部</div>
    <div class="main">这里是主要内容区域</div>
    <div class="footer">这里是底部</div>
  </body>
</html>
```

### 0x02“左中右”布局

![image-20220216220519446](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220216220519446.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      div {
        float: left;
        text-align: center;
        height: 100vh;
      }
      .left {
        width: 20%;
        background-color: red;
      }
      .main {
        width: 60%;
        background-color: pink;
      }
      .right {
        width: 20%;
        background-color: aquamarine;
      }
    </style>
  </head>
  <body>
    <div class="left">这里是左边</div>
    <div class="main">这里是中间</div>
    <div class="right">这里是右边</div>
  </body>
</html>
```

### 0x03 “28分”布局

作为一个后端程序员本人精通28分布局[手动狗头]

![image-20220216214737424](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220216214737424.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      div {
        float: left;
        height: 100vh;
      }
      .left {
        background-color: red;
        width: 20%;
      }
      .right {
        background-color: pink;
        width: 80%;
      }
    </style>
  </head>
  <body>
    <div class="left">这里是2</div>
    <div class="right">这里是8</div>
  </body>
</html>
```

## 动画

上一章中我们写的“跳动的心”就是具有动画效果的。主要使用的就是`@keyframes`关键字来实现的。

接下来我通过“跳动的心”来给大家讲解CSS动画。以下资料取自菜鸟教程

### `animation`属性

![image-20220216222102481](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220216222102481.png)

在“跳动的心”中我们是这样定义`animation`属性的

```css
/* 这里的属性一次是：绑定关键帧的名字、动画在多少秒内完成、动画怎么完成一个周期、动画的延迟、动画的播放次数、是否应该轮流反向播放动画 */
animation: beat 0.7s ease 0s infinite normal;
/* 接下来介绍几个重点： */
/* 绑定关键帧的名字：这里我们绑定的是用@keyframes关键字定义的关键帧，这里的关键帧叫beat */
/* 动画怎么完成一个周期：ease表示默认。动画以低速开始，然后加快，在结束前变慢。 */
/* 动画的播放次数：infinite表示指定动画应该播放无限次（永远） */
/* 是否应该轮流反向播放动画：normal表示默认值。动画按正常播放。 */
```

animation-timing-function

指定动画将如何完成一个周期。速度曲线定义动画从一套 CSS 样式变为另一套所用的时间。速度曲线用于使变化更为平滑。

![image-20220216222530140](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220216222530140.png)

animation-iteration-count属性定义动画应该播放多少次。

![image-20220216222955504](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220216222955504.png)

animation-direction 属性定义是否循环交替反向播放动画。

![image-20220216223033147](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220216223033147.png)

animation-fill-mode 属性规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。

默认情况下，CSS 动画在第一个关键帧播放完之前不会影响元素，在最后一个关键帧完成后停止影响元素。animation-fill-mode 属性可重写该行为。

![image-20220216223059790](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220216223059790.png)

### @keyframes

使用@keyframes规则，你可以创建动画。

创建动画是通过逐步改变从一个CSS样式设定到另一个。

在动画过程中，您可以更改CSS样式的设定多次。

指定的变化时发生时使用％，或关键字"from"和"to"，这是和0％到100％相同。

0％是开头动画，100％是当动画完成。

![image-20220216223421352](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220216223421352.png)

我们在“跳动的心”里的具体设置如下：

```css
@keyframes beat {
  0% {
    /* transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜。 */
    /* 语法：transform: none|transform-functions; */
    transform: scale(1) rotate(225deg);
    /* box-shadow 向框添加一个或多个阴影。该属性是由逗号分隔的阴影列表，每个阴影由 2-4 个长度值、可选的颜色值以及可选的 inset 关键词来规定。省略长度的值是 0。 */
    /* 语法：box-shadow: h-shadow v-shadow blur spread color inset; */
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
```

transform的具体使用如下表：

![image-20220216223808620](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220216223808620.png)

## 组件库的使用

作为一个不太会写样式的仔来说，写前端无疑是非常头疼的，尤其是在没有原型图的情况下。但是好在有组件库的存在，作者以前特别喜欢使用一个名叫`layui`的组件库，但是随着时代的发展该组件库逐渐的退下阵来，学习了vue之后我们会使用`element-ui`（饿了么）组件库，这里给大家演示`bootstrap`。

首先打开Bootstrap的中文文档：

[https://v3.bootcss.com/](https://v3.bootcss.com/)

![image-20220216225522402](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220216225522402.png)

点击“下载Bootstrap”，之后在页面下方复制CDN，在我们的项目中引入CDN

> CDN的全称是Content Delivery Network，即[内容分发网络](https://baike.baidu.com/item/内容分发网络/4034265)。CDN是构建在现有网络基础之上的智能虚拟网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。CDN的关键技术主要有内容存储和分发技术。 ——百度百科

简而言之，CDN就是以超链接的形式将其js文件和css文件引入到我们的项目里。



![image-20220216225615813](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220216225615813.png)

![image-20220216225718386](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220216225718386.png)

之后我们就可以在上方`组件`这里，之后在右侧就可以选择我们需要的`组件`了。

![image-20220216225740416](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220216225740416.png)

![image-20220216225848528](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220216225848528.png)

比如这里我想试用导航栏的组件，选择好样式之后就直接复制代码到项目里。

![image-20220216225951342](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220216225951342.png)

![image-20220216230034102](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220216230034102.png)

之后效果就出来了。

![image-20220216230052121](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220216230052121.png)

## 小技巧

以下是一些编写CSS的一些小技巧

### 隐藏盒子的几种方式

隐藏盒子，有以下几种方式：

（1）方式一：

```
overflow：hidden;   //隐藏盒子超出的部分
```


（2）**方式二**：

```
display: none;	  隐藏盒子，而且不占位置(用的最多)
```

比如，点击`X`，关闭京东首页上方的广告栏。

（3）方式三：

```
visibility: hidden;   //隐藏盒子，占位置。
visibility: visible;   //让盒子重新显示

```

（4）方式四：

```
opacity: 0;       //设置盒子的透明度（不建议，因为内容也会半透明），占位置
```


（4）方式五：

```
Position/top/left/...-999px   //把盒子移得远远的，占位置。
```

（5）方式六：

```
margin-left: 1000px;
```

### 设置盒子的半透明

方式一：`opacity: 0.4`。优点是方便。缺点是：里面的内容也会半透明。

方式二：css3的技术来解决半透明。如下：

- background: rgba(0,0,0,0.3);

- background: rgba(0,0,0,.3);

备注：`a`指的是alpha透明度。

### 给标签的形状设置为圆角矩形

```
border-radius: 50%;
border-radius: 10px 0 0 10px;
```

### 行高的问题：儿子把父亲撑开

比如对于下面这样的标签：

```
	<div>
		<a href=""></a>
	</div>
```


前置条件：如果我们给父亲div的行高设为31px，然后给儿子a的行高也设置为31

结果：当我们给儿子a设置了字体属性之后，会发现，父亲被撑高为32px了。因为font字体自身会比较大，多撑出了一个像素。

解决办法：**行内元素尽量不要设置font属性**。对于行内元素而言，如果它和父亲都设置了行高，就不要去给自己设置font属性了。要么就，不要同时设置行高。

### 让flex盒子中的子元素们，居中

```css
display: flex;
justify-content: center; // 子元素在横轴的对齐方式 （左右居中）
align-items: center;  // 子元素在竖轴的对齐方式（上下居中）
```

### 让文字只显示一行，超出显示省略号

```
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;

```


### 让文字最多只显示两行，超出后显示省略号

```
	overflow:hidden;
	text-overflow:ellipsis;
	display:-webkit-box;
	-webkit-box-orient:vertical;
	-webkit-line-clamp:2;
```

### 文本内容里自带了换行，但是在前端没有展示出来

解决办法：增加如下属性即可。

```
white-space: pre-wrap;
```

或者：

```
white-space: pre-line;
```

### CSS的逗号和空格

CSS的逗号一般写在()里。**不同属性值之间，用的是空格**，不是逗号。比如：

```css
	transform: translate(-50%, -50%);  /* 这种写逗号 */
	transform: translate(-50%, -50%) scale(0.5);   /* 不同属性值之间，用的是空格 */
	background-size: 100% 100%;  /* 这里是空格，不是逗号 */
```

### 图片的宽度固定，高度自适应

这个场景下，别用background。直接放img元素就好了，将图片的高度设置为`auto`。

### 通过CSS扩大点击热区

```css
.button {
	position: relative;
	/* [其余样式] */
}

.button::before {
	content: '';
	position: absolute;
	top: -10px;
	right: -10px;
	bottom: -10px;
	left: -10px;
}
```

注意，button 里面不要写 `overflow: hidden` 属性，否则扩大的热区无效。

参考链接：<https://www.jianshu.com/p/b83fc87cb222>

### 上下滚动，不显示滚动条

```css
.sku_list {
	margin-left: 25rpx;
	display: flex;
	flex-wrap: wrap;

	height: 617rpx;
	overflow: hidden;
	overflow-y: scroll;

	/* 去掉滚动条 */
	&::-webkit-scrollbar {
		display: none;
	}
}
```

注意，去掉滚动条的那行代码里，建议用`display: none;`，不要用`width: 0;`。因为，当你需要设置横向滚动的效果时，`display: none;`这个属性的效果更好，不会改变容器的size；`width: 0;`可能会改变容器的size。

参考链接：

- [html设置局部区域上下滚动，不显示滚动条](https://blog.csdn.net/weixin_42157001/article/details/90176510)

### 设置页面的宽高，撑满屏幕

一般来说，我们在开发一个页面的时候，默认是希望这个页面的宽高能够撑满屏幕的。代码可以这样写：

```css
.app {
	width: 100vw;
	min-height: 100vh;
}
```

### p标签里的文字溢出怎么办

加一个属性即可：

```css
word-break: break-all;
```

### inline-block 相关

图片默认是 inline-block 布局，会存在经典的底部 3px 的问题。
