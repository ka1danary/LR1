import React from 'react';
import moduleTable from './MyTable.module.sass'

const MyTableExData = ({ time1, time2, time3, ...props }) => {
    return (
        <div>
            <div className={moduleTable.tableBox}>
            <table >
                <tr>
                    <td style={{'color' : '#f55d9a'}}>ms</td>
                    <td style={{'color' : '#f55d9a'}}>Слияние</td>
                    <td style={{'color' : '#f55d9a'}}>Натур</td>
                    <td style={{'color' : '#f55d9a'}}>Баланс</td>
                </tr>
                <tr>
                    <td>Время</td>
                    <td>{time1}</td>
                    <td>{time2}</td>
                    <td>{time3}</td>
                </tr>
            </table>
        </div>
        </div>
    );
};

export default MyTableExData;