import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>  
  )
}

const Statistics = ({good, neutral, bad}) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <All good={good} neutral={neutral} bad={bad} />
      <Average good={good} neutral={neutral} bad={bad} />
      <Positive good={good} neutral={neutral} bad={bad} />
    </div>  
  )
}

const All = ({good, neutral, bad}) => {
  return (
    <p>All: {good + neutral + bad}</p>
  )
}

const Average = ({good, neutral, bad}) => {
  let average = 0
  if(good > 0 || neutral > 0 || bad > 0) {
    const adverse = (neutral + bad)
    const total = (adverse/good)
    return ( <p>Average: {average = total}</p> )
  }
  return (
    <p>Average: {average}</p> 
  )
}

const Positive = ({good, neutral, bad}) => {
  let positive = 0
  if(good > 0 || neutral > 0 || bad > 0) {
    const all = (good + neutral + bad)
    return ( <p>Positive: {positive = ((good/all)*100)}%</p> )
  }
  return (
    <p>Positive: {positive}</p> 
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />

      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
      />

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)