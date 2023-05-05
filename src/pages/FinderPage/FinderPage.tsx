import React, {useState} from 'react';

import "./FinderPage.css";
import ProcessBar from "../../components/ProcessBar";
import PrimaryButton from "../../components/PrimaryButton";
import QuestionSlide from "./components/QuestionSlide";

const FinderPage = () => {
    const [progress, setProgress] = useState(5)

    return (
        <div className=" finder app-container">
            <div className="finder progress-bar">
                <ProcessBar progress={progress} backgroundColor="rgba(6, 38, 53, 0.20)" progressColor="#062635"/>
            </div>
            <QuestionSlide
                description="WILKOMMEN"
                question="Wie heißt du?"
                onNext={() => setProgress(progress + 5)}
            />
        </div>
    );
}

export default FinderPage;
