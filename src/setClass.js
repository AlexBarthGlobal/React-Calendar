import monthInfo from './monthInfo';

const setClass = (currDate, startDate, endDate) => {
    if (currDate === startDate || currDate === endDate) return 'selectedDate';
    else if (endDate && startDate < currDate && currDate < endDate) return 'betweenDate';
};



export default setClass