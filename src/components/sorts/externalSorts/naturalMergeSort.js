//мпmerge natural

function mergeSort1(array) {

    // Base case or terminating case
    if (array.length < 2) {
        return array
    }

    const left = []
    const right = []

    let i = 1
    let n = array.length

    let flag = 1
    while (i < n) {
        while (array[i - 1].Успеваемость <= array[i].Успеваемость && flag === 1 && i < n) {
            left.push(array[i - 1])
            i++
        }

        while (array[i - 1].Успеваемость <= array[i].Успеваемость && flag === 0 && i < n) {
            right.push(array[i - 1])
            i++
        }

        if (array[i - 1].Успеваемость > array[i].Успеваемость && flag === 1) {
            left.push(array[i - 1])
            flag = 0
            i++
            continue
        }
        if (array[i - 1].Успеваемость > array[i].Успеваемость && flag === 0) {
            right.push(array[i - 1])
            flag = 1
            i++
            continue
        }
    }
    if (flag === 1) {
        left.push(array[array.length - 1])
        flag = 0
    }
    else {
        right.push(array[array.length - 1])
        flag = 1
    }


    if (left.length !== n) {
        return mergeSort1(merge(left, right))
    }

    return merge((left), (right))
}

// сортировка 
function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array becomes empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0].Успеваемость < right[0].Успеваемость) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [...arr, ...left, ...right]
}


export default mergeSort1

