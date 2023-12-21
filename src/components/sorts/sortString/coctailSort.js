//шеуеоная сортировка

const coctailSortString = (List) => {
    let counter = 0 
    var i = 0, j = List.length - 1, s = true, t;
    while (i < j && s) {
        s = false;
        for (var k = i; k < j; k++) {
            if (List[k].Успеваемость > List[k + 1].Успеваемость) {
                t = List[k];
                counter++
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
                    counter++
                    t = List[k];
                    List[k] = List[k - 1];
                    List[k - 1] = t;
                    s = true;
                }
            }
        }
        i++;
    }
    console.log('Количество перестановок для коктейльной(String) = ' + counter )
    return List;
}

export default coctailSortString