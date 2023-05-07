import React, {useState} from 'react';

import "./FinderPage.css";
import ProcessBar from "../../components/ProcessBar";
import QuestionSlide from "./components/QuestionSlide";

const FinderPage = () => {
    const [progress, setProgress] = useState(1)

    const questions = [
        {
            "title": "WILKOMMEN",
            "question": "Wie heißt du?",
            "answer": {
                "type": "text",
                "options": null,
                "variable": "user_name"
            }
        },
        {
            "title": "WILKOMMEN",
            "question": "Wie heißt du?",
            "answer": {
                "type": "text",
                "options": null,
                "variable": "user_name"
            }
        }
    ]

    const onNext = () => {
        if (progress < questions.length)
            setProgress(progress + 1)
    }

    const onBack = () => {
        if (progress > 0)
            setProgress(progress - 1)
    }

    return (
        <div className=" finder app-container">
            <div className="finder progress-bar">
                <ProcessBar progress={(progress / questions.length) * 100} backgroundColor="rgba(6, 38, 53, 0.20)" progressColor="#062635"/>
            </div>
            <QuestionSlide
                title="WILKOMMEN"
                question="Wie heißt du?"
                onNext={onNext}
                onBack={onBack}
            />
        </div>
    );
}

export default FinderPage;
