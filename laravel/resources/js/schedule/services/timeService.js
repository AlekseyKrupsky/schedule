export const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
];

export const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];

const getCountDaysBetweenDates = (date1, date2) => {
    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms);

    // Convert back to days and return
    return Math.round(difference_ms / ONE_DAY);
};

const getProcessedStartDate = startDate => {
    const dayNumber = startDate.getDay();

    if (dayNumber === 1) {
        return startDate;
    }

    if (dayNumber === 0) {
        startDate.setDate(startDate.getDate() - 6);
        return startDate;
    }

    startDate.setDate(startDate.getDate() - (dayNumber - 1));
    return startDate;
};

const getFirstWeekDate = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getDay();
    const currentYear = currentDate.getFullYear();

    const septemberMonthNum = 8;

    let startStudingDate = null;

    if (currentMonth >= septemberMonthNum) {
        startStudingDate = new Date(currentYear, septemberMonthNum, 1);
    } else {
        const previousYear = currentYear - 1;
        startStudingDate = new Date(previousYear, septemberMonthNum, 1);
    }

    const firtWeekStartDate = getProcessedStartDate(startStudingDate);

    return firtWeekStartDate;
};

export const getCurrentWeek = () => {
    const startDate = getFirstWeekDate();
    const currentDate = new Date();

    const countDiffDays = getCountDaysBetweenDates(currentDate, startDate);
    const countWeeks = Math.ceil(countDiffDays / 7); // last week can not be full

    if (countWeeks === 0) {
        return 1;
    }

    const currentWeek = countWeeks % 4;

    if (currentWeek === 0) {
        return 4;
    }

    return currentWeek;
};
