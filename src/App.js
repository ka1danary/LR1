import './reset.sass'
import './App.sass'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import Header from "./components/header/Header";
import HomePage from "./components/pages/home/HomePage";

import generateArray from './components/sorts/array-fill';
import MainPage from './main/MainPage';

import mergeSort from './components/sorts/externalSortString/mergeSortData.js';
import data from './data.js'
import SortString from './components/pages/SortsString/SortString.jsx';

function App() {


  //structuredClone
  const [timeBubble25, setimeBubble25] = useState(0)
  const [timeBubble100, setimeBubble100] = useState(0)
  const [timeBubble500, setimeBubble500] = useState(0)
  const [timeBubble1000, setimeBubble1000] = useState(0)
  const [timeBubble5000, setimeBubble5000] = useState(0)

  const [timeSelect25, setimeSelect25] = useState(0)
  const [timeSelect100, setimeSelect100] = useState(0)
  const [timeSelect500, setimeSelect500] = useState(0)
  const [timeSelect1000, setimeSelect1000] = useState(0)
  const [timeSelect5000, setimeSelect5000] = useState(0)

  const [timeinsert25, setimeinsert25] = useState(0)
  const [timeinsert100, setimeinsert100] = useState(0)
  const [timeinsert500, setimeinsert500] = useState(0)
  const [timeinsert1000, setimeinsert1000] = useState(0)
  const [timeinsert5000, setimeinsert5000] = useState(0)

  const [timeCoctail25, setimeCoctail25] = useState(0)
  const [timeCoctail100, setimeCoctail100] = useState(0)
  const [timeCoctail500, setimeCoctail500] = useState(0)
  const [timeCoctail1000, setimeCoctail1000] = useState(0)
  const [timeCoctail5000, setimeCoctail5000] = useState(0)

  const [timeQuick25, setimeQuickl25] = useState(0)
  const [timeQuick100, setimeQuick100] = useState(0)
  const [timeQuick500, setimeQuick500] = useState(0)
  const [timeQuick1000, setimeQuick1000] = useState(0)
  const [timeQuick5000, setimeQuick5000] = useState(0)

  const handletimeBubble25 = (event) => {
    setimeBubble25(event)
  }
  const handletimeBubble100 = (event) => {
    setimeBubble100(event)
  }
  const handletimeBubble500 = (event) => {
    setimeBubble500(event)
  }
  const handletimeBubble1000 = (event) => {
    setimeBubble1000(event)
  }
  const handletimeBubble5000 = (event) => {
    setimeBubble5000(event)
  }
///
  const handletimeSelect25 = (event) => {
    setimeSelect25(event)
  }
  const handletimeSelect100 = (event) => {
    setimeSelect100(event)
  }
  const handletimeSelect500 = (event) => {
    setimeSelect500(event)
  }
  const handletimeSelect1000 = (event) => {
    setimeSelect1000(event)
  }
  const handletimeSelect5000 = (event) => {
    setimeSelect5000(event)
  }

///

const handletimeinser25 = (event) => {
  setimeinsert25(event)
}
const handletimeinser100 = (event) => {
  setimeinsert100(event)
}
const handletimeinser500 = (event) => {
  setimeinsert500(event)
}
const handletimeinser1000 = (event) => {
  setimeinsert1000(event)
}
const handletimeinser5000 = (event) => {
  setimeinsert5000(event)
}

///

const handletimeSoctail25 = (event) => {
  setimeCoctail25(event)
}
const handletimeSoctail100 = (event) => {
  setimeCoctail100(event)
}
const handletimeSoctail500 = (event) => {
  setimeCoctail500(event)
}
const handletimeSoctail1000 = (event) => {
  setimeCoctail1000(event)
}
const handletimeSoctail5000 = (event) => {
  setimeCoctail5000(event)
}

//

const handletimeQuickl25 = (event) => {
  setimeQuickl25(event)
}
const handletimeQuickl100 = (event) => {
  setimeQuick100(event)
}
const handletimeQuickl500 = (event) => {
  setimeQuick500(event)
}
const handletimeQuickl1000 = (event) => {
  setimeQuick1000(event)
}
const handletimeQuickl5000 = (event) => {
  setimeQuick5000(event)
}

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/"
          element={
            <HomePage
              time1={timeBubble25}
              time2={timeBubble100}
              time3={timeBubble500}
              time4={timeBubble1000}
              time5={timeBubble5000}

              time6={timeSelect25}
              time7={timeSelect100}
              time8={timeSelect500}
              time9={timeSelect1000}
              time10={timeSelect5000}

              time11={timeinsert25}
              time12={timeinsert100}
              time13={timeinsert500}
              time14={timeinsert1000}
              time15={timeinsert5000}

              time16={timeCoctail25}
              time17={timeCoctail100}
              time18={timeCoctail500}
              time19={timeCoctail1000}
              time20={timeCoctail5000}

              time21={timeQuick25}
              time22={timeQuick100}
              time23={timeQuick500}
              time24={timeQuick1000}
              time25={timeQuick5000}

            />} />
        <Route path="/bubble"
          element={<MainPage
            time1={handletimeBubble25}
            time2={handletimeBubble100}
            time3={handletimeBubble500}
            time4={handletimeBubble1000}
            time5={handletimeBubble5000}

            time6={handletimeSelect25}
            time7={handletimeSelect100}
            time8={handletimeSelect500}
            time9={handletimeSelect1000}
            time10={handletimeSelect5000}

            time11={handletimeinser25}
            time12={handletimeinser100}
            time13={handletimeinser500}
            time14={handletimeinser1000}
            time15={handletimeinser5000}

            time16={handletimeSoctail25}
            time17={handletimeSoctail100}
            time18={handletimeSoctail500}
            time19={handletimeSoctail1000}
            time20={handletimeSoctail5000}

            time21={handletimeQuickl25}
            time22={handletimeQuickl100}
            time23={handletimeQuickl500}
            time24={handletimeQuickl1000}
            time25={handletimeQuickl5000}
          />
          } />
        <Route path='/string'
          element={<SortString />}
        />

      </Routes>
    </div>
  );
}

export default App;
