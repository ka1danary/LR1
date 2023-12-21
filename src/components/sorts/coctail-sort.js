// шейкерная сортировка 
// как и пузырек, но проходит два раза по массиву, сначала от u to n/ n to i
const coctailSort = (A) => {

    let i = 0, 
    j = A.length - 1, 
    s = true, 
    t

    let counter = 0 

    while (i < j && s) {
        s = false;

        for (let k = i; k < j; k++) {
            if (A[k] > A[k + 1]) {
                t = A[k];
                counter++
                A[k] = A[k + 1];
                A[k + 1] = t;
                s = true;
            }
        }

        j--;
        
        if (s) {
            s = false;
            for (let k = j; k > i; k--) {
                if (A[k] < A[k - 1]) {
                    counter++
                    t = A[k];
                    A[k] = A[k - 1];
                    A[k - 1] = t;
                    s = true;
                }
            }
        }
        i++;
    }
    console.log('Количество перестановок для шейкерной сортировки = ' + counter )
    return A;
}

export default coctailSort

