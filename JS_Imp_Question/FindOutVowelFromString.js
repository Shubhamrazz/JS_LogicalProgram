var str="Shubham234";
// function findVowel(str){
//     var vowelArray=[];
//     vowel=str.split("");
//     for(let i=0;i<=vowel.length;i++){
//     if (vowel[i] == 'a' || vowel[i] == 'e' || vowel[i] == 'i' || vowel[i] == 'o' || vowel[i] == 'u') 
//             {
//                 vowelArray.push(vowel[i]);
//                 console.log(vowel[i]);
//             }
//     }
//     return vowelArray;
// }

// console.log(findVowel(str));

function findVowel(str){
    var string=str.toString();
    var vowelArr=[];
    var vowelCount=0;
    for(let i=0;i<=string.length;i++){
    if (string.charAt(i)== 'a' || string.charAt(i)== 'e' || string.charAt(i) == 'i' || string.charAt(i) == 'o' || string.charAt(i) == 'u') 
            {
                vowelArr.push(string.charAt(i));
                vowelCount+=1;
                //console.log(vowelCount);
            }
    }
    return vowelCount +" "+ vowelArr;
}

//console.log(findVowel(str));

//ES6 FEATURE
 
function countVowel(str){
    var m=str.match(/[aeiou]/gi);
    return m!=null?m.length:0;
}
console.log(countVowel(str));