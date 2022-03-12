# 从零开始学WEB前端💦——VUE基础指令

## 📓项目介绍

先做个自我介绍，本人是一个没人写前端所以就自学前端的后端程序员🙇。在此项目中我会和大家一起从零基础开始学习前端，从后端程序员的视角来看前端，受限于作者的水平本项目暂时只会更新到前端框架VUE，不会涉及node.js。该项目适合零基础的小白或者和我一样开发网站没人写前端所以自学前端的后端程序员😂。

该项目的学习顺序是按照我自己学习时总结出来的，其中的每个知识点都是我认真去理解的，同时也查了很多的资料，所有的参考资料我都放在了文章末尾。尊重开源，尊重知识产权。每一个案例我都亲手写过并觉得不错才放上去的。每次的代码和笔记我都放在了开源仓库里，有需要的同学请不要吝啬给我一个star。如果觉得本文写的不错的话记得点赞+关注，你们的支持是我坚持下去的动力😃。

> 醉里挑灯看剑，梦回吹角连营。八百里分麾下炙，五十弦翻塞外声，沙场秋点兵。
> 马作的卢飞快，弓如霹雳弦惊。了却君王天下事，赢得生前身后名。可怜白发生！
>
> ——辛弃疾《破阵子·为陈同甫赋壮词以寄之》

语雀地址：[https://www.yuque.com/beilayanmen](https://www.yuque.com/beilayanmen)

Github地址：[https://github.com/SuZui-cn/my-web](https://github.com/SuZui-cn/my-web)

Gitee地址：[https://gitee.com/north_gate/my-web](https://gitee.com/north_gate/my-web)

个人博客地址：[https://foollyone.cn/](https://foollyone.cn/)

## ⌨本文知识点

* 

<!--more-->

## 案例：表单发送数据

举个例子🌰，我们需要将表单的数据发送出去，点击发送之后出现红色的发送成功提示并输出发送的数据。

先来看看正常的JS应该怎么写

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #title {
        display: none;
      }
    </style>
  </head>
  <body>
    <span id="title">发送成功</span>
    <span id="info"></span>
    <form>
      用户名：<input type="text" name="username" />
      <br />
      密码： <input type="password" name="password" />
      <br />
      <input type="button" value="提交" onclick="send()" />
    </form>

    <script>
      // 获取标签元素
      var username = document.getElementsByName('username')[0];
      var password = document.getElementsByName('password')[0];
      var title = document.getElementById('title');
      var info = document.getElementById('info');
      // 定义个对象来存储数据
      var formData = {
        username: '',
        password: '',
      };

      // 定义提交函数
      function send() {
        // 为对象赋值
        formData.username = username.value;
        formData.password = password.value;
        console.log('数据发送成功');
        // 显示发送成功
        title.style.display = 'block';
        // 输出表单数据
        info.innerHTML = JSON.stringify(formData);
      }
    </script>
  </body>
</html>
```

具体实现的效果如下。

提交前：

![image-20220311145224494](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220311145224494.png)

输入数据点击提交后：

![image-20220311150227565](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220311150227565.png)

从上面的例子我们可以看到我们进行了很多的DOM操作，光是获取标签元素就写了一大串。

接下来我们再来看看Vue是怎么实现的。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #title {
        display: none;
      }
    </style>
  </head>
  <div id="app">
    <!-- v-show绑定了data里的flag,为真时显示标签，false时隐藏标签 -->
    <!-- v-bind是属性绑定，这里绑定了style样式，v-bind标签可以省略，这里可以直接写成:style -->
    <span v-show="flag" v-bind:style="color">发送成功</span>
    <!-- 这里用插值表达式渲染文本 -->
    <span v-show="flag">{{formData}}</span>
    <form>
      <!-- v-model是数据的双向绑定，用于将data中的元素值绑定到标签上 -->
      用户名：<input type="text" v-model="formData.username" />
      <br />
      密码： <input type="password" v-model="formData.password" />
      <br />
      <!-- v-on是事件绑定，冒号后面的click表示绑定的点击事件，v-on可以省略，直接写成:click -->
      <input type="button" value="提交" v-on:click="send()" />
    </form>
  </div>

  <body>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        // data中存放数据，都是以对象的形式存储
        data: {
          formData: {
            username: '',
            password: '',
          },
          flag: false,
          color: '',
        },
        // 所有的方法都放在methods（注意：复数）里面
        methods: {
          // 定义方法
          send() {
            console.log('发送成功');
            // 是否显示提示文本
            this.flag = true;
            // 提示文本颜色
            this.color = 'color:red';
          },
        },
      });
    </script>
  </body>
</html>
```

我们可以发现，在使用Vue的时候DOM操作基本没有了，我们只需要关心数据如何渲染到页面上。

这得益于虚拟**DOM**的存在，我们在使用Vue 操作标签的时候十分容易。

***关于Vue中的虚拟DOM大家可以去看这篇文章：[https://www.cnblogs.com/fundebug/p/vue-virtual-dom.html](https://www.cnblogs.com/fundebug/p/vue-virtual-dom.html)***

![image-20220311141957521](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220311141957521.png)

## 案例：批量渲染数据

我们再来看一个案例，在这个案例中我们接收到后端传来的数据，然后我们需要将其渲染到页面上。

还是一样，我们先来看看js的写法。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    #app {
      margin: 0 auto;
      border: 1px solid;
    }
    td {
      border: 1px solid black;
    }
  </style>
  <body>
    <table id="app">
      <tr id="title"></tr>
      <tr id="link"></tr>
      <tr id="des"></tr>
      <tr id="blink"></tr>
      <tr id="host"></tr>
    </table>

    <script>
      // 这里模拟后台的数据
      var data = [
        {
          title: '阿甘正传',
          link: 'https://pan.baidu.com/share/link?shareid=2232927241&uk=122944454',
          des: '文件数: 1,分享时间: 2017-06-19T15:58:50, 文件大小: 1k',
          blink:
            'https://pan.baidu.com/share/link?shareid=2232927241&uk=122944454',
          host: 'pan.baidu.com',
          more: null,
        },
        {
          title: '阿甘正传',
          link: 'https://pan.baidu.com/share/link?shareid=3813030246&uk=2929506801',
          des: '文件数: 1,分享时间: 2016-08-05T21:54:57, 文件大小: 1k',
          blink:
            'https://pan.baidu.com/share/link?shareid=3813030246&uk=2929506801',
          host: 'pan.baidu.com',
          more: null,
        },
        {
          title: '阿甘正传',
          link: 'https://pan.baidu.com/share/link?shareid=3538914315&uk=2021822220',
          des: '文件数: 1,分享时间: 2016-02-17T13:08:25, 文件大小: 1k',
          blink:
            'https://pan.baidu.com/share/link?shareid=3538914315&uk=2021822220',
          host: 'pan.baidu.com',
          more: null,
        },
        {
          title: '阿甘正传',
          link: 'https://pan.baidu.com/share/link?shareid=335201728&uk=3429305986',
          des: '文件数: 1,分享时间: 2017-05-30T15:22:43, 文件大小: 1k',
          blink:
            'https://pan.baidu.com/share/link?shareid=335201728&uk=3429305986',
          host: 'pan.baidu.com',
          more: null,
        },
        {
          title: '阿甘正传',
          link: 'https://pan.baidu.com/share/link?shareid=850986816&uk=110376630',
          des: '文件数: 1,分享时间: 2017-04-28T12:32:16, 文件大小: 1k',
          blink:
            'https://pan.baidu.com/share/link?shareid=850986816&uk=110376630',
          host: 'pan.baidu.com',
          more: null,
        },
        {
          title: '阿甘正传',
          link: 'https://pan.baidu.com/share/link?shareid=1636323051&uk=727778634',
          des: '文件数: 1,分享时间: 2016-10-31T16:20:10, 文件大小: 1k',
          blink:
            'https://pan.baidu.com/share/link?shareid=1636323051&uk=727778634',
          host: 'pan.baidu.com',
          more: null,
        },
        {
          title: '阿甘正传',
          link: 'https://pan.baidu.com/share/link?shareid=2471845411&uk=3993130536',
          des: '文件数: 1,分享时间: 2015-10-06T16:52:52, 文件大小: 1k',
          blink:
            'https://pan.baidu.com/share/link?shareid=2471845411&uk=3993130536',
          host: 'pan.baidu.com',
          more: null,
        },
        {
          title: '阿甘正传',
          link: 'https://pan.baidu.com/share/link?shareid=3169351157&uk=911963550',
          des: '文件数: 1,分享时间: 2017-01-21T15:40:32, 文件大小: 1k',
          blink:
            'https://pan.baidu.com/share/link?shareid=3169351157&uk=911963550',
          host: 'pan.baidu.com',
          more: null,
        },
        {
          title: '阿甘正传',
          link: 'https://pan.baidu.com/share/link?shareid=1610195448&uk=4218101235',
          des: '文件数: 1,分享时间: 2015-09-20T16:42:46, 文件大小: 1k',
          blink:
            'https://pan.baidu.com/share/link?shareid=1610195448&uk=4218101235',
          host: 'pan.baidu.com',
          more: null,
        },
        {
          title: '阿甘正传',
          link: 'https://pan.baidu.com/share/link?shareid=1145328700&uk=588470598',
          des: '文件数: 1,分享时间: 2017-05-03T23:24:16, 文件大小: 1k',
          blink:
            'https://pan.baidu.com/share/link?shareid=1145328700&uk=588470598',
          host: 'pan.baidu.com',
          more: null,
        },
      ];

      // 获取DOM
      var title = document.getElementById('title');
      var link = document.getElementById('link');
      var des = document.getElementById('des');
      var blink = document.getElementById('blink');
      var host = document.getElementById('host');

      var table = document.getElementsByTagName('tbody')[0];

      // 遍历数据，并渲染到页面上
      for (var i = 0; i < data.length; i++) {
        var newTr = document.createElement('tr');
        newTr.innerHTML =
          '<td>' +
          data[i].title +
          '</td><td>' +
          data[i].link +
          '</td><td>' +
          data[i].des +
          '</td><td>' +
          data[i].blink +
          '</td><td>' +
          data[i].host +
          '</td>';
        table.appendChild(newTr);
      }
    </script>
  </body>
</html>
```

这个案例我们也可以发现，还是DOM操作太过复杂而且需要进行文本的拼接从而渲染到页面上。

之后我们再来看看Vue的写法。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    #app table {
      margin: 0 auto;
      border: 1px solid;
    }
    td {
      border: 1px solid black;
    }
  </style>
  <body>
    <div id="app">
      <table>
        <!-- v-for指令是用于遍历的，第一个参数（movie）相当于是for(i=0;i++)里的i，之后我们通过movie来获取值 -->
        <tr v-for="movie in arr">
          <td>{{movie.title}}</td>
          <td>{{movie.link}}</td>
          <td>{{movie.des}}</td>
          <td>{{movie.blink}}</td>
          <td>{{movie.host}}</td>
        </tr>
      </table>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          // 这里模拟后台的数据
          arr: [
            {
              title: '阿甘正传',
              link: 'https://pan.baidu.com/share/link?shareid=2232927241&uk=122944454',
              des: '文件数: 1,分享时间: 2017-06-19T15:58:50, 文件大小: 1k',
              blink:
                'https://pan.baidu.com/share/link?shareid=2232927241&uk=122944454',
              host: 'pan.baidu.com',
              more: null,
            },
            {
              title: '阿甘正传',
              link: 'https://pan.baidu.com/share/link?shareid=3813030246&uk=2929506801',
              des: '文件数: 1,分享时间: 2016-08-05T21:54:57, 文件大小: 1k',
              blink:
                'https://pan.baidu.com/share/link?shareid=3813030246&uk=2929506801',
              host: 'pan.baidu.com',
              more: null,
            },
            {
              title: '阿甘正传',
              link: 'https://pan.baidu.com/share/link?shareid=3538914315&uk=2021822220',
              des: '文件数: 1,分享时间: 2016-02-17T13:08:25, 文件大小: 1k',
              blink:
                'https://pan.baidu.com/share/link?shareid=3538914315&uk=2021822220',
              host: 'pan.baidu.com',
              more: null,
            },
            {
              title: '阿甘正传',
              link: 'https://pan.baidu.com/share/link?shareid=335201728&uk=3429305986',
              des: '文件数: 1,分享时间: 2017-05-30T15:22:43, 文件大小: 1k',
              blink:
                'https://pan.baidu.com/share/link?shareid=335201728&uk=3429305986',
              host: 'pan.baidu.com',
              more: null,
            },
            {
              title: '阿甘正传',
              link: 'https://pan.baidu.com/share/link?shareid=850986816&uk=110376630',
              des: '文件数: 1,分享时间: 2017-04-28T12:32:16, 文件大小: 1k',
              blink:
                'https://pan.baidu.com/share/link?shareid=850986816&uk=110376630',
              host: 'pan.baidu.com',
              more: null,
            },
            {
              title: '阿甘正传',
              link: 'https://pan.baidu.com/share/link?shareid=1636323051&uk=727778634',
              des: '文件数: 1,分享时间: 2016-10-31T16:20:10, 文件大小: 1k',
              blink:
                'https://pan.baidu.com/share/link?shareid=1636323051&uk=727778634',
              host: 'pan.baidu.com',
              more: null,
            },
            {
              title: '阿甘正传',
              link: 'https://pan.baidu.com/share/link?shareid=2471845411&uk=3993130536',
              des: '文件数: 1,分享时间: 2015-10-06T16:52:52, 文件大小: 1k',
              blink:
                'https://pan.baidu.com/share/link?shareid=2471845411&uk=3993130536',
              host: 'pan.baidu.com',
              more: null,
            },
            {
              title: '阿甘正传',
              link: 'https://pan.baidu.com/share/link?shareid=3169351157&uk=911963550',
              des: '文件数: 1,分享时间: 2017-01-21T15:40:32, 文件大小: 1k',
              blink:
                'https://pan.baidu.com/share/link?shareid=3169351157&uk=911963550',
              host: 'pan.baidu.com',
              more: null,
            },
            {
              title: '阿甘正传',
              link: 'https://pan.baidu.com/share/link?shareid=1610195448&uk=4218101235',
              des: '文件数: 1,分享时间: 2015-09-20T16:42:46, 文件大小: 1k',
              blink:
                'https://pan.baidu.com/share/link?shareid=1610195448&uk=4218101235',
              host: 'pan.baidu.com',
              more: null,
            },
            {
              title: '阿甘正传',
              link: 'https://pan.baidu.com/share/link?shareid=1145328700&uk=588470598',
              des: '文件数: 1,分享时间: 2017-05-03T23:24:16, 文件大小: 1k',
              blink:
                'https://pan.baidu.com/share/link?shareid=1145328700&uk=588470598',
              host: 'pan.baidu.com',
              more: null,
            },
          ],
        },
      });
    </script>
  </body>
</html>
```

Vue是不是很丝滑，极大的简化了DOM的操作。

通过这两个案例我们把Vue的基本指令大致的了解了一下，接下来我们详细的讲解一下这些指令。

## v-bind指令

v-bind指令的作用是属性绑定，就像上面的例子一样我们可以用这个标签将data里的值与标签属性直接绑定，这样我们就可以直接通过操作data里的数据就可以动态的修改页面标签的属性。同时v-bind属性可以简写为 **:** ，所有v-bind:style 可以被简写成 :style 。

v-bind还拥有三种修饰符，分别为．sync、.once、.camel，作用分别如下：

* .sync：用于组件props属性，进行双向绑定，即父组件绑定传递给子组件的值，无论在哪个组件中对其进行了修改，其他组件中的这个值也会随之更新。例如：`<my-child :parent.sync='parent'></my-child>`。父组件实例vm.parent将通过prop选项传递给子组件my-child，即my-child组件构造函数需要定义选项props:['parent']，便可通过子组件自身实例vm.parent获取父组件传递的数据。两个组件都共享这一份数据，不论谁修改了这份数据，组件获取的数据都是一致的。但一般不推荐子组件直接修改父组件数据，这样会导致耦合且组件内的数据不容易维护。
* .once：同．synce一样，用于组件props属性，但进行的是单次绑定。和双向绑定正好相反，单次绑定是将绑定数据传递给子组件后，子组件单独维护这份数据，和父组件的数据再无关系，父组件的数据发生变化也不会影响子组件中的数据。例如：`<my-child :parent. once='parent'></my-child>`
* .camel：将绑定的特性名字转回驼峰命名。只能用于普通HTML属性的绑定，通常会用于svg标签下的属性，例如：`<svgwidth='400' height='300' :view-box.camel='viewBox'></svg>`，输出结果即为`<svg width="400" height="300"viewBox="….."></svg>`

***pass：在Vue.js 2.0中，修饰符．syce和．once均被废弃，规定组件间仅能单向传递，如果子组件需要修改父组件，则必须使用事件机制来进行处理。***

## v-show和v-if

v-show和v-if有一个共同点：是否在界面显示元素。

他们的不同点在于：如果值为false的时候，v-if 修饰的标签不会在dom树上显示，而v-show修饰的会在dom树显示。

我们再回到刚刚到例子来看，这里我们使用的是v-show 指令。

![image-20220312090005750](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220312090005750.png)

在页面上提示文本是没有显示出来的。

![image-20220312090100135](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220312090100135.png)

但是我们打开f12来看看，虽然界面上没有显示提示文本，但是在dom树中我们还是可以找到没有显示的标签。

![image-20220312090218624](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220312090218624.png)

现在我们把v-show换成v-if，我们可以发现这次在dom树里就没有提示文本的标签。

![image-20220312090416094](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220312090416094.png)

通过上面的演示，我们了解了v-show和v-if最大的区别。在取值为false的情况下v-if的性能是优于v-show的，但是为true的情况下v-if的消耗大于v-show。

## v-model指令

v-model用于数据的双向绑定，这个指令用来在 input、select、textarea、checkbox、radio 等表单控件元素上创建双向数据绑定，根据表单上的值，自动更新绑定的元素的值。我们修改data里的数据的时候标签上面的元素也会跟着修改。

## v-on指令

v-on指令用于事件的绑定，同时v-on可以简写为 **:** , 所以在绑定点击事件的时候我们可以简写为 **:click** 。

这里我们引用一篇文章来详细解释，原文地址：[https://www.jianshu.com/p/2b79835c2187](https://www.jianshu.com/p/2b79835c2187)

```
一、直接绑定事件：
        @事件名="方法"   =>   @click="onClick"
        methods:{
              onClick:function(){
                  console.log('onClick')
            }
        }

二、绑定事件类
          v-on="{事件:方法}"        =>     v-on="{mouseenter:onEnter,mouseout:onOut}"
           methods:{
                  onEnter:function(){
                      console.log("onEnter")
                },
                onOut:function(){
                      console.log("onOut")
               },
         }
三、阻止默认形为（提交时刷新）
      v-on:事件="方法($event)"     =>      @submit="onSubmit($event)"
      methods:{
            onSubmit:function(e){
                e.preventDefault();
                console.log("onSubmit")
          }
      }
四、阻止默认形为二（提交时刷新）
        v-on:事件.行为="方法"         =>        @submit.prevent="onSubmit2"
                                           //  @submit.stop="onSubmit2"
        methods:{
              onSubmit2:function(){
                  console.log("onSubmit2")
            }
        }
五、键盘事件（最好配合阻止默认行为一起使用）
      v-on:事件.键值="方法"       =>       @keyup.enter="onEnter"
      methods:{
              onKeyup:function(){
                  console.log("onKeyup")
          }
      }
```

菜鸟教程：[https://www.runoob.com/vue2/vue-events.html](https://www.runoob.com/vue2/vue-events.html)

```
事件修饰符：
Vue.js 为 v-on 提供了事件修饰符来处理 DOM 事件细节，如：event.preventDefault() 或 event.stopPropagation()。
Vue.js 通过由点 .表示的指令后缀来调用修饰符。
 .stop - 阻止冒泡
 .prevent - 阻止默认事件
 .capture - 阻止捕获
 .self - 只监听触发该元素的事件
 .once - 只触发一次
 .left - 左键事件
 .right - 右键事件
 .middle - 中间滚轮事件
```

## v-for指令

> 循环使用 v-for 指令。
>
> v-for 指令需要以 **site in sites** 形式的特殊语法， sites 是源数据数组并且 site 是数组元素迭代的别名。

同时我们可以在 迭代元素中添加`index` 表示索引。

```
v-for="(item,index) in items"
```





