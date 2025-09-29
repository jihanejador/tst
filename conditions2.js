const prompt=require("prompt-sync")();

let age=prompt("entrer votre age : ");
if(age=>18){
    console.log("eligib/deuxe au vote");
}else{
    console.log("non eligible");
}