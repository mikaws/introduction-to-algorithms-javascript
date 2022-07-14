const arr = [9, 123, 23, 912, -21, 42, 0, 1, -3];

function insertionSort() {
    console.info(' --- insertion sort --- \n\nunordered array: \n', arr, '\n\nexecution time:');
    console.time();
    
    for(let i=1; i<arr.length; i++) {
        let key = arr[i];
        let j = i-1;
        while(j>=0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
     
    console.timeEnd();
    console.info('\nordered array: \n', arr, '\n\ncomplexity: O(n^2)');
}

insertionSort();
