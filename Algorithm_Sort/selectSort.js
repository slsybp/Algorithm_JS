// 选择排序


// 测试数据
var numbers = [23,43,12,78,2,90,4,1,101];
var voidArrayLog = "输入的排序数组为空!";

// 从小到大
function selectSort(numArray) {
    var numbersArray = numArray;
    if (numbersArray.length == 0) {
        console.log(voidArrayLog);
        return ;
    }

    for (var i = 0; i < numbersArray.length; i++) {
        console.log(numbersArray);
        for (var j = i + 1; j < numbers.length; j++) {
            var beforeValue = numbersArray[i];
            var behindValue = numbersArray[j];
            if (behindValue < beforeValue) {
                numbersArray[i] = behindValue;
                numbersArray[j] = beforeValue;
            }
        }
    }
    return numbersArray;
}

const selectSortResult = selectSort(numbers);
console.log(selectSortResult);
