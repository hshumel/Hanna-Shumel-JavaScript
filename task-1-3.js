let arrayLength = +prompt("Input length of array:");

let arr1 = [];

for (let i = 0 ; i < arrayLength; i++) {    
    arr1[i] = +prompt("Input array element: " + i);    
}

let arr2 = [] ;

for (let i = 0 ; i < arr1.length ; i++) {
    if (arr1[i] % 3 === 0) {
        arr2.push(arr1[i]);
    }
}

console.log (arr2);
