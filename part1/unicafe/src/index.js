import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ( {onClick, text }) => (
  <button onClick = {onClick}> {text} </button>
)
  
const History = (props) => {
  if (props.allClicks.length == 0) {
    return(
      <div> the app is used by pressing the buttons</div>
    )
  }
  return(
  <div> button press history: {props.allClicks.join(' ')}</div>
  )
}

const App = (props) => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  //const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    //setAll(allClicks.concat('G'))
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    //setAll(allClicks.concat('N'))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    //setAll(allClicks.concat('B'))
    setBad(bad + 1)
  }

  return (
    <div>
      <div>
        <h1> give feedback </h1>
        <Button onClick={handleGoodClick} text = 'good' />
        <Button onClick={handleNeutralClick} text = 'neutral' />
        <Button onClick={handleBadClick} text = 'bad' />
        <h1> statistics </h1>
        <p> good {good} </p>
        <p> neutral {neutral} </p>
        <p> bad {bad} </p>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)