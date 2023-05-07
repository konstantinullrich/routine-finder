import React from 'react';

import "./QuestionSlide.css";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import TextBox from "../../../components/TextBox/TextBox";
import TextButton from "../../../components/TextButton/TextButton";
import PrimaryButtonSize from "../../../components/PrimaryButton/PrimaryButtonSize";
import BooleanSwitch from "../../../components/BooleanSwitch/BooleanSwitch";

type QuestionSlideProps = {
    title: string;
    question: string,
    nextLabel: string
    backLabel: string
    onNext?: (event: any) => void
    onBack?: (event: any) => void
}


const QuestionSlide = (props: QuestionSlideProps) => {
    return (
        <div className=" finder question-slide">
            <div className="question-slide title">
                <p>{props.title}</p>
            </div>
            <div className="question-slide question">
                <p>{props.question}</p>
            </div>
            <div className="question-slide user-input">
                <BooleanSwitch onChange={() => {}}/>
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
