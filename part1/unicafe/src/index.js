import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ( {onClick, text }) => (
  <button onClick = {onClick}> {text} </button>
)

const Statistics = (props) => {
  const good = props.good
  const bad = props.bad
  const neutral = props.neutral

  const all = good + bad + neutral
  const average = (good + (bad*-1)) / all
  const positive = (good / all) * 100
  
  return(
    <div>
      <h1> statistics </h1>
      <p> good {good} </p>
      <p> neutral {neutral} </p>
      <p> bad {bad} </p>
      <p> all {all} </p>
      <p> average {average} </p>
      <p> positive {positive} % </p>
    </div>
  )}

const App = (props) => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <div>
        <h1> give feedback </h1>
        <Button onClick={handleGoodClick} text = 'good' />
        <Button onClick={handleNeutralClick} text = 'neutral' />
        <Button onClick={handleBadClick} text = 'bad' />
        <Statistics good = {good} bad = {bad} neutral = {neutral}> </Statistics>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)