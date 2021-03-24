import React, { useState } from 'react'
import Button from './components/Button'
import Display from './components/Display'
import TopVoteDisplay from './components/TopVoteDisplay'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const arr = Array.apply(null, new Array(anecdotes.length)).fill(0)
  const [vote, setVote] = useState(arr)
  
  const setToSelected = () => {
    let newSelect = Math.floor(Math.random() * anecdotes.length);
    setSelected(newSelect)
  }

  const setToVote = () => {
    const copy = [...vote]
    copy[selected] +=1;
    setVote(copy)
  }

  return (
    <div>
      <Display message={anecdotes[selected]} vote={vote[selected]}/>
      <Button onClick={setToVote} name="vote"/>
      <Button onClick={setToSelected} name="next anecdote"/>
      <TopVoteDisplay vote={vote} anecdotes={anecdotes}/>
    </div>
  )
}

export default App