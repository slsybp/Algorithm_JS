
var dataModule = require("./testData.js");

function mergeSort(array, length) {

  function min(a,b) {
    return a < b ? a: b;
  }

  var resultArray = [length]
  var k = 0;

  var templeArray = [length];

  for (var gap = 1; gap < length; gap += gap) {

    for (var index = 0; index < length; index += gap+ gap) {
      k = index;

      var subStartIndex1 = index;
      var end1 = min(index + gap,length);

      var subStartIndex2 = end1
      var end2 = min(index + gap + gap,length)

      while (subStartIndex1 < end1 && subStartIndex2 < end2)
        resultArray[k++] = array[subStartIndex1] < array[subStartIndex2] ? array[subStartIndex1++]: array[subStartIndex2++];

      while (subStartIndex1 < end1)
        resultArray[k++] = array[subStartIndex1++];

      while (subStartIndex2 < end2)
        resultArray[k++] = array[subStartIndex2++];
    }

   for (var i = 0; i < resultArray.length; i++) {
      array[i] = resultArray[i];
   }
  }
}

console.log("原始数据：" + dataModule.numbers);
numArray = dataModule.numbers;

let quickSortResult = mergeSort(numArray,numArray.length);
console.log(numArray);