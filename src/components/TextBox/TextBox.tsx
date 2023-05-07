import React from 'react';

import './TextBox.css';

type TextBoxProps = {
}

const TextBox = (props: TextBoxProps) => {

    const containerStyles = {
        color: 'rgb(77, 77, 77)',
        fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: 11,
    marginTop: 2,
    marginLeft: 2,
    overflow: 'hidden',
    width: '100%'
}


    return (
        <input className="text-box" type="text" placeholder="Dein Name" />
    );
};

export default TextBox;
