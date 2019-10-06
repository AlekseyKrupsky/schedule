import { createAction, createReducer } from "redux-act";

export const REDUCER = "GROUP_INFO";

const NS = `${REDUCER}__`;

const initialState = {
    group: null,
    selectedSubgroup: 1
};

const reducer = createReducer({}, initialState);

const selectGroupAction = createAction(`${NS}UPDATE_SELECTED_GROUP`);
reducer.on(selectGroupAction, (state, group) => ({
    ...state,
    group
}));

const selectSubgroupAction = createAction(`${NS}UPDATE_SELECTED_SUBGROUP`);
reducer.on(selectSubgroupAction, (state, number) => ({
    ...state,
    selectedSubgroup: number
}));

export const updateSelectedGroup = group => dispatch => {
    dispatch(selectGroupAction(group));
};

export const updateSelectedSubgroup = number => dispatch => {
    dispatch(selectSubgroupAction(number));
};

export default reducer;
