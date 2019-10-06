import { createApiDuck } from "./duckApiFactory";
import { groups } from "../config/api";
import { restApiRequest } from "../services/apiRequestService";

const REDUCER_NAME = "GROUPS";

const {
    reducer,
    readRequest,
    readSuccess,
    readFailure,
} = createApiDuck(REDUCER_NAME);

export const readGroups = () => dispatch => {
    dispatch(readRequest());

    restApiRequest(groups.read).then(
        responseData => {
            dispatch(readSuccess(responseData));
        },
        err => {
            dispatch(readFailure(err));
        }
    );
};

export default reducer;
