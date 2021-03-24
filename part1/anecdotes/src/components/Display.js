import React from 'react'

const Display = ({message, vote}) => {

    return(
        <div>
            <h1>Anecdote of the day</h1>
            <p>{message}</p>
            <p>Has {vote} votes.</p>
        </div>
    )
}

export default Display;