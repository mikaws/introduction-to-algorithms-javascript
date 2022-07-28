function insertionSort() {
    const arr = [123, 9, 23, 912, -21, 42, 0, 1, -3];
    console.info(' --- insertion sort --- \n\nunordered array: \n', arr, '\n\nexecution time:');
    console.time();

    const n = arr.length;
    const m = n-1;
    
    for(let i=m; i>=0; i--) {
        let key = arr[i];
        let j = i+1;
        while(j<=n && arr[j] > key) {
            arr[j-1] = arr[j];
            j++;
        }
        arr[j-1] = key;
    }
     
    console.timeEnd();
    console.info('\nordered array: \n', arr, '\n\ncomplexity: O(n^2)');
}

insertionSort();
