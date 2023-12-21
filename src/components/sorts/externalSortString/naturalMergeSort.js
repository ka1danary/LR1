//мпmerge natural

function mergeSort(List) {

    // Base case or terminating case
    if (List.length < 2) {
        return List
    }

    const left = []
    const right = []

    let i = 1
    let n = List.length

    let flag = 1

    while (i < n) {
        while (List[i - 1].Успеваемость <= List[i].Успеваемость && flag === 1 && i < n) {
            left.push(List[i - 1])
            i++
        }

        while (List[i - 1].Успеваемость <= List[i].Успевамость && flag === 0 && i < n) {
            right.push(List[i - 1])
            i++
        }

        if (List[i - 1].Успеваемость > List[i].Успеваемость && flag === 1 && i < n) {
            left.push(List[i - 1])
            flag = 0
            i++
            continue
        }
        if (List[i - 1].Успеваемость > List[i].Успеваемость && flag === 0) {
            right.push(List[i - 1])
            flag = 1
            i++
            continue
        }
    }
    if (flag === 1) {
        left.push(List[List.length - 1])
        flag = 0
    }
    else {
        right.push(List[List.length - 1])
        flag = 1
    }

    return merge(left, right)
}

// сортировка 
function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the List becomes empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub Lists 
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [...arr, ...left, ...right]
}

console.log(mergeSort([1, 2, 5, 6, 2, 3,1,2,3,1,7,5, 6, 3, 2, 1, 8,20]))