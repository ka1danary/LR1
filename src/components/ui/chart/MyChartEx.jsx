import React from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


const MyChart = ({ time1, time2, time3 }) => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Сравнение времени',
            },
        },
    }

    const labels = ['10', '25', '500', '1000', '5000']

    const data = {
        labels,
        datasets: [
            {
                label: 'Слияние',
                data: labels.map((i, j) => time1[j]),
                borderColor: '#ff6384',
                backgroundColor: '#ff6384',
            },
            {
                label: 'Натуральная',
                data: labels.map((i, j) => time2[j]),
                borderColor: '#35a2eb',
                backgroundColor: '#35a2eb',
            },
            {
                label: 'Сбалансированная',
                data: labels.map((i, j) => time3[j]),
                borderColor: '#35ebb1',
                backgroundColor: '#35ebb1',
            }
        ],
    };

    return (
        <div >
            <Line options={options} data={data} style={{'height' : '500px', 'weight' : '500px'}}/>
        </div>
    );
};

export default MyChart;