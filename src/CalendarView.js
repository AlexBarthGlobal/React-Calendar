import React, { useState, useEffect } from 'react'
import Calendar from './Calendar'

const CalendarView = () => {
    const [month, setMonth] = useState(new Date().getMonth()+1);
    const [year, setYear] = useState(new Date().getFullYear());

    const incrementMonth = () => {
        if (month === 12) {
            setMonth(1);
            setYear(year+1);
        } else setMonth(month+1);
    };

    const decrementMonth = () => {
        if (month === 1) {
            setMonth(12);
            setYear(year-1);
        } else setMonth(month-1);
    };

    const sanitizeMonth = (month) => {
        if (month > 12) return 1
        else return month;
    };
    
    const getWindowDimensions = () => {
        const {innerWidth: width, innerHeight: height} = window;
        return {width, height};
    };

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        };     
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const rightYear = month === 12 ? year+1 : year;

    return (
        // use UseContext so I don't pass in the same props over and over again
        <>
            {
                windowDimensions.width > 836 ? 
                <div id='calendarContainerInner'>
                    <Calendar month={month} year={year} incrementMonth={incrementMonth} decrementMonth={decrementMonth} side={'L'} />
                    <Calendar month={sanitizeMonth(month+1)} year={rightYear} incrementMonth={incrementMonth} decrementMonth={decrementMonth} side={'R'} />
                </div> 
                : 
                <div id='calendarContainerInner'>
                    <Calendar month={month} year={year} incrementMonth={incrementMonth} decrementMonth={decrementMonth}/>
                </div>
            }
        </>
    )
    
}

export default CalendarView;