import React from 'react';

import "./ImageButton.css";

type ImageButtonProps = {
    onClick: () => void,
    label: string,
    imageUrl: string,
    selected: boolean
}

const ImageButton = (props: ImageButtonProps) => {
    const {onClick, selected, label, imageUrl} = props;

    const classNames = () => {
        if (selected)
            return "image-button selected"
        return "image-button"
    }

    const buttonStyles = {
        backgroundImage: `url(${imageUrl})`,
    }

    return (
        <button
            style={buttonStyles}
            onClick={onClick}
            className={classNames()}>
            {label}
        </button>

    );
};

ImageButton.defaultProps = {
    selected: false
}

export default ImageButton;
