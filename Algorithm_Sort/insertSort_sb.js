// 插入排序

var dataModule = require("./testData.js");

function insertSort(numArray) {

  let length = numArray.length;

  var t = 0;

  for (var i = 1 ; i < length ; i++) {
    var value_i = numArray[i];
    t = i - 1;
    while (t > -1 && value_i < numArray[t]) {
      numArray[t+1] = numArray[t];
      t--;
    }
    t++;
    numArray[t] = value_i;
  }
  return numArray;
}

console.log("原始数据：" + dataModule.numbers);
const insertSortResult = insertSort(dataModule.numbers);
console.log(insertSortResult);