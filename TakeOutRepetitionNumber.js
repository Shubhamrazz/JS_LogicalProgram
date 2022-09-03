 // Javascript code to find
    // duplicates in O(n) time
    var arr = [ 1,1, 2, 3, 4 ,3 ];
    var arr_size = arr.length;
     
    // count the frequency
    for (let i = 0; i < arr_size; i++) {
        arr[arr[i] % arr_size] = arr[arr[i] % arr_size] + arr_size;
            console.log( arr[arr[i] % arr_size])
        }
    console.log("The repeating elements are : " );
    for (let i = 0; i < arr_size; i++) {
        if (arr[i] >= arr_size * 2) {
            console.log(i );
        }
    }