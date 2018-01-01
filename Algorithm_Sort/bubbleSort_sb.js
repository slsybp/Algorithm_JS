// 冒泡排序
var dataModule = require("./testData.js");
/*！
 * @author ssb
 * @brief 冒泡排序 从小到大的顺序
 * @param numArray 待排序数组
 * @return 排序结果数组
 */
function bubbleSort(numArray) {

    const  arrayLength = numArray.length;

    // 数组判空
    if (arrayLength === 0) {
        console.log(module.voidArrayLog);
        return ;
    }

  var numbersArray = numArray;

  for (var sortTimes = 1; sortTimes < arrayLength; sortTimes++) // 排序的次数
    {
        for (var index = 0; index < arrayLength - sortTimes; index++) {

            var indexValue = numbersArray[index];
            var nextIndexValue = numbersArray[index + 1];

            if (indexValue > nextIndexValue) {
                numbersArray[index + 1] = indexValue;
                numbersArray[index]     = nextIndexValue;
            }
        }
    }
    return numbersArray;
}


const bubbleSortResult = bubbleSort(dataModule.numbers);
console.log(bubbleSortResult);
