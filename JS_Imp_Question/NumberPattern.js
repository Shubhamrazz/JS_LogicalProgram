// 12345
// 1234
// 123
// 12
// 1

// let s = "";
// // External loop
// for (let i = 5; i >= 1; i--) {
//   // Internal loop
//   for (let j = 1; j <= i; j++) {
//     s += j;
//   }
//   s += "\n";
// }
// console.log(s);

// 54321
// 5432
// 543
// 54
// 5

//   let s = "";
//   // External loop
//   for (let i=1;i<=5;i++) {
//    // Internal loop
//    for (let j=5;j>=i;j--) {
//      s += j;
//     }
//     s += "\n";
//  }
//  console.log(s)


// 11111
// 2222
// 333
// 44
// 5

let s = "";
  // External loop
  for (let i=1;i<=5;i++) {
   // Internal loop
   //i=1,j=1 s=11111
   //i=2,j=2 s=2222
   //i=3,j=3 s=333
   //i=4,j=4 s=44
   //i=5,j=5 s=5
   for (let j=i;j<=5;j++) {
     s += i;
    }
    s += "\n";
 }
 console.log(s)