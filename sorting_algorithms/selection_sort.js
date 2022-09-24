function selectionSort() {
    const arr = [123, 9, 23, 912, -21, 42, 0, 1, -1];
    const auxArr = [];
    console.info(' --- selection sort --- \n\nunordered array: \n', arr, '\n\nexecution time:');
    console.time();
    for(let i=0; i<arr.length-1; i++) {
        let min = i;
        for(let j = i+1; j<arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
            if(min !== i) {
                const key = arr[i];
                arr[i] = arr[min];
                arr[min] = key;
            }
        }
    }
    console.timeEnd();
    console.info('\nordered array: \n', arr, '\n\ncomplexity: O(n^2)');
}

selectionSort();


// [3, 2, 4, 1]

// 3 -> 1, 3, 4, 2

// key = 



/*
newArr = []

for i to n
   for j to n
    if (i>j)
        key = A[i]
        A[i] = A[j]
        A[j] = key
    end
end


for i to n
   for i to n 
    if (i>j)
        key = A[i]
        A[i] = A[j]
        A[j] = key
    end
end

key = A[i]
if (key < A[i+1])
    key = A[i+1]
A[i] = key


key = A[i]
*/