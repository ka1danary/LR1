// быстрая сортировка
// выбирается опорный элемент, относительно которого мы будем сортировать массив
// далее рекурсивно разбиватеся на два подмассива, пока в подмассиве не останется 1 элемент
// после происходит обратная рекурсия, котрая сливает куски в целый массив

const quickSort = (List) => {
    let counter = 0

    function quickSort2(List) {

        if (List.length <= 1) {
            return List;
        }

        const pivot = List[List.length - 1];
        const leftList = [];
        const rightList = [];

        for (let i = 0; i < List.length - 1; i++) {
            if (List[i] < pivot) {
                leftList.push(List[i]);
                counter++
            }
            else {
                rightList.push(List[i])
                counter++
            }
        }

        return [...quickSort2(leftList), pivot, ...quickSort2(rightList)];
    }

    quickSort2(List)
    console.log('Количество перестановок для быстрой = ' + counter )
    return quickSort2(List)
}

export default quickSort

