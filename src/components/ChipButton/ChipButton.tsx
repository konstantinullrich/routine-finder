import React from 'react';

import "./ChipButton.css";

type ChipButtonProps = {
    onClick: () => void,
    label: string,
    selected: boolean
}

const ChipButton = (props: ChipButtonProps) => {
    const {onClick, selected, label} = props;

    const classNames = () => {
        if (selected)
            return "chip-button selected"
        return "chip-button"
    }

    return (
        <button onClick={onClick} className={classNames()}>
            {label}
        </button>

    );
};

ChipButton.defaultProps = {
    selected: false
}

export default ChipButton;
