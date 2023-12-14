// сортировка выбором 

import { defaultCompare, Compare, swap } from "./supporting_func";

const selection_sort = (arr, compare = defaultCompare) => {
    const { length } = arr;
    let minIndex;
    for (let i = 0; i < length - 1; i++) {
        minIndex = i;
        for (let j = i; j < length; j++) {
            if (compare(arr[minIndex], arr[j]) === Compare.BIGGER_THAN) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            swap(arr, i, minIndex);
        }
    }
    console.log(arr)
    return arr;
}

export default selection_sort