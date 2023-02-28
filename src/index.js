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

const person = {
    name: 'Irfan',
    walk() {
        console.log(this);
    }
};

person.walk();

const walk = person.walk;
walk();