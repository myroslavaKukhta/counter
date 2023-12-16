import React, { useState } from 'react';
import s from './Setting.module.css';

export type SettingPropsType = {
    onSetHandler: (maxValue: number, startValue: number) => void;
};

export const Setting: React.FC<SettingPropsType> = ({ onSetHandler }) => {
    const [maxValue, setMaxValue] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);

    const onMaxValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        setMaxValue(value);
    };

    const onStartValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        setStartValue(value);
    };

    const onSetClick = () => {
        if (maxValue < 0 || startValue < 0) {
            alert('Invalid input! Please enter non-negative numbers.');
        } else {
            onSetHandler(maxValue, startValue);
        }
    };

    return (
        <div className={s.setting}>
            <div className={s.inputs}>
                <label className={s.label}>
                    Max Value
                    <input type="number" value={maxValue} onChange={onMaxValueChange} />
                </label>

                <label className={s.label}>
                    Start Value
                    <input type="number" value={startValue} onChange={onStartValueChange} />
                </label>
            </div>
            <div className={s.buttons}>
                <button className={s.set} onClick={onSetClick}>
                    Set
                </button>
            </div>
        </div>
    );
};