import { createAction, createReducer } from "redux-act";

export const createDialogDuck = reducerName => {
    const REDUCER = reducerName;

    const NS = `${REDUCER}__`;

    const initialState = {
        isCreateDialogOpen: false,
        isUpdateDialogOpen: false,
        isDeleteDialogOpen: false,
        selectedItem: null
    };

    const reducer = createReducer({}, initialState);

    const showCreateDialogAction = createAction(`${NS}SHOW_CREATE_DIALOG`);
    reducer.on(showCreateDialogAction, () => ({
        ...initialState,
        isCreateDialogOpen: true
    }));

    const hideCreateDialogAction = createAction(`${NS}HIDE_CREATE_DIALOG`);
    reducer.on(hideCreateDialogAction, () => initialState);

    const showUpdateDialogAction = createAction(`${NS}SHOW_UPDATE_DIALOG`);
    reducer.on(showUpdateDialogAction, (state, selectedItem) => ({
        ...initialState,
        selectedItem,
        isUpdateDialogOpen: true
    }));

    const hideUpdateDialogAction = createAction(`${NS}HIDE_UPDATE_DIALOG`);
    reducer.on(hideUpdateDialogAction, () => initialState);

    const showDeleteDialogAction = createAction(`${NS}SHOW_DELETE_DIALOG`);
    reducer.on(showDeleteDialogAction, (state, selectedItem) => ({
        ...initialState,
        selectedItem,
        isDeleteDialogOpen: true
    }));

    const hideDeleteDialogAction = createAction(`${NS}HIDE_DELETE_DIALOG`);
    reducer.on(hideDeleteDialogAction, () => initialState);

    return {
        reducer,
        showCreateDialogAction,
        hideCreateDialogAction,
        showUpdateDialogAction,
        hideUpdateDialogAction,
        showDeleteDialogAction,
        hideDeleteDialogAction
    };
};
