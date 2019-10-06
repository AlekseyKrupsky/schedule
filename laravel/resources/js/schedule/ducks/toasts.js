import { createAction, createReducer } from "redux-act";

export const REDUCER = "TOASTS";

const NS = `${REDUCER}__`;

const initialState = [];

const reducer = createReducer({}, initialState);

const addToastAction = createAction(`${NS}ADD`);
reducer.on(addToastAction, (state, toast) => {
    return [...state, toast];
});

const resetToastsAction = createAction(`${NS}RESET`);
reducer.on(resetToastsAction, () => []);

export const addToast = toast => dispatch => {
    dispatch(addToastAction(toast));
};

export const resetToasts = () => dispatch => {
    dispatch(resetToastsAction());
};

export default reducer;
