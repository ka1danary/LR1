import React from 'react';
import { useState } from 'react';
//копоненты
import moduleMain from './MainPage.module.sass'
import MyButton from '../../../ui/button/MyButton';
import MyPlaceholder from '../../../ui/placeholder/MyPlaceholder';

import { INT25, INT100, INT500, INT1000, INT5000 } from '../../../../dataInt'
//сортировки
import mergeSort from '../../../sorts/externalSorts/mergeSort';
import naturalMergeSort from '../../../sorts/externalSorts/naturalMergeSort';

const ExternalIntPage = ({ ...props }) => {
    //исходный массив/ отсортированный массив
    const [array, setArray] = useState([])
    const [sortArray, setSortArray] = useState([])
    const [string, setString] = useState(' ')

    //заполнение массива  числами из файла
    const fillArray = (lenght) => {
        setArray([])
        setSortArray([])
        if (lenght === 25) {
            setArray(INT25)
        }
        else if (lenght === 100) {
            setArray(INT100)
        }
        else if (lenght === 500) {
            setArray(INT500)
        }
        else if (lenght === 1000) {
            setArray(INT1000)
        }
        else if (lenght === 5000) {
            setArray(INT5000)
        }
        console.log(array.lenght)
    }

    // функция сортировки пузырьком 
    const mergeSortFunc = (array) => {
        if (array.length > 0) {
            setString('Слияние')
            var totalTime = performance.now();
            const temp = mergeSort(structuredClone(array))
            totalTime = (performance.now() - totalTime).toFixed(3)
            setSortArray(temp)
            if (array.length === 25) {
                props.time1(totalTime)
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

    const NMergeSortFunc = (array) => {
        if (array.length > 0) {
            setString('Естественная')
            var totalTime = performance.now();
            const temp = mergeSort(structuredClone(array))
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

    const BMergeSortFunc = (array) => {
        if (array.length > 0) {
            setString('Баланс')
            var totalTime = performance.now();
            const temp = mergeSort(structuredClone(array))
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
                    <MyButton title='Слияние' onClick={() => {
                        mergeSortFunc(array)
                    }
                    } />
                    <MyButton title='Натуральное' onClick={() => {
                        NMergeSortFunc(array)
                    }}
                    />
                    <MyButton title='Сбалансированное' onClick={() => {
                        BMergeSortFunc(array)
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

export default ExternalIntPage;