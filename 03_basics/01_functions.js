//function defination
function name(params) {   //() inside bracket value params called is parameter.
    // console.log(params);
    
}

//function call or excution
name("My name is yuvraj kumar");  //() inside bracket value My name is yuvraj kumar called is argument.


function myfun(Number1, Number2) {
    return Number1 + Number2;   //After return koi bhi value print nahi hoga.
    console.log("yuvraj kumar");
    
}

let result = myfun(3,8);  //Agar hum argument ko ek variable me store karte hai to hame function ke andar value ko return  karna padta hai nahi to value undefined aata hai.
// console.log(result);


//Agar hum chahte hai ki argument me bahut sara value aaye to hum parameter me rest(...) ka use karte hai. but rest value ko array ke form me return karta hai.
function calculateCartPrice(...numbers) {
    return numbers;
}

let showCalculateCartPrice = calculateCartPrice(54, 67, 38, 398, 393, 54, 99, 577);
//console.log(showCalculateCartPrice);


//Yaha par kya hoga ki pahela jo do value hoga wah val1 aur val2 me chala jayega aur phir baki ka number numbers ke andar.
function calculateCartPrices(val1, val2, ...numbers) {
    return numbers;
}

let showCalculateCartPrices = calculateCartPrices(54, 67, 38, 398, 393, 54, 99, 577);
//console.log(showCalculateCartPrices);


//How to use object in function
let myObj = {
    name: "Yuvraj kumar",
    age: 18,
    city: "Masaurhi"
}

function useObjInFunction(myObjectValue) {
    return `${myObjectValue.name} your age is ${myObjectValue.age}`
}

let finalResult = useObjInFunction(myObj);
console.log(finalResult);
