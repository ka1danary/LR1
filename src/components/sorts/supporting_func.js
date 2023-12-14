const swap = (arr, a, b) => {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

const Compare = {
    LESS_THAT: -1,
    BIGGER_THAN: 1
}

const defaultCompare = (a, b) => {

    if (a === b) {
        return 0
    }

    return a < b ? Compare.LESS_THAT : Compare.BIGGER_THAN
}

function partition(array, pivot, left, right) {
    let pivotValue = array[pivot];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
}

export { swap, Compare, defaultCompare, partition }