let myDates = new Date();  //mtDates ka typeof object hota hai.
console.log(myDates);  //new Date() and toISOString() and toJSON() yah teeno same value print karta hai.

console.log(myDates.toString());
console.log(myDates.toDateString());
console.log(myDates.toISOString());
console.log(myDates.toJSON());
console.log(myDates.toLocaleString());
console.log(myDates.toLocaleString('default', {
    weekday: "short",
    // month: "2-digit",
    // month: "long",
    // month: "numeric",
}))
console.log(myDates.toLocaleDateString());
console.log(myDates.getMonth() + 1);
console.log(myDates.getDay());
console.log(myDates.getFullYear());

let myCreatedDate = new Date(2023, 0, 23);  //Agar comma ke basis pe hum date ko likhte hai to month zero(0) se start hota hai.
console.log(myCreatedDate.toDateString());

let myCreatedDates = new Date("2023-01-23");  //Agar dash ke basis pe hum date ko likhte hai to month one(1) se start hota hai.
console.log(myCreatedDates.toLocaleString());
console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now(); //Date.now() jo hai wah (01 January, 1970) se lekar ab tak ka jo time hai usse milli second me print karta hai.
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());  //Yaha pe jo time print karega wah (23 January, 2023) se lekar ab tak ka time hoga.










