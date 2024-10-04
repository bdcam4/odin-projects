function merge(left, right){
    let sortedArr = [];
    
    while(left.length && right.length){
        if (left[0] < right[0]){
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        };
    }
    return [...sortedArr, ...left, ...right]
};

function mergeSort(arr){
    
    // cancel recursion condition
    if (arr.length <= 1) return arr
    
    // recursive cases 
    let mid = Math.floor(arr.length / 2)
    
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    
    return merge(left,right)
};

const myArray = [105, 79, 100, 110];
console.log(mergeSort(myArray))

/*
Step by Step:

mergeSort[105, 79, 100, 110]
    left = mergeSort[105,79]
        left = [105]
        right = [79]
        merge -> [79,105]
    right = mergeSort[100,110]
        left = [100]
        right = [110]
        merge -> [100,110]
    merge[79,105],[100,110]
        79  < 100: shift push 79
        105 > 100: shift push 100
        105 < 110: shift push 105
        return [79,100,105, left[], right[110]]
        return [79,100,105,110]
*/
