//Write a function that returns the factorial of a number.

function factorial(x){
    let fac=1;
    for(let i=1;i<=x;i++){
        fac*=i;
    }
    console.log("Factorial of",x , "is : ", fac);
}
let n =3;
factorial(n)