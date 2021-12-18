import React, { useState, useEffect } from 'react';
import monthInfo from './monthInfo';
import generateDays from './generateDays'

const Calendar = (props) => {
    // useMemo for generateDays, don't need to load that on each re-render
    return (
        <div className='calendar'>
            <div className='calendarHead'>
                {!props.side || props.side === 'L' ? <button className='changeMonth' onClick={() => props.decrementMonth()}>{'<-'}</button> : <div className='calHeadSpace'></div>}
                <div>{`${monthInfo[props.month][0]} ${props.year}`}</div>
                {!props.side || props.side === 'R' ? <button className='changeMonth' onClick={() => props.incrementMonth()}>{'->'}</button> : <div className='calHeadSpace'></div>}
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th>
                    </tr>
                </thead>
                <tbody>
                    {generateDays(props.month, props.year)}
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;