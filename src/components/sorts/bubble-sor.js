// сортировка пузырьком
import { defaultCompare, Compare } from "./supporting_func";
//сравнение рядомстоящих жлементов последовательности, пока не отсортируется весь массив

const buuble_sort = (arr, compare = defaultCompare) => {
    
    const { length } = arr;
    let temp;
    let counter = 0;
    // пробегам по всем элементам массива
    for (let i = 1; i < length; i++) { 
        // устанавливаем индекс на текущем элементе цикла
        let j = i;
        // в качестве переменной сравнения берем значение текущего элементам
        temp = arr[i];
        // пока j > 0 ( то есть сравниваем с нисходящими элементами) и если предыдущий элемент < текущего, то тогда меняем их местами
        while (j > 0 && compare(arr[j - 1], temp) === Compare.BIGGER_THAN) {
            counter++
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp; // и ставим первый элемент при сравнении вниз
    }
    console.log('Количество перестановок для пузырька = ' + counter )
    return arr
}

export default buuble_sort

