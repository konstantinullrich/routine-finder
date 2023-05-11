import React from 'react';

import './TextBox.css';

type TextBoxProps = {
    label: string,
    type: "text" | "number",
    onChange: (value: string) => void
}

const TextBox = (props: TextBoxProps) => {

    return (
        <input
            className="text-box"
            type={props.type}
            placeholder={props.label}
            onChange={e => props.onChange(e.target.value)}/>
    );
};

export default TextBox;
