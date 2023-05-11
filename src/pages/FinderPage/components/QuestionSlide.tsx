import React from 'react';

import "./QuestionSlide.css";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import TextButton from "../../../components/TextButton/TextButton";
import PrimaryButtonSize from "../../../components/PrimaryButton/PrimaryButtonSize";
import InputTypes from "./InputTypes";
import TextBox from "../../../components/TextBox/TextBox";
import BooleanSwitch from "../../../components/BooleanSwitch/BooleanSwitch";

type QuestionSlideProps = {
    key: string,
    title: string;
    question: string,
    nextLabel: string
    backLabel: string,
    input?: InputProps,
    onChange: (value: any) => void,
    onNext?: (event: any) => void,
    onBack?: (event: any) => void
}

type InputProps = {
    type: InputTypes,
    label?: string,
    options?: {}[]
}

const QuestionSlide = (props: QuestionSlideProps) => {

    const input = () => {
        const inputP = props.input
        if (!inputP) return
        switch (inputP.type) {
            case InputTypes.TEXT:
                return <TextBox type="text" label={inputP.label || ""} onChange={props.onChange} />
            case InputTypes.NUMBER:
                return <TextBox type="number" label={inputP.label || ""} onChange={props.onChange} />
            case InputTypes.BOOLEAN:
                return <BooleanSwitch onChange={props.onChange} />
        }
    }


    return (
        <div className=" finder question-slide">
            <div className="question-slide title">
                <p>{props.title}</p>
            </div>
            <div className="question-slide question">
                <p>{props.question}</p>
            </div>
            <div className="question-slide user-input">
                { input() }
            </div>
            {props.onNext &&
                <PrimaryButton
                    backgroundColor="rgb(6, 38, 53)"
                    textColor="rgb(255, 255, 255)"
                    size={PrimaryButtonSize.LARGE}
                    onClick={props.onNext}>
                    {props.nextLabel}
                </PrimaryButton>
            }
            {props.onBack &&
                <TextButton
                    textColor="rgb(6, 38, 53)"
                    onClick={props.onBack}>
                    {props.backLabel}
                </TextButton>
            }
        </div>
    );
}

QuestionSlide.defaultProps = {
    nextLabel: "WEITER",
    backLabel: "ZURÜCK"
}

export default QuestionSlide;
