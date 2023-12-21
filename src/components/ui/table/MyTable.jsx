import React from 'react';
import moduleTable from './MyTable.module.sass'

const MyTable = ({ time1, time2, time3, time4, time5, ...props }) => {

    return (
        <div className={moduleTable.tableBox}>
            <table >
                <tr>
                    <td style={{'color' : '#f55d9a'}}>ms</td>
                    <td>10</td>
                    <td>25</td>
                    <td>500</td>
                    <td>1000</td>
                    <td>5000</td>
                </tr>
                <tr>
                    <td>Пузырек</td>
                    <td>{time1}</td>
                    <td>{time2}</td>
                    <td>{time3}</td>
                    <td>{time4}</td>
                    <td>{time5}</td>
                </tr>
                <tr>
                    <td>Выбор</td>
                    <td>{props.time6}</td>
                    <td>{props.time7}</td>
                    <td>{props.time8}</td>
                    <td>{props.time9}</td>
                    <td>{props.time10}</td>
                </tr>
                <tr>
                    <td>Вставки</td>
                    <td>{props.time11}</td>
                    <td>{props.time12}</td>
                    <td>{props.time13}</td>
                    <td>{props.time14}</td>
                    <td>{props.time15}</td>
                </tr>
                <tr>
                    <td>Шейкерная</td>
                    <td>{props.time16}</td>
                    <td>{props.time17}</td>
                    <td>{props.time18}</td>
                    <td>{props.time19}</td>
                    <td>{props.time20}</td>
                </tr>
                <tr>
                    <td>Быстрая</td>
                    <td>{props.time21}</td>
                    <td>{props.time22}</td>
                    <td>{props.time23}</td>
                    <td>{props.time23}</td>
                    <td>{props.time25}</td>
                </tr>
            </table>
        </div>
    );
};

export default MyTable;