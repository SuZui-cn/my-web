# 从零开始学WEB前端💦——VUE介绍

## 📓项目介绍

先做个自我介绍，本人是一个没人写前端所以就自学前端的后端程序员🙇。在此项目中我会和大家一起从零基础开始学习前端，从后端程序员的视角来看前端，受限于作者的水平本项目暂时只会更新到前端框架VUE，不会涉及node.js。该项目适合零基础的小白或者和我一样开发网站没人写前端所以自学前端的后端程序员😂。

该项目的学习顺序是按照我自己学习时总结出来的，其中的每个知识点都是我认真去理解的，同时也查了很多的资料，所有的参考资料我都放在了文章末尾。尊重开源，尊重知识产权。每一个案例我都亲手写过并觉得不错才放上去的。每次的代码和笔记我都放在了开源仓库里，有需要的同学请不要吝啬给我一个star。如果觉得本文写的不错的话记得点赞+关注，你们的支持是我坚持下去的动力😃。

> 昨夜星辰昨夜风，画楼西畔桂堂东。
> 身无彩凤双飞翼，心有灵犀一点通。
> 隔座送钩春酒暖，分曹射覆蜡灯红。
> 嗟余听鼓应官去，走马兰台类转蓬。
>
> ——李商隐《无题·昨夜星辰昨夜风》

语雀地址：[https://www.yuque.com/beilayanmen](https://www.yuque.com/beilayanmen)

Github地址：[https://github.com/SuZui-cn/my-web](https://github.com/SuZui-cn/my-web)

Gitee地址：[https://gitee.com/north_gate/my-web](https://gitee.com/north_gate/my-web)

个人博客地址：[https://foollyone.cn/](https://foollyone.cn/)

## ⌨本文知识点

* 什么是VUE
* VUE的特点
* 什么是MVVM

<!--more-->

从本节开始我们就要介绍前端框架VUE，并且需要逐渐的适应前端工程化的开发。VUE作为国人开发的框架，本人是非常喜欢的，但是由于本人的水平一般，所以很多地方讲的不好而且内容较少。如果要深入前端学习的同学建议多花点时间在JavaScript上面，有了良好的JavaScript基础，再来学习前端框架会非常的轻松。

## 什么是VUE

> Vue (读音 /vjuː/，类似于 **view**) 是一套用于构建用户界面的**渐进式框架**。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与[现代化的工具链](https://cn.vuejs.org/v2/guide/single-file-components.html)以及各种[支持类库](https://github.com/vuejs/awesome-vue#libraries--plugins)结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
>
> ——VUE官方文档

VUE由国人**尤雨溪**所开发。

> 尤雨溪是一位美籍华人，在上海复旦大学附中读完高中后，在美国完成大学学业，本科毕业于 Colgate University，后在 Parsons 设计学院获得 Design & Technology 艺术硕士学位。他是 Vue Technology LLC 创始人，曾经在 Google Creative Lab 就职，参与过多个项目的界面原型研发，后加入 Meteor，参与 Meteor 框架本身的维护和 Meteor Galaxy 平台的交互设计与前端开发。
>
> 2014 年 2 月，尤雨溪开源了一个前端开发库 Vue.js。Vue.js 是构建 Web 界面的 JavaScript 库，也是一个通过简洁的 API 提供高效数据绑定和灵活组件的系统。
>
> 2016 年 9 月 3 日，在南京的 JSConf 上，尤雨溪正式宣布以技术顾问的身份加盟阿里巴巴 Weex 团队，来做 Vue 和 Weex 的 JavaScript runtime 整合，目标是让大家能用 Vue 的语法跨三端。
>
> 目前，尤雨溪全职投入 Vue.js 的开发与维护，立志将 Vue.js 打造成与 Angular/React 平起平坐的世界顶级框架。

## VUE的特点

以下取自C语言中文网：http://c.biancheng.net/view/6714.html

* **轻量级的框架**——Vue.js 能够自动追踪依赖的模板表达式和计算属性，提供 MVVM 数据绑定和一个可组合的组件系统，具有简单、灵活的 API，使读者更加容易理解，能够更快上手。
* **双向数据绑定**——声明式渲染是数据双向绑定的主要体现，同样也是 Vue.js 的核心，它允许采用简洁的模板语法将数据声明式渲染整合进 DOM。
*  **指令**——Vue.js 与页面进行交互，主要就是通过内置指令来完成的，指令的作用是当其表达式的值改变时相应地将某些行为应用到 DOM 上。
* **组件化**——组件（Component）是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。在 Vue 中，父子组件通过 props 传递通信，从父向子单向传递。子组件与父组件通信，通过触发事件通知父组件改变数据。这样就形成了一个基本的父子通信模式。在开发中组件和 HTML、JavaScript 等有非常紧密的关系时，可以根据实际的需要自定义组件，使开发变得更加便利，可大量减少代码编写量。组件还支持热重载（hotreload）。当我们做了修改时，不会刷新页面，只是对组件本身进行立刻重载，不会影响整个应用当前的状态。CSS 也支持热重载。

* **客户端路由**——Vue-router 是 Vue.js 官方的路由插件，与 Vue.js 深度集成，用于构建单页面应用。Vue 单页面应用是基于路由和组件的，路由用于设定访问路径，并将路径和组件映射起来，传统的页面是通过超链接实现页面的切换和跳转的。

* **状态管理**——状态管理实际就是一个单向的数据流，State 驱动 View 的渲染，而用户对 View 进行操作产生 Action，使 State 产生变化，从而使 View 重新渲染，形成一个单独的组件。

## 什么是MVVM

- `Model`是代表**数据模型**，也可以在`Model`中定义数据修改和操作的业务逻辑。
- `View`是代表**UI组件**，它负责将数据模型转化成UI展现出来。
- `ViewModel`是一个同步View和Model的对象。

![image-20220310233343432](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220310233343432.png)



代码演示如下：

![image-20220310233242794](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220310233242794.png)