import dayjs from "dayjs";


/**
 * 
 * @param {Date} viewDate 
 * @returns {Array<Array>}
 */
export const getMonth = (viewDate) => {
    const year = dayjs(viewDate).year();
    const firstDay = dayjs(new Date(year, viewDate.getMonth(), 1)).day();
    let currentMonthNum = 0 - firstDay;
    
    const result = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthNum++
            return dayjs(new Date(year, viewDate.getMonth(), currentMonthNum))
        });
    });
    return result
};