// 希尔排序

var dataModule = require("./testData.js");

var gaps = [5,3,1];
var gap;
var gapsIndex = 0;

function shellSort(numArray) {

 while (gaps[gapsIndex] != undefined){
   gap = gaps[gapsIndex];

    console.log("******************************")

    var arrayLength = numArray.length;

    for (var i = 0; i < gap; i++) {
      console.log(numArray);

      for (var r = i; r < arrayLength; r += gap) {
        console.log(numArray[r]);

        var t = r - gap;
        var value_r = numArray[r];

        while (t > -gap && value_r < numArray[t]) {
          numArray[t + gap] = numArray[t];
          t -= gap;
        }
        t += gap;
        numArray[t] = value_r;

      }
    }

    gapsIndex  += 1;
  }
  console.log(numArray);

  return numArray;
}


console.log("原始数据：" + dataModule.numbers);
const shellSortResult = shellSort(dataModule.numbers);
// console.log(shellSortResult);