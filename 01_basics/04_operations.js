// 1.Arithmetic operaters
console.log('Arithmetic operaters');

console.log(3 + 3);   //Addition
console.log(3 - 3);   //Subtraction
console.log(3 * 3);   //Multiplication
console.log(3 ** 3);  //Exponent
console.log(7 / 3);   //Division (It will divide completly.)
console.log(8 % 3);   //Modulus (It will give remainder.)

/************** UNARY OPERATOR ***************/
console.log('UNARY OPERATOR');

// Pre-increment (Change, then use)
let preAge = 55;
console.log(++preAge);


//Post-increment (Use, then change)
let postAge = 55;
console.log(postAge++);
console.log(postAge);


// Pre-Decrement (Change, then use)
let pre_age = 55;
console.log(--pre_age);


//Post-Decrement (Use, then change)
let post_newAge = 55;
console.log(post_newAge--);
console.log(post_newAge);


// 2.Assignment Operators
console.log('Assignment Operators');

let a = 5;
let b = 3;

console.log(a = b);  //equalto means hota hai ki kisi variable ke andar dusre variable ke value ko assign kar dena.

console.log(a += b);  //plus equalto ka matlab hota hai ki (a = a+b).

console.log(a -= b);  //minus equalto ka matlab hota hai ki (a = a-b).

console.log(a *= b);  //multiply equalto ka matlab hota hai ki (a = a*b).

console.log(a **= b);  //exponent equalto ka matlab hota hai ki (a = a**b).

console.log(a /= b);  //divide equalto ka matlab hota hai ki (a = a/b).

console.log(a %= b);  //modulus equalto ka matlab hota hai ki (a = a%b).