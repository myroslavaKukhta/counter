import React, {useState} from 'react';
import s from './Setting.module.css';


export type CounterPropsType = {
    maxValue: number;
    startValue: number;
};

export const Setting: React.FC<CounterPropsType> = ({maxValue, startValue}) => {

    let [count, setCount] = useState(startValue)


    const onSetHandler = () => {
        setCount(startValue)
    }

    return (
        <div className={s.setting}>
            <div className={s.inputs}>
                <label className={s.label}> Max Value
                    <input type={'number'}/>
                </label>

                <label className={s.label}>
                    Start Value
                    <input type={'number'}/>
                </label>
            </div>
            <div className={s.buttons}>
            <button className={s.set} onClick={onSetHandler}>
                Set
            </button>
            </div>
        </div>
    );
};
