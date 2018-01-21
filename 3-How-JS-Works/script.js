///////////////////////////////////////
// Lecture 30: Hoisting

// // functions
// calcage(1988);

// function calcage(year) {
//     console.log(2018 - year);
// }



// // retirement(1988);
// var retirement  = function(year) {
//     console.log(65 - (2018-year));
// }



// // variation

// console.log(age);
// var age = 23;
// console.log(age);

// function foo() {
//     console.log(age);
//     var age = 65;
//     console.log(age);
// }

// foo();
// console.log(age);




///////////////////////////////////////
// Lecture 31: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }



// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     // console.log(a + b + c + d);
//     console.log(a+d)
// }




///////////////////////////////////////
// Lecture 32: The this keyword

// console.log(this);

// calcAge(1988)

// function calcAge(year) {
//     console.log(2018-year);
//     console.log(this)
// }



var john = {
    name:"john",
    yearOfBirth: 1988,
    calcAge: function() {
        console.log(this);
        console.log(2018-this.yearOfBirth)

        // function innerFunc() {
        //     console.log(this);
        // }

        // innerFunc();
    }
}

john.calcAge();


var mike = {
    name: "mike",
    yearOfBirth: 1984
};


mike.calcAge = john.calcAge;
mike.calcAge();
