//Multiply each element of an array with its length of an array
var arr=[5,10,15,20,25];

for(var i=0;i<arr.length;i++){
  arr[i]=arr[i]*(arr.length);
}
console.log("Result after mul ech elem of arr with its length",+ arr);