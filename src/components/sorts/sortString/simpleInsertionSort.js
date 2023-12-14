// сортировка простыми вставками  

const simple_insertion_sort_data = (List) => {

    let n = List.length;
    for (let i = 1; i < n; i++) {
        let current = List[i].Успеваемость
        let temp = List[i]
        let j = i - 1
        while ((j > -1) && (current < List[j].Успеваемость)) {
            List[j + 1] = List[j];
            j--;
        }
        List[j + 1] = temp
    }
    return List;
}

export default simple_insertion_sort_data