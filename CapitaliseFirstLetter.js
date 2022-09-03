//var str="geeks for geeks"
//const Arr=str.split('');
//console.log(Arr);
const str ="shubham raj"
const arr=str.split(" ");
console.log(arr);
for(var i=0;i<arr.length;i++){
     arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
}
console.log(arr.length);
const str2=arr.join(" ");
//console.log("The output is:");
console.log("output is:",str2);

console.log(str2.split('').reverse().join(''))
