import { createApiDuck } from "./duckApiFactory";
import { addToast } from "./toasts";
import { faculties } from "../config/api";
import { toast } from "../config/toast";
import { messages } from "../config/messages";
import { restApiRequest } from "../services/apiRequestService";

const REDUCER_NAME = "FACULTIES";

const {
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
} = createApiDuck(REDUCER_NAME);

export const readFaculties = () => dispatch => {
    dispatch(readRequest());

    restApiRequest(faculties.read).then(
        responseData => {
            dispatch(readSuccess(responseData));
        },
        err => {
            dispatch(readFailure(err));
        }
    );
};

export const storeFaculty = facultyData => dispatch => {
    dispatch(storeRequest());

    return restApiRequest(faculties.store, facultyData).then(
        responseData => {
            dispatch(storeSuccess(responseData));

            dispatch(
                addToast({
                    content: messages.facultyCreated,
                    config: toast.success
                })
            );
        },
        error => {
            dispatch(storeFailure());
            throw error;
        }
    );
};

export const updateFaculty = faculty => dispatch => {
    dispatch(updateRequest());

    return restApiRequest(faculties.update, faculty).then(
        updatedFaculty => {
            dispatch(updateSuccess(updatedFaculty));

            dispatch(
                addToast({
                    content: messages.facultyUpdated,
                    config: toast.info
                })
            );
        },
        error => {
            dispatch(updateFailure());
            throw error;
        }
    );
};

export const destroyFaculty = faculty => dispatch => {
    dispatch(destroyRequest());

    return restApiRequest(faculties.destroy, faculty).then(
        () => {
            dispatch(destroySuccess(faculty));

            dispatch(
                addToast({
                    content: messages.facultyDeleted,
                    config: toast.warning
                })
            );
        },
        error => {
            dispatch(destroyFailure());
            throw error;
        }
    );
};

export default reducer;
