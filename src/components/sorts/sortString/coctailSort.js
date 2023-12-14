//шеуеоная сортировка

const coctailSortString = (List) => {
    var i = 0, j = List.length - 1, s = true, t;
    while (i < j && s) {
        s = false;
        for (var k = i; k < j; k++) {
            if (List[k].Успеваемость > List[k + 1].Успеваемость) {
                t = List[k];
                List[k] = List[k + 1];
                List[k + 1] = t;
                s = true;
            }
        }
        j--;
        if (s) {
            s = false;
            for (var k = j; k > i; k--) {
                if (List[k].Успеваемость < List[k - 1].Успеваемость) {
                    t = List[k];
                    List[k] = List[k - 1];
                    List[k - 1] = t;
                    s = true;
                }
            }
        }
        i++;
    }
    return List;
}

export default coctailSortString