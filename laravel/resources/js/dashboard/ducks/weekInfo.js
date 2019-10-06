import { createAction, createReducer } from "redux-act";
import { getCurrentWeek } from "../services/timeService";

export const REDUCER = "WEEK_INFO";

const NS = `${REDUCER}__`;

const currentWeek = getCurrentWeek();

const initialState = {
    currentWeek: currentWeek,
    selectedWeek: currentWeek,
};

const reducer = createReducer({}, initialState);

const selectWeekAction = createAction(`${NS}UPDATE_SELECTED_WEEK`);
reducer.on(selectWeekAction, (state, value) => ({
    selectedWeek: value
}));

export const updateSelectedWeek = (number) => (dispatch) => {
    dispatch(selectWeekAction(number));
};

export default reducer;
