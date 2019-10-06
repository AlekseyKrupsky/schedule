import { createAction, createReducer } from "redux-act";
import axios from "axios";
import { getProcessedSchedule } from "../helpers/lessons";

export const REDUCER = "LESSONS";

const NS = `${REDUCER}__`;

const initialState = {
    group: null,
    selectedSubgroup: 1,
    subgroup_1: null,
    subgroup_2: null,
    isLoading: false
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
    ...items,
    isLoading: false
}));

const readFailure = createAction(`${NS}READ_FAILURE`);
reducer.on(readFailure, (state, error) => ({
    ...state,
    isLoading: false
}));

const selectSubgroupAction = createAction(`${NS}UPDATE_SELECTED_SUBGROUP`);
reducer.on(selectSubgroupAction, (state, number) => ({
    ...state,
    selectedSubgroup: number
}));

export const updateSelectedSubgroup = number => dispatch => {
    dispatch(selectSubgroupAction(number));
};

export const readLessons = (groupId, currentWeek) => dispatch => {
    dispatch(readRequest());
    const apiUrl = "/groups";
    const requestUrl = `${apiUrl}/${groupId}/lessons`;
    console.log(requestUrl);
    
    axios
        .get(requestUrl)
        .then(res => {
            console.log(res);
            const { group, lessons } = res.data;

            const subgroup_1 = getProcessedSchedule(lessons, currentWeek, 1);
            const subgroup_2 = getProcessedSchedule(lessons, currentWeek, 2);

            const payload = {
                group,
                subgroup_1,
                subgroup_2
            };

            dispatch(readSuccess(payload));
        })
        .catch(err => {
            dispatch(readFailure(err));
        });
};

export default reducer;
