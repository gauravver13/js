// conditionals: Ternary Operator

// syntax 
// condition?if_true:if_false;

// let soup='chicken noodle soup';
// let response= soup?"yes,we have soup.":"Sorry,no soup today";

// console.log(response);

let soup='chicken noodle soup';
let isCustomerBanned =false;
let soupAccess = isCustomerBanned?"Sorry, no soup for you!":soup?`yes, we have ${soup} today.`:"Sorry, no soup today";

console.log(soupAccess);