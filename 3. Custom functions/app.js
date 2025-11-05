function myMap(arr,callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i, arr));
    }
    return newArr;
}
let arr = [1, 2, 3, 4, 5];
let result = myMap(arr, (x) => x * 2);
console.log(result); // [2, 4, 6, 8, 10]