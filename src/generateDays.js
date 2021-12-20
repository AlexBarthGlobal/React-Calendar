import monthInfo from './monthInfo';
import getDate from './getDate'
import setClass from './setClass'

const generateDays = (month, year, startDate, endDate) => {
    const output = [];
    let calEntry = 1, i = 1, j = 0, weekCount = 0;
    let startDay = new Date(`${month} 1, ${year}`).getDay();
    while (i <= monthInfo[month][1]) {
        let week = [];
        while (j <= 6 && i <= monthInfo[month][1]) {
            if (calEntry <= startDay) week.push(<td key={calEntry}></td>)
            else {
                const cls = setClass(getDate(i, month, year), startDate, endDate);
                week.push(<td className={cls} key={calEntry}>{i}</td>)
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