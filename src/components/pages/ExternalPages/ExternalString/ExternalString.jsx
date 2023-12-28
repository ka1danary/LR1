import React from 'react';
import {useState} from 'react'

import module from './SortString.module.sass'

import data from '../../../../data'
import mergeSort from '../../../sorts/externalSorts/mergeSort';

import MyButton from '../../../ui/button/MyButton';
import MyTableExData from '../../../ui/table/MyTableExData'; 
import mergeSort1 from '../../../sorts/externalSortString/naturalMergeSort';


const ExternalString = () => {
    const [array, setArray] = useState(data)

    const [type, setType] = useState(' ')

    const [totalTime1, setTotalTime1] = useState(0)
    const [totalTime2, setTotalTime2] = useState(0)
    const [totalTime3, setTotalTime3] = useState(0)

    const mergeSortFunc = (array) => {
        setType('Баланс')
        var totalTime1 = performance.now();
        const temp = mergeSort(structuredClone(array))
        totalTime1 = (performance.now() - totalTime1).toFixed(3)
        setTotalTime1(totalTime1)
        setArray(temp)
    }
    const naturalMergeSort = (array) => {
        setType('Естеств')
        var totalTime2 = performance.now();
        const temp = mergeSort1(structuredClone(array))
        totalTime2 = (performance.now() - totalTime2).toFixed(3)
        setTotalTime2(totalTime2)
        setArray(temp)
    }
    const balansedSort = (array) => {
        setType('Многопоток')
        var totalTime3 = performance.now();
        const temp = mergeSort1(structuredClone(array))
        totalTime3 = (performance.now() - totalTime3).toFixed(3)
        setTotalTime3(totalTime3)
        setArray(temp)
    }

    return (
        <div className={module.box}>
            <div style={{'margin' : '10px'}}>
                <div style={{ 'fontSize': '24px' }}>Массив записей</div>
                <div style={{
                    'fontSize': '20px', 'background': 'black',
                    'color': 'white', 'width': '340px', 'padding': '10px',
                    'margin': '5px', 'border-radius': '10px', 'display': 'flex', 'justifyContent': 'center'
                }}>
                    Сортировка = {type}
                </div>
            </div>

            <div className={module.array}>
                {array.map((el, i) => <div>
                    {i}. {el['ФИО']}<>  </>
                    {el['Номер группы']} <>  </>
                    {el['Успеваемость']}
                </div>)}
            </div>
            <div className={module.MyButton}>
                <MyButton title='Слияние' onClick={() => {
                    mergeSortFunc(array)
                }
                } />
                <MyButton title='Натур' onClick={() => {
                    naturalMergeSort(array)
                }}
                />
                <MyButton title='Баланс' onClick={() => {
                    balansedSort(array)
                }}
                />
                
            </div>
            <div className={module.table}>
                <MyTableExData
                    time1={totalTime1}
                    time2={totalTime2}
                    time3={totalTime3}
                />
            </div>
        </div>
    );
};

export default ExternalString;