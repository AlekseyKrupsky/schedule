import { createAction, createReducer } from "redux-act";
import { days, months } from "../config/main";
import axios from "axios";
import { api } from "../config/api";

export const REDUCER = "LESSONS";

const NS = `${REDUCER}__`;

const initialState = {
    items: {},
    isLoading: true
};

const reducer = createReducer({}, initialState);

const readRequest = createAction(`${NS}READ_REQUEST`);
reducer.on(readRequest, state => ({
    ...state,
    isLoading: true
}));

const readSuccess = createAction(`${NS}READ_SUCCESS`);
reducer.on(readSuccess, (state, items) => ({
    ...state,
    items: items,
    isLoading: false
}));

const readFailure = createAction(`${NS}READ_FAILURE`);
reducer.on(readFailure, (state, error) => ({
    ...state,
    isLoading: false
}));

const sortLessonsByOrder = (a, b) => {
    return a.order - b.order;
};

const processCurrentDay = dayNumber => {
    let processedCurrentDay = dayNumber;

    if (dayNumber === 0) {
        processedCurrentDay = 7;
    }

    return processedCurrentDay;
};

const processLessonDate = lessonDate => {
    const dayNumber = lessonDate.getDay();
    const russianDay = days[dayNumber];

    const monthDayNumber = lessonDate.getDate();

    const monthNumber = lessonDate.getMonth();
    const russianMonth = months[monthNumber];

    const processedDate = `${russianDay}, ${monthDayNumber} ${russianMonth}`;
    return processedDate;
};

const getDateByWeek = (weekNumber, currentWeek, dayNumber) => {
    const currentDate = new Date();
    const currentDay = processCurrentDay(currentDate.getDay());

    let dayDiff = dayNumber - currentDay;

    if (weekNumber !== currentWeek) {
        dayDiff = (weekNumber - currentWeek) * 7;
    }

    const calculatedDate = new Date();
    calculatedDate.setDate(currentDate.getDate() + dayDiff);

    return calculatedDate;
};

const getDays = (lessons, currentWeek) => {
    const weeks = {
        week_1: {},
        week_2: {},
        week_3: {},
        week_4: {}
    };

    const addLesson = (weekNumber, currentWeek, dayNumber, lesson) => {
        const weekKey = `week_${weekNumber}`;
        const dayKey = `day_${dayNumber}`;

        if (!weeks[weekKey][dayKey]) {
            weeks[weekKey][dayKey] = [];
        }

        if (!weeks[weekKey][`day_${dayNumber}_date`]) {
            const lessonDate = getDateByWeek(
                weekNumber,
                currentWeek,
                dayNumber
            );
            
            weeks[weekKey][`day_${dayNumber}_date`] = processLessonDate(
                lessonDate
            );
        }

        weeks[weekKey][dayKey].push(lesson);
    };

    lessons.forEach(lesson => {
        const { pr_1_week, pr_2_week, pr_3_week, pr_4_week, day_num } = lesson;

        if (pr_1_week === 1) {
            addLesson(1, currentWeek, day_num, lesson);
        }

        if (pr_2_week === 1) {
            addLesson(2, currentWeek, day_num, lesson);
        }

        if (pr_3_week === 1) {
            addLesson(3, currentWeek, day_num, lesson);
        }

        if (pr_4_week === 1) {
            addLesson(4, currentWeek, day_num, lesson);
        }
    });

    return weeks;
};

const scheduleParser = lessons => {};

export const readLessons = currentWeek => dispatch => {
    dispatch(readRequest());

    axios
        .get(api.lessons)
        .then(res => {
            const lessons = res.data;

            const sortedLessons = lessons.sort(sortLessonsByOrder);

            const weeks = getDays(sortedLessons, 1);
            console.log(weeks);

            dispatch(readSuccess(weeks));
        })
        .catch(err => {
            dispatch(readFailure(err));
        });
};

export default reducer;
