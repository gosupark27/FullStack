import React from 'react'
import Part from './Part'

const Content = ({part, exercise}) => {
    return(
        <div>
        <Part part={part[0].name} exercise={exercise[0].exercises}/>
        <Part part={part[1].name} exercise={exercise[1].exercises}/>
        <Part part={part[2].name} exercise={exercise[2].exercises}/>
      </div>
    )
}

export default Content;