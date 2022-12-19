// console.log("Hello World");

// // Conditional: If Statement 

// // syntax:
// // if(conditon) {
// //     // run some code
// // } else {
// //     // run some different code.
// // }
// let customerisBanned = false;
// let soup="Chicken noodle soup";
// let reply;
// let crackers =true;
// if(customerisBanned) {
//     reply = "No soup for you";
// }
// if(soup) {
//     // reply="Here's your order ${soup}";
//     reply=`Here's your order ${soup}`;
// } else {
//     reply=`Sorry, we're out of soup`;
// }
// console.log(reply);
// 
// .
let testScore =59;
let grade;
let collegeStudent = true;

if(testScore>=90){
    grade = 'A';
}
else if(testScore>=80){
    grade = 'B';
}
else if(testScore>=60){
    grade = 'C';
}
else if(testScore>=40){
    grade = 'D';
}
else {
    if(collegeStudent){
        grade = 'E';
    }
    else {
        grade = 'F';
    }
}

console.log(grade);