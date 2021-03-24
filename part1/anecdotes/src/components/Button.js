import React from 'react'

const Button = ({onClick, name}) => {
    
    return(
        <button onClick={onClick}>{name}</button>
    )
}

export default Button;