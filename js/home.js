
console.log('hello');
console.log('hello again');
//alert('heya');

//variables
var b='smoothie';
console.log(b);

var number=45;
console.log(number);

// var age = prompt('how old are you?');

// document.getElementById('someText').innerHTML = age;

var num1=5.7;
console.log(num1*2);

num1 += 20;
console.log(num1);
num1-=2;
console.log(num1);
num2=11;
console.log(num2%2);

function fun() {
    console.log('function');
}

fun();

// function helloname(fName) {
//     // return console.log('Hello ' + firstName + ' ' + lastName);
//     // var firstName = prompt('What is your First name?');
//     // var result = 'Hello ' + firstName;
//     console.log('Hello ' + fName);
// }

// var firstName=prompt('What is your first name?');
// helloname(firstName);

// function addnumbers(num1, num2) {
//     var result = num1+num2;
//     console.log(result);
// }

// addnumbers(6,6);

//while loop
// var num=6;
// while(num<100) {
//     num+=1;
//     console.log(num);
// }

// for(num=30; num>=0; num--) {
//     console.log(num);
// }

// let myage=49;
let name={fName:'Shanti', lName:'Chary'};
console.log(typeof(name));
let myArray=['red','blue','yellow'];
console.log(myArray.length);
let myString="bananaorange";
// console.log(myString.indexOf('ryl'))
console.log(myString.slice(2,9));

//Objects
let student = {
    firstName: 'Shanti',
    lastName: 'Chary',
    age:49,
    height: 160,
    studentInfo: function() {
        return this.firstName + '\n' + this.lastName + '\n' + this.age;
    }
}

student.firstName='Hammy';
student.age++;

// console.log(student.firstName,student.firstName,student.lastName, student.age);

// console.log(student.studentInfo());

//conditionals
// let age = prompt('What is your age?');

// if ((age > 18) && (age<=35)) {
//     status="Yay";
// }
// else {
//     status="Nay;"
// }

// console.log(status);


//switch
// let color=prompt('What is fav color?');


// switch (color) {
//     case "red":
//         text='reddy';
//         break
//     case "blue":
//         text='blues';
//         break;
//     case "green":
//         text='grr';
//         break;
//     default:
//         text="boo";
// }

// console.log(text);



switch (20) {
    case 0:
        text="yay";
        break;
    case 6:
        text="yay";
        break;
    case 9:
        text="yay";
        break;
    default:
        text="nay";
}

console.log(text);





