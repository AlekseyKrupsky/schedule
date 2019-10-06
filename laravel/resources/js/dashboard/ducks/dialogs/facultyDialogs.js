import { createDialogDuck } from "./duckDialogFactory";

const REDUCER_NAME = "FACULTY_DIALOGS";

const {
    reducer,
    showCreateDialogAction,
    hideCreateDialogAction,
    showUpdateDialogAction,
    hideUpdateDialogAction,
    showDeleteDialogAction,
    hideDeleteDialogAction
} = createDialogDuck(REDUCER_NAME);

export const showCreateDialog = () => dispatch => {
    dispatch(showCreateDialogAction());
};

export const hideCreateDialog = () => dispatch => {
    dispatch(hideCreateDialogAction());
};

export const showUpdateDialog = (item) => dispatch => {
    dispatch(showUpdateDialogAction(item));
};

export const hideUpdateDialog = () => dispatch => {
    dispatch(hideUpdateDialogAction());
};

export const showDeleteDialog = (item) => dispatch => {
    dispatch(showDeleteDialogAction(item));
};

export const hideDeleteDialog = () => dispatch => {
    dispatch(hideDeleteDialogAction());
};

export default reducer;
