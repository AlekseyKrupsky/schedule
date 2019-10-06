import { createAction, createReducer } from "redux-act";
import axios from "axios";
import { getProcessedSchedule } from "../helpers/lessons";

export const REDUCER = "TEACHER";

const NS = `${REDUCER}__`;

const initialState = {
    teacher: null,
    schedule: null,
    isLoading: false
};

const reducer = createReducer({}, initialState);

const readRequest = createAction(`${NS}READ_REQUEST`);
reducer.on(readRequest, state => ({
    ...state,
    isLoading: true
}));

const readSuccess = createAction(`${NS}READ_SUCCESS`);
reducer.on(readSuccess, (state, payload) => ({
    ...state,
    ...payload,
    isLoading: false
}));

const readFailure = createAction(`${NS}READ_FAILURE`);
reducer.on(readFailure, (state, error) => ({
    ...state,
    isLoading: false
}));

export const updateSelectedSubgroup = number => dispatch => {
    dispatch(selectSubgroupAction(number));
};

export const readLessons = (groupId, currentWeek) => dispatch => {
    dispatch(readRequest());
    const apiUrl = "/teachers";
    const requestUrl = `${apiUrl}/${groupId}/lessons`;
    console.log(requestUrl);

    axios
        .get(requestUrl)
        .then(res => {
            console.log(res);
            const { teacher, lessons } = res.data;
            const schedule = getProcessedSchedule(lessons, currentWeek);

            const payload = {
                teacher,
                schedule
            };

            dispatch(readSuccess(payload));
        })
        .catch(err => {
            dispatch(readFailure(err));
        });
};

export default reducer;
