
const QuickSort = (List) => {
    let counter = 0

    function QuickSort2(List) {
        if (List.length <= 1) {
            return List;
        }

        const pivot = List[List.length - 1];
        const leftList = [];
        const rightList = [];

        for (let i = 0; i < List.length - 1; i++) {
            if (List[i].Успеваемость < pivot.Успеваемость) {
                leftList.push(List[i]);
                counter++
            }
            else {
                rightList.push(List[i])
                counter++
            }
        }
        return [...QuickSort2(leftList), pivot, ...QuickSort2(rightList)];
    }

    QuickSort2(List)
    console.log('Количество перестановок для быстрой = ' + counter )
    return QuickSort2(List)
}


export default QuickSort

