//Cau 1
function customCalc(...args)  {
    let maxResult = Math.max(...args);
    let minResult = Math.min(...args);
    let sumResult = args.reduce(function(total, arg) {
        return total + arg;
    })
    let avgResult = sumResult / args.length;
    console.log(`Max: ${maxResult}, min: ${minResult}, avg: ${avgResult}, sum: ${sumResult}`);
}

customCalc(4, 7, 32, 6, 3, 6, 22, 44);

//Cau 2a
function customFilter(arr, callback) {
    if (Array.isArray(arr)) {
        let resultFilter = [];
        for (let key in arr) {
            let cback = callback(arr[key], key);
            if (cback) {
                resultFilter.push(arr[key]);
            }
        }

        return resultFilter;
    } else {
        return "Dữ liệu truyền vào ko phải là 1 mảng";
    }
}

let result = customFilter([2,7,33,64,4], function(value) {
    return value > 5;
})

console.log(result);

//Cau 2b
let resultEvenNumber = customFilter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], function (value) {
    return value % 2 === 0;
})

console.log(resultEvenNumber);