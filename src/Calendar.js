import React, { useState, useEffect } from 'react';
import monthInfo from './monthInfo';
import generateDays from './generateDays'
import {ReactComponent as ArrowLeft} from './icons/ArrowLeft.svg'
import {ReactComponent as ArrowRight} from './icons/ArrowRight.svg'

const Calendar = (props) => {
    // useMemo for generateDays, don't need to load that on each re-render
    return (
        <div className='calendar'>
            <div className='calendarHead'>
                {!props.side || props.side === 'L' ? <ArrowLeft className='changeMonth' onClick={() => props.decrementMonth()} /> : <div className='calHeadSpace'></div>}
                <div>{`${monthInfo[props.month][0]} ${props.year}`}</div>
                {!props.side || props.side === 'R' ? <ArrowRight className='changeMonth' onClick={() => props.incrementMonth()} /> : <div className='calHeadSpace'></div>}
            </div>
            <table className='calendarTable'>
                <thead>
                    <tr>
                        <th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th>
                    </tr>
                </thead>
                <tbody onClick={(evt) => props.selectDate(evt, props.side)}>
                    {generateDays(props.month, props.year, props.startDate, props.endDate, props.todayTime, props.calendarMax)}
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;