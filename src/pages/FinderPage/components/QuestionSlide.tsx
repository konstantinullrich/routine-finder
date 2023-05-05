import React from 'react';

import "./QuestionSlide.css";
import PrimaryButton from "../../../components/PrimaryButton";

type QuestionSlideProps = {
    description: string;
    question: string,
    onNext: (event: any) => void
}

const QuestionSlide = (props: QuestionSlideProps) => {
    return (
        <div className=" finder question-slide">
            <div className="question-slide description">
                <p>{ props.description }</p>
            </div>
            <div className="question-slide question">
                <p>{ props.question } </p>
            </div>
            <PrimaryButton
                backgroundColor="rgb(6, 38, 53)"
                textColor="rgb(255, 255, 255)"
                onClick={props.onNext}>
                WEITER
            </PrimaryButton>
        </div>
    );
}

export default QuestionSlide;
