const setClass = (currDate, startDate, endDate) => {
    // if (currDate === startDate || currDate === endDate) return 'selectedDate';
    if (currDate === startDate) {
        if (!endDate) return ['selectedDate'];
        else return ['selectedDate', 'startDateBackground']
    } else if (currDate === endDate) return ['selectedDate', 'endDateBackground']
    else if (endDate && startDate < currDate && currDate < endDate) return ['betweenDate'];
    else return [];
};

export default setClass