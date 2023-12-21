// сортировка пузырьком

function bubbleSortString(List) {
    let counter = 0
        for (var i = 0; i < List.length; i++) {
            for (var j = 0; j < List.length - i - 1; j++) {
                if (List[j].Успеваемость > List[j + 1].Успеваемость) {
                    counter++
                    var temp = List[j];
                    List[j] = List[j + 1];
                    List[j + 1] = temp;
                }
            }
        }
        console.log('Количество перестановок для пузырька (STRING) = ' + counter )
        return List;
    }

export default bubbleSortString