///////////////////////////////////////Let VS Const VS Var///////////////////////////////////////
// let -> block scope variable
// var -> function scope variable
// const -> block scope variable

// function sayHello () {
//   for(let i = 0 ; i<5 ; i++) {
//     console.log(i);
//   }
// //   console.log(i)
// }

// sayHello();

// const num = 5;
// num = 5 ;

//////////////////////////////////Objects/////////////////////////////////////

// const person = {
//     name: 'Irfan',
//     walk: function() {},
//     talk() {console.log('Person Talks')},
//     eat() {console.log('Person Eats')}
// };

// person.eat();

// console.log(person.name);
// console.log(person['name']);

// const targetMember = 'name';
// console.log(person[targetMember.value]);

///////////////////////////////This Keyword////////////////////////////////////

// const person = {
//     name: 'Irfan',
//     walk() {
//         console.log(this);
//     }
// };

// person.walk();

// const walk = person.walk;
// walk(); // this returns the reference to the window object which is a global object in javascript

/////////////////////////////////Binding This Keyword////////////////////////////////////

// const person = {
//     name: 'Irfan',
//     walk() {
//         console.log(this);
//     }
// };

// person.walk();

// const walk = person.walk.bind(person);
// walk(); 


//////////////////////////////////Arrow Functions////////////////////////////////////

// function squaree(n) {
//     return n*n ;
// }
// console.log(squaree(3));

// const square = function (n) {
//     return n * n;
// }

// console.log(square(3));


// const square1 = (n) => {
//     return n* n ;
// }

// console.log(square1(3));

// const square2 = (n) => n*n ;

// console.log(square2(3));

// const square3 = n => n*n ;

// console.log(square3(3));


// const ducks = [
//     {id: 1, name: 'duck1', isAlive: true},
//     {id: 2, name: 'duck2', isAlive: true},
//     {id: 3, name: 'duck3', isAlive: false}
// ]

// const aliveDucks = ducks.filter(duck => duck.isAlive);

// console.log(ducks.map(duck => duck.id))

// console.log(aliveDucks); 

///////////////////////////////////////////////Arrow functions and this keyword///////////////////////////////////////////////  

// const person = {
//     talk () {
//         setTimeout(() => console.log('Hello', this), 1000)
//     }
// };

// person.talk();

//////////////////////////////////////////////map function ///////////////////////////////////////

// const sheetColors = [
//     'red' ,
//     'green' ,
//     'blue' ,
//     'yellow' ,
//     'orange' ,
// ]

// const sheets = sheetColors.map(sheet => `<div>${sheet}</div>`);

// console.log(sheets);


// const objects = [
//     {id: 1, name: 'object1', isAlive: true},
//     {id: 2, name: 'object2', isAlive: true},
//     {id: 3, name: 'object3', isAlive: false},
//     {id: 4, name: 'object4', isAlive: true},
//     {id: 5, name: 'object5', isAlive: false}
// ]

// const aliObjects = objects.filter(object => object.isAlive)

// console.log(aliObjects);


//////////////////////////////////////////////Object Destructuring/////////////////////////////////////
// const obj ={
//     name: 'Irfan',
//     age: 25,
//     address: {
//         city: 'Karachi',
//         country: 'Pakistan'
//     }
// }

// const { name, age, address: {city, country} } = obj;

// console.log("Name: " + name, ", Age: " + age, ', City: ' + city,', Country: '+ country);

// const arr1 = [1,2,3,4,5,6,7,8,9,10];
// const arr2 = [11,12,13,14,15,16,17,18,19,20];

// const arr3 = [...arr1, 'array 2', ...arr2]

// console.log(arr3);

// const obj1 = {
//     name: 'Irfan'
// }
// const obj2 = {
//     age: 25
// }

// const combined = {...obj1, ...obj2, location: 'Karachi'};

// console.log(combined);

// const array1 = [1,2,30]
// const clone = array1.slice(0,3)

// console.log(clone);


//////////////////////////////////////////////Classes/////////////////////////////////////
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     walk() {
//         console.log('Person is walking ...');
//     }
// }

// const person = new Person('Irfan');
// console.log(person.name)
// console.log(person.walk(this))

// class Teacher extends Person {
//     constructor(name, degree) {
//         super(name);
//         this.degree = degree ;
//     }
//     teach() {
//         console.log("Teacher is teaching ...");
//     }
// }

// const teacher = new Teacher('Irfan' , 'MCS');

// console.log(teacher.name);
// console.log(teacher.teach());
