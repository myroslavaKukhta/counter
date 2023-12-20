import React, { useState } from 'react';
import './App.css';
import { Counter } from './Counter';
import { Setting, SettingPropsType } from './Setting';

function App() {
    const [count, setCount] = useState(0);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [maxValue, setMaxValue] = useState<number>(
        () => {
            const savedMaxValue = localStorage.getItem('maxValue');
            return savedMaxValue ? parseInt(savedMaxValue, 10) : 10; // За замовчуванням 10, якщо значення не знайдено
        }
    );
    const [startValue, setStartValue] = useState(0);

    const onSetHandler: SettingPropsType['onSetHandler'] = (newMaxValue, newStartValue) => {
        if (newMaxValue < 0 || newStartValue < 0 || newStartValue >= newMaxValue) {
            setErrorMessage('Invalid input! Please enter non-negative numbers.');
        } else {
            localStorage.setItem('maxValue', newMaxValue.toString());
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
                onStartValueChange={setStartValue}
            />
        </div>
    );
}

export default App;