import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleCLick, text}) => { 
  return (
    <button onClick={handleCLick}>{text}</button>
  )
}


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(anecdotes.map(() => 0))
  
  const nextAnecdote = () => {
    const max = anecdotes.length
    const jump = Math.floor(Math.random() * max)
    setSelected(jump)
  }

  const nextVote = () => {
    const copy = [ ...vote ]
    copy[selected] += 1
    setVote(copy)
  }

  const maxVotes = Math.max.apply(0, vote)
  const indexAnecdote = vote.indexOf(maxVotes)
  
  return (
    <div>
      <div>
        <p>{props.anecdotes[selected]}</p>
        <p>Has {vote[selected]} votes</p>
        <div>
          <Button handleCLick={nextVote} text="Vote" />
          <Button handleCLick={nextAnecdote} text="Next anecdote" />
        </div>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        <p>{anecdotes[indexAnecdote]}</p>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)