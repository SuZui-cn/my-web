# 从零开始学WEB前端💦——网页的行为——JavaScript基础（2）

## 📓项目介绍

先做个自我介绍，本人是一个没人写前端所以就自学前端的后端程序员🙇。在此项目中我会和大家一起从零基础开始学习前端，从后端程序员的视角来看前端，受限于作者的水平本项目暂时只会更新到前端框架VUE，不会涉及node.js。该项目适合零基础的小白或者和我一样开发网站没人写前端所以自学前端的后端程序员😂。

该项目的学习顺序是按照我自己学习时总结出来的，其中的每个知识点都是我认真去理解的，同时也查了很多的资料，所有的参考资料我都放在了文章末尾。尊重开源，尊重知识产权。每一个案例我都亲手写过并觉得不错才放上去的。每次的代码和笔记我都放在了开源仓库里，有需要的同学请不要吝啬给我一个star。如果觉得本文写的不错的话记得点赞+关注，你们的支持是我坚持下去的动力😃。

> 十年生死两茫茫，不思量，自难忘。千里孤坟，无处话凄凉。纵使相逢应不识，尘满面，鬓如霜。
> 夜来幽梦忽还乡，小轩窗，正梳妆。相顾无言，惟有泪千行。料得年年肠断处，明月夜，短松冈。
>
> ——苏轼《江城子·乙卯正月二十日夜记梦》

语雀地址：[https://www.yuque.com/beilayanmen](https://www.yuque.com/beilayanmen)

Github地址：[https://github.com/SuZui-cn/my-web](https://github.com/SuZui-cn/my-web)

Gitee地址：[https://gitee.com/north_gate/my-web](https://gitee.com/north_gate/my-web)

个人博客地址：[https://foollyone.cn/](https://foollyone.cn/)

## ⌨本文知识点

* 关键字和保留字
* 变量与字面量
* String 字符串
* Number 数字
* Boolean 布尔
* Undefined 未定义
* Null 对空
* Object 对象

<!--more-->

因为开学了，作者花了几天把这学期要学的内容复习了一下，同时又在编写一个网站所以就拖更了一段时间，先说一下不好意思，之后没有意外的话都会正常更新了。

作者在学习JavaScript的时候参考了红宝书（《JavaScript高级程序设计（第三版）》），所以本文大量内容来自红宝书以及百度。

## JavaScript数据类型

我们先了解一下什么是数据类型：

> 在一种程序设计语言中，变量所具有的数据种类。
>
> 数据类型是一个值的集合和定义在这个值上的一组操作的总称。
>
> 按照值的不同，高级程序设计语言中数据类型可分为两类：一类是非结构的原子类型，另一类是结构类型。
>
> 例1、在FORTRAN语言中，变量的数据类型有整型、实型、和复数型。
>
> 例2、在C语言中数据类型：基本类型和构造类型
>
> -  基本类型：整型、浮点型、字符型、指针、空类型
> -  构造类型：数组、结构、联合、枚举型、自定义
>
> ——鲁郭大侠《基本概念：数据/数据类型/数据对象/数据结构/抽象数据类型》

JavaScript的数据类型可以分为下面几种：

* 基本数据类型
  * String 字符串
  * Number 数字
  * Boolean 布尔
  * Null 对空
  * Undefined 未定义
* 复杂数据类型
  * Object 对象

> ECMAScript中有5种简单数据类型（也称为基本数据类型）：Undefined、Null、Boolean、Number和String。还有1种复杂数据类型——Object, Object本质上是由一组无序的名值对组成的。ECMAScript不支持任何创建自定义类型的机制，而所有值最终都将是上述6种数据类型之一。乍一看，好像只有6种数据类型不足以表示所有数据；但是，由于ECMAScript数据类型具有动态性，因此的确没有再定义其他数据类型的必要了。
>
> ——Nicholas C.Zakas《JavaScript高级程序设计（第三版）》

我们在开始学习数据类型之前我们需要了解一些前置知识：`typeof` ，这个操作符可以帮助我们查看一个变量的数据类型。

> 鉴于ECMAScript是松散类型的，因此需要有一种手段来检测给定变量的数据类型——typeof就是负责提供这方面信息的操作符。对一个值使用typeof操作符可能返回下列某个字符串：
>
> ❏ "undefined"——如果这个值未定义；
>
> ❏ "boolean"——如果这个值是布尔值；
>
> ❏ "string"——如果这个值是字符串；
>
> ❏ "number"——如果这个值是数值；
>
> ❏ "object"——如果这个值是对象或null；
>
> ❏ "function"——如果这个值是函数。
>
> ——Nicholas C.Zakas《JavaScript高级程序设计（第三版）》

具体使用如下

![image-20220304215525085](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304215525085.png)

### 关键字和保留字

#### 关键字

ECMA-262描述了一组具有特定用途的关键字，这些关键字可用于表示控制语句的开始或结束，或者用于执行特定操作等。按照规则，关键字也是语言保留的，不能用作标识符。以下就是ECMAScript的全部关键字（带＊号上标的是第5版新增的关键字）：

![image-20220304234851410](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304234851410.png)

#### 保留字

ECMA-262还描述了另外一组不能用作标识符的保留字。尽管保留字在这门语言中还没有任何特定的用途，但它们有可能在将来被用作关键字。以下是ECMA-262第3版定义的全部保留字：

![image-20220304234911098](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304234911098.png)

第5版把在非严格模式下运行时的保留字缩减为下列这些：

![image-20220304234929449](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304234929449.png)

在严格模式下，第5版还对以下保留字施加了限制：

![image-20220304234948617](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304234948617.png)

### 变量与字面量

#### 变量

ECMAScript的变量是松散类型的，所谓松散类型就是可以用来保存任何类型的数据。换句话说，每个变量仅仅是一个用于保存值的占位符而已。定义变量时要使用var操作符（注意var是一个关键字），后跟变量名（即一个标识符），如下所示：

![image-20220304235142777](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304235142777.png)

这行代码定义了一个名为`a`的变量，该变量可以用来保存任何值.

在此，变量a中保存了一个字符串值"hi"。像这样初始化变量并不会把它标记为字符串类型；初始化的过程就是给变量赋一个值那么简单。因此，可以在修改变量值的同时修改值的类型，如下所示：

![image-20220304235254337](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304235254337.png)

变量命名规范：

* 1、变量名由字母（A-Za-z）、数字（0-9）、英文下划线（_）或是美元符（$）组成；
* 2、严格区分大小写，Name和name是两个不同的变量；
* 3、变量名不能是数字开头，1age是错误的；
* 4、不可以使用 关键字与 保留字，例如var 、class；
* 5、尽量见名知其以，变量名必须有意义，更推荐（如var stuName;）
* 6、遵循“驼峰命名法”，变量名为合成词时，第一格单词全小写，第二个单词首字母大写；变量名只有一个单词时就全写成小写

#### 字面量

字面量，是在源代码中一个固定值的表示方法，通俗来说就是字面量如何表达这个值。

* 1、数字字面量：1、9、3
* 2、字符串字面量：'二月'，'hello world'
* 3、布尔字面量：true、false

字面量都是可以直接去使用的，但是一般不会直接使用字面量，因为直接使用非常麻烦，**变量**是更好地方法可以用来保存字面量。

### String 字符串

String类型用于表示由零或多个16位Unicode字符组成的字符序列，即字符串。字符串可以由双引号（"）或单引号（'）表示，因此下面两种字符串的写法都是有效的：

![image-20220304232113631](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304232113631.png)

String数据类型包含一些特殊的字符字面量，也叫转义序列，用于表示非打印字符，或者具有其他用途的字符。这些字符字面量如下表所示：

![image-20220304232253515](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304232253515.png)

任何字符串的长度都可以通过访问其length属性取得，例如：

![image-20220304232439802](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304232439802.png)

#### 字符串的特点

ECMAScript中的字符串是不可变的，也就是说，字符串一旦创建，它们的值就不能改变。要改变某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值的字符串填充该变量，例如：

![image-20220304232637033](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304232637033.png)

以上示例中的变量lang开始时包含字符串"Java"。而第二行代码把lang的值重新定义为"Java"与"Script"的组合，即"JavaScript"。实现这个操作的过程如下：首先创建一个能容纳10个字符的新字符串，然后在这个字符串中填充"Java"和"Script"，最后一步是销毁原来的字符串"Java"和字符串"Script"，因为这两个字符串已经没用了。这个过程是在后台发生的，而这也是在某些旧版本的浏览器（例如版本低于1.0的Firefox、IE6等）中拼接字符串时速度很慢的原因所在。但这些浏览器后来的版本已经解决了这个低效率问题。

#### 转换为字符串

要把一个值转换为一个字符串有两种方式。第一种是使用几乎每个值都有的toString()方法

![image-20220304233046590](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304233046590.png)

多数情况下，调用toString()方法不必传递参数。但是，在调用数值的toString()方法时，可以传递一个参数：输出数值的基数。默认情况下，toString()方法以十进制格式返回数值的字符串表示。而通过传递基数，toString()可以输出以二进制、八进制、十六进制，乃至其他任意有效进制格式表示的字符串值。

![image-20220304233255052](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304233255052.png)

在不知道要转换的值是不是null或undefined的情况下，还可以使用转型函数String()，这个函数能够将任何类型的值转换为字符串。String()函数遵循下列转换规则：

* ❏ 如果值有toString()方法，则调用该方法（没有参数）并返回相应的结果；
* ❏ 如果值是null，则返回"null"；
* ❏ 如果值是undefined，则返回"undefined"。

***pass：要把某个值转换为字符串，可以使用加号操作符（3.5节讨论）把它与一个字符串（""）加在一起。***

### Number 数字

Number类型使用IEEE754格式来表示整数和浮点数值（浮点数值在某些语言中也被称为双精度数值）。为支持各种数值类型，ECMA-262定义了不同的数值字面量格式。最基本的数值字面量格式是十进制整数，十进制整数可以像下面这样直接在代码中输入：

![image-20220304224540186](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304224540186.png)

除了以十进制表示外，整数还可以通过八进制（以8为基数）或十六进制（以16为基数）的字面值来表示。其中，八进制字面值的第一位必须是零（0），然后是八进制数字序列（0~7）。如果字面值中的数值超出了范围，那么前导零将被忽略，后面的数值将被当作十进制数值解析。请看下面的例子：

![image-20220304224838165](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304224838165.png)

八进制字面量在严格模式下是无效的，会导致支持该模式的JavaScript引擎抛出错误。十六进制字面值的前两位必须是0x，后跟任何十六进制数字（0~9及A~F）。其中，字母A~F可以大写，也可以小写。

在进行算术计算时，所有以八进制和十六进制表示的数值最终都将被转换成十进制数值。

![image-20220304225004791](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304225004791.png)

#### 浮点型

所谓浮点数值，就是该数值中必须包含一个小数点，并且小数点后面必须至少有一位数字。虽然小数点前面可以没有整数，但我们不推荐这种写法。以下是浮点数值的几个例子

![image-20220304225719658](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304225719658.png)

由于保存浮点数值需要的内存空间是保存整数值的两倍，因此ECMAScript会不失时机地将浮点数值转换为整数值。显然，如果小数点后面没有跟任何数字，那么这个数值就可以作为整数值来保存。同样地，如果浮点数值本身表示的就是一个整数（如1.0），那么该值也会被转换为整数，如下面的例子所示：

![image-20220304225840903](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304225840903.png)

对于那些极大或极小的数值，可以用e表示法（即科学计数法）表示的浮点数值表示。用e表示法表示的数值等于e前面的数值乘以10的指数次幂。ECMAScript中e表示法的格式也是如此，即前面是一个数值（可以是整数也可以是浮点数），中间是一个大写或小写的字母E，后面是10的幂中的指数，该幂值将用来与前面的数相乘。下面是一个使用e表示法表示数值的例子：

![image-20220304230134412](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304230134412.png)

在这个例子中，使用e表示法表示的变量foatNum的形式虽然简洁，但它的实际值则是31250000。在此，e表示法的实际含义就是“3.125乘以107”。

浮点数值的最高精度是17位小数，但在进行算术计算时其精确度远远不如整数。例如，0.1加0.2的结果不是0.3，而是0.30000000000000004。这个小小的舍入误差会导致无法测试特定的浮点数值。

#### 数值范围

由于内存的限制，ECMAScript并不能保存世界上所有的数值。ECMAScript能够表示的最小数值保存在Number.MIN_VALUE中——在大多数浏览器中，这个值是5e-324；能够表示的最大数值保存在Number.MAX_VALUE中——在大多数浏览器中，这个值是1.7976931348623157e+308。如果某次计算的结果得到了一个超出JavaScript数值范围的值，那么这个数值将被自动转换成特殊的Infinity值。具体来说，如果这个数值是负数，则会被转换成-Infinity（负无穷），如果这个数值是正数，则会被转换成Infinity（正无穷）。

如上所述，如果某次计算返回了正或负的Infinity值，那么该值将无法继续参与下一次的计算，因为Infinity不是能够参与计算的数值。要想确定一个数值是不是有穷的（换句话说，是不是位于最小和最大的数值之间），可以使用isFinite()函数。这个函数在参数位于最小与最大数值之间时会返回true，如下面的例子所示：

![image-20220304230451443](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304230451443.png)

#### NaN

NaN，即非数值（Not a Number）是一个特殊的数值，这个数值用于表示一个本来要返回数值的操作数未返回数值的情况（这样就不会抛出错误了）。例如，在其他编程语言中，任何数值除以非数值都会导致错误，从而停止代码执行。但在ECMAScript中，任何数值除以非数值会返回NaN，因此不会影响其他代码的执行。

NaN本身有两个非同寻常的特点。首先，任何涉及NaN的操作（例如NaN/10）都会返回NaN，这个特点在多步计算中有可能导致问题。其次，NaN与任何值都不相等，包括NaN本身。

![image-20220304230843080](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304230843080.png)

针对NaN的这两个特点，ECMAScript定义了isNaN()函数。这个函数接受一个参数，该参数可以是任何类型，而函数会帮我们确定这个参数是否“不是数值”。isNaN()在接收到一个值之后，会尝试将这个值转换为数值。某些不是数值的值会直接转换为数值，例如字符串"10"或Boolean值。而任何不能被转换为数值的值都会导致这个函数返回true。请看下面的例子：

![image-20220304231138150](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304231138150.png)

从上面的例子我们可以看到`NaN`和`‘adas’`都显示为`true`，具体原因如下：

![image-20220304231551112](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304231551112.png)

#### 数值转换

有3个函数可以把非数值转换为数值：Number()、parseInt()和parseFloat()。第一个函数，即转型函数Number()可以用于任何数据类型，而另两个函数则专门用于把字符串转换成数值。这3个函数对于同样的输入会有返回不同的结果。

Number()函数的转换规则如下。

* ❏ 如果是Boolean值，true和false将分别被转换为1和0。
* ❏ 如果是数字值，只是简单的传入和返回。
* ❏ 如果是null值，返回0。
* ❏ 如果是undefined，返回NaN。
* ❏ 如果是字符串，遵循下列规则：
  * ■ 如果字符串中只包含数字（包括前面带正号或负号的情况），则将其转换为十进制数值，即"1"会变成1,"123"会变成123，而"011"会变成11（注意：前导的零被忽略了）；
  * ■ 如果字符串中包含有效的浮点格式，如"1.1"，则将其转换为对应的浮点数值（同样，也会忽略前导零）；
  * ■ 如果字符串中包含有效的十六进制格式，例如"0xf"，则将其转换为相同大小的十进制整数值；
  * ■ 如果字符串是空的（不包含任何字符），则将其转换为0；
  * ■ 如果字符串中包含除上述格式之外的字符，则将其转换为NaN。❏ 如果是对象，则调用对象的valueOf()方法，然后依照前面的规则转换返回的值。如果转换的结果是NaN，则调用对象的toString()方法，然后再次依照前面的规则转换返回的字符串值。





### Boolean 布尔

在Boolean类型中只有两个字面量：true和false。

***pass：Boolean类型的字面值true和false是区分大小写的。也就是说，True和False（以及其他的混合大小写形式）都不是Boolean值，只是标识符。***

虽然Boolean类型的字面值只有两个，但ECMAScript中所有类型的值都有与这两个Boolean值等价的值。要将一个值转换为其对应的Boolean值，可以调用转型函数Boolean()

![image-20220304223600028](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304223600028.png)

可以对任何数据类型的值调用Boolean()函数，而且总会返回一个Boolean值。至于返回的这个值是true还是false，取决于要转换值的数据类型及其实际值。下表给出了各种数据类型及其对应的转换规则。

![image-20220304224107017](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304224107017.png)

***pass：n/a（或N/A），是not applicable的缩写，意思是“不适用”。***

### Undefined 未定义

Undefined类型中只有一个值`undefined`，先看一个例子。我们可以发现，如果一个变量被`var` 定义出来了，但是没有赋值的话他的默认值就是`undefined`。

![image-20220304220754183](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304220754183.png)

那如果我们直接打印一个没有声明的变量`c`，会怎么样呢？

![image-20220304221643813](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304221643813.png)

我们可以看到如果直接打印未定义的`c`的话会直接报错。

***pass：这里出现的报错信息我们得看得懂，具体如下：***

![image-20220304222052926](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304222052926.png)

但是如果我们使用 typeof 修饰的话，未定义的变量默认都是undefined，而不会报错。![image-20220304222223297](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304222223297.png)

> 对未初始化和未声明的变量执行typeof操作符都返回了undefined值；这个结果有其逻辑上的合理性。因为虽然这两种变量从技术角度看有本质区别，但实际上无论对哪种变量也不可能执行真正的操作。即便未初始化的变量会自动被赋予undefined值，但显式地初始化变量依然是明智的选择。如果能够做到这一点，那么当typeof操作符返回"undefined"值时，我们就知道被检测的变量还没有被声明，而不是尚未初始化。
>
> ——Nicholas C.Zakas《JavaScript高级程序设计（第三版）》

### Null 对空

Null类型是第二个只有一个值的数据类型，这个特殊的值是null。从逻辑角度来看，null值表示一个空对象指针，而这也正是使用typeof操作符检测null值时会返回"object"的原因。

![image-20220304222712426](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304222712426.png)

实际上，undefined值是派生自null值的，因此ECMA-262规定对它们的相等性测试要返回true：

![image-20220304223032360](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304223032360.png)

这里，位于null和undefined之间的相等操作符（==）总是返回true，不过要注意的是，这个操作符出于比较的目的会转换其操作数。

> 尽管null和undefined有这样的关系，但它们的用途完全不同。如前所述，无论在什么情况下都没有必要把一个变量的值显式地设置为undefined，可是同样的规则对null却不适用。换句话说，只要意在保存对象的变量还没有真正保存对象，就应该明确地让该变量保存null值。这样做不仅可以体现null作为空对象指针的惯例，而且也有助于进一步区分null和undefined。
>
> ——Nicholas C.Zakas《JavaScript高级程序设计（第三版）》

### Object 对象

ECMAScript中的对象其实就是一组数据和功能的集合。对象可以通过执行new操作符后跟要创建的对象类型的名称来创建。而创建Object类型的实例并为其添加属性和（或）方法，就可以创建自定义对象，如下所示：

![image-20220304233845860](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304233845860.png)

这个语法与Java中创建对象的语法相似；但在ECMAScript中，如果不给构造函数传递参数，则可以省略后面的那一对圆括号。也就是说，在像前面这个示例一样不传递参数的情况下，完全可以省略那对圆括号

![image-20220304233927727](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304233927727.png)

仅仅创建Object的实例并没有什么用处，但关键是要理解一个重要的思想：即在ECMAScript中，（就像Java中的java.lang.Object对象一样）Object类型是所有它的实例的基础。换句话说，Object类型所具有的任何属性和方法也同样存在于更具体的对象中。

Object的每个实例都具有下列属性和方法。

* ❏ constructor：保存着用于创建当前对象的函数。对于前面的例子而言，构造函数（constructor）就是Object()。
* ❏ hasOwnProperty(propertyName)：用于检查给定的属性在当前对象实例中（而不是在实例的原型中）是否存在。其中，作为参数的属性名（propertyName）必须以字符串形式指定（例如：o.hasOwnProperty("name")）。
* ❏ isPrototypeOf(object)：用于检查传入的对象是否是当前对象的原型。
* ❏ propertyIsEnumerable(propertyName)：用于检查给定的属性是否能够使用for-in语句来枚举。与hasOwnProperty()方法一样，作为参数的属性名必须以字符串形式指定。
* ❏ toLocaleString()：返回对象的字符串表示，该字符串与执行环境的地区对应。
* ❏ toString()：返回对象的字符串表示。
* ❏ valueOf()：返回对象的字符串、数值或布尔值表示。通常与toString()方法的返回值相同。

> 从技术角度讲，ECMA-262中对象的行为不一定适用于JavaScript中的其他对象。浏览器环境中的对象，比如BOM和DOM中的对象，都属于宿主对象，因为它们是由宿主实现提供和定义的。ECMA-262不负责定义宿主对象，因此宿主对象可能会也可能不会继承Object。

***因为对象这部分涉及到`面向对象`的思想，所以这里只会简要的介绍。***

另一种创建对象的方式是使用对象字面量表示法。

对象字面量是对象定义的一种简写形式，目的在于简化创建包含大量属性的对象的过程。下面这个例子就使用了对象字面量语法定义了与前面那个例子中相同的person对象：

![image-20220304234459493](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304234459493.png)

在这个例子中，左边的花括号（{）表示对象字面量的开始，因为它出现在了表达式上下文（expression context）中。ECMAScript中的表达式上下文指的是该上下文期待一个值（表达式）。赋值操作符表示后面是一个值，所以左花括号在这里表示一个表达式的开始。同样的花括号，如果出现在一个语句上下文（statement context）中，例如跟在if语句条件的后面，则表示一个语句块的开始。然后，我们定义了name属性，之后是一个冒号，再后面是这个属性的值。在对象字面量中，使用逗号来分隔不同的属性，因此"Nicholas"后面是一个逗号。但是，在age属性的值29的后面不能添加逗号，因为age是这个对象的最后一个属性。在最后一个属性后面添加逗号，会在IE7及更早版本和Opera中导致错误。

> 在通过对象字面量定义对象时，实际上不会调用Object构造函数（Firefox 2及更早版本会调用Object构造函数；但Firefox 3之后就不会了）。

一般来说，访问对象属性时使用的都是点表示法，这也是很多面向对象语言中通用的语法。不过，在JavaScript也可以使用方括号表示法来访问对象的属性。在使用方括号语法时，应该将要访问的属性以字符串的形式放在方括号中，如下面的例子所示。

![image-20220304234723602](https://gitee.com/north_gate/drawing-bed/raw/master/images/image-20220304234723602.png)

