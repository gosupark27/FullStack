import React from 'react'

const TopVoteDisplay = ({ vote, anecdotes }) => {
    const max = Math.max.apply(null, vote)
    const index = vote.indexOf(max);

    if (max === 0) {
        return (
            <div>
                <h1>There is no anecdote with the most votes.</h1>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Anecdote with most votes</h1>
                <p>{anecdotes[index]}</p>
                <p>Has {vote[index]} votes.</p>
            </div>
        )
    }
}

export default TopVoteDisplay;