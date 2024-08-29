/******************* Logical Operators *****************/
// 1.Logical AND (&&) //iska matlab hai ki dono condition true hona chahiye.
// 2.Logical OR (||)  //iska matlab hai ki koi bhi ek condition true hona chahiye.
// 3.Logical NOT (!)  //iska kam value ko reverse karna hota hai. ex- yah true ko false me and false ko true me change kar deta hai.

let age = 69;

if (age <= 10 || age >= 60) {
    console.log("You are eligibal for all Reservation Categories.");
    
} else if (age > 10 && age <= 18) {
    console.log("You are eligibal for some Reservation Categories.");
} else {
    console.log("You are not eligibal for any Reservation Categories.");
    
}

/******************* Conditional Operators *****************/

let color = "pink";
//Yah if conditional statement hai. and yah single condition ko check karne ke liye hota hai.
if (color === "red") {
    console.log(`${color}:- is primary color.`);
    
}
//Yah else if conditional statement hai. and yah multiple condition ko check karne ke liye hota hai.
else if (color === "green") {
    console.log(`${color}:- is primary color.`);
    
} else if (color === "yellow") {
    console.log(`${color}:- is primary color.`);
    
} else if (color === "blue") {
    console.log(`${color}:- is primary color.`);
    
} 
//Yah else conditional statement hai. iska kam hota hai ki jab if and else if dono condition ko match nahi kar pata hai tab automatic iske andar jo bhi value hota hai wah print ho jata hai.
else {
    console.log(`${color}:- is not a primary color.`);
    
}

