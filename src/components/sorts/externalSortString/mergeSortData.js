// сортировка слиянием

function mergeSort(List) {
    if (List.length <= 1) {
        return List;
    }

    const mid = Math.floor(List.length / 2);
    const left = List.slice(0, mid);
    const right = List.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex].Успеваемость < right[rightIndex].Успеваемость) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

export default mergeSort