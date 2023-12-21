// сортировка выбором 
// выбираем минимальный элемент в последовательности, помещаем его в начальную неотсортированную последовательности, проходим так по каждому элементу
import { defaultCompare, Compare, swap } from "./supporting_func";

const selection_sort = (arr, compare = defaultCompare) => {
    const { length } = arr;
    let minIndex;
    let counter = 0
    for (let i = 0; i < length - 1; i++) {
        minIndex = i;
        for (let j = i; j < length; j++) {
            if (compare(arr[minIndex], arr[j]) === Compare.BIGGER_THAN) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            counter++
            swap(arr, i, minIndex);
        }
    }
    console.log('Количество перестановок для сортировки выбором = ' + counter )
    return arr;
}

export default selection_sort