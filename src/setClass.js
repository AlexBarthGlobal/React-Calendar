const setClass = (currDate, startDate, endDate, todayTime, calendarMax, hoverDate) => {
    if (currDate < todayTime || currDate > calendarMax) return ['inactive']
    if (currDate === startDate) {
        if (!endDate) return ['selectedDate'];
        else return ['selectedDate', 'startDateBackground']
    } else if (currDate === endDate || startDate && !endDate && currDate === hoverDate) {
        if (hoverDate > startDate) return ['selectedDate', 'endDateBackground']
        else return ['selectedDate']
    } else if (startDate && hoverDate && startDate < currDate && currDate < hoverDate) {
        if (endDate && currDate > endDate) {
            if (currDate === hoverDate) return ['hoverDate'];
            else return [];
        } else return ['betweenDate']
    }
    else if (startDate < currDate && currDate < endDate) {
        if (currDate === hoverDate) return ['hoverDate', 'betweenDate']
        else return ['betweenDate'];
    } else if (currDate === hoverDate) return ['hoverDate']
    else return [];
};

export default setClass