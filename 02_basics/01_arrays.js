//Declear array
let heroes = ['ironman', 'thor', 'hulk', 'ant-man', 'loki'];
let dc_heroes = ['saktiman', 'superman', 'wonder woman'];

//Property
// console.log(heroes.length);

//Array indices
// console.log(heroes[2]);

//Methods
let my_push = heroes.push("spiderman"); //push() jo hai wah value ko last me add karta hai.
// console.log(heroes);

let my_pop = heroes.pop(); //pop() jo hai wah last value ko delete karta hai.
// console.log(heroes);

let my_unshift = heroes.unshift("captain america");  //unshift() jo hai wah start me value ko add karta hai.
// console.log(heroes);

let my_shift = heroes.shift();  //shift() jo hai wah start value ko delete karta hai.
// console.log(heroes);

let my_includes = heroes.includes("spiderman");  //includes check karta hai ki value array me hai ki nahi.
// console.log(my_includes);

let my_indexof = heroes.indexOf('loki');  //indexof batata hai ki yah value kis index pe hai.
// console.log(my_indexof);

let my_join = heroes.join();  //join ka kam hai ki array ko string me convert karna.
// console.log(my_join);
// console.log(typeof my_join);

let my_tostring = heroes.toString();  //tostring ka vi kam hai ki array ko string me convert karna.
// console.log(my_tostring);
// console.log(typeof my_tostring);

let my_slice = heroes.slice(1, 4);  //slice jo hai wah piece of array copy kar ke deta hai. original value me change nahi karta hai and last value ko include nahi karta hai.
// console.log(my_slice);
// console.log(heroes);

//let my_splice = heroes.splice(1, 3); //splice jo hai wah piece of array ko cut kar ke deta hai. Aur yah original value me change karta hai and last value ko includes nahi karta hai.
// console.log(my_splice);
// console.log(heroes);

let my_splices = heroes.splice(4, 0, "avengers", "iron-man 3");  //splice(startIdx, delCount, newElement) isme hum add, remove, replace bhi kar sakte hai.
// console.log(heroes);

let my_concat = heroes.concat(dc_heroes);  //concat sirf two array ko jodne ka kam karta hai.
// console.log(my_concat);




















