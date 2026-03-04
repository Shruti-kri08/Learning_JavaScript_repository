// Write a program that counts how many even and odd numbers exist from 1 to 100.


let countEven = 0, countOdd = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        countEven++;
    }
    else {
        countOdd++;
    }
}

console.log("Even numbers:", countEven);
console.log("Odd numbers:", countOdd);
