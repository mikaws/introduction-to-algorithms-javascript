const arr = [9, 123, 23, 912, -21, 42, 0, 1, -3];
const n = arr.length;

console.info(' --- insertion sort --- \n\nunordered array: \n', arr, '\n\nexecution time:');

console.time();

if(arr.length) {
   for(let i=1; i<n; i++) {
       let key = arr[i];
       let j = i-1;
       while(j>-1 && arr[j] > key) {
           arr[j+1] = arr[j];
           j--;
       }
       arr[j+1] = key;
   }
}

console.timeEnd();

console.info('\nordered array: \n', arr, '\n\ncomplexity: O(n^2)');
