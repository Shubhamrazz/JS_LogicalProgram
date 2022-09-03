var str="Avul Pakir Jainulabdeen Abdul Kalam was an Indian aerospace scientist";

function longestWordInStr(str){
    var strSplit=str.split(" ");//strsplit as a array
    var longestwordLen=0;
    var longestword='';
    for(var i=0;i<strSplit.length;i++){
        if(strSplit[i].length>longestwordLen){
            longestwordLen=strSplit[i].length;
            longestword=strSplit[i];
        }
    }
    return longestword +",length:"+longestwordLen;
}
console.log(longestWordInStr(str));

//ES6 Approach
function longestWord(str){
    var sortedArray=str.split(" ").sort((wordB,wordA)=>wordA.length-wordB.length);
    return sortedArray[0];
}
console.log(longestWord(str));