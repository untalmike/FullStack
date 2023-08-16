import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>  
  )
}

const ButtonStatistics = ({text, onClick}) => {

  return (
    <button onClick={onClick} value={text}>{text}</button>  
  )
}

const StatisticLine = ({ value, text }) => {
  return (
    <table style={{width:'30%',textAlign:'left'}}>
      <thead></thead>
      <tbody>
        <tr>
          <th>{text}</th>
          <td>{value}</td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
  )
}

const Statistics = ({good, neutral, bad, all, average, positive, clic, setClic}) => {
  return (
    <>
      <h2>Statistics</h2>
      { good <= 0 && neutral <= 0 && bad <= 0 ? 
        <p>No feedback given</p>
      :
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <ButtonStatistics text="All" onClick={() => (setClic("All"))}/>
          <ButtonStatistics text="Average" onClick={() => (setClic("Average"))}/>
          <ButtonStatistics text="Positive" onClick={() => (setClic("Positive"))}/>
          
          {clic === "All" 
            ? (<StatisticLine text="All" value={all} />) 
            : clic === "Average" 
              ? (<StatisticLine text="Average" value={average} />) 
              : clic === "Positive" 
                ? (<StatisticLine text="Positive" value={positive} />) 
                : (
                    <>
                      <StatisticLine text="All" value={all} />
                      <StatisticLine text="Average" value={average} />
                      <StatisticLine text="Positive" value={positive} />
                    </>
                  )
          
        }

        </div>  
      }
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
  const [clic, setClic] = useState('')
  
  const all = good + neutral + bad
  const average = (good + bad*(-1))/all // (neutral + bad)/good
  const positive = (good/all)*100

  
  const handleGoodClicks = () => {
    setAll(allClicks.concat('good'))
    setGood(good + 1)
  }

  const handleNeutralClicks = () => {
    setAll(allClicks.concat('neutral'))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks.concat('bad'))
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClicks} text="Good" />
      <Button onClick={handleNeutralClicks} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />

      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
        clic={clic}
        setClic={setClic}
      />

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)