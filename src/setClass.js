const setClass = (currDate, startDate, endDate, todayTime, calendarMax, hoverDate) => {
    if (currDate < todayTime || currDate > calendarMax) return ['inactive']
    if (currDate === startDate) {
        if (!endDate) return ['selectedDate'];
        else return ['selectedDate', 'startDateBackground']
    } else if (currDate === endDate) return ['selectedDate', 'endDateBackground']
    // else if (startDate && hoverDate && startDate < currDate && currDate < hoverDate) {
    //     return ['betweenDate']
    // }
    else if (startDate < currDate && currDate < endDate) {
        if (currDate === hoverDate) return ['hoverDate', 'betweenDate']
        else return ['betweenDate'];
    } else if (currDate === hoverDate) return ['hoverDate']
    else return [];
};

export default setClass