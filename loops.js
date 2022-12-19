// Loops

// while loop::
let myNumber = 0;
while(myNumber<=10){
    console.log(myNumber);
    // myNumber=myNumber+1;
    myNumber+=3;
}
// don't create an endless loop

// do-while Loop
do{
    myNumber++;
    console.log(myNumber);
}while(myNumber<20);

// For Loops:
for(let i=0;i<10;i++){
    console.log(i);
}

let name="Gaurav";
for(let i=0;i<=name.length;){
    console.log(name.charAt(i));
    i+=3;
}

let counter=0;
let myLetter;
while(true){
    myLetter=name[counter];
    console.log(myLetter);
    if(myLetter==="a")
    break;
    counter++;
}