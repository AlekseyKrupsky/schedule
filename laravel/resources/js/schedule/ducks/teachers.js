import { createApiDuck } from "./duckApiFactory";
import { teachers } from "../config/api";
import { restApiRequest } from "../services/apiRequestService";

const REDUCER_NAME = "TEACHERS";

const {
    reducer,
    readRequest,
    readSuccess,
    readFailure,
} = createApiDuck(REDUCER_NAME);

export const readTeachers = () => dispatch => {
    dispatch(readRequest());

    restApiRequest(teachers.read).then(
        responseData => {
            dispatch(readSuccess(responseData));
        },
        err => {
            dispatch(readFailure(err));
        }
    );
};

export default reducer;
