const prompt=require("prompt-sync")();

let a=+prompt("entrer un nomber : ");
let b=+prompt("entrer un nomber : ");
let s= a + b;
let S= a - b;
let m= a * b;
let d= a / b;
let r= a % b;
console.log(s,S,m,d,r);