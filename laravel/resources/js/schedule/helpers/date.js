import { months, days } from "../config/main";

const processCurrentDay = dayNumber => {
    let processedCurrentDay = dayNumber;

    if (dayNumber === 0) {
        processedCurrentDay = 7;
    }

    return processedCurrentDay;
};

export const getDateByWeek = (weekNumber, currentWeek, dayNumber) => {
    const currentDate = new Date();
    const currentDay = processCurrentDay(currentDate.getDay());

    let dayDiff = dayNumber - currentDay;

    if (weekNumber !== currentWeek) {
        dayDiff += (weekNumber - currentWeek) * 7;
    }

    const calculatedDate = new Date();
    calculatedDate.setDate(currentDate.getDate() + dayDiff);

    return calculatedDate;
};

export const processLessonDate = lessonDate => {
    const dayNumber = lessonDate.getDay();
    const russianDay = days[dayNumber];

    const monthDayNumber = lessonDate.getDate();

    const monthNumber = lessonDate.getMonth();
    const russianMonth = months[monthNumber];

    const processedDate = `${russianDay}, ${monthDayNumber} ${russianMonth}`;
    return processedDate;
};
