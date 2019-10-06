import { createAction, createReducer } from "redux-act";

export const REDUCER = "SIDEBAR";

const NS = `${REDUCER}__`;

const initialState = {
    isOpen: true
};

const reducer = createReducer({}, initialState);

const toggleAction = createAction(`${NS}TOGGLE`);
reducer.on(toggleAction, (state) => ({
    isOpen: ! state.isOpen
}));

export const toggleSidebar = () => (dispatch) => {
    dispatch(toggleAction());
};

export default reducer;
