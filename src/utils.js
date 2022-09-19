import dayjs from "dayjs";


export const getMonth = (month = dayjs().month()) => {
    const year = dayjs().year();
    const firstDay = dayjs(new Date(year, month, 1)).day();
    let currentMonthNum = 0 - firstDay;

    return new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthNum++
            return dayjs(new Date(year, month, currentMonthNum))
        });
    });
};