import { createAction, createReducer } from "redux-act";

export const createApiDuck = reducerName => {
    const REDUCER = reducerName;

    const NS = `${REDUCER}__`;

    const initialState = {
        items: [],
        isLoading: true
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
        items: items,
        isLoading: false
    }));

    const readFailure = createAction(`${NS}READ_FAILURE`);
    reducer.on(readFailure, (state, error) => ({
        ...state,
        isLoading: false
    }));

    const storeRequest = createAction(`${NS}STORE_REQUEST`);
    reducer.on(storeRequest, state => ({
        ...state,
        isLoading: true
    }));

    const storeSuccess = createAction(`${NS}STORE_SUCCESS`);
    reducer.on(storeSuccess, (state, createdItem) => ({
        items: [...state.items, createdItem],
        isLoading: false
    }));

    const storeFailure = createAction(`${NS}STORE_FAILURE`);
    reducer.on(storeFailure, state => ({
        ...state,
        isLoading: false
    }));

    const updateRequest = createAction(`${NS}UPDATE_REQUEST`);
    reducer.on(updateRequest, state => ({
        ...state,
        isLoading: true
    }));

    const updateSuccess = createAction(`${NS}UPDATE_SUCCESS`);
    reducer.on(updateSuccess, (state, updatedItem) => ({
        items: [
            ...state.items.map(item => {
                return item.id === updatedItem.id ? updatedItem : item;
            })
        ],
        isLoading: false
    }));

    const updateFailure = createAction(`${NS}UPDATE_FAILURE`);
    reducer.on(updateFailure, state => ({
        ...state,
        isLoading: false
    }));

    const destroyRequest = createAction(`${NS}DESTROY_REQUEST`);
    reducer.on(destroyRequest, state => ({
        ...state,
        isLoading: true
    }));

    const destroySuccess = createAction(`${NS}DESTROY_SUCCESS`);
    reducer.on(destroySuccess, (state, deletedItem) => ({
        items: [...state.items.filter(item => item.id !== deletedItem.id)],
        isLoading: false
    }));

    const destroyFailure = createAction(`${NS}DESTROY_FAILURE`);
    reducer.on(destroyFailure, state => ({
        ...state,
        isLoading: false
    }));

    return {
        reducer,
        readRequest,
        readSuccess,
        readFailure,
        storeRequest,
        storeSuccess,
        storeFailure,
        updateRequest,
        updateSuccess,
        updateFailure,
        destroyRequest,
        destroySuccess,
        destroyFailure
    };
};
