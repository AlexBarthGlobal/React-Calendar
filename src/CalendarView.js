import React, { useState, useEffect } from 'react'
import Calendar from './Calendar'
import getDate from './getDate'

const CalendarView = () => {
    const todayDate = new Date();
    const [month, setMonth] = useState(todayDate.getMonth()+1);
    const [year, setYear] = useState(todayDate.getFullYear());
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const todayTime = new Date(`${month} ${todayDate.getDate()}, ${year}`).getTime();

    const selectDate = (evt, side) => {
        if (evt.target.className === 'inactive') return;
        const selectedDay = evt.target.textContent;
        const selectedMonth = !side || side === 'L' ? month : sanitizeMonth(month+1);
        const selectedYear = !side || side === 'L' ? year : month === 12 ? year + 1 : year;
        const selectedDate = getDate(selectedDay, selectedMonth, selectedYear);

        if (!startDate) {
            setStartDate(selectedDate);
        } else if (startDate === selectedDate) {
            setStartDate(null);
            setEndDate(null);
        } else if (selectedDate < startDate) {
            setStartDate(selectedDate);
        } else if (startDate < selectedDate) {
            setEndDate(selectedDate);
        };
    };

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

    return (
        // use UseContext so I don't pass in the same props over and over again
        <>
            {
                windowDimensions.width > 836 ? 
                <div id='calendarContainerInner'>
                    <Calendar todayTime={todayTime} startDate={startDate} endDate={endDate} selectDate={selectDate} month={month} year={year} incrementMonth={incrementMonth} decrementMonth={decrementMonth} side={'L'} />
                    <Calendar todayTime={todayTime} startDate={startDate} endDate={endDate} selectDate={selectDate} month={sanitizeMonth(month + 1)} year={month === 12 ? year + 1 : year} incrementMonth={incrementMonth} decrementMonth={decrementMonth} side={'R'} />
                </div> 
                : 
                <div id='calendarContainerInner'>
                    <Calendar todayTime={todayTime} startDate={startDate} endDate={endDate} selectDate={selectDate} month={month} year={year} incrementMonth={incrementMonth} decrementMonth={decrementMonth}/>
                </div>
            }
        </>
    )  
}

export default CalendarView;