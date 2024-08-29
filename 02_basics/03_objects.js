let mySym = Symbol("mykey1");

let JsUser = {
    name: "Hitesh",
    age: 18,
    [mySym]: "mykey1", //symbol ko object me likhne ka tarika hai ki usse square bracket me likhe. 
    location: "Jaipur",
    email: "yuvrajkumar9572@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//Access objects
// console.log(JsUser.name);
// console.log(JsUser[mySym]);

//Change value of object
JsUser.email = "pawankumar9572@gmail.com";
// console.log(JsUser);

//freeze object value   //Iske baad koi bhi value print nahi hoga.
//Object.freeze(JsUser);

//Create new object value
JsUser.city = "Masaurhi";
// console.log(JsUser);

//singleton object 
let tinderUser = new Object();

//Non-singleton object
let tinderUsers = {};

//Methods
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};

const obj4 = Object.assign({}, obj1, obj2, obj3);  //assign ka kam hai multiple object ko ek saath add karna.
// console.log(obj4);

const mySpread = {...obj1, ...obj2, ...obj3};  //spread(...) ka kam bhi hai multiple object ko ek saath add karna.
// console.log(mySpread);

const my_keys = Object.keys(JsUser);  //keys() jo hai wah object ke key ko print karta hai. and iska jo value milta hai uska datatype array hota hai.
// console.log(my_keys);

const my_values = Object.values(JsUser);  //values() jo hai wah object ke value ko print karta hai. and iska bhi jo value milta hai uska datatype array hota hai.
// console.log(my_values);

const my_ownProperty = JsUser.hasOwnProperty("name");  //hasOwnProperty() kam jo hai wah propety ko check karna hai ki yah property object ke andar hai ya nahi.
// console.log(my_ownProperty);


/********************* Destructuring *********************/
//single property  Destructuring at one time
const {location} = JsUser;
// console.log(location);


//Multiple property  Destructuring at one time
const {name, age, email} = JsUser;
// console.log(name);
// console.log(age);
// console.log(email);







