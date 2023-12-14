import React from 'react';
import moduleTable from './MyTable.module.sass'

const MyTableData = ({ time1, time2, time3, time4, time5, ...props }) => {

    return (
        <div className={moduleTable.tableBox}>
            <table >
                <tr>
                    <td></td>
                    <td>Пузырек</td>
                    <td>Выбор</td>
                    <td>Вставки</td>
                    <td>Шейкерная</td>
                    <td>Быстрая</td>
                </tr>
                <tr>
                    <td>Время</td>
                    <td>{time1}</td>
                    <td>{time2}</td>
                    <td>{time3}</td>
                    <td>{time4}</td>
                    <td>{time5}</td>
                </tr>
                
            </table>
        </div>
    );
};

export default MyTableData;