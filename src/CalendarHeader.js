import React from 'react'
import monthInfo from './monthInfo'

const CalendarHeader = (props) => {
    const startDate = props.startDate ? new Date(props.startDate) : null;
    const endDate = props.endDate ? new Date(props.endDate) : null;

    return (
        <div id='calendarHeader'>
            <div className='dateDisplayField'>
                <p>Arrival</p>
                <p><strong>{startDate ? `${monthInfo[startDate.getMonth()+1][0].slice(0,3)} ${startDate.getDate()}` : 'Select a date'}</strong></p>
            </div>
            <div className='dateDisplayField'>
                <p>Departure</p>
                <p><strong>{endDate ? `${monthInfo[endDate.getMonth()+1][0].slice(0,3)} ${endDate.getDate()}` : 'Select a date'}</strong></p>
            </div>
        </div>
    )
}

export default CalendarHeader;