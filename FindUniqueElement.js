
const arr=['a', 'b', 'a', 'a', 'c', 'c'];
function findUniqueElement(arr){
for(let i=0;i<arr.length;i++){
    //console.log(arr[i])
    let j;
    for( j=0;j<arr.length;j++)
    
        if(i!==j && arr[i]===arr[j])
            break;
            if(j==arr.length)
           
           return arr[i];
}
    return -1;
}
console.log(findUniqueElement(arr));

//Optimise Solution O(n)
const arrR=['a', 'b', 'a', 'a', 'c', 'c','a'];
var n=arrR.length;
function OptimiseUniqueElement(arr,n){
    // Insert all array elements in hash
    // table
 
    const m = new Map();
    for (var i = 0; i < n; i++) {
        if (m.has(arr[i])) {
            m.set(arr[i], m.get(arr[i]) + 1);
        }
        else {
            m.set(arr[i], 1);
        }
    }
    // Traverse array again and return
    // first element with count 1.
    for (var i = 0; i < n; i++)
        if (m.get(arr[i]) == 1)
            return arr[i];
    return -1;

}
console.log(OptimiseUniqueElement(arrR,n));
