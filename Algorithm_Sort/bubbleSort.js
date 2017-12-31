/**
 * Created by lyp on 2017/12/31.
 */

function bubbleSort(data) {
    for (let i = 0; i < data.length - 1; i++) {
        for (let j = 0; j < data.length - i - 1; j++) {
            if (data[j] < data[j + 1]) {
                var temp = data[j + 1];
                data[j + 1] = data[j];
                data[j] = temp;
            }
        }
    }
    return data;
}

const res = bubbleSort([3, 9, 4, 1, 6]);
console.log(res);