/**
 * Created by lyp on 2017/12/31.
 */
const selectSort = (data) => {
    for (let i = 0; i < data.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < data.length; j++) {
            if (data[j] < data[minIndex]) {
                minIndex = j;
            }
            let temp = data[j];
            data[j] = data[minIndex];
            data[minIndex] = temp
        }
    }
    return data;
};

console.log(selectSort([6,8,1,3,5]))