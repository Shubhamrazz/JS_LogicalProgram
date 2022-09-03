var a=10;
var b=5;
//1st Method
// a=a+b;//15
// b=a-b;//5
// a=a-b;//10
// console.log("a: ",a +" "+"b: ",b);

//2nd Method
a=a^b;
b=a^b;
a=a^b;
console.log("a: ",a +" "+"b: ",b);