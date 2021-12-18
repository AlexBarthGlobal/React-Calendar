import React, { useState, useEffect } from 'react';
import monthInfo from './monthInfo';

const Calendar = (props) => {
    const generateDays = () => {
        const output = [];
        let calEntry = 1;
        let i = 1;
        let j = 0;
        let startDay = new Date(`${props.month} 1, ${props.year}`).getDay();     
        while (i <= monthInfo[props.month][1]) {
            let week = [];
            while (j <= 6 && i <= monthInfo[props.month][1]) {
                if (calEntry <= startDay) week.push(<td>{'n'}</td>)
                else {
                    week.push(<td>{i}</td>)
                    i++;
                };
                j++;
                calEntry++;
            }
            j = 0;
            output.push(<tr>{week}</tr>)
        };
        return output;
    };
    
    const daysOfMonth = generateDays();

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
                    {daysOfMonth}
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;