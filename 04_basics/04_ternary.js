/***************** Ternary Operators **************/

//Yah if, else ko short form me likhe ka kam karta hai.

//condition ? true output : false output;

let age = 35;

console.log(age >= 18 ? "adult" : "not adult");


/**************** NULLISH COALESCING OPERATOR  (??): null undefined **************/

//Iska kam hota hai ki jab aap chahte hai ki sirf hum null ya undefined ko check kare. naki falsy value ko bhi to hum iska (??) use karte hai.

//Yaha pe falsy value ko bhi check kar raha hai.
let details = {
    name: "",    //yaha pe value falsy hai.
    age: 0,  //yaha pe value falsy hai.
}

console.log(details.name || "unknown");
console.log(details.age || "no input");


//Yaha pe falsy value ko check nahi kar raha hai.yaha pe sirf null and undefined ko check kar raha hai. agar null ya undefined nahi raha to jo bhi value name and age ke andar hoga usse print kar dega.

let detail = {
    name: "",    //yaha pe value falsy hai. 
    age: 0,  //yaha pe value falsy hai.
}

console.log(detail.name ?? "unknown");
console.log(detail.age ?? "no input");