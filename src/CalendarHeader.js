import React, { useState, useEffect } from 'react'
import monthInfo from './monthInfo'

const CalendarHeader = (props) => {
    const startDate = props.startDate ? new Date(props.startDate) : null;
    const endDate = props.endDate ? new Date(props.endDate) : null;

    return (
        <div id='calendarHeader'>
            <div className='dateDisplayField'>
                <p>Arrive</p>
                <p>{startDate ? `${monthInfo[startDate.getMonth()+1][0]} ${startDate.getDate()}` : 'Select a date'}</p>
            </div>
            <div className='dateDisplayField'>
                <p>Depart</p>
                <p>{endDate ? `${monthInfo[endDate.getMonth()+1][0]} ${endDate.getDate()}` : 'Select a date'}</p>
            </div>
        </div>
    )
}

export default CalendarHeader;