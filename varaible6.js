const prompt=require("prompt-sync")();

let n=prompt("entrer 3 chiffres : ")
let c=n.split().reverse().join();
console.log(c);
