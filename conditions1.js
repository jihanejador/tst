const prompt=require("prompt-sync")();

let N=prompt("entrer un nomber : ");
if (N<0){
    console.log("le nomber est negatif ");

}else{
    console.log("le nomber est positif ");
}