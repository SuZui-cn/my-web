# 从零开始学WEB前端💦——VUE基础指令

## 📓项目介绍

先做个自我介绍，本人是一个没人写前端所以就自学前端的后端程序员🙇。在此项目中我会和大家一起从零基础开始学习前端，从后端程序员的视角来看前端，受限于作者的水平本项目暂时只会更新到前端框架VUE，不会涉及node.js。该项目适合零基础的小白或者和我一样开发网站没人写前端所以自学前端的后端程序员😂。

该项目的学习顺序是按照我自己学习时总结出来的，其中的每个知识点都是我认真去理解的，同时也查了很多的资料，所有的参考资料我都放在了文章末尾。尊重开源，尊重知识产权。每一个案例我都亲手写过并觉得不错才放上去的。每次的代码和笔记我都放在了开源仓库里，有需要的同学请不要吝啬给我一个star。如果觉得本文写的不错的话记得点赞+关注，你们的支持是我坚持下去的动力😃。

> 故人西辞黄鹤楼，烟花三月下扬州。
> 孤帆远影碧空尽，唯见长江天际流。
>
> ——李白《[黄鹤楼送孟浩然之广陵](https://so.gushiwen.cn/shiwenv_d3f231047aef.aspx)》

语雀地址：[https://www.yuque.com/beilayanmen](https://www.yuque.com/beilayanmen)

Github地址：[https://github.com/SuZui-cn/my-web](https://github.com/SuZui-cn/my-web)

Gitee地址：[https://gitee.com/north_gate/my-web](https://gitee.com/north_gate/my-web)

个人博客地址：[https://foollyone.cn/](https://foollyone.cn/)

## ⌨本文知识点

* Vue-Cli 创建 Vue 项目
* Vite创建 Vue 项目





## Vue-Cli 构建 Vue项目

### 安装node 

node 中文网地址： https://nodejs.org/zh-cn/

这里推荐下载长期维护版本

> pass: 之后学习vue3需要node的版本在15以上，推荐使用nvm 进行node 的版本控制
>
> nvm使用参考： https://blog.csdn.net/QWERTYQ16/article/details/124497532

![image-20220824213646894](https://extremely-smart.oss-cn-chengdu.aliyuncs.com/my_img/image-20220824213646894.png)

node 具体安装细节参考：https://blog.csdn.net/qq_48485223/article/details/122709354



### 安装Vue-Cli

安装好node之后，使用下面的指令全局安装vue-cli

``` shell
npm install -g @vue/cli
```

可能会因为网速问题出现安装失败，这时用下面的指令切换为淘宝镜像源

``` shell
npm config set registry https://registry.npm.taobao.org
```



### 创建vue 项目

使用下面的指令即可创建项目。

``` 
vue create [项目名]
```

![image-20220824214948560](https://extremely-smart.oss-cn-chengdu.aliyuncs.com/my_img/image-20220824214948560.png)

![image-20220824220309994](https://extremely-smart.oss-cn-chengdu.aliyuncs.com/my_img/image-20220824220309994.png)

![image-20220824223118522](https://extremely-smart.oss-cn-chengdu.aliyuncs.com/my_img/image-20220824223118522.png)

这样就创建好了项目，用vscode打开文件夹。

![image-20220824223303300](https://extremely-smart.oss-cn-chengdu.aliyuncs.com/my_img/image-20220824223303300.png)





## Vite 构建 Vue项目

### 前置知识

> vite官网：https://vitejs.cn/

Vite 为 Vue 提供第一优先级支持：

- Vue 3 单文件组件支持：[@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
- Vue 3 JSX 支持：[@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx)

- Vue 2 支持：[underfin/vite-plugin-vue2](https://github.com/underfin/vite-plugin-vue2)

#### NPM 依赖解析和预构建

原生 ES 导入不支持下面这样的裸模块导入：

```
import { someMethod } from 'my-dep'
```

上面的代码会在浏览器中抛出一个错误。Vite 将会检测到所有被加载的源文件中的此类裸模块导入，并执行以下操作:

- [预构建](https://cn.vitejs.dev/guide/dep-pre-bundling.html) 它们可以提高页面加载速度，并将 CommonJS / UMD 转换为 ESM 格式。预构建这一步由 [esbuild](http://esbuild.github.io/) 执行，这使得 Vite 的冷启动时间比任何基于 JavaScript 的打包器都要快得多。

- 重写导入为合法的 URL，例如 /node_modules/.vite/deps/my-dep.js?v=f3sf2ebd 以便浏览器能够正确导入它们。

**依赖是强缓存的**

Vite 通过 HTTP 头来缓存请求得到的依赖，所以如果你想要编辑或调试一个依赖，请按照 [这里](https://cn.vitejs.dev/guide/dep-pre-bundling.html#浏览器缓存) 的步骤操作。

#### 模块热重载

Vite 提供了一套原生 ESM 的 [HMR API](https://cn.vitejs.dev/guide/api-hmr.html)。 具有 HMR 功能的框架可以利用该 API 提供即时、准确的更新，而无需重新加载页面或清除应用程序状态。Vite 内置了 HMR 到 [Vue 单文件组件（SFC）](https://github.com/vitejs/vite/tree/main/packages/plugin-vue) 和 [React Fast Refresh](https://github.com/vitejs/vite/tree/main/packages/plugin-react) 中。也通过 [@prefresh/vite](https://github.com/JoviDeCroock/prefresh/tree/main/packages/vite) 对 Preact 实现了官方集成。

注意，你不需要手动设置这些 —— 当你通过 [create-vite](https://cn.vitejs.dev/guide/) 创建应用程序时，所选模板已经为你预先配置了这些。

### 通过pnpm创建项目

``` shell
# 使用npm安装pnpm
npm install -g pnpm
# 安装vite
pnpm install -g vite
# vite 创建项目
npm create vite

```

### Vite创建Vue2项目

对应引入以下插件。vite默认不支持vue2项目，需要在创建项目的时候选择vanilla

![img](https://docimg3.docs.qq.com/image/XZMh3P3h92N6E2mSC2vhWg.png?w=930&h=340)        

之后使用

```shell
# 安装vite的vue2插件
pnpm   i   vite-plugin-vue2 -D
# 安装vue2模块
pnpm i vue@2
```

在根目录下创建`vite.config.js`文件，编写以下内容

```js
import { defineConfig } from 'vite';
import { createVuePlugin } from "vite-plugin-vue2"
export default defineConfig({
  plugins:[
    createVuePlugin()
  ]
})
```

在根目录下创建app.vue文件，编写一些vue的内容

```js
<template>
      <div>
        vite vue2
      </div>
</template>
```

修改main.js，导入vue并实例化

```js
import Vue from 'vue';
import app from './App.vue'


new Vue({
  el:"#app",
  render:h=>h(app)
})
```

 









