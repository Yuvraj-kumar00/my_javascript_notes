/********************** VERY IMPORTANT ARRAY METHODS ******************/

//Yaha sab methods sirf array pe apply hota hai. aur yah sab apne andar callback function leta hai.
//callback ka matlab hota hai ki ek function dusare function ko as a parameter leta hai apne andar.

/******* FOR EACH *******/

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

//Remember for each value ko return nahi karta hai.
// const values = coding.forEach( (item) => {
//     return item;
// })

// console.log(values);


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
   // console.log(item);
   //console.log(item.languageName);
   
} )