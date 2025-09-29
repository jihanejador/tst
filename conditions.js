const prompt=require("prompt-sync")();

let N=prompt("entrer un nomber : ");
if (N%2===0){
    console.log("le nomber est pair");
}
else {
    console.log("le nomber est impair");
}