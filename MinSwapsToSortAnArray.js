const arr = [4, 3, 2, 1];
function minimumSwaps(arr) 
{
    var arrLength = arr.length;
    /* HERE we our creating two new Arrays In first,one record value and key separately
     second to keep visited node count */
    var newArr = [];
    var newArrVisited = [];
    for (let i = 0; i < arrLength; i++)
    {
      newArr[i]= [];//1st Array
      newArr[i].value = arr[i];
      newArr[i].key = i;
      newArrVisited[i] = false;//2nd Array(default set false to all)
   }
    // sort new array by value in the assending order
    newArr.sort(function (a, b)
     {
      return a.value - b.value;
     })
        var swap = 0;
        for (let i = 0; i < arrLength; i++) 
        {
           // check if already visited or swapped
            if (newArr[i].key == i || newArrVisited[i])
            {
                continue;
            }
            var cycle = 0;
            var j = i;
            while (!newArrVisited[j]) 
            {
               // mark as visited
                newArrVisited[j] = true;
                j = newArr[j].key; //assign next key
                console.log(j);
                cycle++;
            }
            if (cycle > 0) 
            {
                swap += (cycle > 1) ? cycle - 1 : cycle;
            } 
       }
    return swap;
}    
console.log( minimumSwaps(arr));

// //ES6 Approach
// const arrR=[1, 5, 4, 3, 2];
// function minimumSwaps(arr) {

//     let minSwaps = 0;

//     for (let i = 0; i < arr.length; i++) {
//         // at this position what is the right number to be here
//         // for example at position 0 should be 1
//         // add 1 to i if array starts with 1 (1->n)
//         const right = i+1;
//         // is current position does not have the right number
//         if (arr[i] !== right) {
//             // find the index of the right number in the array
//             // only look from the current position up passing i to indexOf
//            const rightIdx = arr.indexOf(right, i);
//             // replace the other position with this position value
//             //console.log(arr[i]);
//             arr[rightIdx] = arr[i];
//             // replace this position with the right number
//             arr[i] = right;
//             // increment the swap count since a swap was done
//             ++minSwaps;
//         }
//     }
//     return minSwaps;
// }
// console.log(minimumSwaps(arrR));




