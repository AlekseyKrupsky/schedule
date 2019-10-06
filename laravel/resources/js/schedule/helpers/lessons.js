import { getDateByWeek, processLessonDate } from "./date";

const addLesson = (
    weeks,
    weekNumber,
    currentWeek,
    dayNumber,
    lesson = null
) => {
    const weekKey = `week_${weekNumber}`;
    const dayKey = `day_${dayNumber}`;
    const week = weeks[weekKey];

    if (!week[dayKey]) {
        week[dayKey] = {
            date: "",
            lessons: []
        };
    }

    if (!week[dayKey].date) {
        const lessonDate = getDateByWeek(weekNumber, currentWeek, dayNumber);
        week[dayKey].date = processLessonDate(lessonDate);
    }

    if (lesson) {
        week[dayKey].lessons.push(lesson);
    }
};

const addEmtyDayInfo = (weeks, currentWeek, maxDaysCount = 6) => {
    const maxWeeksCount = 4;

    for (let weekNumber = 1; weekNumber <= maxWeeksCount; weekNumber++) {
        for (let dayNumber = 1; dayNumber <= maxDaysCount; dayNumber++) {
            addLesson(weeks, weekNumber, currentWeek, dayNumber);
        }
    }
};

const sortLessonsByOrder = (a, b) => {
    return a.order - b.order;
};

const getSortedLessons = lessons => {
    return lessons.sort(sortLessonsByOrder);
};

const filterLessonsBySubgroup = (lessons, subgroup = 1) => {
    return lessons.filter(lesson => {
        let addToResult = false;

        const { subgroup_1, subgroup_2 } = lesson;

        if (subgroup === 1 && subgroup_1) {
            addToResult = true;
        }

        if (subgroup === 2 && subgroup_2) {
            addToResult = true;
        }

        if (subgroup_1 && subgroup_2) {
            addToResult = true;
        }

        return addToResult;
    });
};

export const getProcessedSchedule = (
    lessons = [],
    currentWeek,
    subgroup = null
) => {
    const weeks = {
        week_1: {},
        week_2: {},
        week_3: {},
        week_4: {}
    };

    let filteredLessons = lessons;

    if (subgroup) {
        filteredLessons = filterLessonsBySubgroup(lessons, subgroup);
    }

    const sortedLessons = getSortedLessons(filteredLessons);

    sortedLessons.forEach(lesson => {
        const { pr_1_week, pr_2_week, pr_3_week, pr_4_week, day_num } = lesson;

        if (pr_1_week === 1) {
            addLesson(weeks, 1, currentWeek, day_num, lesson);
        }

        if (pr_2_week === 1) {
            addLesson(weeks, 2, currentWeek, day_num, lesson);
        }

        if (pr_3_week === 1) {
            addLesson(weeks, 3, currentWeek, day_num, lesson);
        }

        if (pr_4_week === 1) {
            addLesson(weeks, 4, currentWeek, day_num, lesson);
        }
    });

    addEmtyDayInfo(weeks, currentWeek);

    return weeks;
};
