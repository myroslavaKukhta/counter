import React, { useState } from 'react';
import './App.css';
import { Counter } from './Counter';
import { Setting, SettingPropsType } from './Setting';

function App() {
    const [count, setCount] = useState(0);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const onSetHandler: SettingPropsType['onSetHandler'] = (maxValue, startValue) => {
        if (maxValue < 0 || startValue < 0) {
            setErrorMessage('Invalid input! Please enter non-negative numbers.');
        } else {
            setCount(startValue);
            setErrorMessage(null);
        }
    };

    return (
        <div className="App">
            <Setting onSetHandler={onSetHandler} />
            <Counter maxValue={10} startValue={count} errorMessage={errorMessage} count={count} />
        </div>
    );
}

export default App;