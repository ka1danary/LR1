import React, { useState } from 'react';
import module from './SortString.module.sass'

import MyButton from '../../ui/button/MyButton';

import data from '../../../data'

import bubbleSortString from '../../sorts/sortString/bubbleSortData';
import selection_sort from '../../sorts/sortString/selectionSortData';
import simple_insertion_sort from '../../sorts/sortString/simpleInsertionSort';
import MyTableData from '../../ui/table/MyTableData';
import coctailSortString from '../../sorts/sortString/coctailSort';
import QuickSort from '../../sorts/sortString/quickSortData';

const SortString = () => {

    const [array, setArray] = useState(data)
    const [sortArray, setSortArray] = useState(data)
    
    const [totalTime1, setTotalTime1] = useState(0)
    const [totalTime2, setTotalTime2] = useState(0)
    const [totalTime3, setTotalTime3] = useState(0)
    const [totalTime4, setTotalTime4] = useState(0)
    const [totalTime5, setTotalTime5] = useState(0)

    const bubbleSort = (array) => {
        var totalTime1 = performance.now();
        const temp = bubbleSortString(structuredClone(array))
        totalTime1 = (performance.now() - totalTime1).toFixed(3)
        setTotalTime1(totalTime1)
        setArray(temp)
    }
    const selectionSort = (array) => {
        var totalTime2 = performance.now();
        const temp = selection_sort(structuredClone(array))
        totalTime2 = (performance.now() - totalTime2).toFixed(3)
        setTotalTime2(totalTime2)
        setArray(temp)
    }
    const insertionSort = (array) => {
        var totalTime3 = performance.now();
        const temp = simple_insertion_sort(structuredClone(array))
        totalTime3 = (performance.now() - totalTime3).toFixed(3)
        setTotalTime3(totalTime3)
        setArray(temp)
    }
    const coctailSort = (array) => {
        var totalTime4 = performance.now();
        const temp = coctailSortString(structuredClone(array))
        totalTime4 = (performance.now() - totalTime4).toFixed(3)
        setTotalTime4(totalTime4)
        setArray(temp)
    }
    const quickSort = (array) => {
        var totalTime5 = performance.now();
        const temp = QuickSort(structuredClone(array))
        totalTime5 = (performance.now() - totalTime5).toFixed(3)
        setTotalTime5(totalTime5)
        setArray(temp)
    }

    return (
        <div className={module.box}>
            <div className={module.array}>
                {array.map((el, i) => <div>
                    {i}. {el['ФИО']}<>  </>
                    {el['Номер группы']} <>  </> 
                    {el['Успеваемость']}
                </div>)}
            </div>
            <div className={module.MyButton}>
                <MyButton title='Пузырек' onClick={() => {
                    bubbleSort(array)
                }
                } />
                <MyButton title='Выбором' onClick={() => {
                    selectionSort(array)
                }}
                />
                <MyButton title='Вставками' onClick={() => {
                    insertionSort(array)
                }}
                />
                <MyButton title='Шейкерная' onClick={() => {
                    coctailSort(array)
                }}
                />
                <MyButton title='Быстрая' onClick={() => {
                    quickSort(array)
                }}
                />
                <MyButton title='Вернуть' style={{ 'background': '#f55d9a' }} onClick={() => {
                    setArray(data)
                }}
                />
            </div>
            <div className={module.table}>
                <MyTableData
                time1={totalTime1}
                time2={totalTime2}
                time3={totalTime3}
                time4={totalTime4}
                time5={totalTime5}
                />
            </div>
        </div>
    );
};

export default SortString;