/************ IMMEDIATELY INVOkED FUNCTION EXPRESSIONS(IIFE) **********/

//(Function Defination)(Function call)
//Global scope ke polution se problem hoti hai kai bar to uss global scope ke jo variables hai jo bhi waha declration hai uske pollution ko hatane ke liye humne iffi ka use kiya. --- FOR INTERVIEW THIS IS IMPORTANT

(function chai(name) {
    console.log(`my name is ${name}`);
    
})("Yuvraj kumar");