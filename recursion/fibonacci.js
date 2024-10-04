
function fibsIterate(n){
    let fib;
    const fibs = [0,1];
    for (i=2; i<n; i++){
        fib = fibs[i-1]+fibs[i-2];
        fibs.push(fib);
    };
    console.log("This was printed iteratively");
    return fibs
};

function fibsRecursive(n){
    if (n === 2) return [0,1];

    let fibs = fibsRecursive(n-1);
    let fib = fibs[fibs.length-1]+fibs[fibs.length-2];
    fibs.push(fib);
    console.log("This was printed recursively");
    return fibs
};

// console.log( fibsIterate(8) );
console.log( fibsRecursive(8) )
