import React from 'react';
import './App.css';
import {Counter} from "./Counter";
import {CounterPropsType} from "./Counter";
import {Setting} from "./Setting";



function App() {
    const counterProps: CounterPropsType = {
        maxValue: 5,
        startValue: 0,
    };

    return (
        <div className="App">
            <Setting {...counterProps}/>
            <Counter {...counterProps} />
        </div>
    );
}

export default App;
