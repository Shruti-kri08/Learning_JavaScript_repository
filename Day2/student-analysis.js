let students = [
 {name:"Aman", age:20, marks:[80,70,90]},
 {name:"Riya", age:19, marks:[60,50,40]},
 {name:"Rahul", age:21, marks:[90,85,95]},
 {name:"Neha", age:18, marks:[30,40,35]}
];

students.forEach((val)=>{
    console.log(val.name)
})

const newStu=[];
const passStu=[];
let classTotalMarks=0;
students.forEach((val)=>{
    let totalmarks=0,avg=0
    val.marks.forEach((e)=>{
        totalmarks+=e;
        
    })
    avg=totalmarks/val.marks.length
     classTotalMarks+=avg

    newStu.push({ name:val.name ,average:avg})
    
    if(avg>=60){
        passStu.push({ name:val.name ,average:avg})
    }

})
console.log(newStu);
console.log("Pass students:" ,passStu);

let classAvgMarks=classTotalMarks/students.length
console.log("Average Marks of class :" ,classAvgMarks);
