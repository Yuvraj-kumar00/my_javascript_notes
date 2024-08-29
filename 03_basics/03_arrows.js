/************************* WHEN WE USE THIS *****************************/

//object ke andar ke variable ko use karne ke liye (this) ka use karte hai. yani ki current context ko use karne ke liye.

const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        
        console.log(this);
        
    }
}

// user.welcomeMessage();
// user.username = "yuvraj";
// user.welcomeMessage();

//console.log(this);  //Agar node enviroment ke andar directly console.log(this); print karoge to empty object milega.

//function ke andar hum this keyword ko use nahi kar sakte hai.
function chai() {
    let username = "hitesh";
    //console.log(this.username);
    
}

chai();

/************************ ARROW FUNCTION ***********************/

//Arrow function ke andar bhi hum this keyword ko use nahi kar sakte hai.
const mychai = () => {
    let username = "hitesh";
    //console.log(this.username);
    
}

mychai();

//curli braces ke andar value ko return karna padta hai. Aur isse hum explicit return function kahte hai.

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

//bracket ke andar value ko return nahi karna padta hai. Aur isse hum implicit return function kahte hai.

const addTwo = (num1, num2) => (num1 + num2)

let result = addTwo(4, 3);
console.log(result);


