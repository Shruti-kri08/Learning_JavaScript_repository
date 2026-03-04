//Write a function that returns the largest number among three numbers.

const largestNo =(x,y,z)=>{
    if(x>=y && x>=z ){
        return x;
    }
    else if(y>=x && y>=z){
        return y;
    }
    else{
        return z;
    }
}

let x=72,y=72,z=2
largestNo(x,y,z)
console.log("largest number is : ",largestNo(x,y,z));

