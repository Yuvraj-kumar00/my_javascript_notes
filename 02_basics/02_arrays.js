let heroes = ['ironman', 'thor', 'hulk', 'ant-man', 'loki'];
let dc_heroes = ['saktiman', 'superman', 'wonder woman'];
let south_heroes = ['rocky', 'prabash', 'allu-arjun', 'dhanush'];

let my_spread = [...heroes, ...dc_heroes, ...south_heroes];  //spread(...) ka kam hai multiple array ko ek sath add karna.
//console.log(my_spread);

let another_array = [1, 3, 4, 5, [9, 0, 8], 6, [2, 5, 6, 1, [9, 5, 8, 6]], 5];  //flat() ka kam hai array ke andar multiple array ko single array me convert kar dena.
let real_another_array = another_array.flat(2);
console.log(real_another_array);

let my_isarray = Array.isArray(heroes);  //isArray() ka kam hai variables ko check karna ka ki wah array hai ya nahi.
console.log(my_isarray);

let my_isarrays = Array.isArray('yuvraj kumar');
console.log(my_isarrays);

let my_from = Array.from("yuvraj kumar");  //from ka kam hai ki kisi vi value ko array me convert kar dena. string ho ya object.
console.log(my_from);


let score1 = 100;
let score2 = 200;
let score3 = 300;
let my_of = Array.of(score1, score2, score3); //of ka kam hai ki multiple variable ya array ko array me convert karna.
console.log(my_of);

let mynew_off = Array.of(heroes, dc_heroes, south_heroes);
console.log(mynew_off);


