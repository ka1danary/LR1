// Сортировка простыми вставками 
// выделяем две последовательности, 1 всегда сортированная, 2 в роли получения элементов
// элемент со 2 последовательности всегда вставляется в отсортированный массив так, чтобы сохранялся порядок сортировки в 1 массиве
const simple_insertion_sort = (inputArr) => {

    let n = inputArr.length;
    let counter = 0
    for (let i = 1; i < n; i++) {
        // Выбор первого элемента в неотсортированном подмассиве
        let current = inputArr[i];

        // Первый от i (предыдущий) элемент в неотсортированном массиве
        let j = i - 1;
        while ((j > -1) && (current < inputArr[j])) { 
            counter++
            inputArr[j + 1] = inputArr[j];
            j--;
        }
        inputArr[j + 1] = current;
    }
    console.log('Количество перестановок для простых вставок = ' + counter )
    return inputArr;
}
export default simple_insertion_sort

