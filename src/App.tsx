import React from 'react';
import './App.css';
import {Counter} from "./Counter";
import {CounterPropsType} from "./Counter";



function App() {
    const counterProps: CounterPropsType = {
        maxValue: 5,
        startValue: 0,
    };

    return (
        <div className="App">
            <Counter {...counterProps} />
        </div>
    );
}

export default App;
