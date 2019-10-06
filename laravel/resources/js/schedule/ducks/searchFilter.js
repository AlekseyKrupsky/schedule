import { createAction, createReducer } from "redux-act";

export const REDUCER = "SEARCH_FILTER";

const NS = `${REDUCER}__`;

const initialState = "";

const reducer = createReducer({}, initialState);

const updateAction = createAction(`${NS}UPDATE`);
reducer.on(updateAction, (state, value) => {
    return value;
});

const resetAction = createAction(`${NS}RESET`);
reducer.on(resetAction, () => "");

export const updateFilter = filterValue => dispatch => {
    dispatch(updateAction(filterValue));
};

export const resetFilter = () => dispatch => {
    dispatch(resetAction());
};

export default reducer;
