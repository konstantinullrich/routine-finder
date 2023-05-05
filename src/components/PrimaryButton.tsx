import React from 'react';


type PrimaryButtonProps = {
    children: string;
    backgroundColor: string,
    textColor: string,
    onClick: (event: any) => void
}

const PrimaryButton = (props: PrimaryButtonProps) => {
    const {backgroundColor, textColor, children, onClick} = props;

    //
    //
    const buttonStyles = {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 'bold',
        fontStyle: 'normal',
        textDecoration: 'none',
        fontSize: '20px',
        color: textColor,
        borderColor: backgroundColor,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '30px',
        background: backgroundColor,
        width: 263,
        height: 60,
        cursor: 'pointer'
    }


    return (
        <button style={buttonStyles} onClick={onClick}>
            {children}
        </button>
    );
};

export default PrimaryButton;
