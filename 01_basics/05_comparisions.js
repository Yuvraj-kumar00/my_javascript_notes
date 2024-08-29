console.log(4 > 9);
console.log(4 < 9);
console.log(9 >= 9);
console.log(4 <= 9);
console.log(4 != 9);
console.log("9" == 9);
console.log(false == 0);
console.log("9" === 9);
console.log(false === 0);

console.log(null > 0);
console.log(null == 0); 
console.log(null >= 0);

// The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
//That's why (3) null >= 0 us true and (1) null >0 is false.