import { createApiDuck } from "./duckApiFactory";
import { addToast } from "./toasts";
import { lessonTypes as apiUrls } from "../config/api";
import { toast } from "../config/toast";
import { lessonTypes as messages } from "../config/messages";
import { restApiRequest } from "../services/apiRequestService";

const REDUCER_NAME = "LESSON_TYPES";

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

export const readLessonTypes = () => dispatch => {
    dispatch(readRequest());

    restApiRequest(apiUrls.read).then(
        responseData => {
            dispatch(readSuccess(responseData));
        },
        err => {
            dispatch(readFailure(err));
        }
    );
};

export const storeLessonType= requestData => dispatch => {
    dispatch(storeRequest());

    return restApiRequest(apiUrls.store, requestData).then(
        responseData => {
            dispatch(storeSuccess(responseData));

            dispatch(
                addToast({
                    content: messages.created,
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

export const updateLessonType = requestData => dispatch => {
    dispatch(updateRequest());

    return restApiRequest(apiUrls.update, requestData).then(
        responseData => {
            dispatch(updateSuccess(responseData));

            dispatch(
                addToast({
                    content: messages.updated,
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

export const destroyLessonType = requestData => dispatch => {
    dispatch(destroyRequest());

    return restApiRequest(apiUrls.destroy, requestData).then(
        () => {
            dispatch(destroySuccess(requestData));

            dispatch(
                addToast({
                    content: messages.deleted,
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
