import React from 'react'
import Statistic from './Statistic'

const Statistics = ({ score }) => {
    const [good, neutral, bad] = score;
    const total = good.value + neutral.value + bad.value;

    
    return (
        <div>
            <h1>statistics</h1>
            <table>
                <tbody>
                    <Statistic text={good.name} value={good.value} />
                    <Statistic text={neutral.name} value={neutral.value} />
                    <Statistic text={bad.name} value={bad.value} />
                    <Statistic text='all' value={total} />
                    <Statistic text='average' value={(good.value - bad.value) / total} />
                    <Statistic text='positive' value={(good.value / total) * 100 + ' %'} />

                </tbody>
            </table>

        </div>
    )
}

export default Statistics;