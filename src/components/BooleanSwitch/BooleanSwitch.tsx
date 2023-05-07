import React from 'react';

import "./BooleanSwitch.css";

type BooleanSwitchProps = {
    onChange: (value: boolean) => void,
    trueLabel: string,
    falseLabel: string
}

const BooleanSwitch = (props: BooleanSwitchProps) => {
    const {onChange, trueLabel, falseLabel} = props;

    return (
        <div className="boolean-switch-container">
            <div className="boolean-switch-child">
                <button onClick={() => onChange(true)}>
                    ✔️
                </button>
                {trueLabel}
            </div>
            <div className="boolean-switch-child">
                <button onClick={() => onChange(false)}>
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
