/*
1. call, apply 只能实现属性继承  构造函数每次实例化的时候都会开辟一个新的内存空间 所以一般将方法写在prototype里

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;

    //function sleep() {
    //    console.log("正在睡觉");
    //}
}

Person.prototype.sleep = function(){
    console.log("正在睡觉");
}

function Man(bread, name, age, sex) {
    Person.call(this, name, age, sex)
    this.bread = bread;
}

console.log(new Man(10));

2.原型继承  会发现父级的__proto__中含有子级的方法 所以说原型继承会污染父级
function Person(name,age){
    this.age = age;
    this.name = name;
} 

function Man(bread){
    this.bread = bread;
}

Man.prototype = Person.prototype
Person.prototype.work = function(){
    console.log(1)
}
Man.prototype.sleep = function(){
    console.log(2)
}
var a = new Man(20)
console.log(a)
var b = new Person(3,3)
console.log(b)

3.原型拷贝 就是新建一个对象将父级的prototype中的属性逐一遍历然后赋值给对象(在没有改变this指向的情况下将地址拷贝了一份赋给子集)
    function Person(name,age,sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    Person.prototype.work = function(){
        console.log("工作");
    }
    function Man(bread){
        this.bread = bread;
    }
    Man.prototype.sleep = function(){
        console.log("睡觉");
    }
    for(var key in Person.prototype){
        Man.prototype[key] = Person.prototype[key];
    }
    var a = new Man(10);
    console.log(a);
    var b = new Person();
    console.log(b)
4.原型链继承是通过__proto__ 连接起来的一根链条 每个函数都有一个prototype属性这个属性指向一个对象这个对象就是原型对象
    原型链是不推荐使用的 因为在子集里面会多了很多无用的属性和没有constructor
    function Person(name,age){
        this.name = name;
        this.age = age;
    }
    Person.prototype.work = function(){
        console.log("工作");
    }
    function Man(bread){
        this.bread = bread;
    }
   

    Man.prototype.sleep = function(){
        console.log("睡觉");
    }
    Man.prototype = new Person()
    
    var a = new Man(10);
    console.log(a)
    var b = new Person(20,30)
    console.log(b);
5.寄生继承 根据原型链继承总结出当使用原型链继承时会污染父级和没有constructor那么我们就另外创建一个函数让这个函数被污染
    然后给这个函数添加一个constructor属性   这就是寄生继承  给子类写的方法要写在继承之后要不然会被覆盖掉
        function Person(name,age){
        this.name = name;
        this.age = age;
    }
    Person.prototype.work = function(){
        console.log("工作");
    }
    function Man(bread){
        this.bread = bread;
    }
   function fn(){};
   fn.prototype = Person.prototype;
   Man.prototype = new fn();
   Man.prototype.constuctor = Man
   
   Man.prototype.sleep = function(){
       console.log("睡觉");
   }
   var a = new Man(10);
   console.log(a)
   var b = new Person(20,30)
   console.log(b);

6.混合式继承：因为子集的prototype中含有constructor和__proto__所以我们可以直接将这个对象进行重置
   function Person(name,age){
        this.name = name;
        this.age = age;
    }
    Person.prototype.work = function(){
        console.log("工作");
    }
    function Man(bread){
        this.bread = bread;
    }
    
    Man.prototype = {
        constuctor:Man,
        __proto__:Person.prototype
    }

    Man.prototype.sleep = function(){
        console.log("睡觉");
    }

    var a = new Man(10);
    console.log(a)
    var b = new Person(20,30)
    console.log(b);
7.es6继承

*/



