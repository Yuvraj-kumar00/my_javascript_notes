/****************** FOR OF LOOP *****************/

//Isse  hum Array and  String  ke liye use karte hai.

const arr = [1, 2, 3, 4, 5, 6];

for (const num of arr) {
    //console.log(num);
    
}


const greeting = "Hello world!";

for (const greet of greeting) {
    //console.log(greet);
    
}


/****************** FOR IN LOOP *****************/

//Isse hum Array Object and  String  ke liye use karte hai.

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
   //console.log(key);  //yaha pe sirf key print  hoga.
   //console.log(myObject[key]);  //iss tarah se value print hota hai.
   //console.log(`key ${key} and value ${myObject[key]}`);
}


const arrs = ['rohan', 'mohan', 'sohan', 'rahul', 'manoj', 'rohit'];

for (const num in arrs) {
    //console.log(num);
    //console.log(arrs[num]);
    //console.log(`key ${num} and value ${arrs[num]}`);
}


const myStr = "Hello world!";

for (const str in myStr) {
    //console.log(`key ${str} and value ${myStr[str]}`);
    
}