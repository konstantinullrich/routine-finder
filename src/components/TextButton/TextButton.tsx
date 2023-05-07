import React from 'react';

import './TextButton.css';
import TextButtonSize from "./TextButtonSize";

type TextButtonProps = {
    children: string;
    textColor: string,
    onClick: (event: any) => void,
    size: TextButtonSize
}

const TextButton = (props: TextButtonProps) => {
    const {textColor, children, onClick} = props;

    const classNames = () => {
        switch (props.size) {
            case TextButtonSize.LARGE:
                return "text-button large"
            case TextButtonSize.MEDIUM:
                return "text-button medium"
            case TextButtonSize.SMALL:
                return "text-button small"
        }
    }


    const buttonStyles = {
        color: textColor
    }


    return (
        <button style={buttonStyles}  className={classNames()} onClick={onClick}>
            {children}
        </button>
    );
};

TextButton.defaultProps = {
    size: TextButtonSize.MEDIUM
}

export default TextButton;
