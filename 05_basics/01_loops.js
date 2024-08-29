/************** FOR LOOP **************/

for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        // console.log("Detected 5");
        break;  //jaha par bhi Break rahega uss value ko aur uske baad walle value ko print nahi karega.
    }
    // console.log(i);
    
}


for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        // console.log("Detected 5");
        continue;  //jaha par bhi Continue rahega sirf usse skip kar dega aur uske agge ka jitna bhi value rahega use print kar dega.
    }
    // console.log(i);
    
}

/************** WHILE LOOP **************/

let i = 0;

while (i <= 10) {
    //console.log(`value of index ${i}`);
    i = i + 2;
    
}


/************** DO WHILE LOOP **************/

//do while kam hota hai ki kam-se kam ek baar loop ko chalana. condition match kare ya na kare. (isse hum rarely use karte hai.)

let idx = 11;

do {
    console.log(`idx is ${idx}`);
    idx++
} while (idx <= 10);