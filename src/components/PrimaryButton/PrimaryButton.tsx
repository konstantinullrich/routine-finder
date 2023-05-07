import React from 'react';

import "./PrimaryButton.css";
import PrimaryButtonSize from "./PrimaryButtonSize";

type PrimaryButtonProps = {
    children: string;
    backgroundColor: string,
    textColor: string,
    onClick: (event: any) => void
    size: PrimaryButtonSize
}

const PrimaryButton = (props: PrimaryButtonProps) => {
    const {backgroundColor, textColor, children, onClick} = props;

    const classNames = () => {
        switch (props.size) {
            case PrimaryButtonSize.LARGE:
                return "primary-button large"
            case PrimaryButtonSize.MEDIUM:
                return "primary-button medium"
            case PrimaryButtonSize.SMALL:
                return "primary-button small"
        }
    }

    const buttonStyles = {
        color: textColor,
        borderColor: backgroundColor,
        background: backgroundColor,
    }


    return (
        <button className={classNames()} style={buttonStyles} onClick={onClick}>
            {children}
        </button>
    );
};

PrimaryButton.defaultProps = {
    size: PrimaryButtonSize.MEDIUM
}

export default PrimaryButton;
