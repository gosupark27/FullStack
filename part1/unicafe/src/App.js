import React, { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => {
    setGood(good + 1)
  }
  const setToNeutral = () => {
    setNeutral(neutral + 1)
  }

  const setToBad = () => {
    setBad(bad + 1)
  }

  const statistics = [
    { name: 'good', value: good, onClick: setToGood },
    { name: 'neutral', value: neutral, onClick: setToNeutral },
    { name: 'bad', value: bad, onClick: setToBad },
  ];

  return (
    <div>
      <h1>give feedback</h1>
      <Button statistics={statistics} />
      {(good !== 0 || neutral !== 0 || bad !== 0) ? <Statistics score={statistics} /> : <p>No feedback given</p>}

    </div>
  )
}

export default App