let score = 40000000;
let new_score = 465.5966;

//Method
let my_string = score.toString();  //toString is convert number to a string.
console.log(my_string);
console.log(typeof my_string);

let my_fixed = score.toFixed(2);  //toFixed jo hai wah decimal ke bad kitna zero hona chahiye woh define karta hai.
console.log(my_fixed);

let my_precision = new_score.toPrecision(4);
console.log(my_precision);

let my_localstring = score.toLocaleString("en-IN");  //toLocalString ka kam jo hai wah counting number ko united state ya indian state ke anusar change karna hota hai.
console.log(my_localstring);

let my_parseInt = parseInt(new_score);  //ParseInt ka kam jo hai wah decimal value ko integer me convert karna hai.
console.log(my_parseInt);

let my_parsefloat = parseFloat(new_score);
console.log(my_parsefloat);





