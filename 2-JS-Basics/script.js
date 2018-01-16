// //Variable lecture 1
// // console.log('hello World');

// // var name = 'John';
// // console.log(name);

// // var lastName = 'smith';
// // console.log(lastName);

// // var age = 26;
// // console.log(age);

// // var fullAge = true;
// // console.log(fullAge);

// // lecture variables 2
// var name = 'John';
// var age = 26;

// // console.log(name + age);


// // var job, isMarried;

// // console.log(job)

// job = 'teacher'
// isMarried = false

// console.log(name + ' is a ' + age + " year old " + job +'. Is he married? ' + isMarried +'.');

// age = "thirty six";
// job = "driver";

// var lastName = promt("what is your last name?")
// console.log(lastName)

// alert(name + ' is a ' + age + " year old " + job +'. Is he married? ' + isMarried +'.');












// Lecture 11: Operators

// var now = 2018
// var birthYear = now - 26;



// birthYear = now - 26 *2;
// console.log(birthYear);

// var agejohn = 30;
// var agemark = 30;

// agejohn = agemark =(3 + 5) * 4 - 6;
// console.log(agejohn);
// console.log(agemark);

// agemark *= 2;
// agejohn++
// console.log(agejohn);
// console.log(agemark);



/////////////////////////////////////////////
// Lecture 12: if/else statements

// var name = 'john';
// var age = 26;
// var isMarried = 'no';

// if (isMarried === 'yes') {
// 	console.log(name + ' is married.');
// } else {
// 	console.log(name + ' will hopefully marry soon.');
// }

// if (23==="23"){
// 	console.log("something to print...");
// }




///////////////////////////////////////////////
// Lecture 13: boolean logic and switch

var age = 35

if (age <= 19) {
	console.log('john is a teenager')
} else if(age >= 20 && age < 30){
	console.log("john is a young man.")
}
 else {
	console.log("john is a man")
}


var job = 'teacher'

job = prompt('What does john do?');

switch(job){
	case 'teacher':
		console.log( 'John teaches kids');
		break;
	case 'driver':
		console.log("John drives a cab.");
		break;
	case 'cop':
		console.log('john helps fight crime.');
		break;
	default:
		console.log('John does something else.');
}




