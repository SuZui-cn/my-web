# 从零开始学WEB前端💦——JavaScript流程控制语句

## 📓项目介绍

先做个自我介绍，本人是一个没人写前端所以就自学前端的后端程序员🙇。在此项目中我会和大家一起从零基础开始学习前端，从后端程序员的视角来看前端，受限于作者的水平本项目暂时只会更新到前端框架VUE，不会涉及node.js。该项目适合零基础的小白或者和我一样开发网站没人写前端所以自学前端的后端程序员😂。

该项目的学习顺序是按照我自己学习时总结出来的，其中的每个知识点都是我认真去理解的，同时也查了很多的资料，所有的参考资料我都放在了文章末尾。尊重开源，尊重知识产权。每一个案例我都亲手写过并觉得不错才放上去的。每次的代码和笔记我都放在了开源仓库里，有需要的同学请不要吝啬给我一个star。如果觉得本文写的不错的话记得点赞+关注，你们的支持是我坚持下去的动力😃。

> 别来春半，触目柔肠断。砌下落梅如雪乱，拂了一身还满。
> 雁来音信无凭，路遥归梦难成。离恨恰如春草，更行更远还生。
>
> ——李煜《清平乐·别来春半》

语雀地址：[https://www.yuque.com/beilayanmen](https://www.yuque.com/beilayanmen)

Github地址：[https://github.com/SuZui-cn/my-web](https://github.com/SuZui-cn/my-web)

Gitee地址：[https://gitee.com/north_gate/my-web](https://gitee.com/north_gate/my-web)

个人博客地址：[https://foollyone.cn/](https://foollyone.cn/)

## ⌨本文知识点

* 流程控制语句
  * 条件语句
    * if判断
    * switch判断
  * 循环语句
    * for循环
    * while循环
    * do...while循环
* 函数
* 总结 ECMAScript

<!--more-->

最近在写一个网站，所以更新速度变慢了。不过依然会持续更新。这章的内容是流程控制和函数，实践比较多，所以建议多写一下例子。

## 流程控制语句

### 条件语句

在现实生活中有很多需要进行判断的情况，比如：早上第一讲的网课。如下图

***pass：矩形表示要做的处理，菱形表示判断。***

![image-20220309222255990](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220309222255990.png)

如果用代码的视角来看的话菱形就是我们的`if`判断，为是或者为否就是语句的不同分支。

#### if判断

```javascript
var study = true;
if (study) {
  //括号中的值为真时执行这里
  console.log('好好学习，天天向上');
} else {
  //括号为假的时候执行这里
  console.log('躺平');
}
```

![image-20220309223809054](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220309223809054.png)

同时括号里可以是表达式

![image-20220309223928316](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220309223928316.png)

语法结构如下：

```javascript
1. 语法结构  if 如果  else 否则
if (条件表达式) {
    // 执行语句1
} else {
    // 执行语句2 
}
2. 执行思路 如果表达式结果为真 那么执行语句1  否则  执行语句2
```

比如我们用一个判断闰年的案例来看

```javascript
//prompt是弹出输入框
var year = prompt('请您输入年份：');
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    alert('您输入的年份是闰年');
} else {
    alert('您输入的年份是平年');
}
```

![image-20220309224307314](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220309224307314.png)

我们输入`2022`。

![image-20220309224344124](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220309224344124.png)

得到结果为`平年`。

![image-20220309224354813](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220309224354813.png)

如果输入`2020`。

![image-20220309224526019](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220309224526019.png)

得到结果为`平年`。

![image-20220309224556324](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220309224556324.png)

同时`if...else`是可以嵌套使用的。

语句结构如下：

```javascript
<script>
    // 1. 多分支语句   就是利用多个条件来选择不同的语句执行 得到不同的结果  多选1 的过程
    // 2. if else if语句是多分支语句
    // 3. 语法规范
    if (条件表达式1) {
        // 语句1;
    } else if (条件表达式2) {
        // 语句2;
    } else if (条件表达式3) {
        // 语句3;
    } else {
        // 最后的语句;
    }
    // 4. 执行思路
    // 如果条件表达式1 满足就执行 语句1 执行完毕后，退出整个if 分支语句  
    // 如果条件表达式1 不满足，则判断条件表达式2  满足的话，执行语句2 以此类推
    // 如果上面的所有条件表达式都不成立，则执行else 里面的语句
    // 5. 注意点
    // (1) 多分支语句还是多选1 最后只能有一个语句执行
    // (2) else if 里面的条件理论上是可以任意多个的
    // (3) else if 中间有个空格了
</script>
```

我们来看一个嵌套判断的例子：

```javascript
//  伪代码       按照从大到小判断的思路
// 弹出prompt输入框，让用户输入分数（score），把这个值取过来保存到变量中
// 使用多分支 if else if 语句来分别判断输出不同的值
var score = prompt('请您输入分数:');
if (score >= 90) {
  alert('宝贝，你是我的骄傲');
} else if (score >= 80) {
  alert('宝贝，你已经很出色了');
} else if (score >= 70) {
  alert('你要继续加油喽');
} else if (score >= 60) {
  alert('孩子，你很危险');
} else {
  alert('熊孩子，我不想和你说话，我只想用鞭子和你说话');
}
```

这里给大家补充一个知识点`三元运算符`

```javascript
// 1. 有三元运算符组成的式子我们称为三元表达式
// 2. ++num     3 + 5     ? :
// 3. 语法结构 
// 条件表达式 ？ 表达式1 ： 表达式2
// 4. 执行思路
// 如果条件表达式结果为真 则 返回 表达式1 的值 如果条件表达式结果为假 则返回 表达式2 的值
// 5. 代码体验
var num = 10;
var result = num > 5 ? '是的' : '不是的'; // 我们知道表达式是有返回值的
console.log(result);
// if (num > 5) {
//     result = '是的';
// } else {
//     result = '不是的';
// }
```

#### switch判断

同时在JavaScript里还有一个条件判断的关键字`switch`，

```javascript
// 1. switch 语句也是多分支语句 也可以实现多选1
// 2. 语法结构 switch 转换、开关  case 小例子或者选项的意思
// switch (表达式) {
//     case value1:
//         执行语句1;
//         break;
//     case value2:
//         执行语句2;
//         break;
//         ...
//         default:
//             执行最后的语句;
// }
// 3. 执行思路  利用我们的表达式的值 和 case 后面的选项值相匹配 如果匹配上，就执行该case 里面的语句  如果都没有匹配上，那么执行 default里面的语句
// 4. 代码验证
switch (8) {
    case 1:
        console.log('这是1');
        break;
    case 2:
        console.log('这是2');
        break;
    case 3:
        console.log('这是3');
        break;
    default:
        console.log('没有匹配结果');
}
```

但是`switch` 存在一个缺陷，那就是必须去`case` 一个条件，这种情况会导致后期的维护困难，所以在这里就不过多的讲述`switch` 。

### 循环语句

循环就是不断的重复某个操作（人类的本质就是复读机？）

#### for循环

先介绍用的最多的`for`循环。

```javascript
// 1. for 重复执行某些代码， 通常跟计数有关系
// 2. for 语法结构
// for (初始化变量; 条件表达式; 操作表达式) {
//     // 循环体
// }
// 3. 初始化变量 就是用var 声明的一个普通变量， 通常用于作为计数器使用 
// 4. 条件表达式 就是用来决定每一次循环是否继续执行 就是终止的条件
// 5. 操作表达式 是每次循环最后执行的代码 经常用于我们计数器变量进行更新（递增或者递减）
// 6. 代码体验 我们重复打印100局 你好
for (var i = 1; i <= 100; i++) {
    console.log('你好吗');
}
```

![image-20220309230032655](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220309230032655.png)

再来看一个案例，求班级平均分。

```javascript
// 弹出输入框输入总的班级人数(num)
// 依次输入学生的成绩（ 保存起来 score）， 此时我们需要用到
// for 循环， 弹出的次数跟班级总人数有关系 条件表达式 i <= num
// 进行业务处理: 计算成绩。 先求总成绩（ sum）， 之后求平均成绩（ average）
// 弹出结果
var num = prompt('请输入班级的总人数:'); // num 总的班级人数
var sum = 0; // 求和的变量
var average = 0; // 求平均值的变量
for (var i = 1; i <= num; i++) {
  var score = prompt('请您输入第' + i + '个学生成绩');
  // 因为从prompt取过来的数据是 字符串型的需要转换为数字型
  sum = sum + parseFloat(score);
}
average = sum / num;
alert('班级总的成绩是' + sum);
alert('班级平均分是：' + average);
```

循环也是可以嵌套的。

双重for循环。

```javascript
// 1. 双重for循环 语法结构
// for (外层的初始化变量; 外层的条件表达式; 外层的操作表达式) {
//     for (里层的初始化变量; 里层的条件表达式; 里层的操作表达式) {
//         // 执行语句;
//     }
// }
// 2. 我们可以把里面的循环看做是外层循环的语句
// 3. 外层循环循环一次， 里面的循环执行全部
// 4. 代码验证
for (var i = 1; i <= 3; i++) {
    console.log('这是外层循环第' + i + '次');
    for (var j = 1; j <= 3; j++) {
        console.log('这是里层的循环第' + j + '次');
    }
}
```

使用JavaScript打印九九乘法表。

```javascript
// 九九乘法表
// 一共有9行，但是每行的个数不一样，因此需要用到双重 for 循环
// 外层的 for 循环控制行数 i ，循环9次 ，可以打印 9 行  
// 内层的 for 循环控制每行公式  j  
// 核心算法：每一行 公式的个数正好和行数一致， j <= i;
// 每行打印完毕，都需要重新换一行
for (var i = 1; i < 10; i++) {
  for (var j = 1; j <= i; j++) {
    document.write(j + '*' + i + '=' + i * j + '&nbsp&nbsp');
  }
  document.write('<br>');
}
```

![image-20220309230743936](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220309230743936.png)

#### while循环

除了`for`循环之外，JavaScript常用的循环还有`while` 循环。

```javascript
// 1. while 循环语法结构  while 当...的时候
// while (条件表达式) {
//     // 循环体
// }
// 2. 执行思路  当条件表达式结果为true 则执行循环体 否则 退出循环
// 3. 代码验证
var num = 1;
while (num <= 100) {
    console.log('好啊有');
    num++;
}
// 4. 里面应该也有计数器 初始化变量
// 5. 里面应该也有操作表达式  完成计数器的更新 防止死循环
```

计算100以内数字之和。

```javascript
var sum = 0;
var j = 1;
while (j <= 100) {
  sum += j;
  j++;
}
console.log(sum);
```

![image-20220309231143486](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220309231143486.png)

#### do...while循环

最后一个是`do...while` 循环

```javascript
// 1.do while 循环 语法结构
do {
    // 循环体
} while (条件表达式)
// 2.  执行思路 跟while不同的地方在于 do while 先执行一次循环体 在判断条件 如果条件表达式结果为真，则继续执行循环体，否则退出循环
// 3. 代码验证
var i = 1;
do {
    console.log('how are you?');
    i++;
} while (i <= 100)
// 4. 我们的do while 循环体至少执行一次
```

`do...while`循环和`while` 循环最大的区别在于`do...while` 无论如何至少都会执行一次。

## 函数

函数对任何语言来说都是一个核心的概念。通过函数可以封装任意多条语句，而且可以在任何地方、任何时候调用执行。ECMAScript中的函数使用function关键字来声明，后跟一组参数以及函数体。函数的基本语法如下所示：

```javascript
function 函数名(形参){
    //表达式
}
```

这个函数可以通过其函数名来调用，后面还要加上一对圆括号和参数（圆括号中的参数如果有多个，可以用逗号隔开）。

![image-20220309231828130](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220309231828130.png)

ECMAScript中的函数在定义时不必指定是否返回值。实际上，任何函数在任何时候都可以通过return语句后跟要返回的值来实现返回值。

![image-20220309232030117](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220309232030117.png)

函数会在执行完return语句之后停止并立即退出。因此，位于return语句之后的任何代码都永远不会执行。

![image-20220309232200713](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220309232200713.png)

**pass：return语句也可以不带有任何返回值  **

### 理解参数

> ECMAScript函数的参数与大多数其他语言中函数的参数有所不同。ECMAScript函数不介意传递进来多少个参数，也不在乎传进来参数是什么数据类型。也就是说，即便你定义的函数只接收两个参数，在调用这个函数时也未必一定要传递两个参数。可以传递一个、三个甚至不传递参数，而解析器永远不会有什么怨言。之所以会这样，原因是ECMAScript中的参数在内部是用一个数组来表示的。函数接收到的始终都是这个数组，而不关心数组中包含哪些参数（如果有参数的话）。如果这个数组中不包含任何元素，无所谓；如果包含多个元素，也没有问题。实际上，在函数体内可以通过arguments对象来访问这个参数数组，从而获取传递给函数的每一个参数。
>
> ——Nicholas C.Zakas《JavaScript高级程序设计（第三版）》

### JavaScript没有方法重载

> ECMAScript函数不能像传统意义上那样实现重载。而在其他语言（如Java）中，可以为一个函数编写两个定义，只要这两个定义的签名（接受的参数的类型和数量）不同即可。如前所述，ECMAScirpt函数没有签名，因为其参数是由包含零或多个值的数组来表示的。而没有函数签名，真正的重载是不可能做到的。



## 总结 ECMAScript

通过本节和上一节的介绍，关于ECMAScript大致就介绍完了，但是如果是要从事前端的同学，强烈建议深入的学习一下，这三本书都是作者看过觉得很不错的书，很推荐看一下。

![image-20220309232724191](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220309232724191.png)

> JavaScript的核心语言特性在ECMA-262中是以名为ECMAScript的伪语言的形式来定义的。ECMAScript中包含了所有基本的语法、操作符、数据类型以及完成基本的计算任务所必需的对象，但没有对取得输入和产生输出的机制作出规定。理解ECMAScript及其纷繁复杂的各种细节，是理解其在Web浏览器中的实现——JavaScript的关键。
>
> ——Nicholas C.Zakas《JavaScript高级程序设计（第三版）》

以下简要总结了ECMAScript中基本的要素。

* ❏ ECMAScript中的基本数据类型包括Undefined、Null、Boolean、Number和String。
* ❏ 与其他语言不同，ECMScript没有为整数和浮点数值分别定义不同的数据类型，Number类型可用于表示所有数值。
* ❏ ECMAScript中也有一种复杂的数据类型，即Object类型，该类型是这门语言中所有对象的基础类型。
* ❏ 严格模式为这门语言中容易出错的地方施加了限制。
* ❏ ECMAScript提供了很多与C及其他类C语言中相同的基本操作符，包括算术操作符、布尔操作符、关系操作符、相等操作符及赋值操作符等。
* ❏ ECMAScript从其他语言中借鉴了很多流控制语句，例如if语句、for语句和switch语句等。ECMAScript中的函数与其他语言中的函数有诸多不同之处。
* ❏ 无须指定函数的返回值，因为任何ECMAScript函数都可以在任何时候返回任何值。
* ❏ 实际上，未指定返回值的函数返回的是一个特殊的undefined值。
* ❏ ECMAScript中也没有函数签名的概念，因为其函数参数是以一个包含零或多个值的数组的形式传递的。以下简要总结了ECMAScript中基本的要素。
* ❏ ECMAScript中的基本数据类型包括Undefined、Null、Boolean、Number和String。
* ❏ 与其他语言不同，ECMScript没有为整数和浮点数值分别定义不同的数据类型，Number类型可用于表示所有数值。
* ❏ ECMAScript中也有一种复杂的数据类型，即Object类型，该类型是这门语言中所有对象的基础类型。
* ❏ 严格模式为这门语言中容易出错的地方施加了限制。
* ❏ ECMAScript提供了很多与C及其他类C语言中相同的基本操作符，包括算术操作符、布尔操作符、关系操作符、相等操作符及赋值操作符等。
* ❏ ECMAScript从其他语言中借鉴了很多流控制语句，例如if语句、for语句和switch语句等。ECMAScript中的函数与其他语言中的函数有诸多不同之处。
* ❏ 无须指定函数的返回值，因为任何ECMAScript函数都可以在任何时候返回任何值。
* ❏ 实际上，未指定返回值的函数返回的是一个特殊的undefined值。
* ❏ ECMAScript中也没有函数签名的概念，因为其函数参数是以一个包含零或多个值的数组的形式传递的。

x