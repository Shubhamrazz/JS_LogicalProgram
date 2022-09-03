// *
// **
// ***
// ****
// *****

// let str="";
// let x=6;
// let y=6;
// for(let i=1;i<y;i++){
//     for(let j=1;j<x;j++){
//         if(i>=j){
//             str=str.concat("*");
//         }
//         str=str.concat("\n")
//     }
// }
// console.log(str)

// for(i=0;i<6;i++){
//     console.log("*".repeat(i));
// }


//           *
//     
//     *      *       *
// 
//  *   *     *     *      *
//*  *   *   *    *     *    * 


   var i,j,k;//i is the outer loop for pring the row, j&k are the inner loop where j is for printing space and k is for printing '*'
   var n=5;
   var s=" ";
   for(i=1;i<=n;i++){
    for(j=1;j<=n-i;j++){
        console.log(" ");
    }
    for(k=0;k<2*i-1;k++){
        s+="*";
     }
    console.log(s);
    }
 