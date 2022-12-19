// User Input 
// ?? -->Nulish coalescing operator

// Popups:
//* alert("Hello World!"); ---->1st type of popup

//* let myBoolean=confirm("OK===True\n Cancel===False"); --->2nd type of popup
// console.log(myBoolean);

// 3rd type of popup 
let name = prompt("Please enter your name.");
// console.log(typeof name);
if (name) {
console.log(name.length);
console.log(name.trim().length); 
console.log(name.trim());
} else {
    console.log("you didn't enter your name.")
}



