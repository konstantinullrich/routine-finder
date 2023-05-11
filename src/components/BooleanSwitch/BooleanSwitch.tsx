import React, {useState} from 'react';

import "./BooleanSwitch.css";

type BooleanSwitchProps = {
    onChange: (value: boolean) => void,
    trueLabel: string,
    falseLabel: string
}

const BooleanSwitch = (props: BooleanSwitchProps) => {
    const {onChange, trueLabel, falseLabel} = props;
    const [currentValue, setCurrentValue] = useState<boolean | undefined>()

    const setValue = (value: boolean) => {
        setCurrentValue(value)
        onChange(value)
    }

    return (
        <div className="boolean-switch-container">
            <div className="boolean-switch-child">
                <button className={currentValue ? "selected" : ""} onClick={() => setValue(true)}>
                    ✔️
                </button>
                {trueLabel}
            </div>
            <div className="boolean-switch-child">
                <button className={currentValue ? "" : "selected"} onClick={() => setValue(false)}>
                    ❌
                </button>
                {falseLabel}
            </div>
        </div>

    );
};

BooleanSwitch.defaultProps = {
    trueLabel: "Ja",
    falseLabel: "Nein"
}

export default BooleanSwitch;
