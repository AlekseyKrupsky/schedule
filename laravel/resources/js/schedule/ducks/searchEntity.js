import { createAction, createReducer } from "redux-act";
import { entities, searchModes } from "../config/routes";

export const REDUCER = "SEARCH_ENTITY";

const NS = `${REDUCER}__`;

const initialState = {
    entity: entities.groups,
    searchMode: searchModes.lessons
};

const reducer = createReducer({}, initialState);

const updateEntityAction = createAction(`${NS}UPDATE_ENTITY`);
reducer.on(updateEntityAction, (state, entity) => ({
    ...state,
    entity
}));

const updateSearchModAction = createAction(`${NS}UPDATE_SEARCH_MOD`);
reducer.on(updateSearchModAction, (state, searchMode) => ({
    ...state,
    searchMode
}));

const resetAction = createAction(`${NS}RESET`);
reducer.on(resetAction, () => ({ ...initialState }));

export const updateSearchEntity = entityName => dispatch => {
    dispatch(updateEntityAction(entityName));
};

export const updateSearchMode = modName => dispatch => {
    dispatch(updateSearchModAction(modName));
};

export const resetSearchEntity= () => dispatch => {
    dispatch(resetAction());
};

export default reducer;
