// curli bracket {} ko block scope kahte hai. kyunki iske andar jo bhi variable declare karte hai ussi same name se curli bracket ke bahar bhi variable ko create kar sakte hai.
//and curli bracket ke andar ke variable ko hum curli bracket ke bahar print nahi kar sakte hai.

let a = 39;
const b = 47;

if (true) {
    let a = 39;
    const b = 47;
    console.log("Inside: ", a);
    console.log("Inside: ", b);
      
}

console.log("Outside: ", a);
console.log("Outside: ", b);


/***************************** INTERESTING ******************************/

//Yaha pe function ke declaretion se pahle hum agar usse access karna chahte hai to kar sakte hai.

addone(6);

function addone(num) {
    return num + 1;
}

//But agar hum function ko ek variable ke andar store kar dete hai tab hum uss function ke declaretion se pahle usse access nahi kar sakte hai.

addtwo(6);

let addtwo = function(num) {
    return num + 2;
}
