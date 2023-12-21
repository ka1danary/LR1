import React, { useState } from 'react';
import moduleHome from './HomePage.module.sass'

import MyTable from '../../ui/table/MyTable';
import MyChart from '../../ui/chart/MyChart';

const HomePage = (props) => {
    const [time1, setTime1] = useState([props.time1, props.time2, props.time3, props.time4, props.time5])
    const [time2, setTime2] = useState([props.time6, props.time7, props.time8, props.time9, props.time10])
    const [time3, setTime3] = useState([props.time11, props.time12, props.time13, props.time14, props.time15])
    const [time4, setTime4] = useState([props.time16, props.time17, props.time18, props.time19, props.time20])
    const [time5, setTime5] = useState([props.time21, props.time22, props.time23, props.time24, props.time25])

    return (
        <div className={moduleHome.homeBox}>
            <MyChart
                time1={time1}
                time2={time2}
                time3={time3}
                time4={time4}
                time5={time5}

                style={{ 'height': '1000px', 'weight': '1000px' }} />
            <MyTable
                time1={props.time1}
                time2={props.time2}
                time3={props.time3}
                time4={props.time4}
                time5={props.time5}

                time6={props.time6}
                time7={props.time7}
                time8={props.time8}
                time9={props.time9}
                time10={props.time10}

                time11={props.time11}
                time12={props.time12}
                time13={props.time13}
                time14={props.time14}
                time15={props.time15}

                time16={props.time16}
                time17={props.time17}
                time18={props.time18}
                time19={props.time19}
                time20={props.time20}

                time21={props.time21}
                time22={props.time22}
                time23={props.time23}
                time24={props.time24}
                time25={props.time25}
            />
        </div>
    );
};
export default HomePage;