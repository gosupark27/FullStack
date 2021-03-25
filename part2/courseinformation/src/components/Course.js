import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './Total'

const Course = ({ course }) => {
    const { name, parts } = course
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)

    return (
        <div>
            <Header name={name} />
            <Content parts={parts} />
            <Total total={total} />
        </div>
    )
}

export default Course;