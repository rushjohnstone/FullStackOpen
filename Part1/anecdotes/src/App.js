import React, { useState } from 'react'

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const Anecdote = ({text, votes}) => {
  return (
    <div>
      <p>{text}</p>
      <p>has {votes} points</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const pointsArray = new Array(7).fill(0)
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(pointsArray)

  const randomiseAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }

  const handlePoints = () => {
    const newPoints = [...points]
    newPoints[selected] = points[selected] + 1
    setPoints(newPoints)
  }

  const maxPoints = points.indexOf(Math.max(...points))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]} votes={points[selected]} />
      <Button onClick={randomiseAnecdote} text="next anecdote"/>
      <Button onClick={handlePoints} text="vote"/>
      <h1>Anecdote with the most votes</h1>
      <Anecdote text={anecdotes[maxPoints]} votes={points[maxPoints]} />
    </div>
    
  )
}

export default App