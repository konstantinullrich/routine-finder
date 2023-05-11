import React, {useState} from 'react';

import "./FinderPage.css";
import ProcessBar from "../../components/ProcessBar";
import QuestionSlide from "./components/QuestionSlide";
import InputTypes from "./components/InputTypes";
import decisions from "../../decisionTree.json";

const getNextPage = (key: string) => decisions.pages.filter(e => e.key === key)[0]


const FinderPage = () => {
    const [answers, addAnswer] = useState<{ [x: string]: string }>({})
    const [history, setHistory] = useState<string[]>([])
    const [currentPage, setCurrentPage] = useState(getNextPage(decisions.startsAt))

    const onNext = () => {
        if (leadsTo() === "") return;

        history.push(currentPage.key)
        setHistory(history)

        console.log(answers)

        setCurrentPage(getNextPage(leadsTo()))
    }

    const onBack = () => {
        if (history.length === 0) return;

        setCurrentPage(getNextPage(history[history.length - 1]))

        history.pop()
        setHistory(history)
    }

    const leadsTo = () => {
        if (!currentPage.leadsTo) return ""

        console.log(currentPage.leadsTo.replace("param", getPageAnswer()))

        // eslint-disable-next-line no-eval
        return eval(currentPage.leadsTo.replace("param", getPageAnswer())) as string
    }

    const getPageAnswer = () => answers[currentPage.key] || "null"

    const onChange = (e: string) => {
        answers[currentPage.key] = e;
        addAnswer(answers);
    }

    const hasNext = currentPage.leadsTo !== undefined

    return (
        <div className=" finder app-container">
            <div className="finder progress-bar">
                <ProcessBar progress={(history.length / decisions.pages.length) * 100} backgroundColor="rgba(6, 38, 53, 0.20)"
                            progressColor="#062635"/>
            </div>
            <QuestionSlide
                key={currentPage.key}
                input={currentPage.input && {type: currentPage.input.type as InputTypes, label: currentPage.input.label || undefined}}
                question={currentPage.question}
                onChange={onChange}
                title={currentPage.title}
                onNext={hasNext ? onNext : undefined}
                onBack={history.length === 0 ? undefined : onBack}
            />
        </div>
    );
}

export default FinderPage;
