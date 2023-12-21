import React from 'react';
import moduleTable from './MyTable.module.sass'

const MyTableEx = (props) => {
    return (
        <div className={moduleTable.tableBox}>
            <table >
                <tr>
                    <td style={{ 'color': '#f55d9a' }}>ms</td>
                    <td>10</td>
                    <td>25</td>
                    <td>500</td>
                    <td>1000</td>
                    <td>5000</td>
                </tr>
                <tr>
                    <td style={{ 'color': '#f55d9a'}}>Слияние</td>
                    <td>{props.time1}</td>
                    <td>{props.time2}</td>
                    <td>{props.time3}</td>
                    <td>{props.time4}</td>
                    <td>{props.time5}</td>
                </tr>
                <tr>
                    <td>Натур</td>
                    <td>{props.time6}</td>
                    <td>{props.time7}</td>
                    <td>{props.time8}</td>
                    <td>{props.time9}</td>
                    <td>{props.time10}</td>
                </tr>
                <tr>
                    <td>Сбалан</td>
                    <td>{props.time11}</td>
                    <td>{props.time12}</td>
                    <td>{props.time13}</td>
                    <td>{props.time14}</td>
                    <td>{props.time15}</td>
                </tr>
            </table>
        </div>
    );
};

export default MyTableEx;