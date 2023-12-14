// Сортировка простыми вставками 
const simple_insertion_sort = (inputArr) => {
    let n = inputArr.length;
    for (let i = 1; i < n; i++) {
        // Выбор первого элемента в неотсортированном подмассиве
        let current = inputArr[i];
        // Последний элемент в неотсортированном массиве
        let j = i - 1;
        while ((j > -1) && (current < inputArr[j])) {
            inputArr[j + 1] = inputArr[j];
            j--;
        }
        inputArr[j + 1] = current;
    }
    return inputArr;
}
export default simple_insertion_sort

