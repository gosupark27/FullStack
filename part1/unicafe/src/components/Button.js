import React from 'react'

const Button = ({statistics}) => {
    return(
        statistics.map((item, index) => <button key={index} onClick={item.onClick}>{item.name}</button>)
    )
}

export default Button;