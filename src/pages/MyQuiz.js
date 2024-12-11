import {useState} from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from "react-bootstrap/Button";

const questions = [
    {
        'title': 'Question 1',
        'options': ['first', 'second', 'third'],
        'answer': 0
    },
    {
        'title': 'Question 1',
        'options': ['first', 'second', 'third'],
        'answer': 1
    },
    {
        'title': 'Question 1',
        'options': ['first', 'second', 'third'],
        'answer': 0
    }
];

function Result({answer}) {
    return (
        <div className='result'>
            <h1>Congratulations! 🎯</h1>
            <p>You have finished the quiz.</p>
            <p>You have answered on <b>{answer}</b> from <b>{questions.length}</b></p>
            <Button href='/quiz' variant="primary">Try again</Button>
        </div>
    );
}

function QuizApp({step, question, onClickOption}) {

    const progressStatus = Math.round(step / questions.length * 100);

    return (
        <div className='quiz-app'>
            <h1>Quiz</h1>
            <ProgressBar now={progressStatus}/>

            <h2>{question.title}</h2>

            <ListGroup>
                {
                    question.options.map((text, index) => (
                        <ListGroup.Item action onClick={() => onClickOption(index)} key={index}>
                            {text}
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>

        </div>

    );
}

const MyQuiz = () => {

    const [step, setStep] = useState(0);
    const [answer, setAnswer] = useState(0);
    const question = questions[step];

    const onClickOption = (index) => {
        setStep(step + 1);
        if(index === question.answer) {
            setAnswer(answer + 1);
        }
    }

    return (
        <>
            {
                step !== questions.length ? (
                    <QuizApp step={step} question={question} onClickOption={onClickOption}/>
                ) : (
                    <Result answer={answer}/>
                )
            }
        </>
    );
}

export default MyQuiz;