import React, { useState } from 'react';

//копоненты
import moduleMain from './MainPage.module.sass'
import MyButton from '../components/ui/button/MyButton';
import MyPlaceholder from '../components/ui/placeholder/MyPlaceholder';
import generateArray from '../components/sorts/array-fill';

import {INT25, INT100, INT500, INT1000, INT5000} from '../dataInt'
//сортировки
import buuble_sort from '../components/sorts/bubble-sor';
import coctail_sort from '../components/sorts/coctail-sort'
import quick_sort from '../components/sorts/quick-sort'
import selection_sort from '../components/sorts/selection_sort'
import insertion_sort from '../components/sorts/simple-insertion-sort'


const MainPage = ({ time1, ...props }) => {

    //исходный массив/ отсортированный массив
    const [array, setArray] = useState([])
    const [sortArray, setSortArray] = useState([])
    const [string, setString] = useState(' ')

    //состояние времени
    // const [timeBubble25,setimeBubble25] = useState(0)
    // const [timeBubble100,setimeBubble100] = useState(0)
    // const [timeBubble500,setimeBubble500] = useState(0)
    // const [timeBubble1000,setimeBubble1000] = useState(0)
    // const [timeBubble5000,setimeBubble5000] = useState(0)

    //заполнение массива случайными числами 
    const fillArray = (lenght) => {
        setArray([])
        setSortArray([])
        if(lenght === 25) {
            setArray(INT25)
        }
        else if(lenght === 100) {
            setArray(INT100)
        }
        else if(lenght === 500) {
            setArray(INT500)
        }
        else if(lenght === 1000) {
            setArray(INT1000)
        }
        else if(lenght === 5000) {
            setArray(INT5000)
        }
        console.log(array.lenght)
    }

    // функция сортировки пузырьком 
    const bubbleSort = (array) => {
        if (array.length > 0) {
            setString('Пузырьком')
            var totalTime = performance.now();
            const temp = buuble_sort(structuredClone(array))
            totalTime = (performance.now() - totalTime).toFixed(3)
            setSortArray(temp)
            if (array.length === 25) {
                time1(totalTime)
            }
            else if (array.length === 100) {
                props.time2(totalTime)
            }
            else if (array.length === 500) {
                props.time3(totalTime)
            }

            else if (array.length === 1000) {
                props.time4(totalTime)
            }
            else if (array.length === 5000) {
                props.time5(totalTime)
            }
        }
        else {
            console.log('Заполните массив!')
        }
    }

    // сортировка выбором 
    const selectionSort = (array) => {
        if (array.length > 0) {
            setString('Выбором')
            var totalTime = performance.now();
            const temp = selection_sort(structuredClone(array))
            totalTime = (performance.now() - totalTime).toFixed(3)
            setSortArray(temp)
            if (array.length === 25) {
                props.time6(totalTime)
            }
            else if (array.length === 100) {
                props.time7(totalTime)
            }
            else if (array.length === 500) {
                props.time8(totalTime)
            }

            else if (array.length === 1000) {
                props.time9(totalTime)
            }
            else if (array.length === 5000) {
                props.time10(totalTime)
            }
        }
        else {
            console.log('Заполните массив!')
        }
    }

    // Сортировка простыми вставками 
    const insertionSort = (array) => {
        if (array.length > 0) {
            setString('Вставками')
            var totalTime = performance.now();
            const temp = insertion_sort(structuredClone(array))
            totalTime = (performance.now() - totalTime).toFixed(3)
            setSortArray(temp)
            if (array.length === 25) {
                props.time11(totalTime)
            }
            else if (array.length === 100) {
                props.time12(totalTime)
            }
            else if (array.length === 500) {
                props.time13(totalTime)
            }

            else if (array.length === 1000) {
                props.time14(totalTime)
            }
            else if (array.length === 5000) {
                props.time15(totalTime)
            }
        }
        else {
            console.log('Заполните массив!')
        }
    }

    //шейкерная сортировка
    const coctailSort = (array) => {
        if (array.length > 0) {
            setString('Шейкерная')
            var totalTime = performance.now();
            const temp = coctail_sort(structuredClone(array))
            totalTime = (performance.now() - totalTime).toFixed(3)
            setSortArray(temp)
            if (array.length === 25) {
                props.time16(totalTime)
            }
            else if (array.length === 100) {
                props.time17(totalTime)
            }
            else if (array.length === 500) {
                props.time18(totalTime)
            }

            else if (array.length === 1000) {
                props.time19(totalTime)
            }
            else if (array.length === 5000) {
                props.time20(totalTime)
            }
        }
        else {
            console.log('Заполните массив!')
        }
    }

    //быстрая сортировка
    const quickSort = (array) => {
        if (array.length > 0) {
            setString('Быстрая')
            var totalTime = performance.now();
            const temp = quick_sort(structuredClone(array))
            totalTime = (performance.now() - totalTime).toFixed(3)
            setSortArray(temp)
            if (array.length === 25) {
                props.time21(totalTime)
            }
            else if (array.length === 100) {
                props.time22(totalTime)
            }
            else if (array.length === 500) {
                props.time23(totalTime)
            }

            else if (array.length === 1000) {
                props.time24(totalTime)
            }
            else if (array.length === 5000) {
                props.time25(totalTime)
            }
        }
        else {
            console.log('Заполните массив!')
        }

    }



    // основная страница 
    return (
        <div>
            <div className={moduleMain.mainBox}>
                <div className={moduleMain.generationBox}>
                    <h1>
                        Сгенерировать массив
                    </h1>
                    <div className={moduleMain.buttonBox}>
                        <MyButton
                            title='25'
                            onClick={() => {
                                fillArray(25)
                            }}
                        />
                        <MyButton
                            title='100'
                            onClick={() => {
                                fillArray(100)
                            }} />
                        <MyButton
                            title='500'
                            onClick={() => {
                                fillArray(500)
                            }} />
                        <MyButton
                            title='1000'
                            onClick={() => {
                                fillArray(1000)
                            }} />
                        <MyButton
                            title='5000'
                            onClick={() => {
                                fillArray(5000)
                            }} />

                    </div>
                </div>
                <div>
                    <h1>Исходный массив: - {array.length} элементов</h1>
                    <MyPlaceholder data={array} />
                </div>
                <div>
                    <h1>Отсортированный массив: - {string} </h1>
                    <MyPlaceholder data={sortArray} />
                </div>
            </div>
            <div className={moduleMain.sortContainer}>
                <h1>
                    Метод сортировки
                </h1>
                <div className={moduleMain.sortBox}>
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
                </div>
                <MyButton style={{ 'background': '#f55d9a' }} title='Очистить' onClick={() => {
                    setArray([])
                    setSortArray([])
                }}
                />
            </div>


        </div>
    );
};

export default MainPage;