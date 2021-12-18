import React, { useState, useEffect } from 'react';
import monthInfo from './monthInfo';

const Calendar = (props) => {
    return (
        <div className='calendar'>
            <div className='calendarHead'>
                {!props.side || props.side === 'L' ? <button className='changeMonth' onClick={() => props.decrementMonth()}>{'<-'}</button> : <div className='calHeadSpace'></div>}
                <div>{`${monthInfo[props.month][0]} ${props.year}`}</div>
                {!props.side || props.side === 'R' ? <button className='changeMonth' onClick={() => props.incrementMonth()}>{'->'}</button> : <div className='calHeadSpace'></div>}
            </div>
        </div>
    )
}

export default Calendar;