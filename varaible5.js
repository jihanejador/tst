const prompt=require("prompt-sync")();

let c=+prompt("entrer le rayon dun cercle : ");
let C=2*Math.PI*c;
console.log("le circonference est : ",C);
