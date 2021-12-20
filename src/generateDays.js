import monthInfo from './monthInfo';
import getDate from './getDate'
import setClass from './setClass'

const generateDays = (month, year, startDate, endDate, todayTime, calendarMax, setHoverDate, hoverDate) => {
    const output = [];
    let calEntry = 1, i = 1, j = 0, weekCount = 0;
    let startDay = new Date(`${month} 1, ${year}`).getDay();
    while (i <= monthInfo[month][1]) {
        let week = [];
        while (j <= 6 && i <= monthInfo[month][1]) {
            if (calEntry <= startDay) week.push(<td className='inactive' key={calEntry}></td>)
            else {
                const currDate = getDate(i, month, year);
                const cls = setClass(currDate, startDate, endDate, todayTime, calendarMax, hoverDate);
                let fade = null;
                if (i === 1 && (cls[0] === 'betweenDate' || cls[0] === 'selectedDate' && endDate === currDate || cls[0] === 'hoverDate' && cls[1] === 'betweenDate')) fade = <div className='fadeStart'></div>
                else if (i === monthInfo[month][1] && (cls[0] === 'betweenDate' || cls[0] === 'selectedDate' && startDate === currDate && endDate || cls[0] === 'hoverDate' && cls[1] === 'betweenDate')) fade = <div className='fadeEnd'></div>
                week.push(<td onMouseEnter={() => setHoverDate(currDate)} className={`${cls[1] ? cls[1] : ''}`} key={calEntry}>{fade}<div className={cls[0]}>{i}</div></td>)
                i++;
            };
            j++;
            calEntry++;
        };
        j = 0;
        output.push(<tr key={weekCount}>{week}</tr>)
        weekCount++;
    };
    return output;
};

export default generateDays