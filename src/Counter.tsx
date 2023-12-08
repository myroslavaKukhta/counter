import React, {useState} from 'react';
import s from './Counter.module.css';


export type CounterPropsType = {
    maxValue: number;
    startValue: number;
};

export const Counter: React.FC<CounterPropsType> = ({maxValue, startValue}) => {

    let [count, setCount] = useState(startValue)


    const onIncrementHandler = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    }

    const onResetHandler = () => {
        setCount(startValue)
    }

    return (
        <div className={s.counter}>
            <h3 className={count < 5 ? s.count : s.red}>{count}</h3>

            <div className={s.buttons}>
                <button onClick={onIncrementHandler}
                        disabled={count === maxValue}
                        className={count > maxValue ? s.red : s.normal}>
                    Inc
                </button>
                <button onClick={onResetHandler}
                        disabled={count === startValue}
                        className={s.red}>
                    Reset
                </button>
            </div>

        </div>
    );
};
