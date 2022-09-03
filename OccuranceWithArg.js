const arrNum=[1, 2, 3, 4 ,3,1,3];
const countOccurrences = (arrNum, val) => arrNum.reduce((a, v) => (v === val ? a + 1 : a), 0);


console.log(countOccurrences(arrNum, 3)); //[1, 2, 3, 4 ,3,1,3]
//Another Solution
const arr=[1, 2, 3, 4 ,3,1,3];
let count=0;
let val=3;
for(ele of arr){
if(ele == val){
    count++;
}
}
console.log("The occurance of repeated element is:"+count);


