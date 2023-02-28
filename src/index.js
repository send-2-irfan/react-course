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

const person = {
    talk () {
        setTimeout(() => console.log('Hello', this), 1000)
    }
};

person.talk();
