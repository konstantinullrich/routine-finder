import React from 'react';


type ProgressBarProps = {
    progress: number,
    backgroundColor: string,
    progressColor: string,
}

const ProgressBar = (props: ProgressBarProps) => {
    const {backgroundColor, progressColor, progress} = props;

    const containerStyles = {
        height: 5,
        width: '100%',
        backgroundColor: backgroundColor,
        borderRadius: 20
    }

    const fillerStyles = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: progressColor,
        borderRadius: 'inherit',
        transition: 'width 1s ease-in-out'
    }


    return (
        <div style={containerStyles}>
            <div style={fillerStyles}/>
        </div>
    );
};

export default ProgressBar;
