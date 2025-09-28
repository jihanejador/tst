const prompt=require("prompt-sync")();

let temperqture=prompt("entrer un temperateur : ");
let F;
F=(temperqture * 1.8)+32;
console.log( "le temperateur en fahrenheit est : ",F);
