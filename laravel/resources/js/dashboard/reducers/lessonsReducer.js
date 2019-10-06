//import { GET_POSTS } from "../actions/postActions";

const REDUCER = "LESSONS";

const NS = `${REDUCER}__`;

const initialState = {
    items: [],
    isLoading: false
};

const readRequest = `${NS}READ_REQUEST`;

const readSuccess = `${NS}READ_SUCCESS`;

export const lessonsReducer = (state = [], { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
};
