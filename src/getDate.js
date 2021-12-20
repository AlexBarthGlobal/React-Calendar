const getDate = (day, month, year) => {
    return new Date(`${month} ${day}, ${year}`).getTime();
};

export default getDate