const prompt = require("prompt-sync")();

let s=0;
function tableau(){
    let tbl=[];
    for(let i=0;i<=5;i++){
        let val=+prompt("entrez une nomber : ");
        tbl.push(val);
        s+=tbl[i];
    }
    console.log(tbl);
    console.log(s);
}tableau();
