//сортировка выбором

function selectionSort(List) {
    for (var i = 0; i < List.length - 1; i++) {
        var minIndex = i;

        for (var j = i + 1; j < List.length; j++) {
            if (List[j].Успеваемость < List[minIndex].Успеваемость) {
                minIndex = j;
            }
        }

        [List[i], List[minIndex]] = [List[minIndex], List[i]];
    }

    return List;
}

export default selectionSort