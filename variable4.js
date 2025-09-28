const prompt=require("prompt-sync")();

let distance=+prompt("entre la distance : ");
let vitesse=+prompt("entrer la vitesse : ");
let t;
t= distance / vitesse;
console.log("le temps de trajet est : ",t);

