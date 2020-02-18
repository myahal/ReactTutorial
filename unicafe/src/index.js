import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Title = ({ text }) => {
    return (
        <h1>{text}</h1>
    )
}

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const Statistic = ({ text, value }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>

    )
}

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad
    const average = (good + bad * -1) / all || 0
    const positive = good / all * 100 || 0 + '%'
    return (
        <table>
            <tbody>
                <Statistic text='good' value={good} />
                <Statistic text='neutral' value={neutral} />
                <Statistic text='bad' value={bad} />
                <Statistic text='all' value={all} />
                <Statistic text='average' value={average} />
                <Statistic text='positive' value={positive} />
            </tbody>
        </table>
    )
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const clickGood = () => {
        setGood(good + 1)
    }
    const clickNeutral = () => {
        setNeutral(neutral + 1)
    }
    const clickBad = () => {
        setBad(bad + 1)
    }
    return (
        <div>
            <Title text="give feedback" />
            <Button onClick={() => clickGood()} text='good' />
            <Button onClick={() => clickNeutral()} text='neutral' />
            <Button onClick={() => clickBad()} text='bad' />

            <Title text="statistics" />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


