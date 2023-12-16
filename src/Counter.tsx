import React, { useState } from 'react';
import s from './Counter.module.css';

type CounterPropsType = {
    maxValue: number;
    startValue: number;
    errorMessage: string | null;
    count: number;
};

export const Counter: React.FC<CounterPropsType> = ({ maxValue, startValue, errorMessage, count: initialCount }) => {
    const [count, setCount] = useState(initialCount);

    const onIncrementHandler = () => {
        if (count < maxValue) {
            setCount(count + 1);
        }
    };

    const onResetHandler = () => {
        setCount(startValue);
    };

    return (
        <div className={s.counter}>
            <h3 className={count < maxValue ? s.count : s.red}>
                {count >= 0 ? count : errorMessage}
            </h3>

            <div className={s.buttons}>
                <button
                    onClick={onIncrementHandler}
                    disabled={count === maxValue}
                    className={count > maxValue ? s.red : s.normal}
                >
                    Inc
                </button>
                <button onClick={onResetHandler} disabled={count === startValue} className={s.red}>
                    Reset
                </button>
            </div>
        </div>
     );
};