// 选择排序
var dataModule = require("./testData.js");

/*！
 * @author ssb
 * @brief 冒泡排序 从小到大的顺序
 * @param numArray 待排序数组
 * @return 排序结果数组
 */
function selectSort(numArray) {

    var numbersArray = numArray;
    const  arrayLength = numbersArray.length;

    if (arrayLength === 0) {
        console.log(dataModule.voidArrayLog);
        return ;
    }

    for (var index = 0; index < arrayLength; index++) {
        for (var nextIndex = index + 1; nextIndex < arrayLength; nextIndex++) {
            if (numbersArray[nextIndex] < numbersArray[index]) {
                var temp = numbersArray[nextIndex];
                numbersArray[nextIndex] = numbersArray[index];
                numbersArray[index] = temp;
            }
        }
    }
    return numbersArray;
}

console.log("原始数据：" + dataModule.numbers);
const selectSortResult = selectSort(dataModule.numbers);
console.log(selectSortResult);
