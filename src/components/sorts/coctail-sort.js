
const coctailSort = (A) => {
    var i = 0, j = A.length - 1, s = true, t;
    while (i < j && s) {
        s = false;
        for (var k = i; k < j; k++) {
            if (A[k] > A[k + 1]) {
                t = A[k];
                A[k] = A[k + 1];
                A[k + 1] = t;
                s = true;
            }
        }
        j--;
        if (s) {
            s = false;
            for (var k = j; k > i; k--) {
                if (A[k] < A[k - 1]) {
                    t = A[k];
                    A[k] = A[k - 1];
                    A[k - 1] = t;
                    s = true;
                }
            }
        }
        i++;
    }
    return A;
}

export default coctailSort

