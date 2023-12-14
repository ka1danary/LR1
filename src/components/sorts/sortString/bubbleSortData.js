// сортировка пузырьком


function bubbleSortString(List) {
        for (var i = 0; i < List.length; i++) {
            for (var j = 0; j < List.length - i - 1; j++) {
                if (List[j].Успеваемость > List[j + 1].Успеваемость) {
                    var temp = List[j];
                    List[j] = List[j + 1];
                    List[j + 1] = temp;
                }
            }
        }
    
        return List;
    }

export default bubbleSortString