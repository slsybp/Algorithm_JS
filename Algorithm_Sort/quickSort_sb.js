// 快速排序

var dataModule = require("./testData.js");

/*！
 * @author ssb
 * @brief 快速排序 从小到大的顺序
 * @param numArray 待排序数组
 * @return 排序结果数组
 */

function  division (numbersArray,left,right) {
  var pivot = numbersArray[left];

  while (left < right) {

    while (left < right && numbersArray[right] > pivot) {
      right--;
    }
    numbersArray[left] = numbersArray[right];
    while (left < right && numbersArray[left] < pivot) {
      left++;
    }
    numbersArray[right] = numbersArray[left];
  }
  numbersArray[left] = pivot;
  return left;
}

function quickSort(numbersArray,left,right) {
  if (left < right) {
    var midIndex = division(numbersArray,left,right);
    quickSort(numbersArray,left,midIndex - 1);
    quickSort(numbersArray,midIndex + 1,right);
  }
}

console.log("原始数据：" + dataModule.numbers);
numArray = dataModule.numbers;

let quickSortResult = quickSort(numArray,0,numArray.length -1);
console.log(numArray);


