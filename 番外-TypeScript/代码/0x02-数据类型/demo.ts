// 数字
const numberA:number = 123
const numberB:number = 3.14
const numberC:number = -1
// 字符串
const stringA:string = 'hello world'
let color: string = "blue";
color = 'red';
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month.`;
// 布尔型
const booleanA:boolean = true
const booleanB:boolean = false
// 字面量
let literalA: 'A'|'B'|'C'
let literalB: 1|2|3
// any
let anyA:any;
anyA = 'string'
anyA = 123
anyA = false

// unknown
let unknownA:unknown = 'string'
unknownA = 1234

// void
const voidA:void = undefined

// never
function never():never{
  throw new Error("哦豁")
}

// object
const objectA:object = {}
let objectB: {name: string, age?: number};
objectB = {name: '孙悟空', age: 18};

// [propName: string]: any 表示任意类型的属性
let objectC: {name: string, [propName: string]: any};
objectC = {name: '猪八戒', age: 18, gender: '男'};

// array
const arrayA:number[]=[1,2,3]
const arrayB:Array<number> = [1,2,3]

// tuple
const tupleA:[string, number] = ['abc', 123]

// enum
enum Animal{
  'Dog',
  'Cat',
  'Wolf'
}
const enumA:Animal=Animal.Dog
const enumB:Animal=Animal.Cat
const enumC:Animal=Animal.Wolf

// 函数
let d: (a: number ,b: number)=>number;
// d = function (n1: string, n2: string): number{
//     return 10;
// } 

