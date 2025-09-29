const prompt=require("prompt-sync")();

let NP=prompt("entrer le premier nomber : ");
let ND=prompt("entrer la deusime nomber : ");
if(NP>ND)
{
    console.log("le nomber le plus grand est" ,NP);
}
else{
    console.log("le nomber le plus grand est ",ND);

}