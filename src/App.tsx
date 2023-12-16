import React, { useState } from 'react';
import './App.css';
import { Counter } from './Counter';
import { Setting, SettingPropsType } from './Setting';

function App() {
    const [count, setCount] = useState(0);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [maxValue, setMaxValue] = useState(10); // Дефолтне максимальне значення
    const [startValue, setStartValue] = useState(0);

    const onSetHandler: SettingPropsType['onSetHandler'] = (newMaxValue, newStartValue) => {
        if (newMaxValue < 0 || newStartValue < 0 || newStartValue >= newMaxValue) {
            setErrorMessage('Invalid input! Please enter non-negative numbers.');
        } else {
            setMaxValue(newMaxValue);
            setStartValue(newStartValue);
            setCount(newStartValue);
            setErrorMessage(null);
        }
    };
    return (
        <div className="App">
            <Setting onSetHandler={onSetHandler} />
            <Counter
                maxValue={maxValue}
                startValue={startValue}
                errorMessage={errorMessage}
                count={count}
            />
        </div>
    );
}

export default App;